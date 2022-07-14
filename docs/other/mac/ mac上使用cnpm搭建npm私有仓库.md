# mac上使用cnpm搭建npm私有仓库，并上传/下载私有npm包 

## 前言

随着Nodejs开发的项目越来越多，Node项目管理就成了一个需要思考的问题了。如果所有项目都开源统一用 NPM 进行管理也没什么问题，但总有一些是我们不希望的完全开放的代码，作为企业是核心秘密保留在公司内部，这个时候就需要在公司内网也搭建一套 NPM 依赖管理系统。

CNPM正好就提供了这个功能。

CNPM官方githuib地址， 但是官方文档不够全面：[点我](https://github.com/cnpm/cnpmjs.org) 。

大家可以下载我的这份， 我在官方项目基础上进行了配置 [点我](https://github.com/YalongYan/private-cnpm)， 具体配置下面会讲。

官网上写的是在linux环境下，其实在什么环境都可以，这里就讲在mac下部署cnpm服务。

整个过程可以分为如下几步：

## 1.下载cnpm项目代码。

```
git clone https://github.com/YalongYan/private-cnpm
```
或者直接下载压缩包。大家下载官方的git地址也可以，做相应的配置修改就可。

## 2.下载mysql & 导入数据表

mac下mysql的下载安装参考 [这里] (https://www.jianshu.com/p/833f388da8e3)

这里先记下数据库的用户名，密码，下面会用到。

安装 MySql的可视化工具 MySqlWorkBench, 下载安装参考 [点我](https://blog.csdn.net/zx1245773445/article/details/82292191)。

首次打开，MySqlWorkBench, 需要连接数据库，如下，点击加号， 下面的local是我之前连接好的，像这样连接好的， 下次直接双击这个数据库就可直接进入。

![进入mysql](http://blog.colastar.club/static/images/welcomeToMysql.jpg)

依次输入信息，1的名字随便写， 2 3 分别是用户名，密码，填写完，点击4 测试是否能连接上，成功了点击ok。


![连接库](http://blog.colastar.club/static/images/setupnewConnection.jpg)

点击如下按钮，创建数据库：

![创建库](http://blog.colastar.club/static/images/createdDb.jpg)

依次填入信息，最后Apply(这个test是数据库名字)


![创建库2](http://blog.colastar.club/static/images/createdDb2.png)

然后就可以看到新增的数据库了。

![](http://blog.colastar.club/static/images/add-db.png)


导入数据表：

![](http://blog.colastar.club/static/images/importTable_db.png)

选择cnpm项目里，docs目录下的db.sql

记得在最上面加上一行， use test；

test是刚才的数据库名字。然后点击左边起第一个⚡️

![](http://blog.colastar.club/static/images/create_table_db.png)

这样就导入成功了，如下：

![](http://blog.colastar.club/static/images/create_table_seccess_db.png)

## 3.修改cnpm里面对应的配置

修改`config/index.js` 里面的一些参数

```
database: {
    // 设置数据库信息
    db: 'test',
    username: 'root',
    password: '123456',
 
    // the sql dialect of the database
    // - currently supported: 'mysql', 'sqlite', 'postgres', 'mariadb'
    dialect: 'mysql',
 
    // custom host; default: 127.0.0.1
    // host: '127.0.0.1',
    host: '0.0.0.0',// 用这个 是为了 用电脑ip访问
 
    // custom port; default: 3306
    port: 3306,
 
    // use pooling in order to reduce db connection overload and to increase speed
    // currently only for mysql and postgresql (since v1.5.0)
    pool: {
      maxConnections: 10,
      minConnections: 0,
      maxIdleTime: 30000
    },
 
    dialectOptions: {
      // if your server run on full cpu load, please set trace to false
      trace: true,
    },
 
    // the storage engine for 'sqlite'
    // default store into ~/.cnpmjs.org/data.sqlite
    storage: path.join(dataDir, 'data.sqlite'),
 
    logging: !!process.env.SQL_DEBUG,
  },
  enablePrivate: true, // 只有管理员可以发布 npm 包，默认为 false，即任何人都可以发布包
  scopes: ['@company'], // 私有包必须依附于 scope 下, 这个compan可以是公司名字啥的，自己定义。
// default system admins
  admins: {
    // name/密码: email，
   // 这里这个admin 既是用户名， 也是密码
    admin: 'admin@cnpmjs.org',
    dead_horse: 'dead_horse@qq.com',
  },
```

## 4.启动cnpm项目

```
npm install & npm run start
```

访问 `http://127.0.0.1:7002/`

![](http://blog.colastar.club/static/images/cnpm_views.png)

访问`http://127.0.0.1:7001/`

返回的是一堆json 就成功了。

这里其实可以吧`127.0.0.1 `换成本机ip， 这样在局域网内的其他电脑，可以直接通过ip访问我们的服务。

## 5.发布npm包

我们需要先做两件事

> 1.为了方便管理`npm`的源， 我们安装`nrm`

```
$ npm install nrm -g
 
  $ nrm ls
 
  # npm ---- https://registry.npmjs.org/
  # cnpm --- http://r.cnpmjs.org/
  # * taobao - https://registry.npm.taobao.org/
  # nj ----- https://registry.nodejitsu.com/
  # rednpm - http://registry.mirror.cqupt.edu.cn/
  # npmMirror  https://skimdb.npmjs.com/registry/
  # edunpm - http://registry.enpmjs.org/
```

上面可以看出可以用的npm仓库地址，*标明当前使用的仓库地址，使用`npm use 'name'`切换仓库

> 2.添加本地私有仓库
cnpm提供两个端口：7001和7002，其中7001用于NPM的注册服务，7002用于Web访问

```
$ nrm add local http://127.0.0.1:7001/
 
  add registry local success
 
$ nrm ls
 
# npm ---- https://registry.npmjs.org/
# cnpm --- http://r.cnpmjs.org/
# * taobao - https://registry.npm.taobao.org/
# nj ----- https://registry.nodejitsu.com/
# rednpm - http://registry.mirror.cqupt.edu.cn/
# npmMirror  https://skimdb.npmjs.com/registry/
# edunpm - http://registry.enpmjs.org/
# local -- http://127.0.0.1:7001/
```

`local`就是我们刚才添加的本地私有npm仓库，执行
```
nrm use local
```

使用本地仓库

然后就可以正常使用了

```
npm login  // 输入用户名，密码

npm publish //发包
```

发布成功后 ，在7002页面可以看到 total packages 增加了。

![](http://blog.colastar.club/static/images/cnpm_total_packages_add.png)

这里只能搜索，才能找到对应的npm包

![](http://blog.colastar.club/static/images/cnpm_search_package.png)

点进去

![](http://blog.colastar.club/static/images/cnpm_search_package_item.png)


## 6.下载npm包

这里下载就跟正常的下载是一样的，
```
npm install @company/xxx-test
```

因为目前我们的npm源 还是local。

以后如果想下载公网的npm， 需要切换源
```
nrm use npm
```

期间遇到的问题：
出现下面这个问题， 是连不上数据库

```
code: 'ER_NOT_SUPPORTED_AUTH_MODE',
errno: 1251,
sqlMessage: 'Client does not support authentication protocol requested by server; consider upgrading MySQL client',
sqlState: '08004',
fatal: true
```

解决办法如下：

1.首先进入mysql命令行 **[mac下如何进入mysql命令行](https://jingyan.baidu.com/article/3065b3b6468f68becff8a4e4.html)**

2.然后执行如下代码：

```
ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY '123456';
FLUSH PRIVILEGES;
```

123456换成自己的数据库密码。 重启node服务即可