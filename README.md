<div align="center">

# ??? NER-LENS: Landslide Early Warning & Geotechnical Intelligence Platform

[![Live Production App](https://img.shields.io/badge/Live%20Deployment-Vercel%20Production-10b981?style=for-the-badge&logo=vercel&logoColor=white)](https://ner-lens-two.vercel.app/)
[![FastAPI](https://img.shields.io/badge/Backend-FastAPI%20REST-009688?style=for-the-badge&logo=fastapi&logoColor=white)](https://fastapi.tiangolo.com/)
[![React 18](https://img.shields.io/badge/Frontend-React%2018%20%2B%20Vite-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev/)
[![Groq AI](https://img.shields.io/badge/AI%20Engine-Groq%20Ultra--Fast%20LLM-F55036?style=for-the-badge&logo=groq&logoColor=white)](https://groq.com/)
[![Gemini AI](https://img.shields.io/badge/Multimodal-Google%20Gemini%201.5-4285F4?style=for-the-badge&logo=google&logoColor=white)](https://deepmind.google/technologies/gemini/)
[![Carto Maps](https://img.shields.io/badge/GIS%20Engine-Carto%20Dark%20%26%20Voyager-3EB5E7?style=for-the-badge&logo=leaflet&logoColor=white)](https://carto.com/)
[![Languages](https://img.shields.io/badge/Multilingual-11%20Indian%20Languages-8B5CF6?style=for-the-badge)](https://ner-lens-two.vercel.app/)

### ?? **Live Web Platform**: [https://ner-lens-two.vercel.app/](https://ner-lens-two.vercel.app/)

*A Mission-Critical Disaster Decision Support System developed for the Ministry of Development of North Eastern Region (MDoNER) & National Disaster Management Authority (NDMA).*

---

</div>

## ?? Table of Contents

- [Executive Summary](#-executive-summary)
- [Live Demo & Quick Links](#-live-demo--quick-links)
- [Core Capabilities](#-core-capabilities)
- [System Architecture](#-system-architecture)
- [Dual-LLM AI Disaster Intelligence Engine](#-dual-llm-ai-disaster-intelligence-engine)
- [Geotechnical Physics & Mathematical Formulations](#-geotechnical-physics--mathematical-formulations)
- [Interactive Real-Time AI Assistant](#-interactive-real-time-ai-assistant)
- [Carto GIS Basemaps](#-carto-gis-basemaps)
- [Multilingual System (11 Languages)](#-multilingual-system-11-languages)
- [API Reference Guide](#-api-reference-guide)
- [Installation & Local Setup](#-installation--local-setup)
- [Authority Sign In & Demo Accounts](#-authority-sign-in--demo-accounts)
- [Hardware & IoT Sensor Specifications](#-hardware--iot-sensor-specifications)
- [License & Acknowledgements](#-license--acknowledgements)

---

## ?? Executive Summary

The North Eastern Region (NER) of India accounts for over **60% of India's aggregate landslide hazard inventory**, with critical lifelines (such as NH-10, NH-310A, and the Lumding-Badarpur rail corridor) experiencing severe monsoon disruptions annually.

**NER-LENS (North Eastern Region Landslide Early-warning & Notification System)** is an operational, real-time, data-driven disaster intelligence platform designed to replace static dashboards with an intelligent, physics-grounded early warning ecosystem.

### ?? Key Innovations
1. **Live Open-Meteo Telemetry Ingestion**: Continuous WMO GFS gridded precipitation monitoring for 1h, 6h, 24h, 72h, and 7-day cumulative rainfall.
2. **Dual-Engine AI Reasoning (Groq + Gemini)**: Sub-second geotechnical failure analysis (<300ms) with multi-agent fallback.
3. **Interactive Conversational AI Assistant**: Ingests real-time IoT inclinometers, piezometer pore pressures, and shelter distance tables.
4. **Zero-Glitch 11-Language Multilingual Localization**: Pure 7-bit ASCII Unicode escape sequences preventing OS console encoding corruption (`??????`).
5. **Authenticated Carto GIS**: Pitch-black tactical Dark Matter and high-contrast topographic Voyager basemaps with zero watermarks.
6. **Common Alerting Protocol (CAP v1.2)**: Automated emergency broadcast drafting compliant with NDMA SACHET standards.

---

## ?? Live Demo & Quick Links

- **Production URL**: [https://ner-lens-two.vercel.app/](https://ner-lens-two.vercel.app/)
- **Backend API Docs**: `http://localhost:8000/docs` *(when running locally)*
- **Problem Statement**: SIH 2026 - Ministry of Development of North Eastern Region (MDoNER)

---

## ? Core Capabilities

```
                           ????????????????????????????????????????????????
                           ?          NER-LENS ARCHITECTURE V2.0          ?
                           ????????????????????????????????????????????????

  [ IoT SENSORS ]       [ OPEN-METEO API ]     [ ISRO BHUVAN / GSI ]     [ CITIZEN HAZARDS ]
  ? Inclinometers       ? 1h, 6h, 24h, 72h     ? Lithology Scans         ? Tension Cracks
  ? Piezometers           Precipitation        ? Slope Angles            ? Subsidence
  ? Pore Pressure       ? WMO GFS Grids        ? Fault Line Data         ? Road Blockages
         ?                      ?                       ?                        ?
         ?????????????????????????????????????????????????????????????????????????
                                ?
                                ?
         ???????????????????????????????????????????????????????????????
         ?              FASTAPI REAL-TIME BACKEND ENGINE               ?
         ?  ? Geotechnical Physics: FoS (Factor of Safety Calculator)   ?
         ?  ? Antecedent Precipitation Index (API 72h / 7d)            ?
         ?  ? Persistent SQLite Database & Media Vault                 ?
         ?  ? CAP v1.2 / NDMA SACHET Alert Broadcast Serializer        ?
         ???????????????????????????????????????????????????????????????
                                        ?
                    ?????????????????????????????????????????
                    ?                                       ?
    ?????????????????????????????????       ?????????????????????????????????
    ?     GROQ LLM INFERENCE        ?       ?       GOOGLE GEMINI AI        ?
    ?  ? Model: qwen/qwen3.6-27b    ?       ?  ? Model: gemini-1.5-flash    ?
    ?  ? Ultra-low latency (<300ms) ?       ?  ? Deep Geotechnical Analysis ?
    ?  ? Multilingual CAP Advisory  ?       ?  ? Multimodal Hazard Triage   ?
    ?????????????????????????????????       ?????????????????????????????????
                    ?????????????????????????????????????????
                                        ?
                                        ?
         ???????????????????????????????????????????????????????????????
         ?                 OBSIDIAN WEB CLIENT (REACT + VITE)          ?
         ?  ? Carto Dark Matter (Tactical) & Voyager Topographic GIS   ?
         ?  ? Live IoT Sensor Network & Inclinometer Depth Profiles    ?
         ?  ? Interactive AI Assistant Drawer with Speech & Telemetry  ?
         ?  ? 11 Languages (Telugu, Hindi, Assamese, Bengali, etc.)    ?
         ?  ? Common Alerting Protocol (CAP v1.2) Live Broadcast       ?
         ???????????????????????????????????????????????????????????????
```

---

## ?? Dual-LLM AI Disaster Intelligence Engine

The platform incorporates a **Dual-LLM Hybrid Orchestration Architecture**:

```
User Query / Automated Telemetry Trigger
                 ?
                 ?
     ?????????????????????????
     ? Ingest Live Context   ? (Slope angles, 24h rain, FoS, shelter distances, language)
     ?????????????????????????
                 ?
                 ?
     ?????????????????????????
     ?  Primary: Groq Cloud  ? (qwen/qwen3.6-27b @ ~280ms latency)
     ?????????????????????????
                 ?
        ???????????????????
        ?                 ?
    [ Success ]       [ Timeout / Rate Limit ]
        ?                 ?
        ?                 ?
   Return Reply     ?????????????????????????
                    ? Fallback 1: Gemini AI ? (gemini-1.5-flash)
                    ?????????????????????????
                                ?
                       ???????????????????
                       ?                 ?
                   [ Success ]       [ Network Error ]
                       ?                 ?
                       ?                 ?
                  Return Reply     ??????????????????????????
                                   ? Fallback 2: Heuristic  ? (Deterministic Rule Ensemble)
                                   ??????????????????????????
                                                ?
                                                ?
                                           Return Reply
```

### Integrated Model Specifications:
- **Groq Cloud Engine**: Powered by `qwen/qwen3.6-27b` for sub-second inference, rapid geotechnical explanation, and instant CAP alert generation.
- **Google Gemini Engine**: Powered by `gemini-1.5-flash` for multimodal hazard photo verification and complex geological reasoning.

---

## ?? Geotechnical Physics & Mathematical Formulations

The risk assessment core calculates slope stability and rainfall-induced shear stress using established geotechnical principles:

### 1. Factor of Safety ($\text{FoS}$)
Using the infinite slope limit equilibrium model under saturated steady-state seepage:

$$\text{FoS} = \frac{c' + (\gamma \cdot z \cdot \cos^2\beta - u) \tan\phi'}{\gamma \cdot z \cdot \sin\beta \cdot \cos\beta}$$

Where:
- $c'$ = Effective Soil Cohesion ($\text{kPa}$)
- $\phi'$ = Effective Internal Friction Angle ($^\circ$)
- $\gamma$ = Saturated Unit Weight of Soil ($\text{kN/m}^3$)
- $z$ = Depth to Failure Slip Plane ($\text{m}$)
- $\beta$ = Slope Gradient Angle ($^\circ$)
- $u$ = Pore Water Pressure measured by piezometers ($\text{kPa}$)

### 2. Antecedent Precipitation Index ($\text{API}$)
Calculates cumulative soil moisture memory over a 7-day decay function:

$$\text{API}_t = \sum_{i=1}^{7} k^i \cdot P_{t-i}$$

Where $k = 0.84$ is the hydrological recession coefficient and $P_{t-i}$ is the rainfall on day $t-i$.

### 3. Composite Risk Score Matrix ($0 - 100$)
$$\text{Risk Score} = 0.45 \cdot \left[1 - \min\left(1, \frac{\text{FoS}}{2.0}\right)\right] \times 100 + 0.35 \cdot \left(\frac{\text{Rain}_{24\text{h}}}{\text{Threshold}}\right) \times 100 + 0.20 \cdot \left(\frac{u}{u_{\text{crit}}}\right) \times 100$$

| Risk Score | Severity Level | Operational Protocol | Lifeline Road Impact |
|---|---|---|---|
| **80 ? 100** | ?? **CRITICAL** | Immediate evacuation to safe shelters; sirens active | **BLOCKED** (e.g. NH-310A) |
| **60 ? 79** | ?? **HIGH** | Standby SDRF/NDRF; warning bulletins broadcasted | **RESTRICTED / SLOW** (SH-5) |
| **40 ? 59** | ?? **MODERATE** | Increased sensor polling; inspect drainage culverts | **WATCH / OPEN** |
| **0 ? 39** | ?? **LOW / NOMINAL**| Continuous standard telemetry monitoring | **OPEN** |

---

## ?? Interactive Real-Time AI Assistant

A dedicated floating tactical **"Ask AI Assistant"** widget is integrated across the web application:
- **Context-Aware Geotechnical Intelligence**: Directly queries live slope sensors, rainfall feeds, and shelter databases.
- **Multilingual Decision Support**: Speaks and writes fluently in **all 11 languages** (Telugu, Hindi, English, Assamese, Bengali, Nepali, Manipuri, Mizo, Khasi, Garo, Nagamese).
- **One-Click Quick Action Chips**:
  - ? *Mangan Ridge Live Risk & Road Status*
  - ??? *Nearest Safe Shelters & Evacuation Routes*
  - ??? *Live Rainfall & Saturation Analysis*
  - ?? *Generate CAP Emergency Advisory in Telugu / Regional Languages*
  - ?? *Explain Factor of Safety (FoS) & Soil Mechanics*
- **Speech Synthesis (Text-to-Speech)** & Instant Clipboard Copying.

---

## ??? Carto GIS Basemaps

Integrated high-resolution Carto tile layers with authenticated API keys:

| Basemap Layer | Tile Endpoint | Visual Purpose |
|---|---|---|
| **Carto Dark Matter (Tactical)** *(Default)* | `https://basemaps.cartocdn.com/rastertiles/dark_all/{z}/{x}/{y}.png?key=...` | High-contrast pitch-black tactical base for sensors, heatmaps, and road corridors. |
| **Carto Voyager (Settlements & Contours)** | `https://basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}.png?key=...` | Topographic contours, drainage channels, villages, and hamlet boundaries. |
| **OpenStreetMap Standard** | `https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png` | Fallback universal map layer. |

---

## ???? Multilingual System (11 Languages)

All translation dictionaries (`src/lib/i18n.ts`) are stored in **pure 7-bit ASCII Unicode escape sequences** to ensure **zero encoding degradation** on any OS or browser:

| Code | Language | Native Script | Google Font Support |
|---|---|---|---|
| `en` | **English** | English | Inter, JetBrains Mono |
| `hi` | **Hindi** | ?????? | Noto Sans Devanagari |
| `te` | **Telugu** | ?????? | Noto Sans Telugu |
| `as` | **Assamese** | ??????? | Noto Sans Bengali |
| `bn` | **Bengali** | ????? | Noto Sans Bengali |
| `ne` | **Nepali** | ?????? | Noto Sans Devanagari |
| `mni` | **Manipuri** | ??????? | Noto Sans Bengali |
| `lus` | **Mizo** | Mizo ?awng | Inter |
| `kha` | **Khasi** | Ka Ktien Khasi | Inter |
| `grt` | **Garo** | A?chik | Inter |
| `nag` | **Nagamese** | Nagamese | Inter |

---

## ?? API Reference Guide

### 1. AI Real-Time Assistant
```http
POST /api/ai/chat
Content-Type: application/json

{
  "message": "What is the critical risk level at Mangan right now?",
  "language": "te"
}
```
**Response:**
```json
{
  "reply": "????? ?????? ???? ????????? ????????? ?????? (??????: 88, FoS: 1.08) ????????. ?? 24 ??????? 285???? ???????? ??????? ??? ???????? 94% ?? ???????...",
  "engine": "Groq Ultra-Fast Qwen/Llama Cloud",
  "language": "te"
}
```

### 2. Live Weather Telemetry (Open-Meteo)
```http
GET /api/weather/live?lat=27.508&lng=88.528&location_name=Mangan
```
**Response:**
```json
{
  "location_name": "Mangan",
  "temperature_c": 21.8,
  "humidity_percent": 92,
  "rainfall_1h_mm": 12.4,
  "rainfall_24h_mm": 285.0,
  "rainfall_72h_mm": 510.0,
  "source_agency": "Open-Meteo AWS Telemetry (WMO GFS Gridded Ingestion)",
  "status": "LIVE",
  "is_live": true
}
```

### 3. Geotechnical Locations & Slopes
```http
GET /api/locations
```

---

## ?? Installation & Local Setup

### 1. Clone the Repository
```bash
git clone https://github.com/your-username/ner-lens.git
cd ner-lens
```

### 2. Backend Setup (FastAPI)
```bash
cd backend
python -m venv venv
# Windows:
venv\Scripts\activate
# Linux/macOS:
source venv/bin/activate

pip install -r requirements.txt
python -m uvicorn app.main:app --host 127.0.0.1 --port 8000 --reload
```
*API runs at `http://127.0.0.1:8000` (Swagger UI at `/docs`).*

### 3. Frontend Setup (React + Vite)
```bash
cd frontend
npm install
npm run dev
```
*Web Application runs at `http://localhost:5173`.*

---

## ?? Authority Sign In & Demo Accounts

The platform includes 4 pre-calibrated one-click demo personas on the Authority Sign In page:

| Role | Username | Permissions |
|---|---|---|
| **Admin / SDMA Director** | `admin@nerlens.gov.in` | Full calibration, sensor threshold tuning, emergency red alert overrides. |
| **Disaster Officer (NDMA)** | `officer@ndma.gov.in` | Warning issuance, CAP broadcasting, shelter evacuation oversight. |
| **Field Geotechnical Officer (GSI)** | `field@gsi.gov.in` | Sensor calibration, ground telemetry validation, crack monitoring. |
| **Community User / Citizen** | `citizen@nerlens.org` | View local risk alerts, access designated safe shelters, report hazards. |

---

## ?? Hardware & IoT Sensor Specifications

| Sensor Type | Telemetry Metric | Sampling Interval | Measurement Range |
|---|---|---|---|
| **In-Place Inclinometers (IPI)** | Subsurface Lateral Shear Displacement | 60 seconds | $\pm 30^\circ$, $0.01\text{ mm/m}$ resolution |
| **Vibrating Wire Piezometers** | Pore Water Pressure ($u$) | 60 seconds | $0 - 1000\text{ kPa}$, $\pm 0.1\%$ FS accuracy |
| **MEMS Surface Tiltmeters** | Slope Surface Dip & Azimuth | 30 seconds | Dual-axis $\pm 15^\circ$, $0.001^\circ$ resolution |
| **Tipping Bucket Rain Gauges** | High-Precision Precipitation Rate | Real-time event | $0.2\text{ mm/tip}$, $0 - 500\text{ mm/hr}$ |

---

## ?? License & Acknowledgements

- **Developed For**: Ministry of Development of North Eastern Region (MDoNER) & National Disaster Management Authority (NDMA).
- **Hackathon Reference**: Smart India Hackathon (SIH 2026) - Problem Statement `SIH26001`.
- **Live Deployment**: Hosted on [Vercel Production](https://ner-lens-two.vercel.app/).
- **License**: MIT License.

---

<div align="center">
  <sub>Built with ?? for disaster resilience across North East India.</sub>
</div>
