"""
NER-LENS Geospatial & Inventory Dataset for Northeast India
Covering: Assam, Arunachal Pradesh, Manipur, Meghalaya, Mizoram, Nagaland, Sikkim, Tripura
Data grounded in ISRO/NRSC, NESAC, GSI, and MDoNER vulnerability contexts.
"""
from app.models.schemas import (
    District, Coordinates, SeverityLevel, Road, RoadStatus,
    VulnerableVillage, CriticalInfrastructure, HistoricalLandslide,
    DataSource, DataSourceStatus, DemoScenario
)
from datetime import datetime

# 8 Northeast States and 28 Key Vulnerable Districts
DISTRICTS_DATA = [
    # Meghalaya
    District(id="meg-ekh", name="East Khasi Hills", state="Meghalaya", center=Coordinates(lat=25.5788, lng=91.8933), population=825922, vulnerability_index=0.88, active_risk_zones=4, active_incidents=3, critical_roads_count=4),
    District(id="meg-wkh", name="West Khasi Hills", state="Meghalaya", center=Coordinates(lat=25.5342, lng=91.2612), population=383461, vulnerability_index=0.79, active_risk_zones=2, active_incidents=1, critical_roads_count=2),
    District(id="meg-wgh", name="West Garo Hills", state="Meghalaya", center=Coordinates(lat=25.5138, lng=90.2201), population=643291, vulnerability_index=0.72, active_risk_zones=1, active_incidents=1, critical_roads_count=2),
    District(id="meg-rb", name="Ri-Bhoi", state="Meghalaya", center=Coordinates(lat=25.9042, lng=91.8797), population=258840, vulnerability_index=0.75, active_risk_zones=2, active_incidents=2, critical_roads_count=3),
    
    # Nagaland
    District(id="nag-koh", name="Kohima", state="Nagaland", center=Coordinates(lat=25.6751, lng=94.1086), population=267988, vulnerability_index=0.85, active_risk_zones=3, active_incidents=2, critical_roads_count=3),
    District(id="nag-dim", name="Ch?moukedima & Dimapur", state="Nagaland", center=Coordinates(lat=25.9094, lng=93.7266), population=378811, vulnerability_index=0.68, active_risk_zones=1, active_incidents=1, critical_roads_count=4),
    District(id="nag-per", name="Peren", state="Nagaland", center=Coordinates(lat=25.5170, lng=93.7407), population=95219, vulnerability_index=0.84, active_risk_zones=2, active_incidents=1, critical_roads_count=2),
    District(id="nag-sha", name="Shamator", state="Nagaland", center=Coordinates(lat=26.0460, lng=94.9450), population=34223, vulnerability_index=0.82, active_risk_zones=2, active_incidents=1, critical_roads_count=1),
    District(id="nag-mok", name="Mokokchung", state="Nagaland", center=Coordinates(lat=26.3248, lng=94.5206), population=194622, vulnerability_index=0.74, active_risk_zones=1, active_incidents=0, critical_roads_count=2),

    # Sikkim
    District(id="sik-gan", name="Gangtok", state="Sikkim", center=Coordinates(lat=27.3389, lng=88.6065), population=283583, vulnerability_index=0.91, active_risk_zones=4, active_incidents=3, critical_roads_count=3),
    District(id="sik-man", name="Mangan (North Sikkim)", state="Sikkim", center=Coordinates(lat=27.5054, lng=88.5332), population=43709, vulnerability_index=0.94, active_risk_zones=5, active_incidents=4, critical_roads_count=2),
    District(id="sik-nam", name="Namchi (South Sikkim)", state="Sikkim", center=Coordinates(lat=27.1667, lng=88.3500), population=146850, vulnerability_index=0.78, active_risk_zones=2, active_incidents=1, critical_roads_count=2),
    District(id="sik-gya", name="Gyalshing (West Sikkim)", state="Sikkim", center=Coordinates(lat=27.2833, lng=88.2333), population=136435, vulnerability_index=0.80, active_risk_zones=2, active_incidents=0, critical_roads_count=2),

    # Arunachal Pradesh
    District(id="aru-pap", name="Papum Pare", state="Arunachal Pradesh", center=Coordinates(lat=27.1511, lng=93.6337), population=176562, vulnerability_index=0.83, active_risk_zones=3, active_incidents=2, critical_roads_count=3),
    District(id="aru-taw", name="Tawang", state="Arunachal Pradesh", center=Coordinates(lat=27.5861, lng=91.8653), population=49977, vulnerability_index=0.89, active_risk_zones=3, active_incidents=1, critical_roads_count=2),
    District(id="aru-wes", name="West Kameng", state="Arunachal Pradesh", center=Coordinates(lat=27.3167, lng=92.4167), population=83937, vulnerability_index=0.86, active_risk_zones=2, active_incidents=1, critical_roads_count=2),
    District(id="aru-eas", name="East Siang", state="Arunachal Pradesh", center=Coordinates(lat=28.0667, lng=95.3333), population=99019, vulnerability_index=0.76, active_risk_zones=1, active_incidents=0, critical_roads_count=2),
    District(id="aru-dib", name="Dibang Valley", state="Arunachal Pradesh", center=Coordinates(lat=28.8000, lng=95.9000), population=8004, vulnerability_index=0.90, active_risk_zones=3, active_incidents=1, critical_roads_count=1),

    # Assam
    District(id="asm-kam", name="Kamrup Metropolitan (Guwahati)", state="Assam", center=Coordinates(lat=26.1445, lng=91.7362), population=1253938, vulnerability_index=0.77, active_risk_zones=3, active_incidents=2, critical_roads_count=5),
    District(id="asm-dim", name="Dima Hasao (Haflong)", state="Assam", center=Coordinates(lat=25.1764, lng=93.0186), population=214102, vulnerability_index=0.92, active_risk_zones=4, active_incidents=3, critical_roads_count=3),
    District(id="asm-kar", name="Karbi Anglong", state="Assam", center=Coordinates(lat=26.1500, lng=93.5000), population=965280, vulnerability_index=0.73, active_risk_zones=2, active_incidents=1, critical_roads_count=3),
    District(id="asm-cac", name="Cachar (Silchar)", state="Assam", center=Coordinates(lat=24.8333, lng=92.8000), population=1736617, vulnerability_index=0.71, active_risk_zones=1, active_incidents=1, critical_roads_count=3),

    # Mizoram
    District(id="miz-aiz", name="Aizawl", state="Mizoram", center=Coordinates(lat=23.7307, lng=92.7173), population=400309, vulnerability_index=0.87, active_risk_zones=4, active_incidents=2, critical_roads_count=3),
    District(id="miz-lun", name="Lunglei", state="Mizoram", center=Coordinates(lat=22.8833, lng=92.7333), population=161428, vulnerability_index=0.81, active_risk_zones=2, active_incidents=1, critical_roads_count=2),
    District(id="miz-cha", name="Champhai", state="Mizoram", center=Coordinates(lat=23.4757, lng=93.3275), population=125745, vulnerability_index=0.78, active_risk_zones=1, active_incidents=0, critical_roads_count=2),

    # Manipur
    District(id="man-imp", name="Imphal West", state="Manipur", center=Coordinates(lat=24.8170, lng=93.9368), population=517992, vulnerability_index=0.69, active_risk_zones=1, active_incidents=1, critical_roads_count=3),
    District(id="man-sen", name="Senapati", state="Manipur", center=Coordinates(lat=25.2667, lng=94.0167), population=479148, vulnerability_index=0.84, active_risk_zones=3, active_incidents=2, critical_roads_count=2),
    District(id="man-non", name="Noney (Tupul Valley)", state="Manipur", center=Coordinates(lat=24.7833, lng=93.6000), population=45000, vulnerability_index=0.93, active_risk_zones=3, active_incidents=2, critical_roads_count=2),

    # Tripura
    District(id="tri-wes", name="West Tripura (Agartala)", state="Tripura", center=Coordinates(lat=23.8315, lng=91.2868), population=918200, vulnerability_index=0.60, active_risk_zones=1, active_incidents=0, critical_roads_count=2),
    District(id="tri-dha", name="Dhalai", state="Tripura", center=Coordinates(lat=23.9000, lng=91.9000), population=378230, vulnerability_index=0.66, active_risk_zones=1, active_incidents=0, critical_roads_count=2),
]

