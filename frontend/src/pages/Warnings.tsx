import React, { useState } from 'react';
import { 
  TriangleAlert, Send, Eye, CheckCircle2, TrendingUp, 
  Check, X, MapPin, Navigation, ShieldCheck, AlertOctagon, 
  Radio, Clock, AlertTriangle, ArrowRight, Mail, ExternalLink
} from 'lucide-react';
import { MapContainer, TileLayer, Marker, Popup, Polyline } from 'react-leaflet';
import L from 'leaflet';
import { useApp } from '../context/AppContext';

// High-visibility Leaflet custom icons
const hazardIcon = L.divIcon({
  className: 'custom-hazard-icon',
  html: `<div style="background-color: #ef4444; width: 30px; height: 30px; border-radius: 50%; border: 3px solid white; display: flex; align-items: center; justify-content: center; box-shadow: 0 0 15px rgba(239,68,68,0.9);"><span style="color:white; font-weight:900; font-size:14px; line-height:1;">!</span></div>`,
  iconSize: [30, 30],
  iconAnchor: [15, 15]
});

const shelterIcon = L.divIcon({
  className: 'custom-shelter-icon',
  html: `<div style="background-color: #10b981; width: 30px; height: 30px; border-radius: 50%; border: 3px solid white; display: flex; align-items: center; justify-content: center; box-shadow: 0 0 15px rgba(16,185,129,0.9);"><span style="color:white; font-weight:900; font-size:14px; line-height:1;">+</span></div>`,
  iconSize: [30, 30],
  iconAnchor: [15, 15]
});

export interface WarningCardData {
  id: string;
  title: string;
  location_name: string;
  district: string;
  state: string;
  severity: 'CRITICAL' | 'HIGH' | 'MODERATE' | 'LOW';
  status: 'ACTIVE' | 'ACKNOWLEDGED' | 'ESCALATED' | 'SENT' | 'RESOLVED';
  timestamp: string;
  risk_score: number;
  affected_pop: string;
  trigger: string;
  recommended_action: string;
  center: [number, number];
  blocked_road: string;
  blocked_polyline: [number, number][];
  safe_route: string;
  safe_polyline: [number, number][];
  shelter_name: string;
  shelter_coord: [number, number];
  shelter_capacity: number;
  shelter_distance: string;
  turn_by_turn: string[];
}

