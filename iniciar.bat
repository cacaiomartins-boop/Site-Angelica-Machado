@echo off
cd /d "%~dp0"
if not exist node_modules call npm.cmd install
start "" http://localhost:8080
call npm.cmd run dev
