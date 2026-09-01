
import React from 'react';
import { Database, CheckCircle2, ArrowRight, Activity, Cloud, Layers, Cpu, Radio, Bell } from 'lucide-react';
import { DataSource } from '../types';

export const DataSourcesPipeline: React.FC<{ dataSources: DataSource[] }> = ({ dataSources }) => {
  return (
    <div className="bg-gov-card border border-gov-border rounded-xl p-5 shadow-xl space-y-5">
      <div className="flex items-center justify-between border-b border-gov-border pb-3">
        <div className="flex items-center space-x-2">
          <Database className="w-5 h-5 text-amber-400" />
          <h3 className="text-base font-bold text-white">End-to-End Disaster Data Pipeline Architecture</h3>
        </div>
        <span className="text-xs text-slate-400">Decision-Support Integration Layer</span>
      </div>

      {/* Visual Pipeline Flow */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3 text-xs">
        
        {/* Step 1: External Raw Sources */}
        <div className="p-3 rounded-lg bg-slate-900 border border-slate-800 space-y-2">
          <div className="flex items-center space-x-1.5 text-blue-400 font-bold">
            <Cloud className="w-4 h-4" />
            <span>1. Environmental Feeds</span>
          </div>
          <div className="text-[11px] text-slate-400 space-y-1">
            <p>? IMD AWS & Doppler Radar</p>
            <p>? ISRO/NRSC Bhuvan CartoDEM</p>
            <p>? GSI NLSM Susceptibility</p>
            <p>? NESAC Seasonal Inventories</p>
          </div>
        </div>

        {/* Step 2: Data Ingestion & Quality */}
        <div className="p-3 rounded-lg bg-slate-900 border border-slate-800 space-y-2">
          <div className="flex items-center space-x-1.5 text-emerald-400 font-bold">
            <Layers className="w-4 h-4" />
            <span>2. Ingestion & Quality</span>
          </div>
          <div className="text-[11px] text-slate-400 space-y-1">
            <p>? Spatial Harmonization</p>
            <p>? Antecedent Index (API)</p>
            <p>? Road Buffer Masking</p>
            <p>? Offline PWA Field Sync</p>
          </div>
        </div>

        {/* Step 3: AI Risk Engine */}
        <div className="p-3 rounded-lg bg-slate-900 border border-amber-500/40 bg-amber-500/5 space-y-2">
          <div className="flex items-center space-x-1.5 text-amber-400 font-bold">
            <Cpu className="w-4 h-4" />
            <span>3. AI Risk Engine & XAI</span>
          </div>
          <div className="text-[11px] text-slate-400 space-y-1">
            <p>? Multi-Criteria Scoring</p>
            <p>? XAI Factor Attribution</p>
            <p>? 3 Architecture Choices</p>
            <p>? 3 Response Options</p>
          </div>
        </div>

        {/* Step 4: GIS & EOC Dashboard */}
        <div className="p-3 rounded-lg bg-slate-900 border border-slate-800 space-y-2">
          <div className="flex items-center space-x-1.5 text-purple-400 font-bold">
            <Activity className="w-4 h-4" />
            <span>4. EOC Decision Support</span>
          </div>
          <div className="text-[11px] text-slate-400 space-y-1">
            <p>? 8-Layer GIS Map</p>
            <p>? Priority Action Queue</p>
            <p>? Road Blockage Matrix</p>
            <p>? Village Shelter Routing</p>
          </div>
        </div>

        {/* Step 5: Warning Dissemination */}
        <div className="p-3 rounded-lg bg-slate-900 border border-red-500/40 bg-red-500/5 space-y-2">
          <div className="flex items-center space-x-1.5 text-red-400 font-bold">
            <Radio className="w-4 h-4" />
            <span>5. CAP Broadcast</span>
          </div>
          <div className="text-[11px] text-slate-400 space-y-1">
            <p>? NDMA SACHET (CAP v1.2)</p>
            <p>? May 2026 Cell Broadcast</p>
            <p>? District NIC SMS Gateway</p>
            <p>? 7 NE Languages Public Portal</p>
          </div>
        </div>

      </div>

      {/* Integration Registry Table */}
      <div className="overflow-x-auto pt-2">
        <table className="w-full text-left text-xs">
          <thead>
            <tr className="border-b border-slate-800 text-slate-400 uppercase text-[10px]">
              <th className="pb-2">Agency / Source</th>
              <th className="pb-2">Data Type & Resolution</th>
              <th className="pb-2">Update Rate</th>
              <th className="pb-2">Integration Status</th>
              <th className="pb-2">Latency</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-800 text-slate-300">
            {dataSources.map((ds) => (
              <tr key={ds.id} className="hover:bg-slate-900/60">
                <td className="py-2.5 font-bold text-white">{ds.agency_name}</td>
                <td className="py-2.5 text-slate-300">{ds.data_type}</td>
                <td className="py-2.5 text-slate-400">{ds.update_frequency}</td>
                <td className="py-2.5">
                  <span className={`px-2 py-0.5 rounded text-[10px] font-bold ${
                    ds.status === 'LIVE_OPERATIONAL' ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30' :
                    ds.status === 'CONNECTED_DEMO' ? 'bg-amber-500/20 text-amber-400 border border-amber-500/30' :
                    'bg-blue-500/20 text-blue-400 border border-blue-500/30'
                  }`}>
                    {ds.status}
                  </span>
                </td>
                <td className="py-2.5 text-slate-400 font-mono">{ds.latency_ms} ms</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
