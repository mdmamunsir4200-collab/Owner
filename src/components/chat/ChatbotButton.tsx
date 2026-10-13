import React, { useState } from 'react';
import { Sparkles, MessageSquare, X } from 'lucide-react';

interface ChatbotButtonProps {
  isOpen: boolean;
  onToggle: () => void;
}

export const ChatbotButton: React.FC<ChatbotButtonProps> = ({ isOpen, onToggle }) => {
  const [showTooltip, setShowTooltip] = useState(true);

  return (
    <div className="fixed bottom-5 right-5 sm:bottom-6 sm:right-6 z-40 flex flex-col items-end">
      
      {/* Teaser Bubble: "Don't want to browse? Ask my AI." */}
      {!isOpen && showTooltip && (
        <div className="mb-3 max-w-[240px] p-3 rounded-2xl bg-[#0D1220]/95 backdrop-blur-md border border-[#233152] shadow-xl text-left relative animate-in fade-in slide-in-from-bottom-2 duration-300">
          <button
            onClick={(e) => {
              e.stopPropagation();
              setShowTooltip(false);
            }}
            className="absolute top-2 right-2 text-[#717E94] hover:text-[#A7B0C0] p-0.5 rounded transition-colors"
            title="Dismiss"
          >
            <X className="w-3 h-3" />
          </button>
          
          <p className="text-[11px] font-medium text-[#A7B0C0] leading-tight">
            Don't want to browse? Ask my AI.
          </p>
          <button
            onClick={onToggle}
            className="mt-1 text-xs font-semibold text-[#35D6E8] hover:text-[#4F8CFF] flex items-center gap-1 transition-colors"
          >
            <span>Ask anything about my work</span>
            <span>→</span>
          </button>
        </div>
      )}

      {/* Floating Circular AI Button */}
      <button
        type="button"
        onClick={onToggle}
        className={`relative group w-14 h-14 rounded-full bg-[#080B14] border border-[#2D3F66] shadow-2xl flex items-center justify-center transition-all duration-300 hover:scale-105 active:scale-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#35D6E8] ${
          isOpen ? 'ring-2 ring-[#4F8CFF]' : ''
        }`}
        aria-label="Toggle Asraful AI Assistant"
      >
        {/* Breathing glowing aura */}
        <div 
          className="absolute -inset-1 rounded-full blur-md opacity-70 group-hover:opacity-100 transition-opacity duration-500 animate-pulse -z-10"
          style={{
            background: 'radial-gradient(circle, #35D6E8 0%, #4F8CFF 50%, #8B5CF6 80%, transparent 100%)'
          }}
        />

        {/* Center Icon */}
        <div className="relative text-[#35D6E8] group-hover:text-white transition-colors">
          {isOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <Sparkles className="w-6 h-6 animate-pulse" />
          )}
        </div>

        {/* Small "AI" Badge */}
        <span className="absolute -top-1 -right-1 px-1.5 py-0.5 text-[9px] font-mono font-bold text-white bg-gradient-to-r from-[#4F8CFF] to-[#35D6E8] rounded-full shadow-sm">
          AI
        </span>
      </button>

    </div>
  );
};
