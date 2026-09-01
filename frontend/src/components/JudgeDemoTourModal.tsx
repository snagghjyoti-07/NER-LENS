
import React, { useState } from 'react';
import { 
  X, Award, ChevronRight, ChevronLeft, CheckCircle2, Play, 
  ShieldAlert, Map, AlertTriangle, Bell, WifiOff, Users, ArrowRight
} from 'lucide-react';
import { useScenario } from '../context/ScenarioContext';

interface JudgeDemoTourModalProps {
  onClose: () => void;
  onNavigateTab: (tab: string) => void;
}

interface StepMeta {
  stepNumber: number;
  title: string;
  roleContext: string;
  description: string;
  targetTab: string;
  actionHint: string;
  keyPoint: string;
}

const DEMO_STEPS: StepMeta[] = [
  {
    stepNumber: 1,
    title: "Executive Command Center & Regional Risk",
    roleContext: "State Disaster Management Authority (SDMA)",
    description: "NER-LENS ingests continuous precipitation from IMD and terrain susceptibility from GSI/NRSC across all 8 Northeast states.",
    targetTab: "overview",
    actionHint: "Inspect the top KPI cards: Regional Risk Score (78/100 HIGH), Active Alerts, and Road Blockages.",
    keyPoint: "Upstream intelligence layer integrating environmental triggers with historical precedent."
  },
  {
    stepNumber: 2,
    title: "Interactive Northeast GIS Intelligence Map",
    roleContext: "District Disaster Officer (DDMA)",
    description: "Explore the live GIS canvas with 8 toggleable geospatial layers (Risk zones, Lifeline roads, Vulnerable villages, Field incidents, CAP polygons).",
    targetTab: "risk_map",
    actionHint: "Click on a red pulsing Critical Risk Zone (e.g. Sohra-Mawsmai Escarpment or NH-10 Setijhora).",
    keyPoint: "Map is grounded in actual Northeast geography with precise NH-29, NH-10, and NH-27 corridors."
  },
  {
    stepNumber: 3,
    title: "Explainable AI (XAI) Factor Attribution Waterfall",
    roleContext: "Geotechnical Specialist / EOC",
    description: "Eliminates black-box opacity by showing why the score is 84/100 (Rainfall +36, Slope Geometry +28, Historical Scarp +18, Tension Cracks +14).",
    targetTab: "risk_map",
    actionHint: "Toggle between 3 AI Risk Model Architectures (Physics API, Calibrated Matrix, ML Ensemble).",
    keyPoint: "Every risk score is transparently explained with 3 calibrated mitigation response options."
  },
  {
    stepNumber: 4,
    title: "Lifeline Road Connectivity & Village Vulnerability",
    roleContext: "Traffic Control & PWD Quick-Response",
    description: "Monitors critical arterial highways (NH-10 Siliguri-Gangtok, NH-29 Dimapur-Kohima) and identifies isolated villages with distance to shelters.",
    targetTab: "overview",
    actionHint: "View Road Connectivity table showing BLOCKED and SLOW status with calculated detour routes.",
    keyPoint: "Directly solves the problem statement's requirement for vulnerable road corridor management."
  },
  {
    stepNumber: 5,
    title: "Geo-Tagged Field Incident & Offline PWA Queuing",
    roleContext: "Field Patrol Officer (PWD / GREF)",
    description: "Field officers capture slope cracks and debris slides with GPS coordinates and photographic evidence, even in zero-connectivity remote valleys.",
    targetTab: "incidents",
    actionHint: "Click 'Offline Mode' in the navbar, report an incident, and observe it queuing in IndexedDB for auto-sync.",
    keyPoint: "True PWA offline-first resilience for remote Himalayan field operations."
  },
  {
    stepNumber: 6,
    title: "CAP v1.2 Early Warning & National Cell Broadcast",
    roleContext: "District Magistrate / SDMA Director",
    description: "Authorizes and issues standardized OASIS CAP v1.2 alerts formatted for NDMA SACHET and the May 2026 National Cell Broadcast System.",
    targetTab: "alerts",
    actionHint: "Open the Alert Creation Wizard, preview standard CAP XML, and simulate Cell Broadcast transmission.",
    keyPoint: "Strictly adheres to national dissemination standards without fabricating fake direct ties."
  },
  {
    stepNumber: 7,
    title: "Multilingual Community Safety View",
    roleContext: "Local Citizen / Village Headman",
    description: "A lightweight, low-bandwidth public portal providing localized risk levels, emergency contacts, nearest relief shelters, and advice in 7 NE languages.",
    targetTab: "community",
    actionHint: "Switch languages to Assamese, Bengali, Khasi, or Mizo from the top navigation.",
    keyPoint: "Citizen-centric, inclusive, and accessible disaster communication."
  },
  {
    stepNumber: 8,
    title: "Audit Log & Transparent Data Pipeline Health",
    roleContext: "System Administrator & Evaluator",
    description: "Transparent data ingestion status (IMD, GSI, NRSC, NESAC) and tamper-evident audit logs tracking every warning issued.",
    targetTab: "datasources",
    actionHint: "Inspect the end-to-end data pipeline diagram and review the immutable action log.",
    keyPoint: "Honest positioning as an upstream decision-support system built for production scaling."
  }
];

