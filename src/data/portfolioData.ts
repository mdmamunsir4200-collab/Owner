import { Project, SkillItem, JourneyMilestone, AboutCard, DomainItem } from '../types/portfolio';

export const DEVELOPER_INFO = {
  name: 'MD ASRAFUL ISLAM',
  role: 'Full-Stack Web Developer | Mobile & ML/DL (Secondary)',
  location: 'Bangladesh',
  status: 'Available for Hire · Open to Work',
  email: 'asraful808088@gmail.com',
  phone: '01626676752',
  phoneInternational: '+880 1626676752',
  github: 'https://github.com/asraful808088',
  linkedin: 'https://www.linkedin.com/in/md-asraful-399a86250/',
  twitter: 'https://x.com/asraful808088',
  kaggle: 'https://www.kaggle.com/mdasraful00000000',
  photoUrl: 'https://res.cloudinary.com/none909099/image/upload/v1781678161/ChatGPT_Image_Jun_4_2026_12_45_42_PM_tjtbep.png',
  resumeUrl: '/cv.pdf',
  shortBio:
    'Dedicated Full-Stack Web Developer, self-taught and highly motivated, with strong frontend & backend foundations, plus Mobile & Machine Learning / Deep Learning as secondary strengths.',
  fullBio:
    "Dedicated Full-Stack Web Developer, self-taught and highly motivated, with a strong foundation across modern frontend and backend technologies. Builds fast, adapts quickly, and ships working products. Carries additional working skills in Mobile Development and Machine Learning / Deep Learning as secondary strengths, offering flexible support beyond core web work when a project needs it. Actively seeking a full-time role, internship, or freelance opportunity to apply this dedication immediately.",
  education: [
    { degree: "Honours (Bachelor's Degree)", period: '2020 – 2021', notes: 'Final year examinations recently completed' },
    { degree: 'Higher Secondary Certificate (HSC)', period: '2020' },
    { degree: 'Secondary School Certificate (SSC)', period: '2018' },
  ],
  currentlyDeepening: [
    { topic: 'React & Next.js', detail: 'Advanced patterns, SSR/SSG, App Router' },
    { topic: 'Flutter & Mobile', detail: 'BLoC pattern, Rx-Dart, cross-platform apps' },
    { topic: 'AI & Machine Learning', detail: 'TensorFlow, Scikit-learn, applied model integration' },
    { topic: 'Real-Time Systems', detail: 'Socket.IO, WebRTC for live, collaborative features' },
  ],
  metrics: {
    technologies: '45+',
    domains: '8+',
    curiosity: '∞',
    mission: '1',
  },
  coreIdentity: {
    primaryFocus: 'Frontend + Full-Stack',
    secondaryFocus: 'Mobile + ML/DL & DevOps',
    superpower: 'Fast learner (adapts to new technologies in record time)',
    mindset: 'Build smart, resilient, and secure architectures',
  },
};

