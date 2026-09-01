import React, { useState, useEffect } from 'react';
import { Activity, Clock, ShieldAlert, FileText, CheckCircle2, Radio } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export interface ActivityEvent {
  id: string;
  timestamp: string;
  time_label: string;
  category: string;
  title: string;
  description: string;
  severity: string;
}

export const LiveActivityStream: React.FC = () => {
  const { t } = useLanguage();
  const [events, setEvents] = useState<ActivityEvent[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const fetchEvents = async () => {
    try {
      const res = await fetch('http://127.0.0.1:8000/api/activity-feed');
      if (res.ok) {
        const data = await res.json();
        setEvents(data);
      }
    } catch (err) {
      console.warn('Activity feed fetch:', err);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchEvents();
    const interval = setInterval(fetchEvents, 20000); // 20s auto-refresh
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-gov-card border border-gov-border rounded-xl p-4 shadow-xl space-y-3">
      <div className="flex items-center justify-between border-b border-gov-border pb-2.5">
        <div className="flex items-center space-x-2">
          <Activity className="w-4 h-4 text-emerald-400" />
          <h3 className="text-xs font-bold text-white uppercase tracking-wider">
            {t('dashboard.liveActivity', 'Live Operational Activity Stream')}
          </h3>
        </div>
        <span className="flex items-center space-x-1 text-[10px] text-emerald-400 font-mono">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping" />
          <span>REAL-TIME STREAM</span>
        </span>
      </div>

      <div className="space-y-2 max-h-[300px] overflow-y-auto pr-1">
        {events.length === 0 ? (
          <div className="text-center py-6 text-xs text-slate-500 font-mono">
            {isLoading ? 'Listening to operational event stream...' : 'No recent activity.'}
          </div>
        ) : (
          events.map((evt) => (
            <div
              key={evt.id}
              className="p-2.5 rounded-lg bg-slate-900/80 border border-slate-800 flex items-start justify-between gap-2 hover:border-slate-700 transition-colors"
            >
              <div className="space-y-0.5">
                <div className="flex items-center space-x-2">
                  <span className={`px-1.5 py-0.2 rounded text-[9px] font-bold ${
                    evt.severity === 'CRITICAL' ? 'bg-red-500/20 text-red-400 border border-red-500/30' :
                    evt.category === 'INCIDENT' ? 'bg-amber-500/20 text-amber-300 border border-amber-500/30' :
                    'bg-blue-500/20 text-blue-300 border border-blue-500/30'
                  }`}>
                    {evt.category}
                  </span>
                  <span className="text-xs font-bold text-slate-200">{evt.title}</span>
                </div>
                <div className="text-[11px] text-slate-400">{evt.description}</div>
              </div>

              <div className="flex items-center space-x-1 text-[10px] text-slate-400 font-mono whitespace-nowrap">
                <Clock className="w-3 h-3 text-slate-400" />
                <span>{evt.time_label}</span>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};
