import React, { createContext, useContext, useState, useEffect } from 'react';
import { LANGUAGES, translate, LanguageOption } from '../lib/i18n';

export interface UserProfile {
  name: string;
  email: string;
  role: string;
}

export interface LocationSlope {
  id: string;
  name: string;
  state: string;
  district: string;
  coordinates: { lat: number; lng: number };
  risk_score: number;
  risk_level: 'LOW' | 'MODERATE' | 'HIGH' | 'CRITICAL';
  slope_deg: number;
  elevation_m: number;
  lithology: string;
  factor_of_safety: number;
  rainfall_24h_mm: number;
  rainfall_72h_mm: number;
  soil_moisture_percent: number;
  pore_pressure_kpa: number;
  ground_movement_mm_day: number;
  active_sensors_count: number;
  population_exposed: number;
  nearest_shelter: string;
  shelter_distance_km: number;
  evacuation_status: string;
  primary_road: string;
  road_status: 'OPEN' | 'SLOW' | 'BLOCKED';
  description: string;
}

export interface SensorItem {
  id: string;
  name: string;
  type: string;
  location_id: string;
  location_name: string;
  depth_m: number;
  reading: string;
  status: 'NOMINAL' | 'MODERATE' | 'HIGH' | 'CRITICAL';
  battery_percent: number;
  signal_rssi: number;
  last_ping: string;
}

export interface WarningItem {
  id: string;
  title: string;
  severity: 'Advisory' | 'Watch' | 'Warning' | 'Critical';
  state: string;
  district: string;
  location_name: string;
  headline: string;
  instruction: string;
  risk_score: number;
  status: 'Draft' | 'Issued' | 'Acknowledged' | 'Resolved';
  issued_at: string;
  channels: string[];
}

export interface ShelterItem {
  id: string;
  name: string;
  location_id: string;
  district: string;
  state: string;
  coordinates: { lat: number; lng: number };
  capacity: number;
  current_occupancy: number;
  medical_team_on_site: boolean;
  supplies_days: number;
  contact_officer: string;
}

export interface EmergencyState {
  active: boolean;
  level: 'RED' | 'ORANGE';
  title: string;
  area: string;
  instruction: string;
  timestamp: string;
}

interface AppContextType {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  selectedLocationId: string;
  setSelectedLocationId: (id: string) => void;
  locations: LocationSlope[];
  sensors: SensorItem[];
  warnings: WarningItem[];
  shelters: ShelterItem[];
  emergency: EmergencyState | null;
  triggerEmergency: (title?: string, area?: string) => void;
  clearEmergency: () => void;
  isSirenPlaying: boolean;
  toggleSiren: () => void;
  lang: string;
  setLang: (code: string) => void;
  t: (key: string) => string;
  network: 'online' | 'offline';
  demoMode: boolean;
  setDemoMode: (val: boolean) => void;
  user: UserProfile | null;
  loginUser: (u: UserProfile) => void;
  logoutUser: () => void;
  acknowledgeWarning: (id: string) => void;
  resolveWarning: (id: string) => void;
  refreshData: () => Promise<void>;
}

