#!/usr/bin/env sh

REM # 确保脚本抛出遇到的错误
set -e

REM # rm -rf './views/'

echo '生成静态文件'
npm run build

REM # 进入生成的文件夹
REM # cd docs/.vuepress/dist

REM # 如果是发布到自定义域名
echo '查看git 变动' 

git st

echo '本地缓存'

git ac -m 'deploy'

echo '拉代码'
git pull
echo 'push代码'
git push
REM # 如果发布到 https://<USERNAME>.github.io
REM # git push -f git@github.com:<USERNAME>/<USERNAME>.github.io.git master

REM # 如果发布到 https://<USERNAME>.github.io/<REPO>
REM # git push -f git@github.com:<USERNAME>/<REPO>.git master:gh-pages
