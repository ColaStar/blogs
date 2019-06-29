(window.webpackJsonp=window.webpackJsonp||[]).push([[43],{153:function(s,e,a){"use strict";a.r(e);var n=a(0),t=Object(n.a)({},function(){var s=this,e=s.$createElement,a=s._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"jenkins学习笔记（一）介绍和初始化安装"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#jenkins学习笔记（一）介绍和初始化安装","aria-hidden":"true"}},[s._v("#")]),s._v(" jenkins学习笔记（一）介绍和初始化安装")]),s._v(" "),a("h2",{attrs:{id:"_1-jenkins介绍"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-jenkins介绍","aria-hidden":"true"}},[s._v("#")]),s._v(" 1.jenkins介绍")]),s._v(" "),a("p",[s._v("jenkins目前最流行的一款持续集成及自动化部署工具。")]),s._v(" "),a("p",[s._v("jenkins产品发布流程")]),s._v(" "),a("p",[a("img",{attrs:{src:"https://img-blog.csdn.net/20180928144418846?watermark/2/text/aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzIzNjAzNDM3/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70",alt:""}})]),s._v(" "),a("p",[s._v("通过上图可以看到，jenkins帮我们持续、自动地构建/测试软件项目。")]),s._v(" "),a("p",[s._v("搭建上述持续集成环境可以把整个构建、部署过程自动化，很大程度上减轻工作量。 对于程序员的日常开发来说不会造成任何额外负担——自己把代码提交上去之后，服务 器上运行的马上就是最新版本——一切都发生在无形中。")]),s._v(" "),a("h2",{attrs:{id:"_2-jenkins运行环境搭建"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-jenkins运行环境搭建","aria-hidden":"true"}},[s._v("#")]),s._v(" 2.jenkins运行环境搭建")]),s._v(" "),a("p",[s._v("通过上图可分析出，jenkins需要获取项目代码，打包，部署")]),s._v(" "),a("p",[s._v("以centos7为例搭建环境，首先我们得安装一个jdk，直接yum就完事了，然后配下环境变量")]),s._v(" "),a("h3",{attrs:{id:"_2-1获取代码"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-1获取代码","aria-hidden":"true"}},[s._v("#")]),s._v(" 2.1获取代码")]),s._v(" "),a("p",[s._v("可以从svn或者git中获取，需要在jenkins所在服务器上安装svn或者git")]),s._v(" "),a("p"),s._v(" "),a("p",[s._v("安装git")]),s._v(" "),a("p",[s._v("第一步安装编译git需要的包")]),s._v(" "),a("p",[s._v("yum install -y curl-devel expat-devel gettext-devel openssl-devel zlib-devel")]),s._v(" "),a("p",[s._v("yum install -y gcc perl-ExtUtils-MakeMaker")]),s._v(" "),a("p",[s._v("第二步从官网下载最新的git安装包")]),s._v(" "),a("p",[s._v("安装过程请铁汁们自行百度嗷")]),s._v(" "),a("h3",{attrs:{id:"_2-2打包"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-2打包","aria-hidden":"true"}},[s._v("#")]),s._v(" 2.2打包")]),s._v(" "),a("p",[s._v("项目代码拉下来了，要把他打成war包或者jar包，这时需要maven")]),s._v(" "),a("p",[s._v("然后我们来安装一个maven")]),s._v(" "),a("p",[s._v("下载一个maven安装包，解压后配好环境变量即可")]),s._v(" "),a("h3",{attrs:{id:"_2-3部署"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-3部署","aria-hidden":"true"}},[s._v("#")]),s._v(" 2.3部署")]),s._v(" "),a("p",[s._v("自动部署可以在Jenkins中执行shell脚本来运行打包好的项目，后续再提。")]),s._v(" "),a("p",[s._v("安装完jdk，git，maven后，jenkins需要的环境已经备齐了。")]),s._v(" "),a("h2",{attrs:{id:"_3-发布jenkins服务"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-发布jenkins服务","aria-hidden":"true"}},[s._v("#")]),s._v(" 3.发布jenkins服务")]),s._v(" "),a("h3",{attrs:{id:"一、安装jenkins"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#一、安装jenkins","aria-hidden":"true"}},[s._v("#")]),s._v(" 一、安装jenkins")]),s._v(" "),a("blockquote",[a("p",[s._v("1、添加yum repos，然后安装")])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("sudo wget -O /etc/yum.repos.d/jenkins.repo https://pkg.jenkins.io/redhat/jenkins.repo\nsudo rpm --import https://pkg.jenkins.io/redhat/jenkins.io.key\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("p",[s._v("注：如果上边的执行成功就不用再执行这两行了")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("sudo wget -O /etc/yum.repos.d/jenkins.repo http://pkg.jenkins-ci.org/RedHat/jenkins.repo\nsudo rpm --import https://jenkins-ci.org/redhat/jenkins-ci.org.key\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("p",[s._v("注：如果网络不好需要重试几次")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("sudo yum install jenkins\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("blockquote",[a("p",[s._v("2、如果未安装java还需安装java")])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("sudo yum install java\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("blockquote",[a("p",[s._v("3、启动和停止")])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("sudo service jenkins start\nsudo service jenkins stop\nsudo service jenkins restart\n\nsudo chkconfig jenkins on\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br")])]),a("p",[s._v("如果启动失败，可以运行如下命令查看错误信息")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("systemctl status jenkins.service\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[a("img",{attrs:{src:"https://images2018.cnblogs.com/blog/1267938/201806/1267938-20180605141640065-2067254947.png",alt:""}}),s._v("\n如上错误是java配置错误，需要修改jenkins配置文件")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("vi /etc/rc.d/init.d/jenkins\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("类似如下修改：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('candidates="\n************\n************\n/usr/local/jdk1.8/bin/java\n"\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br")])]),a("blockquote",[a("p",[s._v("4、jenkins的默认设置")])]),s._v(" "),a("p",[s._v("Jenkins会随系统启动而启动。详情参照/etc/init.d/jenkins\n　　Jenkins会创建一个用户叫做jenkins, "),a("strong",[s._v("如果你修改了user")]),s._v("，则要修修改所属者：/var/log/jenkins,/var/lib/jenkins,/var/cache/jenkins\n　　"),a("strong",[s._v("如果遇到问题，查看日志")]),s._v(" /var/log/jenkins/jenkins.log\n　　"),a("strong",[s._v("配置文件")]),s._v("/etc/sysconfig/jenkins\n　　端口默认启用  8080")]),s._v(" "),a("blockquote",[a("p",[s._v("5、打开和关闭防火墙")])]),s._v(" "),a("p",[s._v("开启非80端口需要打开防火墙，参考：http://www.cnblogs.com/rslai/p/7954080.html")]),s._v(" "),a("blockquote",[a("p",[s._v("6、关于centos上的java")])]),s._v(" "),a("p",[s._v("Jenkins不支持在centos的默认的jdk上工作。如果如下所示，则需要remove：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('　　java -version\n　　java version "1.5.0"\n　　gij (GNU libgcj) version 4.4.6 20110731 (Red Hat 4.4.6-3)\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("p",[s._v("为了正确使用Jenkins：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("　　yum remove java\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("然后可以安装openjdk")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("　　yum install java-1.7.0-openjdk\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("正确如下：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('　　java -version\n　　java version "1.7.0_79"\n　　OpenJDK Runtime Environment (rhel-2.5.5.1.el6_6-x86_64 u79-b14)\n　　OpenJDK 64-Bit Server VM (build 24.79-b02, mixed mode)\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])]),a("blockquote",[a("p",[s._v("7、配置java路径")])]),s._v(" "),a("p",[s._v("直接启动：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("sudo service jenkins start\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("但是发现启动失败，于是需要配置java位置：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("vi /etc/init.d/jenkins\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("在启动加入本机的java：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("[root@iZ94xvn71eeZ ~]# vim /etc/init.d/jenkins\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('# Set up environment accordingly to the configuration settings\n[ -n "$JENKINS_HOME" ] || { echo "JENKINS_HOME not configured in $JENKINS_CONFIG";\nif [ "$1" = "stop" ]; then exit 0;\nelse exit 6; fi; }\n[ -d "$JENKINS_HOME" ] || { echo "JENKINS_HOME directory does not exist: $JENKINS_HOME";\nif [ "$1" = "stop" ]; then exit 0;\nelse exit 1; fi; }\n\n# Search usable Java as /usr/bin/java might not point to minimal version required by Jenkins.\n# see http://www.nabble.com/guinea-pigs-wanted-----Hudson-RPM-for-RedHat-Linux-td25673707.html\ncandidates="\n/etc/alternatives/java\n/usr/lib/jvm/java-1.8.0/bin/java\n/usr/lib/jvm/jre-1.8.0/bin/java\n/usr/lib/jvm/java-1.7.0/bin/java\n/usr/lib/jvm/jre-1.7.0/bin/java\n/usr/bin/java\n/usr/java/jdk1.7.0_80/bin/java\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br")])]),a("blockquote",[a("p",[s._v("8、配置端口")])]),s._v(" "),a("p",[s._v("修改")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("vi /etc/sysconfig/jenkins　\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("内容改为需要的端口")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('JENKINS_PORT="8080"\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("blockquote",[a("p",[s._v("9、yum安装Jenkins默认路径为")])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("/var/lib/jenkins\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h2",{attrs:{id:"二、进入jenkins"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#二、进入jenkins","aria-hidden":"true"}},[s._v("#")]),s._v(" 二、进入jenkins")]),s._v(" "),a("p",[s._v("1、打开")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("http://192.168.0.104:8080\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[a("img",{attrs:{src:"https://images2017.cnblogs.com/blog/1267938/201712/1267938-20171228171402241-902610828.png",alt:""}})]),s._v(" "),a("p",[s._v("2、查看密码，将内容填写到密码处点击继续")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("cat /var/lib/jenkins/secrets/initialAdminPassword\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("3、选择默认插件即可　　\n"),a("img",{attrs:{src:"https://img-blog.csdn.net/20180928150738731?watermark/2/text/aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzIzNjAzNDM3/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70",alt:""}})]),s._v(" "),a("p",[s._v("安装插件随意选择，对后续没有太大影响，因为有需要的插件我们还会在之后安装\n"),a("img",{attrs:{src:"https://img-blog.csdn.net/20180928150839383?watermark/2/text/aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzIzNjAzNDM3/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70",alt:""}})]),s._v(" "),a("p",[s._v("此处安装需要联网下载，耐心等待安装完")]),s._v(" "),a("p",[s._v("4、设置管理员")]),s._v(" "),a("p",[a("img",{attrs:{src:"https://img-blog.csdn.net/20180928151125831?watermark/2/text/aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzIzNjAzNDM3/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70",alt:""}}),s._v("\n创建一个账号，然后下一步\n"),a("img",{attrs:{src:"https://img-blog.csdn.net/20180928151208128?watermark/2/text/aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzIzNjAzNDM3/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70",alt:""}})]),s._v(" "),a("p",[s._v("到这里jenkins已经初始化好了")])])},[],!1,null,null,null);e.default=t.exports}}]);