import React from 'react';
import {
  Layout,
  Server,
  BrainCircuit,
  Smartphone,
  Zap,
  Database,
  CheckCircle,
  Sparkles,
  Rocket,
  Lightbulb,
  Target,
  Globe,
  Terminal,
  Shield,
} from 'lucide-react';
import { DEVELOPER_INFO, DOMAINS_DATA } from '../data/portfolioData';
import { TechIcon } from './TechIcon';

export const About: React.FC = () => {
  const getDomainIcon = (iconName: string) => {
    switch (iconName) {
      case 'Layout':
        return <Layout className="w-5 h-5 text-[#35D6E8]" />;
      case 'Server':
        return <Server className="w-5 h-5 text-[#4F8CFF]" />;
      case 'BrainCircuit':
        return <BrainCircuit className="w-5 h-5 text-[#8B5CF6]" />;
      case 'Sparkles':
        return <Sparkles className="w-5 h-5 text-fuchsia-400" />;
      case 'Terminal':
        return <Terminal className="w-5 h-5 text-emerald-400" />;
      case 'Shield':
        return <Shield className="w-5 h-5 text-rose-400" />;
      case 'Smartphone':
        return <Smartphone className="w-5 h-5 text-emerald-400" />;
      case 'Zap':
        return <Zap className="w-5 h-5 text-amber-400" />;
      case 'Database':
        return <Database className="w-5 h-5 text-sky-400" />;
      default:
        return <Layout className="w-5 h-5 text-[#35D6E8]" />;
    }
  };

  const differentiators = [
    {
      icon: <Rocket className="w-4 h-4 text-rose-400 shrink-0" />,
      text: 'I adapt to new tools, LLM frameworks & infrastructure in record time',
      border: 'border-l-rose-500',
    },
    {
      icon: <Lightbulb className="w-4 h-4 text-amber-400 shrink-0" />,
      text: 'Always curious about agentic architectures, stateful graphs & low-latency models',
      border: 'border-l-amber-500',
    },
    {
      icon: <Target className="w-4 h-4 text-emerald-400 shrink-0" />,
      text: 'Relentless focus on shipping smart, resilient, and secure production systems',
      border: 'border-l-emerald-500',
    },
    {
      icon: <Globe className="w-4 h-4 text-sky-400 shrink-0" />,
      text: 'Full-spectrum stack: from UI pixels to Nest/Go backends, Docker/K8s clusters, and security audits',
      border: 'border-l-sky-500',
    },
  ];

  return (
    <section id="about" className="py-24 relative border-t border-[#1F293D]/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="inline-flex items-center gap-2 text-xs font-mono text-[#35D6E8] tracking-widest uppercase mb-3">
            <span>01 // The Engineer</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#F5F7FA] font-display text-balance mb-6">
            About Me, Mindset & Specialized Domains
          </h2>
          <div className="space-y-4 text-base sm:text-lg text-[#A7B0C0] leading-relaxed">
            <p>
              Hi, I'm <strong className="text-white">Asraful</strong> — a driven full-stack, AI, and DevOps engineer from Bangladesh with a deep passion for building smart, high-quality, and secure applications. My work spans the entire modern software lifecycle: from responsive frontend designs to enterprise Nest.js/Laravel backends, multi-agent LangGraph workflows, and production Kubernetes clusters.
            </p>
            <p>
              I move fast. I don't wait for a perfect setup — I <strong>adapt, learn, and ship</strong>. Whether it's an AI platform integration via Groq and OpenRouter, a Docker/Nginx production deployment, or a security audit with Nmap and Nikto, I pick up new tools in record time and build things that actually matter.
            </p>
          </div>
        </div>

        {/* Identity & Core Highlights Box */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16">
          {/* Left Column: Core Identity Specs */}
          <div className="lg:col-span-6 p-6 rounded-2xl bg-[#0D1220] border border-[#1F293D] flex flex-col justify-between">
            <div>
              <div className="inline-flex items-center gap-2 text-xs font-mono text-[#4F8CFF] uppercase tracking-wider mb-4">
                <span>Core Engineering Identity</span>
              </div>
              <div className="space-y-3 font-mono text-xs">
                <div className="flex items-center justify-between p-3 rounded-xl bg-[#080B14] border border-[#1F293D]/60">
                  <span className="text-[#A7B0C0]">Primary Focus</span>
                  <span className="text-[#35D6E8] font-semibold">{DEVELOPER_INFO.coreIdentity.primaryFocus}</span>
                </div>
                <div className="flex items-center justify-between p-3 rounded-xl bg-[#080B14] border border-[#1F293D]/60">
                  <span className="text-[#A7B0C0]">Secondary Focus</span>
                  <span className="text-amber-400 font-semibold">{DEVELOPER_INFO.coreIdentity.secondaryFocus}</span>
                </div>
                <div className="flex items-center justify-between p-3 rounded-xl bg-[#080B14] border border-[#1F293D]/60">
                  <span className="text-[#A7B0C0]">Superpower</span>
                  <span className="text-emerald-400 font-semibold">Fast Learner</span>
                </div>
                <div className="flex items-center justify-between p-3 rounded-xl bg-[#080B14] border border-[#1F293D]/60">
                  <span className="text-[#A7B0C0]">Mindset</span>
                  <span className="text-white font-semibold">Build Smart & Secure Things</span>
                </div>
                <div className="flex items-center justify-between p-3 rounded-xl bg-[#080B14] border border-[#1F293D]/60">
                  <span className="text-[#A7B0C0]">Status</span>
                  <span className="text-emerald-400 font-semibold flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    Available for Hire
                  </span>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-5 border-t border-[#1F293D]/60 flex items-center justify-between text-xs text-[#A7B0C0]">
              <span className="font-mono">Location: {DEVELOPER_INFO.location}</span>
              <span className="text-[#35D6E8] font-mono">Open to Global Remote</span>
            </div>
          </div>

          {/* Right Column: What Makes Me Different */}
          <div className="lg:col-span-6 p-6 rounded-2xl bg-[#0D1220] border border-[#1F293D] flex flex-col justify-between">
            <div>
              <div className="inline-flex items-center gap-2 text-xs font-mono text-[#fbbf24] uppercase tracking-wider mb-4">
                <span>What Sets Me Apart</span>
              </div>
              <div className="space-y-3">
                {differentiators.map((diff, idx) => (
                  <div
                    key={idx}
                    className={`p-3.5 rounded-xl bg-[#080B14] border border-[#1F293D]/60 border-l-4 ${diff.border} flex items-center gap-3 text-xs sm:text-sm text-[#E8EDF5]`}
                  >
                    {diff.icon}
                    <span>{diff.text}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6 pt-5 border-t border-[#1F293D]/60">
              <p className="text-xs text-[#A7B0C0] italic leading-relaxed">
                "My edge is how quickly I can master new tools, agentic patterns, and cloud platforms — delivering scalable and battle-tested code without delay."
              </p>
            </div>
          </div>
        </div>

        {/* Core Domains Header */}
        <div className="mb-8">
          <div className="inline-flex items-center gap-2 text-xs font-mono text-[#35D6E8] uppercase tracking-wider mb-2">
            <span>Specializations</span>
          </div>
          <h3 className="text-2xl sm:text-3xl font-bold text-[#F5F7FA] font-display">
            Key Engineering Domains ({DOMAINS_DATA.length})
          </h3>
          <p className="mt-2 text-sm text-[#A7B0C0]">
            The 8+ primary domains where I apply engineering rigor, autonomous frameworks, and cloud infrastructure.
          </p>
        </div>

        {/* Domains Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {DOMAINS_DATA.map((domain) => (
            <div
              key={domain.id}
              className="group p-6 rounded-2xl bg-[#0D1220] border border-[#1F293D] hover:border-[#4F8CFF]/60 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-[#4F8CFF]/5 relative flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="p-2.5 rounded-xl bg-[#111827] border border-[#1F293D] group-hover:border-[#35D6E8]/40 transition-colors">
                    {getDomainIcon(domain.iconName)}
                  </div>
                  <span
                    className={`text-[10px] font-mono px-2 py-0.5 rounded-full border ${
                      domain.tier === 'Primary Focus'
                        ? 'text-[#35D6E8] bg-[#35D6E8]/10 border-[#35D6E8]/20'
                        : domain.tier === 'Secondary Focus'
                        ? 'text-amber-400 bg-amber-400/10 border-amber-400/20'
                        : 'text-rose-400 bg-rose-400/10 border-rose-400/20'
                    }`}
                  >
                    {domain.tier}
                  </span>
                </div>

                <h4 className="text-lg font-semibold text-[#F5F7FA] group-hover:text-white transition-colors mb-1">
                  {domain.title}
                </h4>
                <p className="text-xs text-[#35D6E8]/90 font-medium mb-3">
                  {domain.subtitle}
                </p>
                <p className="text-xs text-[#A7B0C0] leading-relaxed mb-4">
                  {domain.description}
                </p>
              </div>

              {/* Technologies Tag List */}
              <div className="pt-4 border-t border-[#1F293D]/60">
                <div className="flex flex-wrap gap-1.5">
                  {domain.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="inline-flex items-center gap-1.5 text-[10px] font-mono px-2 py-0.5 rounded bg-[#111827] border border-[#1F293D] text-[#E8EDF5]"
                    >
                      <TechIcon name={tech} className="w-3.5 h-3.5 shrink-0" />
                      <span>{tech}</span>
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
