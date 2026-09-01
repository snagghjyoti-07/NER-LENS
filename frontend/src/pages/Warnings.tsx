import React, { useState } from 'react';
import { 
  TriangleAlert, ShieldAlert, Send, Radio, 
  CheckCircle2, AlertOctagon, FileCode, Clock 
} from 'lucide-react';
import { useApp } from '../context/AppContext';

export const Warnings: React.FC = () => {
  const { warnings, acknowledgeWarning, resolveWarning, triggerEmergency, t } = useApp();
  const [filterSeverity, setFilterSeverity] = useState<string>('ALL');

  const filtered = filterSeverity === 'ALL' 
    ? warnings 
    : warnings.filter(w => w.severity.toLowerCase() === filterSeverity.toLowerCase());

  return (
    <div className="space-y-5">
      
      <div className="bg-[#12151b] border border-white/[0.08] rounded-xl p-5 shadow-xl flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div>
          <div className="flex items-center space-x-2">
            <TriangleAlert className="w-5 h-5 text-amber-400" />
            <h1 className="text-lg font-black text-white">Early Warning & Dissemination Center</h1>
          </div>
          <p className="text-xs text-slate-300 max-w-2xl mt-1">
            Authoritative early warning lifecycle: Generate, authorize, dispatch OASIS CAP v1.2 XML bulletins, and relay via National Cell Broadcast.
          </p>
        </div>

        <button
          onClick={() => triggerEmergency('Mass Multi-Slope Evacuation', 'All Red Warning Districts')}
          className="px-4 py-2 rounded-lg bg-red-600 hover:bg-red-500 text-white font-bold text-xs shadow-lg shadow-red-600/30 transition-all shrink-0"
        >
          Dispatch Emergency Cell Broadcast
        </button>
      </div>

      <div className="flex items-center space-x-2 bg-[#12151b] p-2 rounded-lg border border-white/[0.08] text-xs font-bold">
        {['ALL', 'Critical', 'Warning', 'Watch', 'Advisory'].map((sev) => (
          <button
            key={sev}
            onClick={() => setFilterSeverity(sev)}
            className={`px-3 py-1 rounded-md transition-all ${
              filterSeverity === sev 
                ? 'bg-emerald-400 text-slate-950 shadow font-black' 
                : 'text-slate-300 hover:text-white hover:bg-white/[0.04]'
            }`}
          >
            {sev}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {filtered.map((w) => (
          <div
            key={w.id}
            className={`p-4 rounded-xl border shadow-xl flex flex-col justify-between space-y-3.5 ${
              w.severity === 'Critical' ? 'bg-red-950/10 border-red-800/50' :
              w.severity === 'Warning' ? 'bg-amber-950/10 border-amber-800/50' :
              'bg-[#12151b] border-white/[0.08]'
            }`}
          >
            <div className="space-y-1.5">
              <div className="flex items-center justify-between">
                <span className={`px-2 py-0.5 rounded text-[9px] font-black uppercase tracking-wider ${
                  w.severity === 'Critical' ? 'bg-red-500 text-white' :
                  w.severity === 'Warning' ? 'bg-amber-500 text-slate-950' : 'bg-emerald-500 text-slate-950'
                }`}>
                  {w.severity}
                </span>

                <span className="text-[10px] text-slate-400 font-mono">
                  {w.status}
                </span>
              </div>

              <h3 className="text-sm font-bold text-white">{w.title}</h3>
              <div className="text-[11px] text-slate-400">{w.location_name} ? {w.district}, {w.state}</div>
              
              <p className="text-xs text-slate-300 mt-2 bg-black/40 p-3 rounded-lg border border-white/[0.04]">
                {w.instruction}
              </p>
            </div>

            <div className="pt-2.5 border-t border-white/[0.06] flex items-center justify-between text-xs">
              <div className="flex items-center space-x-1 text-[10px] text-slate-400 font-mono">
                <Radio className="w-3 h-3 text-emerald-400" />
                <span>CAP v1.2 / Cell Broadcast</span>
              </div>

              <div className="flex items-center space-x-2">
                {w.status !== 'Acknowledged' && w.status !== 'Resolved' && (
                  <button
                    onClick={() => acknowledgeWarning(w.id)}
                    className="px-2.5 py-1 rounded bg-white/[0.06] hover:bg-white/[0.1] text-slate-200 font-bold text-[11px]"
                  >
                    Acknowledge
                  </button>
                )}

                {w.status !== 'Resolved' && (
                  <button
                    onClick={() => resolveWarning(w.id)}
                    className="px-2.5 py-1 rounded bg-emerald-500/20 text-emerald-300 hover:bg-emerald-500 hover:text-slate-950 font-bold text-[11px]"
                  >
                    Resolve
                  </button>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
};
