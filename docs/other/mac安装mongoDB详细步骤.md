
# mac安装mongoDB详细步骤
##  介绍：
基于分布式文件存储的数据库，使用C++编写。

应用最广泛的非关系型数据库(NoSQL)。

NoSQL与SQL区别:NoSQL是基于键值对保存数据的，无复制的sql查询，表与表之前无耦合性。

NoSQL优势：性能高、可扩展。

SQL优势：可以在表和表之间做复制的关联查询，支持事物。

## 下载安装
> 方法一： [官网链接](https://www.mongodb.com/try/download/community)下载安装

![](https://colastar.github.io/static/images/mongo_down.png)

方法二： 使用命令行安装:

通过官网获取到最新版本的下载连接，替换下面下载命令后面的4.0.9版本的地址，下图位置右键复制链接

![](https://colastar.github.io/static/images/mongo_down_cmd.png)

```
cd /usr/local
进入目录

sudo curl -O https://fastdl.mongodb.org/osx/mongodb-osx-ssl-x86_64-4.0.9.tgz
开始下载，后面的地址替换为最新版本的地址

sudo tar -zxvf mongodb-osx-ssl-x86_64-4.0.9.tgz
解压，这里的文件名也需要替换为按版本的文件名，具体可以下载之后ls看一下文件即可

sudo mv mongodb-osx-x86_64-4.0.9/ mongodb
解压后改名，不要忘了改文件名
```
## 二、 配置环境变量
- 1、在终端中输出 `open -e .bash_profile`，打开`bash_profile`文件。
- 2、将安装目录的bin目录地址 `export PATH=${PATH}:/usr/local/mongoDB/bin` 添加到环境变量中。

![](https://colastar.github.io/static/images/save_bash_profile.png)

- 3、`Command+S`保存配置，关闭上面的`.bash_profile`编辑窗口。
- 4、在终端中输入`source .bash_profile`使配置立即生效。
- 5、在终端中输入 `mongod -version`，如果出现如下信息则说明path配资环和安装都已成功
![](https://colastar.github.io/static/images/success_down_mongodb.png)

## 三、启动服务和链接数据库

- (1)、创建 log 和 data 目录

在`/usr/local/mongoDB` 目录下创建两个文件夹: `data` 和 `log。`

- （2)、启动`mongodb`服务

在终端中，先进入 data 和 log 所在的目录，也就是 /usr/local/mongoDB ，然后输入`mongod --dbpath data --logpath log/mongod.log --logappend`，启动`mongodb`服务(当前终端不要关闭)

![](https://colastar.github.io/static/images/start_mongo.png)

⚠️**注意**：因为默认的数据保存地址为 /data/db ，需要手动在 mac 根目录(即Macintosh HD)中创建`/data/db`，如果改变 data 目录位置，则需要在启动服务时 指定dbpath的位置。

- --dbpath 指定为刚才创建好的data目录
- --logpath 指定log存放位置
- --logappend mongo在后台运行
![](https://colastar.github.io/static/images/mkdir_momngo.png)

## 连接数据库

在新的终端中输入"mongo" 连接数据库
![](https://colastar.github.io/static/images/conncetion_mongo.png)

