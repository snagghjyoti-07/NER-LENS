"""
CAP (Common Alerting Protocol v1.2) Serializer & NDMA SACHET / Cell Broadcast Simulator
Compliant with OASIS CAP-V1.2 and NDMA national warning architecture.
"""
import uuid
from datetime import datetime, timedelta
from typing import Dict, Any
from app.models.schemas import Alert, AlertSeverity, AlertChannel

class SachetCAPService:
    """
    Transforms NER-LENS alert records into standardized CAP v1.2 XML and JSON payloads
    for transmission to NDMA SACHET and National Cell Broadcast gateways.
    """

    @staticmethod
    def generate_cap_xml(alert: Alert) -> str:
        identifier = alert.cap_identifier or f"IN-NER-LENS-{uuid.uuid4().hex[:8].upper()}"
        sent_time = alert.issued_at.isoformat() if alert.issued_at else datetime.utcnow().isoformat()
        expires_time = (alert.issued_at + timedelta(hours=24)).isoformat() if alert.issued_at else (datetime.utcnow() + timedelta(hours=24)).isoformat()
        
        urgency = "Immediate" if alert.severity == AlertSeverity.CRITICAL else "Expected" if alert.severity == AlertSeverity.WARNING else "Future"
        severity = "Extreme" if alert.severity == AlertSeverity.CRITICAL else "Severe" if alert.severity == AlertSeverity.WARNING else "Moderate"
        certainty = "Observed" if alert.risk_score >= 80 else "Likely"

        xml = f"""<?xml version="1.0" encoding="UTF-8"?>
<alert xmlns="urn:oasis:names:tc:emergency:cap:1.2">
  <identifier>{identifier}</identifier>
  <sender>ner-lens-eoc@mdoner.gov.in</sender>
  <sent>{sent_time}+05:30</sent>
  <status>Actual</status>
  <msgType>Alert</msgType>
  <scope>Public</scope>
  <info>
    <category>Geo</category>
    <event>Landslide Early Warning & Slope Failure Risk</event>
    <urgency>{urgency}</urgency>
    <severity>{severity}</severity>
    <certainty>{certainty}</certainty>
    <eventCode>
      <valueName>SAME</valueName>
      <value>LSW</value>
    </eventCode>
    <expires>{expires_time}+05:30</expires>
    <headline>{alert.headline}</headline>
    <description>{alert.title} | Risk Score: {alert.risk_score}/100. Primary drivers: {', '.join(alert.key_drivers)}</description>
    <instruction>{alert.instruction}</instruction>
    <area>
      <areaDesc>{alert.district}, {alert.state} - Affected: {', '.join(alert.affected_locations)}</areaDesc>
      <circle>{alert.coordinates.lat},{alert.coordinates.lng},{alert.radius_km}</circle>
    </area>
    <parameter>
      <valueName>disseminationChannels</valueName>
      <value>{', '.join([c.value for c in alert.channels])}</value>
    </parameter>
    <parameter>
      <valueName>sourceSystem</valueName>
      <value>NER-LENS Prototype SIH26001 MDoNER</value>
    </parameter>
  </info>
</alert>"""
        return xml.strip()

    @staticmethod
    def simulate_cell_broadcast_payload(alert: Alert) -> Dict[str, Any]:
        """
        Simulates payload for the Indian National Cell Broadcast System (Launched May 2026).
        """
        return {
            "cbs_message_id": f"CBS-NER-{uuid.uuid4().hex[:6].upper()}",
            "geo_fence_circle": {
                "latitude": alert.coordinates.lat,
                "longitude": alert.coordinates.lng,
                "radius_km": alert.radius_km
            },
            "broadcast_channels": [4370, 4371], # Standard Emergency Alert Channel IDs
            "short_text_en": f"EMERGENCY LANDSLIDE ALERT: High slope failure danger in {alert.district}. {alert.instruction[:90]}",
            "short_text_hi": f"???? ???????: {alert.district} ??? ??????? ?? ????? ????? ????? ???????? ????? ?? ?????",
            "short_text_regional": f"???????: {alert.district} ????? ?????????? ????????? ????? ?????",
            "transmitted_at": datetime.utcnow().isoformat(),
            "target_telecom_operators": ["BSNL", "Airtel", "Jio", "Vodafone-Idea"],
            "status": "SIMULATED_TRANSMISSION_SUCCESS",
            "is_prototype": True
        }
