import React, { useState } from 'react';
import { Flame as HotIcon, TrendingUp } from 'lucide-react';
import { SKILLS_DATA } from '../data/portfolioData';
import { SkillCategory, SkillTier } from '../types/portfolio';
import { TechIcon } from './TechIcon';

type CategoryFilter = 'All' | SkillCategory;
type TierFilter = 'All' | SkillTier;

export const Skills: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<CategoryFilter>('All');
  const [selectedTier, setSelectedTier] = useState<TierFilter>('All');

  const categories: CategoryFilter[] = [
    'All',
    'Frontend',
    'Backend',
    'AI & Agents',
    'AI Platforms & APIs',
    'DevOps & Cloud',
    'Cybersecurity',
    'Mobile',
    'Database',
    'Real-Time & Automation',
    'Tools & Environment',
  ];

  const filteredSkills = SKILLS_DATA.filter((skill) => {
    const matchesCategory = selectedCategory === 'All' || skill.category === selectedCategory;
    const matchesTier = selectedTier === 'All' || skill.tier === selectedTier;
    return matchesCategory && matchesTier;
  });

  const highFocusCount = SKILLS_DATA.filter((s) => s.tier === 'High Focus').length;
  const midLevelCount = SKILLS_DATA.filter((s) => s.tier === 'Mid Level').length;



  const getCategoryBadgeClass = (category: SkillCategory) => {
    switch (category) {
      case 'Frontend':
        return 'text-[#35D6E8] bg-[#35D6E8]/10 border-[#35D6E8]/20';
      case 'Backend':
        return 'text-[#4F8CFF] bg-[#4F8CFF]/10 border-[#4F8CFF]/20';
      case 'AI & Agents':
        return 'text-[#8B5CF6] bg-[#8B5CF6]/10 border-[#8B5CF6]/20';
      case 'AI Platforms & APIs':
        return 'text-fuchsia-400 bg-fuchsia-400/10 border-fuchsia-400/20';
      case 'DevOps & Cloud':
        return 'text-amber-400 bg-amber-400/10 border-amber-400/20';
      case 'Cybersecurity':
        return 'text-rose-400 bg-rose-400/10 border-rose-400/20';
      case 'Mobile':
        return 'text-emerald-400 bg-emerald-400/10 border-emerald-400/20';
      case 'Database':
        return 'text-sky-400 bg-sky-400/10 border-sky-400/20';
      case 'Real-Time & Automation':
        return 'text-cyan-400 bg-cyan-400/10 border-cyan-400/20';
      case 'Tools & Environment':
        return 'text-slate-300 bg-slate-500/10 border-slate-500/20';
      default:
        return 'text-[#A7B0C0] bg-slate-800/40 border-slate-700';
    }
  };

  return (
    <section id="skills" className="py-24 relative border-t border-[#1F293D]/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 text-xs font-mono text-[#35D6E8] tracking-widest uppercase mb-3">
              <span>Stack // Comprehensive Tech Arsenal</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#F5F7FA] font-display">
              Technical Skills & Ecosystem
            </h2>
            <p className="mt-4 text-base text-[#A7B0C0] leading-relaxed">
              Encompassing modern full-stack engineering, Nest.js & GraphQL backends, LangChain/LangGraph agent orchestration, AI platform gateways (Groq, OpenRouter, Gemini), DevOps containerization (Docker, K8s, Nginx, PM2), and cybersecurity scanning (Nmap, Nikto).
            </p>
          </div>

          {/* Tier Badges & Quick Toggles */}
          <div className="flex flex-wrap items-center gap-2 p-1.5 bg-[#0D1220] rounded-xl border border-[#1F293D] self-start md:self-auto">
            <button
              onClick={() => setSelectedTier('All')}
              className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-all ${
                selectedTier === 'All'
                  ? 'bg-[#182238] text-white border border-[#2D3F66] shadow-sm'
                  : 'text-[#A7B0C0] hover:text-white'
              }`}
            >
              All Tiers ({SKILLS_DATA.length})
            </button>
            <button
              onClick={() => setSelectedTier('High Focus')}
              className={`inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-lg transition-all ${
                selectedTier === 'High Focus'
                  ? 'bg-rose-500/20 text-rose-300 border border-rose-500/40 shadow-sm'
                  : 'text-[#A7B0C0] hover:text-rose-300'
              }`}
            >
              <HotIcon className="w-3 h-3 text-rose-400" />
              <span>High Focus ({highFocusCount})</span>
            </button>
            <button
              onClick={() => setSelectedTier('Mid Level')}
              className={`inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-lg transition-all ${
                selectedTier === 'Mid Level'
                  ? 'bg-amber-500/20 text-amber-300 border border-amber-500/40 shadow-sm'
                  : 'text-[#A7B0C0] hover:text-amber-300'
              }`}
            >
              <TrendingUp className="w-3 h-3 text-amber-400" />
              <span>Mid Level ({midLevelCount})</span>
            </button>
          </div>
        </div>

        {/* Category Filters Bar */}
        <div className="flex flex-wrap items-center gap-1.5 p-1.5 mb-8 bg-[#0D1220] rounded-xl border border-[#1F293D]">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-3.5 py-1.5 text-xs font-medium rounded-lg transition-all whitespace-nowrap focus:outline-none focus-visible:ring-2 focus-visible:ring-[#4F8CFF] ${
                selectedCategory === category
                  ? 'bg-[#182238] text-[#35D6E8] shadow-sm border border-[#2D3F66]'
                  : 'text-[#A7B0C0] hover:text-[#F5F7FA] hover:bg-[#111827]'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Skills Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {filteredSkills.map((skill) => (
            <div
              key={skill.name}
              className={`group p-5 rounded-xl bg-[#0D1220] border transition-all duration-200 flex flex-col justify-between hover:-translate-y-1 hover:shadow-lg ${
                skill.tier === 'High Focus'
                  ? 'border-[#1F293D] hover:border-[#4F8CFF]/60 hover:shadow-[#4F8CFF]/10'
                  : 'border-[#1F293D]/70 hover:border-amber-400/50 hover:shadow-amber-400/10'
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="p-2 rounded-lg bg-[#111827] border border-[#1F293D] group-hover:border-[#35D6E8]/40 transition-colors flex items-center justify-center shrink-0 w-9 h-9">
                    <TechIcon name={skill.name} className="w-5 h-5" />
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span
                      className={`text-[10px] font-mono px-2 py-0.5 rounded-full border ${getCategoryBadgeClass(
                        skill.category
                      )}`}
                    >
                      {skill.category}
                    </span>
                  </div>
                </div>

                <div className="flex items-center justify-between mb-1">
                  <h3 className="text-base font-semibold text-[#F5F7FA] group-hover:text-white transition-colors">
                    {skill.name}
                  </h3>
                  {skill.tier === 'High Focus' ? (
                    <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-rose-950/60 text-rose-400 border border-rose-800/40">
                      Primary
                    </span>
                  ) : (
                    <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-amber-950/60 text-amber-400 border border-amber-800/40">
                      Growing
                    </span>
                  )}
                </div>

                <p className="text-[11px] font-mono text-[#35D6E8]/80 mb-2">
                  {skill.subGroup}
                </p>

                <p className="text-xs text-[#A7B0C0] leading-relaxed">
                  {skill.description}
                </p>
              </div>

              {/* Bottom Subtle Indicator */}
              <div className="mt-4 pt-3 border-t border-[#1F293D]/50 flex items-center justify-between text-[11px] text-[#A7B0C0] font-mono">
                <span>{skill.tier === 'High Focus' ? 'Daily Stack' : 'Active Use'}</span>
                <span
                  className={`w-1.5 h-1.5 rounded-full ${
                    skill.tier === 'High Focus'
                      ? 'bg-rose-400 group-hover:bg-[#35D6E8]'
                      : 'bg-amber-400 group-hover:bg-amber-300'
                  } transition-colors`}
                />
              </div>
            </div>
          ))}
        </div>

        {/* Philosophy and Edge Banner */}
        <div className="mt-12 p-6 rounded-2xl bg-gradient-to-r from-[#090D18] to-[#0D1220] border border-[#1F293D] flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="space-y-1.5 max-w-2xl">
            <div className="inline-flex items-center gap-2 text-xs font-mono text-[#fbbf24] uppercase tracking-wider">
              <span>Engineering Philosophy</span>
            </div>
            <p className="text-sm text-[#E8EDF5] font-medium leading-relaxed">
              "My real edge isn't just the list — it's how fast I can adapt to new tools, multi-agent frameworks, and cloud infrastructure to ship production software."
            </p>
          </div>
          <div className="flex items-center gap-4 text-xs font-mono shrink-0">
            <div className="p-3 rounded-xl bg-[#111827] border border-[#1F293D] text-center">
              <span className="block text-lg font-bold text-[#35D6E8]">45+</span>
              <span className="text-[#A7B0C0] text-[11px]">Technologies</span>
            </div>
            <div className="p-3 rounded-xl bg-[#111827] border border-[#1F293D] text-center">
              <span className="block text-lg font-bold text-[#4F8CFF]">8+</span>
              <span className="text-[#A7B0C0] text-[11px]">Core Domains</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
