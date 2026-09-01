import React from 'react';
import { 
  Mountain, Activity, ShieldAlert, CloudRain, 
  MapPin, Car, LifeBuoy, AlertTriangle, ArrowLeft,
  CheckCircle2, Radio, Sliders, ExternalLink
} from 'lucide-react';
import { useApp } from '../context/AppContext';

export const LocationPage: React.FC = () => {
  const { locations, selectedLocationId, setSelectedLocationId, setActiveTab, triggerEmergency, t } = useApp();

  const loc = locations.find(l => l.id === selectedLocationId) || locations[0];

  if (!loc) {
    return <div className="p-8 text-center text-slate-400">Loading slope profile...</div>;
  }

  return (
    <div className="space-y-5">
      
      {/* Header */}
      <div className="bg-[#12151b] border border-white/[0.08] rounded-xl p-5 shadow-xl flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div>
          <button
            onClick={() => setActiveTab('dashboard')}
            className="flex items-center space-x-1 text-xs text-emerald-400 hover:text-emerald-300 font-bold mb-2"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>← Back to Command Center</span>
          </button>
          
          <div className="flex items-center space-x-3">
            <h1 className="text-2xl font-black text-white">{loc.name}</h1>
            <span className={`px-2.5 py-0.5 rounded-full text-xs font-black uppercase ${
              loc.risk_level === 'CRITICAL' ? 'bg-red-500/20 text-red-400 border border-red-500/30' :
              loc.risk_level === 'HIGH' ? 'bg-amber-500/20 text-amber-300 border border-amber-500/30' :
              'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30'
            }`}>
              {loc.risk_level} ({loc.risk_score}/100)
            </span>
          </div>

          <div className="text-xs text-slate-300 mt-1 flex flex-wrap items-center gap-2">
            <span>District: <strong>{loc.district}</strong></span>
            <span>?</span>
            <span>State: <strong>{loc.state}</strong></span>
            <span>?</span>
            <span className="font-mono">Lat: {loc.coordinates.lat}, Lng: {loc.coordinates.lng}</span>
          </div>
        </div>

        <div className="flex items-center space-x-2 shrink-0">
          <button
            onClick={() => triggerEmergency(`Critical Slope Failure Alert: ${loc.name}`, `${loc.district}, ${loc.state}`)}
            className="px-3.5 py-2 rounded-lg bg-red-600 hover:bg-red-500 text-white font-bold text-xs shadow-lg shadow-red-600/30 transition-all"
          >
            Issue Local Evacuation Order
          </button>
          
          <button
            onClick={() => setActiveTab('evacuation')}
            className="px-3.5 py-2 rounded-lg bg-white/[0.05] hover:bg-white/[0.08] text-emerald-400 font-bold text-xs border border-white/[0.08]"
          >
            View Safe Shelters
          </button>
        </div>
      </div>

      {/* Geotechnical Parameters Matrix */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
        <div className="bg-[#12151b] border border-white/[0.08] p-3.5 rounded-xl space-y-1">
          <div className="text-[10px] text-slate-400 font-bold uppercase">{t('slopeGradient') || 'Slope Gradient'}</div>
          <div className="text-xl font-black text-white font-mono">{loc.slope_deg}°</div>
          <div className="text-[10px] text-amber-400 font-medium">Critical Failure Window</div>
        </div>

        <div className="bg-[#12151b] border border-white/[0.08] p-3.5 rounded-xl space-y-1">
          <div className="text-[10px] text-slate-400 font-bold uppercase">{t('factorOfSafety') || 'Factor of Safety (FoS)'}</div>
          <div className={`text-xl font-black font-mono ${loc.factor_of_safety < 1.15 ? 'text-red-400' : 'text-emerald-400'}`}>
            {loc.factor_of_safety}
          </div>
          <div className="text-[10px] text-slate-400 font-medium">{loc.factor_of_safety < 1.15 ? 'Unstable (FoS < 1.15)' : 'Marginal (FoS > 1.2)'}</div>
        </div>

        <div className="bg-[#12151b] border border-white/[0.08] p-3.5 rounded-xl space-y-1">
          <div className="text-[10px] text-slate-400 font-bold uppercase">{t('rainfall24h') || '24h Rainfall'}</div>
          <div className="text-xl font-black text-amber-400 font-mono">{loc.rainfall_24h_mm} mm</div>
          <div className="text-[10px] text-slate-400 font-medium">72h: {loc.rainfall_72h_mm} mm</div>
        </div>

        <div className="bg-[#12151b] border border-white/[0.08] p-3.5 rounded-xl space-y-1">
          <div className="text-[10px] text-slate-400 font-bold uppercase">{t('soilMoisture') || 'Soil Moisture'}</div>
          <div className="text-xl font-black text-blue-400 font-mono">{loc.soil_moisture_percent}%</div>
          <div className="text-[10px] text-blue-300 font-medium">High Saturation</div>
        </div>

        <div className="bg-[#12151b] border border-white/[0.08] p-3.5 rounded-xl space-y-1">
          <div className="text-[10px] text-slate-400 font-bold uppercase">{t('porePressure') || 'Pore Water Pressure'}</div>
          <div className="text-xl font-black text-orange-400 font-mono">{loc.pore_pressure_kpa} kPa</div>
          <div className="text-[10px] text-slate-400 font-medium">Hydrostatic Surge</div>
        </div>

        <div className="bg-[#12151b] border border-white/[0.08] p-3.5 rounded-xl space-y-1">
          <div className="text-[10px] text-slate-400 font-bold uppercase">{t('displacementRate') || 'Ground Displacement'}</div>
          <div className="text-xl font-black text-red-400 font-mono">{loc.ground_movement_mm_day} mm/d</div>
          <div className="text-[10px] text-red-400 font-medium">Active Creep</div>
        </div>
      </div>

      {/* Subsurface Lithology & In-Situ Sensors */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
        <div className="lg:col-span-7 bg-[#12151b] border border-white/[0.08] rounded-xl p-5 shadow-xl space-y-3">
          <div className="flex items-center space-x-2 border-b border-white/[0.06] pb-2.5">
            <Mountain className="w-4 h-4 text-emerald-400" />
            <h3 className="text-xs font-bold text-white uppercase tracking-wider">
              Geotechnical Subsurface Characterization
            </h3>
          </div>

          <div className="space-y-2.5 text-xs">
            <div className="bg-black/40 p-3.5 rounded-lg border border-white/[0.06] space-y-1">
              <span className="text-slate-400 font-bold uppercase text-[10px]">Geological Formation / Lithology</span>
              <div className="text-sm font-bold text-white">{loc.lithology}</div>
              <p className="text-[11px] text-slate-300 mt-1">{loc.description}</p>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div className="bg-black/40 p-3 rounded-lg border border-white/[0.06] space-y-1">
                <span className="text-slate-400 font-bold uppercase text-[10px]">Lifeline Highway Corridor</span>
                <div className="text-xs font-bold text-white">{loc.primary_road}</div>
                <span className={`px-1.5 py-0.2 rounded text-[9px] font-black inline-block ${
                  loc.road_status === 'BLOCKED' ? 'bg-red-500/20 text-red-400' :
                  loc.road_status === 'SLOW' ? 'bg-amber-500/20 text-amber-300' : 'bg-emerald-500/20 text-emerald-400'
                }`}>
                  Status: {loc.road_status}
                </span>
              </div>

              <div className="bg-black/40 p-3 rounded-lg border border-white/[0.06] space-y-1">
                <span className="text-slate-400 font-bold uppercase text-[10px]">Nearest Emergency Shelter</span>
                <div className="text-xs font-bold text-white">{loc.nearest_shelter}</div>
                <span className="text-[10px] text-amber-300 font-mono">Distance: {loc.shelter_distance_km} km</span>
              </div>
            </div>
          </div>
        </div>

        <div className="lg:col-span-5 bg-[#12151b] border border-white/[0.08] rounded-xl p-5 shadow-xl space-y-3">
          <div className="flex items-center justify-between border-b border-white/[0.06] pb-2.5">
            <div className="flex items-center space-x-2">
              <Radio className="w-4 h-4 text-emerald-400" />
              <h3 className="text-xs font-bold text-white uppercase tracking-wider">
                Active In-Situ Sensors ({loc.active_sensors_count})
              </h3>
            </div>
            <span className="text-[10px] text-emerald-400 font-mono">LIVE TELEMETRY</span>
          </div>

          <div className="space-y-2 max-h-[300px] overflow-y-auto pr-1">
            {[
              { type: 'In-Place Inclinometer', id: 'INC-01', val: `${loc.ground_movement_mm_day} mm/day`, depth: '18m', status: 'CRITICAL' },
              { type: 'Piezometer Transducer', id: 'PZ-01', val: `${loc.pore_pressure_kpa} kPa`, depth: '24m', status: 'HIGH' },
              { type: 'Tipping Bucket Rain Gauge', id: 'RG-01', val: `${loc.rainfall_24h_mm} mm/24h`, depth: '0m', status: 'CRITICAL' },
              { type: 'Optical Crackmeter', id: 'CRK-01', val: '14.5 mm width', depth: 'Surface', status: 'HIGH' }
            ].map((s, idx) => (
              <div key={idx} className="p-2.5 rounded-lg bg-black/40 border border-white/[0.06] flex items-center justify-between">
                <div>
                  <div className="text-xs font-bold text-white">{s.type} ({s.id})</div>
                  <div className="text-[10px] text-slate-400">Depth: {s.depth}</div>
                </div>

                <div className="text-right">
                  <div className="text-xs font-black font-mono text-amber-400">{s.val}</div>
                  <span className={`px-1.5 py-0.2 rounded text-[9px] font-bold ${
                    s.status === 'CRITICAL' ? 'bg-red-500/20 text-red-400' : 'bg-amber-500/20 text-amber-300'
                  }`}>
                    {s.status}
                  </span>
                </div>
              </div>
            ))}
          </div>

          <button
            onClick={() => setActiveTab('sensors')}
            className="w-full py-2 rounded-lg bg-white/[0.04] hover:bg-white/[0.08] text-slate-300 font-bold text-xs border border-white/[0.08]"
          >
            View Complete Sensor Stream →
          </button>
        </div>
      </div>

    </div>
  );
};
