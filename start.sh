#!/usr/bin/env sh
###
 # @Author: cola lvjianwy@yeah.net
 # @Date: 2022-01-17 17:34:27
 # @LastEditors: cola lvjianwy@yeah.net
 # @LastEditTime: 2023-08-11 16:42:05
 # @FilePath: /blogs/start.sh
 # @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
### 

# 确保脚本抛出遇到的错误
set -e

# rm -rf './views/'

# 进入生成的文件夹
#  cd docs/.vuepress/dist

select ch in "build" "aly" "static" "git"
do
    case $ch in
        "build")
            echo '生成静态文件'
            npm run build
            echo 'build success'
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
            
            echo 'push 代码'
            
            git push
        ;;
        "git")
           
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
            
            echo 'push 代码'
            
            git push
        ;;
        "aly")
            echo "上传阿里云"
            scp -r ./views/. lvjian@101.200.143.172:/usr/local/nginx/html/blogs
            # a2176278.
            exit
        ;;
        "static")
            echo "上传静态文件"
            # cd static
            scp -r ./static/. lvjian@101.200.143.172:/usr/local/nginx/html/static
            # npm start
            exit
        ;;
        *)
            echo "未选择，操作完毕"
            exit;
        ;;
    esac
done;

    


# 如果是发布到自定义域名
# 如果发布到 https://<USERNAME>.github.io
# git push -f git@github.com:<USERNAME>/<USERNAME>.github.io.git master

# 如果发布到 https://<USERNAME>.github.io/<REPO>
# git push -f git@github.com:<USERNAME>/<REPO>.git master:gh-pages

