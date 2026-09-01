Write-Host "=========================================================================" -ForegroundColor Cyan
Write-Host "  NER-LENS (Northeast Region Landslide Early-warning & Notification System)" -ForegroundColor Yellow
Write-Host "  Smart India Hackathon 2026 - MDoNER SIH26001" -ForegroundColor Cyan
Write-Host "=========================================================================" -ForegroundColor Cyan
Write-Host ""

$baseDir = "C:\Users\surya\OneDrive\Desktop\HIGHENDAI\Landslide"

Write-Host "Starting FastAPI Backend on http://127.0.0.1:8000..." -ForegroundColor Green
Start-Process powershell -ArgumentList "-NoExit", "-Command", "cd '$baseDir\backend'; python -m uvicorn app.main:app --host 127.0.0.1 --port 8000 --reload"

Write-Host "Starting Vite React Frontend on http://localhost:5173..." -ForegroundColor Green
Start-Process powershell -ArgumentList "-NoExit", "-Command", "cd '$baseDir\frontend'; npm run dev"

Start-Sleep -Seconds 3
Write-Host "Opening Dashboard in web browser..." -ForegroundColor Yellow
Start-Process "http://localhost:5173"

Write-Host "NER-LENS is live!" -ForegroundColor Green
