/**
 * Chat Service Abstraction for Asraful AI
 * Provides a clean interface separating UI from AI providers (Gemini / Server API / Local Knowledge Fallback)
 */

import { PORTFOLIO_KNOWLEDGE } from '../data/portfolioKnowledge';

export interface ChatMessage {
  id: string;
  sender: 'user' | 'assistant';
  text: string;
  timestamp: Date;
  suggestions?: string[];
  actions?: {
    label: string;
    actionType: 'navigate' | 'filter_projects' | 'custom_prompt';
    target: string;
  }[];
  projectCards?: {
    id: string;
    title: string;
    category: string;
    technologies: string[];
    description: string;
  }[];
}

export type ChatMode = 'general' | 'project_discovery' | 'hiring';

export interface ChatResponse {
  text: string;
  suggestions?: string[];
  actions?: {
    label: string;
    actionType: 'navigate' | 'filter_projects' | 'custom_prompt';
    target: string;
  }[];
  projectCards?: {
    id: string;
    title: string;
    category: string;
    technologies: string[];
    description: string;
  }[];
}

class ChatService {
  private apiEndpoint = '/api/chat';

  /**
   * Primary entry point for sending a message
   */
  async sendMessage(
    userText: string,
    history: ChatMessage[],
    activeMode: ChatMode = 'general'
  ): Promise<ChatResponse> {
    const trimmed = userText.trim();
    if (!trimmed) {
      return {
        text: "Please type a question or select one of the suggested topics below.",
        suggestions: ['Who is Asraful?', 'What are his skills?', 'Show me his projects'],
      };
    }

    // Attempt Server API call if available
    try {
      const serverRes = await this.callServerChatApi(trimmed, history, activeMode);
      if (serverRes && serverRes.text) {
        return serverRes;
      }
    } catch {
      // Fallback seamlessly to local intelligent reasoning engine
    }

    // Execute local intelligent reasoning engine
    return this.generateKnowledgeResponse(trimmed, history, activeMode);
  }

  /**
   * Server API Call (calls Express /api/chat with Gemini)
   */
  private async callServerChatApi(
    message: string,
    history: ChatMessage[],
    mode: ChatMode
  ): Promise<ChatResponse | null> {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 6000);

    try {
      const response = await fetch(this.apiEndpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        signal: controller.signal,
        body: JSON.stringify({
          message,
          mode,
          history: history.slice(-6).map((h) => ({
            role: h.sender === 'user' ? 'user' : 'model',
            text: h.text,
          })),
        }),
      });

      clearTimeout(timeoutId);

      if (!response.ok) {
        return null;
      }