const DEFAULT_LOCATIONS: LocationSlope[] = [
  {
    id: "mangan-ridge",
    name: "Mangan Ridge (North Sikkim)",
    state: "Sikkim",
    district: "Mangan",
    coordinates: { lat: 27.5080, lng: 88.5280 },
    risk_score: 88,
    risk_level: "CRITICAL",
    slope_deg: 44.5,
    elevation_m: 1310,
    lithology: "Unconsolidated Fluvial Terraces & Weathered Gneiss",
    factor_of_safety: 1.08,
    rainfall_24h_mm: 285.0,
    rainfall_72h_mm: 510.0,
    soil_moisture_percent: 94,
    pore_pressure_kpa: 48.2,
    ground_movement_mm_day: 14.8,
    active_sensors_count: 12,
    population_exposed: 4500,
    nearest_shelter: "Mangan Government Higher Secondary School Shelter",
    shelter_distance_km: 1.8,
    evacuation_status: "EVACUATION_RECOMMENDED",
    primary_road: "North Sikkim Highway (NH-310A)",
    road_status: "BLOCKED",
    description: "Active rotational slumping along upper scarp with multiple daylighting tension cracks. Teesta river base scouring."
  },
  {
    id: "sohra-rim",
    name: "Sohra Rim Escarpment",
    state: "Meghalaya",
    district: "East Khasi Hills",
    coordinates: { lat: 25.2950, lng: 91.7100 },
    risk_score: 82,
    risk_level: "CRITICAL",
    slope_deg: 38.0,
    elevation_m: 1430,
    lithology: "Weathered Siltstone / Shale (Disang Group)",
    factor_of_safety: 1.15,
    rainfall_24h_mm: 195.0,
    rainfall_72h_mm: 360.0,
    soil_moisture_percent: 89,
    pore_pressure_kpa: 42.0,
    ground_movement_mm_day: 8.4,
    active_sensors_count: 8,
    population_exposed: 2840,
    nearest_shelter: "Sohra Community Hall & Indoor Stadium",
    shelter_distance_km: 2.1,
    evacuation_status: "STANDBY_WARNING",
    primary_road: "Shillong - Sohra Highway (SH-5)",
    road_status: "SLOW",
    description: "Severe saturation of weathered Disang shale overlaying fractured sandstone plateau boundary."
  },
  {
    id: "setijhora-nh10",
    name: "Setijhora 29th Mile Corridor (NH-10)",
    state: "Sikkim",
    district: "Gangtok",
    coordinates: { lat: 27.1850, lng: 88.5480 },
    risk_score: 85,
    risk_level: "CRITICAL",
    slope_deg: 42.0,
    elevation_m: 650,
    lithology: "Unconsolidated Scree & Colluvium",
    factor_of_safety: 1.11,
    rainfall_24h_mm: 220.0,
    rainfall_72h_mm: 410.0,
    soil_moisture_percent: 92,
    pore_pressure_kpa: 45.6,
    ground_movement_mm_day: 12.2,
    active_sensors_count: 10,
    population_exposed: 5890,
    nearest_shelter: "Singtam Multi-Purpose Community Shelter",
    shelter_distance_km: 3.4,
    evacuation_status: "EVACUATION_RECOMMENDED",
    primary_road: "NH-10 Siliguri - Gangtok Lifeline",
    road_status: "BLOCKED",
    description: "Critical arterial road cutoff. Base retaining walls deformed by surging Teesta drainage cone."
  },
  {
    id: "pagla-pahar-nh29",
    name: "Pagla Pahar Zubza Sector (NH-29)",
    state: "Nagaland",
    district: "Kohima",
    coordinates: { lat: 25.7120, lng: 94.0450 },
    risk_score: 78,
    risk_level: "HIGH",
    slope_deg: 34.0,
    elevation_m: 1260,
    lithology: "Disang Weathered Siltstone & Clay Bands",
    factor_of_safety: 1.24,
    rainfall_24h_mm: 135.0,
    rainfall_72h_mm: 240.0,
    soil_moisture_percent: 84,
    pore_pressure_kpa: 38.0,
    ground_movement_mm_day: 6.5,
    active_sensors_count: 7,
    population_exposed: 1950,
    nearest_shelter: "Zubza Panchayat Hall Emergency Relief Camp",
    shelter_distance_km: 1.2,
    evacuation_status: "CAUTION_ALERT",
    primary_road: "NH-29 Dimapur - Kohima Corridor",
    road_status: "SLOW",
    description: "Continuous 15cm crown tension crack along cut slope. Regulated single-lane heavy convoy transit."
  },
  {
    id: "durtlang-hills",
    name: "Durtlang North Ridge",
    state: "Mizoram",
    district: "Aizawl",
    coordinates: { lat: 23.7750, lng: 92.7300 },
    risk_score: 76,
    risk_level: "HIGH",
    slope_deg: 36.0,
    elevation_m: 1180,
    lithology: "Surma Group Interbedded Sandstone & Clay",
    factor_of_safety: 1.28,
    rainfall_24h_mm: 140.0,
    rainfall_72h_mm: 260.0,
    soil_moisture_percent: 81,
    pore_pressure_kpa: 34.5,
    ground_movement_mm_day: 5.1,
    active_sensors_count: 6,
    population_exposed: 7200,
    nearest_shelter: "Durtlang YMA Indoor Hall Safe Center",
    shelter_distance_km: 0.9,
    evacuation_status: "CAUTION_ALERT",
    primary_road: "Aizawl - Sairang Arterial Road",
    road_status: "OPEN",
    description: "Steep residential slope vulnerable to slip along sandstone bedding planes during prolonged rain."
  },
  {
    id: "jatinga-valley",
    name: "Jatinga Saddle (NH-27)",
    state: "Assam",
    district: "Dima Hasao",
    coordinates: { lat: 25.1250, lng: 93.0350 },
    risk_score: 64,
    risk_level: "MODERATE",
    slope_deg: 29.0,
    elevation_m: 610,
    lithology: "Tertiary Sandstone with Clay Seams",
    factor_of_safety: 1.42,
    rainfall_24h_mm: 110.0,
    rainfall_72h_mm: 190.0,
    soil_moisture_percent: 75,
    pore_pressure_kpa: 28.0,
    ground_movement_mm_day: 2.8,
    active_sensors_count: 5,
    population_exposed: 3120,
    nearest_shelter: "Haflong Stadium Relief Center",
    shelter_distance_km: 4.5,
    evacuation_status: "NOMINAL",
    primary_road: "NH-27 East-West Corridor (Silchar - Lumding)",
    road_status: "OPEN",
    description: "Historical railway and highway washout zone with active culvert telemetry and drainage monitoring."
  }
];

