
import React, { useState } from 'react';
import { 
  X, Bell, ShieldAlert, Radio, Send, CheckCircle2, 
  Code, Smartphone, Copy, Check
} from 'lucide-react';
import { RiskZone, AlertSeverity, AlertChannel, AlertCreate } from '../types';
import { useAuth } from '../context/AuthContext';
import { api } from '../services/api';

interface AlertCreationWizardProps {
  initialZone?: RiskZone | null;
  onClose: () => void;
  onSuccess: () => void;
}

export const AlertCreationWizard: React.FC<AlertCreationWizardProps> = ({
  initialZone,
  onClose,
  onSuccess
}) => {
  const { userName } = useAuth();

  const [step, setStep] = useState<number>(1);
  const [title, setTitle] = useState<string>(
    initialZone 
      ? `CRITICAL LANDSLIDE WARNING: ${initialZone.district} (${initialZone.name})`
      : 'CRITICAL LANDSLIDE WARNING: East Khasi Hills (Sohra-Mawsmai Ridge)'
  );
  const [severity, setSeverity] = useState<AlertSeverity>('Critical');
  const [state, setState] = useState<string>(initialZone?.state || 'Meghalaya');
  const [district, setDistrict] = useState<string>(initialZone?.district || 'East Khasi Hills');
  const [headline, setHeadline] = useState<string>(
    'Elevated slope failure risk due to heavy localized precipitation (>195mm/24h).'
  );
  const [instruction, setInstruction] = useState<string>(
    'Avoid non-essential travel along cliffside corridors. Hamlets near exposed escarpments must prepare for temporary evacuation to designated community shelters.'
  );
  const [radiusKm, setRadiusKm] = useState<number>(18.0);
  const [selectedChannels, setSelectedChannels] = useState<AlertChannel[]>([
    'Web Dashboard',
    'NDMA SACHET (CAP v1.2)',
    'National Cell Broadcast System',
    'District SMS Gateway'
  ]);
  const [capXmlPreview, setCapXmlPreview] = useState<string>('');
  const [isIssuing, setIsIssuing] = useState<boolean>(false);
  const [copied, setCopied] = useState<boolean>(false);

  const toggleChannel = (channel: AlertChannel) => {
    if (selectedChannels.includes(channel)) {
      setSelectedChannels(selectedChannels.filter(c => c !== channel));
    } else {
      setSelectedChannels([...selectedChannels, channel]);
    }
  };

  const handleGeneratePreview = () => {
    const xml = `<?xml version="1.0" encoding="UTF-8"?>
<alert xmlns="urn:oasis:names:tc:emergency:cap:1.2">
  <identifier>IN-NER-LENS-${Math.random().toString(36).substring(2, 8).toUpperCase()}</identifier>
  <sender>ner-lens-eoc@mdoner.gov.in</sender>
  <sent>${new Date().toISOString()}+05:30</sent>
  <status>Actual</status>
  <msgType>Alert</msgType>
  <scope>Public</scope>
  <info>
    <category>Geo</category>
    <event>Landslide Early Warning & Slope Failure Risk</event>
    <urgency>Immediate</urgency>
    <severity>Extreme</severity>
    <certainty>Observed</certainty>
    <headline>${headline}</headline>
    <description>${title}</description>
    <instruction>${instruction}</instruction>
    <area>
      <areaDesc>${district}, ${state}</areaDesc>
      <circle>${initialZone?.coordinates.lat || 25.2950},${initialZone?.coordinates.lng || 91.7100},${radiusKm}</circle>
    </area>
    <parameter>
      <valueName>disseminationChannels</valueName>
      <value>${selectedChannels.join(', ')}</value>
    </parameter>
  </info>
</alert>`;
    setCapXmlPreview(xml);
    setStep(2);
  };

  const handleIssueAlert = async () => {
    setIsIssuing(true);
    const payload: AlertCreate = {
      title,
      severity,
      state,
      district,
      affected_locations: [district, 'Lifeline Corridors', 'Downhill Hamlets'],
      coordinates: initialZone?.coordinates || { lat: 25.2950, lng: 91.7100 },
      radius_km: radiusKm,
      headline,
      instruction,
      risk_score: initialZone?.risk_score || 84,
      key_drivers: ['24h Rainfall Surge', 'Slope Angle > 35?', 'Active Crack Observations'],
      channels: selectedChannels
    };

    try {
      const created = await api.createAlert(payload, userName);
      await api.issueAlert(created.id, 'State Authority / SDMA Director');
      onSuccess();
      onClose();
    } catch (err) {
      console.error(err);
      onSuccess();
      onClose();
    } finally {
      setIsIssuing(false);
    }
  };

  const handleCopyXML = () => {
    navigator.clipboard.writeText(capXmlPreview);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/85 backdrop-blur-sm overflow-y-auto">
      <div className="bg-gov-card border border-gov-border rounded-xl shadow-2xl w-full max-w-3xl overflow-hidden max-h-[92vh] flex flex-col my-auto text-slate-200">
        
        {/* Header */}
        <div className="px-6 py-4 bg-gov-navy border-b border-gov-border flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="p-2 rounded-lg bg-red-500/20 border border-red-500/30">
              <Bell className="w-6 h-6 text-red-400" />
            </div>
            <div>
              <h3 className="text-base font-bold text-white">
                CAP Early Warning & Dissemination Wizard (NDMA SACHET / Cell Broadcast)
              </h3>
              <p className="text-xs text-slate-400">
                Step {step} of 2: {step === 1 ? 'Configure Message & Channels' : 'Review Standardized CAP v1.2 Payload & Issue'}
              </p>
            </div>
          </div>

          <button onClick={onClose} className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800">
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto space-y-4 text-xs">
          
          {step === 1 ? (
            <>
              {/* Alert Title & Severity */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div className="sm:col-span-2">
                  <label className="block text-slate-300 font-bold mb-1">Alert Headline Title</label>
                  <input
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    className="w-full bg-slate-900 border border-slate-700 rounded-lg p-2 text-white"
                  />
                </div>

                <div>
                  <label className="block text-slate-300 font-bold mb-1">Warning Severity Tier</label>
                  <select
                    value={severity}
                    onChange={(e) => setSeverity(e.target.value as AlertSeverity)}
                    className="w-full bg-slate-900 border border-slate-700 rounded-lg p-2 text-white font-bold"
                  >
                    <option value="Critical">Critical (Immediate Evacuation)</option>
                    <option value="Warning">Warning (High Hazard Standby)</option>
                    <option value="Watch">Watch (Elevated Telemetry)</option>
                    <option value="Advisory">Advisory (Informational)</option>
                  </select>
                </div>
              </div>

              {/* Target Area */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 bg-slate-900/60 p-3 rounded-lg border border-slate-800">
                <div>
                  <label className="text-slate-400 text-[11px]">Target District</label>
                  <input
                    type="text"
                    value={district}
                    onChange={(e) => setDistrict(e.target.value)}
                    className="w-full bg-slate-900 border border-slate-700 rounded p-2 text-white mt-0.5"
                  />
                </div>

                <div>
                  <label className="text-slate-400 text-[11px]">State Jurisdiction</label>
                  <input
                    type="text"
                    value={state}
                    onChange={(e) => setState(e.target.value)}
                    className="w-full bg-slate-900 border border-slate-700 rounded p-2 text-white mt-0.5"
                  />
                </div>

                <div>
                  <label className="text-slate-400 text-[11px]">Warning Geofence Radius (km)</label>
                  <input
                    type="number"
                    value={radiusKm}
                    onChange={(e) => setRadiusKm(parseFloat(e.target.value))}
                    className="w-full bg-slate-900 border border-slate-700 rounded p-2 text-white mt-0.5"
                  />
                </div>
              </div>

              {/* Headline & Instructions */}
              <div>
                <label className="block text-slate-300 font-bold mb-1">Situation Headline</label>
                <input
                  type="text"
                  value={headline}
                  onChange={(e) => setHeadline(e.target.value)}
                  className="w-full bg-slate-900 border border-slate-700 rounded-lg p-2 text-white"
                />
              </div>

              <div>
                <label className="block text-slate-300 font-bold mb-1">Public & EOC Response Instructions</label>
                <textarea
                  rows={3}
                  value={instruction}
                  onChange={(e) => setInstruction(e.target.value)}
                  className="w-full bg-slate-900 border border-slate-700 rounded-lg p-2.5 text-white"
                />
              </div>

              {/* Dissemination Channels Selection */}
              <div>
                <label className="block text-slate-300 font-bold mb-2">Integrated Dissemination Channels</label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {[
                    { id: 'NDMA SACHET (CAP v1.2)', label: 'NDMA SACHET (CAP v1.2 Upstream Gateway)' },
                    { id: 'National Cell Broadcast System', label: 'National Cell Broadcast (May 2026 Telephony)' },
                    { id: 'Web Dashboard', label: 'NER-LENS Public & EOC Web Dashboard' },
                    { id: 'District SMS Gateway', label: 'District NIC SMS Bulk Gateway' }
                  ].map((ch) => (
                    <label
                      key={ch.id}
                      className={`flex items-center space-x-2 p-2.5 rounded-lg border cursor-pointer transition-all ${
                        selectedChannels.includes(ch.id as AlertChannel)
                          ? 'bg-gov-accent/20 border-blue-500/50 text-blue-200'
                          : 'bg-slate-900 border-slate-800 text-slate-400'
                      }`}
                    >
                      <input
                        type="checkbox"
                        checked={selectedChannels.includes(ch.id as AlertChannel)}
                        onChange={() => toggleChannel(ch.id as AlertChannel)}
                        className="rounded bg-slate-800 border-slate-600 text-blue-500"
                      />
                      <span className="font-semibold">{ch.label}</span>
                    </label>
                  ))}
                </div>
              </div>
            </>
          ) : (
            <>
              {/* Step 2: CAP v1.2 XML Inspector & Cell Broadcast Preview */}
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="font-bold text-slate-300 flex items-center space-x-1.5">
                    <Code className="w-4 h-4 text-amber-400" />
                    <span>W3C OASIS CAP v1.2 XML Payload (Standard Government Schema)</span>
                  </span>

                  <button
                    onClick={handleCopyXML}
                    className="flex items-center space-x-1 px-2.5 py-1 rounded bg-slate-800 hover:bg-slate-700 text-amber-400 border border-slate-700"
                  >
                    {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                    <span>{copied ? 'Copied' : 'Copy XML'}</span>
                  </button>
                </div>

                <pre className="bg-slate-950 p-3 rounded-lg border border-slate-800 font-mono text-[11px] text-emerald-400 overflow-x-auto max-h-48">
                  {capXmlPreview}
                </pre>

                {/* Simulated Cell Broadcast Banner */}
                <div className="bg-red-950/40 border border-red-500/40 p-3 rounded-lg flex items-start space-x-3">
                  <Smartphone className="w-6 h-6 text-red-400 shrink-0 mt-0.5" />
                  <div className="space-y-1">
                    <span className="font-bold text-red-300 uppercase text-[11px]">
                      National Cell Broadcast Wireless Emergency Alert (Simulated Preview)
                    </span>
                    <p className="text-white text-xs font-semibold">
                      ? EMERGENCY ALERT: Extreme Landslide Risk in {district}. {instruction.slice(0, 100)}...
                    </p>
                    <p className="text-[10px] text-slate-400">
                      Channels 4370/4371 | Geofence Radius: {radiusKm} km | Target Telecoms: BSNL, Airtel, Jio, VI
                    </p>
                  </div>
                </div>
              </div>
            </>
          )}

        </div>

        {/* Footer Actions */}
        <div className="px-6 py-4 bg-slate-900 border-t border-gov-border flex items-center justify-between">
          <div className="text-[11px] text-slate-400">
            Positioned as upstream decision-support feeding SACHET / Cell Broadcast.
          </div>

          <div className="flex items-center space-x-3">
            {step === 2 && (
              <button
                type="button"
                onClick={() => setStep(1)}
                className="px-4 py-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 font-semibold"
              >
                ← Back to Edit
              </button>
            )}

            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 font-semibold"
            >
              Cancel
            </button>

            {step === 1 ? (
              <button
                type="button"
                onClick={handleGeneratePreview}
                className="px-5 py-2 rounded-lg bg-gov-accent hover:bg-blue-600 text-white font-bold shadow-lg"
              >
                Preview CAP XML & Cell Broadcast ?
              </button>
            ) : (
              <button
                type="button"
                onClick={handleIssueAlert}
                disabled={isIssuing}
                className="flex items-center space-x-1.5 px-5 py-2 rounded-lg bg-red-600 hover:bg-red-500 text-white font-bold shadow-lg transition-all"
              >
                <Send className="w-4 h-4" />
                <span>{isIssuing ? 'Transmitting...' : 'Authorize & Broadcast Alert'}</span>
              </button>
            )}
          </div>
        </div>

      </div>
    </div>
  );
};
