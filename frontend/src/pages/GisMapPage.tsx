import React, { useState } from 'react';
import { GisMap } from '../components/GisMap';
import { RiskZone, Road, VulnerableVillage, CriticalInfrastructure, Incident, Alert } from '../types';
import { Filter, Layers, MapPin, Search } from 'lucide-react';

interface GisMapPageProps {
  riskZones: RiskZone[];
  roads: Road[];
  villages: VulnerableVillage[];
  infrastructure: CriticalInfrastructure[];
  incidents: Incident[];
  alerts: Alert[];
  onSelectZone: (zone: RiskZone) => void;
  onSelectIncident: (incident: Incident) => void;
}

export const GisMapPage: React.FC<GisMapPageProps> = ({
  riskZones,
  roads,
  villages,
  infrastructure,
  incidents,
  alerts,
  onSelectZone,
  onSelectIncident
}) => {
  const [selectedState, setSelectedState] = useState<string>('ALL');
  const [selectedSeverity, setSelectedSeverity] = useState<string>('ALL');

  const filteredZones = riskZones.filter(z => {
    const matchState = selectedState === 'ALL' || z.state.toLowerCase() === selectedState.toLowerCase();
    const matchSev = selectedSeverity === 'ALL' || z.severity === selectedSeverity;
    return matchState && matchSev;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 space-y-4">
      
      {/* Header & Spatial Filters */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 bg-gov-card border border-gov-border rounded-xl p-4 shadow-xl">
        <div>
          <h2 className="text-lg font-bold text-white flex items-center space-x-2">
            <Layers className="w-5 h-5 text-amber-400" />
            <span>Northeast India Multilayer GIS Intelligence Map</span>
          </h2>
          <p className="text-xs text-slate-400">
            Geospatial layer integration: ISRO/NRSC Landslide Inventories, GSI Lithology, IMD AWS Grids, NH Lifelines.
          </p>
        </div>

        <div className="flex items-center space-x-2 text-xs">
          <select
            value={selectedState}
            onChange={(e) => setSelectedState(e.target.value)}
            className="bg-slate-900 border border-slate-700 rounded-lg px-2.5 py-1.5 text-white"
          >
            <option value="ALL">All 8 NE States</option>
            <option value="Meghalaya">Meghalaya</option>
            <option value="Nagaland">Nagaland</option>
            <option value="Sikkim">Sikkim</option>
            <option value="Assam">Assam</option>
            <option value="Arunachal Pradesh">Arunachal Pradesh</option>
            <option value="Manipur">Manipur</option>
            <option value="Mizoram">Mizoram</option>
            <option value="Tripura">Tripura</option>
          </select>

          <select
            value={selectedSeverity}
            onChange={(e) => setSelectedSeverity(e.target.value)}
            className="bg-slate-900 border border-slate-700 rounded-lg px-2.5 py-1.5 text-white"
          >
            <option value="ALL">All Severity Tiers</option>
            <option value="CRITICAL">Critical Only</option>
            <option value="HIGH">High & Above</option>
            <option value="MODERATE">Moderate</option>
            <option value="LOW">Low</option>
          </select>
        </div>
      </div>

      {/* Main Map Container */}
      <div className="h-[74vh] min-h-[580px]">
        <GisMap
          riskZones={filteredZones}
          roads={roads}
          villages={villages}
          infrastructure={infrastructure}
          incidents={incidents}
          alerts={alerts}
          onSelectZone={onSelectZone}
          onSelectIncident={onSelectIncident}
        />
      </div>

    </div>
  );
};
