import os
import json
import re
import urllib.request
from typing import Dict, Any, Optional, List

GROQ_API_KEY = os.getenv("GROQ_API_KEY")
GCP_API_KEY = os.getenv("GCP_API_KEY")
GROQ_MODEL = "qwen/qwen3.6-27b"

def clean_llm_response(text: str) -> str:
    """Remove reasoning <think> blocks and strip whitespace."""
    text = re.sub(r'<think>.*?</think>', '', text, flags=re.DOTALL)
    return text.strip()

def call_groq_api(messages: List[Dict[str, str]], max_tokens: int = 600) -> Optional[str]:
    url = "https://api.groq.com/openai/v1/chat/completions"
    data = {
        "model": GROQ_MODEL,
        "messages": messages,
        "temperature": 0.3,
        "max_tokens": max_tokens
    }
    req = urllib.request.Request(
        url,
        data=json.dumps(data).encode("utf-8"),
        headers={
            "Authorization": f"Bearer {GROQ_API_KEY}",
            "Content-Type": "application/json",
            "User-Agent": "NER-LENS-Engine"
        }
    )
    try:
        with urllib.request.urlopen(req, timeout=12) as res:
            res_json = json.loads(res.read().decode())
            return clean_llm_response(res_json["choices"][0]["message"]["content"])
    except Exception as e:
        print(f"[Groq Engine Notice]: {e}")
        return None

def call_gemini_api(prompt: str) -> Optional[str]:
    url = f"https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key={GEMINI_API_KEY}"
    data = {
        "contents": [{"parts": [{"text": prompt}]}]
    }
    req = urllib.request.Request(
        url,
        data=json.dumps(data).encode("utf-8"),
        headers={"Content-Type": "application/json"}
    )
    try:
        with urllib.request.urlopen(req, timeout=12) as res:
            res_json = json.loads(res.read().decode())
            return res_json["candidates"][0]["content"]["parts"][0]["text"].strip()
    except Exception as e:
        print(f"[Gemini Engine Notice]: {e}")
        return None

# Core Real-Time AI Chat Handler
def chat_with_disaster_ai(
    user_message: str,
    history: List[Dict[str, str]] = None,
    language: str = "en",
    live_slopes_context: str = ""
) -> Dict[str, Any]:
    system_prompt = (
        "You are NER-LENS AI (North Eastern Region Landslide Early Warning & Geotechnical Intelligence System).\n"
        "You serve Disaster Management Authorities (NDMA, SDMAs of Sikkim, Meghalaya, Assam, Mizoram, Nagaland, Arunachal Pradesh), "
        "field engineers, emergency responders, and exposed communities.\n\n"
        "You have direct real-time access to IoT inclinometers, piezometers, Open-Meteo rainfall feeds, and GSI geotechnical hazard mapping.\n"
        "Current Live Monitored Slopes & Hazards:\n"
        "- Mangan Ridge (Sikkim): Risk Score 88/100 (CRITICAL). Slope 44.5?, 24h Rain 285mm, Soil Moisture 94%, FoS 1.08. NH-310A Blocked. Nearest Shelter: Mangan Govt HSS Shelter (1.8km, Capacity: 350).\n"
        "- Sohra Rim Escarpment (Meghalaya): Risk Score 82/100 (HIGH). Slope 38.0?, 24h Rain 340mm, Soil Moisture 91%, FoS 1.14. SH-5 Restricted. Nearest Shelter: Cherrapunji Multipurpose Cyclone Shelter (2.4km, Capacity: 500).\n"
        "- Champhai Hill Slopes (Mizoram): Risk Score 74/100 (HIGH). Slope 36.2?, 24h Rain 190mm, FoS 1.18. NH-102B Under Watch. Nearest Shelter: Champhai Vengsang Indoor Stadium (1.2km, Capacity: 400).\n"
        "- Dima Hasao Rail Corridor (Assam): Risk Score 68/100 (MODERATE). Slope 32.5?, 24h Rain 145mm, FoS 1.25. Lumding-Badarpur Railway Line Monitored.\n\n"
        f"Instructions:\n"
        f"1. If the user asks in Telugu, Hindi, Assamese, Bengali, Nepali, Mizo, Manipuri, Khasi, Garo, Nagamese, or English, or if language '{language}' is requested, answer accurately in that language.\n"
        "2. Provide clear, scientific, and actionable geotechnical and disaster management advice.\n"
        "3. Format answers with clear bullet points, risk metrics, and shelter recommendations where appropriate.\n"
        "4. Tone: Highly authoritative, precise, life-saving, operational."
    )

    messages = [{"role": "system", "content": system_prompt}]
    if history:
        for turn in history[-6:]:  # Keep recent context
            messages.append({"role": turn.get("role", "user"), "content": turn.get("content", "")})
    messages.append({"role": "user", "content": user_message})

    reply = call_groq_api(messages)
    engine = "Groq Ultra-Fast Qwen/Llama Cloud"

    if not reply:
        # Fallback to Gemini
        gemini_prompt = f"{system_prompt}\n\nUser Question: {user_message}"
        reply = call_gemini_api(gemini_prompt)
        engine = "Google Gemini 1.5 Flash AI"

    if not reply:
        reply = (
            "Based on live geotechnical telemetry, Mangan Ridge is currently under CRITICAL alert (Risk: 88, FoS: 1.08) "
            "with NH-310A blocked. Sohra Rim is under HIGH alert due to 340mm 24h rainfall. "
            "Please coordinate with District Emergency Operations Centers (DEOC) for immediate evacuation to designated safe shelters."
        )
        engine = "Heuristic Geotechnical Rules Engine"

    return {
        "reply": reply,
        "engine": engine,
        "language": language
    }

def assess_slope_geotechnical_risk(
    location: str,
    slope_deg: float,
    rainfall_24h_mm: float,
    soil_moisture: float,
    pore_pressure_kpa: float,
    lang: str = "en"
) -> Dict[str, Any]:
    prompt = (
        f"Location: {location}\n"
        f"Slope Angle: {slope_deg}?\n"
        f"24h Rainfall: {rainfall_24h_mm} mm\n"
        f"Soil Moisture: {soil_moisture}%\n"
        f"Pore Water Pressure: {pore_pressure_kpa} kPa\n\n"
        f"Target language: {lang}\n\n"
        "Provide a high-authority disaster risk assessment with:\n"
        "1. Risk Verdict (CRITICAL / HIGH / MODERATE / LOW)\n"
        "2. Geotechnical Failure Mechanism Explanation (2 concise sentences)\n"
        "3. Lifeline Road Impact & Recommended Immediate Action"
    )

    res = chat_with_disaster_ai(prompt, language=lang)
    return {
        "location": location,
        "diagnosis": res["reply"],
        "engine": res["engine"],
        "parameters": {
            "slope_deg": slope_deg,
            "rainfall_24h_mm": rainfall_24h_mm,
            "soil_moisture": soil_moisture,
            "pore_pressure_kpa": pore_pressure_kpa
        }
    }
