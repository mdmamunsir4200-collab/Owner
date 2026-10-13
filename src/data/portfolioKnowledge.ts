/**
 * Structured Portfolio Knowledge Base for Asraful AI
 * Fully expanded with all domains: Full-Stack, Nest.js, Laravel, GraphQL,
 * Agentic AI (LangChain, LangGraph, LangSmith), AI Platforms (OpenRouter, Groq, Hugging Face, Antigravity, Google AI Studio, Gemini API),
 * DevOps (Linux, Docker, Kubernetes, Nginx, PM2), Cybersecurity (Nmap, Nikto), Mobile, and Databases.
 */

export interface PortfolioKnowledge {
  developer: {
    name: string;
    role: string;
    location: string;
    profile: string;
    strongestAreas: string[];
    developmentFocus: string[];
    metrics: {
      technologies: string;
      domains: string;
      curiosity: string;
      mission: string;
    };
    coreIdentity: {
      primaryFocus: string;
      secondaryFocus: string;
      superpower: string;
      mindset: string;
    };
  };
  domains: {
    title: string;
    description: string;
    technologies: string[];
  }[];
  skills: {
    frontend: string[];
    backend: string[];
    mobile: string[];
    agenticAi: string[];
    aiPlatforms: string[];
    devopsAndCloud: string[];
    cybersecurity: string[];
    databases: string[];
    realtimeAndAutomation: string[];
    tools: string[];
  };
  capabilities: {
    title: string;
    description: string;
    deliverables: string[];
  }[];
  projects: {
    id: string;
    title: string;
    category: string;
    description: string;
    chatbotSummary: string;
    technologies: string[];
    highlights: string[];
    liveUrl?: string;
    sectionAnchor: string;
  }[];
  journey: {
    phase: string;
    title: string;
    description: string;
  }[];
  contact: {
    email: string;
    alternateEmail: string;
    github: string;
    linkedin: string;
    twitter: string;
    kaggle: string;
    location: string;
    availability: string;
    handoffNotice: string;
  };
  unlistedTechNotice: string;
}

