import React from 'react';
import { Sparkles, MessageSquare, ArrowRight, Bot } from 'lucide-react';

interface AiIntroBannerProps {
  onOpenChatWithQuery: (query: string) => void;
}

export const AiIntroBanner: React.FC<AiIntroBannerProps> = ({ onOpenChatWithQuery }) => {
  const exampleQuestions = [
    'What can you build?',
    'What technologies do you use?',
    'Show me your AI projects.',
    'How can I hire you?',
  ];

  return (
    <section className="relative z-10 py-10 -mt-8 mb-4 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="relative rounded-2xl bg-gradient-to-r from-[#0D1220]/90 via-[#10172B]/90 to-[#0D1220]/90 border border-[#233152] p-6 sm:p-8 backdrop-blur-xl shadow-xl overflow-hidden">
        
        {/* Subtle decorative glow */}
        <div 
          className="absolute -right-20 -bottom-20 w-80 h-80 rounded-full blur-[100px] opacity-20 pointer-events-none"
          style={{ background: 'radial-gradient(circle, #35D6E8 0%, #4F8CFF 60%, transparent 100%)' }}
        />

        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 relative z-10">
          
          {/* Left Title & Description */}
          <div className="space-y-2 max-w-xl">
            <div className="inline-flex items-center gap-2 text-xs font-mono text-[#35D6E8] uppercase tracking-wider">
              <Bot className="w-4 h-4 text-[#35D6E8]" />
              <span>Interactive Portfolio Assistant</span>
            </div>
            
            <h3 className="text-2xl sm:text-3xl font-bold text-[#F5F7FA] font-display">
              Meet My AI Assistant
            </h3>

            <p className="text-sm sm:text-base text-[#A7B0C0]">
              Instead of searching through my portfolio, just ask.
            </p>
          </div>

          {/* Right Action & Floating Prompt Pills */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 w-full lg:w-auto">
            
            {/* Example Prompt Chips */}
            <div className="flex flex-wrap items-center gap-2">
              {exampleQuestions.map((question) => (
                <button
                  key={question}
                  onClick={() => onOpenChatWithQuery(question)}
                  className="px-3 py-1.5 rounded-xl bg-[#080B14]/80 hover:bg-[#151D33] border border-[#1F293D] hover:border-[#35D6E8]/50 text-xs text-[#E8EDF5] hover:text-[#35D6E8] transition-all flex items-center gap-1.5 shadow-sm active:scale-95"
                >
                  <Sparkles className="w-3 h-3 text-[#35D6E8]" />
                  <span>{question}</span>
                </button>
              ))}
            </div>

            {/* Primary Open AI Assistant Button */}
            <button
              type="button"
              onClick={() => onOpenChatWithQuery('')}
              className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold text-white bg-gradient-to-r from-[#4F8CFF] to-[#35D6E8] hover:opacity-95 rounded-xl shadow-lg shadow-[#4F8CFF]/20 transition-all duration-200 active:scale-95 shrink-0"
            >
              <span>Ask Asraful AI</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>

          </div>

        </div>

      </div>
    </section>
  );
};