export const JudgeDemoTourModal: React.FC<JudgeDemoTourModalProps> = ({
  onClose,
  onNavigateTab
}) => {
  const [currentStepIdx, setCurrentStepIdx] = useState<number>(0);
  const step = DEMO_STEPS[currentStepIdx];

  const handleNext = () => {
    if (currentStepIdx < DEMO_STEPS.length - 1) {
      const nextIdx = currentStepIdx + 1;
      setCurrentStepIdx(nextIdx);
      onNavigateTab(DEMO_STEPS[nextIdx].targetTab);
    }
  };

  const handlePrev = () => {
    if (currentStepIdx > 0) {
      const prevIdx = currentStepIdx - 1;
      setCurrentStepIdx(prevIdx);
      onNavigateTab(DEMO_STEPS[prevIdx].targetTab);
    }
  };

  const handleJump = (idx: number) => {
    setCurrentStepIdx(idx);
    onNavigateTab(DEMO_STEPS[idx].targetTab);
  };

  return (
    <div className="fixed inset-x-0 bottom-4 z-[9999] flex justify-center px-4 pointer-events-none">
      <div className="bg-gov-card/95 backdrop-blur-md border-2 border-amber-500/80 rounded-2xl shadow-2xl p-5 w-full max-w-3xl pointer-events-auto text-slate-200">
        
        {/* Top Header */}
        <div className="flex items-center justify-between pb-3 border-b border-slate-700">
          <div className="flex items-center space-x-2.5">
            <div className="p-1.5 rounded-lg bg-amber-500 text-slate-950 font-black flex items-center justify-center">
              <Award className="w-5 h-5" />
            </div>
            <div>
              <span className="text-[10px] font-bold text-amber-400 uppercase tracking-wider">
                SIH 2026 Judge Guided Walkthrough ({currentStepIdx + 1}/{DEMO_STEPS.length})
              </span>
              <h3 className="text-sm font-bold text-white">{step.title}</h3>
            </div>
          </div>

          <div className="flex items-center space-x-2">
            <span className="px-2 py-0.5 rounded bg-slate-800 text-[10px] font-bold text-slate-300 border border-slate-700">
              {step.roleContext}
            </span>
            <button
              onClick={onClose}
              className="p-1 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Step Body */}
        <div className="py-3 space-y-2 text-xs">
          <p className="text-slate-300">{step.description}</p>
          
          <div className="bg-amber-500/10 border border-amber-500/30 p-2.5 rounded-lg flex items-start space-x-2 text-amber-200">
            <ArrowRight className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
            <div>
              <strong>Action for Judges:</strong> {step.actionHint}
            </div>
          </div>

          <div className="text-[11px] text-slate-400">
            <strong>Key Innovation:</strong> {step.keyPoint}
          </div>
        </div>

        {/* Step Progress Indicators & Controls */}
        <div className="flex items-center justify-between pt-3 border-t border-slate-700">
          <div className="flex space-x-1">
            {DEMO_STEPS.map((s, idx) => (
              <button
                key={s.stepNumber}
                onClick={() => handleJump(idx)}
                className={`w-6 h-2 rounded-full transition-all ${
                  idx === currentStepIdx
                    ? 'bg-amber-500 w-8'
                    : idx < currentStepIdx
                    ? 'bg-emerald-500'
                    : 'bg-slate-700'
                }`}
                title={s.title}
              />
            ))}
          </div>

          <div className="flex items-center space-x-2">
            <button
              onClick={handlePrev}
              disabled={currentStepIdx === 0}
              className="px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-semibold disabled:opacity-40"
            >
              ← Previous
            </button>

            {currentStepIdx < DEMO_STEPS.length - 1 ? (
              <button
                onClick={handleNext}
                className="flex items-center space-x-1 px-4 py-1.5 rounded-lg bg-amber-500 hover:bg-amber-400 text-slate-950 text-xs font-bold shadow transition-all"
              >
                <span>Next Step</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </button>
            ) : (
              <button
                onClick={onClose}
                className="px-4 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold shadow"
              >
                ? Complete Tour
              </button>
            )}
          </div>
        </div>

      </div>
    </div>
  );
};
