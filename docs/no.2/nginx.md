## 一、Nginx简介

Nginx是一个web服务器也可以用来做负载均衡及反向代理使用，目前使用最多的就是负载均衡，具体简介我就不介绍了百度一下有很多，下面直接进入安装步骤

## 二、Nginx安装

### 1、下载Nginx及相关组件

Linux系统是Centos 6.5 64位，我直接切换到root用户下安装

<a data-fancybox title="" href="https://images2015.cnblogs.com/blog/172889/201704/172889-20170418152744852-939208787.png">![](https://images2015.cnblogs.com/blog/172889/201704/172889-20170418152744852-939208787.png)</a>

进入用户目录下载程序

<a data-fancybox title="" href="https://images2015.cnblogs.com/blog/172889/201704/172889-20170418153003446-820207739.png">![](https://images2015.cnblogs.com/blog/172889/201704/172889-20170418153003446-820207739.png)</a>

下载相关组件

```
[root@localhost src]# wget http://nginx.org/download/nginx-1.10.2.tar.gz
省略安装内容...
[root@localhost src]# wget http://www.openssl.org/source/openssl-fips-2.0.10.tar.gz
省略安装内容...
[root@localhost src]# wget http://zlib.net/zlib-1.2.11.tar.gz
省略安装内容...
[root@localhost src]# wget ftp://ftp.csx.cam.ac.uk/pub/software/programming/pcre/pcre-8.40.tar.gz
省略安装内容...
```
安装c++编译环境，如已安装可略过
```
[root@localhost src]# yum install gcc-c++
省略安装内容...
期间会有确认提示输入y回车
Is this ok [y/N]:y
省略安装内容...
```

### 2、安装Nginx及相关组件

**openssl安装**
```
openssl相关插件per5-https安装
 wget https://www.cpan.org/src/5.0/perl-5.28.0.tar.gz
 tar -xzf perl-5.28.0.tar.gz
 cd perl-5.28.0
 ./Configure -des -Dprefix=$HOME/localperl &&  make && make install 



[root@localhost src]# tar zxvf openssl-fips-2.0.10.tar.gz
省略安装内容...
[root@localhost src]# cd openssl-fips-2.0.10
[root@localhost openssl-fips-2.0.10]# ./config && make && make install
省略安装内容...
```
**pcre安装**
```
[root@localhost src]# tar zxvf pcre-8.40.tar.gz
省略安装内容...
[root@localhost src]# cd pcre-8.40
[root@localhost pcre-8.40]# ./configure && make && make install
省略安装内容...
```
**zlib安装**
```
[root@localhost src]# tar zxvf zlib-1.2.11.tar.gz
省略安装内容...
[root@localhost src]# cd zlib-1.2.11
[root@localhost zlib-1.2.11]# ./configure && make && make install
省略安装内容...
```
**nginx安装**
```
[root@localhost src]# tar zxvf nginx-1.10.2.tar.gz
省略安装内容...
[root@localhost src]# cd nginx-1.10.2
[root@localhost nginx-1.10.2]# ./configure && make && make install
省略安装内容...
```
### 3、启动Nginx

先找一下nginx安装到什么位置上了

 <a data-fancybox title="" href="https://images2015.cnblogs.com/blog/172889/201704/172889-20170418154742915-713647057.png">![](https://images2015.cnblogs.com/blog/172889/201704/172889-20170418154742915-713647057.png)</a>
进入nginx目录并启动
<a data-fancybox title="" href="https://images2015.cnblogs.com/blog/172889/201704/172889-20170418154804759-1842869219.png">![](https://images2015.cnblogs.com/blog/172889/201704/172889-20170418154804759-1842869219.png)</a>


报错了，error while loading shared libraries: libpcre.so.1: cannot open shared object file: No such file or directory，按照下面方式解决
```
1.用whereis libpcre.so.1命令找到libpcre.so.1在哪里
2.用ln -s /usr/local/lib/libpcre.so.1 /lib64命令做个软连接就可以了
3.用sbin/nginx启动Nginx
4.用ps -aux | grep nginx查看状态
[root@localhost nginx]# whereis libpcre.so.1
[root@localhost nginx]# ln -s /usr/local/lib/libpcre.so.1 /lib64
[root@localhost nginx]# sbin/nginx
[root@localhost nginx]# ps -aux | grep nginx 
```

<a data-fancybox title="" href="https://images2015.cnblogs.com/blog/172889/201704/172889-20170418162004024-2058687645.png">![](https://images2015.cnblogs.com/blog/172889/201704/172889-20170418162004024-2058687645.png)</a>
1.进入Linux系统的图形界面，打开浏览器输入localhost会看到下图，说明nginx启动成功
<a data-fancybox title="" href="https://images2015.cnblogs.com/blog/172889/201704/172889-20170418162145790-461736932.png">![](https://images2015.cnblogs.com/blog/172889/201704/172889-20170418162145790-461736932.png)</a>
2.其他机器链接linux系统测试是否链接成功


nginx的基本操作

```
启动
[root@localhost ~]# /usr/local/nginx/sbin/nginx
停止/重启
[root@localhost ~]# /usr/local/nginx/sbin/nginx -s stop(quit、reload)
命令帮助
[root@localhost ~]# /usr/local/nginx/sbin/nginx -h
验证配置文件
[root@localhost ~]# /usr/local/nginx/sbin/nginx -t
配置文件
[root@localhost ~]# vim /usr/local/nginx/conf/nginx.conf
```

### 4、简单配置Nginx

打开nginx配置文件位于nginx目录下的conf文件夹下
<a data-fancybox title="" href="https://images2015.cnblogs.com/blog/172889/201704/172889-20170418164812196-1164065507.png">![](https://images2015.cnblogs.com/blog/172889/201704/172889-20170418164812196-1164065507.png)</a>


简单介绍一下vim的语法

```
默认vim打开后是不能录入的，需要按键才能操作，具体如下：
开启编辑：按“i”或者“Insert”键
退出编辑：“Esc”键
退出vim：“:q”
保存vim：“:w”
保存退出vim：“:wq”
不保存退出vim：“:q!”
```
"#"代表注释，最重要的是server{}块这部分就代表每一个web站点，详细的配置介绍可以查阅我的另一片配置文章，此处我们先暂时设置三个站点

 <a data-fancybox title="" href="https://images2015.cnblogs.com/blog/172889/201704/172889-20170418173628696-1685332558.png">![](https://images2015.cnblogs.com/blog/172889/201704/172889-20170418173628696-1685332558.png)</a>

分别使用不同的端口80、81、82保存退出并且重启nginx

<a data-fancybox title="" href="https://images2015.cnblogs.com/blog/172889/201704/172889-20170418174444118-588824024.png">![](https://images2015.cnblogs.com/blog/172889/201704/172889-20170418174444118-588824024.png)</a>

### 5、开启外网访问

在Linux系统中默认有防火墙Iptables管理者所有的端口，只启用默认远程连接22端口其他都关闭，咱们上面设置的80等等也是关闭的，所以我们需要先把应用的端口开启

方法一直接关闭防火墙，这样性能较好，但安全性较差，如果有前置防火墙可以采取这种方式
```
关闭防火墙
[root@localhost ~]# service iptables stop
关闭开机自启动防火墙
[root@localhost ~]# chkconfig iptables off
[root@localhost ~]# chkconfig --list|grep ipt
```
下面是防火墙的其他操作命令
<a data-fancybox title="" href="https://images2015.cnblogs.com/blog/172889/201704/172889-20170418175910868-1921833075.png">![](https://images2015.cnblogs.com/blog/172889/201704/172889-20170418175910868-1921833075.png)</a>


方法二将开启的端口加入防火墙白名单中，这种方式较安全但性能也相对较差
```
编辑防火墙白名单
[root@localhost ~]# vim /etc/sysconfig/iptables
增加下面一行代码
-A INPUT -p tcp -m state -- state NEW -m tcp --dport 80 -j ACCEPT
保存退出，重启防火墙
[root@localhost ~]# service iptables restart
```
<a data-fancybox title="" href="https://images2015.cnblogs.com/blog/172889/201704/172889-20170418180736931-1955851185.png">![](https://images2015.cnblogs.com/blog/172889/201704/172889-20170418180736931-1955851185.png)</a>
 

Linux配置完毕了，使用另一台电脑而非安装nginx的电脑，我是用的windows系统，配置一下host在“C:\Windows\System32\drivers\etc”下的hosts中配置一下域名重定向
```
10.11.13.22 nginx.test.com nginx.test1.com nginx.test2.com
```
然后cmd再ping一下这个域名是否正确指向了这个IP上
<a data-fancybox title="" href="https://images2015.cnblogs.com/blog/172889/201704/172889-20170418174908977-27238342.png">![](https://images2015.cnblogs.com/blog/172889/201704/172889-20170418174908977-27238342.png)</a>


正确指向后在telnet一下80端口看一下是否可以与端口通信（如果telnet提示没有此命令是没有安装客户端，在启用或禁用windows功能处安装后再操作即可）

<a data-fancybox title="" href="https://images2015.cnblogs.com/blog/172889/201704/172889-20170418175445712-2089843604.png">![](https://images2015.cnblogs.com/blog/172889/201704/172889-20170418175445712-2089843604.png)</a>

得到以下界面及代表通信成功

<a data-fancybox title="" href="https://images2015.cnblogs.com/blog/172889/201704/172889-20170418175512790-352719306.png">![](https://images2015.cnblogs.com/blog/172889/201704/172889-20170418175512790-352719306.png)</a>

打开这台Windows系统内的浏览器，输入nginx.test.com会得到以下结果，就说明外网访问成功

<a data-fancybox title="" href="https://images2015.cnblogs.com/blog/172889/201704/172889-20170418181546415-521855633.png">![](https://images2015.cnblogs.com/blog/172889/201704/172889-20170418181546415-521855633.png)</a>

如果防火墙你依然启用，只是设置了启用端口，那我们访问81那个端口会发现无法访问，因为我并没有加入白名单

<a data-fancybox title="" href="https://images2015.cnblogs.com/blog/172889/201704/172889-20170418181649259-174579881.png">![](https://images2015.cnblogs.com/blog/172889/201704/172889-20170418181649259-174579881.png)</a>
到此Nginx服务器雏形部署完成。

### 6、Nginx负载均衡配置

 Nginx集反向代理和负载均衡于一身，在配置文件中修改配就可以实现

首先我们打开配置文件
```
[root@localhost nginx]# vim conf/nginx.conf
```
 每一个server就是一个虚拟主机，我们有一个当作web服务器来使用
```
listen 80;代表监听80端口
server_name xxx.com;代表外网访问的域名
location / {};代表一个过滤器，/匹配所有请求，我们还可以根据自己的情况定义不同的过滤，比如对静态文件js、css、image制定专属过滤
root html;代表站点根目录
index index.html;代表默认主页
```

这样配置完毕我们输入域名就可以访问到该站点了。

负载均衡功能往往在接收到某个请求后分配到后端的多台服务器上，那我们就需要upstream{}块来配合使用

```
upstream xxx{};upstream模块是命名一个后端服务器组，组名必须为后端服务器站点域名，内部可以写多台服务器ip和port，还可以设置跳转规则及权重等等
ip_hash;代表使用ip地址方式分配跳转后端服务器，同一ip请求每次都会访问同一台后端服务器
server;代表后端服务器地址

server{};server模块依然是接收外部请求的部分
server_name;代表外网访问域名
location / {};同样代表过滤器，用于制定不同请求的不同操作
proxy_pass;代表后端服务器组名，此组名必须为后端服务器站点域名

server_name和upstream{}的组名可以不一致，server_name是外网访问接收请求的域名，upstream{}的组名是跳转后端服务器时站点访问的域名
```
 <a data-fancybox title="" href="https://images2015.cnblogs.com/blog/172889/201704/172889-20170419165116649-972950787.png">![](https://images2015.cnblogs.com/blog/172889/201704/172889-20170419165116649-972950787.png)</a>

配置一下Windows的host将我们要访问的域名aaa.test.com指向Linux
<a data-fancybox title="" href="https://images2015.cnblogs.com/blog/172889/201704/172889-20170419170949509-1331178335.png">![](https://images2015.cnblogs.com/blog/172889/201704/172889-20170419170949509-1331178335.png)</a>


因为硬件有限，我是将Windows中的IIS作为Nginx的后端服务器，所以配置一下IIS的站点域名
<a data-fancybox title="" href="https://images2015.cnblogs.com/blog/172889/201704/172889-20170419171121993-488143433.png">![](https://images2015.cnblogs.com/blog/172889/201704/172889-20170419171121993-488143433.png)</a>


打开cmd再ping一下aaa.test.com确实指向Linux系统了，再打开浏览器输入aaa.test.com会显示bbb这个站点就代表负载成功了。
<a data-fancybox title="" href="https://images2015.cnblogs.com/blog/172889/201704/172889-20170419171408649-130031505.png">![](https://images2015.cnblogs.com/blog/172889/201704/172889-20170419171408649-130031505.png)</a>


Nginx的负载功能就配置完成了，这只是简单设置了一下，生产环境中还有很多详细的调整，后续再逐渐增加.

## 静态服务器配置

静态服务器概念非常简单：当用户请求静态资源时，把文件内容回复给用户。

但是，要把静态服务做到极致，需要考虑的方面非常多：

- 正确书写header：设置content-type、过期时间等
- 效率：减小文件体积，合理设置缓存，使用策略减少服务器内存占用
- 安全性，防盗链

`Nginx`提供了强大的静态服务功能。

### 基本配置
`root`和`alias`：设置静态资源根目录
`root`的取值最好使用绝对路径。
`root` 指令可以放在 `http`、`server` 或 `location` 上下文的任何位置。

例如：
```
server {
    root /www/data;
    location / {
    }
    location /images/ {
    }
    location ~ \.(mp3|mp4) {
        root /www/media;
    }
}
```
在此配置中，如果 `URI` 以 `mp3` 或 `mp4` 后缀结尾，`Nginx` 会在 `/www/media/` 目录查找文件。否则在 `/www/data` 目录中查找。如果请求以 `/` 结尾，`Nginx` 会把这个请求当做一个目录请求，尝试找这个目录中的 index 文件。`index` 指令定义了 `index` 文件的文件名（默认使用 `index.html` 文件）。例如上面的配置，如果请求是 `/images/some/path/`，`Nginx` 会尝试寻找并返回文件 `/www/data/images/some/path/index.html`，如果文件不存在则返回 404。

> autoindex：访问目录时列出文件列表

`autoindex` 指令如果设置为 `on`，则 `Nginx` 会返回自动生成的目录列表。最终的效果和`ftp`服务相似。

`alias`和`root`的区别在于：对于`root`而言，`location`匹配的全部路径就是`root`下的文件路径；对于`alias`而言，`location`匹配后的路径才是`root`下的文件路径。

> index：默认文件
`index`表示默认的文件。`index` 指令中可以列出多个文件。`Nginx` 会按顺序查找文件并返回第一个找到的文件。
```
location / {
    index index.$geo.html index.htm index.html;
}
```

### 性能调优

> gzip：压缩文件
```
location ~ .*\.(jpg|gif|png)$ {
    gzip on;
    gzip_min_length 1k;
    gzip_buffers 4 16k;  
    #gzip_http_version 1.0; 
    gzip_comp_level 2;
    gzip_types text/plain application/x-javascript text/css application/xml text/javascript 
    application/x-httpd-php image/jpeg image/gif image/png;
    gzip_vary off;
    gzip_disable "MSIE [1-6]\.";
    root /nginxtest/images;
}
```
gzip选项

- gzip：开启Gzip
- gzip_min_length ：不压缩临界值，大于1K的才压缩，一般不用改
- buffer：缓存大小
- gzip_http_version：用了反向代理的话，末端通信是HTTP/1.0，有需求的应该也不用看我这科普文了；有这句的话注释了就行了，默认是HTTP/1.1
- gzip_comp_level :压缩级别，1-10，数字越大压缩的越好，时间也越长，看心情随便改吧
- gzip_types :第6行：进行压缩的文件类型，缺啥补啥就行了，JavaScript有两种写法，最好都写上
- gzip_vary：跟Squid等缓存服务有关，on的话会在Header里增加"Vary: Accept-Encoding"
- gzip_disable：控制在某些情况下禁用gzip，例如：IE6对Gzip不怎么友好，不给它Gzip了
> expires：启用缓存
```
location / {
    expires 24h;
    root   /usr/share/nginx/html;
    index  index.html index.htm;
}
```
> sendfile：把小文件加载在内存中
如果静态文件很小，直接放在内存中可以加快传输效率（避免了读硬盘操作）。如果文件太大也放在内存中，会浪费内存资源。
```
location /mp3 {
    sendfile           on;
    sendfile_max_chunk 1m;
    ...
}
```
> tcp_nopush
`tcp_nopush` 指令需要和 `sendfile` 指令配合使用。
如果 `tcp_nopush` 指令和 `sendfile` 指令同时使能，则 `Nginx` 在通过`sendfile` 获取数据块后会立即在一个数据包中发送 `HTTP` 响应头。

> tcp_nodelay
`tcp_nodelay` 选项允许覆盖 `Nagle` 的算法，最初设计用于解决慢速网络中小数据包的问题。该算法将多个小数据包合并为较大的数据包，并以200毫秒的时延发送数据包。如今，在提供大的静态文件时，无论数据包大小如何，都可以立即发送数据。延迟还会影响在线应用程序（ssh，在线游戏，在线交易）。 `默认情况下，tcp_nodelay` 指令被使能，禁用 `Nagle` 的算法。 该选项仅用于保持连接:
```
location /mp3  {
    tcp_nodelay       on;
    keepalive_timeout 65;
    ...
}
```
### 高级调优

> 测量监听队列（Measuring the Listen Queue）
运行下面的命令可以测量监听队列（`Linux` 下的 `netstat` 命令不支持 `-L` 参数，需要使用命令` ss -l`）：
```
netstat -Lan
```
输出如下：
```
Current listen queue sizes (qlen/incqlen/maxqlen)
Listen         Local Address         
0/0/128        *.12345            
10/0/128        *.80       
0/0/128        *.8080
```
上面的输出显示，在 80 端口的监听队列有 10 个未接受的连接，最大连接数限制为 128，这种情况是正常的。

然而，如果输出是下面这样子的：
```
Current listen queue sizes (qlen/incqlen/maxqlen)
Listen         Local Address         
0/0/128        *.12345            
192/0/128        *.80       
0/0/128        *.8080
```
上面显示有 10 个未接受的连接，超过了最大限制 128。在网站访问量大时这种情况挺常见的。为了达到最佳性能，可以修改操作系统和 Nginx 配置，增加 Nginx 可以等待接受的队列中的最大连接数。

> 调整操作系统（Linux，FreeBSD）

可以增加 `net.core.somaxconn` 参数的值（默认 128）以应对高并发流量：

对于 `FreeBSD` 运行命令` sudo sysctl kern.ipc.somaxconn=4096`
对于 `Linux` 运行命令 `sudo sysctl -w net.core.somaxconn=4096`
打开文件 `/etc/sysctl.conf`，添加这一行：`net.core.somaxconn = 4096`

> 调整 Nginx
如果设置的 somaxconn 值大于 512，需要更改 Nginx 配置文件中的 backlog 参数匹配这个设置：
```
server {
    listen 80 backlog=4096;
    # The rest of server configuration
}
```
### 安全
使用`add_header`设置跨域访问
```
location / {
    add_header Access-Control-Allow-Origin www.baidu.com;
    add_header Access-Control-Allow-Methods GET,POST,PUT,DELETE,OPTIONS;
    root   /usr/share/nginx/html;
    index  index.html index.htm;
}
```
> 使用referer防盗链
```
location ~ .*\.(jpg|gif|png)$ {
    valid_referers none blocked 119.2x.1x3.218 支持增则匹配;
    if ($invalid_referer) {
            return 403;
    }
    root /nginxtest/images;
}
```
> try_files：定制文件不存在时的操作

`try_files` 指令可以检查指定的文件或目录是否存在，从而执行内部重定向或在文件不存在的时候返回指定的 `HTTP` 状态码。

例如，通过 `try_files` 指令和 `$uri` 变量检查和请求中的 `URI` 相关的文件是否存在：
```
server {
    root /www/data;

    location /images/ {
        try_files $uri /images/default.gif;
    }
}
```
文件以 `URI` 的形式指定，并且使用在当前 `location` 或 `server` 的上下文中设置的 `root` 或 `alias` 指令进行处理。此时如果源 `URI` 指定的文件不存在，`Nginx` 会内部重定向到最后一个参数指定的 `URI`，返回 `/www/data/images/default.gif`。

最后一个参数也可以是状态码（前面需要加等号）或一个 `location` 的名字。下面的例子中，如果 `try_files` 指令指定的文件或目录都不存在，则返回 `404` 错误：
```
location / {
    try_files $uri $uri/ $uri.html =404;
}
```
下面的例子中，如果原始 `URI` 和带有附加斜线的 `URI` 指定的文件或目录都不存在，请求就会被重定向到指定名称的 `location：`
```
location / {
    try_files $uri $uri/ @backend;
}

location @backend {
    proxy_pass http://backend.example.com;
}
```
### 参考资料
https://blog.csdn.net/kikajack/article/details/79323643
http://www.nginx.cn/doc/standard/httpcore.html
http://www.nginx.cn/doc/standard/httpgzip.html
http://www.nginx.cn/doc/standard/httpheaders.html