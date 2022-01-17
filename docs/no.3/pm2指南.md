# PM2

## 简介

PM2（Process Manager 2 ）是具有内置负载均衡器的Node.js应用程序的生产运行时和进程管理器。 它允许您永久保持应用程序活跃，无需停机即可重新加载它们，并促进常见的Devops任务。

## 特性

- 日志管理：应用程序日志保存在服务器的硬盘中~/.pm2/logs/

- 负载均衡：PM2可以通过创建共享同一服务器端口的多个子进程来扩展您的应用程序。这样做还允许您以零秒停机时间重新启动应用程序。

- 终端监控：可以在终端中监控您的应用程序并检查应用程序运行状况（CPU使用率，使用的内存，请求/分钟等）。

- SSH部署：自动部署，避免逐个在所有服务器中进行ssh。

- 静态服务：支持静态服务器功能

- 多平台支持：适用于Linux（稳定）和macOS（稳定）和Windows（稳定）


## 安装
```
npm install pm2 -g
 
yarn global add pm2
 
curl -sL https://raw.githubusercontent.com/Unitech/pm2/master/packager/setup.deb.sh
在linux上需要做软连接
```

## 目录介绍
pm2安装好后，会自动创建下面目录。
```
$HOME/.pm2 will contain all PM2 related files
$HOME/.pm2/logs will contain all applications logs
$HOME/.pm2/pids will contain all applications pids
$HOME/.pm2/pm2.log PM2 logs
$HOME/.pm2/pm2.pid PM2 pid
$HOME/.pm2/rpc.sock Socket file for remote commands
$HOME/.pm2/pub.sock Socket file for publishable events
$HOME/.pm2/conf.js PM2 Configuration
```

## 入门教程
挑我们最爱的express应用来举例。一般我们都是通过npm start启动应用，其实就是调用node ./bin/www。那么，换成pm2就是

注意，这里用了--watch参数，意味着当你的express应用代码发生变化时，pm2会帮你重启服务，多贴心。
```
pm2 start ./bin/www --watch
```
入门太简单了，没什么好讲的。直接上官方文档：http://pm2.keymetrics.io/docs/usage/quick-start

## 常用命令
> 启动

参数说明：