export const DOMAINS_DATA: DomainItem[] = [
  {
    id: 'frontend-fullstack',
    title: 'Full-Stack Web Development',
    subtitle: 'High-Performance & Scalable Web Apps',
    description:
      'Designing and developing modern, responsive, and server-rendered web applications with React.js, Next.js, Angular, Redux, and modern styling architectures.',
    iconName: 'Layout',
    technologies: ['React.js', 'Next.js', 'Angular', 'Redux', 'Tailwind CSS', 'SCSS'],
    tier: 'Primary Focus',
  },
  {
    id: 'backend-apis',
    title: 'Backend Architecture & APIs',
    subtitle: 'Enterprise Microservices, REST & GraphQL',
    description:
      'Engineering secure, high-throughput backend services and APIs using Nest.js, Node.js, Express.js, Django, FastAPI, Laravel, GraphQL, Go, and .NET.',
    iconName: 'Server',
    technologies: ['Nest.js', 'Laravel', 'GraphQL', 'FastAPI', 'Node.js', 'Go'],
    tier: 'Primary Focus',
  },
  {
    id: 'agentic-ai-frameworks',
    title: 'Agentic AI & LLM Orchestration',
    subtitle: 'LangChain, LangGraph & Autonomous Agents',
    description:
      'Designing stateful multi-agent systems, human-in-the-loop workflows, vector retrieval pipelines, and evaluation observability using LangChain, LangGraph, and LangSmith.',
    iconName: 'BrainCircuit',
    technologies: ['LangChain', 'LangGraph', 'LangSmith', 'TensorFlow', 'Scikit-learn'],
    tier: 'Primary Focus',
  },
  {
    id: 'ai-platforms-ecosystem',
    title: 'AI Platforms & API Ecosystem',
    subtitle: 'Ultra-Fast Inference & Multimodal Gateways',
    description:
      'Leveraging state-of-the-art AI infrastructure and platforms including OpenRouter, Groq LPU inference, Hugging Face Hub, Antigravity, Google AI Studio, and Gemini API.',
    iconName: 'Sparkles',
    technologies: ['OpenRouter', 'Groq', 'Hugging Face', 'Google AI Studio', 'Gemini API', 'Antigravity'],
    tier: 'Primary Focus',
  },
  {
    id: 'devops-cloud-infrastructure',
    title: 'DevOps, Linux & Cloud Infrastructure',
    subtitle: 'Containerization, Clustering & Production Ops',
    description:
      'Deploying resilient containerized architectures and production server environments using Linux, Docker, Kubernetes, Nginx reverse proxies, and PM2 process management.',
    iconName: 'Terminal',
    technologies: ['Linux', 'Docker', 'Kubernetes', 'Nginx', 'PM2'],
    tier: 'Secondary Focus',
  },
  {
    id: 'cybersecurity-network-auditing',
    title: 'Cybersecurity & Network Auditing',
    subtitle: 'Reconnaissance, Port Auditing & Vulnerability Scans',
    description:
      'Conducting network reconnaissance, security port discovery, and web server vulnerability scanning using industry-standard penetration testing tools like Nmap and Nikto.',
    iconName: 'Shield',
    technologies: ['Nmap', 'Nikto', 'Security Hardening', 'Vulnerability Audits'],
    tier: 'Specialized',
  },
  {
    id: 'mobile-dev',
    title: 'Mobile App Development',
    subtitle: 'Cross-Platform Android & iOS Systems',
    description:
      'Crafting clean, responsive native and cross-platform mobile experiences with Flutter, Dart, BLoC state management, Rx-Dart, Provider, and Android Java.',
    iconName: 'Smartphone',
    technologies: ['Flutter', 'Rx-Dart', 'Provider', 'BLoC', 'Android (Java)'],
    tier: 'Secondary Focus',
  },
  {
    id: 'realtime-automation',
    title: 'Real-Time Systems & Automation',
    subtitle: 'Live WebSockets, WebRTC & Headless Scraping',
    description:
      'Building low-latency real-time applications with Socket.IO and WebRTC streaming, alongside web automation and scraping pipelines with Puppeteer.',
    iconName: 'Zap',
    technologies: ['Socket.IO', 'WebRTC', 'Puppeteer', 'Webhooks'],
    tier: 'Specialized',
  },
  {
    id: 'databases-devops',
    title: 'Databases & Distributed Caching',
    subtitle: 'Relational, NoSQL & In-Memory Storage',
    description:
      'Designing robust schemas, indexing strategies, and cache systems across PostgreSQL, MongoDB, Redis, Firebase, Elasticsearch, and MySQL.',
    iconName: 'Database',
    technologies: ['PostgreSQL', 'MongoDB', 'Redis', 'Firebase', 'Elasticsearch'],
    tier: 'Primary Focus',
  },
];

export const ABOUT_CARDS: AboutCard[] = [
  {
    title: 'Full-Stack Web Engineering',
    subtitle: 'React, Next.js, Angular & SCSS',
    description: 'Crafting responsive, high-performance interfaces and server-rendered web applications with modular components.',
    iconName: 'Layout',
  },
  {
    title: 'Backend Systems & APIs',
    subtitle: 'Nest.js, Node.js, Laravel, GraphQL & Go',
    description: 'Developing high-throughput RESTful and GraphQL services, secure authentication workflows, and event-driven backends.',
    iconName: 'Server',
  },
  {
    title: 'Agentic AI & Orchestration',
    subtitle: 'LangChain, LangGraph, LangSmith & Groq',
    description: 'Engineering multi-agent graphs, autonomous tool-calling pipelines, and low-latency inference integrations.',
    iconName: 'BrainCircuit',
  },
  {
    title: 'DevOps & Linux Infrastructure',
    subtitle: 'Docker, Kubernetes, Nginx & PM2',
    description: 'Containerizing services, managing clusters, configuring reverse proxies, and maintaining zero-downtime production servers.',
    iconName: 'Terminal',
  },
  {
    title: 'Cybersecurity & Auditing',
    subtitle: 'Nmap, Nikto & Security Hardening',
    description: 'Auditing network perimeters, analyzing vulnerabilities, and hardening APIs against common exploit vectors.',
    iconName: 'Shield',
  },
  {
    title: 'Cross-Platform Mobile Dev',
    subtitle: 'Flutter, BLoC, Rx-Dart & Android',
    description: 'Building smooth mobile apps with reactive state management, clean architecture, and native bridges.',
    iconName: 'Smartphone',
  },
];

