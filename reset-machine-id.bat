@echo off
echo Stopping Cursor...
taskkill /F /IM "Cursor.exe" 2>nul
timeout /t 2 /nobreak

echo Deleting machine ID...
del /F /Q "%APPDATA%\Cursor\machineid" 2>nul
del /F /Q "%APPDATA%\Cursor\Session Storage\*" 2>nul
del /F /Q "%APPDATA%\Cursor\Local Storage\*" 2>nul

echo Starting Cursor...
start "" "%LOCALAPPDATA%\Programs\Cursor\Cursor.exe"

echo Machine ID has been reset successfully!
timeout /t 3
exit 