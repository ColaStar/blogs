# bower
## 简介
Bower是一个客户端技术的软件包管理器，它可用于搜索、安装和卸载如JavaScript、HTML、CSS之类的网络资源。其他一些建立在Bower基础之上的开发工具，如YeoMan和Grunt。

## 安装

```
npm install -g bower
```

## 命令介绍

```
    cache                   管理Bower缓存
    help                    显示关于Bower的帮助信息
    home                    主页在您最喜爱的浏览器中打开程序包主页
    info                    特定包的信息信息
    init                    init以交互方式创建bower.json文件
    install                 在本地安装包
    link                    链接symlink包文件夹
    list                    列出本地包和可能的更新
    login                   使用GitHub和存储凭据进行登录验证
    lookup                  查找按名称查找单个包URL
    prune                   删除本地外部包
    register                注册一个包,发布
    search                  按名称搜索包
    update                  更新本地包
    uninstall               卸载本地包
    unregister              从注册表中删除包
    version                 缓冲包版本
```
## 选项介绍
```
Options:
    --save                  安装在本地
    -f, --force             强力做一些事情，比如安装一个包
    -j, --json              输出json
    -l, --loglevel          日志报告的的级别
    -o, --offline           不去网络上安装，通过缓存的包进行安装
    -q, --quiet             只输出重要信息
    -s, --silent            不输出任何内容，除了错误
    -V, --verbose           输出所有信息
    --allow-root            允许以根目录运行命令
    -v, --version           输出版本号
    --no-color              无颜色禁用颜色
    --config.interactive=false 禁用提示
```
## .bowerrc 文件---自定义包安装目录

这个文件主要用来配置安装路径，如果不指定则默认安装到当前目录下的bower_components目录中。
```

{
  "directory": "bower_components"，   //包安装位置
  "storage": {
    "packages" : "~/.bower/packages"  //包本地缓存位置
  }
}
```
## bower.json 文件
无论你是使用bower来为项目管理外部依赖，还是准备制作一个包，都是通过bower.json文件来进行的，这个文件可以说是bower运行的核心。bower.json的配置项和其他包管理工具，比如npm，composer的都差不多，你也可以通过分析这个文件来思考包管理器是如何运行的。

```
{
    "name":"",              //必须，如果需要注册包，则该包名唯一。
    
    "description":"",       //可选，包描述
    
    "main":[],              //可选，入口文件，bower本身不使用，供第三方构建工具会使用
                            //每种文件类型只能有一个。
    
    "ignore":[],            //可选，文件或目录列表。bower安装的时候将忽略该列表中的文件。
                            //bower是从git仓库或压缩包下载一个包，里面的文件并不一定全部需要。
    
    "dependencies":[],      //依赖包，name:value，value可以是包的semver       
                            //range(版本号范围)，也可以直接是一个包的git地址或压缩包地址。
                            
    "devDependencies":[],   //开发依赖包，仅仅在开发过程中测试或者编译文档用，部署生产环境是不需要。
                            //格式和dependencies 相同
                            
    "resolutions":[],       //包引用冲突自动使用该模块指定的包版本
                            //格式和dependencies 相同
                            
    "overrides" :[          //这个也很关键，可以覆盖一个包中的默认设置，比如main里面设定的入口文件
        "package-name":{    //这样可以根据需要，让第三方工具只打包需要的文件。
            "main":[]
        }
    ],
                            
    "moduleType":"",        //可选，指定包采用那种模块化方式(globals,amd,node,es6,yui)
    
    "private":Boolean,      //是否公开发布当前包,如果只是使用bower来管理项目的包，设置为true.
    
    "license":"",           //授权方式(GPL-3.0,CC-BY-4.0.....)
    
    "keywords":[],          //可选，方便注册后容易被其他人搜索到。
    
    "authors":[],           //作者列表
    
    "homepage":[],          //主页，包介绍页
    
    "repository":{          //包所在仓库。
        "type": "git",
        "url": "git://github.com/foo/bar.git"
    },
｝
```
bower用这套格式管理所有的包，所以下载的每个包中都会包含一个bower.json文件。
如果只是使用bower作为项目的包管理工具，上述配置项只需关注：dependencies, devDependencies, resolutions，overrides即可

## 包的安装

```
# 读取配置文件bower.json进行安装
$ bower install
# 通过Github shorthand进行安装
$ bower install desandro/masonry
# 通过Github库进行安装
$ bower install git://github.com/user/package.git
# 通过URL进行安装
$ bower install http://example.com/script.js
```
## 清理缓存

```
bower cache clean
```
## 列出缓存的包
```
bower cache list
```
## bower与npm的区别

- 1.NPM主要运用于Node.js项目的内部依赖包管理，安装的模块位于项目根目录下的node_modules文件夹内。而Bower大部分情况下用于前端开发，对于CSS/JS/模板等内容进行依赖管理，依赖的下载目录结构可以自定义。
- 2.命令行不同
- 3.bower安装会查看缓存安装，而npm是直接从npm服务器上边下包（当然也会去缓存里边找）
