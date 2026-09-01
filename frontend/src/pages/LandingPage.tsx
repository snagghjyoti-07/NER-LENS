
import React from 'react';
import { 
  Shield, ArrowRight, Activity, Map, Radio, Award, 
  CheckCircle2, CloudRain, Mountain, Users, Layers
} from 'lucide-react';
import { useScenario } from '../context/ScenarioContext';

interface LandingPageProps {
  onEnterApp: () => void;
  onExploreMap: () => void;
}

export const LandingPage: React.FC<LandingPageProps> = ({ onEnterApp, onExploreMap }) => {
  const { startJudgeTour } = useScenario();

  return (
    <div className="min-h-[88vh] flex flex-col justify-between py-8 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-12">
      
      {/* Hero Section */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center pt-4">
        
        <div className="lg:col-span-7 space-y-6">
          
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-bold">
            <Award className="w-3.5 h-3.5" />
            <span>SMART INDIA HACKATHON 2026 ? PROBLEM STATEMENT SIH26001</span>
          </div>

          <div className="space-y-2">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-none">
              NER-LENS
            </h1>
            <h2 className="text-xl sm:text-2xl font-bold text-amber-400">
              AI-Assisted Landslide Risk Intelligence for Northeast India
            </h2>
          </div>

          <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-2xl">
            From raw environmental triggers to proactive, explainable early-warning decisions.
            An upstream geospatial decision-support layer empowering District and State Disaster Authorities
            across all 8 Northeast states.
          </p>

          <blockquote className="border-l-4 border-amber-500 pl-4 py-1 text-xs text-slate-400 italic bg-slate-900/60 rounded-r">
            "Don't wait for the landslide. Understand the risk early. Prioritize the location. Verify the signal. Act before impact."
          </blockquote>

          {/* Primary & Secondary Call to Actions */}
          <div className="flex flex-wrap items-center gap-3 pt-2">
            <button
              onClick={onEnterApp}
              className="flex items-center space-x-2 px-6 py-3 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-black text-sm shadow-xl hover:shadow-amber-500/20 transition-all"
            >
              <span>Open Operations Command Center</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              onClick={onExploreMap}
              className="flex items-center space-x-2 px-5 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-bold text-sm border border-slate-700 shadow transition-all"
            >
              <Map className="w-4 h-4 text-blue-400" />
              <span>Explore GIS Risk Map</span>
            </button>

            <button
              onClick={startJudgeTour}
              className="flex items-center space-x-2 px-5 py-3 rounded-xl bg-gov-accent/30 hover:bg-gov-accent/50 text-blue-200 font-bold text-sm border border-blue-500/40 shadow transition-all"
            >
              <Award className="w-4 h-4 text-amber-400" />
              <span>Start Judge Demo Tour (3 Min)</span>
            </button>
          </div>

          {/* Research Facts Grounding */}
          <div className="pt-2 text-xs text-slate-400 flex items-center space-x-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
            <span>~18.8?19% of India's mapped landslides are in the Northeast Himalayas (ISRO/NRSC 1998?2022 inventory).</span>
          </div>

        </div>

        {/* Hero Interactive Visual Dashboard Preview */}
        <div className="lg:col-span-5 bg-gradient-to-br from-gov-card to-slate-900 border border-gov-border rounded-2xl p-6 shadow-2xl space-y-4">
          <div className="flex items-center justify-between border-b border-slate-800 pb-3">
            <div className="flex items-center space-x-2">
              <span className="w-2.5 h-2.5 rounded-full bg-red-500 animate-ping"></span>
              <span className="font-bold text-white text-xs">Live Regional Early Warning Status</span>
            </div>
            <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-red-500/20 text-red-400">
              HIGH RISK
            </span>
          </div>

          <div className="grid grid-cols-2 gap-3 text-xs">
            <div className="bg-slate-950/80 p-3 rounded-xl border border-slate-800 space-y-1">
              <span className="text-slate-400 text-[10px] font-bold uppercase">Regional Risk Score</span>
              <div className="text-2xl font-black text-amber-400">76 / 100</div>
              <span className="text-[10px] text-red-400 font-semibold">6 Critical Zones</span>
            </div>

            <div className="bg-slate-950/80 p-3 rounded-xl border border-slate-800 space-y-1">
              <span className="text-slate-400 text-[10px] font-bold uppercase">Lifeline Highways</span>
              <div className="text-2xl font-black text-white">NH-10 & NH-29</div>
              <span className="text-[10px] text-amber-400 font-semibold">1 Blocked ? 1 Slow</span>
            </div>
          </div>

          {/* Compact Pipeline Visual */}
          <div className="bg-slate-950/90 p-3.5 rounded-xl border border-slate-800 space-y-2 text-[11px]">
            <span className="font-bold text-slate-300 block uppercase text-[10px] text-amber-400">
              End-to-End Decision Architecture:
            </span>
            <div className="flex items-center justify-between text-slate-300 font-semibold">
              <span>DATA</span>
              <span className="text-slate-500">?</span>
              <span>AI RISK</span>
              <span className="text-slate-500">?</span>
              <span>GIS MAP</span>
              <span className="text-slate-500">?</span>
              <span>CAP ALERT</span>
              <span className="text-slate-500">?</span>
              <span className="text-emerald-400">ACTION</span>
            </div>
          </div>

          <div className="text-[11px] text-slate-400 space-y-1">
            <p>? OASIS CAP v1.2 & NDMA SACHET Upstream Ready</p>
            <p>? May 2026 National Cell Broadcast Gateway Support</p>
            <p>? Offline PWA Field Sync with IndexedDB Queue</p>
            <p>? Accessible in 7 Northeast Regional Languages</p>
          </div>
        </div>

      </div>

      {/* 4 Architectural Pillars */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {[
          {
            icon: CloudRain,
            title: "Hydrological Triggers",
            desc: "Continuous IMD AWS rainfall & Antecedent Precipitation Index (API) decay modeling."
          },
          {
            icon: Mountain,
            title: "Terrain Susceptibility",
            desc: "GSI lithology classes & CartoDEM 30m slope gradients with Himalayan scarp buffers."
          },
          {
            icon: Activity,
            title: "Explainable AI (XAI)",
            desc: "Waterfall driver breakdown showing exactly why risk is high + 3 calibrated mitigation choices."
          },
          {
            icon: Radio,
            title: "CAP & SACHET Broadcast",
            desc: "Fast emergency authoring for multi-channel mass dissemination and offline field operations."
          }
        ].map((item, idx) => {
          const Icon = item.icon;
          return (
            <div key={idx} className="p-5 rounded-xl bg-gov-card border border-gov-border shadow-lg space-y-2">
              <div className="w-10 h-10 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center">
                <Icon className="w-5 h-5 text-amber-400" />
              </div>
              <h4 className="text-sm font-bold text-white">{item.title}</h4>
              <p className="text-xs text-slate-400 leading-relaxed">{item.desc}</p>
            </div>
          );
        })}
      </div>

    </div>
  );
};
