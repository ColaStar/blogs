

# jenkins

## jenkins介绍和初始化安装

## 1.jenkins介绍
jenkins目前最流行的一款持续集成及自动化部署工具。

jenkins产品发布流程(**java**)

![](https://colastar.github.io/static/images/jenkins产品发布流程.png)

<a data-fancybox title="" href="https://colastar.github.io/static/images/jenkins_流程图3.jpg">![](https://colastar.github.io/static/images/jenkins_流程图3.jpg)</a>


通过上图可以看到，jenkins帮我们持续、自动地构建/测试软件项目。

搭建上述持续集成环境可以把整个构建、部署过程自动化，很大程度上减轻工作量。 对于程序员的日常开发来说不会造成任何额外负担——自己把代码提交上去之后，服务 器上运行的马上就是最新版本——一切都发生在无形中。

## 2.jenkins运行环境搭建
通过上图可分析出，jenkins需要获取项目代码，打包，部署

以centos7为例搭建环境，首先我们得安装一个jdk，直接yum就完事了，然后配下环境变量
```
yum install -y java-1.8.0-openjdk java-1.8.0-openjdk-devel
```
### 2.1获取代码
可以从svn或者git中获取，需要在jenkins所在服务器上安装svn或者git

> 安装git

- 1.安装编译git需要的包
```
yum install -y curl-devel expat-devel gettext-devel openssl-devel zlib-devel

yum install -y gcc perl-ExtUtils-MakeMaker
```

- 2.下载git源码并解压
```
wget https://github.com/git/git/archive/v2.3.0.zip

unzip v2.3.0.zip

cd git-2.3.0

```

- 3.编译安装：
```
将其安装在“/usr/local/git”目录下。

make prefix=/usr/local/git all

make prefix=/usr/local/git install
```
因为服务器时间不对编译的过程中报错如下图，使用ntpdate自动校正系统时间。报错“`Writing perl.mak for Git make[2]: *** [perl.mak] Error 1`”，请重启a服务，`service httpd restart`。
![](https://colastar.github.io/static/images/ntpdate.png)

- 4.编译完成之后使用git --version 

查看git版本，居然还是1.7.1，

这是因为它默认使用了"/usr/bin"下的git。

你可以用下面的命令查看git所在的路径：
```
$ whereis git

git: /usr/bin/git /usr/local/git /usr/share/man/man1/git.1.gz
```
![](https://colastar.github.io/static/images/whereis-git.png)


- 5.把git路径放到环境变量里

我们要把编译安装的git路径放到环境变量里，让它替换"/usr/bin"下的git。为此我们可以修改“/etc/profile”文件（或者/etc/bashrc文件）
···
vim /etc/profile

然后在文件的最后一行，添加下面的内容，然后保存退出。

export PATH=/usr/local/git/bin:$PATH
···
![](https://colastar.github.io/static/images/unset-f.png)

然后执行一下profile文件
```
source /etc/profile
```
然后再次使用git --version 查看git版本，发现输出2.3.0，表明安装成功。
![](https://colastar.github.io/static/images/jenkins_item22.png)




## 3.发布jenkins服务
### 一、安装jenkins
> 1、添加yum repos，然后安装
```
sudo wget -O /etc/yum.repos.d/jenkins.repo https://pkg.jenkins.io/redhat/jenkins.repo
sudo rpm --import https://pkg.jenkins.io/redhat/jenkins.io.key
```
　注：如果上边的执行成功就不用再执行这两行了
```
sudo wget -O /etc/yum.repos.d/jenkins.repo http://pkg.jenkins-ci.org/RedHat/jenkins.repo
sudo rpm --import https://jenkins-ci.org/redhat/jenkins-ci.org.key
```
　注：如果网络不好需要重试几次
```
sudo yum install jenkins
```
> 2、如果未安装java还需安装java或者jdk或者jre

```
sudo yum install java
```
> 3、启动和停止
```
sudo service jenkins start
sudo service jenkins stop
sudo service jenkins restart

sudo chkconfig jenkins on
```
如果启动失败，可以运行如下命令查看错误信息

```
systemctl status jenkins.service
```

![](https://colastar.github.io/static/images/jenkins_item23.png)

如上错误是java配置错误，需要修改jenkins配置文件

```
vi /etc/rc.d/init.d/jenkins
```
类似如下修改：
```
candidates="
************
************
/usr/local/jdk1.8/bin/java
"
```
> 4、jenkins的默认设置

　　Jenkins会随系统启动而启动。详情参照/etc/init.d/jenkins
　　Jenkins会创建一个用户叫做jenkins, **如果你修改了user**，则要修修改所属者：/var/log/jenkins,/var/lib/jenkins,/var/cache/jenkins
　　**如果遇到问题，查看日志** /var/log/jenkins/jenkins.log
　　**配置文件**/etc/sysconfig/jenkins
　　端口默认启用  8080

 > 5、打开和关闭防火墙

　　开启非80端口需要打开防火墙，参考：http://www.cnblogs.com/rslai/p/7954080.html


> 6、关于centos上的java

Jenkins不支持在centos的默认的jdk上工作。如果如下所示，则需要remove：
```
　　java -version
　　java version "1.5.0"
　　gij (GNU libgcj) version 4.4.6 20110731 (Red Hat 4.4.6-3)
```
　　为了正确使用Jenkins：
```
　　yum remove java
```
　　然后可以安装openjdk
```
　　yum install java-1.7.0-openjdk
```
　　正确如下：
```
　　java -version
　　java version "1.7.0_79"
　　OpenJDK Runtime Environment (rhel-2.5.5.1.el6_6-x86_64 u79-b14)
　　OpenJDK 64-Bit Server VM (build 24.79-b02, mixed mode)
```

> 7、配置java路径

直接启动：
```
sudo service jenkins start
```
但是发现启动失败，于是需要配置java位置：
```
vi /etc/init.d/jenkins
```
在启动加入本机的java：
```
[root@iZ94xvn71eeZ ~]# vim /etc/init.d/jenkins
```
```
# Set up environment accordingly to the configuration settings
[ -n "$JENKINS_HOME" ] || { echo "JENKINS_HOME not configured in $JENKINS_CONFIG";
if [ "$1" = "stop" ]; then exit 0;
else exit 6; fi; }
[ -d "$JENKINS_HOME" ] || { echo "JENKINS_HOME directory does not exist: $JENKINS_HOME";
if [ "$1" = "stop" ]; then exit 0;
else exit 1; fi; }

# Search usable Java as /usr/bin/java might not point to minimal version required by Jenkins.
# see http://www.nabble.com/guinea-pigs-wanted-----Hudson-RPM-for-RedHat-Linux-td25673707.html
candidates="
/etc/alternatives/java
/usr/lib/jvm/java-1.8.0/bin/java
/usr/lib/jvm/jre-1.8.0/bin/java
/usr/lib/jvm/java-1.7.0/bin/java
/usr/lib/jvm/jre-1.7.0/bin/java
/usr/bin/java
/usr/java/jdk1.7.0_80/bin/java
```

> 8、配置端口

修改

```
vi /etc/sysconfig/jenkins　
```
内容改为需要的端口

```
JENKINS_PORT="8080"
```

> 9、yum安装Jenkins默认路径为
```
/var/lib/jenkins
```

## 二、进入jenkins
1、打开
```
http://192.168.0.104:8080
```



![](https://colastar.github.io/static/images/jenkins_item24.png)
2、查看密码，将内容填写到密码处点击继续
```
cat /var/lib/jenkins/secrets/initialAdminPassword
```
3、选择默认插件即可　　
![](https://colastar.github.io/static/images/jenkins_item25.png)


安装插件随意选择，对后续没有太大影响，因为有需要的插件我们还会在之后安装

![](https://colastar.github.io/static/images/jenkins_item26.png)
此处安装需要联网下载，耐心等待安装完

4、设置管理员

![](https://colastar.github.io/static/images/jenkins_item27.png)

创建一个账号，然后下一步
![](https://colastar.github.io/static/images/jenkins_item28.png)


到这里jenkins已经初始化好了


## jenkins配置（系统管理）

![](https://colastar.github.io/static/images/jenkins_item29.png)

### 1.**全局安全**配置

![](https://colastar.github.io/static/images/jenkins_item30.png)

目前是为了学习Jenkins，所有把安全性问题都放开，不做限制

### 2.插件管理

jenkins系统管理比较重要的就是插件管理了 ，因为jenkins的工作全部是由插件来完成。

在插件管理中，有可更新、可选插件、已安装，日常的插件安装都是在这个界面上完成的。比如为了和git协同，我们需要安装git相关的插件。当然安装完插件我们需要重启jenkins

 
当插件安装不上的时候，可以直接去网上下载，进行安装

```
下载地址
http://updates.jenkins-ci.org/
 
解压备份plugin.tar.gz
mv plugins /var/lib/jenkins/
chown -R jenkins.jenkins plugins/
service jenkins restart
```
比如我们需要下载nodejs插件来实现node环境，使用Publish Over SSH插件实现远程自动部署等等。
下面我介绍一下我安装过的几个插件的全过程

#### 使用Publish Over SSH插件实现远程自动部署
**背景**：现场的部署环境开放外网环境困难，只有一台机器能够开发外网，应对该情况，所有的补丁文件需要直接在master机器上面生成，然后命令移动到其他的服务器上面去。

这里使用到了jenkins的Publish Over SSHcha插件。

**Publish Over SSH插件使用介绍：**

首先jenkins服务器需要安装Publish Over SSH插件

在jenkins页面“系统管理”-->“管理插件”-->"可选插件"中搜索Publish Over SSH插件选择并安装

<a data-fancybox title="" href="http://s5.51cto.com/wyfs02/M01/7E/AF/wKioL1cHXXGDffHKAALinIAmzyc658.png">![](http://s5.51cto.com/wyfs02/M01/7E/AF/wKioL1cHXXGDffHKAALinIAmzyc658.png)</a>

<a data-fancybox title="" href="https://colastar.github.io/static/images/Publish_Over_SSH.png">![](https://colastar.github.io/static/images/Publish_Over_SSH.png)</a>
安装完成后，重启下jenkins

注：也可以手动下载插件安装，到官网下载插件，然后将下载的插件传到服务器jenkins根目录下的plugins目录

即~/.jenkins/plugins目录，重启jenkins即可

官网插件下载地址https://wiki.jenkins-ci.org/display/JENKINS/Plugins

Publish Over SSH插件安装完成后，在“系统设置”中会出现“Publish Over SSH”的配置标签

ssh的配置可使用密钥，也可以使用密码，这里我们使用密钥来配置，在配置之前先配置好jenkins服务器和应用服务器的密钥认证

jenkins服务器上生成密钥对，使用ssh-keygen -t rsa命令

<a data-fancybox title="" href="https://colastar.github.io/static/images/ssh-keygen.png">![](https://colastar.github.io/static/images/ssh-keygen.png)</a>

在~/.ssh/下会有私钥id_rsa和公钥id_rsa.pub

 

应用服务器上创建~/.ssh文件夹和~/.ssh/authorized_keys文件，并将jenkins服务器的公钥id_rsa.pub中的内容复制到authorized_keys文件

应用服务器上重启ssh服务，service sshd restart

现在jenkins服务器可免密码直接登陆应用服务器

上面两个前提条件准备完毕之后，现在配置jenkins自动部署

在jenkins页面“系统管理”-->"系统设置"中的Publish Over SSH标签配置如下

<a data-fancybox title="" href="https://colastar.github.io/static/images/Publish_Over_SSH1.png">![](https://colastar.github.io/static/images/Publish_Over_SSH1.png)</a>

Passphrase：密码（key的密码，如果你设置了）

Path to key：key文件（私钥）的路径

SSH Server Name：标识的名字（随便你取什么）

Hostname：需要连接ssh的主机名或ip地址，此处填写应用服务器IP（建议ip）

Username：用户名

Remote Directory：远程目录(根据需要填写文件传到此目录下)

“Use password authentication, or use a different key”：使用密码验证(这里使用了密钥认证所以不开启)

配置完成后可点击“Test Configuration”测试到目标主机的连接，出现”success“则成功连接
<a data-fancybox title="" href="https://colastar.github.io/static/images/Publish_Over_SSH2.png">![](https://colastar.github.io/static/images/Publish_Over_SSH2.png)</a>
如果有多台应用服务器，可以点击”增加“，配置多个“SSH Servers”

点击“保存”以保存配置

 

系统配置好ssh连接后，到项目配置中配置构建后发布的步骤

点击(项目名“fin_test1”–>左侧菜单的“配置”)来更改项目的配置

在配置最后找到“增加构建后操作步骤”，选择"Send build artifacts over SSH"
<a data-fancybox title="" href="https://colastar.github.io/static/images/send_file.png">![](https://colastar.github.io/static/images/send_file.png)</a>

然后在"Send build artifacts over SSH"模块中配置如下

<a data-fancybox title="" href="https://colastar.github.io/static/images/send_file_ssh.png">![](https://colastar.github.io/static/images/send_file_ssh.png)</a>

**SSH  Server Name**：选个一个你在系统设置里配置的名字

**Transfer Set Source files**：需要上传的文件（注意：相对于工作区的路径。看后面的配置可以填写多个，默认用,分隔）注意：如果是多成子目录的需要配置成 target/**/*

**Remove prefix：**移除目录（只能指定Transfer Set Source files中的目录，这里移除了target目录表示只将FinServer.war传到目标服务器，否则会在目标服务器创建target目录）

**Remote directory**：远程目录（根据你的需求填写，这里没有填写默认会继承系统配置，即/mnt）

**Exec command**：把你要执行的命令写在里面(这里的命令是在目标服务器上执行的)

**Exclude files**：排除的文件（在你传输目录的时候很有用，使用通配符，例如：**/*.log,**/*.tmp,.git/）

**Pattern separator**：分隔符（配置Transfer Set Source files的分隔符。如果你这儿更改了，上面的内容也需要更改）

**No default excludes**：禁止默认的排除规则（具体的自己看帮助）

**Make empty dirs**：此选项会更改插件的默认行为。默认行为是匹配该文件是否存在，如果存在则创建目录存放。选中此选项会直接创建一个目录存放文件，即使是空目录。（个人理解）

**Flatten files**：只上传文件，不创建目录（除了远程目录）
**Remote directory is a date format**:远程目录建立带日期的文件夹（需要在Remote directory中配置日期格式），具体格式参考下表：

|Remote directory|	Directories created|
|:--:|:--:|
|'qa-approved/'yyyyMMddHHmmss|	qa-approved/20101107154555|
|'builds/'yyyy/MM/dd/'build-${BUILD_NUMBER}'	|builds/2010/11/07/build-456 (if the build was number 456)|
|yyyy_MM/'build'-EEE-d-HHmmss	|2010_11/build-Sun-7-154555|
|yyyy-MM-dd_HH-mm-ss	|2010-11-07_15-45-55|

**Exec timeout (ms)：**运行脚步的超时时间（毫秒）

**Exec in pty**：模拟一个终端执行脚步

**Add Transfer Set**
如需要传输多个war包，可点击“Add Transfer Set”，增加一个传输模块

如需要上传到多个“SSH Server”，可点击“Add Server”，增加一个服务器模块(系统设置中有多个“SSH Servers”)s
<a data-fancybox title="" href="https://colastar.github.io/static/images/send_file_ssh2.png">![](https://colastar.github.io/static/images/send_file_ssh2.png)</a>

点击”保存“，然后下次构建就会在构建完成后自动部署到应用服务器上

至此远程自动部署就可实现


#### nodejs插件

<a data-fancybox title="" href="https://colastar.github.io/static/images/nodejs.jpg">![](https://colastar.github.io/static/images/nodejs.jpg)</a>

安装完毕后，选择系统管理->全局工具配置，配置node下载及安装

<a data-fancybox title="" href="https://colastar.github.io/static/images/nodejs2.jpg">![](https://colastar.github.io/static/images/nodejs2.jpg)</a>

#### git钩子
安装的git插件
```
GIT client plugin
GIT plugin
Git server plugin
GitHub API Plugin
GitHub plugin
SSH Credentials Plugin
SSH plugin
```

为了能够与 GitHub 配合，需要进入对 GitHub 进行一些设置

在github中进入博客所在的repo，并点击settings。在设置界面单击左侧的Integrations & services，并选择add service。从下拉菜单中，选中Jenkins(Github plugin)

或者直接设置webhooks

<a data-fancybox title="" href="https://colastar.github.io/static/images/github1.jpg">![](https://colastar.github.io/static/images/github1.jpg)</a>

从下拉菜单中，选中Jenkins (GitHub plugin)。在新打开的界面，填写Jenkins的信息

<a data-fancybox title="" href="https://colastar.github.io/static/images/github2.jpg">![](https://colastar.github.io/static/images/github2.jpg)</a>

完整的地址为http://xx.xx.xx.xx:8080/GitHub-webhook/。把这里的xx换成实际的IP地址或者域名即可。需要注意的是，网址末尾的斜杠一定不能省略

填写好信息以后保存，GitHub就配置好了


### 进入全局工具配置

<a data-fancybox title="" href="https://colastar.github.io/static/images/全局配置.png">![](https://colastar.github.io/static/images/全局配置.png)</a>
<a data-fancybox title="" href="https://colastar.github.io/static/images/nodejs3.jpg">![](https://colastar.github.io/static/images/nodejs3.jpg)</a>

### 系统配置

执行者数量：配置并发数量，一般设置为5，不超过10

用法：如果是主server，可以不选，如果是从级别必须选择“尽可能的使用这个节点”

生成前等待时间：配置该时间10s，避免错误操作，有时间返回
<a data-fancybox title="" href="https://colastar.github.io/static/images/系统配置.png">![](https://colastar.github.io/static/images/系统配置.png)</a>

### Linux系统安装nodejs及其包管理工具

### 在nodejs官网下载最新包
> 官网下载地址:https://nodejs.org/dist/latest/
```
wget https://nodejs.org/dist/latest/node-v11.14.0-linux-x64.tar.gz
```
<a data-fancybox title="" href="https://colastar.github.io/static/images/linux_node.png">![](https://colastar.github.io/static/images/linux_node.png)</a>
> 解压安装
```
tar zxvf node-v11.14.0-linux-x64.tar.gz 
```
> 进入目录 查看版本：
```
$cd node-v4.5.0-linux-x86  
$cd bin   
$./node -v  
v4.5.0  
$./npm -v   
v2.15.9  
```
如果执行命令的时候报错  `/lib/ld-linux.so.2: bad ELF interpreter`

说明你系统软件位数安装错了 如:64位系统中安装了32位程序了

解决办法：

```
yum install glibc.i686
```
重新安装以后还有如下类系错误 再继续安装包

`error while loading shared libraries: libstdc++.so.6: cannot open shared object file: No such file or directory`

```
yum install libstdc++.so.6
```
> 设置全局

我们刚刚下载的文件bin目录下有node 和 npm ，但是不是全局的，
我们需要把它设置为全局的方便我们使用。
即把node与npm命令 放到/usr/local/bin 下
大部分发行版把这个目录归为PATH  即你在这个目录下放了什么可执行的程序，在系统任何地方都可以直接执行，不需要指定路径。
```
ln 链接命令-s 软链接
```

创建一个软链接相当于Windows中的快捷方式 

所以执行下面命令就相当于把node执行命令创建快捷方式放到/usr/local/bin 目录下，注意第二点，新的ubuntu全局设置在/usr/bin/目录下

所以系统的任何地方都可以执行node了

sudo 为获得root部分权限：
```
$ sudo ln -s /usr/local/src/node-v4.5.0-linux-x86/bin/node /usr/local/bin/node
$ sudo ln -s /usr/local/src/node-v4.5.0-linux-x86/bin/npm /usr/local/bin/npm
```
注意一下这个是我的目录，你们可以通过pwd查看当前目录，然后改成自己的目录

>安装cnpm或者yarn
建议使用淘宝镜像安装，否则会很慢的
```
$ npm config set proxy null
$ npm install -g cnpm --registry=https://registry.npm.taobao.org  
```
安装完成后也要创建一个软链接
```
$ sudo ln -s /usr/local/src/node-v4.5.0-linux-x86/bin/cnpm /usr/local/bin/cnpm
```
同理安装其他的全局工具也这样设置就好了


## 配置任务
> 1、安装好github钩子以及nodejs插件后，接下来开始配置任务

点击创建一个新任务，填写任务名称，构建的项目类型可根据实际情况进行选择，本次选择第一种即可
<a data-fancybox title="" href="https://colastar.github.io/static/images/jinnkins_item1.jpg">![](https://colastar.github.io/static/images/jinnkins_item1.jpg)</a>
> 2、配置基础信息
<a data-fancybox title="" href="https://colastar.github.io/static/images/jenkins_item2.jpg">![](https://colastar.github.io/static/images/jenkins_item2.jpg)</a>
> 3、往下拉，看到源码管理，点选Git，依然填写git仓库对应的Repo地址

<a data-fancybox title="" href="https://colastar.github.io/static/images/jenkins_item3.jpg">![](https://colastar.github.io/static/images/jenkins_item3.jpg)</a>

**注意：**

1.如果不勾选 GitHub hook trigger for GITScm polling的话，需要设置一个设置一个Jenkins的webhook地址

需要手动配置上图的Credentials即 add->jenkins设置一个Jenkins的webhook地址
具体步骤：
- 1、登录GitHub，进入要本次构建用到的工程；
- 2、在工程主页面点击右上角的"Settings"，再点击左侧"Webhooks"，然后点击“Add webhook”，如下图：
<a data-fancybox title="" href="https://colastar.github.io/static/images/jenkins_item4.jpeg">![](https://colastar.github.io/static/images/jenkins_item4.jpeg)</a>
- 3.如下图，在"Payload URL"位置填入webhook地址，再点击底部的"Add webhook按钮"，这样就完成webhook配置了，今后当前工程有代码提交，GitHub就会向此webhook地址发请求，通知Jenkins构建：
<a data-fancybox title="" href="https://colastar.github.io/static/images/jenkins_item5.jpeg">![](https://colastar.github.io/static/images/jenkins_item5.jpeg)</a>

- 4.在系统设置页面找到"GitHub"，配置一个"GitHub Server"，如下图，“API URL"填写"https://api.github.com”，“Credentials"位置如下图红框所示，选择"Add->Jenkins”

<a data-fancybox title="" href="https://colastar.github.io/static/images/jenkins_item6.jpeg">![](https://colastar.github.io/static/images/jenkins_item6.jpeg)</a>

- 5.弹出的页面中，“Kind"选择"Secret text”，"Secret"填入前面在GitHub上生成的Personal access tokens，Description随便写一些描述信息，如下图：

<a data-fancybox title="" href="https://colastar.github.io/static/images/ienkins_item7.jpeg">![](https://colastar.github.io/static/images/ienkins_item7.jpeg)</a>
- 6.填写完毕后，点击右侧的"Test connection"按钮，如果信息没有填错，显示的内容如下图所示：
<a data-fancybox title="" href="https://colastar.github.io/static/images/jenkins_item8.jpeg">![](https://colastar.github.io/static/images/jenkins_item8.jpeg)</a>
- 7.点击页面最底部的"保存"按钮；
- 构建item的时候可以直接
<a data-fancybox title="" href="https://colastar.github.io/static/images/jenkins_item9.jpg">![](https://colastar.github.io/static/images/jenkins_item9.jpg)</a>

> 4、继续往下拉，在构建触发器单击增加构建步骤，在弹出的下拉菜单中选择Execute shell。勾选GitHub hook trigger for GITScm polling。构建环境选择nodejs
<a data-fancybox title="" href="https://colastar.github.io/static/images/jenkinns_item10.jpg">![](https://colastar.github.io/static/images/jenkinns_item10.jpg)</a>
以上俩张图红框设置解释

选择"Git"；

"Repository URL"输入仓库地址：https://github.com/zq2599/jenkinsdemo.git；

“Credentials"创建一个Credentials，Kind选择"Username with password”，Username输入GitHub账号，Password输入GitHub密码；

“源码库浏览器"选择"githubweb”；

"URL"输入项目主页：https://github.com/zq2599/jenkinsdemo；

“构建触发器"中勾选"GitHub hook trigger for GiTScm polling”；

> 构建环境设置
- 1.use secret text(s) or file(s)
生成Personal access tokens

Jenkins访问GitHub工程的时候，有的操作是需要授权的，所以我们要在GitHub上生成授权的token给Jenkins使用，这就是Personal access tokens，生成步骤如下：

1.登录GitHub，进入"Settings"页面，点击左下角的"Developer settings"，如下图：
<a data-fancybox title="" href="https://colastar.github.io/static/images/jenkins_item12.png">![](https://colastar.github.io/static/images/jenkins_item12.png)</a>
2.跳转到"Developer settings"页面后，点击左下角的“Personal access tokens”，如下图：
<a data-fancybox title="" href="https://colastar.github.io/static/images/jenkins_item13.png">![](https://colastar.github.io/static/images/jenkins_item13.png)</a>
3.跳转到"Personal access tokens"页面后，点击右上角的"Generate new token"按钮，如下图：
<a data-fancybox title="" href="https://colastar.github.io/static/images/jenkins_item14.png">![](https://colastar.github.io/static/images/jenkins_item14.png)</a>
4.可能会提示输入GitHub密码，输入后跳转到创建token的页面，如下图所示，输入title，再勾选"repo"和"admin:repo_hook"，再点击底部的"Generate token"按钮，就能产生一个新的access token，将此字符串复制下来，后面jenkins任务中会用到：
<a data-fancybox title="" href="https://colastar.github.io/static/images/jenkins_item15.png">![](https://colastar.github.io/static/images/jenkins_item15.png)</a>
如下图所示，勾选"Use secret text(s) or file(s)"，下面的"Credentials"选择我们之前配置过的"Personal access tokens"

勾选的这个主要是用来鉴权的
<a data-fancybox title="" href="https://colastar.github.io/static/images/jenkins_item11.jpeg">![](https://colastar.github.io/static/images/jenkins_item11.jpeg)</a>
- 2.provide Node & npm bin/folder to PATH

<a data-fancybox title="" href="https://colastar.github.io/static/images/jenkins_item16.jpg">![](https://colastar.github.io/static/images/jenkins_item16.jpg)</a>

> build
构建的一些命令比如
```
npm install &&
npm run build
cp -r ./dist /home/xiaohuochai/blog/admin
sudo chown -R jenkins:jenkins /home/xiaohuochai/blog/admin
```
> post steps
构建后置步骤

比如：

<a data-fancybox title="" href="https://colastar.github.io/static/images/jenkins_item21.jpg">![](https://colastar.github.io/static/images/jenkins_item21.jpg)</a>
脚本如下

stop.sh
```

echo "Stopping xxx"
pid=`ps -ef|grep xxx-0.0.1-SNAPSHOT.jar|grep -v grep|awk '{print $2}'`
if [ -n "$pid" ]
then
   echo "kill -9 的pid:" $pid
   kill -9 $pid
fi
```
replace.sh
```
cp /root/.jenkins/workspace/jenkinsdemo/target/jenkinsdemo-0.0.1-SNAPSHOT.jar /home/deploy-mq/

```
在构建后，就会执行脚本，自动运行打包好的项目啦


> 邮件提醒

　在系统设置中找到Jenkins Locaction项填入Jenkins URL和系统管理员邮件地址，系统管理员邮件地址一定要配置，否则发不了邮件通知。因为邮件通知都是由系统管理员的邮箱发出来的

<a data-fancybox title="" href="https://colastar.github.io/static/images/jenkins_item17.jpg">![](https://colastar.github.io/static/images/jenkins_item17.jpg)</a>

找到Extended E-mail Notification项，填入类似信息

<a data-fancybox title="" href="https://colastar.github.io/static/images/jenkins_item18.jpg">![](https://colastar.github.io/static/images/jenkins_item18.jpg)</a>

进行新建的pull-blog项目中，在构建后操作新增Editable Email Notification

<a data-fancybox title="" href="https://colastar.github.io/static/images/jenkins_item19.jpg">![](https://colastar.github.io/static/images/jenkins_item19.jpg)</a>

在advances setting中选择always，意思是无论什么情况任务执行完就发邮件

<a data-fancybox title="" href="https://colastar.github.io/static/images/jenkins_item20.jpg">![](https://colastar.github.io/static/images/jenkins_item20.jpg)</a>