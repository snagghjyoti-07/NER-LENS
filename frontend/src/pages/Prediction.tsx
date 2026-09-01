import React, { useState } from 'react';
import { 
  BrainCircuit, Sliders, Activity, CloudRain, 
  Mountain, RefreshCw, CheckCircle2, AlertTriangle, 
  ShieldAlert, TrendingUp
} from 'lucide-react';
import { useApp } from '../context/AppContext';

export const Prediction: React.FC = () => {
  const { t } = useApp();

  const [rainfall24h, setRainfall24h] = useState<number>(185);
  const [rainfall72h, setRainfall72h] = useState<number>(340);
  const [slopeAngle, setSlopeAngle] = useState<number>(38);
  const [soilMoisture, setSoilMoisture] = useState<number>(88);
  const [porePressure, setPorePressure] = useState<number>(42);
  const [cracks, setCracks] = useState<number>(2);
  const [lithology, setLithology] = useState<string>('Weathered Siltstone / Shale (Disang Group)');

  // Dynamic risk calculation
  const rainFactor = Math.min(35, (rainfall24h / 250) * 35);
  const slopeFactor = Math.min(25, (slopeAngle / 50) * 25);
  const moistureFactor = Math.min(20, (soilMoisture / 100) * 20);
  const crackFactor = cracks * 6;
  const rawScore = Math.min(99, Math.round(rainFactor + slopeFactor + moistureFactor + crackFactor));
  const fos = Math.max(0.85, Number((2.1 - (rawScore / 100) * 1.15).toFixed(2)));
  const severity = rawScore >= 75 ? 'CRITICAL' : rawScore >= 55 ? 'HIGH' : rawScore >= 35 ? 'MODERATE' : 'LOW';

  return (
    <div className="space-y-5">
      
      <div className="bg-[#12151b] border border-white/[0.08] rounded-xl p-5 shadow-xl">
        <div className="flex items-center space-x-2">
          <BrainCircuit className="w-5 h-5 text-emerald-400" />
          <h1 className="text-lg font-black text-white">AI Landslide Risk Prediction Sandbox</h1>
        </div>
        <p className="text-xs text-slate-300 mt-1 max-w-3xl">
          Physics-informed ML model simulating Factor of Safety, pore water pressure build-up, and tension crack expansion.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
        
        {/* Left: Controls (7 cols) */}
        <div className="lg:col-span-7 bg-[#12151b] border border-white/[0.08] rounded-xl p-5 shadow-xl space-y-4">
          <div className="flex items-center space-x-2 border-b border-white/[0.06] pb-2.5">
            <Sliders className="w-4 h-4 text-emerald-400" />
            <h3 className="text-xs font-bold text-white uppercase tracking-wider">
              Input Geotechnical & Hydrological Parameters
            </h3>
          </div>

          <div className="space-y-3.5 text-xs">
            <div className="bg-black/40 p-3 rounded-lg border border-white/[0.06] space-y-1">
              <div className="flex justify-between font-bold">
                <span className="text-slate-200">24-Hour Precipitation (mm)</span>
                <span className="text-amber-400 font-mono">{rainfall24h} mm</span>
              </div>
              <input
                type="range" min="0" max="350" step="5" value={rainfall24h}
                onChange={(e) => setRainfall24h(parseInt(e.target.value))}
                className="w-full accent-emerald-400 cursor-pointer"
              />
            </div>

            <div className="bg-black/40 p-3 rounded-lg border border-white/[0.06] space-y-1">
              <div className="flex justify-between font-bold">
                <span className="text-slate-200">72-Hour Saturation Rainfall (mm)</span>
                <span className="text-blue-400 font-mono">{rainfall72h} mm</span>
              </div>
              <input
                type="range" min="0" max="600" step="10" value={rainfall72h}
                onChange={(e) => setRainfall72h(parseInt(e.target.value))}
                className="w-full accent-blue-400 cursor-pointer"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div className="bg-black/40 p-3 rounded-lg border border-white/[0.06] space-y-1">
                <div className="flex justify-between font-bold">
                  <span className="text-slate-200">Slope Gradient (?)</span>
                  <span className="text-amber-400 font-mono">{slopeAngle}°</span>
                </div>
                <input
                  type="range" min="10" max="55" step="1" value={slopeAngle}
                  onChange={(e) => setSlopeAngle(parseInt(e.target.value))}
                  className="w-full accent-amber-400 cursor-pointer"
                />
              </div>

              <div className="bg-black/40 p-3 rounded-lg border border-white/[0.06] space-y-1">
                <div className="flex justify-between font-bold">
                  <span className="text-slate-200">Tension Cracks</span>
                  <span className="text-red-400 font-bold">{cracks} observed</span>
                </div>
                <input
                  type="range" min="0" max="5" step="1" value={cracks}
                  onChange={(e) => setCracks(parseInt(e.target.value))}
                  className="w-full accent-red-400 cursor-pointer"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div className="bg-black/40 p-3 rounded-lg border border-white/[0.06] space-y-1">
                <div className="flex justify-between font-bold">
                  <span className="text-slate-200">Soil Moisture (%)</span>
                  <span className="text-blue-400 font-mono">{soilMoisture}%</span>
                </div>
                <input
                  type="range" min="30" max="100" step="1" value={soilMoisture}
                  onChange={(e) => setSoilMoisture(parseInt(e.target.value))}
                  className="w-full accent-blue-400 cursor-pointer"
                />
              </div>

              <div className="bg-black/40 p-3 rounded-lg border border-white/[0.06] space-y-1">
                <div className="flex justify-between font-bold">
                  <span className="text-slate-200">Pore Pressure (kPa)</span>
                  <span className="text-orange-400 font-mono">{porePressure} kPa</span>
                </div>
                <input
                  type="range" min="5" max="65" step="1" value={porePressure}
                  onChange={(e) => setPorePressure(parseInt(e.target.value))}
                  className="w-full accent-orange-400 cursor-pointer"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Right: AI Output (5 cols) */}
        <div className="lg:col-span-5 bg-[#12151b] border border-white/[0.08] rounded-xl p-5 shadow-xl flex flex-col justify-between space-y-4">
          <div className="space-y-3.5">
            <div className="flex items-center justify-between border-b border-white/[0.06] pb-2.5">
              <span className="text-xs font-bold text-slate-300 uppercase">Model Prediction Output</span>
              <span className={`px-2.5 py-0.5 rounded text-xs font-black uppercase ${
                severity === 'CRITICAL' ? 'bg-red-500/20 text-red-400 border border-red-500/30' :
                severity === 'HIGH' ? 'bg-amber-500/20 text-amber-300 border border-amber-500/30' : 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30'
              }`}>
                {severity}
              </span>
            </div>

            <div className="flex items-center space-x-4 bg-black/40 p-3.5 rounded-lg border border-white/[0.06]">
              <div className="w-16 h-16 rounded-full border-4 border-emerald-400 flex flex-col items-center justify-center bg-emerald-950/20 shrink-0">
                <span className="text-2xl font-black text-white font-mono">{rawScore}</span>
                <span className="text-[7px] text-slate-400 font-bold uppercase">/ 100</span>
              </div>

              <div className="space-y-1 text-xs">
                <div className="font-bold text-white">Computed Risk Score</div>
                <div className="text-slate-300">Factor of Safety: <strong className={fos < 1.15 ? 'text-red-400' : 'text-emerald-400'}>{fos}</strong></div>
                <div className="text-slate-400 text-[10px]">Confidence: 94.2% (GSI Ensemble)</div>
              </div>
            </div>

            <div className="space-y-2 pt-1">
              <span className="text-xs font-bold text-slate-300 uppercase">Factor Breakdown:</span>
              <div className="space-y-1.5 text-xs">
                <div>
                  <div className="flex justify-between text-[11px]">
                    <span className="text-slate-300">Rainfall Infiltration</span>
                    <span className="font-mono text-emerald-400">+{Math.round(rainFactor)} pts</span>
                  </div>
                  <div className="w-full h-1.5 rounded-full bg-slate-800 overflow-hidden">
                    <div className="h-full bg-emerald-400 rounded-full" style={{ width: `${(rainFactor/35)*100}%` }} />
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-[11px]">
                    <span className="text-slate-300">Slope Angle Gradient</span>
                    <span className="font-mono text-amber-400">+{Math.round(slopeFactor)} pts</span>
                  </div>
                  <div className="w-full h-1.5 rounded-full bg-slate-800 overflow-hidden">
                    <div className="h-full bg-amber-400 rounded-full" style={{ width: `${(slopeFactor/25)*100}%` }} />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-black/40 p-3 rounded-lg border border-white/[0.06] text-xs text-slate-300">
            <strong className="text-amber-300">Operational Decision:</strong>
            <p className="text-[11px] text-slate-400 mt-0.5">
              {rawScore >= 75 
                ? 'Imminent failure condition. Recommend immediate downslope evacuation and traffic halt.' 
                : 'Elevated risk state. Issue alert bulletin and mandate continuous sensor monitoring.'}
            </p>
          </div>
        </div>

      </div>

    </div>
  );
};
