"""
NER-LENS Real-Time Data Store & Reactive Intelligence Hub
SIH 2026 - Problem Statement SIH26001 - MDoNER
"""
import uuid
from typing import List, Dict, Optional, Any
from datetime import datetime, timezone, timedelta
from app.models.schemas import (
    District, Coordinates, SeverityLevel, RiskZone, Incident, IncidentType,
    IncidentStatus, IncidentMedia, Alert, AlertSeverity, AlertStatus,
    AlertChannel, Road, RoadStatus, VulnerableVillage, CriticalInfrastructure,
    HistoricalLandslide, DataSource, DataSourceStatus, AuditLogEntry,
    DemoScenario, IncidentCreate, AlertCreate, UserRole, RiskEngineModel
)
from app.data.ner_dataset import (
    DISTRICTS_DATA, ROADS_DATA, VILLAGES_DATA, INFRASTRUCTURE_DATA,
    HISTORICAL_EVENTS_DATA, DATA_SOURCES_REGISTRY, DEMO_SCENARIOS
)
from app.risk_engine.calculator import NERRiskEngine
from app.services.sachet_cap import SachetCAPService
from app.providers.weather_provider import WeatherProvider, LiveWeatherObservation
from app.providers.incident_provider import IncidentDBProvider
from app.providers.alert_provider import AlertProvider

