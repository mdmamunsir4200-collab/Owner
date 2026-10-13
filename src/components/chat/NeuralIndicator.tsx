import React from 'react';

export const NeuralIndicator: React.FC = () => {
  return (
    <div className="flex items-center gap-2 px-3 py-2 rounded-xl bg-[#080B14]/90 border border-[#1F293D] w-fit shadow-sm">
      {/* SVG Neural Node Interconnect Network */}
      <svg className="w-10 h-5" viewBox="0 0 50 20" fill="none">
        {/* Connecting Lines */}
        <line
          x1="8"
          y1="10"
          x2="25"
          y2="10"
          stroke="#4F8CFF"
          strokeWidth="1.5"
          className="opacity-40 animate-pulse"
        />
        <line
          x1="25"
          y1="10"
          x2="42"
          y2="10"
          stroke="#35D6E8"
          strokeWidth="1.5"
          className="opacity-40 animate-pulse"
          style={{ animationDelay: '200ms' }}
        />

        {/* Node 1 */}
        <circle cx="8" cy="10" r="3.5" fill="#4F8CFF" className="animate-pulse">
          <animate
            attributeName="r"
            values="2.5;4;2.5"
            dur="1s"
            repeatCount="indefinite"
          />
        </circle>
        
        {/* Node 2 */}
        <circle cx="25" cy="10" r="3.5" fill="#35D6E8">
          <animate
            attributeName="r"
            values="2.5;4.5;2.5"
            dur="1s"
            begin="0.2s"
            repeatCount="indefinite"
          />
        </circle>

        {/* Node 3 */}
        <circle cx="42" cy="10" r="3.5" fill="#8B5CF6">
          <animate
            attributeName="r"
            values="2.5;4;2.5"
            dur="1s"
            begin="0.4s"
            repeatCount="indefinite"
          />
        </circle>
      </svg>

      <span className="text-xs font-mono text-[#A7B0C0] tracking-wide">
        Analyzing context...
      </span>
    </div>
  );
};
