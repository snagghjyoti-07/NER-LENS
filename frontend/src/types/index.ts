
export type SeverityLevel = 'LOW' | 'MODERATE' | 'HIGH' | 'CRITICAL';

export type UserRole = 
  | 'DISTRICT_OFFICER' 
  | 'STATE_AUTHORITY' 
  | 'FIELD_OFFICER' 
  | 'COMMUNITY' 
  | 'SYSTEM_ADMIN';

export type IncidentType = 
  | 'Landslide' 
  | 'Road Blockage' 
  | 'Slope Crack' 
  | 'Soil Movement' 
  | 'Rockfall' 
  | 'Flood-related slope failure' 
  | 'Debris Flow' 
  | 'Other';

export type IncidentStatus = 
  | 'Reported' 
  | 'Under Review' 
  | 'Verified' 
  | 'Action Initiated' 
  | 'Resolved';

export type AlertStatus = 
  | 'Draft' 
  | 'Pending Approval' 
  | 'Approved' 
  | 'Issued' 
  | 'Expired' 
  | 'Cancelled';

export type AlertSeverity = 'Advisory' | 'Watch' | 'Warning' | 'Critical';

export type RoadStatus = 'OPEN' | 'SLOW' | 'BLOCKED' | 'UNKNOWN';

export type RiskEngineModel = 
  | 'Physics-Informed Heuristic (API Index)' 
  | 'Susceptibility-Trigger Calibrated Matrix' 
  | 'ML Gradient Boosted Risk Estimator (Prototype)';

export interface Coordinates {
  lat: number;
  lng: number;
}

export interface RiskDriver {
  name: string;
  category: string;
  score_contribution: number;
  relative_percentage: number;
  description: string;
  evidence_value: string;
  status: string;
}

export interface ExplainableRiskAssessment {
  risk_score: number;
  severity: SeverityLevel;
  model_used: RiskEngineModel;
  confidence: number;
  model_disclaimer: string;
  summary_explanation: string;
  top_drivers: RiskDriver[];
  rainfall_24h: number;
  rainfall_72h: number;
  antecedent_precipitation_index: number;
  slope_angle_degrees: number;
  geotechnical_susceptibility: string;
  historical_event_density: string;
  recent_field_incidents: number;
  population_exposed: number;
  recommended_action: string;
  mitigation_options: string[];
}

export interface RiskZone {
  id: string;
  name: string;
  district: string;
  state: string;
  coordinates: Coordinates;
  polygon?: number[][];
  risk_score: number;
  severity: SeverityLevel;
  assessment: ExplainableRiskAssessment;
  affected_roads: string[];
  vulnerable_villages: string[];
  is_demo: boolean;
  last_updated: string;
}

export interface IncidentMedia {
  id: string;
  media_type: string;
  url: string;
  file_name: string;
  file_size_kb: number;
  captured_at: string;
  coordinates: Coordinates;
  is_demo: boolean;
}

export interface Incident {
  id: string;
  incident_type: IncidentType;
  severity: SeverityLevel;
  state: string;
  district: string;
  location_name: string;
  coordinates: Coordinates;
  description: string;
  reported_by: string;
  reporter_role: UserRole;
  reporter_contact?: string;
  status: IncidentStatus;
  road_blocked: boolean;
  road_name?: string;
  people_affected: number;
  infrastructure_affected: string[];
  immediate_danger: boolean;
  evacuation_recommended: boolean;
  media: IncidentMedia[];
  verified_by?: string;
  verified_at?: string;
  action_notes?: string;
  created_at: string;
  synced_from_offline: boolean;
  is_demo: boolean;
}

export interface IncidentCreate {
  incident_type: IncidentType;
  severity: SeverityLevel;
  state: string;
  district: string;
  location_name: string;
  coordinates: Coordinates;
  description: string;
  reported_by: string;
  reporter_role?: UserRole;
  reporter_contact?: string;
  road_blocked: boolean;
  road_name?: string;
  people_affected: number;
  infrastructure_affected: string[];
  immediate_danger: boolean;
  evacuation_recommended: boolean;
  media_urls: string[];
  is_offline_draft?: boolean;
  client_created_at?: string;
}