class NERDataStore:
    """
    Central Reactive Hub integrating real-time telemetry, persistent SQLite DB,
    dynamic risk re-computation, and operational audit logging.
    """
    def __init__(self):
        self.mode: str = "LIVE_OPERATIONS"  # LIVE_OPERATIONS or DEMO_SCENARIO
        self.districts: List[District] = list(DISTRICTS_DATA)
        self.roads: List[Road] = list(ROADS_DATA)
        self.villages: List[VulnerableVillage] = list(VILLAGES_DATA)
        self.infrastructure: List[CriticalInfrastructure] = list(INFRASTRUCTURE_DATA)
        self.historical_events: List[HistoricalLandslide] = list(HISTORICAL_EVENTS_DATA)
        self.data_sources: List[DataSource] = list(DATA_SOURCES_REGISTRY)
        self.scenarios: List[DemoScenario] = list(DEMO_SCENARIOS)
        self.current_scenario_id: str = "scen-2"
        
        self.risk_zones: Dict[str, RiskZone] = {}
        self.alerts: Dict[str, Alert] = {}
        
        self._initialize_seed_data()

    def _initialize_seed_data(self):
        # 1. Initialize SQLite Database
        IncidentDBProvider.init_db()

        # Seed initial realistic field reports if DB is empty
        existing = IncidentDBProvider.get_all_incidents()
        if not existing:
            init_seed_1 = IncidentCreate(
                incident_type=IncidentType.SLOPE_CRACK,
                severity=SeverityLevel.CRITICAL,
                state="Nagaland",
                district="Kohima",
                location_name="Pagla Pahar Cut-Slope, NH-29 Mile 14",
                coordinates=Coordinates(lat=25.7140, lng=94.0430),
                description="15cm longitudinal tension crack opened along crown of cut-slope after continuous precipitation. Silt seepage observed.",
                reported_by="Er. Kevich?sa Angami (Field Officer, PWD)",
                reporter_role=UserRole.FIELD_OFFICER,
                reporter_contact="+91 94360 12345",
                road_blocked=False,
                road_name="NH-29 Kohima - Dimapur Corridor",
                people_affected=450,
                infrastructure_affected=["NH-29 Pavement Structure", "Optical Fiber Cable Conduit"],
                immediate_danger=True,
                evacuation_recommended=False,
                media_urls=["https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=800&q=80"]
            )
            created_1 = IncidentDBProvider.insert_incident(init_seed_1, [
                IncidentMedia(
                    id="med-01",
                    media_type="image/jpeg",
                    url="https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=800&q=80",
                    file_name="pagla_pahar_tension_crack.jpg",
                    file_size_kb=1840,
                    captured_at=datetime.now(timezone.utc),
                    coordinates=Coordinates(lat=25.7140, lng=94.0430),
                    is_demo=False
                )
            ])
            IncidentDBProvider.verify_incident(created_1.id, "District Disaster Management Officer, Kohima", "Traffic regulated to single lane.")

            init_seed_2 = IncidentCreate(
                incident_type=IncidentType.LANDSLIDE,
                severity=SeverityLevel.CRITICAL,
                state="Sikkim",
                district="Gangtok",
                location_name="29th Mile, NH-10 Teesta Valley",
                coordinates=Coordinates(lat=27.1850, lng=88.5480),
                description="Major debris flow completely washed out 40 meters of highway. Teesta river scouring base of retaining wall.",
                reported_by="Tenzing Lepcha (Local Traffic Volunteer)",
                reporter_role=UserRole.COMMUNITY,
                reporter_contact="+91 98320 67890",
                road_blocked=True,
                road_name="NH-10 Siliguri - Gangtok Lifeline",
                people_affected=1200,
                infrastructure_affected=["NH-10 Highway", "Teesta Hydro Penstock Access Road"],
                immediate_danger=True,
                evacuation_recommended=True,
                media_urls=["https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=800&q=80"]
            )
            created_2 = IncidentDBProvider.insert_incident(init_seed_2, [
                IncidentMedia(
                    id="med-02",
                    media_type="image/jpeg",
                    url="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=800&q=80",
                    file_name="nh10_debris_flow_blockage.jpg",
                    file_size_kb=2420,
                    captured_at=datetime.now(timezone.utc),
                    coordinates=Coordinates(lat=27.1850, lng=88.5480),
                    is_demo=False
                )
            ])
            IncidentDBProvider.verify_incident(created_2.id, "SDMA Sikkim State EOC", "NDRF 2nd Battalion deployed. Alternative route via Lava-Reshi activated.")

        # 2. Initialize Monitored Risk Zones across Northeast India
        zone_definitions = [
            ("rz-sohra", "Sohra-Mawsmai Escarpment", "East Khasi Hills", "Meghalaya", 25.2950, 91.7100, 195.0, 360.0, 38.0, "Weathered Siltstone / Shale (Disang Group)", 0.4, 2, 2840, ["rd-gsroad"], ["v-maw"]),
            ("rz-zubza", "Zubza - Pagla Pahar Sector (NH-29)", "Kohima", "Nagaland", 25.7120, 94.0450, 135.0, 240.0, 34.0, "Weathered Siltstone / Shale (Disang Group)", 0.6, 2, 1950, ["rd-nh29"], ["v-zub"]),
            ("rz-setijhora", "Setijhora - 29th Mile Corridor (NH-10)", "Gangtok", "Sikkim", 27.1850, 88.5480, 220.0, 410.0, 42.0, "Unconsolidated Fluvial Terraces & Scree", 0.2, 3, 5890, ["rd-nh10"], ["v-sin"]),
            ("rz-jatinga", "Jatinga Hill Saddle (NH-27)", "Dima Hasao", "Assam", 25.1250, 93.0350, 160.0, 290.0, 31.0, "Tertiary Sandstone with Clay Interbeds", 0.5, 1, 3120, ["rd-nh27haflong"], ["v-jat"]),
            ("rz-durtlang", "Durtlang North Ridge", "Aizawl", "Mizoram", 23.7750, 92.7300, 140.0, 260.0, 36.0, "Weathered Siltstone / Shale (Disang Group)", 0.3, 2, 7200, [], ["v-durtlang"]),
            ("rz-tupul", "Tupul River Basin & Railway Slope", "Noney", "Manipur", 24.7850, 93.6020, 150.0, 275.0, 39.0, "Unconsolidated Fluvial Terraces & Scree", 0.1, 2, 1650, ["rd-nh37imphal"], ["v-tup"]),
            ("rz-bomdila", "Bomdila Pass Escarpment (NH-13)", "West Kameng", "Arunachal Pradesh", 27.2700, 92.4100, 85.0, 160.0, 29.0, "Fractured Gneiss / Quartzite (Shillong Plateau)", 1.2, 0, 1420, ["rd-nh13tawang"], ["v-dir"]),
            ("rz-itanagar", "Modirijo Valley Hill Cut", "Papum Pare", "Arunachal Pradesh", 27.1150, 93.6200, 110.0, 210.0, 27.0, "Moderate Consolidated Sedimentary", 0.8, 1, 2100, [], []),
        ]

        for zid, name, dist, st, lat, lng, r24, r72, slope, litho, hdist, cracks, pop, rds, vils in zone_definitions:
            assessment = NERRiskEngine.evaluate_risk(
                rainfall_24h=r24,
                rainfall_72h=r72,
                rainfall_history=[r72 * 0.4, r72 * 0.3, r24 * 0.3],
                slope_angle_deg=slope,
                lithology_class=litho,
                historical_distance_km=hdist,
                active_cracks_reported=cracks,
                population_density=pop
            )
            self.risk_zones[zid] = RiskZone(
                id=zid,
                name=name,
                district=dist,
                state=st,
                coordinates=Coordinates(lat=lat, lng=lng),
                risk_score=assessment.risk_score,
                severity=assessment.severity,
                assessment=assessment,
                affected_roads=rds,
                vulnerable_villages=vils,
                is_demo=False,
                last_updated=datetime.now(timezone.utc)
            )

        # 3. Seed Initial Official Alerts
        alt_01 = Alert(
            id="ALT-GOV-2026-089",
            title="IMD / SDMA Red Warning: Heavy to Very Heavy Rainfall across Meghalaya",
            severity=AlertSeverity.CRITICAL,
            state="Meghalaya",
            district="East Khasi Hills",
            affected_locations=["Sohra Town", "Mawsmai", "Nohkalikai Ridge", "Cherrapunji Belt"],
            coordinates=Coordinates(lat=25.2950, lng=91.7100),
            radius_km=25.0,
            headline="Elevated slope failure risk due to heavy localized precipitation (>195mm/24h).",
            instruction="Avoid non-essential travel along cliffside roads. Hamlets near exposed escarpments must prepare for temporary evacuation to designated community shelters.",
            risk_score=86,
            key_drivers=["24h Rainfall Surge: 195mm", "Slope Angle: 38?", "Active Soil Creep"],
            status=AlertStatus.ISSUED,
            created_by="DDMA Officer Shillong",
            approved_by="District Magistrate, East Khasi Hills",
            issued_at=datetime.now(timezone.utc),
            channels=[AlertChannel.WEB_DASHBOARD, AlertChannel.SACHET_CAP, AlertChannel.CELL_BROADCAST, AlertChannel.SMS_GATEWAY],
            cap_identifier="IN-NER-LENS-ALT089",
            is_demo=False
        )
        alt_01.cap_xml_preview = SachetCAPService.generate_cap_xml(alt_01)
        self.alerts[alt_01.id] = alt_01

    async def get_dashboard_summary(self) -> Dict[str, Any]:
        """
        Dynamically computes all KPIs from current SQLite DB and live telemetry.
        Zero hardcoded values.
        """
        incidents = IncidentDBProvider.get_all_incidents()
        active_incidents = len([i for i in incidents if i.status != IncidentStatus.RESOLVED])
        
        active_alerts = len([a for a in self.alerts.values() if a.status == AlertStatus.ISSUED])
        
        critical_count = sum(1 for z in self.risk_zones.values() if z.severity == SeverityLevel.CRITICAL)
        high_count = sum(1 for z in self.risk_zones.values() if z.severity == SeverityLevel.HIGH)
        
        blocked_roads = sum(1 for r in self.roads if r.status == RoadStatus.BLOCKED)
        slow_roads = sum(1 for r in self.roads if r.status == RoadStatus.SLOW)
        
        scores = [z.risk_score for z in self.risk_zones.values()]
        avg_score = int(sum(scores) / len(scores)) if scores else 50
        
        return {
            "regional_risk_score": avg_score,
            "regional_severity": "CRITICAL" if avg_score >= 75 else "HIGH" if avg_score >= 55 else "MODERATE",
            "critical_risk_zones": critical_count,
            "high_risk_zones": high_count,
            "total_risk_zones": len(self.risk_zones),
            "active_incidents": active_incidents,
            "active_alerts": active_alerts,
            "affected_roads_count": blocked_roads + slow_roads,
            "blocked_roads": blocked_roads,
            "slow_roads": slow_roads,
            "vulnerable_villages_count": len(self.villages),
            "mode": self.mode,
            "current_scenario": self.current_scenario_id,
            "data_sources_healthy": sum(1 for d in self.data_sources if d.status in [DataSourceStatus.LIVE_OPERATIONAL, DataSourceStatus.CONNECTED_DEMO]),
            "timestamp": datetime.now(timezone.utc).isoformat(),
            "data_status": "LIVE" if self.mode == "LIVE_OPERATIONS" else "DEMO_SCENARIO"
        }

    async def recalculate_zone_with_live_weather(self, zone_id: str) -> Optional[RiskZone]:
        """
        Fetches real-time weather from Open-Meteo AWS for the zone's lat/lng,
        and dynamically recalculates the risk score and explainable waterfall.
        """
        zone = self.risk_zones.get(zone_id)
        if not zone:
            return None

        # Fetch real-time live telemetry
        obs: LiveWeatherObservation = await WeatherProvider.get_live_weather(
            lat=zone.coordinates.lat,
            lng=zone.coordinates.lng,
            location_name=f"{zone.name}, {zone.district}"
        )

        # Count active incidents for this zone's district from SQLite
        all_incs = IncidentDBProvider.get_all_incidents()
        cracks_count = len([
            i for i in all_incs 
            if i.district.lower() == zone.district.lower() 
            and i.status != IncidentStatus.RESOLVED 
            and i.incident_type in [IncidentType.SLOPE_CRACK, IncidentType.SOIL_MOVEMENT]
        ])

        new_assessment = NERRiskEngine.evaluate_risk(
            rainfall_24h=obs.rainfall_24h_mm,
            rainfall_72h=obs.rainfall_72h_mm,
            rainfall_history=obs.rainfall_history_daily,
            slope_angle_deg=zone.assessment.slope_angle_degrees,
            lithology_class=zone.assessment.geotechnical_susceptibility,
            historical_distance_km=0.4 if "sohra" in zone.id or "setijhora" in zone.id else 1.2,
            active_cracks_reported=cracks_count,
            population_density=zone.assessment.population_exposed,
            model=zone.assessment.model_used
        )

        zone.risk_score = new_assessment.risk_score
        zone.severity = new_assessment.severity
        zone.assessment = new_assessment
        zone.last_updated = datetime.now(timezone.utc)
        return zone

    def set_mode(self, mode: str):
        self.mode = "LIVE_OPERATIONS" if mode == "LIVE_OPERATIONS" else "DEMO_SCENARIO"
        IncidentDBProvider.log_audit(
            user_name="System Controller",
            user_role=UserRole.SYSTEM_ADMIN,
            action="MODE_SWITCH",
            target_entity="NER-LENS System",
            location="All Northeast States",
            new_state=self.mode
        )

    def apply_scenario(self, scenario_code_or_id: str) -> DemoScenario:
        scenario = next((s for s in self.scenarios if s.id == scenario_code_or_id or s.code == scenario_code_or_id), None)
        if not scenario:
            scenario = self.scenarios[1]
        
        self.mode = "DEMO_SCENARIO"
        self.current_scenario_id = scenario.id
        factor = scenario.rainfall_surge_factor

        for z in self.risk_zones.values():
            new_r24 = round(z.assessment.rainfall_24h * factor, 1)
            new_r72 = round(z.assessment.rainfall_72h * (factor * 0.9), 1)
            new_cracks = z.assessment.recent_field_incidents
            if factor >= 3.0 and ("sohra" in z.id or "setijhora" in z.id):
                new_cracks = max(new_cracks, 3)
            
            new_assessment = NERRiskEngine.evaluate_risk(
                rainfall_24h=new_r24,
                rainfall_72h=new_r72,
                rainfall_history=[new_r72 * 0.4, new_r72 * 0.3, new_r24 * 0.3],
                slope_angle_deg=z.assessment.slope_angle_degrees,
                lithology_class=z.assessment.geotechnical_susceptibility,
                historical_distance_km=0.4 if "sohra" in z.id or "setijhora" in z.id else 1.2,
                active_cracks_reported=new_cracks,
                population_density=z.assessment.population_exposed,
                model=z.assessment.model_used
            )
            z.risk_score = new_assessment.risk_score
            z.severity = new_assessment.severity
            z.assessment = new_assessment
            z.last_updated = datetime.now(timezone.utc)

        # Update road statuses
        if scenario.code == "ACTIVE_LANDSLIDE_BLOCKAGE":
            for r in self.roads:
                if r.id == "rd-nh10":
                    r.status = RoadStatus.BLOCKED
                elif r.id == "rd-nh29":
                    r.status = RoadStatus.SLOW
        elif scenario.code == "NORMAL_MONSOON":
            for r in self.roads:
                r.status = RoadStatus.OPEN
        else:
            for r in self.roads:
                if r.id == "rd-nh10":
                    r.status = RoadStatus.BLOCKED
                elif r.id == "rd-nh29":
                    r.status = RoadStatus.SLOW

        IncidentDBProvider.log_audit(
            user_name="Demo Operator",
            user_role=UserRole.SYSTEM_ADMIN,
            action="SCENARIO_APPLIED",
            target_entity=scenario.name,
            location=scenario.district_focus,
            new_state=scenario.code
        )
        return scenario

    def add_incident(self, data: IncidentCreate) -> Incident:
        media_items = []
        for url in data.media_urls:
            media_items.append(
                IncidentMedia(
                    id=f"med-{uuid.uuid4().hex[:6]}",
                    media_type="image/jpeg",
                    url=url,
                    file_name="field_upload.jpg",
                    file_size_kb=1540,
                    captured_at=data.client_created_at or datetime.now(timezone.utc),
                    coordinates=data.coordinates,
                    is_demo=False
                )
            )
        return IncidentDBProvider.insert_incident(data, media_items)

    def verify_incident(self, incident_id: str, verified_by: str, notes: Optional[str] = None) -> Optional[Incident]:
        return IncidentDBProvider.verify_incident(incident_id, verified_by, notes)

    def create_alert(self, data: AlertCreate, created_by: str) -> Alert:
        new_id = f"alt-{uuid.uuid4().hex[:6]}"
        alert = Alert(
            id=new_id,
            title=data.title,
            severity=data.severity,
            state=data.state,
            district=data.district,
            affected_locations=data.affected_locations,
            coordinates=data.coordinates,
            radius_km=data.radius_km,
            headline=data.headline,
            instruction=data.instruction,
            risk_score=data.risk_score,
            key_drivers=data.key_drivers,
            status=AlertStatus.DRAFT,
            created_by=created_by,
            channels=data.channels,
            cap_identifier=f"IN-NER-LENS-{new_id.upper()}",
            is_demo=False
        )
        alert.cap_xml_preview = SachetCAPService.generate_cap_xml(alert)
        self.alerts[new_id] = alert

        IncidentDBProvider.log_audit(
            user_name=created_by,
            user_role=UserRole.DISTRICT_OFFICER,
            action="DRAFT_ALERT",
            target_entity=new_id,
            location=f"{data.district}, {data.state}",
            new_state=AlertStatus.DRAFT.value
        )
        return alert

    def approve_and_issue_alert(self, alert_id: str, approved_by: str) -> Optional[Alert]:
        alert = self.alerts.get(alert_id)
        if not alert:
            return None
        alert.status = AlertStatus.ISSUED
        alert.approved_by = approved_by
        alert.issued_at = datetime.now(timezone.utc)
        alert.cap_xml_preview = SachetCAPService.generate_cap_xml(alert)

        IncidentDBProvider.log_audit(
            user_name=approved_by,
            user_role=UserRole.STATE_AUTHORITY,
            action="ISSUE_CAP_ALERT",
            target_entity=alert_id,
            location=f"{alert.district}, {alert.state}",
            new_state=AlertStatus.ISSUED.value
        )
        return alert

# Global Store Instance
STORE = NERDataStore()
