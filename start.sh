#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

# rm -rf './views/'

echo '生成静态文件'
sudo npm run build

# 进入生成的文件夹
 # cd docs/.vuepress/dist
 
echo '查看git 变动' 

git st

echo '拉代码'
git pull

echo '本地缓存'

git add .

echo '规范commit日志'
# git cz
# 日常上传文件更改
git commit -m 'docs(): update'

echo 'push代码'

git push

echo '上传静态文件'

cd static 

npm start


curl -O /Users/lvjian/Documents/blogs  /etc/yum.repos.d/CentOS-Base.repo

 # 如果是发布到自定义域名
 # 如果发布到 https://<USERNAME>.github.io
 # git push -f git@github.com:<USERNAME>/<USERNAME>.github.io.git master

 # 如果发布到 https://<USERNAME>.github.io/<REPO>
 # git push -f git@github.com:<USERNAME>/<REPO>.git master:gh-pages
