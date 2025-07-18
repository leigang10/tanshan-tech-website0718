#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
北京探山科技有限公司网站 - 本地服务器启动脚本
用于在本地测试网站功能
"""

import http.server
import socketserver
import webbrowser
import os
import sys
from pathlib import Path

def main():
    """主函数"""
    print("=" * 50)
    print("北京探山科技有限公司网站 - 本地服务器")
    print("=" * 50)
    
    # 检查当前目录
    current_dir = Path.cwd()
    index_file = current_dir / "index.html"
    
    if not index_file.exists():
        print("❌ 错误：未找到 index.html 文件")
        print("请确保在项目根目录下运行此脚本")
        return
    
    # 设置端口
    PORT = 8000
    
    # 切换到项目目录
    os.chdir(current_dir)
    
    print(f"📁 项目目录: {current_dir}")
    print(f"🌐 服务器地址: http://localhost:{PORT}")
    print(f"📄 首页文件: {index_file}")
    print()
    
    try:
        # 创建服务器
        with socketserver.TCPServer(("", PORT), http.server.SimpleHTTPRequestHandler) as httpd:
            print(f"✅ 服务器启动成功！")
            print(f"🚀 正在打开浏览器...")
            print()
            print("📋 使用说明:")
            print("   - 按 Ctrl+C 停止服务器")
            print("   - 在浏览器中访问 http://localhost:8000")
            print("   - 测试完成后记得关闭服务器")
            print()
            
            # 自动打开浏览器
            try:
                webbrowser.open(f"http://localhost:{PORT}")
                print("🌐 浏览器已自动打开")
            except:
                print("⚠️  无法自动打开浏览器，请手动访问 http://localhost:8000")
            
            print()
            print("🔄 服务器运行中...")
            
            # 启动服务器
            httpd.serve_forever()
            
    except KeyboardInterrupt:
        print()
        print("🛑 服务器已停止")
        print("👋 感谢使用！")
    except OSError as e:
        if e.errno == 48:  # Address already in use
            print(f"❌ 错误：端口 {PORT} 已被占用")
            print("请尝试以下解决方案：")
            print("1. 关闭其他可能使用该端口的程序")
            print("2. 等待几分钟后重试")
            print("3. 修改脚本中的 PORT 变量使用其他端口")
        else:
            print(f"❌ 服务器启动失败: {e}")
    except Exception as e:
        print(f"❌ 未知错误: {e}")

if __name__ == "__main__":
    main() 