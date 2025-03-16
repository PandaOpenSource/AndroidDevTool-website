#!/bin/bash

# 检查Python是否可用
if command -v python3 &>/dev/null; then
    echo "使用Python启动服务器..."
    python3 -m http.server 8000
elif command -v python &>/dev/null; then
    echo "使用Python启动服务器..."
    python -m http.server 8000
elif command -v http-server &>/dev/null; then
    echo "使用http-server启动服务器..."
    http-server
else
    echo "错误: 未找到Python或http-server。请安装其中一个以启动本地服务器。"
    exit 1
fi
