import React from 'react';
import {
  Compass,
  CheckCircle,
  GitCommit,
  Sparkles,
  ArrowRight,
  TrendingUp,
  Cpu
} from 'lucide-react';
import { JOURNEY_STEPS } from '../data/portfolioData';

export const Journey: React.FC = () => {
  return (
    <section id="journey" className="relative py-24 bg-[#080B14] overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-1/4 right-0 w-80 h-80 bg-[#35D6E8]/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-[#8B5CF6]/5 rounded-full blur-[140px] pointer-events-none" />

      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-dot-pattern opacity-30 pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#35D6E8] mb-3">
            <TrendingUp className="w-3.5 h-3.5" />
            <span>Progression & Milestones</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#F5F7FA] tracking-tight mb-4">
            My Development Journey
          </h2>

          <p className="text-base sm:text-lg text-[#A7B0C0] leading-relaxed mb-6">
            An authentic, project-driven path focused on deliberate mastery: from C++/C# foundations and full-stack web & mobile engineering to multi-stack backend deep-dives, AI-powered products, and production DevOps & security.
          </p>

          {/* Flow Indicator Ribbon */}
          <div className="inline-flex flex-wrap items-center gap-2 px-4 py-2 rounded-xl bg-[#0D1220] border border-[#4F8CFF]/20 text-xs font-mono">
            <span className="text-[#35D6E8] font-bold">01 · Learning</span>
            <ArrowRight className="w-3 h-3 text-[#4F8CFF]/50" />
            <span className="text-[#4F8CFF] font-bold">02 · Building</span>
            <ArrowRight className="w-3 h-3 text-[#4F8CFF]/50" />
            <span className="text-[#8B5CF6] font-bold">03 · Experimenting</span>
            <ArrowRight className="w-3 h-3 text-[#4F8CFF]/50" />
            <span className="text-emerald-400 font-bold">04 · Improving Products</span>
            <ArrowRight className="w-3 h-3 text-[#4F8CFF]/50" />
            <span className="text-cyan-400 font-bold">05 · Improving Engineering</span>
          </div>
        </div>

        {/* Timeline Items */}
        <div className="relative border-l border-[#4F8CFF]/20 ml-4 sm:ml-8 pl-6 sm:pl-10 space-y-12">
          {JOURNEY_STEPS.map((step, index) => (
            <div key={step.number} className="relative group">
              {/* Timeline Node Dot */}
              <div className="absolute -left-[35px] sm:-left-[51px] top-1.5 w-6 h-6 rounded-full bg-[#080B14] border-2 border-[#4F8CFF] flex items-center justify-center group-hover:border-[#35D6E8] group-hover:scale-110 transition-all shadow-[0_0_12px_rgba(79,140,255,0.4)]">
                <span className="w-2 h-2 rounded-full bg-[#35D6E8]" />
              </div>

              {/* Step Card */}
              <div className="p-6 sm:p-7 rounded-2xl bg-[#0D1220]/90 border border-[#4F8CFF]/15 hover:border-[#35D6E8]/40 hover:bg-[#11182C] transition-all duration-300 shadow-[0_4px_24px_rgba(0,0,0,0.3)] hover:shadow-[0_12px_32px_rgba(79,140,255,0.12)]">
                {/* Header row */}
                <div className="flex flex-wrap items-center justify-between gap-3 mb-3">
                  <div className="flex items-center gap-3">
                    <span className="text-xs font-mono font-bold text-[#35D6E8] bg-[#161F33] px-2.5 py-1 rounded-md border border-[#4F8CFF]/20">
                      Phase {step.number} · {step.phase}
                    </span>
                    <h3 className="text-lg sm:text-xl font-bold text-[#F5F7FA]">
                      {step.title}
                    </h3>
                  </div>
                </div>

                <p className="text-sm sm:text-base text-[#A7B0C0] leading-relaxed mb-6">
                  {step.summary}
                </p>

                {/* Key Outcomes */}
                <div className="mb-6 space-y-2">
                  <div className="text-xs font-semibold text-[#E8EDF5] uppercase tracking-wider">
                    Concrete Competencies Acquired:
                  </div>
                  <ul className="space-y-1.5">
                    {step.keyOutcomes.map((outcome, i) => (
                      <li key={i} className="text-xs sm:text-sm text-[#A7B0C0] flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                        <span>{outcome}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tech Pills Footer */}
                <div className="pt-4 border-t border-[#4F8CFF]/10 flex flex-wrap items-center gap-x-2 gap-y-1 text-xs text-[#A7B0C0]">
                  <span className="text-[11px] font-semibold text-[#4F8CFF] uppercase tracking-wider">
                    Technologies:
                  </span>
                  {step.technologies.map((tech, i) => (
                    <React.Fragment key={tech}>
                      <span className="text-[#E8EDF5] font-medium">{tech}</span>
                      {i < step.technologies.length - 1 && (
                        <span className="text-[#4F8CFF]/40" aria-hidden="true">
                          ·
                        </span>
                      )}
                    </React.Fragment>
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