# Lifeline Road Corridors in Northeast India
ROADS_DATA = [
    Road(
        id="rd-nh29",
        name="NH-29 Kohima - Dimapur Corridor",
        highway_number="NH-29",
        state="Nagaland",
        district="Kohima",
        start_point="Dimapur Bypass",
        end_point="Kohima Garrison",
        coordinates_path=[[25.9094, 93.7266], [25.8123, 93.8543], [25.7543, 93.9782], [25.6751, 94.1086]],
        status=RoadStatus.SLOW,
        blockage_cause="Debris clearance in progress near Pagla Pahar and Zubza section",
        alternative_route="Via Niuland-Kohima secondary bypass (Heavy vehicles restricted)",
        is_demo=True
    ),
    Road(
        id="rd-nh10",
        name="NH-10 Siliguri - Gangtok Lifeline",
        highway_number="NH-10",
        state="Sikkim",
        district="Gangtok",
        start_point="Sevoke Bridge",
        end_point="Gangtok Ranipool",
        coordinates_path=[[26.8833, 88.4833], [27.0500, 88.5167], [27.1833, 88.5500], [27.3389, 88.6065]],
        status=RoadStatus.BLOCKED,
        blockage_cause="Major active mudflow and slope wash-out at 29th Mile / Setijhora",
        alternative_route="Via Lava - Algarah - Reshi - Rhenock border route",
        is_demo=True
    ),
    Road(
        id="rd-gsroad",
        name="NH-06 / GS Road Shillong - Guwahati Expressway",
        highway_number="NH-06",
        state="Meghalaya",
        district="Ri-Bhoi & East Khasi Hills",
        start_point="Jorabat Junction",
        end_point="Shillong Barik Point",
        coordinates_path=[[26.1100, 91.8600], [25.9042, 91.8797], [25.6980, 91.9050], [25.5788, 91.8933]],
        status=RoadStatus.OPEN,
        blockage_cause=None,
        alternative_route="Normal transit operational",
        is_demo=True
    ),
    Road(
        id="rd-nh27haflong",
        name="NH-27 / Haflong - Silchar Hill Corridor",
        highway_number="NH-27",
        state="Assam",
        district="Dima Hasao",
        start_point="Lumding Crossing",
        end_point="Jatinga - Silchar",
        coordinates_path=[[25.7500, 93.1600], [25.3500, 93.0800], [25.1764, 93.0186], [24.9500, 92.9000]],
        status=RoadStatus.SLOW,
        blockage_cause="Slit creep along railway underpass and Jatinga valley curves",
        alternative_route="Single-lane regulated transit under GREF supervision",
        is_demo=True
    ),
    Road(
        id="rd-nh13tawang",
        name="NH-13 Bhalukpong - Bomdila - Tawang Highway",
        highway_number="NH-13",
        state="Arunachal Pradesh",
        district="West Kameng & Tawang",
        start_point="Bhalukpong Gate",
        end_point="Tawang Monastery Reach",
        coordinates_path=[[27.0100, 92.6500], [27.2600, 92.4200], [27.5000, 92.1000], [27.5861, 91.8653]],
        status=RoadStatus.OPEN,
        blockage_cause=None,
        alternative_route="Sela Tunnel link open; high-clearance 4WD advisory in Seshni slide area",
        is_demo=True
    ),
    Road(
        id="rd-nh37imphal",
        name="NH-37 Imphal - Jiribam Highway",
        highway_number="NH-37",
        state="Manipur",
        district="Noney & Imphal West",
        start_point="Jiribam Border",
        end_point="Imphal Kangla",
        coordinates_path=[[24.8000, 93.1200], [24.7833, 93.6000], [24.8000, 93.8000], [24.8170, 93.9368]],
        status=RoadStatus.SLOW,
        blockage_cause="Soil slump near Tupul railway bridge construction embankment",
        alternative_route="Regulated convoy movement with NDRF pilot vehicles",
        is_demo=True
    ),
]