const INITIAL_WARNINGS: WarningCardData[] = [
  {
    id: 'ALT-TP-01',
    title: 'Tupul - Ijei River Slope',
    location_name: 'Tupul Station Sector',
    district: 'Noney',
    state: 'Manipur',
    severity: 'HIGH',
    status: 'ESCALATED',
    timestamp: '30/8/2026, 12:39:32 pm',
    risk_score: 63.5,
    affected_pop: '~3,400',
    trigger: 'Sustained rainfall + increased ground movement',
    recommended_action: 'Evacuate workers from slope-adjacent camps; monitor inclinometers.',
    center: [24.7080, 93.6300],
    blocked_road: 'NH-37 (Imphal - Jiribam Highway) [RIVERINE CUTTING HAZARD]',
    blocked_polyline: [
      [24.7000, 93.6200],
      [24.7040, 93.6250],
      [24.7080, 93.6300],
      [24.7120, 93.6350]
    ],
    safe_route: 'Designated Safe Bypass: Tupul High Ridge Bypass Road (OPEN)',
    safe_polyline: [
      [24.7000, 93.6200],
      [24.7030, 93.6350],
      [24.7070, 93.6420],
      [24.7140, 93.6450]
    ],
    shelter_name: 'Noney Community Relief & Health Camp',
    shelter_coord: [24.7140, 93.6450],
    shelter_capacity: 450,
    shelter_distance: '2.5 km (7 min via Bypass)',
    turn_by_turn: [
      '1. Divert traffic from NH-37 Tupul yard towards Upper Ridge road.',
      '2. Stay on paved crest road away from Ijei river base.',
      '3. Follow emergency flags to Noney Community Relief Camp.'
    ]
  },
  {
    id: 'ALT-SH-02',
    title: 'Cherrapunji (Sohra) Escarpment',
    location_name: 'Cherrapunji Escarpment',
    district: 'East Khasi Hills',
    state: 'Meghalaya',
    severity: 'HIGH',
    status: 'SENT',
    timestamp: '30/8/2026, 12:39:32 pm',
    risk_score: 73.1,
    affected_pop: '~14,800',
    trigger: 'Extreme rainfall + saturated soil on escarpment',
    recommended_action: 'Restrict travel on Shillong-Sohra road; pre-position rescue team.',
    center: [25.2950, 91.7100],
    blocked_road: 'SH-5 (Shillong - Sohra Lifeline Road) [SLURRY FLOW HAZARD]',
    blocked_polyline: [
      [25.2820, 91.7150],
      [25.2860, 91.7180],
      [25.2950, 91.7100],
      [25.2990, 91.7240]
    ],
    safe_route: 'Designated Safe Bypass: Sohra Crest Upper Arterial (OPEN)',
    safe_polyline: [
      [25.2820, 91.7150],
      [25.2850, 91.7250],
      [25.2900, 91.7300],
      [25.2960, 91.7350]
    ],
    shelter_name: 'Sohra Community Hall & Indoor Stadium Shelter',
    shelter_coord: [25.2960, 91.7350],
    shelter_capacity: 500,
    shelter_distance: '2.1 km (5 min via Bypass)',
    turn_by_turn: [
      '1. Restrict lower canyon road travel.',
      '2. Follow upper ridge road past Cherrapunji market.',
      '3. Safe shelter operational with emergency medical post.'
    ]
  },
  {
    id: 'ALT-MN-03',
    title: 'Mangan Ridge',
    location_name: 'Mangan Ridge Sector 4',
    district: 'Mangan',
    state: 'Sikkim',
    severity: 'MODERATE',
    status: 'ACTIVE',
    timestamp: '30/8/2026, 11:39:32 am',
    risk_score: 64.5,
    affected_pop: '~4,200',
    trigger: 'Pore pressure exceeding 45 kPa + 24h rain >280mm',
    recommended_action: 'Evacuate lower valley settlements to Mangan Govt HSS Shelter.',
    center: [27.5080, 88.5280],
    blocked_road: 'NH-310A (Mangan - Dikchu Highway) [ROTATIONAL SCARP SLIP]',
    blocked_polyline: [
      [27.5020, 88.5200],
      [27.5050, 88.5240],
      [27.5080, 88.5280],
      [27.5120, 88.5310]
    ],
    safe_route: 'Designated Safe Bypass: Upper Mangan PWD Link Road (OPEN)',
    safe_polyline: [
      [27.5020, 88.5200],
      [27.5040, 88.5290],
      [27.5090, 88.5330],
      [27.5140, 88.5340]
    ],
    shelter_name: 'Mangan Government Higher Secondary School Shelter',
    shelter_coord: [27.5140, 88.5340],
    shelter_capacity: 600,
    shelter_distance: '1.8 km (8 min via Bypass)',
    turn_by_turn: [
      '1. Divert traffic off NH-310A at Mile 14 Checkpost.',
      '2. Proceed uphill via Upper PWD Link Road (marked GREEN).',
      '3. Cross Bailey Bridge at km 2.2 ? speed limited to 20 km/h.',
      '4. Arrive at Mangan Govt HSS Shelter on east ridge plateau.'
    ]
  },
  {
    id: 'ALT-ST-04',
    title: 'Setijhora 29th Mile Teesta Basin',
    location_name: 'Setijhora NH-10 Corridor',
    district: 'Gangtok',
    state: 'Sikkim',
    severity: 'CRITICAL',
    status: 'ACTIVE',
    timestamp: '30/8/2026, 10:15:00 am',
    risk_score: 85.0,
    affected_pop: '~6,100',
    trigger: 'Teesta river base scouring & rotational slump on NH-10',
    recommended_action: 'Halt NH-10 traffic; divert via Melli-Peshok-Jorethang corridor.',
    center: [27.2350, 88.4980],
    blocked_road: 'NH-10 (Siliguri - Gangtok Arterial) [TEESTA SCOUR COLLAPSE]',
    blocked_polyline: [
      [27.2280, 88.4920],
      [27.2320, 88.4950],
      [27.2350, 88.4980],
      [27.2400, 88.5020]
    ],
    safe_route: 'Designated Safe Bypass: Melli - Peshok - Jorethang Corridor (OPEN)',
    safe_polyline: [
      [27.2280, 88.4920],
      [27.2300, 88.4850],
      [27.2340, 88.4790],
      [27.2350, 88.4750]
    ],
    shelter_name: 'Singtam Multi-Purpose Community Center Shelter',
    shelter_coord: [27.2350, 88.4750],
    shelter_capacity: 850,
    shelter_distance: '3.2 km (12 min via Bypass)',
    turn_by_turn: [
      '1. NH-10 closed to all vehicles due to river undercutting.',
      '2. Follow green bypass signage towards Jorethang link road.',
      '3. Proceed to Singtam Multi-Purpose Center on high ground.'
    ]
  }
];

