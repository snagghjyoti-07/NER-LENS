"""
Automated Unit Tests for NER-LENS Backend API and AI Risk Engine
SIH 2026 - Problem Statement SIH26001 - MDoNER
"""
from fastapi.testclient import TestClient
from app.main import app

client = TestClient(app)

def test_root():
    res = client.get("/")
    assert res.status_code == 200
    assert "NER-LENS" in res.json()["project"]

def test_dashboard_kpis():
    res = client.get("/api/dashboard")
    assert res.status_code == 200
    data = res.json()
    assert "regional_risk_score" in data
    assert "critical_risk_zones" in data
    assert data["critical_risk_zones"] >= 1

def test_risk_zones_and_xai():
    res = client.get("/api/risk-zones")
    assert res.status_code == 200
    zones = res.json()
    assert len(zones) >= 5
    
    sohra_zone = next(z for z in zones if "sohra" in z["id"])
    assert len(sohra_zone["assessment"]["top_drivers"]) == 5
    assert sohra_zone["assessment"]["risk_score"] > 50

def test_custom_risk_evaluation():
    payload = {
        "rainfall_24h": 220.0,
        "rainfall_72h": 380.0,
        "slope_angle_deg": 38.0,
        "lithology_class": "Weathered Siltstone / Shale (Disang Group)",
        "historical_distance_km": 0.4,
        "active_cracks_reported": 2,
        "population_density": 3500,
        "model": "Physics-Informed Heuristic (API Index)"
    }
    res = client.post("/api/risk/evaluate", json=payload)
    assert res.status_code == 200
    data = res.json()
    assert data["severity"] == "CRITICAL"
    assert data["risk_score"] >= 75
    assert len(data["mitigation_options"]) == 3

def test_incident_creation_and_verification():
    payload = {
        "incident_type": "Landslide",
        "severity": "CRITICAL",
        "state": "Meghalaya",
        "district": "East Khasi Hills",
        "location_name": "Mawsmai Cliffside Test",
        "coordinates": {"lat": 25.2344, "lng": 91.6883},
        "description": "Test landslide incident for automated verification",
        "reported_by": "Automated Tester",
        "road_blocked": True,
        "road_name": "Sohra-Mawsmai Road",
        "people_affected": 50,
        "media_urls": []
    }
    res = client.post("/api/incidents", json=payload)
    assert res.status_code == 200
    inc_data = res.json()
    inc_id = inc_data["id"]
    assert inc_data["status"] == "Reported"

    v_res = client.post(f"/api/incidents/{inc_id}/verify?verified_by=Senior%20Disaster%20Officer")
    assert v_res.status_code == 200
    assert v_res.json()["status"] == "Verified"

def test_alert_cap_issuance():
    payload = {
        "title": "EMERGENCY: Test Slope Failure Alert",
        "severity": "Critical",
        "state": "Sikkim",
        "district": "Gangtok",
        "affected_locations": ["29th Mile", "Singtam"],
        "coordinates": {"lat": 27.1850, "lng": 88.5480},
        "radius_km": 15.0,
        "headline": "High landslide surge danger",
        "instruction": "Evacuate low lying riverbanks",
        "risk_score": 88,
        "key_drivers": ["Rainfall 210mm", "Slope 42 deg"]
    }
    res = client.post("/api/alerts?created_by=DDMA%20Officer", json=payload)
    assert res.status_code == 200
    alert_id = res.json()["id"]

    issue_res = client.post(f"/api/alerts/{alert_id}/issue?approved_by=SDMA%20Director")
    assert issue_res.status_code == 200
    assert issue_res.json()["status"] == "Issued"

    cap_res = client.get(f"/api/alerts/{alert_id}/cap-xml")
    assert cap_res.status_code == 200
    assert "<alert xmlns=" in cap_res.json()["cap_xml"]

def test_scenario_switching():
    res = client.post("/api/scenarios/apply/scen-4")
    assert res.status_code == 200
    assert res.json()["code"] == "ACTIVE_LANDSLIDE_BLOCKAGE"

    dash_res = client.get("/api/dashboard")
    assert dash_res.json()["blocked_roads"] >= 1
