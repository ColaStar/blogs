#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

# sudo rm -rf './views/'
chmod +x views

printf '生成静态文件'
sudo npm run build

# 进入生成的文件夹
# cd docs/.vuepress/dist

# 如果是发布到自定义域名
# echo 'www.example.com' > CNAME
printf '查看git 变动'

git st

printf '本地缓存'

git ac -m 'deploy'

printf '拉代码'
git pull
printf 'push代码'
git push
# 如果发布到 https://<USERNAME>.github.io
# git push -f git@github.com:<USERNAME>/<USERNAME>.github.io.git master

# 如果发布到 https://<USERNAME>.github.io/<REPO>
# git push -f git@github.com:<USERNAME>/<REPO>.git master:gh-pages
