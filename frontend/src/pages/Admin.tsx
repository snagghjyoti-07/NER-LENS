import React, { useState } from 'react';
import { ShieldCheck, Sliders, CheckCircle2 } from 'lucide-react';
import { useApp } from '../context/AppContext';

export const Admin: React.FC = () => {
  const [rainThreshold, setRainThreshold] = useState<number>(200);
  const [slopeThreshold, setSlopeThreshold] = useState<number>(35);
  const [saved, setSaved] = useState<boolean>(false);

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    setSaved(true);
    setTimeout(() => setSaved(false), 3000);
  };

  return (
    <div className="space-y-5 max-w-4xl mx-auto">
      
      <div className="bg-[#12151b] border border-white/[0.08] rounded-xl p-5 shadow-xl">
        <div className="flex items-center space-x-2">
          <ShieldCheck className="w-5 h-5 text-emerald-400" />
          <h1 className="text-lg font-black text-white">System Administration & Geotechnical Thresholds</h1>
        </div>
        <p className="text-xs text-slate-300 mt-1">
          Authority controls for calibrating early warning trigger thresholds, managing monitored slope coordinates, and reviewing audit logs.
        </p>
      </div>

      <form onSubmit={handleSave} className="bg-[#12151b] border border-white/[0.08] rounded-xl p-5 shadow-xl space-y-3.5 text-xs">
        <h3 className="text-xs font-bold text-white uppercase tracking-wider border-b border-white/[0.06] pb-2">
          Calibrate Regional Early Warning Triggers
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
          <div className="bg-black/40 p-3 rounded-lg border border-white/[0.06] space-y-1">
            <div className="flex justify-between font-bold">
              <span className="text-slate-200">Critical Rainfall Threshold (mm/24h)</span>
              <span className="text-emerald-400 font-mono">{rainThreshold} mm</span>
            </div>
            <input
              type="range" min="100" max="350" step="10" value={rainThreshold}
              onChange={(e) => setRainThreshold(parseInt(e.target.value))}
              className="w-full accent-emerald-400 cursor-pointer"
            />
          </div>

          <div className="bg-black/40 p-3 rounded-lg border border-white/[0.06] space-y-1">
            <div className="flex justify-between font-bold">
              <span className="text-slate-200">Critical Slope Angle Threshold (?)</span>
              <span className="text-amber-400 font-mono">{slopeThreshold}?</span>
            </div>
            <input
              type="range" min="20" max="50" step="1" value={slopeThreshold}
              onChange={(e) => setSlopeThreshold(parseInt(e.target.value))}
              className="w-full accent-amber-400 cursor-pointer"
            />
          </div>
        </div>

        <div className="flex items-center justify-between pt-2">
          {saved && (
            <span className="text-xs text-emerald-400 font-bold flex items-center space-x-1 font-mono">
              <CheckCircle2 className="w-4 h-4" />
              <span>Threshold parameters calibrated successfully!</span>
            </span>
          )}
          <button
            type="submit"
            className="ml-auto px-4 py-2 rounded-lg bg-emerald-400 hover:bg-emerald-300 text-slate-950 font-black text-xs shadow-lg shadow-emerald-500/20"
          >
            Save Calibration Parameters
          </button>
        </div>
      </form>

    </div>
  );
};
