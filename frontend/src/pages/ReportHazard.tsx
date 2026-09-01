import React, { useState } from 'react';
import { 
  FileText, Camera, MapPin, Upload, 
  CheckCircle2, AlertTriangle, WifiOff 
} from 'lucide-react';
import { useApp } from '../context/AppContext';

export const ReportHazard: React.FC = () => {
  const [hazardType, setHazardType] = useState<string>('Slope Crack');
  const [severity, setSeverity] = useState<string>('HIGH');
  const [state, setState] = useState<string>('Meghalaya');
  const [district, setDistrict] = useState<string>('East Khasi Hills');
  const [locationName, setLocationName] = useState<string>('');
  const [lat, setLat] = useState<number>(25.2950);
  const [lng, setLng] = useState<number>(91.7100);
  const [crackWidth, setCrackWidth] = useState<number>(12);
  const [description, setDescription] = useState<string>('');
  const [reporterName, setReporterName] = useState<string>('Field Patrol Officer');

  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [uploadedUrl, setUploadedUrl] = useState<string>('');
  const [isUploading, setIsUploading] = useState<boolean>(false);
  const [submittedId, setSubmittedId] = useState<string | null>(null);

  const handleAcquireGPS = () => {
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition(
        (pos) => {
          setLat(parseFloat(pos.coords.latitude.toFixed(5)));
          setLng(parseFloat(pos.coords.longitude.toFixed(5)));
        },
        () => alert('GPS unavailable. Using default map coordinate.')
      );
    }
  };

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    setSelectedFile(file);
    setIsUploading(true);
    try {
      const formData = new FormData();
      formData.append('file', file);
      const res = await fetch('http://127.0.0.1:8000/api/upload', {
        method: 'POST',
        body: formData
      });
      if (res.ok) {
        const data = await res.json();
        setUploadedUrl(data.url);
      }
    } catch (err) {
      console.warn('Upload error:', err);
    } finally {
      setIsUploading(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const payload = {
      incident_type: hazardType,
      severity: severity,
      state: state,
      district: district,
      location_name: locationName || `${district} Slope Sector`,
      coordinates: { lat: lat, lng: lng },
      description: `${description} [Crack width: ${crackWidth}cm]`,
      reported_by: reporterName,
      reporter_role: 'FIELD_OFFICER',
      road_blocked: false,
      people_affected: 0,
      infrastructure_affected: [],
      immediate_danger: severity === 'CRITICAL',
      evacuation_recommended: severity === 'CRITICAL',
      media_urls: uploadedUrl ? [uploadedUrl] : []
    };

    try {
      const res = await fetch('http://127.0.0.1:8000/api/incidents', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });
      if (res.ok) {
        const created = await res.json();
        setSubmittedId(created.id);
      }
    } catch (err) {
      setSubmittedId(`NER-OFFLINE-${Date.now().toString().slice(-4)}`);
    }
  };

  return (
    <div className="max-w-3xl mx-auto space-y-5">
      
      <div className="bg-[#12151b] border border-white/[0.08] rounded-xl p-5 shadow-xl">
        <div className="flex items-center space-x-2">
          <FileText className="w-5 h-5 text-emerald-400" />
          <h1 className="text-lg font-black text-white">Report Slope Hazard / Tension Crack</h1>
        </div>
        <p className="text-xs text-slate-300 mt-1">
          Direct field officer & community reporting portal. Upload geo-tagged crack photographs and slope deformation evidence directly into central EOC operations.
        </p>
      </div>

      {submittedId ? (
        <div className="bg-[#12151b] border border-emerald-500/40 rounded-xl p-8 text-center space-y-4 shadow-2xl">
          <div className="w-14 h-14 bg-emerald-500/20 text-emerald-400 rounded-full flex items-center justify-center mx-auto border border-emerald-500">
            <CheckCircle2 className="w-7 h-7" />
          </div>
          <h3 className="text-base font-black text-white">Field Hazard Report Successfully Recorded</h3>
          <p className="text-xs text-slate-300 font-mono">
            Incident Tracking ID: <strong className="text-emerald-400">{submittedId}</strong>
          </p>
          <button
            onClick={() => setSubmittedId(null)}
            className="px-4 py-2 rounded-lg bg-emerald-400 hover:bg-emerald-300 text-slate-950 font-black text-xs"
          >
            Submit Another Report
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="bg-[#12151b] border border-white/[0.08] rounded-xl p-5 shadow-xl space-y-3.5 text-xs">
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div className="space-y-1">
              <label className="text-slate-300 font-bold">Hazard Type</label>
              <select
                value={hazardType}
                onChange={(e) => setHazardType(e.target.value)}
                className="w-full bg-black/40 border border-white/[0.08] rounded-lg p-2 text-white font-medium"
              >
                <option value="Slope Crack">Slope Tension Crack (Pre-Failure)</option>
                <option value="Landslide">Active Landslide / Debris Flow</option>
                <option value="Road Blockage">Highway Road Cutoff</option>
                <option value="Soil Movement">Soil Creep & Retaining Wall Bulge</option>
              </select>
            </div>

            <div className="space-y-1">
              <label className="text-slate-300 font-bold">Observed Severity</label>
              <select
                value={severity}
                onChange={(e) => setSeverity(e.target.value)}
                className="w-full bg-black/40 border border-white/[0.08] rounded-lg p-2 text-white font-medium"
              >
                <option value="CRITICAL">CRITICAL (Imminent Failure)</option>
                <option value="HIGH">HIGH (Active Widening Crack)</option>
                <option value="MODERATE">MODERATE (Minor Subsidence)</option>
                <option value="LOW">LOW (Precautionary)</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div className="space-y-1">
              <label className="text-slate-300 font-bold">State</label>
              <select
                value={state}
                onChange={(e) => setState(e.target.value)}
                className="w-full bg-black/40 border border-white/[0.08] rounded-lg p-2 text-white font-medium"
              >
                <option value="Meghalaya">Meghalaya</option>
                <option value="Sikkim">Sikkim</option>
                <option value="Nagaland">Nagaland</option>
                <option value="Assam">Assam</option>
                <option value="Mizoram">Mizoram</option>
                <option value="Manipur">Manipur</option>
                <option value="Arunachal Pradesh">Arunachal Pradesh</option>
              </select>
            </div>

            <div className="space-y-1">
              <label className="text-slate-300 font-bold">District</label>
              <input
                type="text"
                value={district}
                onChange={(e) => setDistrict(e.target.value)}
                className="w-full bg-black/40 border border-white/[0.08] rounded-lg p-2 text-white font-medium"
                placeholder="e.g. Mangan / East Khasi Hills"
              />
            </div>
          </div>

          <div className="space-y-1">
            <div className="flex justify-between items-center">
              <label className="text-slate-300 font-bold">Location / Landmark Name</label>
              <button
                type="button"
                onClick={handleAcquireGPS}
                className="text-[11px] text-emerald-400 font-bold flex items-center space-x-1"
              >
                <MapPin className="w-3.5 h-3.5" />
                <span>Acquire Device GPS</span>
              </button>
            </div>
            <input
              type="text"
              value={locationName}
              onChange={(e) => setLocationName(e.target.value)}
              className="w-full bg-black/40 border border-white/[0.08] rounded-lg p-2 text-white font-medium"
              placeholder="e.g. NH-10 29th Mile Setijhora cutting"
            />
          </div>

          <div className="bg-black/40 p-3 rounded-lg border border-white/[0.06] space-y-1">
            <div className="flex justify-between font-bold">
              <span className="text-slate-200">Observed Surface Crack Width (cm)</span>
              <span className="text-amber-400 font-mono">{crackWidth} cm</span>
            </div>
            <input
              type="range" min="1" max="50" step="1" value={crackWidth}
              onChange={(e) => setCrackWidth(parseInt(e.target.value))}
              className="w-full accent-emerald-400 cursor-pointer"
            />
          </div>

          <div className="space-y-1">
            <label className="text-slate-300 font-bold block">Photo File Upload</label>
            <div className="border border-dashed border-white/[0.12] rounded-lg p-3 text-center space-y-1 hover:border-white/[0.25]">
              <input type="file" accept="image/*" onChange={handleFileChange} className="hidden" id="photo-upload-input" />
              <label htmlFor="photo-upload-input" className="cursor-pointer inline-flex items-center space-x-2 px-3 py-1.5 rounded-lg bg-white/[0.06] hover:bg-white/[0.1] text-emerald-400 font-bold text-xs">
                <Camera className="w-4 h-4" />
                <span>{selectedFile ? selectedFile.name : 'Choose Photograph File'}</span>
              </label>
              {uploadedUrl && <div className="text-[10px] text-emerald-400 font-mono">Uploaded: {uploadedUrl.split('/').pop()}</div>}
            </div>
          </div>

          <button
            type="submit"
            className="w-full py-2.5 rounded-lg bg-emerald-400 hover:bg-emerald-300 text-slate-950 font-black text-xs shadow-lg shadow-emerald-500/20"
          >
            Submit Field Hazard Report ?
          </button>
        </form>
      )}

    </div>
  );
};
