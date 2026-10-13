import React from 'react';
import { ArrowUp, ArrowRight } from 'lucide-react';

export const FinalCTA: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToContact = (e: React.MouseEvent) => {
    e.preventDefault();
    document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="py-24 relative overflow-hidden border-t border-[#1F293D]/40">
      
      {/* Background glow accent */}
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[70vw] h-[350px] max-w-[900px] rounded-full blur-[140px] opacity-15 pointer-events-none"
        style={{
          background: 'radial-gradient(circle, #4F8CFF 0%, #35D6E8 50%, #8B5CF6 80%, transparent 100%)'
        }}
      />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-8">
        
        <div className="space-y-4">
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#F5F7FA] font-display text-balance leading-tight">
            Let's turn ideas into{' '}
            <span className="bg-gradient-to-r from-[#4F8CFF] via-[#35D6E8] to-[#8B5CF6] bg-clip-text text-transparent">
              something real.
            </span>
          </h2>

          <p className="text-sm sm:text-base font-mono text-[#A7B0C0] tracking-widest uppercase">
            Building · Learning · Creating · Improving
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
          <a
            href="#contact"
            onClick={scrollToContact}
            className="inline-flex items-center gap-2 px-8 py-4 text-sm font-semibold text-white bg-gradient-to-r from-[#4F8CFF] to-[#35D6E8] hover:opacity-95 rounded-xl shadow-xl shadow-[#4F8CFF]/20 hover:shadow-[#4F8CFF]/30 transition-all duration-200 active:scale-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#35D6E8]"
          >
            <span>Start a Conversation</span>
            <ArrowRight className="w-4 h-4" />
          </a>

          <button
            type="button"
            onClick={scrollToTop}
            className="inline-flex items-center gap-2 px-6 py-4 text-sm font-medium text-[#E8EDF5] bg-[#0D1220] hover:bg-[#151D33] border border-[#233152] hover:border-[#4F8CFF]/50 rounded-xl transition-all duration-200 active:scale-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#4F8CFF]"
          >
            <span>Back to Top ↑</span>
          </button>
        </div>

      </div>
    </section>
  );
};
