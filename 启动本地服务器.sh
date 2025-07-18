#!/bin/bash

# 北京探山科技有限公司网站 - 本地服务器启动脚本
# 用于在本地测试网站功能

echo "=================================================="
echo "北京探山科技有限公司网站 - 本地服务器"
echo "=================================================="
echo

# 检查Python是否安装
if ! command -v python3 &> /dev/null; then
    if ! command -v python &> /dev/null; then
        echo "❌ 错误：未找到Python"
        echo "请先安装Python，然后重试"
        echo "下载地址：https://www.python.org/downloads/"
        echo
        exit 1
    else
        PYTHON_CMD="python"
    fi
else
    PYTHON_CMD="python3"
fi

# 检查index.html是否存在
if [ ! -f "index.html" ]; then
    echo "❌ 错误：未找到 index.html 文件"
    echo "请确保在项目根目录下运行此脚本"
    echo
    exit 1
fi

# 设置端口
PORT=8000

echo "📁 项目目录: $(pwd)"
echo "🌐 服务器地址: http://localhost:$PORT"
echo "📄 首页文件: $(pwd)/index.html"
echo

echo "✅ 正在启动服务器..."
echo "🚀 正在打开浏览器..."
echo
echo "📋 使用说明:"
echo "   - 按 Ctrl+C 停止服务器"
echo "   - 在浏览器中访问 http://localhost:$PORT"
echo "   - 测试完成后记得关闭服务器"
echo

# 尝试自动打开浏览器
if command -v open &> /dev/null; then
    # macOS
    open "http://localhost:$PORT" &
elif command -v xdg-open &> /dev/null; then
    # Linux
    xdg-open "http://localhost:$PORT" &
else
    echo "⚠️  无法自动打开浏览器，请手动访问 http://localhost:$PORT"
fi

echo "🔄 服务器运行中..."
echo

# 启动Python服务器
$PYTHON_CMD -m http.server $PORT

echo
echo "🛑 服务器已停止"
echo "👋 感谢使用！" 