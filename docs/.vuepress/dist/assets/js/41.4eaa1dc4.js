(window.webpackJsonp=window.webpackJsonp||[]).push([[41],{147:function(t,a,e){"use strict";e.r(a);var n=e(0),s=Object(n.a)({},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h2",{attrs:{id:"一、nginx简介"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#一、nginx简介","aria-hidden":"true"}},[t._v("#")]),t._v(" 一、Nginx简介")]),t._v(" "),e("p",[t._v("Nginx是一个web服务器也可以用来做负载均衡及反向代理使用，目前使用最多的就是负载均衡，具体简介我就不介绍了百度一下有很多，下面直接进入安装步骤")]),t._v(" "),e("h2",{attrs:{id:"二、nginx安装"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#二、nginx安装","aria-hidden":"true"}},[t._v("#")]),t._v(" 二、Nginx安装")]),t._v(" "),e("h3",{attrs:{id:"_1、下载nginx及相关组件"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1、下载nginx及相关组件","aria-hidden":"true"}},[t._v("#")]),t._v(" 1、下载Nginx及相关组件")]),t._v(" "),e("p",[t._v("Linux系统是Centos 6.5 64位，我直接切换到root用户下安装")]),t._v(" "),e("p",[e("img",{attrs:{src:"https://images2015.cnblogs.com/blog/172889/201704/172889-20170418152744852-939208787.png",alt:""}})]),t._v(" "),e("p",[t._v("进入用户目录下载程序")]),t._v(" "),e("p",[e("img",{attrs:{src:"https://images2015.cnblogs.com/blog/172889/201704/172889-20170418153003446-820207739.png",alt:""}})]),t._v(" "),e("p",[t._v("下载相关组件")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("[root@localhost src]# wget http://nginx.org/download/nginx-1.10.2.tar.gz\n省略安装内容...\n[root@localhost src]# wget http://www.openssl.org/source/openssl-fips-2.0.10.tar.gz\n省略安装内容...\n[root@localhost src]# wget http://zlib.net/zlib-1.2.11.tar.gz\n省略安装内容...\n[root@localhost src]# wget ftp://ftp.csx.cam.ac.uk/pub/software/programming/pcre/pcre-8.40.tar.gz\n省略安装内容...\n")])])]),e("p",[t._v("安装c++编译环境，如已安装可略过")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("[root@localhost src]# yum install gcc-c++\n省略安装内容...\n期间会有确认提示输入y回车\nIs this ok [y/N]:y\n省略安装内容...\n")])])]),e("h3",{attrs:{id:"_2、安装nginx及相关组件"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2、安装nginx及相关组件","aria-hidden":"true"}},[t._v("#")]),t._v(" 2、安装Nginx及相关组件")]),t._v(" "),e("p",[e("strong",[t._v("openssl安装")])]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("openssl相关插件per5-https安装\n wget https://www.cpan.org/src/5.0/perl-5.28.0.tar.gz\n tar -xzf perl-5.28.0.tar.gz\n cd perl-5.28.0\n ./Configure -des -Dprefix=$HOME/localperl &&  make && make install \n\n\n\n[root@localhost src]# tar zxvf openssl-fips-2.0.10.tar.gz\n省略安装内容...\n[root@localhost src]# cd openssl-fips-2.0.10\n[root@localhost openssl-fips-2.0.10]# ./config && make && make install\n省略安装内容...\n")])])]),e("p",[e("strong",[t._v("pcre安装")])]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("[root@localhost src]# tar zxvf pcre-8.40.tar.gz\n省略安装内容...\n[root@localhost src]# cd pcre-8.40\n[root@localhost pcre-8.40]# ./configure && make && make install\n省略安装内容...\n")])])]),e("p",[e("strong",[t._v("zlib安装")])]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("[root@localhost src]# tar zxvf zlib-1.2.11.tar.gz\n省略安装内容...\n[root@localhost src]# cd zlib-1.2.11\n[root@localhost zlib-1.2.11]# ./configure && make && make install\n省略安装内容...\n")])])]),e("p",[e("strong",[t._v("nginx安装")])]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("[root@localhost src]# tar zxvf nginx-1.10.2.tar.gz\n省略安装内容...\n[root@localhost src]# cd nginx-1.10.2\n[root@localhost nginx-1.10.2]# ./configure && make && make install\n省略安装内容...\n")])])]),e("h3",{attrs:{id:"_3、启动nginx"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_3、启动nginx","aria-hidden":"true"}},[t._v("#")]),t._v(" 3、启动Nginx")]),t._v(" "),e("p",[t._v("先找一下nginx安装到什么位置上了")]),t._v(" "),e("p",[e("img",{attrs:{src:"https://images2015.cnblogs.com/blog/172889/201704/172889-20170418154742915-713647057.png",alt:""}}),t._v("\n进入nginx目录并启动\n"),e("img",{attrs:{src:"https://images2015.cnblogs.com/blog/172889/201704/172889-20170418154804759-1842869219.png",alt:""}})]),t._v(" "),e("p",[t._v("报错了，error while loading shared libraries: libpcre.so.1: cannot open shared object file: No such file or directory，按照下面方式解决")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("1.用whereis libpcre.so.1命令找到libpcre.so.1在哪里\n2.用ln -s /usr/local/lib/libpcre.so.1 /lib64命令做个软连接就可以了\n3.用sbin/nginx启动Nginx\n4.用ps -aux | grep nginx查看状态\n[root@localhost nginx]# whereis libpcre.so.1\n[root@localhost nginx]# ln -s /usr/local/lib/libpcre.so.1 /lib64\n[root@localhost nginx]# sbin/nginx\n[root@localhost nginx]# ps -aux | grep nginx \n")])])]),e("p",[e("img",{attrs:{src:"https://images2015.cnblogs.com/blog/172889/201704/172889-20170418162004024-2058687645.png",alt:""}}),t._v("\n1.进入Linux系统的图形界面，打开浏览器输入localhost会看到下图，说明nginx启动成功\n"),e("img",{attrs:{src:"https://images2015.cnblogs.com/blog/172889/201704/172889-20170418162145790-461736932.png",alt:""}}),t._v("\n2.其他机器链接linux系统测试是否链接成功")]),t._v(" "),e("p",[t._v("nginx的基本操作")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("启动\n[root@localhost ~]# /usr/local/nginx/sbin/nginx\n停止/重启\n[root@localhost ~]# /usr/local/nginx/sbin/nginx -s stop(quit、reload)\n命令帮助\n[root@localhost ~]# /usr/local/nginx/sbin/nginx -h\n验证配置文件\n[root@localhost ~]# /usr/local/nginx/sbin/nginx -t\n配置文件\n[root@localhost ~]# vim /usr/local/nginx/conf/nginx.conf\n")])])]),e("h3",{attrs:{id:"_4、简单配置nginx"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_4、简单配置nginx","aria-hidden":"true"}},[t._v("#")]),t._v(" 4、简单配置Nginx")]),t._v(" "),e("p",[t._v("打开nginx配置文件位于nginx目录下的conf文件夹下\n"),e("img",{attrs:{src:"https://images2015.cnblogs.com/blog/172889/201704/172889-20170418164812196-1164065507.png",alt:""}})]),t._v(" "),e("p",[t._v("简单介绍一下vim的语法")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("默认vim打开后是不能录入的，需要按键才能操作，具体如下：\n开启编辑：按“i”或者“Insert”键\n退出编辑：“Esc”键\n退出vim：“:q”\n保存vim：“:w”\n保存退出vim：“:wq”\n不保存退出vim：“:q!”\n")])])]),e("p",[t._v('"#"代表注释，最重要的是server{}块这部分就代表每一个web站点，详细的配置介绍可以查阅我的另一片配置文章，此处我们先暂时设置三个站点')]),t._v(" "),e("p",[e("img",{attrs:{src:"https://images2015.cnblogs.com/blog/172889/201704/172889-20170418173628696-1685332558.png",alt:""}})]),t._v(" "),e("p",[t._v("分别使用不同的端口80、81、82保存退出并且重启nginx")]),t._v(" "),e("p",[e("img",{attrs:{src:"https://images2015.cnblogs.com/blog/172889/201704/172889-20170418174444118-588824024.png",alt:""}})]),t._v(" "),e("h3",{attrs:{id:"_5、开启外网访问"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_5、开启外网访问","aria-hidden":"true"}},[t._v("#")]),t._v(" 5、开启外网访问")]),t._v(" "),e("p",[t._v("在Linux系统中默认有防火墙Iptables管理者所有的端口，只启用默认远程连接22端口其他都关闭，咱们上面设置的80等等也是关闭的，所以我们需要先把应用的端口开启")]),t._v(" "),e("p",[t._v("方法一直接关闭防火墙，这样性能较好，但安全性较差，如果有前置防火墙可以采取这种方式")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("关闭防火墙\n[root@localhost ~]# service iptables stop\n关闭开机自启动防火墙\n[root@localhost ~]# chkconfig iptables off\n[root@localhost ~]# chkconfig --list|grep ipt\n")])])]),e("p",[t._v("下面是防火墙的其他操作命令\n"),e("img",{attrs:{src:"https://images2015.cnblogs.com/blog/172889/201704/172889-20170418175910868-1921833075.png",alt:""}})]),t._v(" "),e("p",[t._v("方法二将开启的端口加入防火墙白名单中，这种方式较安全但性能也相对较差")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("编辑防火墙白名单\n[root@localhost ~]# vim /etc/sysconfig/iptables\n增加下面一行代码\n-A INPUT -p tcp -m state -- state NEW -m tcp --dport 80 -j ACCEPT\n保存退出，重启防火墙\n[root@localhost ~]# service iptables restart\n")])])]),e("p",[e("img",{attrs:{src:"https://images2015.cnblogs.com/blog/172889/201704/172889-20170418180736931-1955851185.png",alt:""}})]),t._v(" "),e("p",[t._v("Linux配置完毕了，使用另一台电脑而非安装nginx的电脑，我是用的windows系统，配置一下host在“C:\\Windows\\System32\\drivers\\etc”下的hosts中配置一下域名重定向")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("10.11.13.22 nginx.test.com nginx.test1.com nginx.test2.com\n")])])]),e("p",[t._v("然后cmd再ping一下这个域名是否正确指向了这个IP上\n"),e("img",{attrs:{src:"https://images2015.cnblogs.com/blog/172889/201704/172889-20170418174908977-27238342.png",alt:""}})]),t._v(" "),e("p",[t._v("正确指向后在telnet一下80端口看一下是否可以与端口通信（如果telnet提示没有此命令是没有安装客户端，在启用或禁用windows功能处安装后再操作即可）")]),t._v(" "),e("p",[e("img",{attrs:{src:"https://images2015.cnblogs.com/blog/172889/201704/172889-20170418175445712-2089843604.png",alt:""}})]),t._v(" "),e("p",[t._v("得到以下界面及代表通信成功")]),t._v(" "),e("p",[e("img",{attrs:{src:"https://images2015.cnblogs.com/blog/172889/201704/172889-20170418175512790-352719306.png",alt:""}})]),t._v(" "),e("p",[t._v("打开这台Windows系统内的浏览器，输入nginx.test.com会得到以下结果，就说明外网访问成功")]),t._v(" "),e("p",[e("img",{attrs:{src:"https://images2015.cnblogs.com/blog/172889/201704/172889-20170418181546415-521855633.png",alt:""}})]),t._v(" "),e("p",[t._v("如果防火墙你依然启用，只是设置了启用端口，那我们访问81那个端口会发现无法访问，因为我并没有加入白名单")]),t._v(" "),e("p",[e("img",{attrs:{src:"https://images2015.cnblogs.com/blog/172889/201704/172889-20170418181649259-174579881.png",alt:""}}),t._v("\n到此Nginx服务器雏形部署完成。")]),t._v(" "),e("h3",{attrs:{id:"_6、nginx负载均衡配置"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_6、nginx负载均衡配置","aria-hidden":"true"}},[t._v("#")]),t._v(" 6、Nginx负载均衡配置")]),t._v(" "),e("p",[t._v("Nginx集反向代理和负载均衡于一身，在配置文件中修改配就可以实现")]),t._v(" "),e("p",[t._v("首先我们打开配置文件")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("[root@localhost nginx]# vim conf/nginx.conf\n")])])]),e("p",[t._v("每一个server就是一个虚拟主机，我们有一个当作web服务器来使用")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("listen 80;代表监听80端口\nserver_name xxx.com;代表外网访问的域名\nlocation / {};代表一个过滤器，/匹配所有请求，我们还可以根据自己的情况定义不同的过滤，比如对静态文件js、css、image制定专属过滤\nroot html;代表站点根目录\nindex index.html;代表默认主页\n")])])]),e("p",[t._v("这样配置完毕我们输入域名就可以访问到该站点了。")]),t._v(" "),e("p",[t._v("负载均衡功能往往在接收到某个请求后分配到后端的多台服务器上，那我们就需要upstream{}块来配合使用")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("upstream xxx{};upstream模块是命名一个后端服务器组，组名必须为后端服务器站点域名，内部可以写多台服务器ip和port，还可以设置跳转规则及权重等等\nip_hash;代表使用ip地址方式分配跳转后端服务器，同一ip请求每次都会访问同一台后端服务器\nserver;代表后端服务器地址\n\nserver{};server模块依然是接收外部请求的部分\nserver_name;代表外网访问域名\nlocation / {};同样代表过滤器，用于制定不同请求的不同操作\nproxy_pass;代表后端服务器组名，此组名必须为后端服务器站点域名\n\nserver_name和upstream{}的组名可以不一致，server_name是外网访问接收请求的域名，upstream{}的组名是跳转后端服务器时站点访问的域名\n")])])]),e("p",[e("img",{attrs:{src:"https://images2015.cnblogs.com/blog/172889/201704/172889-20170419165116649-972950787.png",alt:""}})]),t._v(" "),e("p",[t._v("配置一下Windows的host将我们要访问的域名aaa.test.com指向Linux\n"),e("img",{attrs:{src:"https://images2015.cnblogs.com/blog/172889/201704/172889-20170419170949509-1331178335.png",alt:""}})]),t._v(" "),e("p",[t._v("因为硬件有限，我是将Windows中的IIS作为Nginx的后端服务器，所以配置一下IIS的站点域名\n"),e("img",{attrs:{src:"https://images2015.cnblogs.com/blog/172889/201704/172889-20170419171121993-488143433.png",alt:""}})]),t._v(" "),e("p",[t._v("打开cmd再ping一下aaa.test.com确实指向Linux系统了，再打开浏览器输入aaa.test.com会显示bbb这个站点就代表负载成功了。\n"),e("img",{attrs:{src:"https://images2015.cnblogs.com/blog/172889/201704/172889-20170419171408649-130031505.png",alt:""}})]),t._v(" "),e("p",[t._v("Nginx的负载功能就配置完成了，这只是简单设置了一下，生产环境中还有很多详细的调整，后续再逐渐增加.")]),t._v(" "),e("h2",{attrs:{id:"静态服务器配置"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#静态服务器配置","aria-hidden":"true"}},[t._v("#")]),t._v(" 静态服务器配置")]),t._v(" "),e("p",[t._v("静态服务器概念非常简单：当用户请求静态资源时，把文件内容回复给用户。")]),t._v(" "),e("p",[t._v("但是，要把静态服务做到极致，需要考虑的方面非常多：")]),t._v(" "),e("ul",[e("li",[t._v("正确书写header：设置content-type、过期时间等")]),t._v(" "),e("li",[t._v("效率：减小文件体积，合理设置缓存，使用策略减少服务器内存占用")]),t._v(" "),e("li",[t._v("安全性，防盗链")])]),t._v(" "),e("p",[e("code",[t._v("Nginx")]),t._v("提供了强大的静态服务功能。")]),t._v(" "),e("h3",{attrs:{id:"基本配置"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#基本配置","aria-hidden":"true"}},[t._v("#")]),t._v(" 基本配置")]),t._v(" "),e("p",[e("code",[t._v("root")]),t._v("和"),e("code",[t._v("alias")]),t._v("：设置静态资源根目录\n"),e("code",[t._v("root")]),t._v("的取值最好使用绝对路径。\n"),e("code",[t._v("root")]),t._v(" 指令可以放在 "),e("code",[t._v("http")]),t._v("、"),e("code",[t._v("server")]),t._v(" 或 "),e("code",[t._v("location")]),t._v(" 上下文的任何位置。")]),t._v(" "),e("p",[t._v("例如：")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("server {\n    root /www/data;\n    location / {\n    }\n    location /images/ {\n    }\n    location ~ \\.(mp3|mp4) {\n        root /www/media;\n    }\n}\n")])])]),e("p",[t._v("在此配置中，如果 "),e("code",[t._v("URI")]),t._v(" 以 "),e("code",[t._v("mp3")]),t._v(" 或 "),e("code",[t._v("mp4")]),t._v(" 后缀结尾，"),e("code",[t._v("Nginx")]),t._v(" 会在 "),e("code",[t._v("/www/media/")]),t._v(" 目录查找文件。否则在 "),e("code",[t._v("/www/data")]),t._v(" 目录中查找。如果请求以 "),e("code",[t._v("/")]),t._v(" 结尾，"),e("code",[t._v("Nginx")]),t._v(" 会把这个请求当做一个目录请求，尝试找这个目录中的 index 文件。"),e("code",[t._v("index")]),t._v(" 指令定义了 "),e("code",[t._v("index")]),t._v(" 文件的文件名（默认使用 "),e("code",[t._v("index.html")]),t._v(" 文件）。例如上面的配置，如果请求是 "),e("code",[t._v("/images/some/path/")]),t._v("，"),e("code",[t._v("Nginx")]),t._v(" 会尝试寻找并返回文件 "),e("code",[t._v("/www/data/images/some/path/index.html")]),t._v("，如果文件不存在则返回 404。")]),t._v(" "),e("blockquote",[e("p",[t._v("autoindex：访问目录时列出文件列表")])]),t._v(" "),e("p",[e("code",[t._v("autoindex")]),t._v(" 指令如果设置为 "),e("code",[t._v("on")]),t._v("，则 "),e("code",[t._v("Nginx")]),t._v(" 会返回自动生成的目录列表。最终的效果和"),e("code",[t._v("ftp")]),t._v("服务相似。")]),t._v(" "),e("p",[e("code",[t._v("alias")]),t._v("和"),e("code",[t._v("root")]),t._v("的区别在于：对于"),e("code",[t._v("root")]),t._v("而言，"),e("code",[t._v("location")]),t._v("匹配的全部路径就是"),e("code",[t._v("root")]),t._v("下的文件路径；对于"),e("code",[t._v("alias")]),t._v("而言，"),e("code",[t._v("location")]),t._v("匹配后的路径才是"),e("code",[t._v("root")]),t._v("下的文件路径。")]),t._v(" "),e("blockquote",[e("p",[t._v("index：默认文件\n"),e("code",[t._v("index")]),t._v("表示默认的文件。"),e("code",[t._v("index")]),t._v(" 指令中可以列出多个文件。"),e("code",[t._v("Nginx")]),t._v(" 会按顺序查找文件并返回第一个找到的文件。")])]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("location / {\n    index index.$geo.html index.htm index.html;\n}\n")])])]),e("h3",{attrs:{id:"性能调优"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#性能调优","aria-hidden":"true"}},[t._v("#")]),t._v(" 性能调优")]),t._v(" "),e("blockquote",[e("p",[t._v("gzip：压缩文件")])]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v('location ~ .*\\.(jpg|gif|png)$ {\n    gzip on;\n    gzip_min_length 1k;\n    gzip_buffers 4 16k;  \n    #gzip_http_version 1.0; \n    gzip_comp_level 2;\n    gzip_types text/plain application/x-javascript text/css application/xml text/javascript \n    application/x-httpd-php image/jpeg image/gif image/png;\n    gzip_vary off;\n    gzip_disable "MSIE [1-6]\\.";\n    root /nginxtest/images;\n}\n')])])]),e("p",[t._v("gzip选项")]),t._v(" "),e("ul",[e("li",[t._v("gzip：开启Gzip")]),t._v(" "),e("li",[t._v("gzip_min_length ：不压缩临界值，大于1K的才压缩，一般不用改")]),t._v(" "),e("li",[t._v("buffer：缓存大小")]),t._v(" "),e("li",[t._v("gzip_http_version：用了反向代理的话，末端通信是HTTP/1.0，有需求的应该也不用看我这科普文了；有这句的话注释了就行了，默认是HTTP/1.1")]),t._v(" "),e("li",[t._v("gzip_comp_level :压缩级别，1-10，数字越大压缩的越好，时间也越长，看心情随便改吧")]),t._v(" "),e("li",[t._v("gzip_types :第6行：进行压缩的文件类型，缺啥补啥就行了，JavaScript有两种写法，最好都写上")]),t._v(" "),e("li",[t._v('gzip_vary：跟Squid等缓存服务有关，on的话会在Header里增加"Vary: Accept-Encoding"')]),t._v(" "),e("li",[t._v("gzip_disable：控制在某些情况下禁用gzip，例如：IE6对Gzip不怎么友好，不给它Gzip了")])]),t._v(" "),e("blockquote",[e("p",[t._v("expires：启用缓存")])]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("location / {\n    expires 24h;\n    root   /usr/share/nginx/html;\n    index  index.html index.htm;\n}\n")])])]),e("blockquote",[e("p",[t._v("sendfile：把小文件加载在内存中\n如果静态文件很小，直接放在内存中可以加快传输效率（避免了读硬盘操作）。如果文件太大也放在内存中，会浪费内存资源。")])]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("location /mp3 {\n    sendfile           on;\n    sendfile_max_chunk 1m;\n    ...\n}\n")])])]),e("blockquote",[e("p",[t._v("tcp_nopush\n"),e("code",[t._v("tcp_nopush")]),t._v(" 指令需要和 "),e("code",[t._v("sendfile")]),t._v(" 指令配合使用。\n如果 "),e("code",[t._v("tcp_nopush")]),t._v(" 指令和 "),e("code",[t._v("sendfile")]),t._v(" 指令同时使能，则 "),e("code",[t._v("Nginx")]),t._v(" 在通过"),e("code",[t._v("sendfile")]),t._v(" 获取数据块后会立即在一个数据包中发送 "),e("code",[t._v("HTTP")]),t._v(" 响应头。")])]),t._v(" "),e("blockquote",[e("p",[t._v("tcp_nodelay\n"),e("code",[t._v("tcp_nodelay")]),t._v(" 选项允许覆盖 "),e("code",[t._v("Nagle")]),t._v(" 的算法，最初设计用于解决慢速网络中小数据包的问题。该算法将多个小数据包合并为较大的数据包，并以200毫秒的时延发送数据包。如今，在提供大的静态文件时，无论数据包大小如何，都可以立即发送数据。延迟还会影响在线应用程序（ssh，在线游戏，在线交易）。 "),e("code",[t._v("默认情况下，tcp_nodelay")]),t._v(" 指令被使能，禁用 "),e("code",[t._v("Nagle")]),t._v(" 的算法。 该选项仅用于保持连接:")])]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("location /mp3  {\n    tcp_nodelay       on;\n    keepalive_timeout 65;\n    ...\n}\n")])])]),e("h3",{attrs:{id:"高级调优"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#高级调优","aria-hidden":"true"}},[t._v("#")]),t._v(" 高级调优")]),t._v(" "),e("blockquote",[e("p",[t._v("测量监听队列（Measuring the Listen Queue）\n运行下面的命令可以测量监听队列（"),e("code",[t._v("Linux")]),t._v(" 下的 "),e("code",[t._v("netstat")]),t._v(" 命令不支持 "),e("code",[t._v("-L")]),t._v(" 参数，需要使用命令"),e("code",[t._v("ss -l")]),t._v("）：")])]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("netstat -Lan\n")])])]),e("p",[t._v("输出如下：")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("Current listen queue sizes (qlen/incqlen/maxqlen)\nListen         Local Address         \n0/0/128        *.12345            \n10/0/128        *.80       \n0/0/128        *.8080\n")])])]),e("p",[t._v("上面的输出显示，在 80 端口的监听队列有 10 个未接受的连接，最大连接数限制为 128，这种情况是正常的。")]),t._v(" "),e("p",[t._v("然而，如果输出是下面这样子的：")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("Current listen queue sizes (qlen/incqlen/maxqlen)\nListen         Local Address         \n0/0/128        *.12345            \n192/0/128        *.80       \n0/0/128        *.8080\n")])])]),e("p",[t._v("上面显示有 10 个未接受的连接，超过了最大限制 128。在网站访问量大时这种情况挺常见的。为了达到最佳性能，可以修改操作系统和 Nginx 配置，增加 Nginx 可以等待接受的队列中的最大连接数。")]),t._v(" "),e("blockquote",[e("p",[t._v("调整操作系统（Linux，FreeBSD）")])]),t._v(" "),e("p",[t._v("可以增加 "),e("code",[t._v("net.core.somaxconn")]),t._v(" 参数的值（默认 128）以应对高并发流量：")]),t._v(" "),e("p",[t._v("对于 "),e("code",[t._v("FreeBSD")]),t._v(" 运行命令"),e("code",[t._v("sudo sysctl kern.ipc.somaxconn=4096")]),t._v("\n对于 "),e("code",[t._v("Linux")]),t._v(" 运行命令 "),e("code",[t._v("sudo sysctl -w net.core.somaxconn=4096")]),t._v("\n打开文件 "),e("code",[t._v("/etc/sysctl.conf")]),t._v("，添加这一行："),e("code",[t._v("net.core.somaxconn = 4096")])]),t._v(" "),e("blockquote",[e("p",[t._v("调整 Nginx\n如果设置的 somaxconn 值大于 512，需要更改 Nginx 配置文件中的 backlog 参数匹配这个设置：")])]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("server {\n    listen 80 backlog=4096;\n    # The rest of server configuration\n}\n")])])]),e("h3",{attrs:{id:"安全"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#安全","aria-hidden":"true"}},[t._v("#")]),t._v(" 安全")]),t._v(" "),e("p",[t._v("使用"),e("code",[t._v("add_header")]),t._v("设置跨域访问")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("location / {\n    add_header Access-Control-Allow-Origin www.baidu.com;\n    add_header Access-Control-Allow-Methods GET,POST,PUT,DELETE,OPTIONS;\n    root   /usr/share/nginx/html;\n    index  index.html index.htm;\n}\n")])])]),e("blockquote",[e("p",[t._v("使用referer防盗链")])]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("location ~ .*\\.(jpg|gif|png)$ {\n    valid_referers none blocked 119.2x.1x3.218 支持增则匹配;\n    if ($invalid_referer) {\n            return 403;\n    }\n    root /nginxtest/images;\n}\n")])])]),e("blockquote",[e("p",[t._v("try_files：定制文件不存在时的操作")])]),t._v(" "),e("p",[e("code",[t._v("try_files")]),t._v(" 指令可以检查指定的文件或目录是否存在，从而执行内部重定向或在文件不存在的时候返回指定的 "),e("code",[t._v("HTTP")]),t._v(" 状态码。")]),t._v(" "),e("p",[t._v("例如，通过 "),e("code",[t._v("try_files")]),t._v(" 指令和 "),e("code",[t._v("$uri")]),t._v(" 变量检查和请求中的 "),e("code",[t._v("URI")]),t._v(" 相关的文件是否存在：")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("server {\n    root /www/data;\n\n    location /images/ {\n        try_files $uri /images/default.gif;\n    }\n}\n")])])]),e("p",[t._v("文件以 "),e("code",[t._v("URI")]),t._v(" 的形式指定，并且使用在当前 "),e("code",[t._v("location")]),t._v(" 或 "),e("code",[t._v("server")]),t._v(" 的上下文中设置的 "),e("code",[t._v("root")]),t._v(" 或 "),e("code",[t._v("alias")]),t._v(" 指令进行处理。此时如果源 "),e("code",[t._v("URI")]),t._v(" 指定的文件不存在，"),e("code",[t._v("Nginx")]),t._v(" 会内部重定向到最后一个参数指定的 "),e("code",[t._v("URI")]),t._v("，返回 "),e("code",[t._v("/www/data/images/default.gif")]),t._v("。")]),t._v(" "),e("p",[t._v("最后一个参数也可以是状态码（前面需要加等号）或一个 "),e("code",[t._v("location")]),t._v(" 的名字。下面的例子中，如果 "),e("code",[t._v("try_files")]),t._v(" 指令指定的文件或目录都不存在，则返回 "),e("code",[t._v("404")]),t._v(" 错误：")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("location / {\n    try_files $uri $uri/ $uri.html =404;\n}\n")])])]),e("p",[t._v("下面的例子中，如果原始 "),e("code",[t._v("URI")]),t._v(" 和带有附加斜线的 "),e("code",[t._v("URI")]),t._v(" 指定的文件或目录都不存在，请求就会被重定向到指定名称的 "),e("code",[t._v("location：")])]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("location / {\n    try_files $uri $uri/ @backend;\n}\n\nlocation @backend {\n    proxy_pass http://backend.example.com;\n}\n")])])]),e("h3",{attrs:{id:"参考资料"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#参考资料","aria-hidden":"true"}},[t._v("#")]),t._v(" 参考资料")]),t._v(" "),e("p",[t._v("https://blog.csdn.net/kikajack/article/details/79323643\nhttp://www.nginx.cn/doc/standard/httpcore.html\nhttp://www.nginx.cn/doc/standard/httpgzip.html\nhttp://www.nginx.cn/doc/standard/httpheaders.html")])])},[],!1,null,null,null);a.default=s.exports}}]);