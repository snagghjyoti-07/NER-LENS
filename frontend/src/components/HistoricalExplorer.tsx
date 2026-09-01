
import React, { useState } from 'react';
import { History, Search, Filter, Calendar, MapPin, IndianRupee, Users } from 'lucide-react';
import { HistoricalLandslide } from '../types';

export const HistoricalExplorer: React.FC<{ events: HistoricalLandslide[] }> = ({ events }) => {
  const [selectedState, setSelectedState] = useState<string>('ALL');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const filtered = events.filter((e) => {
    const matchesState = selectedState === 'ALL' || e.state.toLowerCase() === selectedState.toLowerCase();
    const matchesQuery = e.location_name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         e.district.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         e.trigger.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesState && matchesQuery;
  });

  return (
    <div className="bg-gov-card border border-gov-border rounded-xl p-5 shadow-xl space-y-4">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-gov-border pb-3">
        <div className="flex items-center space-x-2">
          <History className="w-5 h-5 text-amber-400" />
          <div>
            <h3 className="text-base font-bold text-white">Historical Landslide Inventory (1998?2025)</h3>
            <p className="text-[11px] text-slate-400">
              Grounded in ISRO/NRSC National Landslide Atlas & NESAC Seasonal Inventories
            </p>
          </div>
        </div>

        {/* Filter Controls */}
        <div className="flex items-center space-x-2">
          <select
            value={selectedState}
            onChange={(e) => setSelectedState(e.target.value)}
            className="bg-slate-900 border border-slate-700 rounded-lg px-2.5 py-1.5 text-xs text-white"
          >
            <option value="ALL">All 8 NE States</option>
            <option value="Meghalaya">Meghalaya</option>
            <option value="Nagaland">Nagaland</option>
            <option value="Sikkim">Sikkim</option>
            <option value="Assam">Assam</option>
            <option value="Arunachal Pradesh">Arunachal Pradesh</option>
            <option value="Manipur">Manipur</option>
            <option value="Mizoram">Mizoram</option>
          </select>

          <div className="relative">
            <Search className="w-3.5 h-3.5 absolute left-2.5 top-2.5 text-slate-400" />
            <input
              type="text"
              placeholder="Search location, trigger..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="bg-slate-900 border border-slate-700 rounded-lg pl-8 pr-3 py-1.5 text-xs text-white w-48"
            />
          </div>
        </div>
      </div>

      {/* Historical Records Table */}
      <div className="overflow-x-auto">
        <table className="w-full text-left text-xs">
          <thead>
            <tr className="border-b border-slate-800 text-slate-400 uppercase text-[10px]">
              <th className="pb-2">Year / Date</th>
              <th className="pb-2">Location & District</th>
              <th className="pb-2">Trigger Event</th>
              <th className="pb-2">Severity</th>
              <th className="pb-2">Casualties / Impact</th>
              <th className="pb-2">Economic Loss (Est.)</th>
              <th className="pb-2">Source Agency</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-800 text-slate-300">
            {filtered.map((ev) => (
              <tr key={ev.id} className="hover:bg-slate-900/60">
                <td className="py-2.5 font-mono text-amber-400">{ev.event_date}</td>
                <td className="py-2.5">
                  <div className="font-bold text-white">{ev.location_name}</div>
                  <div className="text-[10px] text-slate-400">{ev.district}, {ev.state}</div>
                </td>
                <td className="py-2.5 text-slate-300">{ev.trigger}</td>
                <td className="py-2.5">
                  <span className={`px-2 py-0.5 rounded text-[10px] font-bold ${
                    ev.severity === 'CRITICAL' ? 'bg-red-500/20 text-red-400 border border-red-500/30' : 'bg-orange-500/20 text-orange-400 border border-orange-500/30'
                  }`}>
                    {ev.severity}
                  </span>
                </td>
                <td className="py-2.5">
                  {ev.reported_casualties > 0 ? (
                    <span className="text-red-300 font-bold">{ev.reported_casualties} casualties</span>
                  ) : (
                    <span className="text-slate-400">0 direct</span>
                  )}
                </td>
                <td className="py-2.5 font-semibold text-slate-200">
                  ?{ev.estimated_economic_loss_inr_cr.toFixed(1)} Cr
                </td>
                <td className="py-2.5 text-[11px] text-slate-400">
                  {ev.source_agency}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
