import React, { useState } from 'react';
import { AlertOctagon, Plus, CheckCircle2, MapPin, Camera, Clock, User, Filter, AlertTriangle } from 'lucide-react';
import { Incident } from '../types';
import { api } from '../services/api';
import { useAuth } from '../context/AuthContext';

interface IncidentsPageProps {
  incidents: Incident[];
  onOpenReportModal: () => void;
  onSelectIncident: (incident: Incident) => void;
  onRefresh: () => void;
}

export const IncidentsPage: React.FC<IncidentsPageProps> = ({
  incidents,
  onOpenReportModal,
  onSelectIncident,
  onRefresh
}) => {
  const { role, userName } = useAuth();
  const [selectedFilter, setSelectedFilter] = useState<string>('ALL');

  const handleVerify = async (e: React.MouseEvent, incidentId: string) => {
    e.stopPropagation();
    try {
      await api.verifyIncident(incidentId, `${userName} (${role})`, 'Verified via field patrol inspection.');
      onRefresh();
    } catch (err) {
      console.error(err);
    }
  };

  const filtered = incidents.filter(i => {
    if (selectedFilter === 'ALL') return true;
    return i.status.toLowerCase() === selectedFilter.toLowerCase();
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 space-y-6">
      
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-gov-card border border-gov-border rounded-xl p-5 shadow-xl">
        <div>
          <div className="flex items-center space-x-2">
            <AlertOctagon className="w-6 h-6 text-amber-400" />
            <h2 className="text-xl font-black text-white">Field Ground Movement & Incident Reports</h2>
          </div>
          <p className="text-xs text-slate-400 mt-1">
            Real-time field officer observations, drone footage, and community slope crack submissions.
          </p>
        </div>

        <div className="flex items-center space-x-3">
          <select
            value={selectedFilter}
            onChange={(e) => setSelectedFilter(e.target.value)}
            className="bg-slate-900 border border-slate-700 rounded-lg px-3 py-2 text-xs text-white"
          >
            <option value="ALL">All Statuses ({incidents.length})</option>
            <option value="Reported">Reported (Pending Verification)</option>
            <option value="Verified">Verified</option>
            <option value="Action Initiated">Action Initiated</option>
            <option value="Resolved">Resolved</option>
          </select>

          <button
            onClick={onOpenReportModal}
            className="flex items-center space-x-1.5 px-4 py-2 rounded-lg bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs shadow-lg transition-all"
          >
            <Plus className="w-4 h-4" />
            <span>Submit New Field Report</span>
          </button>
        </div>
      </div>

      {/* Incident Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filtered.map((inc) => (
          <div
            key={inc.id}
            onClick={() => onSelectIncident(inc)}
            className="p-4 rounded-xl bg-gov-card border border-gov-border hover:border-amber-500/50 shadow-xl cursor-pointer transition-all space-y-3 flex flex-col justify-between"
          >
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="font-bold text-sm text-white flex items-center space-x-1.5">
                  <AlertTriangle className="w-4 h-4 text-amber-400" />
                  <span>{inc.incident_type}</span>
                </span>
                <span className={`px-2 py-0.5 rounded text-[10px] font-bold ${
                  inc.severity === 'CRITICAL' ? 'bg-red-500/20 text-red-400 border border-red-500/30' : 'bg-orange-500/20 text-orange-400 border border-orange-500/30'
                }`}>
                  {inc.severity}
                </span>
              </div>

              <div className="text-xs text-slate-300">
                <div className="font-semibold text-amber-300 line-clamp-1">{inc.location_name}</div>
                <div className="text-[11px] text-slate-400">{inc.district}, {inc.state}</div>
              </div>

              <p className="text-xs text-slate-300 line-clamp-2 italic bg-slate-900/60 p-2 rounded border border-slate-800">
                "{inc.description}"
              </p>

              {/* Photo Thumbnail if exists */}
              {inc.media && inc.media.length > 0 && (
                <div className="flex items-center space-x-2 bg-slate-900 p-2 rounded border border-slate-800 text-[11px] text-slate-400">
                  <Camera className="w-4 h-4 text-blue-400 shrink-0" />
                  <span className="truncate">Geo-tagged Photo: {inc.media[0].file_name}</span>
                </div>
              )}
            </div>

            {/* Card Footer & Action */}
            <div className="pt-2 border-t border-slate-800 flex items-center justify-between text-[11px]">
              <div className="space-y-0.5">
                <div className="text-slate-400">Status: <strong className="text-white">{inc.status}</strong></div>
                <div className="text-slate-500 text-[10px]">By: {inc.reported_by.split('(')[0]}</div>
              </div>

              {inc.status === 'Reported' && (role === 'DISTRICT_OFFICER' || role === 'STATE_AUTHORITY' || role === 'SYSTEM_ADMIN') ? (
                <button
                  onClick={(e) => handleVerify(e, inc.id)}
                  className="px-3 py-1 rounded bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-[11px] shadow transition-colors"
                >
                  Verify Incident
                </button>
              ) : (
                <span className="text-slate-400 font-medium">Details →</span>
              )}
            </div>

          </div>
        ))}
      </div>

    </div>
  );
};
