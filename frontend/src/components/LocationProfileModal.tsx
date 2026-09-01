
import React, { useState } from 'react';
import { 
  X, ShieldAlert, BarChart2, CloudRain, Mountain, History, 
  AlertCircle, Users, CheckCircle2, ChevronRight, FileText, Bell
} from 'lucide-react';
import { RiskZone, RiskEngineModel } from '../types';
import { api } from '../services/api';

interface LocationProfileModalProps {
  zone: RiskZone | null;
  onClose: () => void;
  onCreateAlert: (zone: RiskZone) => void;
}

export const LocationProfileModal: React.FC<LocationProfileModalProps> = ({
  zone,
  onClose,
  onCreateAlert
}) => {
  if (!zone) return null;

  const [selectedModel, setSelectedModel] = useState<RiskEngineModel>(zone.assessment.model_used);
  const [assessment, setAssessment] = useState(zone.assessment);
  const [isRecomputing, setIsRecomputing] = useState(false);

  const handleModelChange = async (model: RiskEngineModel) => {
    setSelectedModel(model);
    setIsRecomputing(true);
    try {
      const updated = await api.evaluateCustomRisk({
        rainfall_24h: zone.assessment.rainfall_24h,
        rainfall_72h: zone.assessment.rainfall_72h,
        slope_angle_deg: zone.assessment.slope_angle_degrees,
        lithology_class: zone.assessment.geotechnical_susceptibility,
        historical_distance_km: 0.4,
        active_cracks_reported: zone.assessment.recent_field_incidents,
        population_density: zone.assessment.population_exposed,
        model: model
      });
      setAssessment(updated);
    } catch (err) {
      console.error(err);
    } finally {
      setIsRecomputing(false);
    }
  };

  const getSeverityBadge = (severity: string) => {
    switch (severity) {
      case 'CRITICAL': return 'bg-red-500/20 text-red-400 border-red-500/40';
      case 'HIGH': return 'bg-orange-500/20 text-orange-400 border-orange-500/40';
      case 'MODERATE': return 'bg-amber-500/20 text-amber-400 border-amber-500/40';
      default: return 'bg-emerald-500/20 text-emerald-400 border-emerald-500/40';
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm overflow-y-auto">
      <div className="bg-gov-card border border-gov-border rounded-xl shadow-2xl w-full max-w-4xl overflow-hidden max-h-[92vh] flex flex-col my-auto">
        
        {/* Header */}
        <div className="px-6 py-4 bg-gov-navy border-b border-gov-border flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="p-2 rounded-lg bg-red-500/20 border border-red-500/30">
              <ShieldAlert className="w-6 h-6 text-red-400" />
            </div>
            <div>
              <div className="flex items-center space-x-2">
                <h3 className="text-lg font-bold text-white">{zone.name}</h3>
                <span className={`px-2.5 py-0.5 rounded text-xs font-bold border ${getSeverityBadge(assessment.severity)}`}>
                  {assessment.severity}
                </span>
              </div>
              <p className="text-xs text-slate-400">
                {zone.district}, {zone.state} | Lat: {zone.coordinates.lat.toFixed(4)}, Lng: {zone.coordinates.lng.toFixed(4)}
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="p-6 overflow-y-auto space-y-6 text-slate-200">
          
          {/* Top Score Summary Banner */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 bg-slate-900/90 p-4 rounded-xl border border-gov-border">
            
            {/* Risk Score */}
            <div className="flex items-center space-x-4 border-b md:border-b-0 md:border-r border-slate-800 pb-3 md:pb-0">
              <div className="w-16 h-16 rounded-full border-4 border-red-500 flex flex-col items-center justify-center bg-red-950/40">
                <span className="text-xl font-black text-white">{assessment.risk_score}</span>
                <span className="text-[9px] text-slate-400 font-bold uppercase">/ 100</span>
              </div>
              <div>
                <div className="text-xs text-slate-400 font-bold uppercase">Prototype Risk Score</div>
                <div className="text-base font-black text-red-400">{assessment.severity}</div>
                <div className="text-[10px] text-slate-400">Confidence: {(assessment.confidence * 100).toFixed(0)}%</div>
              </div>
            </div>

            {/* Environmental Signals */}
            <div className="space-y-1 text-xs border-b md:border-b-0 md:border-r border-slate-800 pb-3 md:pb-0 md:px-3">
              <div className="text-slate-400 font-bold flex items-center space-x-1">
                <CloudRain className="w-3.5 h-3.5 text-blue-400" />
                <span>Hydrological Trigger</span>
              </div>
              <p>24h Rain: <strong className="text-white">{assessment.rainfall_24h} mm</strong></p>
              <p>72h Rain: <strong className="text-white">{assessment.rainfall_72h} mm</strong></p>
              <p>Antecedent Moisture (API): <strong className="text-white">{assessment.antecedent_precipitation_index} mm</strong></p>
            </div>

            {/* Geotechnical Terrain */}
            <div className="space-y-1 text-xs md:px-3">
              <div className="text-slate-400 font-bold flex items-center space-x-1">
                <Mountain className="w-3.5 h-3.5 text-amber-400" />
                <span>Terrain & Susceptibility</span>
              </div>
              <p>Slope Angle: <strong className="text-white">{assessment.slope_angle_degrees}?</strong></p>
              <p className="truncate" title={assessment.geotechnical_susceptibility}>
                Strata: <strong className="text-white">{assessment.geotechnical_susceptibility.split('(')[0]}</strong>
              </p>
              <p>Historic Scarp: <strong className="text-white">{assessment.historical_event_density.split('(')[0]}</strong></p>
            </div>

          </div>

          {/* 3 Model Architecture Choices (Rule: Always use 3 options) */}
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <label className="text-xs font-bold text-slate-300 uppercase tracking-wider flex items-center space-x-1.5">
                <BarChart2 className="w-3.5 h-3.5 text-amber-400" />
                <span>Selectable AI / Risk Assessment Architecture (3 Model Options)</span>
              </label>
              {isRecomputing && <span className="text-xs text-amber-400 animate-pulse">Recomputing factor breakdown...</span>}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
              {[
                {
                  id: 'Physics-Informed Heuristic (API Index)',
                  title: '1. Physics Heuristic (API)',
                  desc: 'Deterministic Antecedent Precipitation Index + infinite slope factor of safety.'
                },
                {
                  id: 'Susceptibility-Trigger Calibrated Matrix',
                  title: '2. Calibrated GSI Matrix',
                  desc: 'Coupled lithology-rainfall matrix with weighted historical scarp multipliers.'
                },
                {
                  id: 'ML Gradient Boosted Risk Estimator (Prototype)',
                  title: '3. ML Gradient Boosted',
                  desc: 'Non-linear tree ensemble trained on regional seasonal inventory patterns.'
                }
              ].map((opt) => (
                <button
                  key={opt.id}
                  onClick={() => handleModelChange(opt.id as RiskEngineModel)}
                  className={`p-3 rounded-lg text-left border transition-all text-xs flex flex-col justify-between ${
                    selectedModel === opt.id
                      ? 'bg-amber-500/15 border-amber-500/60 text-amber-200 ring-1 ring-amber-500/40'
                      : 'bg-slate-900 border-slate-800 text-slate-400 hover:border-slate-700'
                  }`}
                >
                  <span className="font-bold text-white">{opt.title}</span>
                  <span className="text-[11px] text-slate-400 mt-1">{opt.desc}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Explainable AI (XAI) Waterfall Attribution */}
          <div className="space-y-3 bg-slate-900/60 p-4 rounded-xl border border-gov-border">
            <div className="flex items-center justify-between">
              <h4 className="text-sm font-bold text-white flex items-center space-x-2">
                <BarChart2 className="w-4 h-4 text-amber-400" />
                <span>Explainable AI Risk Driver Attribution (XAI Waterfall)</span>
              </h4>
              <span className="text-[10px] text-slate-400">Total Contribution: 100%</span>
            </div>

            <p className="text-xs text-amber-300/90 italic bg-amber-500/10 p-2 rounded border border-amber-500/20">
              "{assessment.summary_explanation}"
            </p>

            <div className="space-y-2.5 pt-2">
              {assessment.top_drivers.map((driver, idx) => (
                <div key={idx} className="space-y-1">
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-medium text-slate-200">
                      {idx + 1}. {driver.name}
                    </span>
                    <span className="text-slate-400">
                      <strong className="text-amber-400">+{driver.score_contribution} pts</strong> ({driver.relative_percentage}%)
                    </span>
                  </div>

                  <div className="w-full h-2.5 rounded-full bg-slate-800 overflow-hidden">
                    <div
                      className="h-full rounded-full transition-all duration-500"
                      style={{
                        width: `${driver.relative_percentage}%`,
                        backgroundColor: idx === 0 ? '#ef4444' : idx === 1 ? '#f97316' : idx === 2 ? '#f59e0b' : '#3b82f6'
                      }}
                    />
                  </div>

                  <div className="text-[11px] text-slate-400 flex items-center justify-between">
                    <span>{driver.description}</span>
                    <span className="text-[10px] text-slate-500 font-mono">[{driver.status}]</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* 3 Mitigation & Response Options (Rule: Always use 3 options) */}
          <div className="space-y-2.5">
            <h4 className="text-xs font-bold text-slate-300 uppercase tracking-wider flex items-center space-x-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
              <span>Recommended Mitigation Options (3 Calibrated Pathways)</span>
            </h4>

            <div className="space-y-2 text-xs">
              {assessment.mitigation_options.map((option, i) => (
                <div key={i} className="p-2.5 rounded-lg bg-slate-900 border border-slate-800 flex items-start space-x-2.5 text-slate-300">
                  <span className="px-1.5 py-0.5 rounded bg-slate-800 text-amber-400 font-bold text-[10px]">
                    Option {i + 1}
                  </span>
                  <span className="flex-1">{option}</span>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Footer Actions */}
        <div className="px-6 py-4 bg-slate-900 border-t border-gov-border flex items-center justify-between">
          <div className="text-[11px] text-slate-400">
            {assessment.model_disclaimer}
          </div>

          <div className="flex items-center space-x-3">
            <button
              onClick={onClose}
              className="px-4 py-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-semibold"
            >
              Close
            </button>

            <button
              onClick={() => {
                onClose();
                onCreateAlert(zone);
              }}
              className="flex items-center space-x-1.5 px-4 py-2 rounded-lg bg-red-600 hover:bg-red-500 text-white text-xs font-bold shadow-lg transition-all"
            >
              <Bell className="w-4 h-4" />
              <span>Draft CAP Alert for {zone.district} ?</span>
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
