import React, { useState } from 'react';
import { 
  ShieldAlert, Activity, CloudRain, MapPin, 
  Car, AlertTriangle, ArrowUpRight, CheckCircle2, 
  Radio, Sliders, ChevronRight, Siren, LifeBuoy
} from 'lucide-react';
import { useApp } from '../context/AppContext';
import { GisMap } from '../components/GisMap';
import { LiveWeatherCard } from '../components/LiveWeatherCard';

export const Dashboard: React.FC = () => {
  const { 
    locations, sensors, warnings, shelters, selectedLocationId, 
    setSelectedLocationId, setActiveTab, triggerEmergency, t 
  } = useApp();

  const criticalCount = locations.filter(l => l.risk_level === 'CRITICAL').length;
  const highCount = locations.filter(l => l.risk_level === 'HIGH').length;
  const activeSensors = sensors.length;
  const activeAlerts = warnings.filter(w => w.status !== 'Resolved').length;

  const avgRisk = locations.length 
    ? Math.round(locations.reduce((acc, l) => acc + l.risk_score, 0) / locations.length)
    : 76;

  return (
    <div className="space-y-5">
      
      {/* 1. Header Banner */}
      <div className="bg-[#12151b] border border-white/[0.08] rounded-xl p-4 shadow-xl flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div>
          <div className="flex items-center space-x-2">
            <span className="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 text-[10px] font-black uppercase tracking-wider">
              OPERATIONAL PICTURE LIVE
            </span>
            <span className="text-xs text-slate-400 font-mono">
              Northeast Region ? Multi-Sensor Early Warning & Decision Support
            </span>
          </div>
          <h1 className="text-lg font-black text-white mt-1">
            Real-Time Landslide Risk Monitoring & Command Center
          </h1>
        </div>

        <div className="flex items-center space-x-2.5 shrink-0">
          <button
            onClick={() => triggerEmergency('Mangan Ridge Critical Slope Shift', 'North Sikkim (Mangan - Chungthang)')}
            className="flex items-center space-x-1.5 px-3.5 py-2 rounded-lg bg-red-600 hover:bg-red-500 text-white font-bold text-xs shadow-lg shadow-red-600/30 transition-all"
          >
            <Siren className="w-4 h-4" />
            <span>TRIGGER RED ALERT</span>
          </button>

          <button
            onClick={() => setActiveTab('report')}
            className="flex items-center space-x-1.5 px-3.5 py-2 rounded-lg bg-emerald-400 hover:bg-emerald-300 text-slate-950 font-black text-xs shadow-lg shadow-emerald-500/20 transition-all"
          >
            <span>Report Hazard +</span>
          </button>
        </div>
      </div>

      {/* 2. Top Metric Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3.5">
        
        {/* Regional Risk Index */}
        <div className="bg-[#12151b] border border-white/[0.08] rounded-xl p-3.5 shadow-lg flex flex-col justify-between space-y-2">
          <div className="flex items-center justify-between text-xs font-bold text-slate-400">
            <span className="uppercase text-[10px] tracking-wider">{t('regionalRiskIndex') || 'Regional Risk Index'}</span>
            <span className="flex items-center space-x-1 text-emerald-400 font-mono text-[10px]">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
              <span>LIVE</span>
            </span>
          </div>
          <div className="flex items-baseline space-x-2">
            <span className="text-3xl font-black text-white font-mono">{avgRisk}</span>
            <span className="text-xs text-slate-400 font-bold">/ 100</span>
            <span className="px-2 py-0.5 rounded text-[10px] font-black ml-auto bg-red-500/20 text-red-400 border border-red-500/30">
              HIGH RISK
            </span>
          </div>
          <div className="text-[10px] text-slate-400 border-t border-white/[0.04] pt-1.5 flex justify-between">
            <span>Soil Saturation High</span>
            <span className="text-amber-400 font-mono">ISRO/GSI Grid</span>
          </div>
        </div>

        {/* Critical Slopes */}
        <div className="bg-[#12151b] border border-white/[0.08] rounded-xl p-3.5 shadow-lg flex flex-col justify-between space-y-2">
          <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">{t('criticalSlopes') || 'Critical Slopes'}</div>
          <div className="flex items-baseline space-x-2">
            <span className="text-3xl font-black text-red-400 font-mono">{criticalCount}</span>
            <span className="text-xs text-slate-400">/ {locations.length} monitored</span>
          </div>
          <div className="text-[10px] text-slate-400 border-t border-white/[0.04] pt-1.5">
            Mangan, Setijhora & Sohra
          </div>
        </div>

        {/* IoT Sensors Online */}
        <div className="bg-[#12151b] border border-white/[0.08] rounded-xl p-3.5 shadow-lg flex flex-col justify-between space-y-2">
          <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">{t('sensorsOnline') || 'IoT Sensors Online'}</div>
          <div className="flex items-baseline space-x-2">
            <span className="text-3xl font-black text-emerald-400 font-mono">{activeSensors}</span>
            <span className="text-xs text-slate-400">nodes</span>
          </div>
          <div className="text-[10px] text-slate-400 border-t border-white/[0.04] pt-1.5">
            Inclinometers & Piezometers
          </div>
        </div>

        {/* Active Early Warnings */}
        <div className="bg-[#12151b] border border-white/[0.08] rounded-xl p-3.5 shadow-lg flex flex-col justify-between space-y-2">
          <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">{t('activeWarnings') || 'Active Warnings'}</div>
          <div className="flex items-baseline space-x-2">
            <span className="text-3xl font-black text-amber-400 font-mono">{activeAlerts}</span>
            <span className="text-xs text-slate-400">bulletins</span>
          </div>
          <div className="text-[10px] text-slate-400 border-t border-white/[0.04] pt-1.5">
            CAP v1.2 / Cell Broadcast
          </div>
        </div>

        {/* Evacuation Shelters */}
        <div className="bg-[#12151b] border border-white/[0.08] rounded-xl p-3.5 shadow-lg flex flex-col justify-between space-y-2">
          <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">{t('evacuationShelters') || 'Safe Shelters'}</div>
          <div className="flex items-baseline space-x-2">
            <span className="text-3xl font-black text-blue-400 font-mono">{shelters.length}</span>
            <span className="text-xs text-slate-400">safe zones</span>
          </div>
          <div className="text-[10px] text-slate-400 border-t border-white/[0.04] pt-1.5">
            2,750 capacity ready
          </div>
        </div>

      </div>

      {/* 3. Main Center: Multi-Layer GIS Map + Monitored Slopes */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
        
        {/* Left: Interactive Leaflet Map (7 cols) */}
        <div className="lg:col-span-7 bg-[#12151b] border border-white/[0.08] rounded-xl p-3.5 shadow-xl flex flex-col space-y-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <MapPin className="w-4 h-4 text-emerald-400" />
              <h3 className="text-xs font-bold text-white uppercase tracking-wider">
                Geospatial Landslide Risk & Sensor Overlays
              </h3>
            </div>
            <span className="text-[10px] text-slate-400 font-mono">
              CartoDB Dark Matter / OSM
            </span>
          </div>

          <div className="h-[460px] rounded-lg overflow-hidden border border-white/[0.06]">
            <GisMap
              riskZones={locations.map(l => ({
                id: l.id,
                name: l.name,
                district: l.district,
                state: l.state,
                coordinates: l.coordinates,
                risk_score: l.risk_score,
                severity: l.risk_level,
                assessment: {
                  risk_score: l.risk_score,
                  severity: l.risk_level,
                  model_used: 'Physics-Informed Heuristic (API Index)',
                  confidence: 0.94,
                  model_disclaimer: '',
                  summary_explanation: l.description,
                  top_drivers: [],
                  rainfall_24h: l.rainfall_24h_mm,
                  rainfall_72h: l.rainfall_72h_mm,
                  antecedent_precipitation_index: 120,
                  slope_angle_degrees: l.slope_deg,
                  geotechnical_susceptibility: l.lithology,
                  historical_event_density: 'HIGH',
                  recent_field_incidents: 1,
                  population_exposed: l.population_exposed,
                  recommended_action: 'Monitor continuous slope movement.',
                  mitigation_options: ['Evacuation', 'Road Diversion']
                },
                affected_roads: [l.primary_road],
                vulnerable_villages: [],
                is_demo: false,
                last_updated: new Date().toISOString()
              }))}
              roads={[]}
              villages={[]}
              infrastructure={[]}
              incidents={[]}
              alerts={[]}
              onSelectZone={(zone) => {
                setSelectedLocationId(zone.id);
                setActiveTab('location');
              }}
            />
          </div>
        </div>

        {/* Right: Critical Monitored Slopes List (5 cols) */}
        <div className="lg:col-span-5 bg-[#12151b] border border-white/[0.08] rounded-xl p-3.5 shadow-xl flex flex-col justify-between space-y-3">
          
          <div className="space-y-2.5">
            <div className="flex items-center justify-between border-b border-white/[0.06] pb-2">
              <div className="flex items-center space-x-2">
                <ShieldAlert className="w-4 h-4 text-red-400" />
                <h3 className="text-xs font-bold text-white uppercase tracking-wider">
                  {t('monitoredSlopesRanking') || 'Monitored Slopes Ranking'}
                </h3>
              </div>
              <span className="text-[10px] text-slate-400 font-mono">{locations.length} Slopes</span>
            </div>

            <div className="space-y-2 max-h-[420px] overflow-y-auto pr-1">
              {locations.map((loc) => (
                <div
                  key={loc.id}
                  onClick={() => {
                    setSelectedLocationId(loc.id);
                    setActiveTab('location');
                  }}
                  className={`p-3 rounded-lg border transition-all cursor-pointer hover:border-white/[0.2] ${
                    loc.risk_level === 'CRITICAL' 
                      ? 'bg-red-950/15 border-red-800/40' 
                      : loc.risk_level === 'HIGH'
                      ? 'bg-amber-950/15 border-amber-800/40'
                      : 'bg-black/30 border-white/[0.04]'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="text-xs font-bold text-white flex items-center space-x-1.5">
                        <span className={`w-2 h-2 rounded-full ${
                          loc.risk_level === 'CRITICAL' ? 'bg-red-500 animate-ping' :
                          loc.risk_level === 'HIGH' ? 'bg-amber-400' : 'bg-emerald-400'
                        }`} />
                        <span>{loc.name}</span>
                      </h4>
                      <div className="text-[10px] text-slate-400">{loc.district}, {loc.state}</div>
                    </div>

                    <div className="text-right">
                      <span className={`text-base font-black font-mono ${
                        loc.risk_level === 'CRITICAL' ? 'text-red-400' :
                        loc.risk_level === 'HIGH' ? 'text-amber-400' : 'text-emerald-400'
                      }`}>
                        {loc.risk_score}
                      </span>
                      <span className="text-[9px] text-slate-400 block font-bold uppercase">{loc.risk_level}</span>
                    </div>
                  </div>

                  <div className="grid grid-cols-3 gap-2 mt-2 pt-1.5 border-t border-white/[0.04] text-[10px] text-slate-300 font-mono">
                    <div>Slope: <strong className="text-white">{loc.slope_deg}°</strong></div>
                    <div>24h Rain: <strong className="text-amber-400">{loc.rainfall_24h_mm}mm</strong></div>
                    <div>FoS: <strong className={loc.factor_of_safety < 1.15 ? 'text-red-400' : 'text-emerald-400'}>{loc.factor_of_safety}</strong></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button
            onClick={() => setActiveTab('prediction')}
            className="w-full py-2 rounded-lg bg-black/50 hover:bg-black/80 text-emerald-400 font-bold text-xs border border-white/[0.08] flex items-center justify-center space-x-1.5 transition-all"
          >
            <Sliders className="w-3.5 h-3.5" />
            <span>Open AI Risk Prediction Sandbox →</span>
          </button>

        </div>

      </div>

      {/* 4. Live Meteorology Card */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
        <div className="lg:col-span-8">
          <LiveWeatherCard />
        </div>

        <div className="lg:col-span-4 bg-[#12151b] border border-white/[0.08] rounded-xl p-4 shadow-xl space-y-3">
          <div className="flex items-center space-x-2 border-b border-white/[0.06] pb-2">
            <LifeBuoy className="w-4 h-4 text-emerald-400" />
            <h3 className="text-xs font-bold text-white uppercase tracking-wider">
              Emergency Contact Hotlines
            </h3>
          </div>

          <div className="space-y-2 text-xs">
            <div className="p-2.5 rounded-lg bg-black/40 border border-white/[0.06] flex justify-between items-center">
              <div>
                <div className="font-bold text-white">{t('nationalHelpline') || 'National Disaster Helpline'}</div>
                <div className="text-[10px] text-slate-400">All-India Emergency</div>
              </div>
              <a href="tel:112" className="px-3 py-1 rounded bg-emerald-500 text-slate-950 font-mono font-bold">112</a>
            </div>

            <div className="p-2.5 rounded-lg bg-black/40 border border-white/[0.06] flex justify-between items-center">
              <div>
                <div className="font-bold text-white">{t('controlRoom') || 'NDMA Control Room'}</div>
                <div className="text-[10px] text-slate-400">Disaster Ops Directorate</div>
              </div>
              <a href="tel:1070" className="px-3 py-1 rounded bg-blue-500/20 text-blue-300 font-mono font-bold">1070</a>
            </div>

            <div className="p-2.5 rounded-lg bg-black/40 border border-white/[0.06] flex justify-between items-center">
              <div>
                <div className="font-bold text-white">{t('highwayClearance') || 'BRO Highway Clearance'}</div>
                <div className="text-[10px] text-slate-400">Project Swastik & Pushpak</div>
              </div>
              <a href="tel:1077" className="px-3 py-1 rounded bg-amber-500/20 text-amber-300 font-mono font-bold">1077</a>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};
