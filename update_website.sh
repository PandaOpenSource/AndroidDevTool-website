#!/bin/bash

# 更新网站内容的脚本

echo "开始更新AndroidDevTool网站..."

# 拉取最新代码
git pull origin main

# 提示用户修改文件
echo "请修改需要更新的文件，完成后按回车键继续..."
read

# 提交更改
echo "提交更改..."
git add .
git commit -m "更新网站内容：$(date '+%Y-%m-%d')"

# 推送到GitHub
echo "推送到GitHub..."
git push origin main

echo "更新完成！几分钟后，更改将在以下网址生效："
echo "https://pandaopensource.github.io/AndroidDevTool-website/"
