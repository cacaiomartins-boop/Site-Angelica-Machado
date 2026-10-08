@echo off
cd /d "%~dp0"
call npm.cmd install --no-audit --no-fund
start "" http://localhost:8080
call npm.cmd run dev
