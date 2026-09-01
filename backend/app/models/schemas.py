"""
NER-LENS Core Schemas & Pydantic Models
SIH 2026 - Problem Statement SIH26001 - MDoNER
"""
from enum import Enum
from typing import List, Optional, Dict, Any
from datetime import datetime
from pydantic import BaseModel, Field

class SeverityLevel(str, Enum):
    LOW = "LOW"
    MODERATE = "MODERATE"
    HIGH = "HIGH"
    CRITICAL = "CRITICAL"

class UserRole(str, Enum):
    DISTRICT_OFFICER = "DISTRICT_OFFICER"
    STATE_AUTHORITY = "STATE_AUTHORITY"
    FIELD_OFFICER = "FIELD_OFFICER"
    COMMUNITY = "COMMUNITY"
    SYSTEM_ADMIN = "SYSTEM_ADMIN"

class IncidentType(str, Enum):
    LANDSLIDE = "Landslide"
    ROAD_BLOCKAGE = "Road Blockage"
    SLOPE_CRACK = "Slope Crack"
    SOIL_MOVEMENT = "Soil Movement"
    ROCKFALL = "Rockfall"
    FLOOD_SLOPE_FAILURE = "Flood-related slope failure"
    DEBRIS_FLOW = "Debris Flow"
    OTHER = "Other"

class IncidentStatus(str, Enum):
    REPORTED = "Reported"
    UNDER_REVIEW = "Under Review"
    VERIFIED = "Verified"
    ACTION_INITIATED = "Action Initiated"
    RESOLVED = "Resolved"

class AlertStatus(str, Enum):
    DRAFT = "Draft"
    PENDING_APPROVAL = "Pending Approval"
    APPROVED = "Approved"
    ISSUED = "Issued"
    EXPIRED = "Expired"
    CANCELLED = "Cancelled"

class AlertSeverity(str, Enum):
    ADVISORY = "Advisory"
    WATCH = "Watch"
    WARNING = "Warning"
    CRITICAL = "Critical"

class RoadStatus(str, Enum):
    OPEN = "OPEN"
    SLOW = "SLOW"
    BLOCKED = "BLOCKED"
    UNKNOWN = "UNKNOWN"

class RiskEngineModel(str, Enum):
    PHYSICS_HEURISTIC = "Physics-Informed Heuristic (API Index)"
    CALIBRATED_MATRIX = "Susceptibility-Trigger Calibrated Matrix"
    ML_ENSEMBLE = "ML Gradient Boosted Risk Estimator (Prototype)"

# Geographic & Administrative Models
class Coordinates(BaseModel):
    lat: float
    lng: float

class District(BaseModel):
    id: str
    name: str
    state: str
    center: Coordinates
    population: int
    vulnerability_index: float
    active_risk_zones: int
    active_incidents: int
    critical_roads_count: int

# Risk Factor & Explainability
class RiskDriver(BaseModel):
    name: str
    category: str  # Rainfall, Terrain, History, Incident, Exposure
    score_contribution: float  # 0 to 100 points
    relative_percentage: float  # percentage of total
    description: str
    evidence_value: str
    status: str  # Normal, Elevated, High, Critical

class ExplainableRiskAssessment(BaseModel):
    risk_score: int = Field(..., ge=0, le=100)
    severity: SeverityLevel
    model_used: RiskEngineModel
    confidence: float
    model_disclaimer: str = "Prototype risk-assessment model. Requires scientific calibration before operational deployment."
    summary_explanation: str
    top_drivers: List[RiskDriver]
    rainfall_24h: float
    rainfall_72h: float
    antecedent_precipitation_index: float
    slope_angle_degrees: float
    geotechnical_susceptibility: str
    historical_event_density: str
    recent_field_incidents: int
    population_exposed: int
    recommended_action: str
    mitigation_options: List[str]

class RiskZone(BaseModel):
    id: str
    name: str
    district: str
    state: str
    coordinates: Coordinates
    polygon: Optional[List[List[float]]] = None
    risk_score: int
    severity: SeverityLevel
    assessment: ExplainableRiskAssessment
    affected_roads: List[str]
    vulnerable_villages: List[str]
    is_demo: bool = True
    last_updated: datetime = Field(default_factory=datetime.utcnow)

# Incident Reporting
class IncidentMedia(BaseModel):
    id: str
    media_type: str  # image/jpeg, video/mp4
    url: str
    file_name: str
    file_size_kb: int
    captured_at: datetime
    coordinates: Coordinates
    is_demo: bool = True

class Incident(BaseModel):
    id: str
    incident_type: IncidentType
    severity: SeverityLevel
    state: str
    district: str
    location_name: str
    coordinates: Coordinates
    description: str
    reported_by: str
    reporter_role: UserRole
    reporter_contact: Optional[str] = None
    status: IncidentStatus
    road_blocked: bool = False
    road_name: Optional[str] = None
    people_affected: int = 0
    infrastructure_affected: List[str] = []
    immediate_danger: bool = False
    evacuation_recommended: bool = False
    media: List[IncidentMedia] = []
    verified_by: Optional[str] = None
    verified_at: Optional[datetime] = None
    action_notes: Optional[str] = None
    created_at: datetime = Field(default_factory=datetime.utcnow)
    synced_from_offline: bool = False
    is_demo: bool = True