- --watch：监听应用目录的变化，一旦发生变化，自动重启。如果要精确监听、不见听的目录，最好通过配置文件。
- -i --instances：启用多少个实例，可用于负载均衡。如果-i 0或者-i max，则根据当前机器核数确定实例数目。
- --ignore-watch：排除监听的目录/文件，可以是特定的文件名，也可以是正则。-比如--ignore-watch="test node_modules "some scripts""
- -n --name：应用的名称。查看应用信息的时候可以用到，并设置name。
- -o --output <path>：标准输出日志文件的路径。
- -e --error <path>：错误输出日志文件的路径。
- --interpreter <interpreter>：the interpreter pm2 should use for executing app (bash, python...)。比如你用的coffee script来编写应用。
```
# pm2 start app.js --name my-api   #my-api为PM2进程名称
# pm2 start app.js -i 0           #根据CPU核数启动进程个数
# pm2 start app.js --watch   #实时监控app.js的方式启动，当app.js文件有变动时，pm2会自动reload
```
完整命令行参数列表：[地址](http://pm2.keymetrics.io/docs/usage/quick-start/#options)
```
pm2 start app.js --watch -i 2

$ pm2 start app.js -i 4 # cluster mode 模式启动4个app.js的应用实例
$ pm2 start app.js -i 4 # cluster mode 模式启动4个app.js的应用实例
# 4个应用程序会自动进行负载均衡
$ pm2 start app.js --name="api" # 启动应用程序并命名为 "api"
$ pm2 start app.js --watch # 当文件变化时自动重启应用
$ pm2 start script.sh # 启动 bash 脚本

pm2 start app.js --node-args="--max-old-space-size=1024"

```
> 重启
```
pm2 restart app.js    #某个启动了app的进程
# pm2 restart all     #重启PM2列表中所有的进程
# pm2 restart 0      #重启PM2列表中进程为0的进程
```
> 重载
```
# pm2 reload all    #重载PM2列表中所有的进程
# pm2 reload 0     #重载PM2列表中进程为0的进程

$ pm2 restart all # 重启所有应用
$ pm2 reload all # 重启 cluster mode下的所有应用
$ pm2 gracefulReload all # Graceful reload all apps in cluster mode
$ pm2 reset [app-name] # 重置重启数量
```
> 停止

停止特定的应用。可以先通过pm2 list获取应用的名字（--name指定的）或者进程id。
```
pm2 stop app_name|app_id
# pm2 stop 0    #停止PM2列表中进程为0的进程 | 停止 id为 0的指定应用程序
$ pm2 stop all # 停止所有的应用程序
```

如果要停止所有应用，可以
```
pm2 stop all
```
> 扩展 
```
$ pm2 scale api 10 # 把名字叫api的应用扩展到10个实例
```

> 删除
类似pm2 stop，如下
```
pm2 delete app_name|app_id
# pm2 delete 0     #删除PM2列表中进程为0|(应用 id 0)的进程
# pm2 delete all   #删除PM2列表中所有的进程

```
> 查看进程状态
```
pm2 list
```
查看某个进程的信息
```
[root@iZ94wb7tioqZ pids]# pm2 describe 0 Describing process with id 0 - name oc-server
或
# pm2 show 0 或者 # pm2 info 0  #查看进程详细信息，0为PM2进程id
```
```
┌───────────────────┬──────────────────────────────────────────────────────────────┐
│ status            │ online                                                       │
│ name              │ oc-server                                                    │
│ id                │ 0                                                            │
│ path              │ /data/file/qiquan/over_the_counter/server/bin/www            │
│ args              │                                                              │
│ exec cwd          │ /data/file/qiquan/over_the_counter/server                    │
│ error log path    │ /data/file/qiquan/over_the_counter/server/logs/app-err-0.log │
│ out log path      │ /data/file/qiquan/over_the_counter/server/logs/app-out-0.log │
│ pid path          │ /root/.pm2/pids/oc-server-0.pid                              │
│ mode              │ fork_mode                                                    │
│ node v8 arguments │                                                              │
│ watch & reload    │                                                             │
│ interpreter       │ node                                                         │
│ restarts          │ 293                                                          │
│ unstable restarts │ 0                                                            │
│ uptime            │ 87m                                                          │
│ created at        │ 2016-08-26T08:13:43.705Z                                     │
└───────────────────┴──────────────────────────────────────────────────────────────┘

$ pm2 monit # 显示每个应用程序的CPU和内存占用情况
$ pm2 show [app-name] # 显示应用程序的所有信息


```
## 配置文件

> 简单说明

- 配置文件里的设置项，跟命令行参数基本是一一对应的。
- 可以选择yaml或者json文件，就看个人洗好了。
- json格式的配置文件，pm2当作普通的js文件来处理，所以可以在里面添加注释或者编写代码，这对于动态调整配置很有好处。
- 如果启动的时候指定了配置文件，那么命令行参数会被忽略。（个别参数除外，比如--env）

> 生成示例配置文件
```
pm2 ecosystem        //生成一个示例JSON配置文件
pm2 init
```
```

module.exports = {
    apps : [{
        name      : 'API',      //应用名
        script    : 'app.js',   //应用文件位置
        env: {
            PM2_SERVE_PATH: ".",    //静态服务路径
            PM2_SERVE_PORT: 8080,   //静态服务器访问端口
            NODE_ENV: 'development' //启动默认模式
        },
        env_production : {
            NODE_ENV: 'production'  //使用production模式 pm2 start ecosystem.config.js --env production
        },
        instances:"max",          //将应用程序分布在所有CPU核心上,可以是整数或负数
        watch:true,               //监听模式
        output: './out.log',      //指定日志标准输出文件及位置
        error: './error.log',     //错误输出日志文件及位置，pm2 install pm2-logrotate进行日志文件拆分
        merge_logs: true,         //集群情况下，可以合并日志
        log_type:"json",          //日志类型
        log_date_format: "DD-MM-YYYY",  //日志日期记录格式
    }],
    deploy : {
        production : {
            user : 'node',                      //ssh 用户
            host : '212.83.163.1',              //ssh 地址
            ref  : 'origin/master',             //GIT远程/分支
            repo : 'git@github.com:repo.git',   //git地址
            path : '/var/www/production',       //服务器文件路径
            post-deploy : 'npm install && pm2 reload ecosystem.config.js --env production'  //部署后的动作
        }
    }
}

```
>例子

举个简单例子，完整配置说明请参考[官方文档](http://pm2.keymetrics.io/docs/usage/pm2-doc-single-page/)。

```
apps:{   //apps：json结构，apps是一个数组，每一个数组成员就是对应一个pm2中运行的应用
  "name"            : "fis-receiver",  // 应用名称
  "script"          : "./bin/www",  // 实际启动脚本
  "cwd"             : "./",  // 当前工作路径
  "exec_interpreter": "bash", //应用程序的脚本类型，这里使用的shell，默认是nodejs
  "min_uptime"      : "60s",//最小运行时间，这里设置的是60s即如果应用程序在60s内退出，pm2会认为程序异常退出，此时触发重启max_restarts设置数量
  "max_restarts"    : 30, //设置应用程序异常退出重启的次数，默认15次（从0开始计数）,
  exec_mode         : "cluster_mode" //应用程序启动模式，这里设置的是cluster_mode（集群），默认是fork
  "watch"           : [  // 监控变化的目录，一旦变化，自动重启
    "bin",
    "routers"
  ],
  "ignore_watch"    : [  // 从监控目录中排除
    "node_modules", 
    "logs",
    "public"
  ],
  "watch_options": {
    "followSymlinks": false
  },
  "error_file"      : "./logs/app-err.log",  // 错误日志路径
  "out_file"        : "./logs/app-out.log",  // 普通日志路径
  "env": {
      "NODE_ENV"    : "production"  // 环境参数，当前指定为生产环境
  },
  pid_file          ："./test.pid"自定义应用程序的pid文件
  
}
```
## 自动重启

前面已经提到了，这里贴命令行，更多[点击这里](http://pm2.keymetrics.io/docs/usage/watch-and-restart/#auto-restart-apps-on-file-change)。
```
pm2 start app.js --watch
```
这里是监控整个项目的文件，如果只想监听指定文件和目录，建议通过配置文件的`watch`、`ignore_watch`字段来设置。

## 环境切换

在实际项目开发中，我们的应用经常需要在多个环境下部署，比如开发环境、测试环境、生产环境等。在不同环境下，有时候配置项会有差异，比如链接的数据库地址不同等。

对于这种场景，pm2也是可以很好支持的。首先通过在配置文件中通过`env_xx来声明不同环境的配置，`然后在启动应用时，通过`--env`参数指定运行的环境。

### 环境配置声明
首先，在配置文件中，通过env选项声明多个环境配置。简单说明下：

- `env`为默认的环境配置（生产环境），`env_dev`、`env_test`则分别是开发、测试环境。可以看到，不同环境下的`NODE_ENV`、`REMOTE_ADDR`字段的值是不同的。
- 在应用中，可以通过`process.env.REMOTE_ADDR`等来读取配置中生命的变量。
```
  "env": {
    "NODE_ENV": "production",
    "REMOTE_ADDR": "http://www.example.com/"
  },
  "env_dev": {
    "NODE_ENV": "development",
    "REMOTE_ADDR": "http://wdev.example.com/"
  },
  "env_test": {
    "NODE_ENV": "test",
    "REMOTE_ADDR": "http://wtest.example.com/"
  }
```
### 启动指明环境

假设通过下面启动脚本（开发环境），那么，此时`process.env.REMOTE_ADDR`的值就是相应的 `http://wdev.example.com/` ，可以自己试验下。
```
pm2 start app.js --env dev
```

## 负载均衡
命令如下，表示开启三个进程。如果`-i ``0`，则会根据机器当前核数自动开启尽可能多的进程。

```
pm2 start app.js -i 3 # 开启三个进程
pm2 start app.js -i max # 根据机器CPU核数，开启对应数目的进程 
```

参考文档：[点击查看](http://pm2.keymetrics.io/docs/usage/cluster-mode/#automatic-load-balancing)

## 日志查看
除了可以 打开日志文件 查看日志 外，还可以通过`pm2 logs`来查看实时日志。这点对于线上问题排查非常重要。

比如某个node服务突然异常重启了，那么可以通过pm2提供的日志工具来查看实时日志，看是不是脚本出错之类导致的异常重启。

```

# pm2 logs [--raw]   #Display all processes logs in streaming # 显示所有应用程序的日志
# pm2 flush              #Empty all log file
# pm2 reloadLogs    #Reload all logs

$ pm2 logs [app-name] # 显示指定应用程序的日志
```

## 指令tab补全
运行`pm2 --help`，可以看到pm2支持的子命令还是蛮多的，这个时候，自动完成的功能就很重要了。

运行如下命令。恭喜，已经能够通过tab自动补全了。细节可参考这里。
```
pm2 completion install
source ~/.bash_profile
Alt text
```

开机自动启动
可以通过`pm2 startup`来实现开机自启动。细节可[参考](http://pm2.keymetrics.io/docs/usage/startup/)。大致流程如下

- 1.通过`pm2 save`保存当前进程状态。
- 2.通过`pm2 startup [platform]`生成开机自启动的命令。（记得查看控制台输出）
- 3.将步骤2生成的命令，粘贴到控制台进行，搞定。

## 传入node args

直接上例子，分别是通过命令行和配置文件。

命令行：
```
pm2 start app.js --node-args="--harmony"
```
实例说明

假设是在centos下，那么运行如下命令，搞定。强烈建议运行完成之后，重启机器，看是否设置成功。
```
[root@iZ94wb7tioqZ option_analysis]# pm2 save
[root@iZ94wb7tioqZ option_analysis]# pm2 startup centos
[PM2] Generating system init script in /etc/init.d/pm2-init.sh
[PM2] Making script booting at startup...
[PM2] /var/lock/subsys/pm2-init.sh lockfile has been added
[PM2] -centos- Using the command:
      su -c "chmod +x /etc/init.d/pm2-init.sh; chkconfig --add pm2-init.sh"
 
[PM2] Done.
[root@iZ94wb7tioqZ option_analysis]# pm2 save
[PM2] Dumping processes
```

配置文件：

```{
  "name" : "oc-server",
  "script" : "app.js",
  "node_args" : "--harmony"
}
```
## 保存的应用程序处理
```
#重启保存的应用列表
pm2 resurrect

#清除保存的应用列表
pm2 cleardump

#保存并恢复PM2进程
pm2 update

# Generate a sample json configuration file

$ pm2 generate 
```
## 远程部署
可参考官方文档，配置也不复杂，用到的时候再来填写这里的坑。TODO

官方文档：http://pm2.keymetrics.io/docs/usage/deployment/#getting-started

## 监控(monitor)
运行如下命令，查看当前通过pm2运行的进程的状态。
```
pm2 monit
```
看到类似输出
```
[root@oneday-dev0 server]# pm2 monit
⌬ PM2 monitoring (To go further check out https://app.keymetrics.io) 
                                       [                              ] 0 %
⌬ PM2 monitoring (To go further check o[|||||||||||||||               ] 196.285 MB  
 
 ● fis-receiver                        [                              ] 0 %
[1] [fork_mode]                        [|||||                         ] 65.773 MB  
 
 ● www                                 [                              ] 0 %
[2] [fork_mode]                        [|||||                         ] 74.426 MB  
 
 ● oc-server                           [                              ] 0 %
[3] [fork_mode]                        [||||                          ] 57.801 MB  
 
 ● pm2-http-interface                  [                              ] stopped
[4] [fork_mode]                        [                              ] 0 B   
 
 ● start-production
[5] [fork_mode]
```
## 内存使用超过上限自动重启

如果想要你的应用，在超过使用内存上限后自动重启，那么可以加上`--max-memory-restart`参数。（有对应的配置项）
```
pm2 start big-array.js --max-memory-restart 20M
```
## 更新pm2

官方文档：http://pm2.keymetrics.io/docs/usage/update-pm2/#updating-pm2
```
$ pm2 save # 记得保存进程状态
$ npm install pm2 -g
$ pm2 update
# npm install pm2@lastest -g   #安装最新的PM2版本
# pm2 updatePM2                    #升级pm2


```
## pm2 + nginx
无非就是在nginx上做个反向代理配置，直接贴配置。

```
upstream my_nodejs_upstream {
    server 127.0.0.1:3001;
}
 
server {
    listen 80;
    server_name my_nodejs_server;
    root /home/www/project_root;
    
    location / {
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header Host $http_host;
        proxy_set_header X-NginX-Proxy true;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection "upgrade";
        proxy_max_temp_file_size 0;
        proxy_pass http://my_nodejs_upstream/;
        proxy_redirect off;
        proxy_read_timeout 240s;
    }
}
```
官方文档：http://pm2.keymetrics.io/docs/tutorials/pm2-nginx-production-setup

## 在线监控系统
收费服务，使用超级简单，可以方便的对进程的服务情况进行监控。可以试用下，地址在[这里](https://app.keymetrics.io/)。

这里贴个项目中试用的截图。
<a data-fancybox title="" href="https://colastar.github.io/static/images/pm2监控图.png">![](https://colastar.github.io/static/images/pm2监控图.png)</a>


## pm2编程接口
如果想把pm2的进程监控，跟其他自动化流程整合起来，pm2的编程接口就很有用了。细节可参考[官方文档](http://pm2.keymetrics.io/docs/advanced/pm2-module-system/)：
http://pm2.keymetrics.io/docs/usage/pm2-api/

模块扩展系统
pm2支持第三方扩展，比如常用的log rotate等。可参考官方文档。

写在后面
pm2的文档已经写的很好了，学习成本很低，即使是没用过pm2的小伙伴，基本上照着getting started的例子就可以把项目给跑起来，所以文中不少地方都是建议直接参看[官方文档](http://pm2.keymetrics.io/docs/advanced/pm2-module-system/)。
