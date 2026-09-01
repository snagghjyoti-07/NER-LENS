import React, { useState } from 'react';
import { 
  ShieldAlert, AlertTriangle, Activity, MapPin, 
  Car, FileText, PlusCircle, ArrowUpRight, CheckCircle2,
  RefreshCw, Radio, CloudRain
} from 'lucide-react';
import { 
  DashboardSummary, RiskZone, Incident, Road, 
  VulnerableVillage, CriticalInfrastructure, Alert 
} from '../types';
import { PriorityActionQueue } from '../components/PriorityActionQueue';
import { RoadConnectivityTable } from '../components/RoadConnectivityTable';
import { VillageExposureTable } from '../components/VillageExposureTable';
import { GisMap } from '../components/GisMap';
import { LiveWeatherCard } from '../components/LiveWeatherCard';
import { LiveActivityStream } from '../components/LiveActivityStream';
import { useLanguage } from '../context/LanguageContext';

export const CommandCenter: React.FC<{
  summary: DashboardSummary | null;
  riskZones: RiskZone[];
  roads: Road[];
  villages: VulnerableVillage[];
  infrastructure: CriticalInfrastructure[];
  incidents: Incident[];
  alerts: Alert[];
  onSelectZone: (zone: RiskZone) => void;
  onSelectIncident: (incident: Incident) => void;
  onOpenReportModal: () => void;
  onOpenAlertWizard: () => void;
}> = ({
  summary,
  riskZones,
  roads,
  villages,
  infrastructure,
  incidents,
  alerts,
  onSelectZone,
  onSelectIncident,
  onOpenReportModal,
  onOpenAlertWizard,
}) => {
  const { t } = useLanguage();
  const [selectedMapStation, setSelectedMapStation] = useState<{ lat: number; lng: number; name: string } | null>(null);

  const riskScore = summary?.regional_risk_score || 72;
  const severity = summary?.regional_severity || 'HIGH';

  const handleStationFocus = (lat: number, lng: number, name: string) => {
    setSelectedMapStation({ lat, lng, name });
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 space-y-6">
      
      {/* 1. Top Executive KPI Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
        
        {/* Regional Risk Score Metric */}
        <div className="bg-gov-card border border-gov-border rounded-xl p-4 shadow-xl flex flex-col justify-between space-y-2">
          <div className="flex items-center justify-between text-xs font-bold text-slate-400">
            <span className="uppercase">{t('dashboard.regionalRisk', 'Regional Landslide Risk')}</span>
            <span className="flex items-center space-x-1 text-emerald-400 font-mono text-[10px]">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping" />
              <span>LIVE</span>
            </span>
          </div>

          <div className="flex items-baseline space-x-3">
            <span className="text-3xl font-black text-white font-mono">{riskScore}</span>
            <span className="text-xs font-bold text-slate-400">/ 100</span>
            <span className={`px-2 py-0.5 rounded text-xs font-black ml-auto ${
              severity === 'CRITICAL' ? 'bg-red-500/20 text-red-400 border border-red-500/40' :
              severity === 'HIGH' ? 'bg-orange-500/20 text-orange-400 border border-orange-500/40' :
              'bg-amber-500/20 text-amber-300 border border-amber-500/40'
            }`}>
              {severity}
            </span>
          </div>

          <div className="text-[10px] text-slate-400 flex justify-between border-t border-slate-800 pt-1.5">
            <span>Aggregated across 8 NE States</span>
            <span className="font-mono text-amber-400">ISRO/GSI Calibrated</span>
          </div>
        </div>

        {/* Critical Zones Count */}
        <div className="bg-gov-card border border-gov-border rounded-xl p-4 shadow-xl flex flex-col justify-between space-y-2">
          <div className="text-xs font-bold text-slate-400 uppercase">
            {t('dashboard.criticalZones', 'Critical Zones')}
          </div>
          <div className="flex items-baseline space-x-2">
            <span className="text-3xl font-black text-red-400 font-mono">
              {summary?.critical_risk_zones ?? riskZones.filter(z => z.severity === 'CRITICAL').length}
            </span>
            <span className="text-xs text-slate-400">/ {riskZones.length} monitored</span>
          </div>
          <div className="text-[10px] text-slate-400 border-t border-slate-800 pt-1.5">
            Immediate slope monitoring active
          </div>
        </div>

        {/* Active Incidents */}
        <div className="bg-gov-card border border-gov-border rounded-xl p-4 shadow-xl flex flex-col justify-between space-y-2">
          <div className="text-xs font-bold text-slate-400 uppercase">
            {t('dashboard.activeIncidents', 'Active Field Incidents')}
          </div>
          <div className="flex items-baseline space-x-2">
            <span className="text-3xl font-black text-amber-400 font-mono">
              {summary?.active_incidents ?? incidents.filter(i => i.status !== 'Resolved').length}
            </span>
            <span className="text-xs text-slate-400">verified signals</span>
          </div>
          <div className="text-[10px] text-slate-400 border-t border-slate-800 pt-1.5">
            Field patrol & drone observation
          </div>
        </div>

        {/* Official Warnings */}
        <div className="bg-gov-card border border-gov-border rounded-xl p-4 shadow-xl flex flex-col justify-between space-y-2">
          <div className="text-xs font-bold text-slate-400 uppercase">
            {t('dashboard.activeAlerts', 'Disaster Warnings')}
          </div>
          <div className="flex items-baseline space-x-2">
            <span className="text-3xl font-black text-blue-400 font-mono">
              {summary?.active_alerts ?? alerts.filter(a => a.status === 'Issued').length}
            </span>
            <span className="text-xs text-slate-400">active feeds</span>
          </div>
          <div className="text-[10px] text-slate-400 border-t border-slate-800 pt-1.5">
            SACHET / CAP & Broadcast
          </div>
        </div>

        {/* Blocked Roads */}
        <div className="bg-gov-card border border-gov-border rounded-xl p-4 shadow-xl flex flex-col justify-between space-y-2">
          <div className="text-xs font-bold text-slate-400 uppercase">
            {t('dashboard.blockedRoads', 'Blocked Lifeline Corridors')}
          </div>
          <div className="flex items-baseline space-x-2">
            <span className="text-3xl font-black text-orange-400 font-mono">
              {summary?.blocked_roads ?? roads.filter(r => r.status === 'BLOCKED').length}
            </span>
            <span className="text-xs text-slate-400">lifelines impacted</span>
          </div>
          <div className="text-[10px] text-slate-400 border-t border-slate-800 pt-1.5">
            GREF / BRO clearances in progress
          </div>
        </div>

      </div>

      {/* 2. Quick Action Dispatch Toolbar */}
      <div className="flex flex-wrap items-center justify-between gap-3 bg-gov-card border border-gov-border rounded-xl p-3.5 shadow-lg">
        <div className="flex items-center space-x-2">
          <Activity className="w-4 h-4 text-amber-400" />
          <span className="text-xs font-bold text-slate-200">
            Emergency Operations Center (EOC) Dispatch Controls:
          </span>
        </div>

        <div className="flex items-center space-x-3">
          <button
            onClick={onOpenReportModal}
            className="flex items-center space-x-1.5 px-3 py-1.5 rounded-lg bg-amber-500 hover:bg-amber-400 text-slate-950 font-black text-xs shadow transition-all"
          >
            <PlusCircle className="w-3.5 h-3.5 text-slate-950" />
            <span>{t('dashboard.quickReport', 'Report Field Incident / Crack')}</span>
          </button>

          <button
            onClick={onOpenAlertWizard}
            className="flex items-center space-x-1.5 px-3 py-1.5 rounded-lg bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs shadow transition-all"
          >
            <ShieldAlert className="w-3.5 h-3.5" />
            <span>{t('dashboard.quickAlert', 'Issue CAP Early Warning')}</span>
          </button>
        </div>
      </div>

      {/* 3. Primary Core: GIS Map (7 cols) + Priority Queue (5 cols) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        
        {/* Left: GIS Map */}
        <div className="lg:col-span-7 bg-gov-card border border-gov-border rounded-xl p-4 shadow-xl flex flex-col space-y-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <MapPin className="w-4 h-4 text-amber-400" />
              <h3 className="text-xs font-bold text-white uppercase tracking-wider">
                {t('dashboard.gisIntelligence', 'Northeast Geospatial Landslide Intelligence')}
              </h3>
            </div>
            <span className="text-[10px] text-slate-400 font-mono">
              Leaflet & Carto Topographic
            </span>
          </div>

          <div className="h-[460px] rounded-lg overflow-hidden border border-slate-800">
            <GisMap
              riskZones={riskZones}
              roads={roads}
              villages={villages}
              infrastructure={infrastructure}
              incidents={incidents}
              alerts={alerts}
              onSelectZone={onSelectZone}
              onSelectIncident={onSelectIncident}
              focusLat={selectedMapStation?.lat}
              focusLng={selectedMapStation?.lng}
            />
          </div>
        </div>

        {/* Right: EOC Priority Queue */}
        <div className="lg:col-span-5 flex flex-col space-y-4">
          <PriorityActionQueue
            riskZones={riskZones}
            roads={roads}
            incidents={incidents}
            onSelectZone={onSelectZone}
            onSelectIncident={onSelectIncident}
          />
        </div>

      </div>

      {/* 4. Real-Time Telemetry & Live Activity Section */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        
        {/* Real Live Weather Card (7 cols) */}
        <div className="lg:col-span-7">
          <LiveWeatherCard onSelectStation={handleStationFocus} />
        </div>

        {/* Live Activity Stream (5 cols) */}
        <div className="lg:col-span-5">
          <LiveActivityStream />
        </div>

      </div>

      {/* 5. Lifeline Corridors & Vulnerable Villages Tables */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <RoadConnectivityTable roads={roads} />
        <VillageExposureTable villages={villages} />
      </div>

    </div>
  );
};