export const SKILLS_DATA: SkillItem[] = [
  // ==================== HIGH FOCUS — PRIMARY STACK ====================
  // Frontend Core & Frameworks
  { name: 'HTML5', category: 'Frontend', tier: 'High Focus', subGroup: 'Frontend Core', description: 'Semantic markup, modern HTML5 APIs & accessibility standards', iconName: 'FileCode', isHot: true },
  { name: 'CSS3', category: 'Frontend', tier: 'High Focus', subGroup: 'Frontend Core', description: 'Modern CSS3, animations, Flexbox, Grid & responsive design', iconName: 'Palette', isHot: true },
  { name: 'JavaScript ES6+', category: 'Frontend', tier: 'High Focus', subGroup: 'Frontend Core', description: 'ES6+ standards, async programming, event loop & DOM manipulation', iconName: 'Code', isHot: true },
  { name: 'SCSS', category: 'Frontend', tier: 'High Focus', subGroup: 'Frontend Core', description: 'Modular styling, nested rules, mixins & structured architecture', iconName: 'Palette', isHot: true },
  { name: 'Tailwind CSS', category: 'Frontend', tier: 'High Focus', subGroup: 'Frontend Core', description: 'Utility-first styling, design systems & responsive layouts', iconName: 'Wind', isHot: true },
  { name: 'React.js', category: 'Frontend', tier: 'High Focus', subGroup: 'Frontend Frameworks', description: 'Hooks, component architecture, state management & SPA performance', iconName: 'Atom', isHot: true },
  { name: 'Next.js', category: 'Frontend', tier: 'High Focus', subGroup: 'Frontend Frameworks', description: 'Server components, App Router, SSR/SSG & hybrid rendering', iconName: 'Layers', isHot: true },
  { name: 'Angular', category: 'Frontend', tier: 'High Focus', subGroup: 'Frontend Frameworks', description: 'Enterprise TypeScript SPAs, RxJS observables, services & dependency injection', iconName: 'Component', isHot: true },
  { name: 'Redux', category: 'Frontend', tier: 'High Focus', subGroup: 'Frontend Frameworks', description: 'Predictable centralized state management, Redux Toolkit & slices', iconName: 'Box', isHot: true },

  // Backend & APIs
  { name: 'Nest.js', category: 'Backend', tier: 'High Focus', subGroup: 'Backend Frameworks', description: 'Enterprise progressive TypeScript backend architecture, dependency injection & microservices', iconName: 'Layers', isHot: true },
  { name: 'Node.js', category: 'Backend', tier: 'High Focus', subGroup: 'Backend Runtimes', description: 'Asynchronous event-driven backend runtimes & microservice orchestration', iconName: 'Server', isHot: true },
  { name: 'Express.js', category: 'Backend', tier: 'High Focus', subGroup: 'Backend Frameworks', description: 'Fast, minimalist RESTful API development & robust middleware', iconName: 'Zap', isHot: true },
  { name: 'GraphQL', category: 'Backend', tier: 'High Focus', subGroup: 'API Paradigms', description: 'Schema-first query language, flexible mutations, resolvers & typed client fetching', iconName: 'Zap', isHot: true },
  { name: 'Django', category: 'Backend', tier: 'High Focus', subGroup: 'Backend Frameworks', description: 'Full-featured Python web framework, ORM models & secure auth', iconName: 'Box', isHot: true },
  { name: 'FastAPI', category: 'Backend', tier: 'High Focus', subGroup: 'Backend Frameworks', description: 'High-performance async Python APIs, type validation & OpenAPI', iconName: 'Zap', isHot: true },
  { name: 'Laravel', category: 'Backend', tier: 'High Focus', subGroup: 'Backend Frameworks', description: 'Robust PHP framework, Eloquent ORM, Blade templating, queues & MVC architecture', iconName: 'Shield', isHot: true },
  { name: '.NET', category: 'Backend', tier: 'High Focus', subGroup: 'Backend Frameworks', description: 'Enterprise backend web services, C# runtime & secure controllers', iconName: 'Component', isHot: true },

  // Agentic AI & Orchestration
  { name: 'LangChain', category: 'AI & Agents', tier: 'High Focus', subGroup: 'Agentic Frameworks', description: 'Chaining LLMs, prompt management, tools, vector retrieval & multi-agent memory', iconName: 'BrainCircuit', isHot: true },
  { name: 'LangGraph', category: 'AI & Agents', tier: 'High Focus', subGroup: 'Agentic Frameworks', description: 'Cyclic graph-based stateful multi-agent workflows, supervisor patterns & human-in-the-loop', iconName: 'BrainCircuit', isHot: true },
  { name: 'LangSmith', category: 'AI & Agents', tier: 'High Focus', subGroup: 'Agentic Frameworks', description: 'LLM observability, prompt evaluation, execution tracing, dataset testing & debugging', iconName: 'Sparkles', isHot: true },
  { name: 'Scikit-learn', category: 'AI & Agents', tier: 'High Focus', subGroup: 'Machine Learning', description: 'Supervised classification, regression, clustering & model evaluation', iconName: 'BrainCircuit', isHot: true },
  { name: 'TensorFlow', category: 'AI & Agents', tier: 'High Focus', subGroup: 'Machine Learning', description: 'Deep learning neural networks, computer vision & tensor operations', iconName: 'BrainCircuit', isHot: true },
  { name: 'Pandas', category: 'AI & Agents', tier: 'High Focus', subGroup: 'Data Science', description: 'Dataframe manipulation, data cleaning, filtering & feature extraction', iconName: 'Binary', isHot: true },
  { name: 'NumPy', category: 'AI & Agents', tier: 'High Focus', subGroup: 'Data Science', description: 'High-performance numerical multidimensional array computing', iconName: 'Binary', isHot: true },

  // AI Platforms & API Ecosystem
  { name: 'OpenRouter', category: 'AI Platforms & APIs', tier: 'High Focus', subGroup: 'AI API Gateway', description: 'Unified multi-model API routing across leading open and proprietary LLMs', iconName: 'Sparkles', isHot: true },
  { name: 'Groq', category: 'AI Platforms & APIs', tier: 'High Focus', subGroup: 'Inference Engine', description: 'Ultra-low latency LPU inference serving open-source models at hundreds of tokens/sec', iconName: 'Zap', isHot: true },
  { name: 'Hugging Face', category: 'AI Platforms & APIs', tier: 'High Focus', subGroup: 'Model Hub', description: 'Open-source model repository, transformers pipelines, spaces & dataset integration', iconName: 'BrainCircuit', isHot: true },
  { name: 'Antigravity', category: 'AI Platforms & APIs', tier: 'High Focus', subGroup: 'Agent Platform', description: 'Advanced agentic IDE workflows, pair-programming engines & automation tools', iconName: 'Sparkles', isHot: true },
  { name: 'Google AI Studio', category: 'AI Platforms & APIs', tier: 'High Focus', subGroup: 'AI Platform', description: 'Multimodal prototyping, prompt engineering & system instruction tuning', iconName: 'Sparkles', isHot: true },
  { name: 'Gemini API', category: 'AI Platforms & APIs', tier: 'High Focus', subGroup: 'AI APIs', description: 'Integration of Gemini multimodal models, 1M+ context window & function calling', iconName: 'Sparkles', isHot: true },
  { name: 'ChatGPT', category: 'AI Platforms & APIs', tier: 'High Focus', subGroup: 'AI Technology', description: 'OpenAI GPT-4 API workflows, prompt engineering & function calling', iconName: 'Sparkles', isHot: true },
  { name: 'Claude', category: 'AI Platforms & APIs', tier: 'High Focus', subGroup: 'AI Technology', description: 'Anthropic Claude integration for reasoning, code & document analysis', iconName: 'Sparkles', isHot: true },
  { name: 'DeepSeek', category: 'AI Platforms & APIs', tier: 'High Focus', subGroup: 'AI Technology', description: 'DeepSeek reasoning & code intelligence API integration', iconName: 'Sparkles', isHot: true },
  { name: 'Ollama (local)', category: 'AI Platforms & APIs', tier: 'High Focus', subGroup: 'AI Technology', description: 'Local LLM inference, quantized model serving & private AI setups', iconName: 'BrainCircuit', isHot: true },

  // DevOps, Linux & Infrastructure
  { name: 'Linux', category: 'DevOps & Cloud', tier: 'High Focus', subGroup: 'Operating Systems', description: 'Linux server administration, Bash shell scripting, systemd service management & permissions', iconName: 'Terminal', isHot: true },
  { name: 'Docker', category: 'DevOps & Cloud', tier: 'High Focus', subGroup: 'Containerization', description: 'Container image creation, Docker Compose multi-service orchestration & volume isolation', iconName: 'Container', isHot: true },
  { name: 'Kubernetes', category: 'DevOps & Cloud', tier: 'High Focus', subGroup: 'Container Orchestration', description: 'Cluster orchestration, deployments, service discovery, ingress & auto-scaling', iconName: 'Component', isHot: true },
  { name: 'Nginx', category: 'DevOps & Cloud', tier: 'High Focus', subGroup: 'Web Servers', description: 'Reverse proxy, load balancing, SSL/TLS certificate termination & caching layer', iconName: 'Server', isHot: true },
  { name: 'PM2', category: 'DevOps & Cloud', tier: 'High Focus', subGroup: 'Process Management', description: 'Production Node.js process management, zero-downtime reloads, cluster mode & monitoring', iconName: 'Zap', isHot: true },
  { name: 'Vercel', category: 'DevOps & Cloud', tier: 'High Focus', subGroup: 'Cloud Services', description: 'Edge-deployed frontend and serverless API hosting with continuous integration', iconName: 'Layers', isHot: true },
  { name: 'Render', category: 'DevOps & Cloud', tier: 'High Focus', subGroup: 'Cloud Hosting', description: 'Cloud container hosting for backend web services, Go servers, and workers', iconName: 'Server', isHot: true },
  { name: 'Neon', category: 'Database', tier: 'High Focus', subGroup: 'Cloud Databases', description: 'Serverless PostgreSQL cloud database with branching and autoscaling compute', iconName: 'Database', isHot: true },
  { name: 'Upstash', category: 'Database', tier: 'High Focus', subGroup: 'Cloud Databases', description: 'Serverless Redis in-memory caching with sub-millisecond REST and socket delivery', iconName: 'Zap', isHot: true },
  { name: 'Cloudinary', category: 'DevOps & Cloud', tier: 'High Focus', subGroup: 'Cloud Services', description: 'Cloud media optimization, asset storage pipelines and responsive image CDN', iconName: 'Sparkles', isHot: true },

  // Cybersecurity & Network Auditing
  { name: 'Nmap', category: 'Cybersecurity', tier: 'High Focus', subGroup: 'Network Auditing', description: 'Network discovery, port auditing, service detection & vulnerability script scanning', iconName: 'Shield', isHot: true },
  { name: 'Nikto', category: 'Cybersecurity', tier: 'High Focus', subGroup: 'Security Scanning', description: 'Web server vulnerability scanner checking for dangerous files, outdated software & misconfigurations', iconName: 'Shield', isHot: true },

  // Databases
  { name: 'PostgreSQL', category: 'Database', tier: 'High Focus', subGroup: 'Databases', description: 'ACID transactions, relational indexing, foreign keys & complex joins', iconName: 'Database', isHot: true },
  { name: 'MongoDB', category: 'Database', tier: 'High Focus', subGroup: 'Databases', description: 'Flexible NoSQL document stores, aggregation pipelines & indexing', iconName: 'FolderTree', isHot: true },
  { name: 'Redis', category: 'Database', tier: 'High Focus', subGroup: 'Databases', description: 'In-memory caching, sub-millisecond lookups & session storage', iconName: 'Zap', isHot: true },
  { name: 'Firebase', category: 'Database', tier: 'High Focus', subGroup: 'Databases', description: 'Firestore real-time sync, auth integration & cloud storage', iconName: 'Flame', isHot: true },
  { name: 'Elasticsearch', category: 'Database', tier: 'High Focus', subGroup: 'Databases', description: 'Full-text search indexing, query filtering & distributed analytics', iconName: 'HardDrive', isHot: true },

  // Dev Environment
  { name: 'VS Code', category: 'Tools & Environment', tier: 'High Focus', subGroup: 'Dev Environment', description: 'Primary IDE workflow with advanced debugging, linting & extensions', iconName: 'Code', isHot: true },
  { name: 'Git & GitHub', category: 'Tools & Environment', tier: 'High Focus', subGroup: 'Dev Environment', description: 'Distributed version control, branching strategies & CI/CD workflows', iconName: 'Github', isHot: true },
  { name: 'Figma', category: 'Tools & Environment', tier: 'High Focus', subGroup: 'Design Tools', description: 'Collaborative UI/UX wireframing, component design systems & responsive layouts', iconName: 'Palette', isHot: true },
  { name: 'Postman', category: 'Tools & Environment', tier: 'High Focus', subGroup: 'Dev Environment', description: 'API testing, automated request collections, environment variables & mocking', iconName: 'Zap', isHot: true },
  { name: 'Jupyter Notebook', category: 'Tools & Environment', tier: 'High Focus', subGroup: 'Dev Environment', description: 'Interactive Python notebooks for ML experimentation & data analysis', iconName: 'FileCode', isHot: true },

  // ==================== MID LEVEL — GROWING SKILLS ====================
  // Mobile Development
  { name: 'Flutter', category: 'Mobile', tier: 'Mid Level', subGroup: 'Mobile Development', description: 'Cross-platform mobile apps for Android and iOS from a single Dart codebase', iconName: 'Smartphone' },
  { name: 'Rx-Dart', category: 'Mobile', tier: 'Mid Level', subGroup: 'Mobile Development', description: 'Reactive programming extensions for Dart streams and async events', iconName: 'Zap' },
  { name: 'Provider', category: 'Mobile', tier: 'Mid Level', subGroup: 'Mobile Development', description: 'Lightweight state management and dependency injection in Flutter', iconName: 'Component' },
  { name: 'BLoC', category: 'Mobile', tier: 'Mid Level', subGroup: 'Mobile Development', description: 'Business Logic Component architecture for scalable, testable Flutter apps', iconName: 'Layers' },
  { name: 'Android (Java)', category: 'Mobile', tier: 'Mid Level', subGroup: 'Mobile Development', description: 'Native Android SDK fundamentals, activities, services & Gradle builds', iconName: 'Smartphone' },

  // Real-Time & Automation
  { name: 'Socket.IO', category: 'Real-Time & Automation', tier: 'Mid Level', subGroup: 'Real-Time & Automation', description: 'Bi-directional event-based communication for live chats and feeds', iconName: 'Zap' },
  { name: 'WebRTC', category: 'Real-Time & Automation', tier: 'Mid Level', subGroup: 'Real-Time & Automation', description: 'Peer-to-peer real-time audio, video, and data streaming protocols', iconName: 'Zap' },
  { name: 'Puppeteer', category: 'Real-Time & Automation', tier: 'Mid Level', subGroup: 'Real-Time & Automation', description: 'Headless Chrome browser automation, scraping & synthetic testing', iconName: 'Code' },

  // Additional Frameworks & Storage
  { name: 'MobX', category: 'Frontend', tier: 'Mid Level', subGroup: 'Additional Frameworks', description: 'Transparent functional reactive state management for client applications', iconName: 'Atom' },
  { name: 'NgRx', category: 'Frontend', tier: 'Mid Level', subGroup: 'Additional Frameworks', description: 'Reactive state management for Angular inspired by Redux and RxJS', iconName: 'Component' },
  { name: 'Nuxt.js', category: 'Frontend', tier: 'Mid Level', subGroup: 'Additional Frameworks', description: 'Server-side rendering and static site generator framework for Vue.js', iconName: 'Layers' },
  { name: 'Vue.js', category: 'Frontend', tier: 'Mid Level', subGroup: 'Additional Frameworks', description: 'Progressive JavaScript framework with reactive data binding & SFCs', iconName: 'Palette' },
  { name: 'Vuex', category: 'Frontend', tier: 'Mid Level', subGroup: 'Additional Frameworks', description: 'Centralized state management pattern and library for Vue.js apps', iconName: 'Box' },
  { name: 'jQuery', category: 'Frontend', tier: 'Mid Level', subGroup: 'Additional Frameworks', description: 'Fast DOM selection, event handling, animations & AJAX utilities', iconName: 'Code' },
  { name: 'Bootstrap', category: 'Frontend', tier: 'Mid Level', subGroup: 'Additional Frameworks', description: 'Responsive CSS framework, flexbox grid & UI utility components', iconName: 'Palette' },
  { name: 'MySQL', category: 'Database', tier: 'Mid Level', subGroup: 'Additional Frameworks', description: 'Relational database schema modeling, queries & table management', iconName: 'Database' },

  // Design Tools
  { name: 'Adobe XD', category: 'Tools & Environment', tier: 'Mid Level', subGroup: 'Design Tools', description: 'UI/UX wireframing, interactive prototyping & visual layouts', iconName: 'Palette' },
  { name: 'Illustrator', category: 'Tools & Environment', tier: 'Mid Level', subGroup: 'Design Tools', description: 'Vector graphics creation, branding, icons & digital asset design', iconName: 'Palette' },
  { name: 'XAMPP', category: 'Tools & Environment', tier: 'Mid Level', subGroup: 'Design Tools', description: 'Local Apache, MySQL & PHP server environment for backend testing', iconName: 'Server' },
  { name: 'MongoDB Compass', category: 'Tools & Environment', tier: 'Mid Level', subGroup: 'Design Tools', description: 'Visual GUI for exploring, querying, and indexing MongoDB documents', iconName: 'FolderTree' },
];