# Vulnerable Hill Communities / Villages
VILLAGES_DATA = [
    VulnerableVillage(id="v-maw", name="Mawsmai & Nohsngithiang Ridge", district="East Khasi Hills", state="Meghalaya", coordinates=Coordinates(lat=25.2344, lng=91.6883), population=2840, risk_level=SeverityLevel.CRITICAL, nearest_road_km=0.4, nearest_health_facility_km=4.2, nearest_shelter_name="Sohra Community Multipurpose Hall", nearest_shelter_distance_km=2.1, slope_proximity_meters=45.0, active_warning="Evacuation readiness notice for cliffside settlements", is_demo=True),
    VulnerableVillage(id="v-zub", name="Zubza Valley", district="Kohima", state="Nagaland", coordinates=Coordinates(lat=25.7042, lng=94.0289), population=1950, risk_level=SeverityLevel.HIGH, nearest_road_km=0.2, nearest_health_facility_km=6.5, nearest_shelter_name="Zubza Government Higher Secondary Shelter", nearest_shelter_distance_km=1.4, slope_proximity_meters=80.0, active_warning="Watch: Slope crack widening observed above upper ward", is_demo=True),
    VulnerableVillage(id="v-sin", name="Singtam Downstream Slopes", district="Gangtok", state="Sikkim", coordinates=Coordinates(lat=27.2340, lng=88.4980), population=5890, risk_level=SeverityLevel.CRITICAL, nearest_road_km=0.1, nearest_health_facility_km=1.2, nearest_shelter_name="Singtam Indoor Sports Complex Relief Center", nearest_shelter_distance_km=0.8, slope_proximity_meters=25.0, active_warning="Warning: Flash surge risk combined with unstable lateral moraine", is_demo=True),
    VulnerableVillage(id="v-jat", name="Jatinga Ridge Settlement", district="Dima Hasao", state="Assam", coordinates=Coordinates(lat=25.1200, lng=93.0400), population=3120, risk_level=SeverityLevel.HIGH, nearest_road_km=0.6, nearest_health_facility_km=7.8, nearest_shelter_name="Haflong Town Hall Evacuation Base", nearest_shelter_distance_km=5.0, slope_proximity_meters=110.0, active_warning="Advisory: Saturated shale layer monitoring underway", is_demo=True),
    VulnerableVillage(id="v-dir", name="Dirang Cliffside Ward", district="West Kameng", state="Arunachal Pradesh", coordinates=Coordinates(lat=27.3500, lng=92.2300), population=1420, risk_level=SeverityLevel.MODERATE, nearest_road_km=1.1, nearest_health_facility_km=3.0, nearest_shelter_name="Dirang Monastic School Shelter", nearest_shelter_distance_km=1.9, slope_proximity_meters=140.0, active_warning=None, is_demo=True),
    VulnerableVillage(id="v-durtlang", name="Durtlang Leitan Hillside", district="Aizawl", state="Mizoram", coordinates=Coordinates(lat=23.7745, lng=92.7312), population=7200, risk_level=SeverityLevel.CRITICAL, nearest_road_km=0.3, nearest_health_facility_km=2.1, nearest_shelter_name="Synod Hospital Safe Shelter Wing", nearest_shelter_distance_km=1.5, slope_proximity_meters=35.0, active_warning="Critical: Subsidence cracks detected across 12 residential foundations", is_demo=True),
    VulnerableVillage(id="v-tup", name="Tupul Lower Colony", district="Noney", state="Manipur", coordinates=Coordinates(lat=24.7833, lng=93.6000), population=1650, risk_level=SeverityLevel.HIGH, nearest_road_km=0.8, nearest_health_facility_km=11.0, nearest_shelter_name="Noney District HQ Relief Camp", nearest_shelter_distance_km=8.4, slope_proximity_meters=60.0, active_warning="High: Catchment water pooling on cut-slope bench", is_demo=True),
]

