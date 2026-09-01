import os
"""
NER-LENS Persistent Database & Incident Provider
Stores incidents, media paths, audit logs, and risk assessments into SQLite database.
"""
import sqlite3
import json
import uuid
from datetime import datetime, timezone
from typing import List, Optional, Dict, Any
from app.models.schemas import (
    Incident, IncidentCreate, IncidentMedia, UserRole, IncidentType,
    IncidentStatus, SeverityLevel, Coordinates, AuditLogEntry
)

DB_PATH = os.path.join(os.path.dirname(__file__), "..", "..", "ner_lens.db")

class IncidentDBProvider:
    """
    Persistent SQLite storage layer for Field Incidents and Audit Events.
    """

    @classmethod
    def init_db(cls):
        with sqlite3.connect(DB_PATH) as conn:
            cursor = conn.cursor()
            cursor.execute("""
                CREATE TABLE IF NOT EXISTS incidents (
                    id TEXT PRIMARY KEY,
                    incident_type TEXT,
                    severity TEXT,
                    state TEXT,
                    district TEXT,
                    location_name TEXT,
                    latitude REAL,
                    longitude REAL,
                    description TEXT,
                    reported_by TEXT,
                    reporter_role TEXT,
                    reporter_contact TEXT,
                    status TEXT,
                    road_blocked INTEGER,
                    road_name TEXT,
                    people_affected INTEGER,
                    infrastructure_affected TEXT,
                    immediate_danger INTEGER,
                    evacuation_recommended INTEGER,
                    media_json TEXT,
                    verified_by TEXT,
                    verified_at TEXT,
                    action_notes TEXT,
                    created_at TEXT,
                    synced_from_offline INTEGER,
                    is_demo INTEGER
                )
            """)
            cursor.execute("""
                CREATE TABLE IF NOT EXISTS audit_logs (
                    id TEXT PRIMARY KEY,
                    timestamp TEXT,
                    user_name TEXT,
                    user_role TEXT,
                    action TEXT,
                    target_entity TEXT,
                    location TEXT,
                    previous_state TEXT,
                    new_state TEXT,
                    ip_address TEXT
                )
            """)
            conn.commit()

    @classmethod
    def insert_incident(cls, data: IncidentCreate, media_items: List[IncidentMedia]) -> Incident:
        cls.init_db()
        inc_id = f"NER-INC-{datetime.now(timezone.utc).year}-{uuid.uuid4().hex[:6].upper()}"
        created_at_str = data.client_created_at.isoformat() if data.client_created_at else datetime.now(timezone.utc).isoformat()

        media_dicts = [m.model_dump(mode='json') for m in media_items]

        with sqlite3.connect(DB_PATH) as conn:
            cursor = conn.cursor()
            cursor.execute("""
                INSERT INTO incidents (
                    id, incident_type, severity, state, district, location_name,
                    latitude, longitude, description, reported_by, reporter_role,
                    reporter_contact, status, road_blocked, road_name, people_affected,
                    infrastructure_affected, immediate_danger, evacuation_recommended,
                    media_json, verified_by, verified_at, action_notes, created_at,
                    synced_from_offline, is_demo
                ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
            """, (
                inc_id,
                data.incident_type.value,
                data.severity.value,
                data.state,
                data.district,
                data.location_name,
                data.coordinates.lat,
                data.coordinates.lng,
                data.description,
                data.reported_by,
                data.reporter_role.value if data.reporter_role else "FIELD_OFFICER",
                data.reporter_contact,
                IncidentStatus.REPORTED.value,
                1 if data.road_blocked else 0,
                data.road_name,
                data.people_affected,
                json.dumps(data.infrastructure_affected),
                1 if data.immediate_danger else 0,
                1 if data.evacuation_recommended else 0,
                json.dumps(media_dicts),
                None,
                None,
                None,
                created_at_str,
                1 if data.is_offline_draft else 0,
                0
            ))
            conn.commit()

        # Log audit entry
        cls.log_audit(
            user_name=data.reported_by,
            user_role=data.reporter_role or UserRole.FIELD_OFFICER,
            action="REPORT_INCIDENT",
            target_entity=inc_id,
            location=f"{data.district}, {data.state}",
            new_state=IncidentStatus.REPORTED.value
        )

        return Incident(
            id=inc_id,
            incident_type=data.incident_type,
            severity=data.severity,
            state=data.state,
            district=data.district,
            location_name=data.location_name,
            coordinates=data.coordinates,
            description=data.description,
            reported_by=data.reported_by,
            reporter_role=data.reporter_role or UserRole.FIELD_OFFICER,
            reporter_contact=data.reporter_contact,
            status=IncidentStatus.REPORTED,
            road_blocked=data.road_blocked,
            road_name=data.road_name,
            people_affected=data.people_affected,
            infrastructure_affected=data.infrastructure_affected,
            immediate_danger=data.immediate_danger,
            evacuation_recommended=data.evacuation_recommended,
            media=media_items,
            created_at=datetime.fromisoformat(created_at_str),
            synced_from_offline=data.is_offline_draft or False,
            is_demo=False
        )

    @classmethod
    def get_all_incidents(cls) -> List[Incident]:
        cls.init_db()
        results = []
        with sqlite3.connect(DB_PATH) as conn:
            conn.row_factory = sqlite3.Row
            cursor = conn.cursor()
            cursor.execute("SELECT * FROM incidents ORDER BY created_at DESC")
            rows = cursor.fetchall()
            for r in rows:
                media_list = []
                if r["media_json"]:
                    try:
                        raw_media = json.loads(r["media_json"])
                        for m in raw_media:
                            media_list.append(IncidentMedia(
                                id=m.get("id", "med-01"),
                                media_type=m.get("media_type", "image/jpeg"),
                                url=m.get("url", ""),
                                file_name=m.get("file_name", "upload.jpg"),
                                file_size_kb=m.get("file_size_kb", 1024),
                                captured_at=datetime.fromisoformat(m["captured_at"]) if isinstance(m.get("captured_at"), str) else datetime.now(timezone.utc),
                                coordinates=Coordinates(lat=m["coordinates"]["lat"], lng=m["coordinates"]["lng"]),
                                is_demo=m.get("is_demo", False)
                            ))
                    except Exception:
                        pass

                results.append(Incident(
                    id=r["id"],
                    incident_type=IncidentType(r["incident_type"]),
                    severity=SeverityLevel(r["severity"]),
                    state=r["state"],
                    district=r["district"],
                    location_name=r["location_name"],
                    coordinates=Coordinates(lat=r["latitude"], lng=r["longitude"]),
                    description=r["description"],
                    reported_by=r["reported_by"],
                    reporter_role=UserRole(r["reporter_role"]),
                    reporter_contact=r["reporter_contact"],
                    status=IncidentStatus(r["status"]),
                    road_blocked=bool(r["road_blocked"]),
                    road_name=r["road_name"],
                    people_affected=r["people_affected"],
                    infrastructure_affected=json.loads(r["infrastructure_affected"] or "[]"),
                    immediate_danger=bool(r["immediate_danger"]),
                    evacuation_recommended=bool(r["evacuation_recommended"]),
                    media=media_list,
                    verified_by=r["verified_by"],
                    verified_at=datetime.fromisoformat(r["verified_at"]) if r["verified_at"] else None,
                    action_notes=r["action_notes"],
                    created_at=datetime.fromisoformat(r["created_at"]) if r["created_at"] else datetime.now(timezone.utc),
                    synced_from_offline=bool(r["synced_from_offline"]),
                    is_demo=bool(r["is_demo"])
                ))
        return results

    @classmethod
    def verify_incident(cls, incident_id: str, verified_by: str, notes: Optional[str] = None) -> Optional[Incident]:
        cls.init_db()
        now_str = datetime.now(timezone.utc).isoformat()
        with sqlite3.connect(DB_PATH) as conn:
            cursor = conn.cursor()
            cursor.execute("""
                UPDATE incidents 
                SET status = ?, verified_by = ?, verified_at = ?, action_notes = ?
                WHERE id = ?
            """, (IncidentStatus.VERIFIED.value, verified_by, now_str, notes, incident_id))
            conn.commit()

        cls.log_audit(
            user_name=verified_by,
            user_role=UserRole.DISTRICT_OFFICER,
            action="VERIFY_INCIDENT",
            target_entity=incident_id,
            location="EOC Dispatch",
            previous_state=IncidentStatus.REPORTED.value,
            new_state=IncidentStatus.VERIFIED.value
        )
        
        all_incs = cls.get_all_incidents()
        return next((i for i in all_incs if i.id == incident_id), None)

    @classmethod
    def log_audit(cls, user_name: str, user_role: UserRole, action: str, target_entity: str, location: str, previous_state: Optional[str] = None, new_state: Optional[str] = None):
        cls.init_db()
        aud_id = f"AUD-{uuid.uuid4().hex[:8].upper()}"
        now_str = datetime.now(timezone.utc).isoformat()
        with sqlite3.connect(DB_PATH) as conn:
            cursor = conn.cursor()
            cursor.execute("""
                INSERT INTO audit_logs (
                    id, timestamp, user_name, user_role, action, target_entity,
                    location, previous_state, new_state, ip_address
                ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
            """, (aud_id, now_str, user_name, user_role.value if isinstance(user_role, UserRole) else str(user_role), action, target_entity, location, previous_state, new_state, "127.0.0.1"))
            conn.commit()

    @classmethod
    def get_audit_logs(cls) -> List[AuditLogEntry]:
        cls.init_db()
        logs = []
        with sqlite3.connect(DB_PATH) as conn:
            conn.row_factory = sqlite3.Row
            cursor = conn.cursor()
            cursor.execute("SELECT * FROM audit_logs ORDER BY timestamp DESC LIMIT 100")
            rows = cursor.fetchall()
            for r in rows:
                logs.append(AuditLogEntry(
                    id=r["id"],
                    timestamp=datetime.fromisoformat(r["timestamp"]),
                    user_name=r["user_name"],
                    user_role=UserRole(r["user_role"]) if r["user_role"] in UserRole.__members__ else UserRole.FIELD_OFFICER,
                    action=r["action"],
                    target_entity=r["target_entity"],
                    location=r["location"],
                    previous_state=r["previous_state"],
                    new_state=r["new_state"],
                    ip_address=r["ip_address"]
                ))
        return logs
