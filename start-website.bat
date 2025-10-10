@echo off
echo Starting Voice AI Logistics website...
echo.

REM Add Node.js to PATH
set PATH=%PATH%;C:\Program Files\nodejs

REM Navigate to project directory
cd /d "C:\Users\natal\OneDrive\Desktop\Voice AI for logistics"

echo Installing dependencies if needed...
call npm install --silent

echo.
echo Starting development server...
echo The website will open at: http://localhost:3000
echo.
echo Press Ctrl+C to stop the server when you're done.
echo.

REM Start the server and open browser
start "" "http://localhost:3000"
call npm run dev