class IncidentCreate(BaseModel):
    incident_type: IncidentType
    severity: SeverityLevel
    state: str
    district: str
    location_name: str
    coordinates: Coordinates
    description: str
    reported_by: str
    reporter_role: UserRole = UserRole.FIELD_OFFICER
    reporter_contact: Optional[str] = None
    road_blocked: bool = False
    road_name: Optional[str] = None
    people_affected: int = 0
    infrastructure_affected: List[str] = []
    immediate_danger: bool = False
    evacuation_recommended: bool = False
    media_urls: List[str] = []
    is_offline_draft: bool = False
    client_created_at: Optional[datetime] = None

# Alert Management & CAP Serialization
class AlertChannel(str, Enum):
    WEB_DASHBOARD = "Web Dashboard"
    SMS_GATEWAY = "District SMS Gateway"
    SACHET_CAP = "NDMA SACHET (CAP v1.2)"
    CELL_BROADCAST = "National Cell Broadcast System"
    EOC_SIREN = "District EOC Siren / PA"

class Alert(BaseModel):
    id: str
    title: str
    severity: AlertSeverity
    state: str
    district: str
    affected_locations: List[str]
    coordinates: Coordinates
    radius_km: float
    headline: str
    instruction: str
    risk_score: int
    key_drivers: List[str]
    status: AlertStatus
    created_by: str
    approved_by: Optional[str] = None
    issued_at: Optional[datetime] = None
    expires_at: Optional[datetime] = None
    channels: List[AlertChannel]
    cap_identifier: str
    cap_xml_preview: Optional[str] = None
    is_demo: bool = True
    created_at: datetime = Field(default_factory=datetime.utcnow)

class AlertCreate(BaseModel):
    title: str
    severity: AlertSeverity
    state: str
    district: str
    affected_locations: List[str]
    coordinates: Coordinates
    radius_km: float = 15.0
    headline: str
    instruction: str
    risk_score: int
    key_drivers: List[str]
    channels: List[AlertChannel] = [AlertChannel.WEB_DASHBOARD, AlertChannel.SACHET_CAP, AlertChannel.CELL_BROADCAST]

# Infrastructure & Roads
class Road(BaseModel):
    id: str
    name: str
    highway_number: str
    state: str
    district: str
    start_point: str
    end_point: str
    coordinates_path: List[List[float]]
    status: RoadStatus
    blockage_cause: Optional[str] = None
    alternative_route: Optional[str] = None
    last_updated: datetime = Field(default_factory=datetime.utcnow)
    is_demo: bool = True

class VulnerableVillage(BaseModel):
    id: str
    name: str
    district: str
    state: str
    coordinates: Coordinates
    population: int
    risk_level: SeverityLevel
    nearest_road_km: float
    nearest_health_facility_km: float
    nearest_shelter_name: str
    nearest_shelter_distance_km: float
    slope_proximity_meters: float
    active_warning: Optional[str] = None
    is_demo: bool = True

class CriticalInfrastructure(BaseModel):
    id: str
    name: str
    infra_type: str  # Hospital, Bridge, Substation, Tower, School, Shelter
    district: str
    state: str
    coordinates: Coordinates
    risk_status: SeverityLevel
    is_demo: bool = True

# Historical Landslide Event (NRSC / NESAC Inventory)
class HistoricalLandslide(BaseModel):
    id: str
    event_year: int
    event_date: str
    state: str
    district: str
    location_name: str
    coordinates: Coordinates
    trigger: str  # Monsoon Rain, Cloudburst, Earthquake, Hill Cutting
    severity: SeverityLevel
    reported_casualties: int
    estimated_economic_loss_inr_cr: float
    source_agency: str  # ISRO/NRSC, NESAC, GSI, SDMA
    is_demo_historical: bool = False

# System Health & Data Sources
class DataSourceStatus(str, Enum):
    CONNECTED_DEMO = "CONNECTED_DEMO"
    LIVE_OPERATIONAL = "LIVE_OPERATIONAL"
    INTEGRATION_READY = "INTEGRATION_READY"
    DEGRADED = "DEGRADED"
    OFFLINE = "OFFLINE"

class DataSource(BaseModel):
    id: str
    agency_name: str
    data_type: str
    update_frequency: str
    last_ingestion: datetime
    status: DataSourceStatus
    records_count: int
    latency_ms: int
    notes: str

# Audit Log
class AuditLogEntry(BaseModel):
    id: str
    timestamp: datetime = Field(default_factory=datetime.utcnow)
    user_name: str
    user_role: UserRole
    action: str
    target_entity: str
    location: str
    previous_state: Optional[str] = None
    new_state: Optional[str] = None
    ip_address: str = "127.0.0.1"

# Scenario Model
class DemoScenario(BaseModel):
    id: str
    code: str
    name: str
    subtitle: str
    description: str
    state_focus: str
    district_focus: str
    rainfall_surge_factor: float
    regional_risk_score: int
    critical_zones_count: int
    active_incidents_count: int
    alerts_count: int
    affected_roads_count: int
    narrative_steps: List[str]
