import React, { useState } from 'react';
import { 
  History, Play, Pause, RotateCcw, 
  CloudRain, ShieldAlert, Activity, AlertTriangle 
} from 'lucide-react';

export const Replay: React.FC = () => {
  const [selectedScenario, setSelectedScenario] = useState<number>(0);
  const [timelineIndex, setTimelineIndex] = useState<number>(0);

  const SCENARIOS = [
    {
      title: "2022 Dima Hasao Pre-Monsoon Railway Disaster",
      state: "Assam",
      date: "May 14 - 18, 2022",
      description: "Severe multi-slope failure along Jatinga valley that submerged the New Haflong railway station and breached NH-27 in 14 locations.",
      steps: [
        { hour: "T-48h", rain: 45, sensor: "1.2 mm", score: 38, status: "NOMINAL", log: "Continuous pre-monsoon drizzle over Haflong hills." },
        { hour: "T-36h", rain: 120, sensor: "3.8 mm", score: 62, status: "WATCH", log: "Jatinga river catchment saturation exceeded 70%." },
        { hour: "T-24h", rain: 260, sensor: "9.5 mm", score: 79, status: "WARNING", log: "First surface cracks detected along New Haflong cutting." },
        { hour: "T-12h", rain: 390, sensor: "22.0 mm", score: 92, status: "CRITICAL", log: "CAP alert issued for Hill Section. Evacuation ordered." },
        { hour: "T-0h", rain: 540, sensor: "180.0 mm", score: 98, status: "DISASTER", log: "New Haflong station submerged in debris flow." }
      ]
    },
    {
      title: "2022 Tupul Noney Railway Camp Landslide",
      state: "Manipur",
      date: "June 29 - 30, 2022",
      description: "Catastrophic debris avalanche on cut slope near 107 Territorial Army camp that blocked the Ijei river.",
      steps: [
        { hour: "T-36h", rain: 60, sensor: "0.8 mm", score: 42, status: "NOMINAL", log: "Heavy rainfall in Ijei river valley basin." },
        { hour: "T-24h", rain: 165, sensor: "4.1 mm", score: 68, status: "WATCH", log: "Cut slope near railway yard saturating rapidly." },
        { hour: "T-12h", rain: 280, sensor: "14.5 mm", score: 85, status: "WARNING", log: "Accelerated creep signals detected on upper mountain face." },
        { hour: "T-0h", rain: 410, sensor: "250.0 mm", score: 99, status: "DISASTER", log: "Massive slope detachment blocked Ijei river, forming lake." }
      ]
    }
  ];

  const activeScen = SCENARIOS[selectedScenario];
  const activeStep = activeScen.steps[timelineIndex];

  return (
    <div className="space-y-5">
      
      <div className="bg-[#12151b] border border-white/[0.08] rounded-xl p-5 shadow-xl">
        <div className="flex items-center space-x-2">
          <History className="w-5 h-5 text-emerald-400" />
          <h1 className="text-lg font-black text-white">Historical Disaster Replay & Backtesting Simulator</h1>
        </div>
        <p className="text-xs text-slate-300 max-w-2xl mt-1">
          Time-travel simulator for historical Northeast disasters. Evaluate how early warning thresholds, antecedent moisture saturation, and sensor drift escalated before mass slope failure.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {SCENARIOS.map((sc, idx) => (
          <button
            key={idx}
            onClick={() => {
              setSelectedScenario(idx);
              setTimelineIndex(0);
            }}
            className={`p-4 rounded-xl text-left border transition-all ${
              selectedScenario === idx 
                ? 'bg-emerald-500/10 border-emerald-500/50 shadow-lg' 
                : 'bg-[#12151b] border-white/[0.08] hover:border-white/[0.15]'
            }`}
          >
            <div className="text-xs font-bold text-emerald-400">{sc.state} ? {sc.date}</div>
            <h3 className="text-sm font-black text-white mt-1">{sc.title}</h3>
            <p className="text-[11px] text-slate-400 mt-1 line-clamp-2">{sc.description}</p>
          </button>
        ))}
      </div>

      <div className="bg-[#12151b] border border-white/[0.08] rounded-xl p-5 shadow-xl space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/[0.06] pb-3">
          <div>
            <span className="text-[10px] text-slate-400 uppercase font-mono">Current Timeline Step:</span>
            <div className="text-lg font-black text-white font-mono">{activeStep.hour} ? {activeStep.status}</div>
          </div>

          <div className="flex items-center space-x-2 font-mono text-xs">
            <button
              onClick={() => setTimelineIndex(Math.max(0, timelineIndex - 1))}
              className="px-3 py-1.5 rounded-lg bg-black/40 border border-white/[0.08] text-slate-200 hover:bg-black/60"
            >
              ← Prev
            </button>

            <button
              onClick={() => setTimelineIndex(Math.min(activeScen.steps.length - 1, timelineIndex + 1))}
              className="px-3 py-1.5 rounded-lg bg-emerald-400 text-slate-950 font-black hover:bg-emerald-300 shadow"
            >
              Next ?
            </button>
          </div>
        </div>

        <div className="space-y-1">
          <input
            type="range" min="0" max={activeScen.steps.length - 1} step="1"
            value={timelineIndex}
            onChange={(e) => setTimelineIndex(parseInt(e.target.value))}
            className="w-full accent-emerald-400 cursor-pointer h-2 bg-black/50 rounded-lg"
          />
          <div className="flex justify-between text-[10px] text-slate-400 font-mono">
            {activeScen.steps.map((st, i) => (
              <span key={i} className={timelineIndex === i ? 'text-emerald-400 font-bold' : ''}>
                {st.hour}
              </span>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          <div className="bg-black/40 p-3 rounded-lg border border-white/[0.06] space-y-0.5">
            <span className="text-[9px] text-slate-400 font-bold uppercase">24h Rainfall</span>
            <div className="text-xl font-black text-amber-400 font-mono">{activeStep.rain} mm</div>
          </div>

          <div className="bg-black/40 p-3 rounded-lg border border-white/[0.06] space-y-0.5">
            <span className="text-[9px] text-slate-400 font-bold uppercase">Sensor Drift</span>
            <div className="text-xl font-black text-red-400 font-mono">{activeStep.sensor}</div>
          </div>

          <div className="bg-black/40 p-3 rounded-lg border border-white/[0.06] space-y-0.5">
            <span className="text-[9px] text-slate-400 font-bold uppercase">Recomputed Risk</span>
            <div className="text-xl font-black text-white font-mono">{activeStep.score} / 100</div>
          </div>
        </div>

        <div className="bg-black/40 p-3 rounded-lg border border-white/[0.06] text-xs text-slate-200">
          <span className="text-emerald-400 font-bold uppercase text-[10px] block mb-1">Operational Event Log:</span>
          <p className="text-xs font-medium">{activeStep.log}</p>
        </div>
      </div>

    </div>
  );
};
