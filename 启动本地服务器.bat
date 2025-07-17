@echo off
chcp 65001 >nul
title 北京探山科技有限公司网站 - 本地服务器

echo ==================================================
echo 北京探山科技有限公司网站 - 本地服务器
echo ==================================================
echo.

REM 检查Python是否安装
python --version >nul 2>&1
if errorlevel 1 (
    echo ❌ 错误：未找到Python
    echo 请先安装Python，然后重试
    echo 下载地址：https://www.python.org/downloads/
    echo.
    pause
    exit /b 1
)

REM 检查index.html是否存在
if not exist "index.html" (
    echo ❌ 错误：未找到 index.html 文件
    echo 请确保在项目根目录下运行此脚本
    echo.
    pause
    exit /b 1
)

echo 📁 项目目录: %CD%
echo 🌐 服务器地址: http://localhost:8000
echo 📄 首页文件: %CD%\index.html
echo.

echo ✅ 正在启动服务器...
echo 🚀 正在打开浏览器...
echo.
echo 📋 使用说明:
echo    - 按 Ctrl+C 停止服务器
echo    - 在浏览器中访问 http://localhost:8000
echo    - 测试完成后记得关闭服务器
echo.

REM 启动Python服务器
python -m http.server 8000

echo.
echo 🛑 服务器已停止
echo 👋 感谢使用！
pause 