export type AlertChannel = 
  | 'Web Dashboard' 
  | 'District SMS Gateway' 
  | 'NDMA SACHET (CAP v1.2)' 
  | 'National Cell Broadcast System' 
  | 'District EOC Siren / PA';

export interface Alert {
  id: string;
  title: string;
  severity: AlertSeverity;
  state: string;
  district: string;
  affected_locations: string[];
  coordinates: Coordinates;
  radius_km: number;
  headline: string;
  instruction: string;
  risk_score: number;
  key_drivers: string[];
  status: AlertStatus;
  created_by: string;
  approved_by?: string;
  issued_at?: string;
  expires_at?: string;
  channels: AlertChannel[];
  cap_identifier: string;
  cap_xml_preview?: string;
  is_demo: boolean;
  created_at: string;
}

export interface AlertCreate {
  title: string;
  severity: AlertSeverity;
  state: string;
  district: string;
  affected_locations: string[];
  coordinates: Coordinates;
  radius_km: number;
  headline: string;
  instruction: string;
  risk_score: number;
  key_drivers: string[];
  channels: AlertChannel[];
}

export interface Road {
  id: string;
  name: string;
  highway_number: string;
  state: string;
  district: string;
  start_point: string;
  end_point: string;
  coordinates_path: number[][];
  status: RoadStatus;
  blockage_cause?: string;
  alternative_route?: string;
  last_updated: string;
  is_demo: boolean;
}

export interface VulnerableVillage {
  id: string;
  name: string;
  district: string;
  state: string;
  coordinates: Coordinates;
  population: number;
  risk_level: SeverityLevel;
  nearest_road_km: number;
  nearest_health_facility_km: number;
  nearest_shelter_name: string;
  nearest_shelter_distance_km: number;
  slope_proximity_meters: number;
  active_warning?: string;
  is_demo: boolean;
}

export interface CriticalInfrastructure {
  id: string;
  name: string;
  infra_type: string;
  district: string;
  state: string;
  coordinates: Coordinates;
  risk_status: SeverityLevel;
  is_demo: boolean;
}

export interface HistoricalLandslide {
  id: string;
  event_year: number;
  event_date: string;
  state: string;
  district: string;
  location_name: string;
  coordinates: Coordinates;
  trigger: string;
  severity: SeverityLevel;
  reported_casualties: number;
  estimated_economic_loss_inr_cr: number;
  source_agency: string;
  is_demo_historical: boolean;
}

export interface DataSource {
  id: string;
  agency_name: string;
  data_type: string;
  update_frequency: string;
  last_ingestion: string;
  status: 'CONNECTED_DEMO' | 'LIVE_OPERATIONAL' | 'INTEGRATION_READY' | 'DEGRADED' | 'OFFLINE';
  records_count: number;
  latency_ms: number;
  notes: string;
}

export interface DemoScenario {
  id: string;
  code: string;
  name: string;
  subtitle: string;
  description: string;
  state_focus: string;
  district_focus: string;
  rainfall_surge_factor: number;
  regional_risk_score: number;
  critical_zones_count: number;
  active_incidents_count: number;
  alerts_count: number;
  affected_roads_count: number;
  narrative_steps: string[];
}

export interface DashboardSummary {
  regional_risk_score: number;
  regional_severity: SeverityLevel;
  critical_risk_zones: number;
  high_risk_zones: number;
  total_risk_zones: number;
  active_incidents: number;
  active_alerts: number;
  affected_roads_count: number;
  blocked_roads: number;
  slow_roads: number;
  vulnerable_villages_count: number;
  current_scenario: string;
  data_sources_healthy: number;
  timestamp: string;
}
