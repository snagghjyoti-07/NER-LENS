import React, { useState } from 'react';
import { 
  ShieldCheck, Shield, Users, MapPin, Sliders, 
  FileText, CheckCircle2, ChevronDown, AlertTriangle 
} from 'lucide-react';
import { useApp } from '../context/AppContext';

interface UserRecord {
  id: string;
  name: string;
  email: string;
  role: 'admin' | 'disaster_officer' | 'field_officer' | 'community';
}

const INITIAL_USERS: UserRecord[] = [
  { id: '1', name: 'System Administrator', email: 'satyam.snagghjyoti@gmail.com', role: 'admin' },
  { id: '2', name: 'Dr. Priya Sharma', email: 'officer@ndma.gov.in', role: 'disaster_officer' },
  { id: '3', name: 'Rakesh Thapa', email: 'field@ner.gov.in', role: 'field_officer' },
  { id: '4', name: 'Mary Lyngdoh', email: 'community@ner.gov.in', role: 'community' },
  { id: '5', name: 'Kalyan', email: 'marisettikalyanranudu@gmail.com', role: 'community' },
  { id: '6', name: 'Hari', email: 'anasuriharicharani@gmail.com', role: 'community' },
  { id: '7', name: 'veeru', email: 'veerababuthotakura007@gmail.com', role: 'community' },
  { id: '8', name: 'ryfyjgjmb,', email: 'divyaveerarantejareddyp@gmail.com', role: 'community' },
  { id: '9', name: 'k.sumith', email: 'sumithkshatri@gmail.com', role: 'community' },
  { id: '10', name: 'Aki', email: 'snagghjyoti@gmail.com', role: 'community' }
];

