@echo off
title NER-LENS Launcher - SIH 2026 SIH26001 MDoNER
echo =========================================================================
echo   NER-LENS (Northeast Region Landslide Early-warning & Notification System)
echo   Smart India Hackathon 2026 - MDoNER SIH26001
echo =========================================================================
echo.
echo Starting FastAPI Backend on port 8000...
start "NER-LENS Backend (FastAPI)" cmd /k "cd backend && python -m uvicorn app.main:app --host 127.0.0.1 --port 8000 --reload"

echo Starting Vite React Frontend on port 5173...
start "NER-LENS Frontend (React + Vite)" cmd /k "cd frontend && npm run dev"

timeout /t 3 >nul
echo Launching Dashboard in default browser...
start http://localhost:5173

echo.
echo Both servers are running!
echo - Frontend: http://localhost:5173
echo - Backend API Docs: http://127.0.0.1:8000/docs
echo.
pause
