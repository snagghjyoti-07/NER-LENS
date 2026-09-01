import React, { useState } from 'react';
import { BarChart3, TrendingUp, CloudRain, Calendar, ShieldCheck, PieChart, Sliders } from 'lucide-react';
import { HistoricalLandslide } from '../types';
import { HistoricalExplorer } from '../components/HistoricalExplorer';
import { RiskSimulatorSandbox } from '../components/RiskSimulatorSandbox';

export const AnalyticsPage: React.FC<{ historicalEvents: HistoricalLandslide[] }> = ({ historicalEvents }) => {
  const [activeSubTab, setActiveSubTab] = useState<'historical' | 'simulator'>('simulator');

  const stats = [
    { label: "Northeast Himalaya Landslide Share", value: "~18.8?19%", sub: "of ~80,000 nationwide (ISRO/NRSC mapped 1998?2022)", highlight: true },
    { label: "2025 Seasonal Inventory Incidents", value: "374", sub: "Documented by NESAC (with 63 reported casualties)", highlight: false },
    { label: "2024 Pre-Monsoon Losses (Nagaland)", value: ">?230 Cr", sub: "Peren & Shamator major storm events (SDMA/MDoNER)", highlight: false },
    { label: "High Vulnerability Lifeline Corridors", value: "14", sub: "Including NH-10, NH-29, NH-27, and NH-06", highlight: false }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 space-y-6">
      
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-gov-card border border-gov-border rounded-xl p-5 shadow-xl">
        <div>
          <div className="flex items-center space-x-2">
            <BarChart3 className="w-6 h-6 text-amber-400" />
            <h2 className="text-xl font-black text-white">Northeast Landslide Risk Analytics & Research Grounding</h2>
          </div>
          <p className="text-xs text-slate-300 max-w-3xl mt-1">
            Historical analysis based on published ISRO/NRSC Landslide Atlases, Geological Survey of India (GSI) susceptibility mapping, and NESAC seasonal reports.
          </p>
        </div>

        {/* Sub-tab Switcher */}
        <div className="flex items-center space-x-2 bg-slate-900 p-1 rounded-lg border border-slate-700">
          <button
            onClick={() => setActiveSubTab('simulator')}
            className={`flex items-center space-x-1.5 px-3 py-1.5 rounded text-xs font-bold transition-all ${
              activeSubTab === 'simulator' ? 'bg-amber-500 text-slate-950 shadow' : 'text-slate-300 hover:text-white'
            }`}
          >
            <Sliders className="w-3.5 h-3.5" />
            <span>Interactive Simulator</span>
          </button>

          <button
            onClick={() => setActiveSubTab('historical')}
            className={`flex items-center space-x-1.5 px-3 py-1.5 rounded text-xs font-bold transition-all ${
              activeSubTab === 'historical' ? 'bg-amber-500 text-slate-950 shadow' : 'text-slate-300 hover:text-white'
            }`}
          >
            <Calendar className="w-3.5 h-3.5" />
            <span>Historical Inventory</span>
          </button>
        </div>
      </div>

      {/* Key Research Grounded Stat Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((s, idx) => (
          <div
            key={idx}
            className={`p-4 rounded-xl border shadow-lg space-y-1.5 ${
              s.highlight ? 'bg-amber-500/10 border-amber-500/40 text-amber-300' : 'bg-gov-card border-gov-border text-slate-200'
            }`}
          >
            <div className="text-xs font-bold text-slate-400 uppercase tracking-wider">{s.label}</div>
            <div className="text-2xl font-black text-white">{s.value}</div>
            <div className="text-[11px] text-slate-400">{s.sub}</div>
          </div>
        ))}
      </div>

      {/* Sub-tab view */}
      {activeSubTab === 'simulator' ? (
        <RiskSimulatorSandbox />
      ) : (
        <HistoricalExplorer events={historicalEvents} />
      )}

    </div>
  );
};