      const data = await response.json();
      return data;
    } catch {
      clearTimeout(timeoutId);
      return null;
    }
  }

  /**
   * Local Knowledge-Based Reasoning Engine
   * Deterministic, zero-hallucination, context-aware reasoning on PORTFOLIO_KNOWLEDGE
   */
  generateKnowledgeResponse(
    message: string,
    history: ChatMessage[],
    mode: ChatMode
  ): ChatResponse {
    const lower = message.toLowerCase();
    const lastUserTurn = history.filter((m) => m.sender === 'user').slice(-2);
    const lastAssistantTurn = history.filter((m) => m.sender === 'assistant').slice(-1)[0];
    const prevContext = lastAssistantTurn ? lastAssistantTurn.text.toLowerCase() : '';

    // 1. Hiring Mode Flow
    if (
      mode === 'hiring' ||
      lower.includes("i'm looking for a developer") ||
      lower.includes('look for a developer') ||
      lower.includes('hire asraful') ||
      lower.includes('want to hire')
    ) {
      if (
        lower.includes('website') ||
        lower.includes('web application') ||
        lower.includes('e-commerce') ||
        lower.includes('backend') ||
        lower.includes('ai application') ||
        lower.includes('automation')
      ) {
        return {
          text: `Excellent. Asraful builds production-ready ${message} solutions with clean code, secure APIs, and responsive design. Let's discuss your timeline, technical requirements, and goals directly.`,
          suggestions: ['How can I contact him?', 'Show me his projects', 'What is his stack?'],
          actions: [
            { label: 'Discuss the Project →', actionType: 'navigate', target: '#contact' },
            { label: 'Explore Projects →', actionType: 'navigate', target: '#projects' },
          ],
        };
      }

      return {
        text: "Great! I can help you understand what Asraful can build. What are you looking to build?",
        suggestions: [
          'Website',
          'Web Application',
          'E-Commerce Platform',
          'Backend / API',
          'AI Application',
          'Automation System',
        ],
        actions: [
          { label: "Let's Discuss the Project →", actionType: 'navigate', target: '#contact' },
        ],
      };
    }

    // 2. Project Discovery Mode
    if (
      mode === 'project_discovery' ||
      lower.includes('find the right project') ||
      lower.includes('project discovery')
    ) {
      if (lower.includes('e-commerce') || lower.includes('ecommerce') || lower.includes('store') || lower.includes('bigbiz') || lower.includes('social commerce')) {
        const p = PORTFOLIO_KNOWLEDGE.projects.find((pr) => pr.id === 'bigbiz');
        return {
          text: "Here is Bigbiz, Asraful's featured social commerce platform built with Next.js, Go, PostgreSQL, Redis, and Cloudinary, integrated with Chain Hook Wallet:",
          projectCards: p ? [p] : [],
          suggestions: ['Tell me about the tech stack', 'Show me Chain Hook Wallet', 'Contact Asraful'],
          actions: [{ label: 'View Bigbiz Project →', actionType: 'navigate', target: '#projects' }],
        };
      }

      if (lower.includes('trading') || lower.includes('nextrade') || lower.includes('dashboard') || lower.includes('crypto') || lower.includes('wallet')) {
        const p = PORTFOLIO_KNOWLEDGE.projects.filter((pr) => pr.id === 'nextrade' || pr.id === 'chain-hook-wallet');
        return {
          text: "Here are Asraful's featured fintech and trading applications: NexTrade (Angular + Express) and Chain Hook Wallet (React + Django):",
          projectCards: p,
          suggestions: ['NexTrade details', 'Chain Hook Wallet details', 'Contact Asraful'],
          actions: [{ label: 'View Projects →', actionType: 'navigate', target: '#projects' }],
        };
      }

      if (lower.includes('ai') || lower.includes('machine learning') || lower.includes('vision') || lower.includes('car')) {
        const aiProjects = PORTFOLIO_KNOWLEDGE.projects.filter(
          (pr) => pr.id === 'car-damage-detection' || pr.id === 'ai-automation-system'
        );
        return {
          text: "Here are the AI and Computer Vision projects you may want to explore:",
          projectCards: aiProjects,
          suggestions: ['Car damage detection details', 'AI automation details', 'What can he build?'],
          actions: [{ label: 'View Featured Projects →', actionType: 'navigate', target: '#projects' }],
        };
      }

      return {
        text: "What kind of project are you interested in exploring?",
        suggestions: [
          'NexTrade (Trading)',
          'Chain Hook Wallet (Crypto)',
          'Bigbiz (Social Commerce)',
          'AI / Computer Vision',
          'Automation System',
        ],
      };
    }

    // 3. Pronoun / Context Memory Resolution
    if (
      (lower.includes('use them') || lower.includes('which projects use') || lower.includes('using them')) &&
      prevContext.includes('backend')
    ) {
      return {
        text: "Asraful's featured projects utilize these backend technologies:\n• Bigbiz uses a Go server, Neon PostgreSQL & Upstash Redis\n• Chain Hook Wallet uses Django (Python) & PostgreSQL\n• NexTrade uses Express.js & Firebase\n• AI Damage Detection uses FastAPI",
        suggestions: ['Show me his projects', 'What databases does he use?', 'Contact Asraful'],
        actions: [{ label: 'View All Projects →', actionType: 'navigate', target: '#projects' }],
      };
    }

    // 4. Mobile Inquiry -> Flutter & Android
    if (lower.includes('mobile') || lower.includes('flutter') || lower.includes('android') || lower.includes('ios app') || lower.includes('dart')) {
      return {
        text: "Asraful builds cross-platform mobile applications using Flutter and Dart. He leverages reactive state architectures including BLoC, Rx-Dart, and Provider, alongside native Android (Java) fundamentals.",
        suggestions: ['Show me his skills', 'What backend tools does he pair with it?', 'Contact Asraful'],
        actions: [
          { label: 'View Skills →', actionType: 'navigate', target: '#skills' },
          { label: 'Discuss Mobile App →', actionType: 'navigate', target: '#contact' },
        ],
      };
    }

    // 5. Who is Asraful?
    if (lower.includes('who is asraful') || lower.includes('who are you') || lower.includes('tell me about asraful') || lower.includes('about asraful') || lower.includes('introduce asraful')) {
      return {
        text: "Asraful is a Full-Stack Developer and AI Developer from Bangladesh. He specializes in building smart, modern web and mobile applications with 30+ technologies across 5+ core domains.",
        suggestions: ['What are his skills?', 'Show me his projects', 'What can he build?'],
        actions: [{ label: 'About Asraful →', actionType: 'navigate', target: '#about' }],
      };
    }

    // 6. Strongest Area & Domains
    if (lower.includes('strongest area') || lower.includes('main focus') || lower.includes('specialty') || lower.includes('specialization') || lower.includes('domain')) {
      return {
        text: "His primary focus is Full-Stack Web Development (React, Next.js, Angular, Node.js), with secondary focus in Mobile App Development (Flutter) and AI / Machine Learning (TensorFlow, Scikit-learn, LLMs).",
        suggestions: ['What can he build?', 'What are his skills?', 'Show me his projects'],
        actions: [{ label: 'View Skills →', actionType: 'navigate', target: '#skills' }],
      };
    }

    // 7. What can he build? / Capabilities
    if (
      lower.includes('what can he build') ||
      lower.includes('what can you build') ||
      lower.includes('capabilities') ||
      lower.includes('what kind of projects') ||
      lower.includes('services')
    ) {
      return {
        text: "He can build full-stack web applications, e-commerce marketplaces (Bigbiz), trading platforms (NexTrade), crypto wallets (Chain Hook Wallet), cross-platform Flutter mobile apps, real-time WebSockets, and AI vision/automation systems.",
        suggestions: ['Show me his projects', 'What technologies do you use?', 'How can I contact him?'],
        actions: [
          { label: 'View Projects →', actionType: 'navigate', target: '#projects' },
          { label: 'Contact Asraful →', actionType: 'navigate', target: '#contact' },
        ],
      };
    }

    // 8. Why should I work with him?
    if (lower.includes('why should i work') || lower.includes('why hire') || lower.includes('why asraful') || lower.includes('advantages')) {
      return {
        text: "Asraful's superpower is how fast he adapts to new technologies in record time. With 30+ technologies and 5+ domains under his belt, he brings relentless curiosity, clean architecture, and rapid execution to any engineering team.",
        suggestions: ['What can he build?', 'Show me his projects', 'How can I contact him?'],
        actions: [
          { label: 'View Development Journey →', actionType: 'navigate', target: '#journey' },
          { label: 'Get in Touch →', actionType: 'navigate', target: '#contact' },
        ],
      };
    }

    // 9. Skills / Technologies
    if (
      lower.includes('skill') ||
      lower.includes('technolog') ||
      lower.includes('stack') ||
      lower.includes('tools') ||
      lower.includes('languages')
    ) {
      if (lower.includes('backend')) {
        return {
          text: `For backend engineering, Asraful works with: ${PORTFOLIO_KNOWLEDGE.skills.backend.join(', ')}.`,
          suggestions: ['Which projects use them?', 'What about frontend?', 'Databases used'],
          actions: [{ label: 'View Backend Skills →', actionType: 'navigate', target: '#skills' }],
        };
      }
      if (lower.includes('frontend')) {
        return {
          text: `For frontend development, Asraful works with: ${PORTFOLIO_KNOWLEDGE.skills.frontend.join(', ')}.`,
          suggestions: ['What about backend?', 'View projects', 'Contact Asraful'],
          actions: [{ label: 'View Frontend Skills →', actionType: 'navigate', target: '#skills' }],
        };
      }
      if (lower.includes('devops') || lower.includes('docker') || lower.includes('kubernetes') || lower.includes('k8s') || lower.includes('linux') || lower.includes('nginx') || lower.includes('pm2')) {
        return {
          text: `For DevOps and Cloud Infrastructure, Asraful works with: ${PORTFOLIO_KNOWLEDGE.skills.devopsAndCloud.join(', ')}. He configures production Linux servers, Docker containers, Kubernetes deployments, Nginx reverse proxies, and PM2 process clustering.`,
          suggestions: ['What about backend?', 'Security auditing skills', 'View all skills'],
          actions: [{ label: 'View DevOps Skills →', actionType: 'navigate', target: '#skills' }],
        };
      }
      if (lower.includes('security') || lower.includes('cyber') || lower.includes('nmap') || lower.includes('nikto') || lower.includes('audit')) {
        return {
          text: `For Cybersecurity and Network Auditing, Asraful utilizes: ${PORTFOLIO_KNOWLEDGE.skills.cybersecurity.join(', ')}. He performs network reconnaissance, port auditing, and web server vulnerability scanning.`,
          suggestions: ['DevOps stack', 'Backend engineering', 'Contact Asraful'],
          actions: [{ label: 'View Security Skills →', actionType: 'navigate', target: '#skills' }],
        };
      }
      if (lower.includes('agent') || lower.includes('langgraph') || lower.includes('langchain') || lower.includes('langsmith')) {
        return {
          text: `For Agentic AI and multi-agent workflows, Asraful specializes in: LangChain, LangGraph (cyclic stateful graphs), and LangSmith (observability & evaluation), pairing them with fast inference on Groq and OpenRouter.`,
          suggestions: ['Show me AI projects', 'What AI platforms does he use?', 'Contact Asraful'],
          actions: [{ label: 'View AI Skills →', actionType: 'navigate', target: '#skills' }],
        };
      }
      if (lower.includes('ai platform') || lower.includes('groq') || lower.includes('openrouter') || lower.includes('hugging') || lower.includes('gemini') || lower.includes('ai studio') || lower.includes('antigravity')) {
        return {
          text: `For AI Platforms and API Ecosystems, Asraful integrates: ${PORTFOLIO_KNOWLEDGE.skills.aiPlatforms.join(', ')}.`,
          suggestions: ['LangGraph workflows', 'Show AI projects', 'Contact him'],
          actions: [{ label: 'View AI Platforms →', actionType: 'navigate', target: '#skills' }],
        };
      }
      if (lower.includes('nest') || lower.includes('laravel') || lower.includes('graphql')) {
        return {
          text: `Asraful builds enterprise backends and APIs with Nest.js, Laravel, and GraphQL, alongside Node.js, Express, Django, FastAPI, and Go.`,
          suggestions: ['Show backend projects', 'Database skills', 'Contact Asraful'],
          actions: [{ label: 'View Backend Skills →', actionType: 'navigate', target: '#skills' }],
        };
      }
      if (lower.includes('database') || lower.includes('db')) {
        return {
          text: `For database management, Asraful works with: ${PORTFOLIO_KNOWLEDGE.skills.databases.join(', ')}.`,
          suggestions: ['What backend does he use?', 'Show projects', 'Contact him'],
          actions: [{ label: 'View Database Skills →', actionType: 'navigate', target: '#skills' }],
        };
      }
      if (lower.includes('ai') || lower.includes('ml')) {
        return {
          text: `For AI and Machine Learning, Asraful uses: ${PORTFOLIO_KNOWLEDGE.skills.agenticAi.join(', ')} alongside platforms like ${PORTFOLIO_KNOWLEDGE.skills.aiPlatforms.slice(0, 5).join(', ')}.`,
          suggestions: ['Show me AI projects', 'Car damage detection', 'Contact him'],
          actions: [{ label: 'View AI Projects →', actionType: 'navigate', target: '#projects' }],
        };
      }
      if (lower.includes('realtime') || lower.includes('real-time') || lower.includes('automation') || lower.includes('socket')) {
        return {
          text: `For real-time streaming and automation, Asraful uses: ${PORTFOLIO_KNOWLEDGE.skills.realtimeAndAutomation.join(', ')}.`,
          suggestions: ['Show me his skills', 'View projects', 'Contact him'],
          actions: [{ label: 'View Skills →', actionType: 'navigate', target: '#skills' }],
        };
      }

      return {
        text: `Asraful spans 45+ technologies across 8+ core domains:\n\n• Frontend: ${PORTFOLIO_KNOWLEDGE.skills.frontend.slice(0, 6).join(', ')}\n• Backend: ${PORTFOLIO_KNOWLEDGE.skills.backend.join(', ')}\n• Agentic AI: LangChain, LangGraph, LangSmith\n• AI Platforms: Groq, OpenRouter, Google AI Studio, Gemini API\n• DevOps: Linux, Docker, Kubernetes, Nginx, PM2\n• Cybersecurity: Nmap, Nikto\n• Mobile: Flutter, BLoC, Android\n• Databases: PostgreSQL, Redis, MongoDB`,
        suggestions: ['Show me his projects', 'What can he build?', 'Contact Asraful'],
        actions: [{ label: 'Explore Skills Section →', actionType: 'navigate', target: '#skills' }],
      };
    }

    // 10. Specific Projects
    if (lower.includes('nextrade') || lower.includes('trading app')) {
      const p = PORTFOLIO_KNOWLEDGE.projects.find((pr) => pr.id === 'nextrade');
      return {
        text: p?.chatbotSummary || "NexTrade is an Angular & Express.js trading platform deployed on Vercel.",
        projectCards: p ? [p] : [],
        suggestions: ['Chain Hook Wallet', 'Bigbiz details', 'How to contact him?'],
        actions: [{ label: 'View NexTrade Details →', actionType: 'navigate', target: '#projects' }],
      };
    }

    if (lower.includes('chain hook') || lower.includes('wallet')) {
      const p = PORTFOLIO_KNOWLEDGE.projects.find((pr) => pr.id === 'chain-hook-wallet');
      return {
        text: p?.chatbotSummary || "Chain Hook Wallet is a React & Django cryptocurrency wallet application.",
        projectCards: p ? [p] : [],
        suggestions: ['NexTrade details', 'Bigbiz platform', 'Contact Asraful'],
        actions: [{ label: 'View Wallet Details →', actionType: 'navigate', target: '#projects' }],
      };
    }

    if (lower.includes('bigbiz') || lower.includes('ecommerce') || lower.includes('e-commerce') || lower.includes('social commerce')) {
      const p = PORTFOLIO_KNOWLEDGE.projects.find((pr) => pr.id === 'bigbiz');
      return {
        text: p?.chatbotSummary || "Bigbiz is a Next.js and Go social commerce marketplace connected to Chain Hook Wallet.",
        projectCards: p ? [p] : [],
        suggestions: ['What tech stack was used?', 'Chain Hook Wallet details', 'Contact Asraful'],
        actions: [{ label: 'View Bigbiz Details →', actionType: 'navigate', target: '#projects' }],
      };
    }

    if (lower.includes('car damage') || lower.includes('vision') || lower.includes('car')) {
      const p = PORTFOLIO_KNOWLEDGE.projects.find((pr) => pr.id === 'car-damage-detection');
      return {
        text: p?.chatbotSummary || "An AI computer vision system detecting vehicle damage from images.",
        projectCards: p ? [p] : [],
        suggestions: ['What tech was used?', 'Show all projects', 'How to contact him?'],
        actions: [{ label: 'View Project Details →', actionType: 'navigate', target: '#projects' }],
      };
    }

    // 11. Projects Overview
    if (lower.includes('project') || lower.includes('portfolio') || lower.includes('work') || lower.includes('showcase')) {
      return {
        text: "Asraful's featured projects include:\n1. NexTrade (Angular · Express.js · Firebase)\n2. Chain Hook Wallet (React.js · Django · PostgreSQL)\n3. Bigbiz (Next.js · Go · Redis · PostgreSQL)\n4. AI-Powered Car Damage Detection (Python · FastAPI · Vision)\n5. AI Automation System (Python · AI · APIs · Automation)",
        projectCards: PORTFOLIO_KNOWLEDGE.projects,
        suggestions: ['NexTrade details', 'Chain Hook Wallet details', 'Bigbiz details', 'Contact Asraful'],
        actions: [{ label: 'View All Projects →', actionType: 'navigate', target: '#projects' }],
      };
    }

    // 12. Experience / Journey
    if (lower.includes('experience') || lower.includes('journey') || lower.includes('background') || lower.includes('education') || lower.includes('learning')) {
      return {
        text: "Asraful's journey progresses through 4 deliberate phases: Modern Web Foundations → Frontend Frameworks & Full-Stack Apps → Multi-Language Backends & Scalable Databases → AI/ML, Mobile & Real-Time Engineering.",
        suggestions: ['What are his skills?', 'Show me his projects', 'Contact Asraful'],
        actions: [{ label: 'View Development Journey →', actionType: 'navigate', target: '#journey' }],
      };
    }

    // 13. Contact / GitHub / LinkedIn
    if (lower.includes('github') || lower.includes('source code') || lower.includes('repo')) {
      return {
        text: `You can explore Asraful's repositories and code on GitHub: ${PORTFOLIO_KNOWLEDGE.contact.github}`,
        suggestions: ['How can I contact him?', 'Show me his projects', 'What are his skills?'],
        actions: [{ label: 'Contact Section →', actionType: 'navigate', target: '#contact' }],
      };
    }

    if (lower.includes('contact') || lower.includes('email') || lower.includes('reach out') || lower.includes('hire') || lower.includes('linkedin')) {
      return {
        text: `${PORTFOLIO_KNOWLEDGE.contact.handoffNotice}\n\n• Email: ${PORTFOLIO_KNOWLEDGE.contact.email}\n• Alternate: ${PORTFOLIO_KNOWLEDGE.contact.alternateEmail}\n• GitHub: ${PORTFOLIO_KNOWLEDGE.contact.github}\n• LinkedIn: ${PORTFOLIO_KNOWLEDGE.contact.linkedin}\n• Status: ${PORTFOLIO_KNOWLEDGE.contact.availability}`,
        suggestions: ['Discuss a project', 'Show me his projects', 'What are his skills?'],
        actions: [{ label: 'Go to Contact Form →', actionType: 'navigate', target: '#contact' }],
      };
    }

    // 14. Check for Unlisted Technologies
    const unlistedPatterns = [
      'ruby', 'rails', 'rust', 'swift', 'react native',
      'kotlin', 'spring boot', 'kubernetes', 'k8s', 'aws', 'azure', 'gcp', 'c++'
    ];

    for (const unlisted of unlistedPatterns) {
      if (lower.includes(unlisted)) {
        return {
          text: PORTFOLIO_KNOWLEDGE.unlistedTechNotice,
          suggestions: ['What technologies DOES he use?', 'Show me his skills', 'Contact Asraful'],
          actions: [{ label: 'View Listed Skills →', actionType: 'navigate', target: '#skills' }],
        };
      }
    }

    // 15. Default helpful assistant fallback
    return {
      text: "I can introduce you to MD Asraful Islam, explain his skills and projects, and help you find the information you're looking for. What would you like to know?",
      suggestions: [
        'Who is Asraful?',
        'What are his skills?',
        'Show me his projects',
        'What can he build?',
        'How can I contact him?',
      ],
      actions: [
        { label: 'Explore Projects →', actionType: 'navigate', target: '#projects' },
        { label: 'Contact Asraful →', actionType: 'navigate', target: '#contact' },
      ],
    };
  }
}

export const chatService = new ChatService();