# Critical Infrastructure
INFRASTRUCTURE_DATA = [
    CriticalInfrastructure(id="inf-shil-civ", name="Shillong Civil Hospital", infra_type="Hospital", district="East Khasi Hills", state="Meghalaya", coordinates=Coordinates(lat=25.5720, lng=91.8810), risk_status=SeverityLevel.LOW, is_demo=True),
    CriticalInfrastructure(id="inf-koh-sec", name="Nagaland State Civil Secretariat", infra_type="Government HQ", district="Kohima", state="Nagaland", coordinates=Coordinates(lat=25.6890, lng=94.1020), risk_status=SeverityLevel.LOW, is_demo=True),
    CriticalInfrastructure(id="inf-gan-stnm", name="STNM Multi-Specialty Hospital Sochakgang", infra_type="Hospital", district="Gangtok", state="Sikkim", coordinates=Coordinates(lat=27.3190, lng=88.5990), risk_status=SeverityLevel.MODERATE, is_demo=True),
    CriticalInfrastructure(id="inf-haf-sub", name="Haflong 132kV Power Grid Substation", infra_type="Power Substation", district="Dima Hasao", state="Assam", coordinates=Coordinates(lat=25.1650, lng=93.0120), risk_status=SeverityLevel.HIGH, is_demo=True),
    CriticalInfrastructure(id="inf-aiz-syn", name="Durtlang Synod Hospital", infra_type="Hospital", district="Aizawl", state="Mizoram", coordinates=Coordinates(lat=23.7710, lng=92.7300), risk_status=SeverityLevel.HIGH, is_demo=True),
    CriticalInfrastructure(id="inf-non-brg", name="Ijai River Railway Bridge #43", infra_type="Bridge / Railway", district="Noney", state="Manipur", coordinates=Coordinates(lat=24.7780, lng=93.5920), risk_status=SeverityLevel.CRITICAL, is_demo=True),
]

