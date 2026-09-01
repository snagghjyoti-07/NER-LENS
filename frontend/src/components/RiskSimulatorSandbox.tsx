import React, { useState } from 'react';
import { 
  Sliders, Activity, CloudRain, Mountain, ShieldAlert, 
  BarChart2, RefreshCw, CheckCircle2, AlertTriangle, Layers
} from 'lucide-react';
import { ExplainableRiskAssessment, RiskEngineModel } from '../types';
import { api } from '../services/api';

export const RiskSimulatorSandbox: React.FC = () => {
  const [rainfall24h, setRainfall24h] = useState<number>(195);
  const [rainfall72h, setRainfall72h] = useState<number>(360);
  const [slopeAngle, setSlopeAngle] = useState<number>(38);
  const [lithology, setLithology] = useState<string>('Weathered Siltstone / Shale (Disang Group)');
  const [cracks, setCracks] = useState<number>(2);
  const [population, setPopulation] = useState<number>(2840);
  const [histDistance, setHistDistance] = useState<number>(0.4);
  const [model, setModel] = useState<RiskEngineModel>('Physics-Informed Heuristic (API Index)');

  const [assessment, setAssessment] = useState<ExplainableRiskAssessment | null>(null);
  const [isEvaluating, setIsEvaluating] = useState<boolean>(false);

  const handleEvaluate = async () => {
    setIsEvaluating(true);
    try {
      const res = await api.evaluateCustomRisk({
        rainfall_24h: rainfall24h,
        rainfall_72h: rainfall72h,
        slope_angle_deg: slopeAngle,
        lithology_class: lithology,
        historical_distance_km: histDistance,
        active_cracks_reported: cracks,
        population_density: population,
        model: model
      });
      setAssessment(res);
    } catch (err) {
      console.error(err);
    } finally {
      setIsEvaluating(false);
    }
  };

  React.useEffect(() => {
    handleEvaluate();
  }, [rainfall24h, rainfall72h, slopeAngle, lithology, cracks, population, histDistance, model]);

  return (
    <div className="bg-gov-card border border-gov-border rounded-xl p-5 shadow-2xl space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-gov-border pb-4">
        <div>
          <div className="flex items-center space-x-2">
            <Sliders className="w-5 h-5 text-amber-400" />
            <h3 className="text-base font-bold text-white">Live AI Risk Simulation & Stress-Testing Sandbox</h3>
          </div>
          <p className="text-xs text-slate-400">
            Interactive parameter tuning: Tweak environmental triggers, slope geometry, and field observations to see real-time XAI waterfall attribution.
          </p>
        </div>

        <button
          onClick={handleEvaluate}
          className="flex items-center space-x-1 px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-amber-300 font-bold text-xs border border-slate-700"
        >
          <RefreshCw className={`w-3.5 h-3.5 ${isEvaluating ? 'animate-spin' : ''}`} />
          <span>Recalculate</span>
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        
        {/* Left: Interactive Controls (7 cols) */}
        <div className="lg:col-span-7 space-y-4 text-xs">
          
          {/* 1. Rainfall Sliders */}
          <div className="bg-slate-900/90 p-3.5 rounded-xl border border-slate-800 space-y-3">
            <span className="font-bold text-slate-200 flex items-center space-x-1.5 text-blue-400">
              <CloudRain className="w-4 h-4" />
              <span>Hydrological Triggers</span>
            </span>

            <div className="space-y-1">
              <div className="flex justify-between font-semibold">
                <span className="text-slate-300">24-Hour Precipitation (mm)</span>
                <span className="text-amber-400 font-mono">{rainfall24h} mm</span>
              </div>
              <input
                type="range"
                min="0"
                max="350"
                step="5"
                value={rainfall24h}
                onChange={(e) => setRainfall24h(parseInt(e.target.value))}
                className="w-full accent-amber-500 cursor-pointer"
              />
            </div>

            <div className="space-y-1">
              <div className="flex justify-between font-semibold">
                <span className="text-slate-300">72-Hour Cumulative Precipitation (mm)</span>
                <span className="text-amber-400 font-mono">{rainfall72h} mm</span>
              </div>
              <input
                type="range"
                min="0"
                max="600"
                step="10"
                value={rainfall72h}
                onChange={(e) => setRainfall72h(parseInt(e.target.value))}
                className="w-full accent-blue-500 cursor-pointer"
              />
            </div>
          </div>

          {/* 2. Slope & Geology */}
          <div className="bg-slate-900/90 p-3.5 rounded-xl border border-slate-800 space-y-3">
            <span className="font-bold text-slate-200 flex items-center space-x-1.5 text-amber-400">
              <Mountain className="w-4 h-4" />
              <span>Terrain & Geotechnical Parameters</span>
            </span>

            <div className="space-y-1">
              <div className="flex justify-between font-semibold">
                <span className="text-slate-300">Slope Gradient Angle (?)</span>
                <span className="text-amber-400 font-mono">{slopeAngle}°</span>
              </div>
              <input
                type="range"
                min="5"
                max="55"
                step="1"
                value={slopeAngle}
                onChange={(e) => setSlopeAngle(parseInt(e.target.value))}
                className="w-full accent-amber-500 cursor-pointer"
              />
            </div>

            <div className="space-y-1">
              <label className="text-slate-300 font-semibold block">Geotechnical Lithology Formation</label>
              <select
                value={lithology}
                onChange={(e) => setLithology(e.target.value)}
                className="w-full bg-slate-950 border border-slate-700 rounded p-2 text-white"
              >
                <option value="Weathered Siltstone / Shale (Disang Group)">Weathered Siltstone / Shale (Disang Group - Nagaland/Meghalaya)</option>
                <option value="Unconsolidated Fluvial Terraces & Scree">Unconsolidated Fluvial Terraces & Scree (Sikkim/Teesta)</option>
                <option value="Tertiary Sandstone with Clay Interbeds">Tertiary Sandstone with Clay Interbeds (Dima Hasao/Assam)</option>
                <option value="Fractured Gneiss / Quartzite (Shillong Plateau)">Fractured Gneiss / Quartzite (Shillong Plateau)</option>
                <option value="Massive Granite / Basalt">Massive Competent Granite / Basalt</option>
              </select>
            </div>
          </div>

          {/* 3. Field Cracks & Distance */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 bg-slate-900/90 p-3.5 rounded-xl border border-slate-800">
            <div className="space-y-1">
              <div className="flex justify-between font-semibold">
                <span className="text-slate-300">Active Tension Cracks</span>
                <span className="text-red-400 font-bold">{cracks} verified</span>
              </div>
              <input
                type="range"
                min="0"
                max="5"
                step="1"
                value={cracks}
                onChange={(e) => setCracks(parseInt(e.target.value))}
                className="w-full accent-red-500 cursor-pointer"
              />
            </div>

            <div className="space-y-1">
              <div className="flex justify-between font-semibold">
                <span className="text-slate-300">Nearest Historic Scarp (km)</span>
                <span className="text-amber-400 font-mono">{histDistance} km</span>
              </div>
              <input
                type="range"
                min="0.1"
                max="5.0"
                step="0.1"
                value={histDistance}
                onChange={(e) => setHistDistance(parseFloat(e.target.value))}
                className="w-full accent-amber-500 cursor-pointer"
              />
            </div>
          </div>

          {/* Model Architecture Selector */}
          <div className="space-y-1.5">
            <label className="text-slate-300 font-bold block uppercase text-[10px] text-slate-400">
              Evaluator Model Architecture:
            </label>
            <div className="grid grid-cols-3 gap-2">
              {[
                { id: 'Physics-Informed Heuristic (API Index)', label: 'Physics Heuristic' },
                { id: 'Susceptibility-Trigger Calibrated Matrix', label: 'GSI Matrix' },
                { id: 'ML Gradient Boosted Risk Estimator (Prototype)', label: 'ML Ensemble' }
              ].map((m) => (
                <button
                  key={m.id}
                  onClick={() => setModel(m.id as RiskEngineModel)}
                  className={`p-2 rounded text-center font-bold text-[11px] border transition-all ${
                    model === m.id
                      ? 'bg-amber-500/20 text-amber-300 border-amber-500'
                      : 'bg-slate-900 border-slate-800 text-slate-400'
                  }`}
                >
                  {m.label}
                </button>
              ))}
            </div>
          </div>

        </div>

        {/* Right: Real-Time Evaluated XAI Outcome (5 cols) */}
        <div className="lg:col-span-5 bg-slate-900/95 border border-gov-border rounded-xl p-4 shadow-xl flex flex-col justify-between space-y-4">
          
          <div className="space-y-3">
            <div className="flex items-center justify-between border-b border-slate-800 pb-2">
              <span className="text-xs font-bold text-slate-300 uppercase">Simulated Assessment</span>
              <span className={`px-2 py-0.5 rounded text-xs font-bold ${
                assessment?.severity === 'CRITICAL' ? 'bg-red-500/20 text-red-400' :
                assessment?.severity === 'HIGH' ? 'bg-orange-500/20 text-orange-400' :
                'bg-amber-500/20 text-amber-400'
              }`}>
                {assessment?.severity || 'EVALUATING'}
              </span>
            </div>

            {/* Score Display */}
            <div className="flex items-center space-x-4 bg-slate-950 p-3.5 rounded-xl border border-slate-800">
              <div className="w-16 h-16 rounded-full border-4 border-amber-500 flex flex-col items-center justify-center bg-amber-950/40">
                <span className="text-2xl font-black text-white">{assessment?.risk_score || '--'}</span>
                <span className="text-[8px] text-slate-400 font-bold uppercase">/ 100</span>
              </div>
              <div className="text-xs space-y-0.5">
                <div className="font-bold text-white">Dynamic Composite Risk</div>
                <div className="text-amber-300 text-[11px]">API Moisture: {assessment?.antecedent_precipitation_index || 0} mm</div>
                <div className="text-slate-400 text-[10px]">Confidence: {((assessment?.confidence || 0.85) * 100).toFixed(0)}%</div>
              </div>
            </div>

            {/* XAI Waterfall Driver Attribution */}
            {assessment && (
              <div className="space-y-2 pt-1">
                <span className="text-[11px] font-bold text-slate-400 uppercase">Live Factor Waterfall:</span>
                <div className="space-y-2">
                  {assessment.top_drivers.map((d, idx) => (
                    <div key={idx} className="space-y-0.5 text-[11px]">
                      <div className="flex justify-between">
                        <span className="text-slate-300 font-medium truncate max-w-[170px]">{d.name}</span>
                        <span className="font-mono text-amber-400">+{d.score_contribution} pts</span>
                      </div>
                      <div className="w-full h-1.5 rounded-full bg-slate-800 overflow-hidden">
                        <div
                          className="h-full rounded-full"
                          style={{
                            width: `${d.relative_percentage}%`,
                            backgroundColor: idx === 0 ? '#ef4444' : idx === 1 ? '#f97316' : '#f59e0b'
                          }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Action Recommendation */}
          <div className="bg-slate-950/80 p-3 rounded-lg border border-slate-800 text-xs text-amber-200">
            <strong>Recommended Action:</strong>
            <p className="text-[11px] text-slate-300 mt-1">
              {assessment?.recommended_action}
            </p>
          </div>

        </div>

      </div>
    </div>
  );
};
