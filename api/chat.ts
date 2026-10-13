import { GoogleGenAI } from '@google/genai';
import Groq from 'groq-sdk';

const SYSTEM_INSTRUCTION = `You are "Asraful AI", an AI-powered personal portfolio assistant and guide for MD Asraful Islam.
Your subtitle is: "Your AI guide to Asraful's work".

Key Persona & Boundary Rules:
- You represent an AI assistant for MD Asraful Islam and help visitors understand his skills, 8+ core domains of expertise, and projects.
- You must NEVER pretend to be a human or pretend to be the real Asraful. When someone wants to hire or contact him, provide his contact details (email: asraful808088@gmail.com, phone: 01626676752 / +880 1626676752, GitHub: https://github.com/asraful808088, LinkedIn: https://www.linkedin.com/in/md-asraful-399a86250/, Twitter/X: https://x.com/asraful808088, Kaggle: https://www.kaggle.com/mdasraful00000000) and instruct them to contact him directly.
- Tone: Professional, friendly, concise, technically knowledgeable, confident and enthusiastic about building smart, secure applications.
- Avoid long rambling answers. Keep responses 2 to 4 sentences or concise bullet points.
- Strictly adhere to verified facts:
  * Name: MD ASRAFUL ISLAM
  * Role: Full-Stack Web Developer | Mobile & ML/DL (Secondary)
  * Location: Bangladesh 🇧🇩
  * Available for Hire · Open to Work
  * 45+ Technologies across 8+ Core Domains:
    1. Full-Stack Web Development (HTML5, CSS3, JavaScript ES6+, SCSS, Tailwind CSS, React.js, Next.js, Angular, Redux, Vue.js, Nuxt.js)
    2. Backend Architecture & APIs (Nest.js, Node.js, Express.js, GraphQL, Django, FastAPI, Laravel, Go, .NET)
    3. Agentic AI & LLM Orchestration (LangChain, LangGraph, LangSmith, TensorFlow, Scikit-learn, Computer Vision)
    4. AI Platforms & API Ecosystem (OpenRouter, Groq, Hugging Face, Antigravity, Google AI Studio, Gemini API, ChatGPT, Claude, DeepSeek, Ollama)
    5. DevOps, Linux & Infrastructure (Linux, Docker, Kubernetes, Nginx, PM2)
    6. Cybersecurity & Network Auditing (Nmap, Nikto)
    7. Mobile Development (Flutter, Dart, Rx-Dart, Provider, BLoC, Android Java)
    8. Real-Time Systems & Automation (Socket.IO, WebRTC, Puppeteer, Webhooks)
    9. Databases & Cloud (PostgreSQL, MongoDB, Redis, Firebase, Elasticsearch, MySQL, Cloudinary)
  * Featured Projects:
    1. NexTrade: Trading-focused web app with Angular, Express.js, SCSS, and Firebase deployed on Vercel (https://nex-client-kappa.vercel.app/).
    2. Chain Hook Wallet: Crypto wallet app built with React.js, Django, Tailwind CSS, and PostgreSQL deployed on Vercel (https://chain-hook-client.vercel.app).
    3. Bigbiz: Social commerce platform connecting buyers, sellers, and Chain Hook Wallet payments. Built with Next.js (Vercel), Go backend (Render), Neon PostgreSQL, and Upstash Redis (https://bigbiz-client.vercel.app).
- NEVER invent fake companies, fake degrees, fake clients, or fake certifications.
- If asked about a technology not listed in his portfolio, respond honestly: "I don't currently have that technology listed in Asraful's portfolio, but you can contact him if you'd like to discuss it."
- When users ask about projects or capabilities, suggest relevant next steps and 2-3 concise follow-up questions.`;

function isQuotaError(err: unknown): boolean {
  if (!err || typeof err !== 'object') return false;
  const e = err as Record<string, unknown>;
  const status = (e.status ?? e.statusCode ?? e.code) as number | string | undefined;
  const msg = String(e.message ?? '').toLowerCase();
  return (
    status === 429 ||
    status === 503 ||
    status === 404 ||
    msg.includes('quota') ||
    msg.includes('rate limit') ||
    msg.includes('resource_exhausted') ||
    msg.includes('too many requests') ||
    msg.includes('limit exceeded') ||
    msg.includes('no longer available') ||
    msg.includes('model_not_found') ||
    msg.includes('does not exist')
  );
}