# Grounded Research Historical Landslide Events (1998-2025 ISRO/NRSC, NESAC, SDMA records)
# Fact: ~18.8?19% of India's mapped landslides (~80,000 nationwide) are in Northeast Himalayas
HISTORICAL_EVENTS_DATA = [
    HistoricalLandslide(id="hist-001", event_year=2025, event_date="2025-06-14", state="Meghalaya", district="East Khasi Hills", location_name="Mawkdok Dymmiew Valley Slopes", coordinates=Coordinates(lat=25.3920, lng=91.7580), trigger="Cloudburst & Heavy Antecedent Rain", severity=SeverityLevel.CRITICAL, reported_casualties=4, estimated_economic_loss_inr_cr=18.5, source_agency="NESAC Seasonal Inventory 2025", is_demo_historical=False),
    HistoricalLandslide(id="hist-002", event_year=2024, event_date="2024-05-28", state="Nagaland", district="Peren", location_name="Peren Hill Town Descent NH-129A", coordinates=Coordinates(lat=25.5170, lng=93.7407), trigger="Pre-monsoon Storm Remal Saturated Soil", severity=SeverityLevel.CRITICAL, reported_casualties=2, estimated_economic_loss_inr_cr=125.0, source_agency="Nagaland SDMA & MDoNER Loss Assessment", is_demo_historical=False),
    HistoricalLandslide(id="hist-003", event_year=2024, event_date="2024-06-02", state="Nagaland", district="Shamator", location_name="Shamator - Chessore Road Failure", coordinates=Coordinates(lat=26.0460, lng=94.9450), trigger="Torrential Rainfall & Slope Undermining", severity=SeverityLevel.CRITICAL, reported_casualties=1, estimated_economic_loss_inr_cr=108.0, source_agency="Nagaland SDMA & MDoNER Loss Assessment", is_demo_historical=False),
    HistoricalLandslide(id="hist-004", event_year=2023, event_date="2023-10-04", state="Sikkim", district="Mangan (North Sikkim)", location_name="Chungthang Dam Upstream Flank Failure", coordinates=Coordinates(lat=27.6020, lng=88.6480), trigger="GLOF South Lhonak Lake Surge & Flank Collapse", severity=SeverityLevel.CRITICAL, reported_casualties=42, estimated_economic_loss_inr_cr=850.0, source_agency="ISRO/NRSC Disaster Watch", is_demo_historical=False),
    HistoricalLandslide(id="hist-005", event_year=2022, event_date="2022-06-30", state="Manipur", district="Noney", location_name="Tupul Railway Yard & Ijai River Slump", coordinates=Coordinates(lat=24.7833, lng=93.6000), trigger="Prolonged Monsoon Rain & Cut-Slope Failure", severity=SeverityLevel.CRITICAL, reported_casualties=61, estimated_economic_loss_inr_cr=340.0, source_agency="GSI Geotechnical Forensic Assessment", is_demo_historical=False),
    HistoricalLandslide(id="hist-006", event_year=2022, event_date="2022-05-18", state="Assam", district="Dima Hasao", location_name="New Haflong Railway Station Inundation & Slip", coordinates=Coordinates(lat=25.1764, lng=93.0186), trigger="Flash Floods & Saturated Siltstone Slump", severity=SeverityLevel.CRITICAL, reported_casualties=7, estimated_economic_loss_inr_cr=210.0, source_agency="Northeast Frontier Railway & ASDMA", is_demo_historical=False),
    HistoricalLandslide(id="hist-007", event_year=2021, event_date="2021-08-11", state="Sikkim", district="Gangtok", location_name="29th Mile National Highway 10", coordinates=Coordinates(lat=27.1833, lng=88.5500), trigger="Teesta River Toeing & Heavy Monsoon Rain", severity=SeverityLevel.HIGH, reported_casualties=0, estimated_economic_loss_inr_cr=32.0, source_agency="BRO Project Swastik", is_demo_historical=False),
    HistoricalLandslide(id="hist-008", event_year=2020, event_date="2020-07-10", state="Arunachal Pradesh", district="Papum Pare", location_name="Modirijo Itanagar Urban Hill Cut", coordinates=Coordinates(lat=27.1120, lng=93.6190), trigger="Urban Drainage Overflow & Unscientific Hill Cutting", severity=SeverityLevel.HIGH, reported_casualties=8, estimated_economic_loss_inr_cr=14.0, source_agency="Arunachal SDMA Report", is_demo_historical=False),
    HistoricalLandslide(id="hist-009", event_year=2019, event_date="2019-09-04", state="Mizoram", district="Aizawl", location_name="Laipuitlang Multi-Story Collapse Flank", coordinates=Coordinates(lat=23.7420, lng=92.7210), trigger="Heavy Downpour on Weathered Shale", severity=SeverityLevel.CRITICAL, reported_casualties=11, estimated_economic_loss_inr_cr=45.0, source_agency="Mizoram Disaster Management & Rehab", is_demo_historical=False),
    HistoricalLandslide(id="hist-010", event_year=2018, event_date="2018-06-18", state="Meghalaya", district="East Khasi Hills", location_name="Pynursla Dawki Ridge NH-206", coordinates=Coordinates(lat=25.3100, lng=91.9000), trigger="Continuous 72h Rainfall exceeding 320mm", severity=SeverityLevel.HIGH, reported_casualties=3, estimated_economic_loss_inr_cr=22.0, source_agency="PWD Roads Meghalaya & NESAC", is_demo_historical=False),
]

