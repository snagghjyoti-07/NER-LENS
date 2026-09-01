
import React from 'react';
import { MapPin, Users, ShieldAlert, Home } from 'lucide-react';
import { VulnerableVillage } from '../types';

export const VillageExposureTable: React.FC<{ villages: VulnerableVillage[] }> = ({ villages }) => {
  return (
    <div className="bg-gov-card border border-gov-border rounded-xl p-4 shadow-xl space-y-3">
      <div className="flex items-center justify-between border-b border-gov-border pb-2.5">
        <div className="flex items-center space-x-2">
          <Users className="w-5 h-5 text-emerald-400" />
          <h3 className="text-sm font-bold text-white">Vulnerable Communities & Evacuation Proximity</h3>
        </div>
        <span className="text-xs text-slate-400">{villages.length} Hill Settlements</span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
        {villages.map((v) => (
          <div key={v.id} className="p-3 rounded-lg bg-slate-900 border border-slate-800 space-y-2 text-xs">
            <div className="flex items-center justify-between border-b border-slate-800 pb-1.5">
              <span className="font-bold text-white">{v.name}</span>
              <span className={`px-2 py-0.5 rounded text-[10px] font-bold ${
                v.risk_level === 'CRITICAL' ? 'bg-red-500/20 text-red-400' :
                v.risk_level === 'HIGH' ? 'bg-orange-500/20 text-orange-400' :
                'bg-amber-500/20 text-amber-400'
              }`}>
                {v.risk_level}
              </span>
            </div>

            <div className="text-[11px] text-slate-300 space-y-1">
              <p>District: <strong>{v.district}, {v.state}</strong></p>
              <p>Population: <strong>{v.population.toLocaleString()}</strong></p>
              <p>Slope Scarp Distance: <strong>{v.slope_proximity_meters} m</strong></p>
              <p className="flex items-center space-x-1 text-slate-400">
                <Home className="w-3 h-3 text-amber-400 shrink-0" />
                <span className="truncate">Shelter: {v.nearest_shelter_name} ({v.nearest_shelter_distance_km}km)</span>
              </p>
            </div>

            {v.active_warning && (
              <div className="p-1.5 rounded bg-red-950/40 border border-red-500/30 text-[10px] text-red-300">
                ? {v.active_warning}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};