const DEFAULT_SENSORS: SensorItem[] = [
  { id: "sn-inc-01", name: "Borehole Inclinometer INC-01", type: "Inclinometer", location_id: "mangan-ridge", location_name: "Mangan Ridge, Sikkim", depth_m: 18.5, reading: "14.8 mm/day", status: "CRITICAL", battery_percent: 91, signal_rssi: -68, last_ping: "1 min ago" },
  { id: "sn-piez-01", name: "Vibrating Wire Piezometer PZ-01", type: "Piezometer", location_id: "mangan-ridge", location_name: "Mangan Ridge, Sikkim", depth_m: 24.0, reading: "48.2 kPa", status: "CRITICAL", battery_percent: 88, signal_rssi: -72, last_ping: "2 min ago" },
  { id: "sn-rain-01", name: "Tipping Bucket Rain Gauge RG-01", type: "Rain Gauge", location_id: "mangan-ridge", location_name: "Mangan Ridge, Sikkim", depth_m: 0.0, reading: "32.4 mm/h", status: "CRITICAL", battery_percent: 96, signal_rssi: -62, last_ping: "Just now" },
  { id: "sn-crk-01", name: "Optical Crackmeter CRK-01", type: "Crackmeter", location_id: "pagla-pahar-nh29", location_name: "Pagla Pahar, Nagaland", depth_m: 0.0, reading: "15.2 mm width", status: "HIGH", battery_percent: 85, signal_rssi: -74, last_ping: "4 min ago" },
  { id: "sn-inc-02", name: "In-Place Inclinometer INC-02", type: "Inclinometer", location_id: "setijhora-nh10", location_name: "Setijhora NH-10, Sikkim", depth_m: 15.0, reading: "12.2 mm/day", status: "CRITICAL", battery_percent: 79, signal_rssi: -81, last_ping: "1 min ago" },
  { id: "sn-ext-01", name: "Multipoint Borehole Extensometer EXT-01", type: "Extensometer", location_id: "sohra-rim", location_name: "Sohra Rim, Meghalaya", depth_m: 30.0, reading: "8.4 mm shear", status: "HIGH", battery_percent: 94, signal_rssi: -65, last_ping: "3 min ago" }
];

const DEFAULT_WARNINGS: WarningItem[] = [
  { id: "ALT-01", title: "Mangan Ridge Scarp Acceleration", severity: "Critical", state: "Sikkim", district: "Mangan", location_name: "Mangan Sub-division", headline: "Red Alert: Massive ground creep detected along NH-310A.", instruction: "Evacuate lower slope settlements to Mangan Higher Secondary School immediately.", risk_score: 88, status: "Issued", issued_at: "10 min ago", channels: ["CAP v1.2", "Cell Broadcast", "VHF Siren"] },
  { id: "ALT-02", title: "Setijhora 29th Mile Teesta Scour", severity: "Critical", state: "Sikkim", district: "Gangtok", location_name: "Singtam - Rangpo Lifeline", headline: "NH-10 Cutoff: Teesta base erosion causing slope collapse.", instruction: "Traffic halted. Use alternative Melli-Pelling route.", risk_score: 85, status: "Issued", issued_at: "25 min ago", channels: ["CAP v1.2", "SMS Relay"] },
  { id: "ALT-03", title: "Sohra Rim Heavy Inundation Warning", severity: "Warning", state: "Meghalaya", district: "East Khasi Hills", location_name: "Cherrapunji Escarpment", headline: "Continuous rainfall surge exceeding 195mm in 24 hours.", instruction: "Maintain strict patrol along SH-5. Standby for evacuation.", risk_score: 82, status: "Issued", issued_at: "1 hour ago", channels: ["CAP v1.2", "Aapda Mitra App"] }
];

