"""
NER-LENS AI Risk Engine & Explainability (XAI) Architecture
SIH 2026 - Problem Statement SIH26001 - MDoNER
Always provides 3 selectable model architectures and 3 mitigation response options.
"""
import math
from typing import Dict, Any, List, Tuple
from app.models.schemas import (
    RiskEngineModel, SeverityLevel, ExplainableRiskAssessment, RiskDriver
)

class NERRiskEngine:
    """
    Multi-Criteria Landslide Risk Assessment Engine.
    Combines environmental triggers, geotechnical susceptibility, historical inventories,
    real-time field reports, and exposed assets.
    """

    @staticmethod
    def calculate_api(rainfall_daily_history: List[float], decay_factor: float = 0.84) -> float:
        """
        Calculates Antecedent Precipitation Index (API):
        API = sum_{t=1}^n (decay_factor^t * Rainfall_{t})
        """
        api = 0.0
        for t, r in enumerate(rainfall_daily_history, start=1):
            api += (decay_factor ** t) * r
        return round(api, 2)

    @classmethod
    def evaluate_risk(
        cls,
        rainfall_24h: float,
        rainfall_72h: float,
        rainfall_history: List[float],
        slope_angle_deg: float,
        lithology_class: str,
        historical_distance_km: float,
        active_cracks_reported: int,
        population_density: int,
        model: RiskEngineModel = RiskEngineModel.PHYSICS_HEURISTIC
    ) -> ExplainableRiskAssessment:
        """
        Evaluates risk score (0-100), severity tier, and explainable factor attribution.
        Always incorporates 3 model architecture choices.
        """
        api_val = cls.calculate_api(rainfall_history if rainfall_history else [rainfall_72h * 0.4, rainfall_72h * 0.3, rainfall_24h * 0.3])
        
        # 1. Rainfall Trigger Component (Max 35 points)
        # Normalized against typical Northeast monsoon thresholds (e.g. Sohra/Haflong 150mm/24h)
        rain_ratio = min(1.0, (rainfall_24h / 180.0) * 0.6 + (rainfall_72h / 320.0) * 0.4)
        api_ratio = min(1.0, api_val / 120.0)
        rainfall_score = (rain_ratio * 0.65 + api_ratio * 0.35) * 35.0

        # 2. Terrain & Geotechnical Susceptibility Component (Max 25 points)
        # Slope factor: critical angle for Himalayan weathered phyllite/shale is 28?-48?
        if slope_angle_deg < 15:
            slope_factor = 0.15
        elif 15 <= slope_angle_deg < 28:
            slope_factor = 0.50
        elif 28 <= slope_angle_deg <= 45:
            slope_factor = 0.95
        else: # very steep rock cliffs may shed or rockfall
            slope_factor = 0.80

        lithology_multipliers = {
            "Weathered Siltstone / Shale (Disang Group)": 1.0,
            "Fractured Gneiss / Quartzite (Shillong Plateau)": 0.85,
            "Unconsolidated Fluvial Terraces & Scree": 0.95,
            "Tertiary Sandstone with Clay Interbeds": 0.90,
            "Massive Granite / Basalt": 0.40,
            "Moderate Consolidated Sedimentary": 0.65
        }
        litho_factor = lithology_multipliers.get(lithology_class, 0.75)
        terrain_score = (slope_factor * 0.6 + litho_factor * 0.4) * 25.0

        # 3. Historical Inventory Proximity Component (Max 18 points)
        # Grounded in ISRO/NRSC & NESAC mapped inventories
        if historical_distance_km <= 0.5:
            hist_factor = 1.0
            hist_label = "Very High (Adjacent to Recorded Historical Scarp)"
        elif historical_distance_km <= 1.5:
            hist_factor = 0.75
            hist_label = "High (Within 1.5km of Historic Slide Cluster)"
        elif historical_distance_km <= 3.5:
            hist_factor = 0.45
            hist_label = "Moderate (Within 3.5km of Historic Slide Cluster)"
        else:
            hist_factor = 0.15
            hist_label = "Low (Sparse Historical Incidence)"
        historical_score = hist_factor * 18.0

        # 4. Field Evidence & Crack Observation Component (Max 14 points)
        # Fresh tension cracks or road dips indicate active creep
        if active_cracks_reported >= 3:
            crack_factor = 1.0
        elif active_cracks_reported == 2:
            crack_factor = 0.75
        elif active_cracks_reported == 1:
            crack_factor = 0.45
        else:
            crack_factor = 0.05
        crack_score = crack_factor * 14.0

        # 5. Infrastructure & Population Exposure Component (Max 8 points)
        pop_factor = min(1.0, population_density / 4000.0)
        exposure_score = pop_factor * 8.0

        # Model Variations (3 selectable options)
        if model == RiskEngineModel.PHYSICS_HEURISTIC:
            raw_total = rainfall_score + terrain_score + historical_score + crack_score + exposure_score
        elif model == RiskEngineModel.CALIBRATED_MATRIX:
            # Emphasizes lithology-rainfall matrix cross-product
            raw_total = (rainfall_score * 1.1) + (terrain_score * 1.1) + (historical_score * 0.8) + (crack_score * 0.9) + (exposure_score * 0.8)
        else: # ML_ENSEMBLE
            # Simulates non-linear threshold interaction
            interaction = 1.15 if (rainfall_24h > 120 and slope_angle_deg > 30) else 0.92
            raw_total = (rainfall_score + terrain_score + historical_score + crack_score + exposure_score) * interaction

        composite_score = int(min(100, max(5, round(raw_total))))

        # Severity Classification
        if composite_score >= 75:
            severity = SeverityLevel.CRITICAL
            rec_action = "Initiate immediate field patrol verification, restrict heavy vehicular transit, and draft CAP early warning."
        elif composite_score >= 55:
            severity = SeverityLevel.HIGH
            rec_action = "Place road maintenance units on standby, monitor culvert drainage, and alert vulnerable downhill hamlets."
        elif composite_score >= 35:
            severity = SeverityLevel.MODERATE
            rec_action = "Maintain standard automated AWS telemetry watch and review daily IMD Doppler radar forecasts."
        else:
            severity = SeverityLevel.LOW
            rec_action = "Nominal monitoring. Baseline seasonal precautions active."

        # XAI Driver Attribution
        total_parts = max(1.0, rainfall_score + terrain_score + historical_score + crack_score + exposure_score)
        
        drivers = [
            RiskDriver(
                name="24h/72h Cumulative Precipitation & API",
                category="Hydrological Trigger",
                score_contribution=round(rainfall_score, 1),
                relative_percentage=round((rainfall_score / total_parts) * 100, 1),
                description=f"24h: {rainfall_24h}mm | 72h: {rainfall_72h}mm | Antecedent Moisture Index: {api_val}mm",
                evidence_value=f"{rainfall_24h}mm / 24h",
                status="Critical" if rainfall_24h > 140 else "Elevated" if rainfall_24h > 70 else "Normal"
            ),
            RiskDriver(
                name="Geotechnical Slope Gradient & Lithology",
                category="Terrain Susceptibility",
                score_contribution=round(terrain_score, 1),
                relative_percentage=round((terrain_score / total_parts) * 100, 1),
                description=f"Slope angle: {slope_angle_deg}? | Strata: {lithology_class}",
                evidence_value=f"{slope_angle_deg}? Slope",
                status="Critical" if slope_angle_deg >= 32 else "Elevated" if slope_angle_deg >= 22 else "Moderate"
            ),
            RiskDriver(
                name="ISRO/NRSC Historical Landslide Density",
                category="Historical Precedent",
                score_contribution=round(historical_score, 1),
                relative_percentage=round((historical_score / total_parts) * 100, 1),
                description=hist_label,
                evidence_value=f"{historical_distance_km}km to nearest scarp",
                status="Critical" if historical_distance_km <= 0.8 else "Elevated" if historical_distance_km <= 2.0 else "Normal"
            ),
            RiskDriver(
                name="Field Observation & Tension Crack Signals",
                category="Field Verification",
                score_contribution=round(crack_score, 1),
                relative_percentage=round((crack_score / total_parts) * 100, 1),
                description=f"{active_cracks_reported} active ground deformation / crack reports verified in 48h.",
                evidence_value=f"{active_cracks_reported} reports",
                status="Critical" if active_cracks_reported >= 2 else "Elevated" if active_cracks_reported == 1 else "Normal"
            ),
            RiskDriver(
                name="Settlement & Infrastructure Exposure Factor",
                category="Consequence Vulnerability",
                score_contribution=round(exposure_score, 1),
                relative_percentage=round((exposure_score / total_parts) * 100, 1),
                description=f"Estimated population exposure density: {population_density} persons in direct drainage cone.",
                evidence_value=f"{population_density} pop",
                status="Elevated" if population_density > 2000 else "Moderate"
            )
        ]

        # 3 Pre-Calibrated Response Mitigation Options
        mitigation_options = [
            "Option 1 (High Urgency): Executive Order for Immediate Downhill Evacuation & Lifeline Highway Diversion.",
            "Option 2 (Field Action): Dispatch Quick-Response Engineering Patrol (GREF/BRO/PWD) for Culvert Unclogging & Crack Sealing.",
            "Option 3 (Public Notice): Broadcast Localized Advisory via SACHET CAP, Community Public Address & SMS to Village Headmen."
        ]

        # Summary Explainability Narrative
        top_driver = sorted(drivers, key=lambda x: x.score_contribution, reverse=True)[0]
        summary_exp = (
            f"Risk score is {composite_score}/100 ({severity.value}) primarily driven by {top_driver.name} "
            f"({top_driver.relative_percentage}% contribution) combined with {slope_angle_deg}? terrain slope and "
            f"{historical_distance_km}km proximity to historic landslide scarps."
        )

        return ExplainableRiskAssessment(
            risk_score=composite_score,
            severity=severity,
            model_used=model,
            confidence=0.88 if active_cracks_reported > 0 else 0.82,
            summary_explanation=summary_exp,
            top_drivers=drivers,
            rainfall_24h=rainfall_24h,
            rainfall_72h=rainfall_72h,
            antecedent_precipitation_index=api_val,
            slope_angle_degrees=slope_angle_deg,
            geotechnical_susceptibility=lithology_class,
            historical_event_density=hist_label,
            recent_field_incidents=active_cracks_reported,
            population_exposed=population_density,
            recommended_action=rec_action,
            mitigation_options=mitigation_options
        )