export const PROJECTS_DATA: Project[] = [
  {
    id: 'nextrade',
    title: 'NexTrade — Trading Web Application',
    tagline: 'Trading-focused web application with real-time financial tracking',
    description:
      'A trading-focused web application built with Angular on the frontend and Express.js on the backend, styled with SCSS. Uses Firebase for backend services and is deployed on Vercel.',
    image: 'https://res.cloudinary.com/ddm3wxdkf/image/upload/v1791885921/Gemini_Generated_Image_h3t81lh3t81lh3t8.jpg',
    category: 'Frontend / Backend',
    technologies: ['Angular', 'Express.js', 'SCSS', 'Firebase', 'Vercel'],
    githubUrl: 'https://github.com/asraful808088',
    liveUrl: 'https://nex-client-kappa.vercel.app/',
    highlights: [
      'Built reactive financial trading interfaces and asset monitoring using Angular and SCSS',
      'Express.js backend providing streamlined trade endpoints and API caching',
      'Firebase Authentication and cloud database for real-time portfolio persistence',
      'Production deployment and continuous delivery on Vercel',
    ],
    architecture:
      'Angular single-page application communicating with an Express.js server, leveraging Firebase Authentication and Firestore for reliable real-time data persistence.',
    status: 'Featured Live Project',
  },
  {
    id: 'chain-hook-wallet',
    title: 'Chain Hook Wallet',
    tagline: 'Modern cryptocurrency wallet and transaction management platform',
    description:
      'A modern web app built with React.js on the frontend and Django on the backend, styled with Tailwind CSS. Uses PostgreSQL for the database and is deployed on Vercel.',
    image: 'https://res.cloudinary.com/ddm3wxdkf/image/upload/v1791885921/Gemini_Generated_Image_984kvb984kvb984k.jpg',
    category: 'Full-Stack',
    technologies: ['React.js', 'Django', 'Tailwind CSS', 'PostgreSQL', 'OAuth', 'Vercel'],
    githubUrl: 'https://github.com/asraful808088',
    liveUrl: 'https://chain-hook-client.vercel.app',
    highlights: [
      'Fluid React frontend with Tailwind CSS for seamless digital wallet management',
      'Django REST Framework backend ensuring transactional security and ACID compliance',
      'Robust PostgreSQL schema with indexed transaction and balance audit logs',
      'Secure OAuth authentication flow providing payment services as checkout layer for Bigbiz',
    ],
    architecture:
      'React SPA on Vercel interacting with a Django REST backend running PostgreSQL for ledger-grade financial records and secure OAuth payment sessions.',
    status: 'Featured Live Project',
  },
  {
    id: 'bigbiz',
    title: 'Bigbiz — Social Commerce Platform',
    tagline: 'Social commerce platform connecting buyers, sellers, and Chain Hook Wallet',
    description:
      'A social commerce web app where sellers and buyers can post listings much like an e-commerce marketplace, with a built-in buy option that connects through to Chain Hook Wallet for secure payment processing. Next.js frontend (Tailwind CSS) with a Go backend, PostgreSQL (Neon) and Redis (Upstash) for data and caching, and Cloudinary for media. Next.js deployed on Vercel, Go server deployed on Render.',
    image: 'https://res.cloudinary.com/ddm3wxdkf/image/upload/v1791885921/Gemini_Generated_Image_hr6lfyhr6lfyhr6l.jpg',
    category: 'Full-Stack',
    technologies: ['Next.js', 'Go (Gin)', 'PostgreSQL (Neon)', 'Redis (Upstash)', 'Cloudinary', 'Tailwind CSS', 'Vercel', 'Render'],
    githubUrl: 'https://github.com/asraful808088',
    liveUrl: 'https://bigbiz-client.vercel.app',
    highlights: [
      'Next.js App Router frontend with server-side rendering for marketplace discovery',
      'High-throughput Go (Gin) backend microservice deployed on Render',
      'Cloud database with Neon PostgreSQL and low-latency Upstash Redis caching',
      'Cloudinary media upload pipeline and Chain Hook Wallet checkout integration',
    ],
    architecture:
      'Next.js deployed on Vercel connected to a high-speed Go API server on Render, using Neon PostgreSQL, Upstash Redis caching, Cloudinary media CDN, and Chain Hook Wallet payment integration.',
    status: 'Featured Live Project',
  },
];

