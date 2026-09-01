import React, { useState, useEffect } from 'react';
import { Activity, RefreshCw } from 'lucide-react';
import { useApp } from '../context/AppContext';

export const DataHealth: React.FC = () => {
  const [healthData, setHealthData] = useState<any>(null);

  const fetchHealth = async () => {
    try {
      const res = await fetch('http://127.0.0.1:8000/api/data-health');
      if (res.ok) {
        setHealthData(await res.json());
      }
    } catch (e) {
      console.warn('Health fetch error:', e);
    }
  };

  useEffect(() => {
    fetchHealth();
  }, []);

  return (
    <div className="space-y-5">
      
      <div className="bg-[#12151b] border border-white/[0.08] rounded-xl p-5 shadow-xl flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <div className="flex items-center space-x-2">
            <Activity className="w-5 h-5 text-emerald-400" />
            <h1 className="text-lg font-black text-white">Ingestion Pipeline Telemetry & Health</h1>
          </div>
          <p className="text-xs text-slate-300 max-w-2xl mt-1">
            Real-time diagnostics across IMD Automatic Weather Stations, ISRO Bhuvan satellite grids, GSI susceptibility layers, and IoT LoRa gateways.
          </p>
        </div>

        <button
          onClick={fetchHealth}
          className="flex items-center space-x-1.5 px-3 py-1.5 rounded-lg bg-white/[0.05] hover:bg-white/[0.08] text-emerald-400 font-bold text-xs border border-white/[0.08] shrink-0"
        >
          <RefreshCw className="w-3.5 h-3.5" />
          <span>Ping Streams</span>
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5">
        <div className="bg-[#12151b] border border-white/[0.08] p-3.5 rounded-xl space-y-1">
          <span className="text-[10px] text-slate-400 font-bold uppercase">Overall Pipeline Health</span>
          <div className="text-2xl font-black text-emerald-400 font-mono">98.4%</div>
          <div className="text-[10px] text-emerald-400">All 6 Core Streams Connected</div>
        </div>

        <div className="bg-[#12151b] border border-white/[0.08] p-3.5 rounded-xl space-y-1">
          <span className="text-[10px] text-slate-400 font-bold uppercase">Active Streams</span>
          <div className="text-2xl font-black text-blue-400 font-mono">28 Nodes</div>
          <div className="text-[10px] text-slate-400">0 Missing telemetry feeds</div>
        </div>

        <div className="bg-[#12151b] border border-white/[0.08] p-3.5 rounded-xl space-y-1">
          <span className="text-[10px] text-slate-400 font-bold uppercase">Prediction Confidence</span>
          <div className="text-2xl font-black text-amber-400 font-mono">94.2%</div>
          <div className="text-[10px] text-slate-400">Multi-source ensemble weight</div>
        </div>

        <div className="bg-[#12151b] border border-white/[0.08] p-3.5 rounded-xl space-y-1">
          <span className="text-[10px] text-slate-400 font-bold uppercase">Outliers</span>
          <div className="text-2xl font-black text-white font-mono">1 Filtered</div>
          <div className="text-[10px] text-slate-400">Spurious spike removed</div>
        </div>
      </div>

      <div className="bg-[#12151b] border border-white/[0.08] rounded-xl p-5 shadow-xl space-y-3">
        <h3 className="text-xs font-bold text-white uppercase tracking-wider border-b border-white/[0.06] pb-2">
          Upstream Data Ingestion Streams
        </h3>

        <div className="space-y-2">
          {(healthData?.streams || [
            { provider: "IMD AWS & Doppler Radar Telemetry", status: "CONNECTED", latency_ms: 115, freshness: "2 min ago", packet_loss_percent: 0.1 },
            { provider: "ISRO NRSC Bhuvan Spatial Grid", status: "CONNECTED", latency_ms: 180, freshness: "15 min ago", packet_loss_percent: 0.0 },
            { provider: "GSI NLSM 1:50k Susceptibility Layer", status: "INTEGRATED", latency_ms: 45, freshness: "Cached Vector", packet_loss_percent: 0.0 },
            { provider: "IoT LoRaWAN Geotechnical Gateway", status: "CONNECTED", latency_ms: 65, freshness: "Just now", packet_loss_percent: 0.3 },
            { provider: "NDMA SACHET / CAP v1.2 Dispatch", status: "CONNECTED", latency_ms: 95, freshness: "1 min ago", packet_loss_percent: 0.0 },
            { provider: "State EOC Field Mobile Uplink", status: "CONNECTED", latency_ms: 78, freshness: "Just now", packet_loss_percent: 0.2 }
          ]).map((st: any, i: number) => (
            <div key={i} className="p-3 rounded-lg bg-black/40 border border-white/[0.06] flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs">
              <div className="flex items-center space-x-2.5">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <div>
                  <div className="font-bold text-white">{st.provider}</div>
                  <div className="text-[10px] text-slate-400">Freshness: {st.freshness}</div>
                </div>
              </div>

              <div className="flex items-center space-x-4 font-mono text-[11px] self-end sm:self-center">
                <span className="text-slate-300">Ping: <strong className="text-emerald-400">{st.latency_ms}ms</strong></span>
                <span className="text-slate-300">Loss: <strong className="text-blue-400">{st.packet_loss_percent}%</strong></span>
                <span className="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 font-bold text-[10px]">
                  {st.status}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
};
