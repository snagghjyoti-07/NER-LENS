"""
NER-LENS Main FastAPI Application
SIH 2026 - Problem Statement SIH26001 - MDoNER
"""
import os
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from fastapi.staticfiles import StaticFiles
from app.api.v1.endpoints import router as api_v1_router

app = FastAPI(
    title="NER-LENS API",
    description="Northeast Region Landslide Early-warning & Notification System API (SIH 2026 SIH26001)",
    version="2.0.0",
    docs_url="/docs",
    redoc_url="/redoc"
)

# CORS configuration for development and production web clients
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Mount Static Uploads directory for real uploaded field incident photos
UPLOAD_DIR = os.path.join(os.path.dirname(__file__), "..", "uploads")
os.makedirs(UPLOAD_DIR, exist_ok=True)
app.mount("/uploads", StaticFiles(directory=UPLOAD_DIR), name="uploads")

# Mount API routes
app.include_router(api_v1_router, prefix="/api")

@app.get("/")
async def root():
    return {
        "project": "NER-LENS (Northeast Region Landslide Early-warning & Notification System)",
        "organization": "Ministry of Development of North Eastern Region (MDoNER)",
        "sih_code": "SIH26001",
        "status": "OPERATIONAL_REALTIME",
        "docs": "/docs",
        "api_v1": "/api/dashboard"
    }

if __name__ == "__main__":
    import uvicorn
    uvicorn.run("app.main:app", host="127.0.0.1", port=8000, reload=True)
