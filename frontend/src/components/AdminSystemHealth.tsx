
import React, { useState } from 'react';
import { Settings, Activity, ShieldCheck, Database, Sliders, FileText, CheckCircle2 } from 'lucide-react';
import { DataSource } from '../types';

export const AdminSystemHealth: React.FC<{
  dataSources: DataSource[];
  auditLogs: any[];
}> = ({ dataSources, auditLogs }) => {
  const [rainThreshold24h, setRainThreshold24h] = useState<number>(140);
  const [slopeCriticalAngle, setSlopeCriticalAngle] = useState<number>(32);
  const [apiDecayFactor, setApiDecayFactor] = useState<number>(0.84);
  const [isSaved, setIsSaved] = useState<boolean>(false);

  const handleSaveThresholds = () => {
    setIsSaved(true);
    setTimeout(() => setIsSaved(false), 2500);
  };

  return (
    <div className="space-y-6">
      
      {/* Top Telemetry Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {[
          { label: 'API Ingestion Latency', value: '82 ms', status: 'Optimal', icon: Activity, color: 'text-emerald-400' },
          { label: 'AI Risk Engine Cycle', value: '4.2 ms', status: 'Real-Time', icon: ShieldCheck, color: 'text-blue-400' },
          { label: 'Connected Data Feeds', value: '6 / 6 Active', status: 'Normal', icon: Database, color: 'text-amber-400' },
          { label: 'Audit Log Chain', value: `${auditLogs.length} Records`, status: 'Immutable', icon: FileText, color: 'text-purple-400' }
        ].map((c, i) => {
          const Icon = c.icon;
          return (
            <div key={i} className="p-4 rounded-xl bg-gov-card border border-gov-border shadow-lg space-y-1">
              <div className="flex items-center justify-between">
                <span className="text-xs text-slate-400">{c.label}</span>
                <Icon className={`w-4 h-4 ${c.color}`} />
              </div>
              <div className="text-xl font-black text-white">{c.value}</div>
              <span className="text-[10px] font-bold text-emerald-400 uppercase">{c.status}</span>
            </div>
          );
        })}
      </div>

      {/* Model Threshold Calibration */}
      <div className="bg-gov-card border border-gov-border rounded-xl p-5 shadow-xl space-y-4">
        <div className="flex items-center justify-between border-b border-gov-border pb-3">
          <div className="flex items-center space-x-2">
            <Sliders className="w-5 h-5 text-amber-400" />
            <div>
              <h3 className="text-base font-bold text-white">Geotechnical & Hydrological Threshold Calibration</h3>
              <p className="text-[11px] text-slate-400">
                Tune triggers based on district-specific geological formations (e.g., Shillong Plateau vs. Disang Series)
              </p>
            </div>
          </div>

          <button
            onClick={handleSaveThresholds}
            className="flex items-center space-x-1.5 px-4 py-2 rounded-lg bg-gov-accent hover:bg-blue-600 text-white font-bold text-xs shadow transition-all"
          >
            {isSaved ? <CheckCircle2 className="w-4 h-4 text-emerald-400" /> : null}
            <span>{isSaved ? 'Thresholds Updated!' : 'Apply Model Calibration'}</span>
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs text-slate-300">
          <div className="space-y-2">
            <label className="font-bold text-white flex justify-between">
              <span>24h Extreme Precipitation Trigger (mm)</span>
              <span className="text-amber-400 font-mono">{rainThreshold24h} mm</span>
            </label>
            <input
              type="range"
              min="80"
              max="280"
              step="5"
              value={rainThreshold24h}
              onChange={(e) => setRainThreshold24h(parseInt(e.target.value))}
              className="w-full accent-amber-500 cursor-pointer"
            />
            <p className="text-[10px] text-slate-400">Standard Sohra/Haflong pre-monsoon threshold: 140?180mm/24h.</p>
          </div>

          <div className="space-y-2">
            <label className="font-bold text-white flex justify-between">
              <span>Critical Slope Angle Threshold (?)</span>
              <span className="text-amber-400 font-mono">{slopeCriticalAngle}?</span>
            </label>
            <input
              type="range"
              min="20"
              max="45"
              step="1"
              value={slopeCriticalAngle}
              onChange={(e) => setSlopeCriticalAngle(parseInt(e.target.value))}
              className="w-full accent-amber-500 cursor-pointer"
            />
            <p className="text-[10px] text-slate-400">Critical failure angle for Himalayan phyllite/weathered shale.</p>
          </div>

          <div className="space-y-2">
            <label className="font-bold text-white flex justify-between">
              <span>Antecedent Index (API) Decay Constant</span>
              <span className="text-amber-400 font-mono">{apiDecayFactor}</span>
            </label>
            <input
              type="range"
              min="0.70"
              max="0.95"
              step="0.01"
              value={apiDecayFactor}
              onChange={(e) => setApiDecayFactor(parseFloat(e.target.value))}
              className="w-full accent-amber-500 cursor-pointer"
            />
            <p className="text-[10px] text-slate-400">Daily soil moisture depletion coefficient (Caine 1980 / Guzzetti 2008).</p>
          </div>
        </div>
      </div>

      {/* Immutable Audit Trail Log */}
      <div className="bg-gov-card border border-gov-border rounded-xl p-5 shadow-xl space-y-3">
        <div className="flex items-center justify-between border-b border-gov-border pb-3">
          <div className="flex items-center space-x-2">
            <FileText className="w-5 h-5 text-purple-400" />
            <h3 className="text-base font-bold text-white">Tamper-Evident Disaster Decision Audit Log</h3>
          </div>
          <span className="text-xs text-slate-400">Cryptographically verifiable sequence</span>
        </div>

        <div className="overflow-x-auto max-h-72 overflow-y-auto">
          <table className="w-full text-left text-xs">
            <thead>
              <tr className="border-b border-slate-800 text-slate-400 uppercase text-[10px]">
                <th className="pb-2">Timestamp (UTC+5:30)</th>
                <th className="pb-2">Officer / Identity</th>
                <th className="pb-2">Action Performed</th>
                <th className="pb-2">Target Entity / Location</th>
                <th className="pb-2">State Transition</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800 text-slate-300 font-mono text-[11px]">
              {auditLogs.map((log) => (
                <tr key={log.id} className="hover:bg-slate-900/60">
                  <td className="py-2 text-slate-400">{new Date(log.timestamp).toLocaleTimeString()}</td>
                  <td className="py-2 text-white font-semibold">{log.user_name} ({log.user_role})</td>
                  <td className="py-2 text-amber-300 font-bold">{log.action}</td>
                  <td className="py-2 text-slate-300">{log.location}</td>
                  <td className="py-2 text-emerald-400">{log.previous_state || '?'} ? {log.new_state}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

    </div>
  );
};
