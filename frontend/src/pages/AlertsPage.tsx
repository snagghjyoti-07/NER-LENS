import React, { useState } from 'react';
import { Bell, Plus, Radio, CheckCircle2, Code, Smartphone, ShieldAlert, Send } from 'lucide-react';
import { Alert } from '../types';
import { api } from '../services/api';

interface AlertsPageProps {
  alerts: Alert[];
  onOpenAlertWizard: () => void;
  onRefresh: () => void;
}

export const AlertsPage: React.FC<AlertsPageProps> = ({ alerts, onOpenAlertWizard, onRefresh }) => {
  const [selectedXml, setSelectedXml] = useState<string | null>(null);
  const [selectedCellBroadcast, setSelectedCellBroadcast] = useState<any | null>(null);

  const handleInspectXml = async (alertId: string) => {
    const xml = await api.getAlertCapXml(alertId);
    setSelectedXml(xml);
    setSelectedCellBroadcast(null);
  };

  const handleInspectCellBroadcast = async (alertId: string) => {
    const cbs = await api.getAlertCellBroadcast(alertId);
    setSelectedCellBroadcast(cbs);
    setSelectedXml(null);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 space-y-6">
      
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-gov-card border border-gov-border rounded-xl p-5 shadow-xl">
        <div>
          <div className="flex items-center space-x-2">
            <Bell className="w-6 h-6 text-red-400" />
            <h2 className="text-xl font-black text-white">Alert Center & Multi-Channel Dissemination</h2>
          </div>
          <p className="text-xs text-slate-400 mt-1">
            Standardized OASIS CAP v1.2 & NDMA SACHET / National Cell Broadcast Gateway integrations.
          </p>
        </div>

        <button
          onClick={onOpenAlertWizard}
          className="flex items-center space-x-1.5 px-5 py-2.5 rounded-lg bg-red-600 hover:bg-red-500 text-white font-bold text-xs shadow-lg transition-all"
        >
          <Plus className="w-4 h-4" />
          <span>Draft New CAP Alert</span>
        </button>
      </div>

      {/* Alerts Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {alerts.map((a) => (
          <div key={a.id} className="p-5 rounded-xl bg-gov-card border border-gov-border shadow-xl space-y-3">
            <div className="flex items-start justify-between">
              <div className="space-y-1">
                <span className={`px-2 py-0.5 rounded text-[10px] font-bold ${
                  a.severity === 'Critical' ? 'bg-red-500/20 text-red-400 border border-red-500/30' : 'bg-orange-500/20 text-orange-400 border border-orange-500/30'
                }`}>
                  {a.severity} Early Warning
                </span>
                <h3 className="text-sm font-bold text-white">{a.title}</h3>
                <p className="text-xs text-slate-400">{a.district}, {a.state} ? Geofence: {a.radius_km} km</p>
              </div>

              <span className="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-400 text-[10px] font-bold">
                {a.status}
              </span>
            </div>

            <p className="text-xs text-slate-300 italic bg-slate-900 p-2.5 rounded border border-slate-800">
              "{a.instruction}"
            </p>

            {/* Channels & Metadata */}
            <div className="text-[11px] text-slate-400 space-y-1">
              <p><strong>Dissemination Channels:</strong> {a.channels.join(' ? ')}</p>
              <p><strong>CAP Identifier:</strong> <span className="font-mono text-amber-400">{a.cap_identifier}</span></p>
            </div>

            {/* Action Buttons: View XML & Cell Broadcast */}
            <div className="pt-2 border-t border-slate-800 flex items-center space-x-2">
              <button
                onClick={() => handleInspectXml(a.id)}
                className="flex items-center space-x-1 px-3 py-1.5 rounded bg-slate-800 hover:bg-slate-700 text-blue-300 font-bold text-xs"
              >
                <Code className="w-3.5 h-3.5" />
                <span>Inspect CAP v1.2 XML</span>
              </button>

              <button
                onClick={() => handleInspectCellBroadcast(a.id)}
                className="flex items-center space-x-1 px-3 py-1.5 rounded bg-slate-800 hover:bg-slate-700 text-red-300 font-bold text-xs"
              >
                <Smartphone className="w-3.5 h-3.5" />
                <span>Cell Broadcast Payload</span>
              </button>
            </div>

          </div>
        ))}
      </div>

      {/* XML / Cell Broadcast Inspector Modal / Box */}
      {selectedXml && (
        <div className="bg-slate-950 p-4 rounded-xl border border-gov-border shadow-2xl space-y-2">
          <div className="flex items-center justify-between border-b border-slate-800 pb-2">
            <span className="font-bold text-xs text-amber-400 flex items-center space-x-1.5">
              <Code className="w-4 h-4" />
              <span>OASIS CAP v1.2 XML Serialization</span>
            </span>
            <button onClick={() => setSelectedXml(null)} className="text-xs text-slate-400 hover:text-white">
              Close Preview [X]
            </button>
          </div>
          <pre className="font-mono text-xs text-emerald-400 overflow-x-auto max-h-60 p-2">
            {selectedXml}
          </pre>
        </div>
      )}

      {selectedCellBroadcast && (
        <div className="bg-slate-950 p-4 rounded-xl border border-red-500/40 shadow-2xl space-y-2">
          <div className="flex items-center justify-between border-b border-slate-800 pb-2">
            <span className="font-bold text-xs text-red-400 flex items-center space-x-1.5">
              <Smartphone className="w-4 h-4" />
              <span>Indian National Cell Broadcast Transmission Payload (May 2026 Telephony)</span>
            </span>
            <button onClick={() => setSelectedCellBroadcast(null)} className="text-xs text-slate-400 hover:text-white">
              Close Preview [X]
            </button>
          </div>
          <pre className="font-mono text-xs text-amber-300 overflow-x-auto max-h-60 p-2">
            {JSON.stringify(selectedCellBroadcast, null, 2)}
          </pre>
        </div>
      )}

    </div>
  );
};
