import React from 'react';
import { 
  Network, Database, Radio, Server, Layers, 
  Cpu, ArrowDown, Shield, WifiOff, CheckCircle2, Sliders 
} from 'lucide-react';

export const Architecture: React.FC = () => {
  return (
    <div className="space-y-6 max-w-5xl mx-auto text-slate-200">
      
      {/* Header matching Screenshot media_1788284301874.jpg */}
      <div className="flex items-start space-x-3 bg-[#0b0d13] border border-white/[0.08] rounded-2xl p-5 shadow-2xl">
        <div className="p-2 rounded-xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
          <Network className="w-6 h-6" />
        </div>
        <div>
          <h1 className="text-xl sm:text-2xl font-black text-white tracking-wide">
            System Architecture
          </h1>
          <p className="text-xs text-slate-400 mt-1">
            End-to-end pipeline ? built to swap simulated components for production services
          </p>
        </div>
      </div>

      {/* 5-Stage Sequential Pipeline matching Screenshot 2 */}
      <div className="space-y-4">
        
        {/* 1. Data Sources */}
        <div className="bg-[#0b0d13] border border-white/[0.08] rounded-2xl p-5 shadow-xl space-y-3">
          <div className="flex items-center space-x-2.5 text-emerald-400 font-black text-sm">
            <Radio className="w-4 h-4" />
            <h2 className="text-white font-bold">1. Data Sources</h2>
          </div>
          <div className="flex flex-wrap gap-2 text-xs">
            {[
              "Rain gauges",
              "Soil moisture probes",
              "Tilt / inclinometers",
              "IMD weather feeds",
              "Terrain & geology maps",
              "Historical landslide records",
              "Field reports"
            ].map((tag, idx) => (
              <span 
                key={idx}
                className="px-3 py-1.5 rounded-lg bg-white/[0.04] border border-white/[0.08] text-slate-300 font-medium hover:border-emerald-500/40 transition-colors"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        <div className="flex justify-center text-emerald-400">
          <ArrowDown className="w-5 h-5 animate-bounce" />
        </div>

        {/* 2. Data Processing */}
        <div className="bg-[#0b0d13] border border-white/[0.08] rounded-2xl p-5 shadow-xl space-y-3">
          <div className="flex items-center space-x-2.5 text-emerald-400 font-black text-sm">
            <Database className="w-4 h-4" />
            <h2 className="text-white font-bold">2. Data Processing</h2>
          </div>
          <div className="flex flex-wrap gap-2 text-xs">
            {[
              "Validation & outlier detection",
              "Gap filling",
              "Feature extraction",
              "Data confidence scoring"
            ].map((tag, idx) => (
              <span 
                key={idx}
                className="px-3 py-1.5 rounded-lg bg-white/[0.04] border border-white/[0.08] text-slate-300 font-medium hover:border-emerald-500/40 transition-colors"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        <div className="flex justify-center text-emerald-400">
          <ArrowDown className="w-5 h-5 animate-bounce" />
        </div>

        {/* 3. AI/ML Risk Prediction Engine */}
        <div className="bg-[#0b0d13] border border-white/[0.08] rounded-2xl p-5 shadow-xl space-y-3">
          <div className="flex items-center space-x-2.5 text-emerald-400 font-black text-sm">
            <Cpu className="w-4 h-4" />
            <h2 className="text-white font-bold">3. AI/ML Risk Prediction Engine</h2>
          </div>
          <div className="flex flex-wrap gap-2 text-xs font-mono">
            {[
              "SIMULATED_HEURISTIC_V1 (prototype)",
              "Pluggable trained ML model/API",
              "Explainable factor contributions"
            ].map((tag, idx) => (
              <span 
                key={idx}
                className="px-3 py-1.5 rounded-lg bg-white/[0.04] border border-white/[0.08] text-slate-300 font-medium"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        <div className="flex justify-center text-emerald-400">
          <ArrowDown className="w-5 h-5 animate-bounce" />
        </div>

        {/* 4. Risk Classification */}
        <div className="bg-[#0b0d13] border border-white/[0.08] rounded-2xl p-5 shadow-xl space-y-3">
          <div className="flex items-center space-x-2.5 text-emerald-400 font-black text-sm">
            <Sliders className="w-4 h-4" />
            <h2 className="text-white font-bold">4. Risk Classification</h2>
          </div>
          <div className="flex flex-wrap gap-2 text-xs font-mono font-bold">
            <span className="px-3 py-1.5 rounded-lg bg-emerald-950/40 border border-emerald-500/40 text-emerald-400">LOW &lt; 30</span>
            <span className="px-3 py-1.5 rounded-lg bg-yellow-950/40 border border-yellow-500/40 text-yellow-400">MODERATE 30?55</span>
            <span className="px-3 py-1.5 rounded-lg bg-amber-950/40 border border-amber-500/40 text-amber-400">HIGH 55?75</span>
            <span className="px-3 py-1.5 rounded-lg bg-red-950/40 border border-red-500/40 text-red-400">CRITICAL &gt; 75</span>
          </div>
        </div>

        <div className="flex justify-center text-emerald-400">
          <ArrowDown className="w-5 h-5 animate-bounce" />
        </div>

        {/* 5. Early Warning Engine */}
        <div className="bg-[#0b0d13] border border-white/[0.08] rounded-2xl p-5 shadow-xl space-y-3">
          <div className="flex items-center space-x-2.5 text-emerald-400 font-black text-sm">
            <Shield className="w-4 h-4" />
            <h2 className="text-white font-bold">5. Early Warning Engine</h2>
          </div>
          <div className="flex flex-wrap gap-2 text-xs">
            {[
              "Threshold triggers",
              "Alert lifecycle",
              "Escalation logic",
              "Audit log"
            ].map((tag, idx) => (
              <span 
                key={idx}
                className="px-3 py-1.5 rounded-lg bg-white/[0.04] border border-white/[0.08] text-slate-300 font-medium"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

      </div>

      {/* Offline Edge Layer (matching Screenshot media_1788284301955.jpg) */}
      <div className="bg-[#0b0d13] border border-amber-500/30 rounded-2xl p-6 shadow-2xl space-y-4">
        <div className="flex items-center space-x-2.5 text-amber-400 font-black text-sm">
          <WifiOff className="w-5 h-5" />
          <h2 className="text-white font-bold">Offline Edge Layer</h2>
        </div>

        <div className="flex flex-wrap items-center gap-2 text-xs font-mono text-amber-300">
          <span className="px-2.5 py-1 rounded bg-amber-950/40 border border-amber-500/30">Alert generated</span>
          <span>?</span>
          <span className="px-2.5 py-1 rounded bg-amber-950/40 border border-amber-500/30">Stored locally</span>
          <span>?</span>
          <span className="px-2.5 py-1 rounded bg-amber-950/40 border border-amber-500/30">Waiting for gateway</span>
          <span>?</span>
          <span className="px-2.5 py-1 rounded bg-amber-950/40 border border-amber-500/30">Gateway available</span>
          <span>?</span>
          <span className="px-2.5 py-1 rounded bg-amber-950/40 border border-amber-500/30">Alert transmitted</span>
          <span>?</span>
          <span className="px-2.5 py-1 rounded bg-amber-950/40 border border-amber-500/30">Delivery acknowledged</span>
        </div>

        <p className="text-xs text-slate-400 leading-relaxed">
          A normal web app cannot transmit with zero connectivity. This prototype is honest about it: alerts queue locally on the device and hand off to whichever gateway becomes available ? internet, SMS modem, cell broadcast integration, LoRa/RF relay, siren controller, Bluetooth mesh or an edge device. Delivery is simulated here; the queue and handoff protocol are real.
        </p>
      </div>

      {/* Technology Stack Table (matching Screenshot 4) */}
      <div className="bg-[#0b0d13] border border-white/[0.08] rounded-2xl p-6 shadow-2xl space-y-4">
        <div className="flex items-center space-x-2.5 text-emerald-400 font-black text-sm">
          <Layers className="w-5 h-5" />
          <h2 className="text-white font-bold">Technology Stack</h2>
        </div>

        <div className="space-y-2 text-xs font-mono">
          {[
            { layer: 'FRONTEND', desc: 'React + Tailwind CSS, Recharts, React-Leaflet, PWA (Service Worker), localStorage/IndexedDB caching' },
            { layer: 'BACKEND', desc: 'FastAPI REST API, JWT role-based auth, simulated risk engine (ML-service ready)' },
            { layer: 'DATABASE', desc: 'MongoDB / SQLite ? users, locations, sensors, readings, predictions, alerts, events, reports, notifications, audit logs' },
            { layer: 'EDGE LAYER', desc: 'Offline queue, cached dashboards, gateway handoff protocol for SMS/LoRa/sirens' },
            { layer: 'FUTURE ML', desc: 'Drop-in FastAPI ML service (e.g., gradient-boosted / LSTM rainfall-trigger models) replacing the heuristic engine' }
          ].map((item, idx) => (
            <div key={idx} className="grid grid-cols-1 sm:grid-cols-12 gap-2 p-3 rounded-xl bg-white/[0.02] border border-white/[0.04]">
              <div className="sm:col-span-3 text-slate-400 font-bold uppercase">{item.layer}</div>
              <div className="sm:col-span-9 text-slate-200">{item.desc}</div>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
};
