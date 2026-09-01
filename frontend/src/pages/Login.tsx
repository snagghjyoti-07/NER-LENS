import React, { useState } from 'react';
import { Mountain, ShieldCheck, UserCheck, AlertCircle, ArrowRight } from 'lucide-react';
import { useApp } from '../context/AppContext';
import { AppLogo } from '../components/AppLogo';

export const Login: React.FC = () => {
  const { user, loginUser, setActiveTab } = useApp();
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [isRegister, setIsRegister] = useState<boolean>(false);
  const [name, setName] = useState<string>('');

  const DEMO_ACCOUNTS = [
    { label: "Admin", role: "ADMIN", email: "admin@ndma.gov.in", name: "System Administrator" },
    { label: "Disaster Officer", role: "DISTRICT_OFFICER", email: "officer@sikkim.gov.in", name: "District Disaster Officer (Mangan)" },
    { label: "Field Officer", role: "FIELD_OFFICER", email: "field@ner.gov.in", name: "Field Patrol (GREF/BRO)" },
    { label: "Community User", role: "COMMUNITY", email: "community@cherra.org", name: "Aapda Mitra Volunteer" }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    loginUser({
      name: name || email.split('@')[0],
      email: email,
      role: 'DISTRICT_OFFICER'
    });
    setActiveTab('dashboard');
  };

  const handleQuickLogin = (acc: typeof DEMO_ACCOUNTS[0]) => {
    loginUser({
      name: acc.name,
      email: acc.email,
      role: acc.role
    });
    setActiveTab('dashboard');
  };

  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center p-4">
      
      {/* Top Logo with Custom AppLogo */}
      <div className="flex items-center space-x-3 mb-6 select-none">
        <AppLogo size="lg" />
        <div>
          <div className="text-base font-black tracking-wide text-white uppercase leading-tight">
            NER LANDSLIDE
          </div>
          <div className="text-base font-black tracking-wide text-emerald-400 uppercase leading-tight">
            EARLY WARNING
          </div>
        </div>
      </div>

      {/* Main Login Card matching Screenshot */}
      <div className="w-full max-w-md bg-[#12151b] border border-white/[0.08] rounded-2xl p-7 shadow-2xl space-y-6">
        
        {/* Card Title & Subtitle */}
        <div className="space-y-1">
          <h2 className="text-xl font-bold text-white tracking-tight">
            {isRegister ? 'Create Community Account' : 'Authority Sign In'}
          </h2>
          <p className="text-xs text-slate-400">
            Role-based access ? Admin / Officer / Field / Community
          </p>
        </div>

        {/* Credentials Form */}
        <form onSubmit={handleSubmit} className="space-y-3.5">
          
          {isRegister && (
            <div className="space-y-1">
              <label className="text-xs font-semibold text-slate-300">Full Name</label>
              <input
                type="text"
                required
                placeholder="Enter your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full bg-[#0a0c10] border border-white/[0.1] rounded-xl px-3.5 py-2.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-emerald-400 transition-colors"
              />
            </div>
          )}

          <div className="space-y-1">
            <label className="text-xs font-semibold text-slate-300">Email</label>
            <input
              type="email"
              required
              placeholder="Email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full bg-[#0a0c10] border border-white/[0.1] rounded-xl px-3.5 py-2.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-emerald-400 transition-colors"
            />
          </div>

          <div className="space-y-1">
            <label className="text-xs font-semibold text-slate-300">Password</label>
            <input
              type="password"
              required
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full bg-[#0a0c10] border border-white/[0.1] rounded-xl px-3.5 py-2.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-emerald-400 transition-colors"
            />
          </div>

          {/* Solid Green Sign In Button */}
          <button
            type="submit"
            className="w-full py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-black text-xs shadow-lg shadow-emerald-500/20 transition-all active:scale-[0.99] mt-2"
          >
            {isRegister ? 'Sign Up' : 'Sign In'}
          </button>
        </form>

        {/* Toggle Mode Link */}
        <div className="text-center">
          <button
            type="button"
            onClick={() => setIsRegister(!isRegister)}
            className="text-xs text-emerald-400 hover:underline font-medium"
          >
            {isRegister ? 'Already have an account? Sign in' : 'New community user? Create account'}
          </button>
        </div>

        {/* ONE-CLICK DEMO ACCOUNTS */}
        <div className="space-y-3 pt-3 border-t border-white/[0.06]">
          <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider text-center">
            ONE-CLICK DEMO ACCOUNTS
          </div>

          <div className="grid grid-cols-2 gap-2.5">
            {DEMO_ACCOUNTS.map((acc, i) => (
              <button
                key={i}
                type="button"
                onClick={() => handleQuickLogin(acc)}
                className="py-2.5 px-3 rounded-xl bg-[#0a0c10] hover:bg-white/[0.05] border border-white/[0.08] text-xs font-semibold text-slate-200 hover:text-white transition-all text-center"
              >
                {acc.label}
              </button>
            ))}
          </div>
        </div>

      </div>

    </div>
  );
};
