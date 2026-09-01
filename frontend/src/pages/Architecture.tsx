import React from 'react';
import { Network, Cpu, Database, Radio, Server } from 'lucide-react';

export const Architecture: React.FC = () => {
  return (
    <div className="space-y-5">
      
      <div className="bg-[#12151b] border border-white/[0.08] rounded-xl p-5 shadow-xl">
        <div className="flex items-center space-x-2">
          <Network className="w-5 h-5 text-emerald-400" />
          <h1 className="text-lg font-black text-white">System Architecture & AI Data Pipeline</h1>
        </div>
        <p className="text-xs text-slate-300 max-w-2xl mt-1">
          End-to-end resilient architecture: Edge IoT sensors to centralized AI multi-criteria risk engine and multi-channel CAP v1.2 dissemination.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-3.5">
        <div className="bg-[#12151b] border border-white/[0.08] p-4 rounded-xl space-y-2">
          <div className="w-7 h-7 rounded-lg bg-emerald-500/20 text-emerald-400 flex items-center justify-center font-black text-xs">1</div>
          <h3 className="text-xs font-bold text-white">Edge Sensor Layer</h3>
          <p className="text-[11px] text-slate-400">
            In-place inclinometers, piezometers, and tipping bucket gauges transmitting via solar LoRaWAN mesh.
          </p>
        </div>

        <div className="bg-[#12151b] border border-white/[0.08] p-4 rounded-xl space-y-2">
          <div className="w-7 h-7 rounded-lg bg-blue-500/20 text-blue-400 flex items-center justify-center font-black text-xs">2</div>
          <h3 className="text-xs font-bold text-white">Live Ingestion Layer</h3>
          <p className="text-[11px] text-slate-400">
            Automated assimilation of IMD AWS telemetry, Open-Meteo precipitation, and ISRO Bhuvan satellite DEM grids.
          </p>
        </div>

        <div className="bg-[#12151b] border border-white/[0.08] p-4 rounded-xl space-y-2">
          <div className="w-7 h-7 rounded-lg bg-purple-500/20 text-purple-400 flex items-center justify-center font-black text-xs">3</div>
          <h3 className="text-xs font-bold text-white">AI Risk Engine</h3>
          <p className="text-[11px] text-slate-400">
            Physics-informed ML model computing Factor of Safety (FoS), Antecedent Saturation (API), and Explainable XAI factor weights.
          </p>
        </div>

        <div className="bg-[#12151b] border border-white/[0.08] p-4 rounded-xl space-y-2">
          <div className="w-7 h-7 rounded-lg bg-red-500/20 text-red-400 flex items-center justify-center font-black text-xs">4</div>
          <h3 className="text-xs font-bold text-white">CAP Dissemination</h3>
          <p className="text-[11px] text-slate-400">
            Standard OASIS CAP v1.2 XML dispatch into NDMA SACHET, National Cell Broadcast, and local community sirens.
          </p>
        </div>
      </div>

    </div>
  );
};
