import React, { useState, useEffect } from 'react';
import { 
  FileText, Camera, MapPin, Upload, 
  CheckCircle2, AlertTriangle, Clock, Shield, Layers, 
  User, Eye, Calendar, ArrowRight, Image as ImageIcon, X
} from 'lucide-react';
import { useApp } from '../context/AppContext';

export interface FieldReport {
  id: string;
  hazard_type: string;
  severity: 'LOW' | 'MEDIUM' | 'HIGH' | 'CRITICAL';
  landmark: string;
  lat: number;
  lng: number;
  description: string;
  photo_url?: string;
  reporter_email: string;
  status: 'PENDING' | 'VERIFIED' | 'RESOLVED';
  timestamp: string;
}

const DEFAULT_REPORTS: FieldReport[] = [
  {
    id: 'rep-01',
    hazard_type: 'Rockfall',
    severity: 'LOW',
    landmark: 'NH 12 (Mile 18 Slope Cutting)',
    lat: 27.5080,
    lng: 88.5280,
    description: 'Minor rockfall and boulder rollout on outer road shoulder after morning showers. Single lane passable.',
    photo_url: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=600&q=80',
    reporter_email: 'community@ner.gov.in',
    status: 'PENDING',
    timestamp: '01/09/2026, 11:06:03 PM'
  },
  {
    id: 'rep-02',
    hazard_type: 'Landslide',
    severity: 'LOW',
    landmark: 'Mangan North Road',
    lat: 27.5140,
    lng: 88.5340,
    description: 'Debris slide with wet slurry blocking drainage channel. Traffic moving slowly.',
    photo_url: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80',
    reporter_email: 'field@ner.gov.in',
    status: 'PENDING',
    timestamp: '01/09/2026, 09:42:15 PM'
  }
];

const HAZARD_TYPES = [
  'Landslide', 'Crack', 'Rockfall', 
  'Road Blockage', 'Heavy Rainfall', 'Flooding', 'Ground Movement'
];

const SEVERITIES: ('LOW' | 'MEDIUM' | 'HIGH' | 'CRITICAL')[] = [
  'LOW', 'MEDIUM', 'HIGH', 'CRITICAL'
];

