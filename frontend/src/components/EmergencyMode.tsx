import React from 'react';
import { 
  AlertOctagon, Volume2, VolumeX, ShieldAlert, 
  Send, Phone, X, AlertTriangle, ArrowRight 
} from 'lucide-react';
import { useApp } from '../context/AppContext';

export const EmergencyMode: React.FC = () => {
  const { emergency, clearEmergency, isSirenPlaying, toggleSiren, setActiveTab } = useApp();

  if (!emergency || !emergency.active) return null;

  return (
    <div className="bg-red-950/95 border-b-2 border-red-500 text-white shadow-2xl animate-pulse-slow">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-3">
          
          {/* Alert Title & Flashing Badge */}
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-xl bg-red-600 flex items-center justify-center text-white shadow-lg animate-bounce shrink-0">
              <AlertOctagon className="w-6 h-6" />
            </div>
            <div>
              <div className="flex items-center space-x-2">
                <span className="px-2 py-0.5 rounded bg-red-500 text-white font-black text-[10px] uppercase tracking-wider">
                  RED EMERGENCY ALERT
                </span>
                <span className="text-xs text-red-300 font-mono">
                  {emergency.timestamp}
                </span>
              </div>
              <h3 className="text-sm font-black text-white mt-0.5">
                {emergency.title} ? <span className="text-amber-300">{emergency.area}</span>
              </h3>
              <p className="text-xs text-red-200 mt-0.5">
                {emergency.instruction}
              </p>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center space-x-2 shrink-0 self-end md:self-center">
            
            {/* Audio Siren Toggle */}
            <button
              onClick={toggleSiren}
              className={`flex items-center space-x-1.5 px-3 py-1.5 rounded-lg font-bold text-xs border transition-all ${
                isSirenPlaying 
                  ? 'bg-red-600 text-white border-red-400 animate-pulse' 
                  : 'bg-slate-900 text-red-300 border-red-800 hover:bg-slate-800'
              }`}
            >
              {isSirenPlaying ? <Volume2 className="w-4 h-4" /> : <VolumeX className="w-4 h-4" />}
              <span>{isSirenPlaying ? 'Mute Siren' : 'Play Siren'}</span>
            </button>

            {/* Evacuation Safe Zones Link */}
            <button
              onClick={() => setActiveTab('evacuation')}
              className="flex items-center space-x-1 px-3 py-1.5 rounded-lg bg-amber-500 hover:bg-amber-400 text-slate-950 font-black text-xs shadow"
            >
              <span>Safe Shelters</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>

            {/* Clear Emergency Button */}
            <button
              onClick={clearEmergency}
              className="p-1.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-white"
              title="Disengage Emergency Mode"
            >
              <X className="w-4 h-4" />
            </button>

          </div>

        </div>
      </div>
    </div>
  );
};