# External Data Source Integration Registry
DATA_SOURCES_REGISTRY = [
    DataSource(id="ds-imd", agency_name="India Meteorological Department (IMD)", data_type="Real-Time Automated Weather Station (AWS) & Gridded Rainfall Forecast", update_frequency="Every 15 Minutes", last_ingestion=datetime.utcnow(), status=DataSourceStatus.CONNECTED_DEMO, records_count=1840, latency_ms=120, notes="Synthetic realistic Doppler & AWS rainfall grid simulated for Northeast Region."),
    DataSource(id="ds-nrsc", agency_name="ISRO / NRSC / Bhuvan Geoportal", data_type="Landslide Spatial Inventory (1998-2022) & CartoDEM 30m Terrain", update_frequency="Daily Batch / Periodic Sync", last_ingestion=datetime.utcnow(), status=DataSourceStatus.CONNECTED_DEMO, records_count=15200, latency_ms=210, notes="ISRO/NRSC ~80,000 national landslide inventory integration layer with ~18.8-19% Northeast Himalaya allocation."),
    DataSource(id="ds-gsi", agency_name="Geological Survey of India (GSI)", data_type="National Landslide Susceptibility Mapping (NLSM 1:50k) & Lithology", update_frequency="Monthly / Static Vector", last_ingestion=datetime.utcnow(), status=DataSourceStatus.INTEGRATION_READY, records_count=320, latency_ms=45, notes="NLSM GIS Vector overlays and geotechnical lithology fault layers."),
    DataSource(id="ds-nesac", agency_name="NESAC / NER-DRR (Department of Space)", data_type="Northeast Seasonal Landslide Inventories & Early Warning Indicators", update_frequency="Every 6 Hours", last_ingestion=datetime.utcnow(), status=DataSourceStatus.CONNECTED_DEMO, records_count=374, latency_ms=160, notes="2025 Seasonal Inventory (374 recorded events, 63 casualties reference dataset)."),
    DataSource(id="ds-field", agency_name="District EOCs & Field Officer Patrols", data_type="Geo-tagged Crack, Subsidence & Road Blockage Mobile Reports", update_frequency="Real-Time Stream", last_ingestion=datetime.utcnow(), status=DataSourceStatus.LIVE_OPERATIONAL, records_count=48, latency_ms=80, notes="Live operational prototype queue with offline PWA synchronization support."),
    DataSource(id="ds-sachet", agency_name="NDMA SACHET / National Cell Broadcast", data_type="Common Alerting Protocol (CAP v1.2) Upstream Dissemination Gateway", update_frequency="Event-Driven Webhook", last_ingestion=datetime.utcnow(), status=DataSourceStatus.INTEGRATION_READY, records_count=12, latency_ms=95, notes="Prototype simulation adapter for standard CAP XML/JSON export and May 2026 Cell Broadcast handshake."),
]

