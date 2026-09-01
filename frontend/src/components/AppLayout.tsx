import React, { useState, useEffect } from 'react';
import {
  Globe,
  Mountain,
  LayoutGrid,
  TriangleAlert,
  BrainCircuit,
  History,
  LifeBuoy,
  Radio,
  Activity,
  BarChart2,
  Bell,
  FileText,
  ShieldCheck,
  Network,
  Menu,
  X,
  Languages,
  ChevronDown,
  Volume2,
  VolumeX,
  AlertTriangle,
  Siren,
  User,
  LogOut,
  Sparkles
} from 'lucide-react';
import { useApp } from '../context/AppContext';
import { LANGUAGES } from '../lib/i18n';
import { EmergencyMode } from './EmergencyMode';
import { AppLogo } from './AppLogo';
import { AIAssistantDrawer } from './AIAssistantDrawer';

export const AppLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { 
    activeTab, setActiveTab, lang, setLang, t, 
    emergency, triggerEmergency, clearEmergency, 
    demoMode, setDemoMode, user, logoutUser 
  } = useApp();

  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);
  const [simulatedOffline, setSimulatedOffline] = useState<boolean>(false);

  const NAV_ITEMS = [
    { id: 'landing', label: 'Home Overview', icon: Mountain },
    { id: 'dashboard', label: t('dashboard') || 'Command Center', icon: LayoutGrid },
    { id: 'warnings', label: t('warnings') || 'Early Warnings', icon: TriangleAlert },
    { id: 'prediction', label: t('prediction') || 'AI Prediction', icon: BrainCircuit },
    { id: 'replay', label: t('replay') || 'Event Replay', icon: History },
    { id: 'evacuation', label: t('evacuation') || 'Evacuation', icon: LifeBuoy },
    { id: 'sensors', label: t('sensors') || 'Sensors', icon: Radio },
    { id: 'data-health', label: t('dataHealth') || 'Data Health', icon: Activity },
    { id: 'analytics', label: t('analytics') || 'Analytics', icon: BarChart2 },
    { id: 'notifications', label: t('notifications') || 'Notifications', icon: Bell },
    { id: 'report', label: t('reportHazard') || 'Report Hazard', icon: FileText },
    { id: 'admin', label: t('admin') || 'Admin Panel', icon: ShieldCheck },
    { id: 'architecture', label: t('architecture') || 'Architecture', icon: Network },
  ];

  return (
    <div className="min-h-screen bg-[#08090c] text-[#f1f5f9] flex flex-col font-sans selection:bg-emerald-500 selection:text-slate-950">
      
      {/* Emergency Mode Top Override */}
      <EmergencyMode />

      {/* Top Header Navigation Bar */}
      <header className="h-14 bg-[#08090c] border-b border-white/[0.08] px-4 sm:px-6 flex items-center justify-between z-30 sticky top-0">
        
        {/* Left: Mobile Menu Toggle + Online Pill */}
        <div className="flex items-center space-x-3">
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-1.5 rounded-lg bg-white/[0.04] text-slate-300 hover:text-white"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>

          {/* ONLINE / Simulate Offline Pill */}
          <div className="flex items-center bg-black/60 border border-white/[0.08] rounded-full p-0.5 text-xs font-semibold">
            <span className={`px-2.5 py-0.5 rounded-full flex items-center space-x-1.5 ${
              !simulatedOffline ? 'text-emerald-400 bg-emerald-950/40' : 'text-slate-400'
            }`}>
              <span className={`w-1.5 h-1.5 rounded-full ${!simulatedOffline ? 'bg-emerald-400 animate-pulse' : 'bg-slate-500'}`} />
              <span className="text-[11px] font-bold">ONLINE</span>
            </span>

            <button
              onClick={() => setSimulatedOffline(!simulatedOffline)}
              className="px-2.5 py-0.5 rounded-full text-slate-400 hover:text-slate-200 text-[11px] transition-colors"
            >
              {simulatedOffline ? (t('reconnectOnline') || 'Re-connect Online') : (t('simulateOffline') || 'Simulate Offline')}
            </button>
          </div>
        </div>

        {/* Right Action Ribbon */}
        <div className="flex items-center space-x-2.5">
          
          {/* Language Switcher */}
          <div className="flex items-center space-x-1.5 bg-black/60 border border-white/[0.08] rounded-lg px-2.5 py-1 text-xs text-slate-300">
            <Globe className="w-3.5 h-3.5 text-slate-400 shrink-0" />
            <select
              value={lang}
              onChange={(e) => setLang(e.target.value)}
              className="bg-transparent text-white font-medium text-xs focus:outline-none cursor-pointer pr-1"
            >
              {LANGUAGES.map((l) => (
                <option key={l.code} value={l.code} className="bg-[#0e1015] text-white">
                  {l.nativeLabel} ({l.label})
                </option>
              ))}
            </select>
          </div>

          {/* SIH DEMO MODE Button with clean Lucide icon */}
          <button
            onClick={() => setDemoMode(!demoMode)}
            className={`flex items-center space-x-1.5 px-3 py-1.5 rounded-lg text-xs font-bold border transition-all ${
              demoMode
                ? 'bg-amber-500 text-black border-amber-400'
                : 'bg-black/60 text-amber-400 border-amber-500/40 hover:bg-amber-950/30'
            }`}
          >
            <AlertTriangle className="w-3.5 h-3.5 text-amber-400 shrink-0" />
            <span>{t('sihDemoMode') || 'SIH DEMO MODE'}</span>
          </button>

          {/* Emergency Mode Button with clean Lucide icon */}
          <button
            onClick={() => {
              if (emergency?.active) {
                clearEmergency();
              } else {
                triggerEmergency('Critical Evacuation Directive', 'North Sikkim & Dima Hasao Sectors');
              }
            }}
            className={`flex items-center space-x-1.5 px-3 py-1.5 rounded-lg text-xs font-bold border transition-all ${
              emergency?.active 
                ? 'bg-red-600 text-white border-red-400 animate-pulse' 
                : 'bg-red-950/40 hover:bg-red-900/60 text-red-400 border-red-500/40'
            }`}
          >
            <Siren className="w-3.5 h-3.5 text-red-400 shrink-0" />
            <span>{t('emergencyMode') || 'Emergency Mode'}</span>
          </button>

          {/* Login / Profile State */}
          {user ? (
            <div className="flex items-center space-x-1.5 bg-[#12151b] border border-white/[0.08] rounded-lg px-2.5 py-1 text-xs">
              <div className="w-5 h-5 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center font-bold text-[10px]">
                {user.name.charAt(0)}
              </div>
              <span className="text-white font-semibold text-[11px] truncate max-w-[90px]">{user.name}</span>
              <button 
                onClick={logoutUser} 
                className="text-slate-400 hover:text-red-400 pl-1"
                title="Sign Out"
              >
                <LogOut className="w-3.5 h-3.5" />
              </button>
            </div>
          ) : (
            <button
              onClick={() => setActiveTab('login')}
              className="px-4 py-1.5 rounded-lg bg-emerald-400 hover:bg-emerald-300 text-slate-950 font-black text-xs shadow-lg shadow-emerald-500/20 transition-all"
            >
              {t('login') || 'Login'}
            </button>
          )}

        </div>

      </header>

      {/* Main Workspace: Sidebar + Content */}
      <div className="flex-1 flex overflow-hidden">
        
        {/* Left Pitch-Black Sidebar */}
        <aside className="hidden lg:flex flex-col w-56 bg-[#060709] border-r border-white/[0.08] shrink-0 justify-between select-none">
          
          <div>
            {/* Brand Header with Custom Logo */}
            <div 
              onClick={() => setActiveTab('landing')}
              className="px-4 py-3.5 cursor-pointer border-b border-white/[0.04] flex items-center space-x-3 hover:bg-white/[0.02] transition-colors"
            >
              <AppLogo size="sm" />
              <div>
                <div className="text-[12px] font-black tracking-wide text-white uppercase leading-tight">
                  {t('appName') || 'NER LANDSLIDE'}
                </div>
                <div className="text-[12px] font-black tracking-wide text-emerald-400 uppercase leading-tight">
                  {t('appSub') || 'EARLY WARNING'}
                </div>
              </div>
            </div>

            {/* Navigation Links */}
            <nav className="p-2 space-y-0.5">
              {NAV_ITEMS.map((item) => {
                const Icon = item.icon;
                const isActive = activeTab === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => setActiveTab(item.id)}
                    className={`w-full flex items-center space-x-3 px-3.5 py-2.5 text-xs font-medium transition-colors text-left relative ${
                      isActive 
                        ? 'text-white bg-white/[0.05] border-l-2 border-emerald-400 font-semibold' 
                        : 'text-slate-400 hover:text-slate-200 hover:bg-white/[0.02]'
                    }`}
                  >
                    <Icon className={`w-4 h-4 shrink-0 ${isActive ? 'text-white' : 'text-slate-400'}`} />
                    <span className="truncate">{item.label}</span>
                  </button>
                );
              })}
            </nav>
          </div>

          {/* Footer Prototype Tag */}
          <div className="p-4 border-t border-white/[0.04] text-[11px] text-slate-500 font-mono tracking-wider">
            v0.9 PROTOTYPE
          </div>

        </aside>

        {/* Mobile Navigation Dropdown */}
        {mobileMenuOpen && (
          <div className="lg:hidden fixed inset-0 top-14 z-40 bg-[#060709]/95 backdrop-blur-md p-4 overflow-y-auto">
            <div className="grid grid-cols-2 gap-2">
              {NAV_ITEMS.map((item) => (
                <button
                  key={item.id}
                  onClick={() => {
                    setActiveTab(item.id);
                    setMobileMenuOpen(false);
                  }}
                  className={`p-3 rounded-lg text-xs font-semibold flex items-center space-x-2 text-left ${
                    activeTab === item.id 
                      ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/40' 
                      : 'bg-white/[0.03] text-slate-300'
                  }`}
                >
                  <item.icon className="w-4 h-4" />
                  <span>{item.label}</span>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Main Content Area */}
        <main className="flex-1 overflow-y-auto p-4 sm:p-6 lg:p-7 relative bg-[#08090c]">
          {children}
          <AIAssistantDrawer />
        </main>

      </div>

    </div>
  );
};
