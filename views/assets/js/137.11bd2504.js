(window.webpackJsonp=window.webpackJsonp||[]).push([[137],{539:function(s,a,t){"use strict";t.r(a);var n=t(56),e=Object(n.a)({},(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"mac上使用cnpm搭建npm私有仓库-并上传-下载私有npm包"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#mac上使用cnpm搭建npm私有仓库-并上传-下载私有npm包"}},[s._v("#")]),s._v(" mac上使用cnpm搭建npm私有仓库，并上传/下载私有npm包")]),s._v(" "),t("h2",{attrs:{id:"前言"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#前言"}},[s._v("#")]),s._v(" 前言")]),s._v(" "),t("p",[s._v("随着Nodejs开发的项目越来越多，Node项目管理就成了一个需要思考的问题了。如果所有项目都开源统一用 NPM 进行管理也没什么问题，但总有一些是我们不希望的完全开放的代码，作为企业是核心秘密保留在公司内部，这个时候就需要在公司内网也搭建一套 NPM 依赖管理系统。")]),s._v(" "),t("p",[s._v("CNPM正好就提供了这个功能。")]),s._v(" "),t("p",[s._v("CNPM官方githuib地址， 但是官方文档不够全面："),t("a",{attrs:{href:"https://github.com/cnpm/cnpmjs.org",target:"_blank",rel:"noopener noreferrer"}},[s._v("点我"),t("OutboundLink")],1),s._v(" 。")]),s._v(" "),t("p",[s._v("大家可以下载我的这份， 我在官方项目基础上进行了配置 "),t("a",{attrs:{href:"https://github.com/YalongYan/private-cnpm",target:"_blank",rel:"noopener noreferrer"}},[s._v("点我"),t("OutboundLink")],1),s._v("， 具体配置下面会讲。")]),s._v(" "),t("p",[s._v("官网上写的是在linux环境下，其实在什么环境都可以，这里就讲在mac下部署cnpm服务。")]),s._v(" "),t("p",[s._v("整个过程可以分为如下几步：")]),s._v(" "),t("h2",{attrs:{id:"_1-下载cnpm项目代码。"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-下载cnpm项目代码。"}},[s._v("#")]),s._v(" 1.下载cnpm项目代码。")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("git clone https://github.com/YalongYan/private-cnpm\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("或者直接下载压缩包。大家下载官方的git地址也可以，做相应的配置修改就可。")]),s._v(" "),t("h2",{attrs:{id:"_2-下载mysql-导入数据表"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-下载mysql-导入数据表"}},[s._v("#")]),s._v(" 2.下载mysql & 导入数据表")]),s._v(" "),t("p",[s._v("mac下mysql的下载安装参考 [这里] (https://www.jianshu.com/p/833f388da8e3)")]),s._v(" "),t("p",[s._v("这里先记下数据库的用户名，密码，下面会用到。")]),s._v(" "),t("p",[s._v("安装 MySql的可视化工具 MySqlWorkBench, 下载安装参考 "),t("a",{attrs:{href:"https://blog.csdn.net/zx1245773445/article/details/82292191",target:"_blank",rel:"noopener noreferrer"}},[s._v("点我"),t("OutboundLink")],1),s._v("。")]),s._v(" "),t("p",[s._v("首次打开，MySqlWorkBench, 需要连接数据库，如下，点击加号， 下面的local是我之前连接好的，像这样连接好的， 下次直接双击这个数据库就可直接进入。")]),s._v(" "),t("p",[t("img",{attrs:{src:"https://colastar.github.io/static/images/welcomeToMysql.jpg",alt:"进入mysql"}})]),s._v(" "),t("p",[s._v("依次输入信息，1的名字随便写， 2 3 分别是用户名，密码，填写完，点击4 测试是否能连接上，成功了点击ok。")]),s._v(" "),t("p",[t("img",{attrs:{src:"https://colastar.github.io/static/images/setupnewConnection.jpg",alt:"连接库"}})]),s._v(" "),t("p",[s._v("点击如下按钮，创建数据库：")]),s._v(" "),t("p",[t("img",{attrs:{src:"https://colastar.github.io/static/images/createdDb.jpg",alt:"创建库"}})]),s._v(" "),t("p",[s._v("依次填入信息，最后Apply(这个test是数据库名字)")]),s._v(" "),t("p",[t("img",{attrs:{src:"https://colastar.github.io/static/images/createdDb2.png",alt:"创建库2"}})]),s._v(" "),t("p",[s._v("然后就可以看到新增的数据库了。")]),s._v(" "),t("p",[t("img",{attrs:{src:"https://colastar.github.io/static/images/add-db.png",alt:""}})]),s._v(" "),t("p",[s._v("导入数据表：")]),s._v(" "),t("p",[t("img",{attrs:{src:"https://colastar.github.io/static/images/importTable_db.png",alt:""}})]),s._v(" "),t("p",[s._v("选择cnpm项目里，docs目录下的db.sql")]),s._v(" "),t("p",[s._v("记得在最上面加上一行， use test；")]),s._v(" "),t("p",[s._v("test是刚才的数据库名字。然后点击左边起第一个⚡️")]),s._v(" "),t("p",[t("img",{attrs:{src:"https://colastar.github.io/static/images/create_table_db.png",alt:""}})]),s._v(" "),t("p",[s._v("这样就导入成功了，如下：")]),s._v(" "),t("p",[t("img",{attrs:{src:"https://colastar.github.io/static/images/create_table_seccess_db.png",alt:""}})]),s._v(" "),t("h2",{attrs:{id:"_3-修改cnpm里面对应的配置"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-修改cnpm里面对应的配置"}},[s._v("#")]),s._v(" 3.修改cnpm里面对应的配置")]),s._v(" "),t("p",[s._v("修改"),t("code",[s._v("config/index.js")]),s._v(" 里面的一些参数")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("database: {\n    // 设置数据库信息\n    db: 'test',\n    username: 'root',\n    password: '123456',\n \n    // the sql dialect of the database\n    // - currently supported: 'mysql', 'sqlite', 'postgres', 'mariadb'\n    dialect: 'mysql',\n \n    // custom host; default: 127.0.0.1\n    // host: '127.0.0.1',\n    host: '0.0.0.0',// 用这个 是为了 用电脑ip访问\n \n    // custom port; default: 3306\n    port: 3306,\n \n    // use pooling in order to reduce db connection overload and to increase speed\n    // currently only for mysql and postgresql (since v1.5.0)\n    pool: {\n      maxConnections: 10,\n      minConnections: 0,\n      maxIdleTime: 30000\n    },\n \n    dialectOptions: {\n      // if your server run on full cpu load, please set trace to false\n      trace: true,\n    },\n \n    // the storage engine for 'sqlite'\n    // default store into ~/.cnpmjs.org/data.sqlite\n    storage: path.join(dataDir, 'data.sqlite'),\n \n    logging: !!process.env.SQL_DEBUG,\n  },\n  enablePrivate: true, // 只有管理员可以发布 npm 包，默认为 false，即任何人都可以发布包\n  scopes: ['@company'], // 私有包必须依附于 scope 下, 这个compan可以是公司名字啥的，自己定义。\n// default system admins\n  admins: {\n    // name/密码: email，\n   // 这里这个admin 既是用户名， 也是密码\n    admin: 'admin@cnpmjs.org',\n    dead_horse: 'dead_horse@qq.com',\n  },\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br"),t("span",{staticClass:"line-number"},[s._v("19")]),t("br"),t("span",{staticClass:"line-number"},[s._v("20")]),t("br"),t("span",{staticClass:"line-number"},[s._v("21")]),t("br"),t("span",{staticClass:"line-number"},[s._v("22")]),t("br"),t("span",{staticClass:"line-number"},[s._v("23")]),t("br"),t("span",{staticClass:"line-number"},[s._v("24")]),t("br"),t("span",{staticClass:"line-number"},[s._v("25")]),t("br"),t("span",{staticClass:"line-number"},[s._v("26")]),t("br"),t("span",{staticClass:"line-number"},[s._v("27")]),t("br"),t("span",{staticClass:"line-number"},[s._v("28")]),t("br"),t("span",{staticClass:"line-number"},[s._v("29")]),t("br"),t("span",{staticClass:"line-number"},[s._v("30")]),t("br"),t("span",{staticClass:"line-number"},[s._v("31")]),t("br"),t("span",{staticClass:"line-number"},[s._v("32")]),t("br"),t("span",{staticClass:"line-number"},[s._v("33")]),t("br"),t("span",{staticClass:"line-number"},[s._v("34")]),t("br"),t("span",{staticClass:"line-number"},[s._v("35")]),t("br"),t("span",{staticClass:"line-number"},[s._v("36")]),t("br"),t("span",{staticClass:"line-number"},[s._v("37")]),t("br"),t("span",{staticClass:"line-number"},[s._v("38")]),t("br"),t("span",{staticClass:"line-number"},[s._v("39")]),t("br"),t("span",{staticClass:"line-number"},[s._v("40")]),t("br"),t("span",{staticClass:"line-number"},[s._v("41")]),t("br"),t("span",{staticClass:"line-number"},[s._v("42")]),t("br"),t("span",{staticClass:"line-number"},[s._v("43")]),t("br"),t("span",{staticClass:"line-number"},[s._v("44")]),t("br"),t("span",{staticClass:"line-number"},[s._v("45")]),t("br")])]),t("h2",{attrs:{id:"_4-启动cnpm项目"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_4-启动cnpm项目"}},[s._v("#")]),s._v(" 4.启动cnpm项目")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("npm install & npm run start\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("访问 "),t("code",[s._v("http://127.0.0.1:7002/")])]),s._v(" "),t("p",[t("img",{attrs:{src:"https://colastar.github.io/static/images/cnpm_views.png",alt:""}})]),s._v(" "),t("p",[s._v("访问"),t("code",[s._v("http://127.0.0.1:7001/")])]),s._v(" "),t("p",[s._v("返回的是一堆json 就成功了。")]),s._v(" "),t("p",[s._v("这里其实可以吧"),t("code",[s._v("127.0.0.1")]),s._v("换成本机ip， 这样在局域网内的其他电脑，可以直接通过ip访问我们的服务。")]),s._v(" "),t("h2",{attrs:{id:"_5-发布npm包"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_5-发布npm包"}},[s._v("#")]),s._v(" 5.发布npm包")]),s._v(" "),t("p",[s._v("我们需要先做两件事")]),s._v(" "),t("blockquote",[t("p",[s._v("1.为了方便管理"),t("code",[s._v("npm")]),s._v("的源， 我们安装"),t("code",[s._v("nrm")])])]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("$ npm install nrm -g\n \n  $ nrm ls\n \n  # npm ---- https://registry.npmjs.org/\n  # cnpm --- http://r.cnpmjs.org/\n  # * taobao - https://registry.npm.taobao.org/\n  # nj ----- https://registry.nodejitsu.com/\n  # rednpm - http://registry.mirror.cqupt.edu.cn/\n  # npmMirror  https://skimdb.npmjs.com/registry/\n  # edunpm - http://registry.enpmjs.org/\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br")])]),t("p",[s._v("上面可以看出可以用的npm仓库地址，*标明当前使用的仓库地址，使用"),t("code",[s._v("npm use 'name'")]),s._v("切换仓库")]),s._v(" "),t("blockquote",[t("p",[s._v("2.添加本地私有仓库\ncnpm提供两个端口：7001和7002，其中7001用于NPM的注册服务，7002用于Web访问")])]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("$ nrm add local http://127.0.0.1:7001/\n \n  add registry local success\n \n$ nrm ls\n \n# npm ---- https://registry.npmjs.org/\n# cnpm --- http://r.cnpmjs.org/\n# * taobao - https://registry.npm.taobao.org/\n# nj ----- https://registry.nodejitsu.com/\n# rednpm - http://registry.mirror.cqupt.edu.cn/\n# npmMirror  https://skimdb.npmjs.com/registry/\n# edunpm - http://registry.enpmjs.org/\n# local -- http://127.0.0.1:7001/\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br")])]),t("p",[t("code",[s._v("local")]),s._v("就是我们刚才添加的本地私有npm仓库，执行")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("nrm use local\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("使用本地仓库")]),s._v(" "),t("p",[s._v("然后就可以正常使用了")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("npm login  // 输入用户名，密码\n\nnpm publish //发包\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br")])]),t("p",[s._v("发布成功后 ，在7002页面可以看到 total packages 增加了。")]),s._v(" "),t("p",[t("img",{attrs:{src:"https://colastar.github.io/static/images/cnpm_total_packages_add.png",alt:""}})]),s._v(" "),t("p",[s._v("这里只能搜索，才能找到对应的npm包")]),s._v(" "),t("p",[t("img",{attrs:{src:"https://colastar.github.io/static/images/cnpm_search_package.png",alt:""}})]),s._v(" "),t("p",[s._v("点进去")]),s._v(" "),t("p",[t("img",{attrs:{src:"https://colastar.github.io/static/images/cnpm_search_package_item.png",alt:""}})]),s._v(" "),t("h2",{attrs:{id:"_6-下载npm包"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_6-下载npm包"}},[s._v("#")]),s._v(" 6.下载npm包")]),s._v(" "),t("p",[s._v("这里下载就跟正常的下载是一样的，")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("npm install @company/xxx-test\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("因为目前我们的npm源 还是local。")]),s._v(" "),t("p",[s._v("以后如果想下载公网的npm， 需要切换源")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("nrm use npm\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("期间遇到的问题：\n出现下面这个问题， 是连不上数据库")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("code: 'ER_NOT_SUPPORTED_AUTH_MODE',\nerrno: 1251,\nsqlMessage: 'Client does not support authentication protocol requested by server; consider upgrading MySQL client',\nsqlState: '08004',\nfatal: true\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br")])]),t("p",[s._v("解决办法如下：")]),s._v(" "),t("p",[s._v("1.首先进入mysql命令行 "),t("strong",[t("a",{attrs:{href:"https://jingyan.baidu.com/article/3065b3b6468f68becff8a4e4.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("mac下如何进入mysql命令行"),t("OutboundLink")],1)])]),s._v(" "),t("p",[s._v("2.然后执行如下代码：")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY '123456';\nFLUSH PRIVILEGES;\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("p",[s._v("123456换成自己的数据库密码。 重启node服务即可")])])}),[],!1,null,null,null);a.default=e.exports}}]);