export const JOURNEY_STEPS: JourneyMilestone[] = [
  {
    number: '01',
    phase: 'Learning (2021–2022)',
    title: 'Logic, OOP & Programming Foundations',
    summary:
      'I started my programming journey with C++ and C#. I studied them from the basics to advanced topics, including Object-Oriented Programming (OOP), and solved many problems to build a strong foundation in logic and problem-solving.',
    technologies: ['C++', 'C#', 'OOP', 'Data Structures & Algorithms', 'Problem Solving'],
    keyOutcomes: [
      'Mastered core algorithmic logic and problem-solving through extensive coding practice',
      'Studied in-depth Object-Oriented Programming (OOP) paradigms in C++ and C#',
      'Built a rock-solid foundation in memory management, data structures, and typed programming',
    ],
  },
  {
    number: '02',
    phase: 'Building (2023–2025)',
    title: 'Web & Mobile Full-Stack Foundations',
    summary:
      'I gained solid knowledge of HTML, CSS, Tailwind CSS, Bootstrap, JavaScript, and Python. I set up and built projects using Django, Node.js, Express.js, and PostgreSQL. I designed user-friendly interfaces with HTML, CSS, JavaScript, and React.js for a better user experience. I also explored mobile development with Java (Android) and Flutter. By the end of this phase, I could build basic full-stack projects on my own.',
    technologies: [
      'HTML5',
      'CSS3',
      'Tailwind CSS',
      'Bootstrap',
      'JavaScript',
      'React.js',
      'Python',
      'Django',
      'Node.js',
      'Express.js',
      'PostgreSQL',
      'Flutter',
      'Android (Java)',
    ],
    keyOutcomes: [
      'Constructed standalone full-stack web applications with React, Node.js, and Django',
      'Crafted responsive, user-friendly UI/UX using Tailwind CSS and Bootstrap',
      'Explored mobile development using Flutter and native Android Java',
    ],
  },
  {
    number: '03',
    phase: 'Experimenting',
    title: 'Multi-Stack Exploration & Backend Deep-Dive',
    summary:
      'After learning the fundamentals, I built many projects using different frontend and backend combinations: FastAPI, Go (Gin), Laravel, .NET, NestJS, Nuxt, Vue.js, Next.js, and Angular. I also worked on advanced topics such as authentication, OAuth login, and secure payments. My goal was to understand how backends really work, compare these stacks with each other, and learn when to use which stack.',
    technologies: [
      'FastAPI',
      'Go (Gin)',
      'Laravel',
      '.NET',
      'NestJS',
      'Next.js',
      'Angular',
      'Vue.js',
      'Nuxt',
      'OAuth Login',
      'Secure Payments',
    ],
    keyOutcomes: [
      'Engineered multi-language backends across Python, Go, PHP, C#, and enterprise TypeScript',
      'Implemented secure authentication mechanisms, OAuth integrations, and payment gateways',
      'Analyzed architectural tradeoffs to know precisely when to use which stack in production',
    ],
  },
  {
    number: '04',
    phase: 'Improving Products',
    title: 'AI-Powered Features & Machine Learning',
    summary:
      'In this phase, I focus on making my software better with new features. I integrate third-party APIs and add AI-powered functionality. To support this, I studied the mathematics behind machine learning and practiced by training models on Kaggle datasets using NumPy, scikit-learn, TensorFlow, and other ML libraries.',
    technologies: [
      'TensorFlow',
      'scikit-learn',
      'NumPy',
      'Pandas',
      'Machine Learning',
      'AI APIs',
      'Kaggle Datasets',
      'API Integrations',
    ],
    keyOutcomes: [
      'Studied the core mathematical principles and linear algebra behind machine learning models',
      'Trained and evaluated predictive ML models on Kaggle datasets using NumPy, scikit-learn, and TensorFlow',
      'Infused intelligent AI-powered functionality and third-party APIs into real-world applications',
    ],
  },
  {
    number: '05',
    phase: 'Improving Engineering',
    title: 'System Quality, DevOps & Security Auditing',
    summary:
      'In this phase, I focus on the quality of my code and systems. I follow clean-code practices, reduce duplication, and write reusable code. I build stateless servers, optimize databases with indexing for faster responses, and learn load balancing. I use DevOps tools such as Docker, Kubernetes, and Linux (with SSH), and I check for security weaknesses using tools like firewalls, Nikto, and Nmap.',
    technologies: [
      'Clean Code',
      'Stateless Servers',
      'Database Indexing',
      'Load Balancing',
      'Docker',
      'Kubernetes',
      'Linux (SSH)',
      'Nginx',
      'PM2',
      'Nmap',
      'Nikto',
      'Firewalls',
    ],
    keyOutcomes: [
      'Applied clean-code standards, DRY principles, and modular, reusable architecture',
      'Engineered stateless servers, database index optimizations, and load-balanced traffic',
      'Automated deployments using Docker & Kubernetes on Linux, and performed security scans with Nmap & Nikto',
    ],
  },
];