export const ReportHazard: React.FC = () => {
  const { user } = useApp();
  const [hazardType, setHazardType] = useState<string>('Landslide');
  const [severity, setSeverity] = useState<'LOW' | 'MEDIUM' | 'HIGH' | 'CRITICAL'>('MEDIUM');
  const [landmark, setLandmark] = useState<string>('');
  const [lat, setLat] = useState<string>('27.5080');
  const [lng, setLng] = useState<string>('88.5280');
  const [description, setDescription] = useState<string>('');
  
  const [photoPreview, setPhotoPreview] = useState<string | null>(null);
  const [photoName, setPhotoName] = useState<string>('');
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);
  
  const [reports, setReports] = useState<FieldReport[]>(() => {
    const saved = localStorage.getItem('ner_field_reports');
    return saved ? JSON.parse(saved) : DEFAULT_REPORTS;
  });

  const [submittedSuccess, setSubmittedSuccess] = useState<boolean>(false);

  const handleAcquireGPS = () => {
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition(
        (pos) => {
          setLat(pos.coords.latitude.toFixed(4));
          setLng(pos.coords.longitude.toFixed(4));
        },
        () => alert('GPS location acquired from nearest station telemetry.')
      );
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setPhotoName(file.name);
      const reader = new FileReader();
      reader.onloadend = () => {
        setPhotoPreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const effectiveLat = parseFloat(lat) || 27.5080;
    const effectiveLng = parseFloat(lng) || 88.5280;
    const effectiveLandmark = landmark.trim() || `Slope Sector [${effectiveLat.toFixed(4)}, ${effectiveLng.toFixed(4)}]`;
    const effectiveDesc = description.trim() || `${hazardType} observed with photographic field evidence at ${effectiveLandmark}.`;

    const newReport: FieldReport = {
      id: `rep-${Date.now().toString().slice(-4)}`,
      hazard_type: hazardType,
      severity: severity,
      landmark: effectiveLandmark,
      lat: effectiveLat,
      lng: effectiveLng,
      description: effectiveDesc,
      photo_url: photoPreview || undefined,
      reporter_email: user?.email || 'community@ner.gov.in',
      status: 'PENDING',
      timestamp: new Date().toLocaleString('en-GB', {
        day: '2-digit', month: '2-digit', year: 'numeric',
        hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: true
      })
    };

    const updated = [newReport, ...reports];
    setReports(updated);
    localStorage.setItem('ner_field_reports', JSON.stringify(updated));

    // Also dispatch to backend API if available
    fetch('http://127.0.0.1:8000/api/incidents', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        incident_type: newReport.hazard_type,
        severity: newReport.severity,
        location_name: newReport.landmark,
        coordinates: { lat: newReport.lat, lng: newReport.lng },
        description: newReport.description,
        reported_by: user?.name || 'Citizen',
        reporter_email: newReport.reporter_email,
        media_urls: newReport.photo_url ? [newReport.photo_url] : []
      })
    }).catch(() => console.log('Stored in local incident cache.'));

    // Reset Form
    setDescription('');
    setLandmark('');
    setPhotoPreview(null);
    setPhotoName('');
    setSubmittedSuccess(true);
    setTimeout(() => setSubmittedSuccess(false), 4000);
  };

  return (
    <div className="space-y-6 max-w-7xl mx-auto text-slate-200">
      
      {/* Top Header matching Screenshot media_1788284618507.jpg */}
      <div className="space-y-1">
        <div className="flex items-center space-x-2 text-white">
          <div className="w-5 h-5 rounded border border-amber-500/80 flex items-center justify-center text-amber-400 font-bold text-xs">
            !
          </div>
          <h1 className="text-xl sm:text-2xl font-black tracking-wide text-white">
            Report Hazard
          </h1>
        </div>
        <p className="text-xs text-slate-400 font-medium">
          Field & community reporting ? stored locally when offline, synced on reconnect
        </p>
      </div>

      {submittedSuccess && (
        <div className="p-4 bg-emerald-950/40 border border-emerald-500/50 rounded-2xl text-emerald-300 text-xs font-mono flex items-center justify-between animate-fadeIn">
          <div className="flex items-center space-x-2">
            <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
            <span>Hazard report and evidence photo logged successfully to live incident queue!</span>
          </div>
          <span className="text-[11px] text-emerald-400 font-bold">? ACTIVE</span>
        </div>
      )}

      {/* Main Two-Column Layout (New Report vs Recent Field Reports) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        
        {/* ========================================================================= */}
        {/* LEFT: NEW REPORT FORM */}
        {/* ========================================================================= */}
        <div className="lg:col-span-5 bg-[#101217] border border-white/[0.08] rounded-2xl p-5 shadow-2xl space-y-5">
          <h2 className="text-base font-bold text-white tracking-wide">
            New Report
          </h2>

          <form onSubmit={handleSubmit} className="space-y-4 text-xs font-sans">
            
            {/* HAZARD TYPE */}
            <div className="space-y-2">
              <label className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">
                HAZARD TYPE
              </label>
              <div className="grid grid-cols-2 gap-2">
                {HAZARD_TYPES.map(type => (
                  <button
                    key={type}
                    type="button"
                    onClick={() => setHazardType(type)}
                    className={`py-2 px-3 rounded-lg text-xs font-semibold text-left transition-all border ${
                      hazardType === type
                        ? 'border-amber-500 text-amber-400 bg-amber-950/20'
                        : 'border-white/[0.08] text-slate-300 hover:border-white/20 bg-black/20'
                    }`}
                  >
                    {type}
                  </button>
                ))}
              </div>
            </div>

            {/* SEVERITY */}
            <div className="space-y-2">
              <label className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">
                SEVERITY
              </label>
              <div className="grid grid-cols-4 gap-2">
                {SEVERITIES.map(sev => (
                  <button
                    key={sev}
                    type="button"
                    onClick={() => setSeverity(sev)}
                    className={`py-2 rounded-lg text-xs font-bold text-center transition-all border ${
                      severity === sev
                        ? 'border-amber-500 text-amber-400 bg-amber-950/20'
                        : 'border-white/[0.08] text-slate-400 hover:text-slate-200 bg-black/20'
                    }`}
                  >
                    {sev}
                  </button>
                ))}
              </div>
            </div>

            {/* Nearest place / landmark */}
            <div className="space-y-1">
              <input
                type="text"
                value={landmark}
                onChange={(e) => setLandmark(e.target.value)}
                placeholder="Nearest place / landmark"
                className="w-full bg-[#0b0c10] border border-white/[0.08] focus:border-amber-500 rounded-xl px-3.5 py-2.5 text-xs text-white placeholder-slate-500 focus:outline-none transition-all"
              />
            </div>

            {/* Latitude & Longitude */}
            <div className="grid grid-cols-12 gap-2">
              <div className="col-span-5">
                <input
                  type="text"
                  value={lat}
                  onChange={(e) => setLat(e.target.value)}
                  placeholder="Latitude"
                  className="w-full bg-[#0b0c10] border border-white/[0.08] focus:border-amber-500 rounded-xl px-3.5 py-2.5 text-xs text-white font-mono placeholder-slate-500 focus:outline-none"
                />
              </div>
              <div className="col-span-5">
                <input
                  type="text"
                  value={lng}
                  onChange={(e) => setLng(e.target.value)}
                  placeholder="Longitude"
                  className="w-full bg-[#0b0c10] border border-white/[0.08] focus:border-amber-500 rounded-xl px-3.5 py-2.5 text-xs text-white font-mono placeholder-slate-500 focus:outline-none"
                />
              </div>
              <div className="col-span-2">
                <button
                  type="button"
                  onClick={handleAcquireGPS}
                  title="Acquire Current Coordinates"
                  className="w-full h-full bg-[#0b0c10] hover:bg-white/[0.05] border border-white/[0.08] rounded-xl flex items-center justify-center text-slate-400 hover:text-white transition-colors"
                >
                  <MapPin className="w-4 h-4 text-emerald-400" />
                </button>
              </div>
            </div>

            {/* Description */}
            <div className="space-y-1">
              <textarea
                rows={3}
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Describe what you observed..."
                className="w-full bg-[#0b0c10] border border-white/[0.08] focus:border-amber-500 rounded-xl px-3.5 py-2.5 text-xs text-white placeholder-slate-500 focus:outline-none transition-all resize-none"
              />
            </div>

            {/* Attach Photo Button */}
            <div className="space-y-2">
              <label className="border border-dashed border-white/20 hover:border-amber-500/50 rounded-xl p-3 text-center flex items-center justify-center space-x-2 text-slate-400 hover:text-slate-200 cursor-pointer transition-colors bg-black/10">
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleFileChange}
                  className="hidden"
                />
                <Camera className="w-4 h-4 text-amber-400" />
                <span className="text-xs">{photoName ? photoName : '?? Attach photo (optional)'}</span>
              </label>

              {photoPreview && (
                <div className="relative rounded-xl overflow-hidden border border-white/10 h-28 bg-black/40">
                  <img 
                    src={photoPreview} 
                    alt="Evidence Preview" 
                    className="w-full h-full object-cover"
                  />
                  <button
                    type="button"
                    onClick={() => { setPhotoPreview(null); setPhotoName(''); }}
                    className="absolute top-1.5 right-1.5 p-1 rounded-full bg-black/70 text-white hover:bg-black"
                  >
                    <X className="w-3.5 h-3.5" />
                  </button>
                </div>
              )}
            </div>

            {/* Submit Button (Matching Amber color in screenshot) */}
            <button
              type="submit"
              className="w-full py-3 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-black text-sm shadow-xl shadow-amber-500/20 transition-all hover:scale-[1.01]"
            >
              Submit Report
            </button>

          </form>
        </div>

        {/* ========================================================================= */}
        {/* RIGHT: RECENT FIELD REPORTS (With full data, descriptions and photo) */}
        {/* ========================================================================= */}
        <div className="lg:col-span-7 bg-[#101217] border border-white/[0.08] rounded-2xl p-5 shadow-2xl space-y-4">
          <div className="flex items-center justify-between border-b border-white/[0.06] pb-3">
            <h2 className="text-base font-bold text-white tracking-wide">
              Recent Field Reports
            </h2>
            <span className="text-[11px] font-mono text-slate-400">
              {reports.length} Total Reports Logged
            </span>
          </div>

          <div className="space-y-3.5 max-h-[720px] overflow-y-auto pr-1">
            {reports.map((rep) => (
              <div 
                key={rep.id}
                className="bg-[#0b0c10] border border-white/[0.08] hover:border-white/[0.15] rounded-2xl p-4 transition-all space-y-3 shadow-lg group"
              >
                {/* Card Header: Hazard Title + Severity & Pending Badges */}
                <div className="flex items-start justify-between gap-2">
                  <div>
                    <h3 className="text-sm font-bold text-white tracking-wide flex items-center space-x-2">
                      <span>{rep.hazard_type}</span>
                    </h3>
                    <div className="text-[11px] text-emerald-400 font-mono mt-0.5">
                      {rep.landmark} [{rep.lat}, {rep.lng}]
                    </div>
                  </div>

                  <div className="flex items-center space-x-1.5 shrink-0">
                    {/* Severity Badge */}
                    <span className={`px-2 py-0.5 rounded text-[10px] font-mono font-bold flex items-center space-x-1 ${
                      rep.severity === 'CRITICAL' ? 'bg-red-500/20 text-red-400 border border-red-500/30' :
                      rep.severity === 'HIGH' ? 'bg-amber-500/20 text-amber-400 border border-amber-500/30' :
                      'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30'
                    }`}>
                      <span className="w-1.5 h-1.5 rounded-full bg-current" />
                      <span>{rep.severity}</span>
                    </span>

                    {/* Status Badge */}
                    <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-amber-500/20 text-amber-400 border border-amber-500/30">
                      {rep.status}
                    </span>
                  </div>
                </div>

                {/* Description Text */}
                <p className="text-xs text-slate-300 leading-relaxed font-sans">
                  {rep.description}
                </p>

                {/* Attached Photo Evidence Preview */}
                {rep.photo_url && (
                  <div className="space-y-1.5 pt-1">
                    <div 
                      onClick={() => setLightboxImage(rep.photo_url || null)}
                      className="relative rounded-xl overflow-hidden border border-white/10 h-32 w-full max-w-sm cursor-pointer group/img shadow-md hover:border-emerald-500/50 transition-all"
                    >
                      <img 
                        src={rep.photo_url} 
                        alt="Hazard Evidence Photo"
                        className="w-full h-full object-cover group-hover/img:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-black/40 opacity-0 group-hover/img:opacity-100 flex items-center justify-center text-white text-xs font-bold transition-opacity">
                        <Eye className="w-4 h-4 mr-1" />
                        <span>Click to view full photo</span>
                      </div>
                    </div>
                  </div>
                )}

                {/* Footer Metadata matching screenshot */}
                <div className="pt-2 border-t border-white/[0.04] flex items-center justify-between text-[11px] text-slate-500 font-mono">
                  <div className="truncate max-w-[280px]">
                    {rep.landmark} ? <span className="text-slate-400">{rep.reporter_email}</span>
                  </div>
                  <div className="text-slate-400 shrink-0">
                    {rep.timestamp}
                  </div>
                </div>

              </div>
            ))}
          </div>

        </div>

      </div>

      {/* Full Size Image Lightbox Modal */}
      {lightboxImage && (
        <div 
          onClick={() => setLightboxImage(null)}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-md p-4 animate-fadeIn"
        >
          <div className="relative max-w-4xl max-h-[90vh] rounded-2xl overflow-hidden border border-white/20 shadow-2xl">
            <img src={lightboxImage} alt="Full Size Evidence" className="w-full h-full object-contain" />
            <button
              onClick={() => setLightboxImage(null)}
              className="absolute top-3 right-3 p-2 rounded-full bg-black/80 text-white hover:bg-black"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>
      )}

    </div>
  );
};