export const PORTFOLIO_KNOWLEDGE: PortfolioKnowledge = {
  developer: {
    name: 'MD Asraful Islam',
    role: 'Full-Stack Developer · AI & DevOps Engineer',
    location: 'Bangladesh 🇧🇩',
    profile:
      'Asraful is an adaptable full-stack, AI, and DevOps engineer from Bangladesh. He works across modern web and mobile architectures (React, Angular, Next.js, Flutter), enterprise backends (Nest.js, Node.js, Laravel, Django, FastAPI, GraphQL, Go), stateful agentic AI systems (LangChain, LangGraph, LangSmith), cutting-edge inference platforms (Groq, OpenRouter, Google AI Studio, Gemini API), and production cloud/DevOps environments (Linux, Docker, Kubernetes, Nginx, PM2), paired with network security auditing (Nmap, Nikto).',
    strongestAreas: [
      'Full-Stack web & enterprise backend development (React, Next.js, Angular, Nest.js, Laravel, GraphQL)',
      'Agentic AI, multi-agent graphs & LLM orchestration (LangChain, LangGraph, LangSmith)',
      'AI platform integration & high-speed inference (Groq, OpenRouter, Hugging Face, Gemini API)',
      'DevOps, Linux administration, containerization & clustering (Docker, Kubernetes, Nginx, PM2)',
      'Cybersecurity & network vulnerability scanning (Nmap, Nikto)',
      'Mobile development with Flutter & reactive state patterns',
      'High-performance databases & distributed caching (PostgreSQL, Redis, MongoDB)',
    ],
    developmentFocus: [
      'Frontend engineering (React.js, Next.js, Angular, Redux, Tailwind CSS, SCSS)',
      'Backend architectures (Nest.js, Laravel, GraphQL, Node.js, Express, Django, FastAPI, Go)',
      'Agentic workflows & evaluation (LangChain, LangGraph, LangSmith, TensorFlow, Scikit-learn)',
      'AI API gateways & platforms (OpenRouter, Groq, Hugging Face, Antigravity, Google AI Studio, Gemini API, Ollama)',
      'Containerization & server ops (Linux, Docker, Kubernetes, Nginx, PM2)',
      'Security assessment & auditing (Nmap, Nikto, security hardening)',
      'Mobile engineering (Flutter, Rx-Dart, Provider, BLoC, Android Java)',
      'Real-time & automation (Socket.IO, WebRTC, Puppeteer, Webhooks)',
      'Databases (PostgreSQL, MongoDB, Redis, Firebase, Elasticsearch, MySQL)',
    ],
    metrics: {
      technologies: '45+',
      domains: '8+',
      curiosity: '∞',
      mission: '1',
    },
    coreIdentity: {
      primaryFocus: 'Frontend + Full-Stack + AI',
      secondaryFocus: 'DevOps + Cloud + Security',
      superpower: 'Fast learner (adapts to new technologies in record time)',
      mindset: 'Build smart, resilient, and secure architectures',
    },
  },
  domains: [
    {
      title: 'Full-Stack Web Development',
      description: 'Designing and engineering modern responsive SPAs and server-rendered web platforms.',
      technologies: ['React.js', 'Next.js', 'Angular', 'Redux', 'Tailwind CSS', 'SCSS'],
    },
    {
      title: 'Backend Architecture & APIs',
      description: 'Developing enterprise microservices, RESTful and GraphQL APIs with Nest.js, Laravel, FastAPI, and Go.',
      technologies: ['Nest.js', 'Laravel', 'GraphQL', 'Node.js', 'Express.js', 'Django', 'FastAPI', 'Go'],
    },
    {
      title: 'Agentic AI & LLM Orchestration',
      description: 'Building cyclic multi-agent graphs, autonomous tool-calling pipelines, and observability tracing.',
      technologies: ['LangChain', 'LangGraph', 'LangSmith', 'TensorFlow', 'Scikit-learn'],
    },
    {
      title: 'AI Platforms & API Ecosystem',
      description: 'Ultra-low latency model inference, multimodal AI integration, and unified API routing.',
      technologies: ['OpenRouter', 'Groq', 'Hugging Face', 'Antigravity', 'Google AI Studio', 'Gemini API'],
    },
    {
      title: 'DevOps, Linux & Cloud Infrastructure',
      description: 'Container orchestration, Linux server administration, reverse proxying, and process clustering.',
      technologies: ['Linux', 'Docker', 'Kubernetes', 'Nginx', 'PM2'],
    },
    {
      title: 'Cybersecurity & Network Auditing',
      description: 'Network port auditing, reconnaissance, and web vulnerability scanning.',
      technologies: ['Nmap', 'Nikto', 'Vulnerability Auditing'],
    },
    {
      title: 'Mobile App Development',
      description: 'Cross-platform mobile applications for Android & iOS built with Flutter and reactive BLoC/Rx-Dart.',
      technologies: ['Flutter', 'Rx-Dart', 'Provider', 'BLoC', 'Android (Java)'],
    },
    {
      title: 'Real-Time Systems & Automation',
      description: 'Bi-directional WebSockets, WebRTC streaming, and headless Chrome browser automation scripts.',
      technologies: ['Socket.IO', 'WebRTC', 'Puppeteer', 'Webhooks'],
    },
    {
      title: 'Databases & Distributed Caching',
      description: 'Schema modeling, distributed cache layers, and ACID storage across relational and NoSQL databases.',
      technologies: ['PostgreSQL', 'MongoDB', 'Redis', 'Firebase', 'Elasticsearch'],
    },
  ],
  skills: {
    frontend: [
      'HTML5',
      'CSS3',
      'JavaScript ES6+',
      'SCSS',
      'Tailwind CSS',
      'React.js',
      'Next.js',
      'Angular',
      'Redux',
      'MobX',
      'NgRx',
      'Nuxt.js',
      'Vue.js',
      'Vuex',
      'jQuery',
      'Bootstrap',
    ],
    backend: ['Nest.js', 'Node.js', 'Express.js', 'GraphQL', 'Django', 'FastAPI', 'Laravel', '.NET', 'Go'],
    mobile: ['Flutter', 'Rx-Dart', 'Provider', 'BLoC', 'Android (Java)'],
    agenticAi: ['LangChain', 'LangGraph', 'LangSmith', 'TensorFlow', 'Scikit-learn', 'Pandas', 'NumPy'],
    aiPlatforms: [
      'OpenRouter',
      'Groq',
      'Hugging Face',
      'Antigravity',
      'Google AI Studio',
      'Gemini API',
      'ChatGPT',
      'Claude',
      'DeepSeek',
      'Ollama (local)',
    ],
    devopsAndCloud: ['Linux', 'Docker', 'Kubernetes', 'Nginx', 'PM2'],
    cybersecurity: ['Nmap', 'Nikto', 'Network Auditing', 'Vulnerability Assessment'],
    databases: ['PostgreSQL', 'MongoDB', 'Redis', 'Firebase', 'Elasticsearch', 'MySQL'],
    realtimeAndAutomation: ['Socket.IO', 'WebRTC', 'Puppeteer', 'Webhooks'],
    tools: [
      'VS Code',
      'Git & GitHub',
      'Jupyter Notebook',
      'Adobe XD',
      'Illustrator',
      'XAMPP',
      'MongoDB Compass',
    ],
  },
  capabilities: [
    {
      title: 'Full-Stack Web & Enterprise Backends',
      description:
        'Complete end-to-end applications built with React/Next/Angular frontends and Nest.js/Laravel/FastAPI backends using REST and GraphQL.',
      deliverables: ['Enterprise web apps', 'GraphQL schemas & resolvers', 'RESTful microservices', 'SPAs & SSR platforms'],
    },
    {
      title: 'Agentic AI & Multi-Agent Graphs',
      description:
        'Stateful agentic workflows using LangGraph and LangChain, evaluated with LangSmith and accelerated via Groq LPUs.',
      deliverables: ['Autonomous agents', 'Cyclic tool-calling workflows', 'LangSmith tracing & observability'],
    },
    {
      title: 'DevOps & Production Infrastructure',
      description:
        'Deploying and managing containerized applications on Linux servers with Docker, Kubernetes, Nginx reverse proxies, and PM2.',
      deliverables: ['Dockerized services', 'Kubernetes manifests & clusters', 'Nginx SSL reverse proxy configs', 'PM2 process clusters'],
    },
    {
      title: 'Cybersecurity & Vulnerability Assessment',
      description:
        'Auditing networks, checking ports, and scanning web servers for security misconfigurations using Nmap and Nikto.',
      deliverables: ['Network port audit reports', 'Web vulnerability scans', 'API security hardening'],
    },
    {
      title: 'Cross-Platform Mobile Apps (Flutter)',
      description:
        'High-performance cross-platform mobile apps for Android and iOS using Flutter with BLoC and Provider state management.',
      deliverables: ['Cross-platform mobile apps', 'Reactive UI flows', 'REST/Firebase mobile integration'],
    },
    {
      title: 'Real-Time Communications & Automation',
      description:
        'Bi-directional WebSocket streaming, WebRTC channels, and headless Chrome browser automation scripts with Puppeteer.',
      deliverables: ['Live chat and feed channels', 'Streaming infrastructure', 'Web scrapers and automated bots'],
    },
  ],
  projects: [
    {
      id: 'nextrade',
      title: 'NexTrade',
      category: 'Frontend / Backend (Fintech)',
      description:
        'A trading-focused web application built with Angular on the frontend and Express.js on the backend, styled with SCSS. Uses Firebase for backend services and is deployed on Vercel.',
      chatbotSummary:
        'NexTrade is a trading-focused web application developed by Asraful using Angular, Express.js, SCSS, and Firebase for real-time asset tracking and financial dashboards.',
      technologies: ['Angular', 'Express.js', 'SCSS', 'Firebase', 'Vercel'],
      highlights: [
        'Reactive financial charts and trade monitoring in Angular',
        'Express.js backend providing streamlined trade endpoints and API caching',
        'Firebase Authentication and cloud database for live persistence',
      ],
      liveUrl: 'https://nex-client-kappa.vercel.app/',
      sectionAnchor: '#projects',
    },
    {
      id: 'chain-hook-wallet',
      title: 'Chain Hook Wallet',
      category: 'Full-Stack Web App (Crypto / Fintech)',
      description:
        'A modern web app built with React.js on the frontend and Django on the backend, styled with Tailwind CSS. Uses PostgreSQL for the database and is deployed on Vercel.',
      chatbotSummary:
        'Chain Hook Wallet is a digital cryptocurrency wallet app built with React.js, Django, Tailwind CSS, and PostgreSQL, providing transactional security and wallet management.',
      technologies: ['React.js', 'Django', 'Tailwind CSS', 'PostgreSQL', 'Vercel'],
      highlights: [
        'Fluid React UI with Tailwind CSS for seamless digital wallet management',
        'Django REST Framework backend ensuring transactional security and ACID compliance',
        'PostgreSQL schema with indexed transaction and balance audit logs',
      ],
      liveUrl: 'https://chain-hook-client.vercel.app',
      sectionAnchor: '#projects',
    },
    {
      id: 'bigbiz',
      title: 'Bigbiz',
      category: 'Full-Stack Social Commerce',
      description:
        'A social commerce platform where sellers and buyers can post and browse listings like an e-commerce marketplace, with a built-in buy flow that connects to Chain Hook Wallet for secure payment processing. Frontend built with Next.js, backend powered by a Go server, using PostgreSQL (via Neon) and Redis (via Upstash) for data and caching, with Cloudinary for media. Next.js is deployed on Vercel and the Go server on Render.',
      chatbotSummary:
        'Bigbiz is a social commerce marketplace built with Next.js and Go, with Neon PostgreSQL, Upstash Redis caching, Cloudinary media CDN, and Chain Hook Wallet payment checkout integration.',
      technologies: ['Next.js', 'Go', 'PostgreSQL', 'Redis', 'Cloudinary', 'Vercel', 'Render'],
      highlights: [
        'Next.js App Router with server-side rendering for marketplace discovery',
        'High-throughput Go backend microservice deployed on Render',
        'Low-latency Upstash Redis caching and Neon PostgreSQL',
        'Chain Hook Wallet payment integration for transactions',
      ],
      liveUrl: 'https://bigbiz-client.vercel.app',
      sectionAnchor: '#projects',
    },
    {
      id: 'car-damage-detection',
      title: 'AI-Powered Car Damage Detection',
      category: 'AI & Computer Vision',
      description:
        'An AI-powered computer vision application designed to detect damaged parts of vehicles from images and help provide repair-related information.',
      chatbotSummary:
        'An AI computer vision system that analyzes vehicle images to identify damaged parts with bounding telemetry and structural severity scoring.',
      technologies: ['Python', 'Computer Vision', 'TensorFlow', 'FastAPI'],
      highlights: [
        'Identifies scratches, dents, glass fractures, and bumper damage using vision networks',
        'Generates bounding-box coordinates with confidence scores',
        'FastAPI backend for rapid image processing under 450ms',
      ],
      sectionAnchor: '#projects',
    },
    {
      id: 'ai-automation-system',
      title: 'AI Automation System',
      category: 'AI & Workflow Automation',
      description:
        'An automation system combining LangChain agents, LangGraph workflows, AI APIs (OpenRouter, Groq, Gemini), and workflow automation to streamline repetitive tasks.',
      chatbotSummary:
        'An intelligent orchestration platform combining LangGraph agents, Groq LPU inference, LangSmith tracing, and background workers containerized with Docker.',
      technologies: ['LangChain', 'LangGraph', 'LangSmith', 'Groq', 'Puppeteer', 'Docker'],
      highlights: [
        'LangGraph cyclic state graph orchestrating multi-agent tasks',
        'Groq LPU ultra-low latency inference for immediate real-time execution',
        'Observability and execution tracing monitored via LangSmith',
      ],
      sectionAnchor: '#projects',
    },
  ],
  journey: [
    {
      phase: 'Phase 01 · Learning (2021–2022)',
      title: 'Logic, OOP & Programming Foundations',
      description:
        'Started programming with C++ and C#, studying from basics to advanced OOP and solving extensive algorithmic problems to build a strong foundation in logic.',
    },
    {
      phase: 'Phase 02 · Building (2023–2025)',
      title: 'Web & Mobile Full-Stack Foundations',
      description:
        'Gained solid knowledge of HTML, CSS, Tailwind, Bootstrap, JavaScript, and Python. Built full-stack apps with Django, Node.js, Express, PostgreSQL, and React.js, and explored mobile with Flutter and Android Java.',
    },
    {
      phase: 'Phase 03 · Experimenting',
      title: 'Multi-Stack Exploration & Backend Deep-Dive',
      description:
        'Built projects across diverse stacks: FastAPI, Go (Gin), Laravel, .NET, NestJS, Nuxt, Vue.js, Next.js, and Angular, implementing auth, OAuth, and payment flows to master backend internals.',
    },
    {
      phase: 'Phase 04 · Improving Products',
      title: 'AI-Powered Features & Machine Learning',
      description:
        'Enhanced apps with third-party APIs and AI features. Studied ML mathematics and trained models on Kaggle datasets using NumPy, scikit-learn, and TensorFlow.',
    },
    {
      phase: 'Phase 05 · Improving Engineering',
      title: 'System Quality, DevOps & Security Auditing',
      description:
        'Focused on clean code, stateless servers, database indexing, load balancing, Docker, Kubernetes, Linux (SSH), and security audits with firewalls, Nikto, and Nmap.',
    },
  ],
  contact: {
    email: 'mamun66435@gmail.com',
    alternateEmail: 'asraful@email.com',
    github: 'https://github.com/asraful808088',
    linkedin: 'https://www.linkedin.com/in/md-asraful-399a86250/',
    twitter: 'https://x.com/asraful808088',
    kaggle: 'https://www.kaggle.com/mdasraful00000000',
    location: 'Bangladesh 🇧🇩',
    availability: 'Available for hire / Open to Work (Junior/Fresher roles, remote contracts & engineering collaborations)',
    handoffNotice:
      "I'm Asraful's AI portfolio assistant. I can provide verified details about his work, skills, and projects, but for opportunities and direct discussions, please contact Asraful directly.",
  },
  unlistedTechNotice:
    "I don't currently have that technology listed in Asraful's portfolio, but you can contact him directly if you'd like to discuss it.",
};
