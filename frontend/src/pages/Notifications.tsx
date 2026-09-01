import React from 'react';
import { Bell, CheckCircle2 } from 'lucide-react';

export const Notifications: React.FC = () => {
  return (
    <div className="space-y-5">
      
      <div className="bg-[#12151b] border border-white/[0.08] rounded-xl p-5 shadow-xl">
        <div className="flex items-center space-x-2">
          <Bell className="w-5 h-5 text-emerald-400" />
          <h1 className="text-lg font-black text-white">Multi-Channel Dissemination & Broadcast Logs</h1>
        </div>
        <p className="text-xs text-slate-300 max-w-2xl mt-1">
          Historical delivery receipts for National Cell Broadcast, NDMA SACHET, SMS gateway dispatch, and VHF automated siren triggers.
        </p>
      </div>

      <div className="space-y-2.5">
        {[
          { channel: 'National Cell Broadcast (C-DoT)', target: 'Mangan & Dzongu Sub-divisions', status: 'Delivered (4,200 handsets)', time: '10 min ago', sev: 'RED' },
          { channel: 'NDMA SACHET CAP v1.2 Gateway', target: 'State EOC Gangtok & Kohima', status: 'Acknowledged by SDMA', time: '25 min ago', sev: 'RED' },
          { channel: 'Automated Local Siren Relay', target: 'Mangan Market & Higher Secondary', status: 'Siren Activated (120s tone)', time: '40 min ago', sev: 'ORANGE' },
          { channel: 'State Disaster SMS Bulk Gateway', target: 'Registered Community Aapda Mitras', status: 'Sent (1,850 SMS)', time: '1 hour ago', sev: 'ORANGE' }
        ].map((notif, i) => (
          <div key={i} className="bg-[#12151b] border border-white/[0.08] p-3.5 rounded-xl shadow-xl flex flex-col sm:flex-row sm:items-center justify-between gap-2.5 text-xs">
            <div className="space-y-1">
              <div className="flex items-center space-x-2">
                <span className={`px-2 py-0.5 rounded text-[9px] font-black uppercase ${
                  notif.sev === 'RED' ? 'bg-red-500 text-white' : 'bg-amber-500 text-slate-950'
                }`}>
                  {notif.sev} BROADCAST
                </span>
                <span className="font-bold text-white">{notif.channel}</span>
              </div>
              <div className="text-slate-400">Target: <strong className="text-slate-200">{notif.target}</strong></div>
            </div>

            <div className="flex items-center space-x-4 self-end sm:self-center font-mono text-[11px]">
              <span className="text-emerald-400 font-bold flex items-center space-x-1">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>{notif.status}</span>
              </span>
              <span className="text-slate-400">{notif.time}</span>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
};
