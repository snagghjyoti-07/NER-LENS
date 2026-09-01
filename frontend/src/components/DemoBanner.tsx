
import React from 'react';
import { AlertTriangle, ShieldCheck, Database, Award } from 'lucide-react';
import { useScenario } from '../context/ScenarioContext';

export const DemoBanner: React.FC = () => {
  const { currentScenario, startJudgeTour } = useScenario();

  return (
    <div className="bg-gradient-to-r from-gov-card via-slate-900 to-gov-card border-b border-gov-border px-4 py-2 text-xs">
      <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
        <div className="flex items-center space-x-2 text-slate-300">
          <span className="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-bold bg-amber-500/20 text-amber-300 border border-amber-500/30">
            SIH 2026 PROTOTYPE
          </span>
          <span className="hidden sm:inline text-slate-400">|</span>
          <span className="text-slate-300">
            <strong>MDoNER SIH26001:</strong> AI-Based Early Warning & Landslide Risk Monitoring System in NER
          </span>
          <span className="hidden md:inline text-slate-500">
            (~18.8?19% of India's mapped landslides are in Northeast Himalayas ? ISRO/NRSC)
          </span>
        </div>

        <div className="flex items-center space-x-3">
          <div className="flex items-center space-x-1.5 text-slate-300">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            <span className="text-slate-400">Scenario:</span>
            <span className="font-semibold text-amber-400">{currentScenario?.name.split('.')[1] || 'Cloudburst Surge'}</span>
          </div>

          <button
            onClick={startJudgeTour}
            className="flex items-center space-x-1 px-2.5 py-1 rounded bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold shadow transition-all"
          >
            <Award className="w-3.5 h-3.5" />
            <span>Judge Demo Tour (3 Min)</span>
          </button>
        </div>
      </div>
    </div>
  );
};
