import React from 'react';
import { BarChart2, TrendingUp, Activity, CloudRain, ShieldAlert } from 'lucide-react';
import { useApp } from '../context/AppContext';

export const Analytics: React.FC = () => {
  const { t } = useApp();

  return (
    <div className="space-y-5">
      
      <div className="bg-[#12151b] border border-white/[0.08] rounded-xl p-5 shadow-xl">
        <div className="flex items-center space-x-2">
          <BarChart2 className="w-5 h-5 text-emerald-400" />
          <h1 className="text-lg font-black text-white">Landslide Risk & Operational Analytics</h1>
        </div>
        <p className="text-xs text-slate-300 max-w-2xl mt-1">
          Long-term geospatial risk trends, correlation between cumulative rainfall and slope failures, sensor network reliability, and mock drill logs.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5">
        <div className="bg-[#12151b] border border-white/[0.08] p-3.5 rounded-xl space-y-1">
          <span className="text-[10px] text-slate-400 font-bold uppercase">Average Warning Lead-Time</span>
          <div className="text-2xl font-black text-emerald-400 font-mono">18.4 Hours</div>
          <div className="text-[10px] text-slate-400">Before mass scarp failure</div>
        </div>

        <div className="bg-[#12151b] border border-white/[0.08] p-3.5 rounded-xl space-y-1">
          <span className="text-[10px] text-slate-400 font-bold uppercase">IoT Sensor Telemetry Uptime</span>
          <div className="text-2xl font-black text-blue-400 font-mono">99.4%</div>
          <div className="text-[10px] text-slate-400">LoRaWAN & 4G solar mesh</div>
        </div>

        <div className="bg-[#12151b] border border-white/[0.08] p-3.5 rounded-xl space-y-1">
          <span className="text-[10px] text-slate-400 font-bold uppercase">Community Mock Drills</span>
          <div className="text-2xl font-black text-amber-400 font-mono">24 Conducted</div>
          <div className="text-[10px] text-slate-400">Across 8 NER states</div>
        </div>

        <div className="bg-[#12151b] border border-white/[0.08] p-3.5 rounded-xl space-y-1">
          <span className="text-[10px] text-slate-400 font-bold uppercase">Volunteers Trained</span>
          <div className="text-2xl font-black text-emerald-400 font-mono">14,200+</div>
          <div className="text-[10px] text-slate-400">Aapda Mitra community network</div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div className="bg-[#12151b] border border-white/[0.08] rounded-xl p-5 shadow-xl space-y-3">
          <h3 className="text-xs font-bold text-white uppercase tracking-wider border-b border-white/[0.06] pb-2">
            Rainfall vs Landslide Occurrence Correlation (2020 - 2026)
          </h3>
          <div className="space-y-2 text-xs">
            {[
              { zone: 'Mangan Ridge (Sikkim)', rain: '280 mm threshold', events: 14, risk: 'Very High' },
              { zone: 'Sohra Escarpment (Meghalaya)', rain: '320 mm threshold', events: 22, risk: 'Critical' },
              { zone: 'NH-10 29th Mile (Kalimpong)', rain: '190 mm threshold', events: 31, risk: 'Critical' },
              { zone: 'Pagla Pahar NH-29 (Nagaland)', rain: '160 mm threshold', events: 18, risk: 'High' }
            ].map((row, i) => (
              <div key={i} className="p-2.5 rounded-lg bg-black/40 border border-white/[0.06] flex justify-between items-center">
                <div>
                  <div className="font-bold text-white">{row.zone}</div>
                  <div className="text-[10px] text-slate-400">{row.rain}</div>
                </div>
                <div className="text-right">
                  <span className="font-mono text-amber-400 font-bold">{row.events} Slides</span>
                  <span className="text-[10px] text-red-400 block font-bold">{row.risk}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-[#12151b] border border-white/[0.08] rounded-xl p-5 shadow-xl space-y-3">
          <h3 className="text-xs font-bold text-white uppercase tracking-wider border-b border-white/[0.06] pb-2">
            Historical Disasters Cataloged in NER
          </h3>
          <div className="space-y-2 text-xs">
            {[
              { name: '2024 Cyclone Remal Landslides', loc: 'Mizoram & Nagaland', impact: '34 fatalities, road network cutoff' },
              { name: '2023 South Lhonak GLOF & Slide', loc: 'Sikkim Teesta Basin', impact: 'NH-10 washed out, 40+ casualties' },
              { name: '2022 Tupul Railway Camp Slide', loc: 'Noney, Manipur', impact: '61 fatalities, Ijei river blocked' },
              { name: '2022 Dima Hasao Pre-Monsoon', loc: 'Assam Hill Section', impact: 'New Haflong submerged, 37 casualties' }
            ].map((ev, i) => (
              <div key={i} className="p-2.5 rounded-lg bg-black/40 border border-white/[0.06] space-y-0.5">
                <div className="font-bold text-emerald-300">{ev.name}</div>
                <div className="text-[11px] text-slate-400">{ev.loc} ? {ev.impact}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

    </div>
  );
};