export const Admin: React.FC = () => {
  const { user, setActiveTab } = useApp();
  const [activeTab, setTab] = useState<'users' | 'add_location' | 'thresholds' | 'system_logs'>('users');
  const [users, setUsers] = useState<UserRecord[]>(INITIAL_USERS);
  const [rainThreshold, setRainThreshold] = useState<number>(200);
  const [slopeThreshold, setSlopeThreshold] = useState<number>(35);
  const [savedMsg, setSavedMsg] = useState<string | null>(null);

  const { loginUser } = useApp();
  const rawRole = (user?.role || 'community').toLowerCase();
  const userRole = rawRole.includes('admin') ? 'admin' : 
                   rawRole.includes('field') ? 'field_officer' : 
                   rawRole.includes('officer') || rawRole.includes('district') ? 'disaster_officer' : 'community';

  const isAdmin = userRole === 'admin' || 
                  user?.email?.toLowerCase().includes('admin') || 
                  user?.email === 'satyam.snagghjyoti@gmail.com';

  if (!isAdmin) {
    return (
      <div className="min-h-[70vh] flex flex-col items-center justify-center text-center px-4">
        <div className="space-y-4 max-w-xl">
          {/* Shield Icon matching screenshot */}
          <div className="flex justify-center">
            <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-white/90">
              <Shield className="w-6 h-6" />
            </div>
          </div>

          <h2 className="text-xl sm:text-2xl font-mono text-white font-medium">
            Admin role required. Your role: <strong className="text-white font-bold">{userRole}</strong>
          </h2>

          <p className="text-xs sm:text-sm text-slate-400 font-sans">
            Field officers: use <button onClick={() => setActiveTab('report')} className="text-emerald-400 hover:underline font-semibold">Report Hazard</button>. Officers: manage alerts in <button onClick={() => setActiveTab('warnings')} className="text-emerald-400 hover:underline font-semibold">Early Warnings</button>.
          </p>

          <div className="pt-4">
            <button
              onClick={() => {
                loginUser({
                  name: 'System Administrator',
                  email: 'satyam.snagghjyoti@gmail.com',
                  role: 'admin'
                });
              }}
              className="px-6 py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-black text-xs shadow-xl shadow-emerald-500/20 transition-all hover:scale-105"
            >
              Switch to Admin Account
            </button>
          </div>
        </div>
      </div>
    );
  }

  const handleRoleChange = (userId: string, newRole: UserRecord['role']) => {
    setUsers(prev => prev.map(u => u.id === userId ? { ...u, role: newRole } : u));
    setSavedMsg(`Role updated to ${newRole} for user.`);
    setTimeout(() => setSavedMsg(null), 3000);
  };

  return (
    <div className="space-y-6 max-w-6xl mx-auto">
      
      {/* Top Header matching screenshot media_1788284277914.jpg */}
      <div className="flex items-center space-x-2.5">
        <ShieldCheck className="w-6 h-6 text-emerald-400" />
        <h1 className="text-xl sm:text-2xl font-black text-white tracking-wide">
          Admin / Authority Panel
        </h1>
      </div>

      {/* Tabs */}
      <div className="flex items-center space-x-2 border-b border-white/[0.08] pb-3">
        {[
          { id: 'users', label: 'Users' },
          { id: 'add_location', label: 'Add Location' },
          { id: 'thresholds', label: 'Thresholds' },
          { id: 'system_logs', label: 'System Logs' }
        ].map(tab => (
          <button
            key={tab.id}
            onClick={() => setTab(tab.id as any)}
            className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all ${
              activeTab === tab.id
                ? 'bg-emerald-500 text-slate-950'
                : 'bg-white/[0.04] text-slate-300 hover:bg-white/[0.08]'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {savedMsg && (
        <div className="p-3 bg-emerald-950/40 border border-emerald-500/40 text-emerald-300 rounded-xl text-xs font-mono flex items-center space-x-2">
          <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
          <span>{savedMsg}</span>
        </div>
      )}

      {/* User Management Table (matching Screenshot 1) */}
      {activeTab === 'users' && (
        <div className="bg-[#0b0d13] border border-white/[0.08] rounded-2xl p-5 shadow-2xl space-y-4">
          <h2 className="text-sm font-black text-white tracking-wider uppercase">
            User Management
          </h2>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs font-mono">
              <thead>
                <tr className="text-slate-400 border-b border-white/[0.08] pb-2 text-[11px] uppercase tracking-wider">
                  <th className="py-3 px-3 font-semibold">NAME</th>
                  <th className="py-3 px-3 font-semibold">EMAIL</th>
                  <th className="py-3 px-3 font-semibold">ROLE</th>
                  <th className="py-3 px-3 font-semibold text-right">CHANGE ROLE</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/[0.04]">
                {users.map(u => (
                  <tr key={u.id} className="hover:bg-white/[0.02] transition-colors">
                    <td className="py-3 px-3 text-white font-medium">{u.name}</td>
                    <td className="py-3 px-3 text-slate-300">{u.email}</td>
                    <td className="py-3 px-3">
                      <span className="text-emerald-400 font-bold lowercase">
                        {u.role}
                      </span>
                    </td>
                    <td className="py-3 px-3 text-right">
                      <select
                        value={u.role}
                        onChange={(e) => handleRoleChange(u.id, e.target.value as any)}
                        className="bg-[#12151f] border border-white/[0.1] rounded-lg px-2.5 py-1 text-xs text-slate-200 focus:outline-none focus:border-emerald-500 cursor-pointer"
                      >
                        <option value="admin">admin</option>
                        <option value="disaster_officer">disaster_officer</option>
                        <option value="field_officer">field_officer</option>
                        <option value="community">community</option>
                      </select>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* Thresholds Calibration */}
      {activeTab === 'thresholds' && (
        <div className="bg-[#0b0d13] border border-white/[0.08] rounded-2xl p-5 shadow-2xl space-y-4 text-xs">
          <h2 className="text-sm font-black text-white tracking-wider uppercase">
            Calibrate Regional Early Warning Triggers
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-black/40 p-4 rounded-xl border border-white/[0.06] space-y-2">
              <div className="flex justify-between font-bold">
                <span className="text-slate-200">Critical 24h Rainfall Threshold (mm)</span>
                <span className="text-emerald-400 font-mono text-sm">{rainThreshold} mm</span>
              </div>
              <input
                type="range" min="100" max="350" step="10" value={rainThreshold}
                onChange={(e) => setRainThreshold(parseInt(e.target.value))}
                className="w-full accent-emerald-400 cursor-pointer"
              />
            </div>

            <div className="bg-black/40 p-4 rounded-xl border border-white/[0.06] space-y-2">
              <div className="flex justify-between font-bold">
                <span className="text-slate-200">Critical Slope Angle Threshold (deg)</span>
                <span className="text-amber-400 font-mono text-sm">{slopeThreshold} deg</span>
              </div>
              <input
                type="range" min="20" max="50" step="1" value={slopeThreshold}
                onChange={(e) => setSlopeThreshold(parseInt(e.target.value))}
                className="w-full accent-amber-400 cursor-pointer"
              />
            </div>
          </div>
        </div>
      )}

      {/* Add Location & System Logs tabs */}
      {activeTab === 'add_location' && (
        <div className="bg-[#0b0d13] border border-white/[0.08] rounded-2xl p-5 shadow-2xl space-y-3 text-xs">
          <h2 className="text-sm font-black text-white tracking-wider uppercase">Add Monitored Slope Coordinate</h2>
          <p className="text-slate-400">Register new high-risk hill cutting or settlement zone into real-time telemetry pipeline.</p>
        </div>
      )}

      {activeTab === 'system_logs' && (
        <div className="bg-[#0b0d13] border border-white/[0.08] rounded-2xl p-5 shadow-2xl space-y-3 text-xs font-mono">
          <h2 className="text-sm font-black text-white tracking-wider uppercase font-sans">Audit Trail</h2>
          <div className="space-y-1.5 text-slate-300">
            <div>[2026-09-01 23:14:02] CAP v1.2 warning broadcasted to Mangan District Emergency Center.</div>
            <div>[2026-09-01 23:12:45] Open-Meteo live telemetry synced across 12 Himalayan slopes.</div>
            <div>[2026-09-01 23:10:19] User logged in: satyam.snagghjyoti@gmail.com (admin).</div>
          </div>
        </div>
      )}

    </div>
  );
};
