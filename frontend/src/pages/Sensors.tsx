import React, { useState } from 'react';
import { 
  Radio, Activity, Battery, Signal, 
  AlertTriangle, CheckCircle2, RefreshCw 
} from 'lucide-react';
import { useApp } from '../context/AppContext';

export const Sensors: React.FC = () => {
  const { sensors, refreshData, t } = useApp();
  const [selectedType, setSelectedType] = useState<string>('ALL');
  const [searchTerm, setSearchTerm] = useState<string>('');

  const types = ['ALL', 'Inclinometer', 'Piezometer', 'Rain Gauge', 'Crackmeter', 'Extensometer', 'GNSS'];

  const filtered = sensors.filter(s => {
    const matchType = selectedType === 'ALL' || s.type.toLowerCase() === selectedType.toLowerCase();
    const matchSearch = s.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                        s.location_name.toLowerCase().includes(searchTerm.toLowerCase());
    return matchType && matchSearch;
  });

  return (
    <div className="space-y-5">
      
      <div className="bg-[#12151b] border border-white/[0.08] rounded-xl p-5 shadow-xl flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div>
          <div className="flex items-center space-x-2">
            <Radio className="w-5 h-5 text-emerald-400" />
            <h1 className="text-lg font-black text-white">IoT Geotechnical Sensor Network</h1>
          </div>
          <p className="text-xs text-slate-300 max-w-2xl mt-1">
            Real-time telemetry stream from borehole inclinometers, vibrating wire piezometers, optical crackmeters, and tipping bucket gauges across high-risk slopes.
          </p>
        </div>

        <button
          onClick={refreshData}
          className="flex items-center space-x-1.5 px-3 py-1.5 rounded-lg bg-white/[0.05] hover:bg-white/[0.08] text-emerald-400 font-bold text-xs border border-white/[0.08]"
        >
          <RefreshCw className="w-3.5 h-3.5" />
          <span>Refresh Telemetry Stream</span>
        </button>
      </div>

      <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 bg-[#12151b] p-3 rounded-xl border border-white/[0.08]">
        <div className="flex flex-wrap gap-1 text-xs font-bold">
          {types.map((typ) => (
            <button
              key={typ}
              onClick={() => setSelectedType(typ)}
              className={`px-3 py-1.5 rounded-lg transition-all ${
                selectedType === typ ? 'bg-emerald-400 text-slate-950 font-black shadow' : 'bg-black/40 text-slate-300 hover:text-white'
              }`}
            >
              {typ}
            </button>
          ))}
        </div>

        <input
          type="text"
          placeholder="Search sensor node or location..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="bg-black/40 border border-white/[0.08] rounded-lg px-3 py-1.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-emerald-400 sm:w-64"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filtered.map((s) => (
          <div
            key={s.id}
            className={`p-4 rounded-xl border shadow-xl flex flex-col justify-between space-y-3 ${
              s.status === 'CRITICAL' ? 'bg-red-950/10 border-red-800/50' :
              s.status === 'HIGH' ? 'bg-amber-950/10 border-amber-800/50' :
              'bg-[#12151b] border-white/[0.08]'
            }`}
          >
            <div className="space-y-1">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-black/40 text-emerald-300 border border-white/[0.06]">
                  {s.type}
                </span>
                <span className={`px-2 py-0.5 rounded text-[9px] font-black uppercase ${
                  s.status === 'CRITICAL' ? 'bg-red-500 text-white' :
                  s.status === 'HIGH' ? 'bg-amber-500 text-slate-950' : 'bg-emerald-500/20 text-emerald-300'
                }`}>
                  {s.status}
                </span>
              </div>

              <h3 className="text-sm font-bold text-white pt-1">{s.name}</h3>
              <div className="text-[11px] text-slate-400">{s.location_name}</div>
            </div>

            <div className="bg-black/40 p-3 rounded-lg border border-white/[0.06] flex items-center justify-between">
              <span className="text-xs text-slate-400">Current Reading:</span>
              <span className="text-base font-black font-mono text-emerald-400">{s.reading}</span>
            </div>

            <div className="flex items-center justify-between text-[11px] text-slate-400 border-t border-white/[0.04] pt-2 font-mono">
              <div className="flex items-center space-x-1">
                <Battery className="w-3.5 h-3.5 text-emerald-400" />
                <span>{s.battery_percent}%</span>
              </div>

              <div className="flex items-center space-x-1">
                <Signal className="w-3.5 h-3.5 text-blue-400" />
                <span>{s.signal_rssi} dBm</span>
              </div>

              <span>{s.last_ping}</span>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
};
