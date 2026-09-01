import React from 'react';

export const AppLogo: React.FC<{ size?: 'sm' | 'md' | 'lg'; className?: string }> = ({ 
  size = 'md',
  className = '' 
}) => {
  const dimensions = {
    sm: 'w-7 h-7',
    md: 'w-9 h-9',
    lg: 'w-12 h-12'
  }[size];

  return (
    <div className={`relative flex items-center justify-center rounded-xl bg-gradient-to-br from-emerald-400 to-emerald-600 p-0.5 shadow-lg shadow-emerald-500/20 shrink-0 ${dimensions} ${className}`}>
      {/* Inner Obsidian Canvas */}
      <div className="w-full h-full bg-[#08090c] rounded-[10px] flex items-center justify-center relative overflow-hidden">
        {/* Radar Ping Glow */}
        <div className="absolute inset-0 bg-emerald-500/10 animate-pulse" />

        {/* Mountain & Telemetry Radar Vector */}
        <svg 
          viewBox="0 0 32 32" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
          className="w-4/5 h-4/5 relative z-10 text-emerald-400"
        >
          {/* Main Peak Ridge */}
          <path 
            d="M16 4L27 24H5L16 4Z" 
            stroke="currentColor" 
            strokeWidth="2" 
            strokeLinejoin="round" 
            className="text-emerald-400"
          />
          {/* Internal Contours / Fault Lines */}
          <path 
            d="M16 4V24" 
            stroke="currentColor" 
            strokeWidth="1.5" 
            strokeDasharray="2 2" 
            className="text-emerald-300/70"
          />
          <path 
            d="M11 15L16 20L21 15" 
            stroke="currentColor" 
            strokeWidth="1.5" 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            className="text-emerald-400"
          />
          {/* Sensor Pulse Apex Node */}
          <circle cx="16" cy="4" r="2.5" fill="#10b981" />
          <circle cx="16" cy="4" r="4.5" stroke="#34d399" strokeWidth="0.75" className="animate-ping" />
        </svg>
      </div>
    </div>
  );
};
