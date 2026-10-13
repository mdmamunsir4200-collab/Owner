import React, { useState } from 'react';
import {
  ArrowDown,
  Code2,
  Sparkles,
  MapPin,
  Terminal,
  Cpu,
  Database,
  CheckCircle2,
  Copy,
  Check,
  User,
  Shield,
  Smartphone,
  ExternalLink,
  Eye,
  Download,
} from 'lucide-react';
import { DEVELOPER_INFO } from '../data/portfolioData';

interface HeroProps {
  onOpenResume?: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenResume }) => {
  const [visualMode, setVisualMode] = useState<'terminal' | 'profile'>('profile');
  const [activeTab, setActiveTab] = useState<'agent' | 'fullstack' | 'devops'>('agent');
  const [copiedCode, setCopiedCode] = useState(false);

  const agentSnippet = `# LangGraph Multi-Agent Graph with Groq LPU
from langgraph.graph import StateGraph, END
from langchain_groq import ChatGroq

llm = ChatGroq(model_name="llama-3.3-70b-versatile", temperature=0.1)

workflow = StateGraph(AgentState)
workflow.add_node("supervisor", supervisor_node)
workflow.add_node("coder", coder_agent)
workflow.add_node("auditor", security_audit_node)

workflow.add_edge("coder", "auditor")
workflow.add_conditional_edges("auditor", should_continue, {
    "retry": "coder",
    "deploy": END
})
app = workflow.compile()`;

  const fullstackSnippet = `// Nest.js GraphQL Enterprise Microservice
import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { TradeService } from './trade.service';

@Resolver('Trade')
export class TradeResolver {
  constructor(private readonly tradeService: TradeService) {}

  @Mutation(() => TradeReceipt)
  async executeTrade(@Args('input') input: ExecuteTradeInput) {
    // Processes transaction with ledger audit & cache update
    return this.tradeService.processSecureOrder(input);
  }
}`;

  const devopsSnippet = `# Production Docker Compose & Nginx Configuration
services:
  api:
    build: .
    restart: always
    environment:
      - NODE_ENV=production
    deploy:
      replicas: 3
  nginx:
    image: nginx:alpine
    ports:
      - "80:80"
      - "443:443"
    volumes:
      - ./nginx.conf:/etc/nginx/nginx.conf:ro
    depends_on:
      - api`;

  const handleCopyCode = () => {
    let code = agentSnippet;
    if (activeTab === 'fullstack') code = fullstackSnippet;
    if (activeTab === 'devops') code = devopsSnippet;
    navigator.clipboard.writeText(code);
    setCopiedCode(true);
    setTimeout(() => setCopiedCode(false), 2000);
  };

  const scrollToProjects = (e: React.MouseEvent) => {
    e.preventDefault();
    document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToContact = (e: React.MouseEvent) => {
    e.preventDefault();
    document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Personal Intro & CTAs */}
          <div className="lg:col-span-7 flex flex-col items-start space-y-6">
            {/* Status indicator & Location */}
            <div className="flex flex-wrap items-center gap-3 text-xs">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#0D1220] border border-[#1F293D] text-[#E8EDF5]">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                <span className="font-medium tracking-wide">Available for Hire · Open to Work</span>
              </div>

              <div className="inline-flex items-center gap-1.5 text-[#A7B0C0]">
                <MapPin className="w-3.5 h-3.5 text-[#35D6E8]" />
                <span>{DEVELOPER_INFO.location} 🇧🇩</span>
              </div>
            </div>

            {/* Main Heading */}
            <div className="space-y-3">
              <div className="text-xs font-mono uppercase tracking-widest text-[#35D6E8]">
                Introducing the Engineer
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#F5F7FA] font-display text-balance leading-[1.12]">
                MD{' '}
                <span className="bg-gradient-to-r from-[#4F8CFF] via-[#35D6E8] to-[#8B5CF6] bg-clip-text text-transparent">
                  Asraful
                </span>{' '}
                Islam
              </h1>

              <p className="text-xl sm:text-2xl font-semibold text-[#E8EDF5] tracking-tight">
                {DEVELOPER_INFO.role}
              </p>
            </div>

            {/* Short Description */}
            <p className="text-base sm:text-lg text-[#A7B0C0] max-w-2xl leading-relaxed">
              {DEVELOPER_INFO.shortBio}
            </p>

            {/* Badges Ribbon */}
            <div className="flex flex-wrap items-center gap-2.5">
              <span className="px-3 py-1 rounded-md text-xs font-mono font-medium bg-emerald-950/40 border border-emerald-500/30 text-emerald-400">
                ● Available for Hire
              </span>
              <span className="px-3 py-1 rounded-md text-xs font-mono font-medium bg-rose-950/40 border border-rose-500/30 text-rose-300">
                45+ Technologies
              </span>
              <span className="px-3 py-1 rounded-md text-xs font-mono font-medium bg-[#4F8CFF]/15 border border-[#4F8CFF]/30 text-[#4F8CFF]">
                8+ Domains
              </span>
              <span className="px-3 py-1 rounded-md text-xs font-mono font-medium bg-[#8B5CF6]/15 border border-[#8B5CF6]/30 text-[#8B5CF6]">
                Full-Stack + AI + DevOps
              </span>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href="#projects"
                onClick={scrollToProjects}
                className="inline-flex items-center gap-2 px-5 py-3 text-sm font-semibold text-white bg-gradient-to-r from-[#4F8CFF] to-[#35D6E8] hover:opacity-95 rounded-xl shadow-lg shadow-[#4F8CFF]/20 hover:shadow-[#4F8CFF]/30 transition-all duration-200 active:scale-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#35D6E8]"
              >
                <span>View Projects</span>
                <ArrowDown className="w-4 h-4" />
              </a>

              <button
                type="button"
                onClick={onOpenResume}
                className="inline-flex items-center gap-2 px-4 py-3 text-sm font-semibold text-[#35D6E8] bg-[#0D1220] hover:bg-[#151D33] border border-[#233152] hover:border-[#35D6E8]/60 rounded-xl transition-all duration-200 active:scale-95 shadow-sm"
              >
                <Eye className="w-4 h-4 text-[#35D6E8]" />
                <span>View Resume</span>
              </button>

              <a
                href="/cv.pdf"
                download="MD_Asraful_Islam_CV.pdf"
                className="inline-flex items-center gap-2 px-4 py-3 text-sm font-semibold text-[#F5F7FA] bg-[#0D1220] hover:bg-[#151D33] border border-[#233152] hover:border-[#4F8CFF]/50 rounded-xl transition-all duration-200 active:scale-95 shadow-sm"
              >
                <Download className="w-4 h-4 text-emerald-400" />
                <span>Download CV</span>
              </a>

              <a
                href="#contact"
                onClick={scrollToContact}
                className="inline-flex items-center gap-2 px-4 py-3 text-sm font-semibold text-[#A7B0C0] hover:text-white bg-[#0D1220]/60 hover:bg-[#151D33] border border-[#1F293D] rounded-xl transition-all duration-200 active:scale-95"
              >
                <span>Hire Me</span>
              </a>
            </div>

            {/* Metrics Counter Bar */}
            <div className="grid grid-cols-4 gap-4 pt-6 border-t border-[#1F293D]/60 w-full text-center">
              <div className="p-2.5 rounded-xl bg-[#0D1220] border border-[#1F293D]/60">
                <div className="text-xl sm:text-2xl font-bold font-mono text-[#35D6E8]">45+</div>
                <div className="text-[11px] text-[#A7B0C0]">Technologies</div>
              </div>
              <div className="p-2.5 rounded-xl bg-[#0D1220] border border-[#1F293D]/60">
                <div className="text-xl sm:text-2xl font-bold font-mono text-[#4F8CFF]">8+</div>
                <div className="text-[11px] text-[#A7B0C0]">Domains</div>
              </div>
              <div className="p-2.5 rounded-xl bg-[#0D1220] border border-[#1F293D]/60">
                <div className="text-xl sm:text-2xl font-bold font-mono text-[#8B5CF6]">∞</div>
                <div className="text-[11px] text-[#A7B0C0]">Curiosity</div>
              </div>
              <div className="p-2.5 rounded-xl bg-[#0D1220] border border-[#1F293D]/60">
                <div className="text-xl sm:text-2xl font-bold font-mono text-emerald-400">1</div>
                <div className="text-[11px] text-[#A7B0C0]">Mission</div>
              </div>
            </div>
          </div>

          {/* Right Column: Profile Avatar + Terminal Card */}
          <div className="lg:col-span-5 relative">
            {/* Glowing circular backdrop */}
            <div
              className="absolute -inset-4 rounded-3xl blur-2xl opacity-40 -z-10"
              style={{
                background:
                  'radial-gradient(circle, rgba(79, 140, 255, 0.35) 0%, rgba(53, 214, 232, 0.2) 50%, rgba(139, 92, 246, 0.1) 80%, transparent 100%)',
              }}
            />

            {/* Visual Card Container */}
            <div className="relative rounded-2xl bg-[#0D1220]/90 border border-[#1F293D] shadow-2xl overflow-hidden backdrop-blur-xl">
              {/* Card Switcher Top Bar */}
              <div className="flex items-center justify-between px-4 py-3 bg-[#080B14]/80 border-b border-[#1F293D]">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-[#EF4444]/80" />
                  <span className="w-3 h-3 rounded-full bg-[#F59E0B]/80" />
                  <span className="w-3 h-3 rounded-full bg-[#10B981]/80" />
                  <span className="ml-2 text-xs font-mono text-[#A7B0C0]">
                    {visualMode === 'profile' ? 'profile-view' : 'terminal-view'}
                  </span>
                </div>

                <div className="flex items-center gap-1.5 bg-[#0D1220] p-1 rounded-lg border border-[#1F293D]">
                  <button
                    onClick={() => setVisualMode('profile')}
                    className={`px-2.5 py-1 rounded text-xs font-mono transition-colors flex items-center gap-1 ${
                      visualMode === 'profile'
                        ? 'bg-[#182238] text-[#35D6E8]'
                        : 'text-[#A7B0C0] hover:text-white'
                    }`}
                  >
                    <User className="w-3 h-3" />
                    <span>Bio</span>
                  </button>
                </div>
              </div>

              {/* View 1: Profile Avatar with Status Ring */}
              {visualMode === 'profile' ? (
                <div className="p-6 flex flex-col items-center text-center space-y-5">
                  <div className="relative mt-2">
                    <div className="w-36 h-36 rounded-full p-1 bg-gradient-to-tr from-[#4F8CFF] via-[#35D6E8] to-[#8B5CF6] shadow-xl shadow-[#4F8CFF]/20">
                      <div className="w-full h-full rounded-full overflow-hidden bg-[#080B14]">
                        <img
                          src={DEVELOPER_INFO.photoUrl}
                          alt="MD Asraful Islam"
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-white font-display">
                      MD Asraful Islam
                    </h3>
                    <p className="text-xs text-[#35D6E8] font-mono mt-0.5">
                      Full-Stack · AI & DevOps Engineer
                    </p>
                  </div>

                  {/* Summary Rows */}
                  <div className="w-full space-y-2 text-xs font-mono text-left pt-2">
                    <div className="flex items-center justify-between p-2.5 rounded-lg bg-[#080B14] border border-[#1F293D]/60">
                      <span className="text-[#A7B0C0]">Status</span>
                      <span className="text-emerald-400">● Available for Hire</span>
                    </div>
                    <div className="flex items-center justify-between p-2.5 rounded-lg bg-[#080B14] border border-[#1F293D]/60">
                      <span className="text-[#A7B0C0]">Location</span>
                      <span className="text-white">Bangladesh 🇧🇩</span>
                    </div>
                    <div className="flex items-center justify-between p-2.5 rounded-lg bg-[#080B14] border border-[#1F293D]/60">
                      <span className="text-[#A7B0C0]">Core Domains</span>
                      <span className="text-[#4F8CFF]">8+ Active Domains</span>
                    </div>
                  </div>

                  {/* Action Link to Featured Project */}
                  <div className="w-full pt-1">
                    <a
                      href="https://nex-client-kappa.vercel.app/"
                      target="_blank"
                      rel="noreferrer"
                      className="w-full inline-flex items-center justify-center gap-2 py-2 px-3 rounded-lg text-xs font-mono font-medium text-[#35D6E8] bg-[#111827] border border-[#1F293D] hover:border-[#35D6E8]/40 transition-colors"
                    >
                      <span>Explore Live NexTrade</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                </div>
              ) : (
                /* View 2: Interactive Terminal */
                <div>
                  {/* File Tabs */}
                  <div className="flex items-center border-b border-[#1F293D] bg-[#0A0E1A] text-xs font-mono">
                    <button
                      onClick={() => setActiveTab('agent')}
                      className={`flex items-center gap-1.5 px-3 py-2 border-r border-[#1F293D] transition-colors ${
                        activeTab === 'agent'
                          ? 'bg-[#0D1220] text-[#8B5CF6] border-b-2 border-b-[#8B5CF6]'
                          : 'text-[#A7B0C0] hover:text-[#F5F7FA]'
                      }`}
                    >
                      <Sparkles className="w-3 h-3 text-[#8B5CF6]" />
                      <span>agent_graph.py</span>
                    </button>
                    <button
                      onClick={() => setActiveTab('fullstack')}
                      className={`flex items-center gap-1.5 px-3 py-2 border-r border-[#1F293D] transition-colors ${
                        activeTab === 'fullstack'
                          ? 'bg-[#0D1220] text-[#4F8CFF] border-b-2 border-b-[#4F8CFF]'
                          : 'text-[#A7B0C0] hover:text-[#F5F7FA]'
                      }`}
                    >
                      <Code2 className="w-3 h-3 text-[#4F8CFF]" />
                      <span>nest_trade.ts</span>
                    </button>
                    <button
                      onClick={() => setActiveTab('devops')}
                      className={`flex items-center gap-1.5 px-3 py-2 border-r border-[#1F293D] transition-colors ${
                        activeTab === 'devops'
                          ? 'bg-[#0D1220] text-emerald-400 border-b-2 border-b-emerald-400'
                          : 'text-[#A7B0C0] hover:text-[#F5F7FA]'
                      }`}
                    >
                      <Terminal className="w-3 h-3 text-emerald-400" />
                      <span>compose.yml</span>
                    </button>

                    <button
                      onClick={handleCopyCode}
                      className="ml-auto p-1.5 mr-2 text-[#A7B0C0] hover:text-white"
                      title="Copy snippet"
                    >
                      {copiedCode ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                    </button>
                  </div>

                  {/* Code Area */}
                  <div className="p-4 overflow-x-auto text-[12px] font-mono leading-relaxed bg-[#090D18] h-72">
                    <pre className="text-[#A7B0C0]">
                      <code>
                        {activeTab === 'agent'
                          ? agentSnippet
                          : activeTab === 'fullstack'
                          ? fullstackSnippet
                          : devopsSnippet}
                      </code>
                    </pre>
                  </div>

                  {/* Status Bar */}
                  <div className="px-4 py-2.5 bg-[#080B14]/90 border-t border-[#1F293D] flex items-center justify-between text-[11px] font-mono text-[#A7B0C0]">
                    <span className="text-emerald-400 flex items-center gap-1">
                      <CheckCircle2 className="w-3 h-3" /> LangGraph & Groq Online
                    </span>
                    <span>Docker · K8s · Nginx · PM2</span>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