const DEFAULT_SHELTERS: ShelterItem[] = [
  { id: "sh-01", name: "Mangan Government Higher Secondary School", location_id: "mangan-ridge", district: "Mangan", state: "Sikkim", coordinates: { lat: 27.5140, lng: 88.5340 }, capacity: 600, current_occupancy: 210, medical_team_on_site: true, supplies_days: 14, contact_officer: "SDM Mangan (03592-234200)" },
  { id: "sh-02", name: "Singtam Multi-Purpose Community Center", location_id: "setijhora-nh10", district: "Gangtok", state: "Sikkim", coordinates: { lat: 27.2350, lng: 88.4980 }, capacity: 850, current_occupancy: 420, medical_team_on_site: true, supplies_days: 10, contact_officer: "BDO Singtam (+91 94340 11223)" },
  { id: "sh-03", name: "Sohra Community Hall & Indoor Stadium", location_id: "sohra-rim", district: "East Khasi Hills", state: "Meghalaya", coordinates: { lat: 25.2890, lng: 91.7220 }, capacity: 500, current_occupancy: 85, medical_team_on_site: true, supplies_days: 21, contact_officer: "BDO Sohra (+91 98620 44556)" },
  { id: "sh-04", name: "Zubza Panchayat Hall Emergency Camp", location_id: "pagla-pahar-nh29", district: "Kohima", state: "Nagaland", coordinates: { lat: 25.7210, lng: 94.0320 }, capacity: 350, current_occupancy: 40, medical_team_on_site: false, supplies_days: 7, contact_officer: "Village Council Chairman (+91 94360 88990)" },
  { id: "sh-05", name: "Durtlang YMA Indoor Hall Safe Center", location_id: "durtlang-hills", district: "Aizawl", state: "Mizoram", coordinates: { lat: 23.7820, lng: 92.7380 }, capacity: 450, current_occupancy: 15, medical_team_on_site: true, supplies_days: 12, contact_officer: "YMA Disaster Section (+91 98625 12345)" }
];

const AppContext = createContext<AppContextType | undefined>(undefined);

