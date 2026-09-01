import React, { useState } from 'react';
import { 
  ShieldAlert, Phone, AlertTriangle, ShieldCheck, 
  MapPin, Radio, HeartHandshake, FileText, ChevronRight 
} from 'lucide-react';
import { VulnerableVillage } from '../types';
import { useLanguage } from '../context/LanguageContext';

export const CommunityPage: React.FC<{ villages: VulnerableVillage[] }> = ({ villages }) => {
  const { t } = useLanguage();
  const [selectedVillage, setSelectedVillage] = useState<string>(villages[0]?.id || '');

  const activeVillage = villages.find(v => v.id === selectedVillage) || villages[0];

  const emergencyContacts = [
    { name: 'National Emergency Helpline', number: '112', type: 'All Services (Police / Fire / Medical)' },
    { name: 'NDMA Disaster Control Room', number: '1070', type: 'National State Toll-Free' },
    { name: 'District Disaster Emergency Ops (DDMA)', number: '1077', type: 'District Command Center' },
    { name: 'Border Roads Organisation (BRO / GREF)', number: '+91 364 2537000', type: 'Highway Clearances & Detours' },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 space-y-6">
      
      {/* Header */}
      <div className="bg-gov-card border border-gov-border rounded-xl p-5 shadow-xl space-y-2">
        <div className="flex items-center space-x-2">
          <HeartHandshake className="w-6 h-6 text-amber-400" />
          <h2 className="text-xl font-black text-white">
            {t('community.title', 'Public Community Safety & Citizen Guidance')}
          </h2>
        </div>
        <p className="text-xs text-slate-300 max-w-3xl">
          {t('community.subtitle', 'Clear, accessible emergency directives for citizen safety across Northeast hill communities.')}
        </p>
      </div>

      {/* Immediate Directives Banner */}
      <div className="bg-amber-500/10 border-2 border-amber-500/40 rounded-xl p-5 shadow-xl space-y-4">
        <div className="flex items-center space-x-2">
          <AlertTriangle className="w-5 h-5 text-amber-400" />
          <h3 className="text-base font-bold text-amber-300">
            {t('community.whatToDo', 'Immediate Safety Guidelines for Hill Residents')}
          </h3>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
          <div className="bg-slate-900/90 p-3 rounded-lg border border-slate-800 flex items-start space-x-2.5">
            <span className="w-5 h-5 rounded-full bg-amber-500/20 text-amber-400 font-bold flex items-center justify-center shrink-0">1</span>
            <span className="text-slate-200">{t('community.rule1', 'Stay away from steep exposed hillside slopes and active streams.')}</span>
          </div>

          <div className="bg-slate-900/90 p-3 rounded-lg border border-slate-800 flex items-start space-x-2.5">
            <span className="w-5 h-5 rounded-full bg-amber-500/20 text-amber-400 font-bold flex items-center justify-center shrink-0">2</span>
            <span className="text-slate-200">{t('community.rule2', 'Avoid non-essential travel along ghat corridors and cliffside roads.')}</span>
          </div>

          <div className="bg-slate-900/90 p-3 rounded-lg border border-slate-800 flex items-start space-x-2.5">
            <span className="w-5 h-5 rounded-full bg-amber-500/20 text-amber-400 font-bold flex items-center justify-center shrink-0">3</span>
            <span className="text-slate-200">{t('community.rule3', 'Immediately report widening ground cracks or tilting trees to local authorities.')}</span>
          </div>

          <div className="bg-slate-900/90 p-3 rounded-lg border border-slate-800 flex items-start space-x-2.5">
            <span className="w-5 h-5 rounded-full bg-amber-500/20 text-amber-400 font-bold flex items-center justify-center shrink-0">4</span>
            <span className="text-slate-200">{t('community.rule4', 'Follow directives issued by the District Disaster Management Authority (DDMA).')}</span>
          </div>
        </div>
      </div>

      {/* Village Evacuation Shelters & Helplines */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        
        {/* Left: Village Shelter Finder (7 cols) */}
        <div className="lg:col-span-7 bg-gov-card border border-gov-border rounded-xl p-5 shadow-xl space-y-4">
          <div className="flex items-center space-x-2 border-b border-gov-border pb-3">
            <ShieldCheck className="w-5 h-5 text-emerald-400" />
            <h3 className="text-sm font-bold text-white uppercase tracking-wider">
              {t('community.shelters', 'Designated Community Evacuation Centers')}
            </h3>
          </div>

          <div className="space-y-2">
            <label className="text-xs text-slate-300 font-semibold">Select your Village / Hamlet:</label>
            <select
              value={selectedVillage}
              onChange={(e) => setSelectedVillage(e.target.value)}
              className="w-full bg-slate-900 border border-slate-700 rounded-lg p-2.5 text-xs text-white font-bold focus:border-amber-500 focus:outline-none"
            >
              {villages.map((v) => (
                <option key={v.id} value={v.id}>
                  {v.name} ({v.district}, {v.state}) ? Pop: {v.population}
                </option>
              ))}
            </select>
          </div>

          {activeVillage && (
            <div className="bg-slate-900/90 border border-slate-800 rounded-xl p-4 space-y-3">
              <div className="flex justify-between items-start">
                <div>
                  <h4 className="text-base font-bold text-white">{activeVillage.name}</h4>
                  <div className="text-xs text-slate-400">{activeVillage.district}, {activeVillage.state}</div>
                </div>
                <span className="px-2.5 py-1 rounded bg-emerald-500/20 text-emerald-300 font-bold text-xs border border-emerald-500/30">
                  Risk Level: {activeVillage.risk_level}
                </span>
              </div>

              <div className="grid grid-cols-2 gap-3 text-xs pt-2">
                <div className="bg-slate-950 p-2.5 rounded-lg border border-slate-800">
                  <div className="text-[10px] text-slate-400">Nearest Evacuation Center</div>
                  <div className="font-bold text-slate-200 mt-0.5">{activeVillage.nearest_shelter_name}</div>
                </div>

                <div className="bg-slate-950 p-2.5 rounded-lg border border-slate-800">
                  <div className="text-[10px] text-slate-400">Shelter Proximity</div>
                  <div className="font-bold text-amber-300 mt-0.5">{activeVillage.nearest_shelter_distance_km} km</div>
                </div>
              </div>

              <div className="text-[11px] text-slate-400 flex items-center space-x-1 pt-1">
                <MapPin className="w-3.5 h-3.5 text-amber-400" />
                <span>Coordinates: {activeVillage.coordinates.lat}, {activeVillage.coordinates.lng}</span>
              </div>
            </div>
          )}
        </div>

        {/* Right: Emergency Helpline Directory (5 cols) */}
        <div className="lg:col-span-5 bg-gov-card border border-gov-border rounded-xl p-5 shadow-xl space-y-4">
          <div className="flex items-center space-x-2 border-b border-gov-border pb-3">
            <Phone className="w-5 h-5 text-blue-400" />
            <h3 className="text-sm font-bold text-white uppercase tracking-wider">
              {t('community.emergencyContacts', 'Emergency Helpline Directory')}
            </h3>
          </div>

          <div className="space-y-3">
            {emergencyContacts.map((c, idx) => (
              <div
                key={idx}
                className="bg-slate-900/90 border border-slate-800 p-3 rounded-xl flex items-center justify-between hover:border-slate-700 transition-colors"
              >
                <div>
                  <div className="text-xs font-bold text-white">{c.name}</div>
                  <div className="text-[10px] text-slate-400">{c.type}</div>
                </div>

                <a
                  href={`tel:${c.number.replace(/\s+/g, '')}`}
                  className="px-3 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-mono font-bold text-xs shadow flex items-center space-x-1"
                >
                  <Phone className="w-3 h-3" />
                  <span>{c.number}</span>
                </a>
              </div>
            ))}
          </div>

          <div className="bg-blue-500/10 border border-blue-500/20 p-3 rounded-lg text-[11px] text-blue-300">
            <strong>Citizen Broadcast SMS:</strong> In case of active warning in your district, alerts are relayed directly via telecom tower cell broadcast.
          </div>
        </div>

      </div>

    </div>
  );
};
