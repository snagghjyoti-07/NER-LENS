import React from 'react';
import { 
  ShieldAlert, Activity, BrainCircuit, LifeBuoy, 
  ArrowRight, Radio, Mountain, Siren, CheckCircle2 
} from 'lucide-react';
import { useApp } from '../context/AppContext';

export const Landing: React.FC = () => {
  const { setActiveTab } = useApp();

  return (
    <div className="max-w-6xl mx-auto space-y-12 py-6">
      
      {/* Hero */}
      <div className="text-center space-y-4 max-w-3xl mx-auto">
        <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-amber-500/20 border border-amber-500/30 text-amber-300 text-xs font-black uppercase">
          <Siren className="w-4 h-4" />
          <span>NER LANDSLIDE EARLY WARNING SYSTEM</span>
        </div>

        <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
          Predict. Warn. Protect.
        </h1>

        <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
          Operational, multi-sensor landslide intelligence and early warning decision support platform for the 8 North Eastern Region states.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
          <button
            onClick={() => setActiveTab('dashboard')}
            className="px-6 py-3 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-black text-sm shadow-xl shadow-amber-500/20 flex items-center space-x-2"
          >
            <span>Launch Command Center</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          <button
            onClick={() => setActiveTab('prediction')}
            className="px-6 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-sm border border-slate-700"
          >
            Test AI Prediction Sandbox
          </button>
        </div>
      </div>

      {/* 4-Stage Workflow Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {[
          { title: "1. Multi-Sensor IoT", desc: "Borehole inclinometers, piezometers & rain gauges on critical slopes." },
          { title: "2. Live Ingestion", desc: "Real-time IMD AWS weather & ISRO Bhuvan satellite DEM grids." },
          { title: "3. AI Risk Prediction", desc: "Physics-informed Factor of Safety & Explainable XAI waterfall." },
          { title: "4. Multi-Channel CAP", desc: "OASIS CAP v1.2 XML dispatch & National Cell Broadcast alerts." }
        ].map((c, i) => (
          <div key={i} className="bg-[#0f1a2e] border border-slate-800 p-5 rounded-2xl shadow-xl space-y-2">
            <h3 className="text-sm font-bold text-amber-300">{c.title}</h3>
            <p className="text-xs text-slate-400">{c.desc}</p>
          </div>
        ))}
      </div>

    </div>
  );
};