let audioCtx: AudioContext | null = null;
let oscillator: OscillatorNode | null = null;
let gainNode: GainNode | null = null;

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [activeTab, setActiveTab] = useState<string>('landing');
  const [selectedLocationId, setSelectedLocationId] = useState<string>('mangan-ridge');
  const [lang, setLangState] = useState<string>(() => localStorage.getItem('ews_lang') || 'en');
  const [network, setNetwork] = useState<'online' | 'offline'>('online');
  const [demoMode, setDemoMode] = useState<boolean>(false);
  const [isSirenPlaying, setIsSirenPlaying] = useState<boolean>(false);

  const [user, setUser] = useState<UserProfile | null>(() => {
    const saved = localStorage.getItem('ews_user');
    return saved ? JSON.parse(saved) : null;
  });

  const [locations, setLocations] = useState<LocationSlope[]>(DEFAULT_LOCATIONS);
  const [sensors, setSensors] = useState<SensorItem[]>(DEFAULT_SENSORS);
  const [warnings, setWarnings] = useState<WarningItem[]>(DEFAULT_WARNINGS);
  const [shelters, setShelters] = useState<ShelterItem[]>(DEFAULT_SHELTERS);
  
  const [emergency, setEmergency] = useState<EmergencyState | null>({
    active: false,
    level: 'RED',
    title: 'Mangan Ridge Slope Failure Warning',
    area: 'North Sikkim (Mangan & Dzongu Sub-divisions)',
    instruction: 'Immediate evacuation ordered for settlements in down-slope drainage cone. NH-310A closed.',
    timestamp: new Date().toLocaleTimeString()
  });

  const loginUser = (u: UserProfile) => {
    setUser(u);
    localStorage.setItem('ews_user', JSON.stringify(u));
  };

  const logoutUser = () => {
    setUser(null);
    localStorage.removeItem('ews_user');
  };

  const setLang = (code: string) => {
    localStorage.setItem('ews_lang', code);
    setLangState(code);
  };

  const t = (key: string) => translate(lang, key);

  const startSirenAudio = () => {
    try {
      if (!audioCtx) {
        audioCtx = new (window.AudioContext || (window as any).webkitAudioContext)();
      }
      if (audioCtx && audioCtx.state === 'suspended') {
        audioCtx.resume();
      }
      if (audioCtx) {
        oscillator = audioCtx.createOscillator();
        gainNode = audioCtx.createGain();

        oscillator.type = 'sawtooth';
        oscillator.frequency.setValueAtTime(440, audioCtx.currentTime);
        oscillator.frequency.exponentialRampToValueAtTime(880, audioCtx.currentTime + 0.5);
        oscillator.frequency.exponentialRampToValueAtTime(440, audioCtx.currentTime + 1.0);

        gainNode.gain.setValueAtTime(0.15, audioCtx.currentTime);

        oscillator.connect(gainNode);
        gainNode.connect(audioCtx.destination);
        oscillator.start();
        setIsSirenPlaying(true);
      }
    } catch (e) {
      console.warn('Web Audio Siren notice:', e);
    }
  };

  const stopSirenAudio = () => {
    try {
      if (oscillator) {
        oscillator.stop();
        oscillator.disconnect();
        oscillator = null;
      }
      setIsSirenPlaying(false);
    } catch (e) {}
  };

  const toggleSiren = () => {
    if (isSirenPlaying) {
      stopSirenAudio();
    } else {
      startSirenAudio();
    }
  };

  const triggerEmergency = (title?: string, area?: string) => {
    setEmergency({
      active: true,
      level: 'RED',
      title: title || 'Critical Landslide Alert: Immediate Evacuation Directive',
      area: area || 'Mangan & Setijhora Lifeline Sectors',
      instruction: 'Move immediately to designated community shelters. Do not traverse riverine valley roads.',
      timestamp: new Date().toLocaleTimeString()
    });
    startSirenAudio();
  };

  const clearEmergency = () => {
    setEmergency(prev => prev ? { ...prev, active: false } : null);
    stopSirenAudio();
  };

  const refreshData = async () => {
    try {
      const locRes = await fetch('http://127.0.0.1:8000/api/locations');
      if (locRes.ok) {
        const data = await locRes.json();
        if (Array.isArray(data) && data.length > 0) setLocations(data);
      }

      const sensRes = await fetch('http://127.0.0.1:8000/api/sensors');
      if (sensRes.ok) {
        const sdata = await sensRes.json();
        if (Array.isArray(sdata) && sdata.length > 0) setSensors(sdata);
      }

      const shRes = await fetch('http://127.0.0.1:8000/api/evacuation/shelters');
      if (shRes.ok) {
        const shData = await shRes.json();
        if (Array.isArray(shData) && shData.length > 0) setShelters(shData);
      }

      const altRes = await fetch('http://127.0.0.1:8000/api/alerts');
      if (altRes.ok) {
        const aData = await altRes.json();
        if (Array.isArray(aData) && aData.length > 0) {
          const mapped: WarningItem[] = aData.map((a: any) => ({
            id: a.id,
            title: a.title,
            severity: a.severity,
            state: a.state,
            district: a.district,
            location_name: a.affected_locations ? a.affected_locations.join(', ') : a.district,
            headline: a.headline,
            instruction: a.instruction,
            risk_score: a.risk_score,
            status: a.status,
            issued_at: a.issued_at || 'Just now',
            channels: a.channels || ['Web', 'CAP v1.2', 'Cell Broadcast']
          }));
          setWarnings(mapped);
        }
      }
    } catch (e) {
      console.warn('Backend live sync notice:', e);
    }
  };

  useEffect(() => {
    refreshData();
    const interval = setInterval(refreshData, 20000);
    return () => clearInterval(interval);
  }, []);

  const acknowledgeWarning = (id: string) => {
    setWarnings(prev => prev.map(w => w.id === id ? { ...w, status: 'Acknowledged' } : w));
  };

  const resolveWarning = (id: string) => {
    setWarnings(prev => prev.map(w => w.id === id ? { ...w, status: 'Resolved' } : w));
  };

  return (
    <AppContext.Provider value={{
      activeTab,
      setActiveTab,
      selectedLocationId,
      setSelectedLocationId,
      locations,
      sensors,
      warnings,
      shelters,
      emergency,
      triggerEmergency,
      clearEmergency,
      isSirenPlaying,
      toggleSiren,
      lang,
      setLang,
      t,
      network,
      demoMode,
      setDemoMode,
      user,
      loginUser,
      logoutUser,
      acknowledgeWarning,
      resolveWarning,
      refreshData
    }}>
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => {
  const context = useContext(AppContext);
  if (!context) throw new Error('useApp must be used within an AppProvider');
  return context;
};