# 5 Dedicated Hackathon Scenarios
DEMO_SCENARIOS = [
    DemoScenario(
        id="scen-1",
        code="NORMAL_MONSOON",
        name="1. Normal Monsoon Baseline",
        subtitle="Nominal rainfall, minor runoff, clear road lifelines",
        description="Standard seasonal rainfall across Northeast India. Slope saturation remains below critical thresholds. Roads are open, and alert status is Advisory/Nominal.",
        state_focus="Meghalaya & Assam",
        district_focus="East Khasi Hills & Kamrup",
        rainfall_surge_factor=1.0,
        regional_risk_score=38,
        critical_zones_count=1,
        active_incidents_count=2,
        alerts_count=1,
        affected_roads_count=0,
        narrative_steps=[
            "Monitor baseline gauges across Shillong and Guwahati corridors.",
            "Inspect low-level runoff in vulnerable catchments.",
            "Verify automated ingestion health across IMD and NESAC."
        ]
    ),
    DemoScenario(
        id="scen-2",
        code="HEAVY_CLOUDBURST",
        name="2. Heavy Monsoon Cloudburst (Mawsynram - Sohra)",
        subtitle="Extreme 24h precipitation (>280mm) surging slope pore pressure",
        description="Intense localized precipitation over East Khasi Hills and Ri-Bhoi. Saturated soil weight and hydraulic pressure trigger HIGH to CRITICAL risk scores.",
        state_focus="Meghalaya",
        district_focus="East Khasi Hills",
        rainfall_surge_factor=3.2,
        regional_risk_score=78,
        critical_zones_count=6,
        active_incidents_count=5,
        alerts_count=3,
        affected_roads_count=2,
        narrative_steps=[
            "AI Risk Engine flags East Khasi Hills with Risk Score 84/100 (CRITICAL).",
            "Explainable XAI reveals Rainfall Trigger (+36) and Antecedent Saturation (+24) as primary drivers.",
            "District Officer reviews automated warning recommendation for Sohra belt."
        ]
    ),
    DemoScenario(
        id="scen-3",
        code="SLOPE_CRACK_IMMINENT",
        name="3. Imminent Slope Failure & Tension Cracks (NH-29 Nagaland)",
        subtitle="Field officer logs 15cm tension crack near Pagla Pahar",
        description="A field patrol in Kohima/Dimapur logs geo-tagged photographs of active crown cracks above NH-29. Composite risk surges, recommending immediate traffic slowdown.",
        state_focus="Nagaland",
        district_focus="Kohima & Dimapur",
        rainfall_surge_factor=2.1,
        regional_risk_score=82,
        critical_zones_count=8,
        active_incidents_count=7,
        alerts_count=4,
        affected_roads_count=3,
        narrative_steps=[
            "Field officer uploads geo-tagged photo with 15cm crack width.",
            "AI Engine incorporates field report evidence factor (+18) pushing Zubza zone to CRITICAL.",
            "Traffic control updates NH-29 status to SLOW with heavy convoy restrictions."
        ]
    ),
    DemoScenario(
        id="scen-4",
        code="ACTIVE_LANDSLIDE_BLOCKAGE",
        name="4. Active Landslide & Lifeline Blockage (NH-10 Sikkim)",
        subtitle="Debris flow shuts NH-10 near 29th Mile, isolating 14 villages",
        description="Major slope failure severs NH-10. AI engine prioritizes response queue, calculates alternative relief routes via Lava-Reshi, and prepares CAP evacuation broadcast.",
        state_focus="Sikkim",
        district_focus="Gangtok & Mangan",
        rainfall_surge_factor=3.8,
        regional_risk_score=91,
        critical_zones_count=12,
        active_incidents_count=9,
        alerts_count=5,
        affected_roads_count=5,
        narrative_steps=[
            "NH-10 status switches to BLOCKED with major road wash-out.",
            "Response queue ranks Singtam Downstream Slopes as #1 Priority (5,890 population exposed).",
            "State EOC generates CAP v1.2 Alert for SACHET and Cell Broadcast transmission."
        ]
    ),
    DemoScenario(
        id="scen-5",
        code="MULTI_DISTRICT_CRISIS",
        name="5. Multi-District Regional Crisis (Regional MDoNER Overview)",
        subtitle="Cascading storm system spanning Meghalaya, Sikkim, Assam & Nagaland",
        description="Widespread pre-monsoon squall line impacts 4 states simultaneously. Demonstrates State/Regional Authority cross-district vulnerability ranking and resource deployment.",
        state_focus="Regional Northeast (4 States)",
        district_focus="Multi-District EOC",
        rainfall_surge_factor=3.5,
        regional_risk_score=88,
        critical_zones_count=18,
        active_incidents_count=14,
        alerts_count=8,
        affected_roads_count=8,
        narrative_steps=[
            "Regional Authority dashboard ranks Dima Hasao, Gangtok, and East Khasi Hills by vulnerability.",
            "Inter-state coordination triggers asset movement (NDRF 1st & 12th Battalions).",
            "Public Community View provides simplified localized safety guidance across 7 NE languages."
        ]
    )
]
