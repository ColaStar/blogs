# jenkins学习笔记（一）介绍和初始化安装

## 1.jenkins介绍
jenkins目前最流行的一款持续集成及自动化部署工具。

jenkins产品发布流程

![](https://img-blog.csdn.net/20180928144418846?watermark/2/text/aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzIzNjAzNDM3/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70)


通过上图可以看到，jenkins帮我们持续、自动地构建/测试软件项目。

搭建上述持续集成环境可以把整个构建、部署过程自动化，很大程度上减轻工作量。 对于程序员的日常开发来说不会造成任何额外负担——自己把代码提交上去之后，服务 器上运行的马上就是最新版本——一切都发生在无形中。

## 2.jenkins运行环境搭建
通过上图可分析出，jenkins需要获取项目代码，打包，部署

以centos7为例搭建环境，首先我们得安装一个jdk，直接yum就完事了，然后配下环境变量

### 2.1获取代码
可以从svn或者git中获取，需要在jenkins所在服务器上安装svn或者git

 

安装git

第一步安装编译git需要的包

yum install -y curl-devel expat-devel gettext-devel openssl-devel zlib-devel

yum install -y gcc perl-ExtUtils-MakeMaker

第二步从官网下载最新的git安装包

安装过程请铁汁们自行百度嗷

### 2.2打包
项目代码拉下来了，要把他打成war包或者jar包，这时需要maven

然后我们来安装一个maven

下载一个maven安装包，解压后配好环境变量即可

### 2.3部署
自动部署可以在Jenkins中执行shell脚本来运行打包好的项目，后续再提。

安装完jdk，git，maven后，jenkins需要的环境已经备齐了。

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
> 2、如果未安装java还需安装java

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
![](https://images2018.cnblogs.com/blog/1267938/201806/1267938-20180605141640065-2067254947.png)
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

![](https://images2017.cnblogs.com/blog/1267938/201712/1267938-20171228171402241-902610828.png)

2、查看密码，将内容填写到密码处点击继续
```
cat /var/lib/jenkins/secrets/initialAdminPassword
```
3、选择默认插件即可　　
![](https://img-blog.csdn.net/20180928150738731?watermark/2/text/aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzIzNjAzNDM3/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70)

安装插件随意选择，对后续没有太大影响，因为有需要的插件我们还会在之后安装
![](https://img-blog.csdn.net/20180928150839383?watermark/2/text/aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzIzNjAzNDM3/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70)

此处安装需要联网下载，耐心等待安装完

4、设置管理员

![](https://img-blog.csdn.net/20180928151125831?watermark/2/text/aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzIzNjAzNDM3/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70)
创建一个账号，然后下一步
![](https://img-blog.csdn.net/20180928151208128?watermark/2/text/aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzIzNjAzNDM3/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70)


到这里jenkins已经初始化好了

