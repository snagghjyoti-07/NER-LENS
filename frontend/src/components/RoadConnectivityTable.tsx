
import React from 'react';
import { Navigation, AlertTriangle, CheckCircle2, Clock } from 'lucide-react';
import { Road } from '../types';

export const RoadConnectivityTable: React.FC<{ roads: Road[] }> = ({ roads }) => {
  return (
    <div className="bg-gov-card border border-gov-border rounded-xl p-4 shadow-xl space-y-3">
      <div className="flex items-center justify-between border-b border-gov-border pb-2.5">
        <div className="flex items-center space-x-2">
          <Navigation className="w-5 h-5 text-blue-400" />
          <h3 className="text-sm font-bold text-white">Lifeline Road Corridors & Blockage Status</h3>
        </div>
        <span className="text-xs text-slate-400">{roads.length} Corridors Monitored</span>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-left text-xs">
          <thead>
            <tr className="border-b border-slate-800 text-slate-400 uppercase text-[10px]">
              <th className="pb-2">Highway / Route</th>
              <th className="pb-2">State & District</th>
              <th className="pb-2">Status</th>
              <th className="pb-2">Blockage Reason / Detour Route</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-800 text-slate-300">
            {roads.map((r) => (
              <tr key={r.id} className="hover:bg-slate-900/60">
                <td className="py-2.5 font-semibold text-white">
                  {r.name}
                  <div className="text-[10px] text-slate-500">{r.start_point} ? {r.end_point}</div>
                </td>
                <td className="py-2.5">{r.district}, {r.state}</td>
                <td className="py-2.5">
                  <span className={`inline-flex items-center px-2 py-0.5 rounded text-[10px] font-bold ${
                    r.status === 'BLOCKED' ? 'bg-red-500/20 text-red-400 border border-red-500/30' :
                    r.status === 'SLOW' ? 'bg-amber-500/20 text-amber-400 border border-amber-500/30' :
                    'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30'
                  }`}>
                    {r.status}
                  </span>
                </td>
                <td className="py-2.5 text-[11px]">
                  {r.blockage_cause ? (
                    <div className="text-red-300 line-clamp-1">{r.blockage_cause}</div>
                  ) : null}
                  {r.alternative_route ? (
                    <div className="text-slate-400 text-[10px] line-clamp-1">Detour: {r.alternative_route}</div>
                  ) : (
                    <span className="text-emerald-400">Normal Transit</span>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
