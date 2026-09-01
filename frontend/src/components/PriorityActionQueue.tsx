
import React from 'react';
import { 
  ShieldAlert, AlertTriangle, ArrowUpRight, CheckCircle2, 
  MapPin, Clock, Truck, ChevronRight 
} from 'lucide-react';
import { RiskZone, Incident, Road } from '../types';

interface PriorityActionQueueProps {
  riskZones: RiskZone[];
  incidents: Incident[];
  roads: Road[];
  onSelectZone: (zone: RiskZone) => void;
  onSelectIncident: (incident: Incident) => void;
}

export const PriorityActionQueue: React.FC<PriorityActionQueueProps> = ({
  riskZones,
  incidents,
  roads,
  onSelectZone,
  onSelectIncident
}) => {
  // Combine Critical risk zones and active incidents into an urgent action queue
  const queueItems = [
    ...incidents.filter(i => i.status !== 'Resolved').map(i => ({
      type: 'INCIDENT' as const,
      id: i.id,
      title: `${i.incident_type}: ${i.location_name}`,
      subtitle: `${i.district}, ${i.state} ? Reported by ${i.reported_by.split('(')[0]}`,
      severity: i.severity,
      urgencyRank: i.severity === 'CRITICAL' ? 1 : 2,
      actionPrompt: i.road_blocked ? 'Deploy Excavator & NDRF Patrol' : 'Verify Ground Crack with Drone/Field Team',
      raw: i
    })),
    ...riskZones.filter(z => z.severity === 'CRITICAL' || z.severity === 'HIGH').map(z => ({
      type: 'ZONE' as const,
      id: z.id,
      title: `Elevated Hazard: ${z.name}`,
      subtitle: `Score: ${z.risk_score}/100 ? 24h Rain: ${z.assessment.rainfall_24h}mm ? ${z.district}`,
      severity: z.severity,
      urgencyRank: z.severity === 'CRITICAL' ? 1 : 3,
      actionPrompt: z.assessment.recommended_action,
      raw: z
    }))
  ].sort((a, b) => a.urgencyRank - b.urgencyRank);

  return (
    <div className="bg-gov-card border border-gov-border rounded-xl p-4 shadow-xl space-y-3">
      <div className="flex items-center justify-between border-b border-gov-border pb-2.5">
        <div className="flex items-center space-x-2">
          <ShieldAlert className="w-5 h-5 text-red-400" />
          <h3 className="text-sm font-bold text-white">EOC Priority Action Queue</h3>
        </div>
        <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-red-500/20 text-red-300 border border-red-500/30">
          {queueItems.length} Urgent Items
        </span>
      </div>

      <div className="space-y-2.5 max-h-[420px] overflow-y-auto pr-1">
        {queueItems.map((item, idx) => (
          <div
            key={`${item.type}-${item.id}`}
            onClick={() => item.type === 'ZONE' ? onSelectZone(item.raw as RiskZone) : onSelectIncident(item.raw as Incident)}
            className="p-3 rounded-lg bg-slate-900/90 border border-slate-800 hover:border-amber-500/50 hover:bg-slate-850 cursor-pointer transition-all space-y-1.5"
          >
            <div className="flex items-start justify-between">
              <div className="flex items-center space-x-2">
                <span className="w-5 h-5 rounded-full bg-slate-800 flex items-center justify-center font-bold text-[10px] text-amber-400 border border-slate-700">
                  #{idx + 1}
                </span>
                <span className={`px-2 py-0.5 rounded text-[10px] font-bold ${
                  item.severity === 'CRITICAL' ? 'bg-red-500/20 text-red-400 border border-red-500/30' : 'bg-orange-500/20 text-orange-400 border border-orange-500/30'
                }`}>
                  {item.severity}
                </span>
              </div>

              <span className="text-[10px] text-slate-500 font-mono">
                {item.type}
              </span>
            </div>

            <div>
              <h4 className="text-xs font-bold text-white line-clamp-1">{item.title}</h4>
              <p className="text-[11px] text-slate-400 mt-0.5">{item.subtitle}</p>
            </div>

            <div className="bg-slate-950/80 p-2 rounded text-[11px] text-amber-300/90 flex items-center justify-between border border-slate-800">
              <span className="line-clamp-1"><strong>Action:</strong> {item.actionPrompt}</span>
              <ChevronRight className="w-3.5 h-3.5 text-amber-400 shrink-0 ml-1" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
