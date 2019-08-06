(window.webpackJsonp=window.webpackJsonp||[]).push([[54],{144:function(e,t,a){"use strict";a.r(t);var s=a(0),r=Object(s.a)({},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"pm2使用指南"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#pm2使用指南","aria-hidden":"true"}},[e._v("#")]),e._v(" PM2使用指南")]),e._v(" "),a("h2",{attrs:{id:"简介"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#简介","aria-hidden":"true"}},[e._v("#")]),e._v(" 简介")]),e._v(" "),a("p",[e._v("PM2（Process Manager 2 ）是具有内置负载均衡器的Node.js应用程序的生产运行时和进程管理器。 它允许您永久保持应用程序活跃，无需停机即可重新加载它们，并促进常见的Devops任务。")]),e._v(" "),a("h2",{attrs:{id:"特性"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#特性","aria-hidden":"true"}},[e._v("#")]),e._v(" 特性")]),e._v(" "),a("ul",[a("li",[a("p",[e._v("日志管理：应用程序日志保存在服务器的硬盘中~/.pm2/logs/")])]),e._v(" "),a("li",[a("p",[e._v("负载均衡：PM2可以通过创建共享同一服务器端口的多个子进程来扩展您的应用程序。这样做还允许您以零秒停机时间重新启动应用程序。")])]),e._v(" "),a("li",[a("p",[e._v("终端监控：可以在终端中监控您的应用程序并检查应用程序运行状况（CPU使用率，使用的内存，请求/分钟等）。")])]),e._v(" "),a("li",[a("p",[e._v("SSH部署：自动部署，避免逐个在所有服务器中进行ssh。")])]),e._v(" "),a("li",[a("p",[e._v("静态服务：支持静态服务器功能")])]),e._v(" "),a("li",[a("p",[e._v("多平台支持：适用于Linux（稳定）和macOS（稳定）和Windows（稳定）")])])]),e._v(" "),a("h2",{attrs:{id:"安装"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#安装","aria-hidden":"true"}},[e._v("#")]),e._v(" 安装")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("npm install pm2 -g\n \nyarn global add pm2\n \ncurl -sL https://raw.githubusercontent.com/Unitech/pm2/master/packager/setup.deb.sh\n在linux上需要做软连接\n")])])]),a("h2",{attrs:{id:"目录介绍"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#目录介绍","aria-hidden":"true"}},[e._v("#")]),e._v(" 目录介绍")]),e._v(" "),a("p",[e._v("pm2安装好后，会自动创建下面目录。")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("$HOME/.pm2 will contain all PM2 related files\n$HOME/.pm2/logs will contain all applications logs\n$HOME/.pm2/pids will contain all applications pids\n$HOME/.pm2/pm2.log PM2 logs\n$HOME/.pm2/pm2.pid PM2 pid\n$HOME/.pm2/rpc.sock Socket file for remote commands\n$HOME/.pm2/pub.sock Socket file for publishable events\n$HOME/.pm2/conf.js PM2 Configuration\n")])])]),a("h2",{attrs:{id:"入门教程"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#入门教程","aria-hidden":"true"}},[e._v("#")]),e._v(" 入门教程")]),e._v(" "),a("p",[e._v("挑我们最爱的express应用来举例。一般我们都是通过npm start启动应用，其实就是调用node ./bin/www。那么，换成pm2就是")]),e._v(" "),a("p",[e._v("注意，这里用了--watch参数，意味着当你的express应用代码发生变化时，pm2会帮你重启服务，多贴心。")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("pm2 start ./bin/www --watch\n")])])]),a("p",[e._v("入门太简单了，没什么好讲的。直接上官方文档：http://pm2.keymetrics.io/docs/usage/quick-start")]),e._v(" "),a("h2",{attrs:{id:"常用命令"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#常用命令","aria-hidden":"true"}},[e._v("#")]),e._v(" 常用命令")]),e._v(" "),a("blockquote",[a("p",[e._v("启动")])]),e._v(" "),a("p",[e._v("参数说明：")]),e._v(" "),a("ul",[a("li",[e._v("--watch：监听应用目录的变化，一旦发生变化，自动重启。如果要精确监听、不见听的目录，最好通过配置文件。")]),e._v(" "),a("li",[e._v("-i --instances：启用多少个实例，可用于负载均衡。如果-i 0或者-i max，则根据当前机器核数确定实例数目。")]),e._v(" "),a("li",[e._v('--ignore-watch：排除监听的目录/文件，可以是特定的文件名，也可以是正则。-比如--ignore-watch="test node_modules "some scripts""')]),e._v(" "),a("li",[e._v("-n --name：应用的名称。查看应用信息的时候可以用到，并设置name。")]),e._v(" "),a("li",[e._v("-o --output "),a("path",[e._v("：标准输出日志文件的路径。")])]),e._v(" "),a("li",[e._v("-e --error "),a("path",[e._v("：错误输出日志文件的路径。")])]),e._v(" "),a("li",[e._v("--interpreter "),a("interpreter",[e._v("：the interpreter pm2 should use for executing app (bash, python...)。比如你用的coffee script来编写应用。")])],1)]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("# pm2 start app.js --name my-api   #my-api为PM2进程名称\n# pm2 start app.js -i 0           #根据CPU核数启动进程个数\n# pm2 start app.js --watch   #实时监控app.js的方式启动，当app.js文件有变动时，pm2会自动reload\n")])])]),a("p",[e._v("完整命令行参数列表："),a("a",{attrs:{href:"http://pm2.keymetrics.io/docs/usage/quick-start/#options",target:"_blank",rel:"noopener noreferrer"}},[e._v("地址"),a("OutboundLink")],1)]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("pm2 start app.js --watch -i 2\n")])])]),a("blockquote",[a("p",[e._v("重启")])]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("pm2 restart app.js    #某个启动了app的进程\n# pm2 restart all     #重启PM2列表中所有的进程\n# pm2 restart 0      #重启PM2列表中进程为0的进程\n")])])]),a("blockquote",[a("p",[e._v("重载")])]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("# pm2 reload all    #重载PM2列表中所有的进程\n# pm2 reload 0     #重载PM2列表中进程为0的进程\n")])])]),a("blockquote",[a("p",[e._v("停止")])]),e._v(" "),a("p",[e._v("停止特定的应用。可以先通过pm2 list获取应用的名字（--name指定的）或者进程id。")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("pm2 stop app_name|app_id\n# pm2 stop 0    #停止PM2列表中进程为0的进程\n")])])]),a("p",[e._v("如果要停止所有应用，可以")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("pm2 stop all\n")])])]),a("blockquote",[a("p",[e._v("删除\n类似pm2 stop，如下")])]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("pm2 delete app_name|app_id\n# pm2 delete 0     #删除PM2列表中进程为0的进程\n# pm2 delete all   #删除PM2列表中所有的进程\n")])])]),a("blockquote",[a("p",[e._v("查看进程状态")])]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("pm2 list\n")])])]),a("p",[e._v("查看某个进程的信息")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("[root@iZ94wb7tioqZ pids]# pm2 describe 0 Describing process with id 0 - name oc-server\n或\n# pm2 show 0 或者 # pm2 info 0  #查看进程详细信息，0为PM2进程id\n")])])]),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("┌───────────────────┬──────────────────────────────────────────────────────────────┐\n│ status            │ online                                                       │\n│ name              │ oc-server                                                    │\n│ id                │ 0                                                            │\n│ path              │ /data/file/qiquan/over_the_counter/server/bin/www            │\n│ args              │                                                              │\n│ exec cwd          │ /data/file/qiquan/over_the_counter/server                    │\n│ error log path    │ /data/file/qiquan/over_the_counter/server/logs/app-err-0.log │\n│ out log path      │ /data/file/qiquan/over_the_counter/server/logs/app-out-0.log │\n│ pid path          │ /root/.pm2/pids/oc-server-0.pid                              │\n│ mode              │ fork_mode                                                    │\n│ node v8 arguments │                                                              │\n│ watch & reload    │                                                             │\n│ interpreter       │ node                                                         │\n│ restarts          │ 293                                                          │\n│ unstable restarts │ 0                                                            │\n│ uptime            │ 87m                                                          │\n│ created at        │ 2016-08-26T08:13:43.705Z                                     │\n└───────────────────┴──────────────────────────────────────────────────────────────┘\n")])])]),a("h2",{attrs:{id:"配置文件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#配置文件","aria-hidden":"true"}},[e._v("#")]),e._v(" 配置文件")]),e._v(" "),a("blockquote",[a("p",[e._v("简单说明")])]),e._v(" "),a("ul",[a("li",[e._v("配置文件里的设置项，跟命令行参数基本是一一对应的。")]),e._v(" "),a("li",[e._v("可以选择yaml或者json文件，就看个人洗好了。")]),e._v(" "),a("li",[e._v("json格式的配置文件，pm2当作普通的js文件来处理，所以可以在里面添加注释或者编写代码，这对于动态调整配置很有好处。")]),e._v(" "),a("li",[e._v("如果启动的时候指定了配置文件，那么命令行参数会被忽略。（个别参数除外，比如--env）")])]),e._v(" "),a("blockquote",[a("p",[e._v("生成示例配置文件")])]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("pm2 ecosystem        //生成一个示例JSON配置文件\npm2 init\n")])])]),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("\nmodule.exports = {\n    apps : [{\n        name      : 'API',      //应用名\n        script    : 'app.js',   //应用文件位置\n        env: {\n            PM2_SERVE_PATH: \".\",    //静态服务路径\n            PM2_SERVE_PORT: 8080,   //静态服务器访问端口\n            NODE_ENV: 'development' //启动默认模式\n        },\n        env_production : {\n            NODE_ENV: 'production'  //使用production模式 pm2 start ecosystem.config.js --env production\n        },\n        instances:\"max\",          //将应用程序分布在所有CPU核心上,可以是整数或负数\n        watch:true,               //监听模式\n        output: './out.log',      //指定日志标准输出文件及位置\n        error: './error.log',     //错误输出日志文件及位置，pm2 install pm2-logrotate进行日志文件拆分\n        merge_logs: true,         //集群情况下，可以合并日志\n        log_type:\"json\",          //日志类型\n        log_date_format: \"DD-MM-YYYY\",  //日志日期记录格式\n    }],\n    deploy : {\n        production : {\n            user : 'node',                      //ssh 用户\n            host : '212.83.163.1',              //ssh 地址\n            ref  : 'origin/master',             //GIT远程/分支\n            repo : 'git@github.com:repo.git',   //git地址\n            path : '/var/www/production',       //服务器文件路径\n            post-deploy : 'npm install && pm2 reload ecosystem.config.js --env production'  //部署后的动作\n        }\n    }\n}\n\n")])])]),a("blockquote",[a("p",[e._v("例子")])]),e._v(" "),a("p",[e._v("举个简单例子，完整配置说明请参考"),a("a",{attrs:{href:"http://pm2.keymetrics.io/docs/usage/pm2-doc-single-page/",target:"_blank",rel:"noopener noreferrer"}},[e._v("官方文档"),a("OutboundLink")],1),e._v("。")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('apps:{   //apps：json结构，apps是一个数组，每一个数组成员就是对应一个pm2中运行的应用\n  "name"            : "fis-receiver",  // 应用名称\n  "script"          : "./bin/www",  // 实际启动脚本\n  "cwd"             : "./",  // 当前工作路径\n  "exec_interpreter": "bash", //应用程序的脚本类型，这里使用的shell，默认是nodejs\n  "min_uptime"      : "60s",//最小运行时间，这里设置的是60s即如果应用程序在60s内退出，pm2会认为程序异常退出，此时触发重启max_restarts设置数量\n  "max_restarts"    : 30, //设置应用程序异常退出重启的次数，默认15次（从0开始计数）,\n  exec_mode         : "cluster_mode" //应用程序启动模式，这里设置的是cluster_mode（集群），默认是fork\n  "watch"           : [  // 监控变化的目录，一旦变化，自动重启\n    "bin",\n    "routers"\n  ],\n  "ignore_watch"    : [  // 从监控目录中排除\n    "node_modules", \n    "logs",\n    "public"\n  ],\n  "watch_options": {\n    "followSymlinks": false\n  },\n  "error_file"      : "./logs/app-err.log",  // 错误日志路径\n  "out_file"        : "./logs/app-out.log",  // 普通日志路径\n  "env": {\n      "NODE_ENV"    : "production"  // 环境参数，当前指定为生产环境\n  },\n  pid_file          ："./test.pid"自定义应用程序的pid文件\n  \n}\n')])])]),a("h2",{attrs:{id:"自动重启"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#自动重启","aria-hidden":"true"}},[e._v("#")]),e._v(" 自动重启")]),e._v(" "),a("p",[e._v("前面已经提到了，这里贴命令行，更多"),a("a",{attrs:{href:"http://pm2.keymetrics.io/docs/usage/watch-and-restart/#auto-restart-apps-on-file-change",target:"_blank",rel:"noopener noreferrer"}},[e._v("点击这里"),a("OutboundLink")],1),e._v("。")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("pm2 start app.js --watch\n")])])]),a("p",[e._v("这里是监控整个项目的文件，如果只想监听指定文件和目录，建议通过配置文件的"),a("code",[e._v("watch")]),e._v("、"),a("code",[e._v("ignore_watch")]),e._v("字段来设置。")]),e._v(" "),a("h2",{attrs:{id:"环境切换"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#环境切换","aria-hidden":"true"}},[e._v("#")]),e._v(" 环境切换")]),e._v(" "),a("p",[e._v("在实际项目开发中，我们的应用经常需要在多个环境下部署，比如开发环境、测试环境、生产环境等。在不同环境下，有时候配置项会有差异，比如链接的数据库地址不同等。")]),e._v(" "),a("p",[e._v("对于这种场景，pm2也是可以很好支持的。首先通过在配置文件中通过"),a("code",[e._v("env_xx来声明不同环境的配置，")]),e._v("然后在启动应用时，通过"),a("code",[e._v("--env")]),e._v("参数指定运行的环境。")]),e._v(" "),a("h3",{attrs:{id:"环境配置声明"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#环境配置声明","aria-hidden":"true"}},[e._v("#")]),e._v(" 环境配置声明")]),e._v(" "),a("p",[e._v("首先，在配置文件中，通过env选项声明多个环境配置。简单说明下：")]),e._v(" "),a("ul",[a("li",[a("code",[e._v("env")]),e._v("为默认的环境配置（生产环境），"),a("code",[e._v("env_dev")]),e._v("、"),a("code",[e._v("env_test")]),e._v("则分别是开发、测试环境。可以看到，不同环境下的"),a("code",[e._v("NODE_ENV")]),e._v("、"),a("code",[e._v("REMOTE_ADDR")]),e._v("字段的值是不同的。")]),e._v(" "),a("li",[e._v("在应用中，可以通过"),a("code",[e._v("process.env.REMOTE_ADDR")]),e._v("等来读取配置中生命的变量。")])]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('  "env": {\n    "NODE_ENV": "production",\n    "REMOTE_ADDR": "http://www.example.com/"\n  },\n  "env_dev": {\n    "NODE_ENV": "development",\n    "REMOTE_ADDR": "http://wdev.example.com/"\n  },\n  "env_test": {\n    "NODE_ENV": "test",\n    "REMOTE_ADDR": "http://wtest.example.com/"\n  }\n')])])]),a("h3",{attrs:{id:"启动指明环境"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#启动指明环境","aria-hidden":"true"}},[e._v("#")]),e._v(" 启动指明环境")]),e._v(" "),a("p",[e._v("假设通过下面启动脚本（开发环境），那么，此时"),a("code",[e._v("process.env.REMOTE_ADDR")]),e._v("的值就是相应的 "),a("code",[e._v("http://wdev.example.com/")]),e._v(" ，可以自己试验下。")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("pm2 start app.js --env dev\n")])])]),a("h2",{attrs:{id:"负载均衡"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#负载均衡","aria-hidden":"true"}},[e._v("#")]),e._v(" 负载均衡")]),e._v(" "),a("p",[e._v("命令如下，表示开启三个进程。如果"),a("code",[e._v("-i ``0")]),e._v("，则会根据机器当前核数自动开启尽可能多的进程。")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("pm2 start app.js -i 3 # 开启三个进程\npm2 start app.js -i max # 根据机器CPU核数，开启对应数目的进程 \n")])])]),a("p",[e._v("参考文档："),a("a",{attrs:{href:"http://pm2.keymetrics.io/docs/usage/cluster-mode/#automatic-load-balancing",target:"_blank",rel:"noopener noreferrer"}},[e._v("点击查看"),a("OutboundLink")],1)]),e._v(" "),a("h2",{attrs:{id:"日志查看"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#日志查看","aria-hidden":"true"}},[e._v("#")]),e._v(" 日志查看")]),e._v(" "),a("p",[e._v("除了可以 打开日志文件 查看日志 外，还可以通过"),a("code",[e._v("pm2 logs")]),e._v("来查看实时日志。这点对于线上问题排查非常重要。")]),e._v(" "),a("p",[e._v("比如某个node服务突然异常重启了，那么可以通过pm2提供的日志工具来查看实时日志，看是不是脚本出错之类导致的异常重启。")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("\n# pm2 logs [--raw]   #Display all processes logs in streaming\n# pm2 flush              #Empty all log file\n# pm2 reloadLogs    #Reload all logs\n")])])]),a("h2",{attrs:{id:"指令tab补全"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#指令tab补全","aria-hidden":"true"}},[e._v("#")]),e._v(" 指令tab补全")]),e._v(" "),a("p",[e._v("运行"),a("code",[e._v("pm2 --help")]),e._v("，可以看到pm2支持的子命令还是蛮多的，这个时候，自动完成的功能就很重要了。")]),e._v(" "),a("p",[e._v("运行如下命令。恭喜，已经能够通过tab自动补全了。细节可参考这里。")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("pm2 completion install\nsource ~/.bash_profile\nAlt text\n")])])]),a("p",[e._v("开机自动启动\n可以通过"),a("code",[e._v("pm2 startup")]),e._v("来实现开机自启动。细节可"),a("a",{attrs:{href:"http://pm2.keymetrics.io/docs/usage/startup/",target:"_blank",rel:"noopener noreferrer"}},[e._v("参考"),a("OutboundLink")],1),e._v("。大致流程如下")]),e._v(" "),a("ul",[a("li",[e._v("1.通过"),a("code",[e._v("pm2 save")]),e._v("保存当前进程状态。")]),e._v(" "),a("li",[e._v("2.通过"),a("code",[e._v("pm2 startup [platform]")]),e._v("生成开机自启动的命令。（记得查看控制台输出）")]),e._v(" "),a("li",[e._v("3.将步骤2生成的命令，粘贴到控制台进行，搞定。")])]),e._v(" "),a("h2",{attrs:{id:"传入node-args"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#传入node-args","aria-hidden":"true"}},[e._v("#")]),e._v(" 传入node args")]),e._v(" "),a("p",[e._v("直接上例子，分别是通过命令行和配置文件。")]),e._v(" "),a("p",[e._v("命令行：")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('pm2 start app.js --node-args="--harmony"\n')])])]),a("p",[e._v("实例说明")]),e._v(" "),a("p",[e._v("假设是在centos下，那么运行如下命令，搞定。强烈建议运行完成之后，重启机器，看是否设置成功。")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('[root@iZ94wb7tioqZ option_analysis]# pm2 save\n[root@iZ94wb7tioqZ option_analysis]# pm2 startup centos\n[PM2] Generating system init script in /etc/init.d/pm2-init.sh\n[PM2] Making script booting at startup...\n[PM2] /var/lock/subsys/pm2-init.sh lockfile has been added\n[PM2] -centos- Using the command:\n      su -c "chmod +x /etc/init.d/pm2-init.sh; chkconfig --add pm2-init.sh"\n \n[PM2] Done.\n[root@iZ94wb7tioqZ option_analysis]# pm2 save\n[PM2] Dumping processes\n')])])]),a("p",[e._v("配置文件：")]),e._v(" "),a("div",{staticClass:"language-{ extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('  "name" : "oc-server",\n  "script" : "app.js",\n  "node_args" : "--harmony"\n}\n')])])]),a("h2",{attrs:{id:"保存的应用程序处理"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#保存的应用程序处理","aria-hidden":"true"}},[e._v("#")]),e._v(" 保存的应用程序处理")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("#重启保存的应用列表\npm2 resurrect\n\n#清除保存的应用列表\npm2 cleardump\n\n#保存并恢复PM2进程\npm2 update\n")])])]),a("h2",{attrs:{id:"远程部署"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#远程部署","aria-hidden":"true"}},[e._v("#")]),e._v(" 远程部署")]),e._v(" "),a("p",[e._v("可参考官方文档，配置也不复杂，用到的时候再来填写这里的坑。TODO")]),e._v(" "),a("p",[e._v("官方文档：http://pm2.keymetrics.io/docs/usage/deployment/#getting-started")]),e._v(" "),a("h2",{attrs:{id:"监控-monitor"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#监控-monitor","aria-hidden":"true"}},[e._v("#")]),e._v(" 监控(monitor)")]),e._v(" "),a("p",[e._v("运行如下命令，查看当前通过pm2运行的进程的状态。")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("pm2 monit\n")])])]),a("p",[e._v("看到类似输出")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("[root@oneday-dev0 server]# pm2 monit\n⌬ PM2 monitoring (To go further check out https://app.keymetrics.io) \n                                       [                              ] 0 %\n⌬ PM2 monitoring (To go further check o[|||||||||||||||               ] 196.285 MB  \n \n ● fis-receiver                        [                              ] 0 %\n[1] [fork_mode]                        [|||||                         ] 65.773 MB  \n \n ● www                                 [                              ] 0 %\n[2] [fork_mode]                        [|||||                         ] 74.426 MB  \n \n ● oc-server                           [                              ] 0 %\n[3] [fork_mode]                        [||||                          ] 57.801 MB  \n \n ● pm2-http-interface                  [                              ] stopped\n[4] [fork_mode]                        [                              ] 0 B   \n \n ● start-production\n[5] [fork_mode]\n")])])]),a("h2",{attrs:{id:"内存使用超过上限自动重启"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#内存使用超过上限自动重启","aria-hidden":"true"}},[e._v("#")]),e._v(" 内存使用超过上限自动重启")]),e._v(" "),a("p",[e._v("如果想要你的应用，在超过使用内存上限后自动重启，那么可以加上"),a("code",[e._v("--max-memory-restart")]),e._v("参数。（有对应的配置项）")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("pm2 start big-array.js --max-memory-restart 20M\n")])])]),a("h2",{attrs:{id:"更新pm2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#更新pm2","aria-hidden":"true"}},[e._v("#")]),e._v(" 更新pm2")]),e._v(" "),a("p",[e._v("官方文档：http://pm2.keymetrics.io/docs/usage/update-pm2/#updating-pm2")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("$ pm2 save # 记得保存进程状态\n$ npm install pm2 -g\n$ pm2 update\n# npm install pm2@lastest -g   #安装最新的PM2版本\n# pm2 updatePM2                    #升级pm2\n\n\n")])])]),a("h2",{attrs:{id:"pm2-nginx"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#pm2-nginx","aria-hidden":"true"}},[e._v("#")]),e._v(" pm2 + nginx")]),e._v(" "),a("p",[e._v("无非就是在nginx上做个反向代理配置，直接贴配置。")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('upstream my_nodejs_upstream {\n    server 127.0.0.1:3001;\n}\n \nserver {\n    listen 80;\n    server_name my_nodejs_server;\n    root /home/www/project_root;\n    \n    location / {\n        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;\n        proxy_set_header Host $http_host;\n        proxy_set_header X-NginX-Proxy true;\n        proxy_http_version 1.1;\n        proxy_set_header Upgrade $http_upgrade;\n        proxy_set_header Connection "upgrade";\n        proxy_max_temp_file_size 0;\n        proxy_pass http://my_nodejs_upstream/;\n        proxy_redirect off;\n        proxy_read_timeout 240s;\n    }\n}\n')])])]),a("p",[e._v("官方文档：http://pm2.keymetrics.io/docs/tutorials/pm2-nginx-production-setup")]),e._v(" "),a("h2",{attrs:{id:"在线监控系统"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#在线监控系统","aria-hidden":"true"}},[e._v("#")]),e._v(" 在线监控系统")]),e._v(" "),a("p",[e._v("收费服务，使用超级简单，可以方便的对进程的服务情况进行监控。可以试用下，地址在"),a("a",{attrs:{href:"https://app.keymetrics.io/",target:"_blank",rel:"noopener noreferrer"}},[e._v("这里"),a("OutboundLink")],1),e._v("。")]),e._v(" "),a("p",[e._v("这里贴个项目中试用的截图。\n"),a("a",{attrs:{"data-fancybox":"",title:"",href:"https://raw.githubusercontent.com/ColaStar/static/master/images/pm2监控图.png"}},[a("img",{attrs:{src:"https://raw.githubusercontent.com/ColaStar/static/master/images/pm2%E7%9B%91%E6%8E%A7%E5%9B%BE.png",alt:""}})])]),e._v(" "),a("h2",{attrs:{id:"pm2编程接口"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#pm2编程接口","aria-hidden":"true"}},[e._v("#")]),e._v(" pm2编程接口")]),e._v(" "),a("p",[e._v("如果想把pm2的进程监控，跟其他自动化流程整合起来，pm2的编程接口就很有用了。细节可参考"),a("a",{attrs:{href:"http://pm2.keymetrics.io/docs/advanced/pm2-module-system/",target:"_blank",rel:"noopener noreferrer"}},[e._v("官方文档"),a("OutboundLink")],1),e._v("：\nhttp://pm2.keymetrics.io/docs/usage/pm2-api/")]),e._v(" "),a("p",[e._v("模块扩展系统\npm2支持第三方扩展，比如常用的log rotate等。可参考官方文档。")]),e._v(" "),a("p",[e._v("写在后面\npm2的文档已经写的很好了，学习成本很低，即使是没用过pm2的小伙伴，基本上照着getting started的例子就可以把项目给跑起来，所以文中不少地方都是建议直接参看"),a("a",{attrs:{href:"http://pm2.keymetrics.io/docs/advanced/pm2-module-system/",target:"_blank",rel:"noopener noreferrer"}},[e._v("官方文档"),a("OutboundLink")],1),e._v("。")])])},[],!1,null,null,null);t.default=r.exports}}]);