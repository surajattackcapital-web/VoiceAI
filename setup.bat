@echo off
echo Setting up Voice AI for Logistics website...
echo.

echo Checking if Node.js is installed...
node --version >nul 2>&1
if %errorlevel% neq 0 (
    echo Node.js is not installed. Please install Node.js from https://nodejs.org/
    echo Download the LTS version and run the installer.
    echo After installation, restart your computer and run this script again.
    pause
    exit /b 1
)

echo Node.js is installed!
echo.

echo Installing dependencies...
npm install

if %errorlevel% neq 0 (
    echo Failed to install dependencies. Please check your internet connection.
    pause
    exit /b 1
)

echo.
echo Dependencies installed successfully!
echo.
echo Starting the development server...
echo The website will be available at: http://localhost:3000
echo.
echo Press Ctrl+C to stop the server when you're done.
echo.

npm run dev