function buildActions(message: string) {
  const actions: { label: string; actionType: 'navigate'; target: string }[] = [];
  const lower = message.toLowerCase();
  if (lower.includes('project') || lower.includes('work') || lower.includes('build'))
    actions.push({ label: 'View Projects →', actionType: 'navigate', target: '#projects' });
  if (lower.includes('skill') || lower.includes('technolog') || lower.includes('stack'))
    actions.push({ label: 'View Skills →', actionType: 'navigate', target: '#skills' });
  if (lower.includes('contact') || lower.includes('hire') || lower.includes('email') || lower.includes('reach'))
    actions.push({ label: 'Contact Asraful →', actionType: 'navigate', target: '#contact' });
  return actions;
}

export default async function handler(req: any, res: any) {
  // Handle CORS preflight
  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const body = typeof req.body === 'string' ? JSON.parse(req.body) : req.body || {};
  const { message, history } = body;

  if (!message || typeof message !== 'string') {
    return res.status(400).json({ error: 'Message is required' });
  }

  const geminiKey = process.env.GEMINI_API_KEY;
  const groqKey = process.env.GROQ_API_KEY;

  if (!geminiKey && !groqKey) {
    return res.status(503).json({
      error: 'No AI provider configured. Add GEMINI_API_KEY or GROQ_API_KEY to environment variables.',
      fallback: true,
    });
  }

  const geminiClient = geminiKey
    ? new GoogleGenAI({
        apiKey: geminiKey,
        httpOptions: { headers: { 'User-Agent': 'aistudio-build' } },
      })
    : null;

  const groqClient = groqKey ? new Groq({ apiKey: groqKey }) : null;

  let responseText = '';
  let usedProvider = '';

  // 1. Try Gemini first
  if (geminiClient) {
    try {
      const formattedHistory = Array.isArray(history)
        ? history.slice(-6).map((h: any) => `${h.role === 'user' ? 'Visitor' : 'Asraful AI'}: ${h.text || h.content || ''}`).join('\n')
        : '';

      const prompt = `${formattedHistory ? `Conversation context so far:\n${formattedHistory}\n\n` : ''}Visitor: ${message}\nAsraful AI:`;

      const geminiRes = await geminiClient.models.generateContent({
        model: 'gemini-3.8-flash',
        contents: prompt,
        config: { systemInstruction: SYSTEM_INSTRUCTION, temperature: 0.7 },
      });

      responseText = geminiRes.text ?? '';
      if (responseText) usedProvider = 'gemini';
    } catch (geminiErr) {
      if (isQuotaError(geminiErr)) {
        console.warn('[AI] Gemini quota/rate-limit hit — switching to Groq fallback');
      } else {
        console.error('[AI] Gemini error:', geminiErr);
      }
      responseText = '';
    }
  }

  // 2. Fall back to Groq if Gemini failed or produced empty output
  if (!responseText && groqClient) {
    try {
      const messages: Groq.Chat.ChatCompletionMessageParam[] = [
        { role: 'system', content: SYSTEM_INSTRUCTION },
        ...(Array.isArray(history)
          ? history.slice(-6).map((h: any) => ({
              role: (h.role === 'user' ? 'user' : 'assistant') as 'user' | 'assistant',
              content: h.text || h.content || '',
            }))
          : []),
        { role: 'user', content: message },
      ];

      const completion = await groqClient.chat.completions.create({
        model: 'qwen/qwen3.8-27b',
        messages,
        temperature: 0.7,
        max_tokens: 512,
      });

      responseText = completion.choices[0]?.message?.content ?? '';
      if (responseText) usedProvider = 'groq';
    } catch (groqErr) {
      console.error('[AI] Groq error:', groqErr);
    }
  }

  // 3. Both failed
  if (!responseText) {
    return res.status(500).json({
      error: 'All AI providers failed. Please try again shortly.',
      fallback: true,
    });
  }

  return res.json({
    text: responseText,
    provider: usedProvider,
    actions: buildActions(message).length > 0 ? buildActions(message) : undefined,
  });
}
