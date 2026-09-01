import React, { useState } from 'react';
import { 
  X, Camera, MapPin, AlertTriangle, ShieldCheck, 
  Upload, CheckCircle2, WifiOff, FileText 
} from 'lucide-react';
import { IncidentType, SeverityLevel, UserRole } from '../types';
import { api } from '../services/api';
import { useAuth } from '../context/AuthContext';
import { useOffline } from '../context/OfflineContext';
import { useLanguage } from '../context/LanguageContext';

export const IncidentReportModal: React.FC<{
  onClose: () => void;
  onSuccess: () => void;
}> = ({ onClose, onSuccess }) => {
  const { role } = useAuth();
  const { isOnline, queueOfflineReport } = useOffline();
  const { t } = useLanguage();

  const [incidentType, setIncidentType] = useState<IncidentType>('Slope Crack');
  const [severity, setSeverity] = useState<SeverityLevel>('HIGH');
  const [state, setState] = useState<string>('Meghalaya');
  const [district, setDistrict] = useState<string>('East Khasi Hills');
  const [locationName, setLocationName] = useState<string>('');
  const [lat, setLat] = useState<number>(25.2950);
  const [lng, setLng] = useState<number>(91.7100);
  const [gpsAccuracy, setGpsAccuracy] = useState<number | null>(null);
  const [description, setDescription] = useState<string>('');
  const [reporterName, setReporterName] = useState<string>('Field Patrol Officer');
  const [reporterContact, setReporterContact] = useState<string>('+91 94360 00000');
  const [roadBlocked, setRoadBlocked] = useState<boolean>(false);
  const [roadName, setRoadName] = useState<string>('');
  const [peopleAffected, setPeopleAffected] = useState<number>(0);
  const [immediateDanger, setImmediateDanger] = useState<boolean>(false);
  const [evacuationRecommended, setEvacuationRecommended] = useState<boolean>(false);

  // File upload state
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [uploadedUrl, setUploadedUrl] = useState<string>('');
  const [isUploading, setIsUploading] = useState<boolean>(false);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [submittedId, setSubmittedId] = useState<string | null>(null);

  // GPS Acquisition
  const handleAcquireGPS = () => {
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition(
        (pos) => {
          setLat(parseFloat(pos.coords.latitude.toFixed(5)));
          setLng(parseFloat(pos.coords.longitude.toFixed(5)));
          setGpsAccuracy(Math.round(pos.coords.accuracy));
        },
        () => {
          alert('GPS permission not granted or timeout. Using map coordinate fallback.');
        },
        { enableHighAccuracy: true, timeout: 8000 }
      );
    }
  };

  // Real File Upload Handler
  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    setSelectedFile(file);

    // If online, upload immediately to backend
    if (isOnline) {
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
        console.warn('File upload fallback:', err);
      } finally {
        setIsUploading(false);
      }
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const reportData = {
      incident_type: incidentType,
      severity: severity,
      state: state,
      district: district,
      location_name: locationName || `${district} Slope Reach`,
      coordinates: { lat: lat, lng: lng },
      description: description || 'Visual observation of tension crack and soil movement along slope profile.',
      reported_by: reporterName,
      reporter_role: (role || 'FIELD_OFFICER') as UserRole,
      reporter_contact: reporterContact,
      road_blocked: roadBlocked,
      road_name: roadBlocked ? (roadName || 'State Corridor') : undefined,
      people_affected: peopleAffected,
      infrastructure_affected: roadBlocked ? [roadName || 'Lifeline Highway'] : [],
      immediate_danger: immediateDanger,
      evacuation_recommended: evacuationRecommended,
      media_urls: uploadedUrl ? [uploadedUrl] : [],
      is_offline_draft: !isOnline
    };

    try {
      if (!isOnline) {
        await queueOfflineReport(reportData);
        setSubmittedId(`NER-OFFLINE-${Date.now().toString().slice(-4)}`);
      } else {
        const created = await api.reportIncident(reportData);
        setSubmittedId(created.id);
      }
      setTimeout(() => {
        onSuccess();
        onClose();
      }, 1500);
    } catch (err) {
      console.error('Submission error:', err);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto">
      <div className="bg-gov-card border border-gov-border rounded-xl max-w-2xl w-full shadow-2xl overflow-hidden my-6">
        
        {/* Modal Header */}
        <div className="bg-slate-900 px-5 py-4 border-b border-gov-border flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <AlertTriangle className="w-5 h-5 text-amber-400" />
            <div>
              <h3 className="text-sm font-bold text-white uppercase tracking-wider">
                {t('incident.title', 'Report Field Observation / Crack')}
              </h3>
              <p className="text-[11px] text-slate-400">
                Direct Ingestion to Central EOC Decision Support Layer
              </p>
            </div>
          </div>
          <button onClick={onClose} className="p-1 rounded-lg hover:bg-slate-800 text-slate-400 hover:text-white">
            <X className="w-5 h-5" />
          </button>
        </div>

        {submittedId ? (
          <div className="p-8 text-center space-y-4">
            <div className="w-16 h-16 bg-emerald-500/20 text-emerald-400 rounded-full flex items-center justify-center mx-auto border-2 border-emerald-500">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h4 className="text-lg font-black text-white">Field Report Successfully Ingested</h4>
            <p className="text-xs text-slate-300 font-mono">
              Incident ID: <strong className="text-amber-400">{submittedId}</strong>
            </p>
            <p className="text-[11px] text-slate-400">
              {isOnline 
                ? 'Signal dispatched to EOC Priority Queue and GIS risk layers.' 
                : 'Report saved in offline IndexedDB storage. Will synchronize automatically upon reconnection.'}
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="p-5 space-y-4 text-xs">
            
            {/* Offline Alert Notice */}
            {!isOnline && (
              <div className="bg-amber-500/10 border border-amber-500/30 p-2.5 rounded-lg flex items-center space-x-2 text-amber-300 text-[11px]">
                <WifiOff className="w-4 h-4 shrink-0" />
                <span>Operating in Offline Mode. Report will be securely queued in local IndexedDB.</span>
              </div>
            )}

            {/* Type & Severity */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div className="space-y-1">
                <label className="text-slate-300 font-semibold">{t('incident.type', 'Incident Type')}</label>
                <select
                  value={incidentType}
                  onChange={(e) => setIncidentType(e.target.value as IncidentType)}
                  className="w-full bg-slate-900 border border-slate-700 rounded-lg p-2 text-white font-medium focus:border-amber-500 focus:outline-none"
                >
                  <option value="Slope Crack">Slope Tension Crack (Pre-Failure)</option>
                  <option value="Landslide">Active Landslide / Debris Flow</option>
                  <option value="Road Blockage">Lifeline Highway Blockage</option>
                  <option value="Soil Movement">Subsidence & Soil Creep</option>
                  <option value="Debris Flow">Culvert Overflow / Mudflow</option>
                </select>
              </div>

              <div className="space-y-1">
                <label className="text-slate-300 font-semibold">{t('incident.severity', 'Observed Severity')}</label>
                <select
                  value={severity}
                  onChange={(e) => setSeverity(e.target.value as SeverityLevel)}
                  className="w-full bg-slate-900 border border-slate-700 rounded-lg p-2 text-white font-medium focus:border-amber-500 focus:outline-none"
                >
                  <option value="CRITICAL">CRITICAL (Imminent Failure / Cutoff)</option>
                  <option value="HIGH">HIGH (Active widening crack)</option>
                  <option value="MODERATE">MODERATE (Minor spalling)</option>
                  <option value="LOW">LOW (Precautionary notice)</option>
                </select>
              </div>
            </div>

            {/* State & District */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div className="space-y-1">
                <label className="text-slate-300 font-semibold">{t('incident.state', 'State')}</label>
                <select
                  value={state}
                  onChange={(e) => setState(e.target.value)}
                  className="w-full bg-slate-900 border border-slate-700 rounded-lg p-2 text-white font-medium"
                >
                  <option value="Meghalaya">Meghalaya</option>
                  <option value="Nagaland">Nagaland</option>
                  <option value="Sikkim">Sikkim</option>
                  <option value="Assam">Assam</option>
                  <option value="Mizoram">Mizoram</option>
                  <option value="Manipur">Manipur</option>
                  <option value="Arunachal Pradesh">Arunachal Pradesh</option>
                  <option value="Tripura">Tripura</option>
                </select>
              </div>

              <div className="space-y-1">
                <label className="text-slate-300 font-semibold">{t('incident.district', 'District')}</label>
                <input
                  type="text"
                  value={district}
                  onChange={(e) => setDistrict(e.target.value)}
                  className="w-full bg-slate-900 border border-slate-700 rounded-lg p-2 text-white font-medium"
                  placeholder="e.g. East Khasi Hills"
                />
              </div>
            </div>

            {/* Location & GPS */}
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <label className="text-slate-300 font-semibold">{t('incident.location', 'Location Landmark')}</label>
                <button
                  type="button"
                  onClick={handleAcquireGPS}
                  className="text-[11px] text-amber-400 hover:text-amber-300 flex items-center space-x-1 font-bold"
                >
                  <MapPin className="w-3.5 h-3.5" />
                  <span>Acquire Device GPS</span>
                </button>
              </div>
              <input
                type="text"
                value={locationName}
                onChange={(e) => setLocationName(e.target.value)}
                className="w-full bg-slate-900 border border-slate-700 rounded-lg p-2 text-white font-medium"
                placeholder="e.g. NH-29 Mile 14 Pagla Pahar, Zubza"
              />

              <div className="grid grid-cols-2 gap-2 font-mono text-[11px]">
                <input
                  type="number"
                  step="0.0001"
                  value={lat}
                  onChange={(e) => setLat(parseFloat(e.target.value))}
                  className="bg-slate-900 border border-slate-700 rounded p-1.5 text-slate-300"
                  placeholder="Latitude"
                />
                <input
                  type="number"
                  step="0.0001"
                  value={lng}
                  onChange={(e) => setLng(parseFloat(e.target.value))}
                  className="bg-slate-900 border border-slate-700 rounded p-1.5 text-slate-300"
                  placeholder="Longitude"
                />
              </div>
              {gpsAccuracy && (
                <div className="text-[10px] text-emerald-400 font-mono">
                  GPS Accuracy: ?{gpsAccuracy}m
                </div>
              )}
            </div>

            {/* Description */}
            <div className="space-y-1">
              <label className="text-slate-300 font-semibold">{t('incident.description', 'Field Observations & Measurements')}</label>
              <textarea
                rows={2}
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className="w-full bg-slate-900 border border-slate-700 rounded-lg p-2 text-white font-medium"
                placeholder="e.g. 15cm wide continuous tension crack along road crown. Seepage detected at toe."
              />
            </div>

            {/* Highway Blockage Checkbox */}
            <div className="bg-slate-900/80 p-3 rounded-lg border border-slate-800 space-y-2">
              <label className="flex items-center space-x-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={roadBlocked}
                  onChange={(e) => setRoadBlocked(e.target.checked)}
                  className="rounded text-amber-500 focus:ring-amber-400"
                />
                <span className="font-bold text-white">{t('incident.roadBlocked', 'Lifeline Highway / Road Affected?')}</span>
              </label>

              {roadBlocked && (
                <input
                  type="text"
                  value={roadName}
                  onChange={(e) => setRoadName(e.target.value)}
                  className="w-full bg-slate-950 border border-slate-700 rounded p-2 text-white text-xs mt-1"
                  placeholder="e.g. NH-10 Siliguri - Gangtok"
                />
              )}
            </div>

            {/* Real Photo Upload Input */}
            <div className="space-y-1.5">
              <label className="text-slate-300 font-semibold block">
                {t('incident.photoUpload', 'Evidence Photo Upload (Camera / Drone File)')}
              </label>
              
              <div className="border-2 border-dashed border-slate-700 rounded-lg p-3 text-center space-y-2 hover:border-slate-500 transition-colors">
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleFileChange}
                  className="hidden"
                  id="incident-photo-input"
                />
                <label
                  htmlFor="incident-photo-input"
                  className="cursor-pointer inline-flex items-center space-x-2 px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-amber-300 font-bold text-xs border border-slate-700"
                >
                  <Camera className="w-4 h-4" />
                  <span>{selectedFile ? selectedFile.name : t('incident.takePhoto', 'Choose Photo File')}</span>
                </label>

                {isUploading && (
                  <div className="text-[11px] text-amber-400 animate-pulse font-mono">
                    Uploading image to persistent storage...
                  </div>
                )}

                {uploadedUrl && (
                  <div className="text-[10px] text-emerald-400 font-mono flex items-center justify-center space-x-1">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>Uploaded: {uploadedUrl.split('/').pop()}</span>
                  </div>
                )}
              </div>
            </div>

            {/* Actions */}
            <div className="flex items-center justify-end space-x-3 border-t border-gov-border pt-3">
              <button
                type="button"
                onClick={onClose}
                className="px-4 py-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 font-bold"
              >
                {t('common.cancel', 'Cancel')}
              </button>
              <button
                type="submit"
                disabled={isSubmitting || isUploading}
                className="px-5 py-2 rounded-lg bg-amber-500 hover:bg-amber-400 text-slate-950 font-black shadow-lg"
              >
                {isSubmitting ? t('common.loading', 'Submitting...') : t('incident.submitReport', 'Submit Field Report ?')}
              </button>
            </div>

          </form>
        )}

      </div>
    </div>
  );
};
