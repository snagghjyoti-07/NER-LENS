# ??? NER-LENS: Landslide Early Warning & Geotechnical Intelligence Platform

> **Ministry of Development of North Eastern Region (MDoNER) ? National Disaster Management Authority (NDMA)**  
> *Real-Time, Data-Driven, Multilingual Disaster Decision Support System for North East India*

---

## ?? Executive Overview

**NER-LENS (North Eastern Region Landslide Early-warning & Notification System)** is a mission-critical geotechnical intelligence platform engineered for real-time monitoring, AI risk forecasting, and automated CAP v1.2 emergency alerting across high-risk Himalayan and North Eastern hill corridors (Sikkim, Meghalaya, Mizoram, Assam, Nagaland, Arunachal Pradesh, Manipur, Tripura, and Darjeeling-Kalimpong).

The platform replaces static dashboards with a **physics-informed AI engine**, **live Open-Meteo precipitation feeds**, **dual-layer Carto basemaps**, and a **Groq + Gemini multi-agent reasoning copilot** supporting **11 regional Indian languages**.

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
         ?  ? CAP v1.2 Public Warning & Offline PWA Capabilities       ?
         ???????????????????????????????????????????????????????????????
```

---

## ?? Key Platform Capabilities

### 1. ?? Dual-LLM AI Disaster Intelligence Engine
- **Groq Llama/Qwen Cloud (`qwen/qwen3.6-27b`)**: Delivers sub-second geotechnical failure analysis, antecedent moisture evaluation, and operational road-closure recommendations.
- **Google Gemini 1.5 Flash**: Multi-agent fallback engine for multimodal incident validation and long-horizon disaster simulation.
- **Real-Time Interactive AI Assistant (`<AIAssistantDrawer />`)**:
  - Context-aware chatbot with direct access to live sensor readings and road statuses.
  - One-click diagnostic chips for critical slopes (Mangan, Sohra, Champhai, Dima Hasao).
  - Built-in Text-to-Speech (Web Speech API) and clipboard copy.

### 2. ??? High-Resolution Authenticated Carto GIS
- **Carto Dark Matter (Tactical)**: Stealth pitch-black base map optimized for nighttime command center telemetry, active landslide polygons, and sensor telemetry beacons.
- **Carto Voyager (Topographic & Settlements)**: High-contrast elevation contours, drainage networks, hamlets, and highway corridors.
- **Overlay Layers**: Live Rainfall Isohyets, Inclinometer/Piezometer markers, Designated Safe Shelters, and Blocked Road Segments.

### 3. ??? Real-Time Weather Telemetry (Open-Meteo)
- Live gridded meteorological ingestion (WMO GFS) for all slope coordinates.
- Continuous tracking of **1h, 6h, 24h, 72h, and 7-day cumulative rainfall** with automatic calculation of Antecedent Precipitation Index (API).

### 4. ???? Zero-Glitch 11-Language Multilingual Localization
To eliminate Windows console encoding corruptions (`??????`), all strings are encoded in **pure 7-bit ASCII Unicode escape sequences** with native Google Font rendering:
1. **English (`en`)**: English
2. **?????? (`hi`)**: Hindi
3. **?????? (`te`)**: Telugu
4. **??????? (`as`)**: Assamese
5. **????? (`bn`)**: Bengali
6. **?????? (`ne`)**: Nepali
7. **??????? (`mni`)**: Manipuri (Meitei)
8. **Mizo ?awng (`lus`)**: Mizo
9. **Ka Ktien Khasi (`kha`)**: Khasi
10. **A?chik (`grt`)**: Garo
11. **Nagamese (`nag`)**: Nagamese

### 5. ?? Geotechnical Physics Core
- Calculates slope **Factor of Safety (FoS)** using infinite slope and modified Bishop limit equilibrium models:
  $$\text{FoS} = \frac{c' + (\gamma \cdot z \cdot \cos^2\beta - u) \tan\phi'}{\gamma \cdot z \cdot \sin\beta \cdot \cos\beta}$$
- Ingests pore water pressure ($u$), soil internal friction angle ($\phi'$), cohesion ($c'$), and slope gradient ($\beta$).

---

## ?? Project Directory Structure

```
Landslide/
??? backend/
?   ??? app/
?   ?   ??? api/v1/
?   ?   ?   ??? endpoints.py         # Complete REST API Router (Dashboard, AI, Weather, Shelters)
?   ?   ??? models/
?   ?   ?   ??? schemas.py           # Pydantic Schemas & CAP v1.2 Alert Structures
?   ?   ??? providers/
?   ?   ?   ??? weather_provider.py  # Live Open-Meteo WMO GFS Ingestion Layer
?   ?   ?   ??? incident_provider.py # Persistent SQLite Incident & Hazard DB
?   ?   ??? risk_engine/
?   ?   ?   ??? calculator.py        # Geotechnical Physics & FoS Risk Ensemble
?   ?   ??? services/
?   ?   ?   ??? groq_service.py      # Dual-Engine AI (Groq + Gemini Conversational System)
?   ?   ?   ??? sachet_cap.py        # NDMA SACHET / CAP v1.2 Protocol Generator
?   ?   ?   ??? store.py             # In-Memory Cache & Fallback Roster
?   ?   ??? main.py                  # FastAPI Application Entrypoint & Static Vault
?   ??? requirements.txt             # Python Dependencies
?
??? frontend/
?   ??? src/
?   ?   ??? components/
?   ?   ?   ??? AIAssistantDrawer.tsx# Real-Time Conversational AI Drawer with TTS
?   ?   ?   ??? AppLayout.tsx        # Command Center Shell & Nav
?   ?   ?   ??? AppLogo.tsx          # Custom Tactical Topographical Logo Component
?   ?   ?   ??? GisMap.tsx           # Carto Dark & Voyager Leaflet Map Engine
?   ?   ?   ??? LiveWeatherCard.tsx  # Open-Meteo Live Rainfall Telemetry Card
?   ?   ?   ??? EmergencyMode.tsx    # Full-Screen Critical Siren & Red Alert Dispatcher
?   ?   ??? context/
?   ?   ?   ??? AppContext.tsx       # Global State, Persistence, Auth & Multilingual Context
?   ?   ??? lib/
?   ?   ?   ??? i18n.ts              # 11-Language ASCII-Escaped Translation Dictionary
?   ?   ??? pages/
?   ?   ?   ??? Dashboard.tsx        # Primary Command Center Dashboard
?   ?   ?   ??? Prediction.tsx       # AI Risk Simulation & Geotechnical Sandbox
?   ?   ?   ??? Warnings.tsx         # CAP v1.2 Early Warning Dispatcher & History
?   ?   ?   ??? Evacuation.tsx       # Safe Shelter Routing & Evacuation Management
?   ?   ?   ??? Sensors.tsx          # In-Place Inclinometer & Piezometer Depth Profiles
?   ?   ?   ??? ReportHazard.tsx     # Citizen / Field Officer Incident Submission
?   ?   ?   ??? Login.tsx            # Authority Authentication & 1-Click Demo Accounts
?   ?   ??? App.tsx                  # Root Routing & View Switcher
?   ??? index.html                   # HTML Entrypoint with Noto Sans Indic Google Fonts
?   ??? package.json                 # Frontend Dependencies (React 18, Vite, Lucide, Leaflet)
??? README.md                        # Master Documentation
```

---

## ?? API Reference Guide

### 1. AI Intelligence Endpoints
- `POST /api/ai/chat`: Interactive multi-turn disaster copilot powered by Groq & Gemini.
  ```json
  // Request
  {
    "message": "What is the critical risk level at Mangan right now?",
    "language": "te"
  }
  // Response
  {
    "reply": "????? ?????? ???? ????????? ????????? ?????? (??????: 88, FoS: 1.08) ????????...",
    "engine": "Groq Ultra-Fast Qwen/Llama Cloud",
    "language": "te"
  }
  ```
- `POST /api/ai/assess`: Automated geotechnical failure diagnosis from slope parameters.

### 2. Meteorological Endpoints
- `GET /api/weather/live?lat=27.508&lng=88.528&location_name=Mangan`: Fetches real-time Open-Meteo precipitation, 24h/72h rainfall, humidity, and status attribution.

### 3. Geotechnical & Spatial Endpoints
- `GET /api/dashboard`: Summary KPI metrics (Regional Risk Index, Monitored Slopes, Active Warnings).
- `GET /api/locations`: Full list of monitored hills with FoS, lithology, and road status.
- `GET /api/sensors`: Real-time inclinometer displacement rates and pore water pressure logs.
- `GET /api/shelters`: Designated evacuation shelters with distance, capacity, and route status.

---

## ? Quick Start & Deployment

### Prerequisites
- Python 3.10+
- Node.js 18+ / npm 9+

### Step 1: Start Backend
```bash
cd backend
pip install -r requirements.txt
python -m uvicorn app.main:app --host 127.0.0.1 --port 8000 --reload
```
*Backend runs at `http://127.0.0.1:8000` (API Docs at `/docs`).*

### Step 2: Start Frontend
```bash
cd frontend
npm install
npm run dev -- --host 0.0.0.0 --port 5173
```
*Web Application runs at `http://localhost:5173`.*

---

## ??? Demo Accounts

The Authority Sign In page (`/login`) includes 4 pre-configured one-click accounts:
1. **Admin / SDMA Director**: Full system calibration and emergency dispatch privileges.
2. **Disaster Officer (NDMA)**: Warning issuance and shelter evacuation oversight.
3. **Field Geotechnical Officer (GSI)**: Sensor telemetry calibration and hazard validation.
4. **Community User / Citizen**: Incident reporting and localized safe shelter routing.

---

## ?? License
Developed for the **Ministry of Development of North Eastern Region (MDoNER)** and disaster management agencies under **SIH 2026**.
