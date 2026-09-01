import React, { useState } from 'react';
import { 
  LifeBuoy, ShieldCheck, MapPin, Phone, 
  Car, AlertTriangle, Users, ChevronDown, ChevronUp,
  Hospital, Shield, Construction, ExternalLink
} from 'lucide-react';
import { useApp } from '../context/AppContext';
import { GisMap } from '../components/GisMap';

export const Evacuation: React.FC = () => {
  const { shelters, locations, t } = useApp();
  const [activeCard, setActiveCard] = useState<'shelters' | 'hospitals' | 'roads'>('shelters');

  const HOSPITALS = [
    { name: "Mangan District Hospital & Trauma Center", district: "Mangan, Sikkim", beds: 45, emergencyContact: "03592-234102", distance: "2.4 km" },
    { name: "Sohra Community Health Centre (CHC)", district: "East Khasi Hills, Meghalaya", beds: 30, emergencyContact: "03637-235220", distance: "1.8 km" },
    { name: "Singtam District Civil Hospital", district: "Gangtok, Sikkim", beds: 80, emergencyContact: "03592-233450", distance: "4.1 km" },
    { name: "Naga Hospital Authority Kohima", district: "Kohima, Nagaland", beds: 150, emergencyContact: "0370-2222916", distance: "6.2 km" }
  ];

  const BLOCKED_ROADS = [
    { road: "North Sikkim Highway (NH-310A)", sector: "Mangan - Chungthang Sector", status: "BLOCKED", cause: "Active debris slide at km 28", clearance: "Est. 6 hours (BRO Project Swastik)" },
    { road: "NH-10 Siliguri - Gangtok Lifeline", sector: "Setijhora 29th Mile", status: "BLOCKED", cause: "Teesta river scouring & road subsidence", clearance: "Heavy machinery deployed" },
    { road: "NH-29 Dimapur - Kohima Corridor", sector: "Pagla Pahar Zubza Section", status: "RESTRICTED", cause: "Crown tension crack 15cm", clearance: "Single-lane convoy regulated" },
    { road: "NH-27 East-West Corridor", sector: "Jatinga Valley, Dima Hasao", status: "OPEN", cause: "Clearance completed", clearance: "Normal transit" }
  ];

  return (
    <div className="space-y-4">
      
      {/* Page Header matching Screenshot */}
      <div className="flex items-start space-x-3">
        <div className="w-8 h-8 rounded-full bg-white/[0.05] border border-white/[0.1] flex items-center justify-center text-slate-200 shrink-0 mt-0.5">
          <LifeBuoy className="w-4 h-4 text-slate-300" />
        </div>
        <div>
          <h1 className="text-xl font-bold text-white tracking-tight">
            Evacuation & Safe Zones
          </h1>
          <p className="text-xs text-slate-400 mt-0.5">
            Safe routes are simulated ? verify with ground teams before operational use
          </p>
        </div>
      </div>

      {/* Main Grid: Left Map + Right 3 Stacked Cards matching Reference */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 pt-1">
        
        {/* Left Map Container (8 cols) */}
        <div className="lg:col-span-8 bg-[#0e1015] border border-white/[0.08] rounded-xl overflow-hidden shadow-2xl h-[560px] relative">
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
                recommended_action: 'Follow evacuation directives.',
                mitigation_options: ['Evacuate to Safe Shelters', 'BRO Highway Route']
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
          />
        </div>

        {/* Right 3 Stacked Cards matching Reference (4 cols) */}
        <div className="lg:col-span-4 space-y-3.5 flex flex-col justify-start">
          
          {/* Card 1: Evacuation Centers & Shelters */}
          <div className="bg-[#12151b] border border-white/[0.08] rounded-xl overflow-hidden shadow-lg transition-all">
            <button
              onClick={() => setActiveCard(activeCard === 'shelters' ? 'shelters' : 'shelters')}
              className="w-full p-4 flex items-center justify-between text-left hover:bg-white/[0.02]"
            >
              <h2 className="text-sm font-bold text-white tracking-wide">
                Evacuation Centers & Shelters
              </h2>
              <span className="text-xs text-emerald-400 font-mono font-bold">
                {shelters.length} Active
              </span>
            </button>

            {activeCard === 'shelters' && (
              <div className="px-4 pb-4 space-y-2.5 max-h-[220px] overflow-y-auto border-t border-white/[0.04] pt-3 text-xs">
                {shelters.map((sh) => (
                  <div key={sh.id} className="p-3 rounded-lg bg-black/40 border border-white/[0.06] space-y-1.5">
                    <div className="flex justify-between items-start">
                      <div className="font-bold text-white">{sh.name}</div>
                      <span className="text-[10px] text-slate-400 font-mono">{sh.district}</span>
                    </div>

                    <div className="space-y-1">
                      <div className="flex justify-between text-[11px] text-slate-400">
                        <span>Occupancy:</span>
                        <span className="text-amber-400 font-mono font-bold">{sh.current_occupancy} / {sh.capacity} persons</span>
                      </div>
                      <div className="w-full h-1.5 rounded-full bg-slate-800 overflow-hidden">
                        <div 
                          className="h-full bg-emerald-400 rounded-full" 
                          style={{ width: `${(sh.current_occupancy / sh.capacity) * 100}%` }} 
                        />
                      </div>
                    </div>

                    <div className="flex items-center justify-between pt-1 text-[10px] text-slate-400">
                      <span className="text-emerald-400">Medical: {sh.medical_team_on_site ? 'Ready ✓' : 'Standby'}</span>
                      <a href="tel:112" className="text-amber-400 font-bold hover:underline">Contact: 112</a>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Card 2: Hospitals & Police */}
          <div className="bg-[#12151b] border border-white/[0.08] rounded-xl overflow-hidden shadow-lg transition-all">
            <button
              onClick={() => setActiveCard(activeCard === 'hospitals' ? 'shelters' : 'hospitals')}
              className="w-full p-4 flex items-center justify-between text-left hover:bg-white/[0.02]"
            >
              <h2 className="text-sm font-bold text-white tracking-wide">
                Hospitals & Police
              </h2>
              <span className="text-xs text-slate-400 font-mono">
                {HOSPITALS.length} Units
              </span>
            </button>

            {activeCard === 'hospitals' && (
              <div className="px-4 pb-4 space-y-2.5 max-h-[220px] overflow-y-auto border-t border-white/[0.04] pt-3 text-xs">
                {HOSPITALS.map((h, idx) => (
                  <div key={idx} className="p-3 rounded-lg bg-black/40 border border-white/[0.06] space-y-1">
                    <div className="font-bold text-white">{h.name}</div>
                    <div className="text-[11px] text-slate-400">{h.district} ? Distance: {h.distance}</div>
                    <div className="flex justify-between items-center pt-1 text-[11px]">
                      <span className="text-blue-400 font-mono">{h.beds} Emergency Beds</span>
                      <a href={`tel:${h.emergencyContact}`} className="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 font-mono font-bold">
                        {h.emergencyContact}
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Card 3: Blocked / Restricted Roads */}
          <div className="bg-[#12151b] border border-white/[0.08] rounded-xl overflow-hidden shadow-lg transition-all">
            <button
              onClick={() => setActiveCard(activeCard === 'roads' ? 'shelters' : 'roads')}
              className="w-full p-4 flex items-center justify-between text-left hover:bg-white/[0.02]"
            >
              <h2 className="text-sm font-bold text-white tracking-wide">
                Blocked / Restricted Roads
              </h2>
              <span className="text-xs text-red-400 font-mono font-bold">
                2 Blocked
              </span>
            </button>

            {activeCard === 'roads' && (
              <div className="px-4 pb-4 space-y-2.5 max-h-[220px] overflow-y-auto border-t border-white/[0.04] pt-3 text-xs">
                {BLOCKED_ROADS.map((r, idx) => (
                  <div key={idx} className="p-3 rounded-lg bg-black/40 border border-white/[0.06] space-y-1">
                    <div className="flex justify-between items-center">
                      <div className="font-bold text-white">{r.road}</div>
                      <span className={`px-1.5 py-0.2 rounded text-[9px] font-black uppercase ${
                        r.status === 'BLOCKED' ? 'bg-red-500/20 text-red-400 border border-red-500/30' :
                        r.status === 'RESTRICTED' ? 'bg-amber-500/20 text-amber-300 border border-amber-500/30' :
                        'bg-emerald-500/20 text-emerald-400'
                      }`}>
                        {r.status}
                      </span>
                    </div>
                    <div className="text-[11px] text-slate-400">{r.sector}</div>
                    <div className="text-[10px] text-amber-300/90">{r.cause} ? {r.clearance}</div>
                  </div>
                ))}
              </div>
            )}
          </div>

        </div>

      </div>

    </div>
  );
};