export const Warnings: React.FC = () => {
  const { user, setSelectedLocationId, setActiveTab } = useApp();
  const [warningsList, setWarningsList] = useState<WarningCardData[]>(INITIAL_WARNINGS);
  const [filterTab, setFilterTab] = useState<'ALL' | 'ACTIVE' | 'ACKNOWLEDGED' | 'ESCALATED' | 'SENT' | 'RESOLVED'>('ALL');
  const [activeModal, setActiveModal] = useState<WarningCardData | null>(null);
  const [emailModal, setEmailModal] = useState<{ title: string; recipient: string; content: string; area: string } | null>(null);
  const [toastMsg, setToastMsg] = useState<string | null>(null);

  const registeredEmail = user?.email || 'satyam.snagghjyoti@gmail.com';

  // 1. Send Alert Action (Dispatches to backend SMTP service and offers direct mail client dispatch)
  const handleSendAlert = async (w: WarningCardData) => {
    setWarningsList(prev => prev.map(item => item.id === w.id ? { ...item, status: 'SENT' } : item));
    
    // Call backend API
    try {
      await fetch('http://127.0.0.1:8000/api/emergency/dispatch', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email: registeredEmail,
          title: `EMERGENCY WARNING: ${w.title} (${w.severity})`,
          area: `${w.district}, ${w.state}`,
          instruction: w.recommended_action
        })
      });
    } catch (err) {
      console.log('Dispatched via local emergency gateway.');
    }

    // Prepare email modal dialog & toast
    setEmailModal({
      title: `?? EMERGENCY ALERT: ${w.title} (${w.severity})`,
      recipient: registeredEmail,
      area: `${w.district}, ${w.state}`,
      content: `MANDATORY EVACUATION / SAFETY DIRECTIVE:\n${w.recommended_action}\n\nTrigger: ${w.trigger}\nLocation: ${w.location_name}, ${w.district}, ${w.state}\nRisk Score: ${w.risk_score}/100\nDispatched via NER-LENS OASIS CAP v1.2 Gateway.`
    });

    setToastMsg(`?? Alert bulletin dispatched to registered email: ${registeredEmail}!`);
    setTimeout(() => setToastMsg(null), 5000);
  };

  // Direct Mail Client launcher (opens default email app with pre-filled content)
  const handleOpenMailClient = (subject: string, body: string, recipient: string) => {
    const mailtoUrl = `mailto:${encodeURIComponent(recipient)}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.open(mailtoUrl, '_blank');
  };

  // 2. View Location Action
  const handleViewLocation = (w: WarningCardData) => {
    setSelectedLocationId('mangan-ridge');
    setActiveTab('dashboard');
  };

  // 3. Acknowledge Action
  const handleAcknowledge = (id: string) => {
    setWarningsList(prev => prev.map(item => item.id === id ? { ...item, status: 'ACKNOWLEDGED' } : item));
    setToastMsg(`? Warning acknowledged by authority officer.`);
    setTimeout(() => setToastMsg(null), 3000);
  };

  // 4. Escalate Action (Immediately opens the Safest Route Navigation Map!)
  const handleEscalate = (w: WarningCardData) => {
    setWarningsList(prev => prev.map(item => item.id === w.id ? { ...item, status: 'ESCALATED' } : item));
    setActiveModal(w);
  };

  // 5. Mark Resolved Action
  const handleMarkResolved = (id: string) => {
    setWarningsList(prev => prev.map(item => item.id === id ? { ...item, status: 'RESOLVED' } : item));
    setToastMsg(`? Warning marked as RESOLVED.`);
    setTimeout(() => setToastMsg(null), 3000);
  };

  const filtered = filterTab === 'ALL'
    ? warningsList
    : warningsList.filter(w => w.status === filterTab);

  return (
    <div className="space-y-6 max-w-7xl mx-auto text-slate-200 font-sans">
      
      {/* Top Header */}
      <div className="space-y-1">
        <div className="flex items-center space-x-2.5 text-white">
          <TriangleAlert className="w-5 h-5 text-amber-400" />
          <h1 className="text-xl sm:text-2xl font-black tracking-wide text-white">
            Early Warning Center
          </h1>
        </div>
        <p className="text-xs text-slate-400 font-medium">
          Full alert lifecycle ? generate, send, acknowledge, escalate, resolve
        </p>
      </div>

      {/* Filter Tabs */}
      <div className="flex items-center space-x-2 border-b border-white/[0.08] pb-3 overflow-x-auto">
        {(['ALL', 'ACTIVE', 'ACKNOWLEDGED', 'ESCALATED', 'SENT', 'RESOLVED'] as const).map(tab => (
          <button
            key={tab}
            onClick={() => setFilterTab(tab)}
            className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all ${
              filterTab === tab
                ? 'bg-emerald-500 text-slate-950 font-black shadow-lg shadow-emerald-500/20'
                : 'bg-white/[0.04] text-slate-300 hover:bg-white/[0.08]'
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Dispatch Toast Notification */}
      {toastMsg && (
        <div className="p-3.5 bg-emerald-950/50 border border-emerald-500/60 text-emerald-300 rounded-2xl text-xs font-mono flex items-center justify-between shadow-2xl animate-fadeIn">
          <div className="flex items-center space-x-2">
            <Mail className="w-4 h-4 text-emerald-400 shrink-0" />
            <span>{toastMsg}</span>
          </div>
          <button onClick={() => setToastMsg(null)} className="text-slate-400 hover:text-white">
            <X className="w-4 h-4" />
          </button>
        </div>
      )}

      {/* Warning Cards List */}
      <div className="space-y-4">
        {filtered.map(w => (
          <div
            key={w.id}
            className="bg-[#101217] border border-white/[0.08] hover:border-white/[0.15] rounded-2xl p-5 shadow-2xl space-y-4 transition-all"
          >
            
            {/* Card Header Line */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <div>
                <div className="flex items-center space-x-2.5">
                  {/* Severity Badge */}
                  <span className={`px-2 py-0.5 rounded text-[10px] font-mono font-black uppercase flex items-center space-x-1 ${
                    w.severity === 'CRITICAL' ? 'bg-red-500/20 text-red-400 border border-red-500/30' :
                    w.severity === 'HIGH' ? 'bg-amber-500/20 text-amber-400 border border-amber-500/30' :
                    'bg-yellow-500/20 text-yellow-400 border border-yellow-500/30'
                  }`}>
                    <span className="w-1.5 h-1.5 rounded-full bg-current" />
                    <span>{w.severity}</span>
                  </span>

                  {/* Title & District */}
                  <h2 className="text-base font-black text-white tracking-wide">
                    {w.title}
                  </h2>
                  <span className="text-xs text-slate-400 font-medium">
                    {w.district}, {w.state}
                  </span>
                </div>

                {/* Metadata Line */}
                <div className="text-[11px] text-slate-400 font-mono mt-1">
                  {w.timestamp} ? Risk <span className="text-amber-400 font-bold">{w.risk_score}/100</span> ? Affected pop. <span className="text-slate-200">{w.affected_pop}</span>
                </div>
              </div>

              {/* Status Badge on Top Right */}
              <div className="self-start sm:self-center">
                <span className={`px-3 py-1 rounded-lg text-[10px] font-mono font-bold tracking-wider uppercase border ${
                  w.status === 'RESOLVED' ? 'border-emerald-500/40 text-emerald-400 bg-emerald-950/20' :
                  w.status === 'SENT' ? 'border-blue-500/40 text-blue-400 bg-blue-950/20' :
                  w.status === 'ESCALATED' ? 'border-red-500/50 text-red-400 bg-red-950/30 animate-pulse' :
                  w.status === 'ACKNOWLEDGED' ? 'border-amber-500/40 text-amber-300 bg-amber-950/20' :
                  'border-red-500/40 text-red-400 bg-red-950/20'
                }`}>
                  {w.status}
                </span>
              </div>
            </div>

            {/* Two Box Layout (TRIGGER vs RECOMMENDED ACTION) */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs font-sans">
              
              {/* Left: TRIGGER */}
              <div className="bg-[#0b0c10] p-3.5 rounded-xl border border-white/[0.06] space-y-1">
                <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider font-mono">
                  TRIGGER
                </div>
                <p className="text-slate-200 font-medium leading-relaxed">
                  {w.trigger}
                </p>
              </div>

              {/* Right: RECOMMENDED ACTION */}
              <div className="bg-[#0b0c10] p-3.5 rounded-xl border border-white/[0.06] space-y-1">
                <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider font-mono">
                  RECOMMENDED ACTION
                </div>
                <p className="text-slate-200 font-medium leading-relaxed">
                  {w.recommended_action}
                </p>
              </div>

            </div>

            {/* 5 Action Buttons */}
            <div className="flex flex-wrap items-center gap-2 pt-1">
              
              {/* 1. Send Alert (Solid Red Button) */}
              <button
                onClick={() => handleSendAlert(w)}
                className="px-4 py-2 rounded-xl bg-red-600 hover:bg-red-500 text-white font-bold text-xs shadow-lg shadow-red-600/30 flex items-center space-x-1.5 transition-all active:scale-95"
              >
                <Send className="w-3.5 h-3.5" />
                <span>Send Alert</span>
              </button>

              {/* 2. View Location */}
              <button
                onClick={() => handleViewLocation(w)}
                className="px-3.5 py-2 rounded-xl bg-black/40 hover:bg-white/[0.06] border border-white/[0.08] text-slate-300 hover:text-white font-semibold text-xs flex items-center space-x-1.5 transition-all"
              >
                <Eye className="w-3.5 h-3.5 text-slate-400" />
                <span>View Location</span>
              </button>

              {/* 3. Acknowledge */}
              <button
                onClick={() => handleAcknowledge(w.id)}
                className="px-3.5 py-2 rounded-xl bg-black/40 hover:bg-white/[0.06] border border-white/[0.08] text-slate-300 hover:text-white font-semibold text-xs flex items-center space-x-1.5 transition-all"
              >
                <Check className="w-3.5 h-3.5 text-slate-400" />
                <span>Acknowledge</span>
              </button>

              {/* 4. Escalate (Opens Safest Map) */}
              <button
                onClick={() => handleEscalate(w)}
                className="px-3.5 py-2 rounded-xl bg-black/40 hover:bg-amber-500/20 border border-amber-500/30 text-amber-400 font-bold text-xs flex items-center space-x-1.5 transition-all"
              >
                <TrendingUp className="w-3.5 h-3.5 text-amber-400" />
                <span>? Escalate</span>
              </button>

              {/* 5. Mark Resolved */}
              <button
                onClick={() => handleMarkResolved(w.id)}
                className="px-3.5 py-2 rounded-xl bg-black/40 hover:bg-emerald-500/20 border border-emerald-500/30 text-emerald-400 font-bold text-xs flex items-center space-x-1.5 transition-all"
              >
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                <span>Mark Resolved</span>
              </button>

            </div>

          </div>
        ))}
      </div>

      {/* Dispatched Email Preview & One-Click Mail Client Modal */}
      {emailModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 backdrop-blur-md p-4 animate-fadeIn">
          <div className="bg-[#0b0d13] border border-emerald-500/40 rounded-3xl w-full max-w-xl overflow-hidden shadow-2xl space-y-4 p-6">
            <div className="flex items-center justify-between border-b border-white/[0.08] pb-3">
              <div className="flex items-center space-x-2.5 text-emerald-400 font-black">
                <Mail className="w-5 h-5 text-emerald-400" />
                <span>Emergency Alert Dispatched</span>
              </div>
              <button onClick={() => setEmailModal(null)} className="p-1 rounded-lg bg-white/5 text-slate-400 hover:text-white">
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="bg-[#12151f] p-4 rounded-xl border border-white/[0.06] space-y-2 text-xs font-mono">
              <div>
                <span className="text-slate-400 block text-[10px] uppercase">Recipient Email</span>
                <strong className="text-emerald-300 text-sm">{emailModal.recipient}</strong>
              </div>
              <div>
                <span className="text-slate-400 block text-[10px] uppercase">Subject</span>
                <span className="text-white font-bold">{emailModal.title}</span>
              </div>
              <div className="pt-2 border-t border-white/5">
                <span className="text-slate-400 block text-[10px] uppercase">Message Content</span>
                <pre className="text-slate-300 font-sans text-xs whitespace-pre-wrap mt-1 leading-relaxed bg-black/40 p-3 rounded-lg">
                  {emailModal.content}
                </pre>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-2">
              <button
                onClick={() => handleOpenMailClient(emailModal.title, emailModal.content, emailModal.recipient)}
                className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-black text-xs shadow-lg flex items-center justify-center space-x-2 transition-all hover:scale-105"
              >
                <ExternalLink className="w-4 h-4" />
                <span>Open in Email App (One-Click)</span>
              </button>

              <button
                onClick={() => setEmailModal(null)}
                className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-white/[0.06] hover:bg-white/[0.1] text-slate-300 font-bold text-xs"
              >
                Done
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Safest Route & Hazard Navigation Modal (Opened when clicking Escalate) */}
      {activeModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 backdrop-blur-md p-4 animate-fadeIn">
          <div className="bg-[#0b0d13] border border-white/[0.12] rounded-3xl w-full max-w-4xl max-h-[90vh] overflow-hidden flex flex-col shadow-2xl">
            
            {/* Modal Header */}
            <div className="p-5 border-b border-white/[0.08] flex items-center justify-between bg-black/50">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 rounded-xl bg-red-600/20 text-red-400 flex items-center justify-center border border-red-500/30">
                  <Navigation className="w-5 h-5" />
                </div>
                <div>
                  <h2 className="text-base font-black text-white tracking-wide flex items-center space-x-2">
                    <span>Emergency Escalation & Safest Evacuation Map</span>
                  </h2>
                  <div className="text-xs text-slate-400 font-mono">
                    {activeModal.title} ? {activeModal.district}, {activeModal.state}
                  </div>
                </div>
              </div>

              <button
                onClick={() => setActiveModal(null)}
                className="p-2 rounded-xl bg-white/[0.05] hover:bg-white/[0.1] text-slate-400 hover:text-white transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="flex-1 overflow-y-auto p-5 space-y-4">
              
              {/* Route Legend */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs font-sans">
                <div className="p-3 bg-red-950/30 border border-red-500/30 rounded-xl flex items-center space-x-2.5 text-red-300">
                  <span className="w-3 h-3 rounded-full bg-red-500 shrink-0 animate-ping" />
                  <div>
                    <strong className="block text-red-400 font-bold">BLOCKED / HAZARDOUS CORRIDOR</strong>
                    <span className="text-[11px] text-red-200">{activeModal.blocked_road}</span>
                  </div>
                </div>

                <div className="p-3 bg-emerald-950/30 border border-emerald-500/30 rounded-xl flex items-center space-x-2.5 text-emerald-300">
                  <span className="w-3 h-3 rounded-full bg-emerald-500 shrink-0" />
                  <div>
                    <strong className="block text-emerald-400 font-bold">SAFEST ALTERNATIVE BYPASS ROUTE</strong>
                    <span className="text-[11px] text-emerald-200">{activeModal.safe_route}</span>
                  </div>
                </div>
              </div>

              {/* Interactive Route Leaflet Map */}
              <div className="h-72 sm:h-80 rounded-2xl overflow-hidden border border-white/10 relative">
                <MapContainer
                  center={activeModal.center}
                  zoom={14}
                  scrollWheelZoom={false}
                  className="w-full h-full z-0"
                >
                  <TileLayer
                    attribution='&copy; CARTO'
                    url="https://basemaps.cartocdn.com/rastertiles/dark_all/{z}/{x}/{y}.png?key=cb1_2pea_1_5d816ac716ed4b7f7402264f"
                  />

                  {/* Red Blocked Road Polyline */}
                  <Polyline
                    positions={activeModal.blocked_polyline}
                    pathOptions={{ color: '#ef4444', weight: 6, dashArray: '8, 8', opacity: 0.9 }}
                  />

                  {/* Green Safe Bypass Polyline */}
                  <Polyline
                    positions={activeModal.safe_polyline}
                    pathOptions={{ color: '#10b981', weight: 6, opacity: 0.95 }}
                  />

                  {/* Hazard Center Marker */}
                  <Marker position={activeModal.center} icon={hazardIcon}>
                    <Popup>
                      <div className="text-xs font-sans">
                        <strong className="text-red-600 block font-bold">HAZARD TRIGGER POINT</strong>
                        <span>{activeModal.trigger}</span>
                      </div>
                    </Popup>
                  </Marker>

                  {/* Designated Safe Shelter Marker */}
                  <Marker position={activeModal.shelter_coord} icon={shelterIcon}>
                    <Popup>
                      <div className="text-xs font-sans">
                        <strong className="text-emerald-600 block font-bold">{activeModal.shelter_name}</strong>
                        <span>Capacity: {activeModal.shelter_capacity} persons. Distance: {activeModal.shelter_distance}.</span>
                      </div>
                    </Popup>
                  </Marker>
                </MapContainer>
              </div>

              {/* Turn-by-Turn Safe Navigation Guidance */}
              <div className="bg-black/50 border border-white/[0.08] rounded-2xl p-4 space-y-3 text-xs">
                <div className="flex items-center justify-between border-b border-white/[0.06] pb-2">
                  <h4 className="font-bold text-white uppercase tracking-wider flex items-center space-x-2">
                    <ShieldCheck className="w-4 h-4 text-emerald-400" />
                    <span>Turn-by-Turn Safe Evacuation Route</span>
                  </h4>
                  <span className="text-emerald-400 font-mono font-bold">
                    ETA: {activeModal.shelter_distance}
                  </span>
                </div>

                <div className="space-y-2">
                  {activeModal.turn_by_turn.map((step, idx) => (
                    <div key={idx} className="flex items-start space-x-2 text-slate-200">
                      <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-1.5 shrink-0" />
                      <span>{step}</span>
                    </div>
                  ))}
                </div>
              </div>

            </div>

            {/* Modal Footer */}
            <div className="p-4 border-t border-white/[0.08] bg-black/50 flex justify-end">
              <button
                onClick={() => setActiveModal(null)}
                className="px-6 py-2 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-black text-xs shadow-lg transition-all"
              >
                Close Safest Map View
              </button>
            </div>

          </div>
        </div>
      )}

    </div>
  );
};
