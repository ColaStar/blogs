---
title: dockerfile文件的创建和build(整理)
date: 2022-03-16
tags:
   - docker
---

[[toc]]

## Docker常用命令

### run

```
docker run [OPTIONS] IMAGE [COMMAND] [ARG...]

```

![](http://blog.colastar.club/static/images/docker_run_1.png)

- -e设置环境变量；-e username=zhj

- --name为容器指定一个名称；--name=zhj

- -p指定端口映射，格式为：主机(宿主)端口:容器端口 -p 80:8080

- -t为容器重新分配一个伪输入终端，通常与 -i 同时使用；

- -i以交互模式运行容器，通常与 -t 同时使用；

- -d后台运行容器，并返回容器ID；

- -v宿主机目录:容器目录。将宿主机目录挂载到容器内。

![](http://blog.colastar.club/static/images/docker_run_2.png)


### cp

```
docker cp
// 复制容器内的文件到宿主机
```
### start
```
docker start
// 启动一个或多个已经被停止的容器
```

### stop
```
docker stop

// 停止一个运行中的容器
```

### restart
```
docker restart

// 重启容器
```

### rm
```
docker rm

// 删除容器
``
### pause
```
docker pause

//暂停容器中所有的进程;
```

docker unpause

恢复容器中所有的进程;

docker exec ：

在运行的容器中执行命令

docker exec -it mynginx /bin/sh /root/runoob.sh
docker logs

获取容器的日志;

docker ps

列出UP的容器；docker ps -a列出所有容器。包括Exited等状态的容器；

docker top

查看容器中运行的进程信息，支持 ps 命令参数;

docker inspect

获取容器/镜像的元数据;

![](http://blog.colastar.club/static/images/docker_inspect.png)
docker login

登陆到一个Docker镜像仓库，如果未指定镜像仓库地址，默认为官方仓库 Docker Hub;

docker logout

登出一个Docker镜像仓库，如果未指定镜像仓库地址，默认为官方仓库 Docker Hub;

docker tag

标记本地镜像，将其归入某一仓库;

docker push

将本地的镜像上传到镜像仓库,要先登陆到镜像仓库;

docker pull

从镜像仓库中拉取或者更新指定镜像;

docker search

从Docker Hub查找镜像;

docker images

列出本地镜像;

docker rmi

删除本地一个或多少镜像;

docker build

命令用于使用 Dockerfile 创建镜像。

docker build -t runoob/ubuntu:v1 .
会默认使用当前目录的Dockerfile进行编译镜像，编译后的镜像名为runoob/ubuntu:v1

docker history

查看指定镜像的创建历史

docker history runoob/ubuntu:v3
3e47db9feec6128009f7c00a84f9c086.png
docker save

将指定镜像保存成 tar 归档文件。

docker save -o my_ubuntu_v3.tar runoob/ubuntu:v3
docker load

导入使用 docker save命令导出的镜像。

docker load -i my_ubuntu_v3.tar
-i参数指定输入的文件。

docker info

显示 Docker 系统信息，包括镜像和容器数。

docker version

显示 Docker 版本信息。

![](http://blog.colastar.club/static/images/docker_version.png)
Docker的存储驱动

Docker支持AUFS、Btrfs、Device mapper、OverlayFS、ZFS五种存储驱动；

写时复制（CoW）

所有驱动都用到的技术——写时复制（CoW）。CoW就是copy-on-write，表示只在需要写时才去复制，这个是针对已有文件的修改场景。比如基于一个image启动多个Container，如果为每个Container都去分配一个image一样的文件系统，那么将会占用大量的磁盘空间。而CoW技术可以让所有的容器共享image的文件系统，所有数据都从image中读取，只有当要对文件进行写操作时，才从image里把要写的文件复制到自己的文件系统进行修改。写操作会在每个容器的文件系统里生成一个复本，每个容器修改的都是自己的复本，相互隔离，相互不影响。使用CoW可以有效的提高磁盘的利用率。

用时分配（allocate-on-demand）

而写时分配是用在原本没有这个文件的场景，只有在要新写入一个文件时才分配空间，这样可以提高存储资源的利用率。比如启动一个容器，并不会为这个容器预分配一些磁盘空间，而是当有新文件写入时，才按需分配新空间。

Overlay VS Device mapper

devicemapper将所有的镜像和容器存储在自己的虚拟块设备上，所有的操作都是直接对块进行操作，而不是文件。当要写入一个新文件时，在容器的镜像内为其分配新的块并写入数据，这个叫用时分配。当要修改已有文件时，再使用CoW为容器快照分配块空间，将要修改的数据复制到在容器快照中新的块里再进行修改。

overlay是基于文件级的存储。只有两层：一个upper文件系统和一个lower文件系统，分别代表Docker的镜像层和容器层。当需要修改一个文件时，使用CoW将文件从只读的lower复制到可写的upper进行修改，结果也保存在upper层。

Overlay是文件级存储，Device mapper是块级存储，当文件特别大而修改的内容很小，Overlay不管修改的内容大小都会复制整个文件，对大文件进行修改显示要比小文件要消耗更多的时间，而块级无论是大文件还是小文件都只复制需要修改的块，并不是整个文件，在这种场景下，显然device mapper要快一些。因为块级的是直接访问逻辑盘，适合IO密集的场景。而对于程序内部复杂，大并发但少IO的场景，Overlay的性能相对要强一些。

Overlay VS Overlay2

overlay驱动只工作在一个lower OverlayFS层之上，因此需要硬链接来实现多层镜像，但overlay2驱动原生地支持多层lowerOverlayFS镜像（最多128层）。因此overlay2驱动在合层相关的命令（如build和commit）中提供了更好的性能，与overlay驱动对比，消耗了更少的inode。

![](http://blog.colastar.club/static/images/docker_Overlay_vs_Overlay2.png)
Docker的网络模式

可以看：[docker的五种网络模式总结]

https://blog.csdn.net/u010900754/article/details/78526443

安装 Docker 时，它会自动创建 3 个网络。可以使用 docker network ls命令列出这些网络。

这 3 个网络包含在 Docker 实现中。运行一个容器时，可以使用 the --net标志指定您希望在哪个网络上运行该容器。您仍然可以使用这 3 个网络。

bridge 网络表示所有 Docker 安装中都存在的 docker0 网络。除非使用docker run --net=选项另行指定，否则 Docker 守护进程默认情况下会将容器连接到此网络。在主机上使用 ifconfig命令，可以看到此网桥是主机的网络堆栈的一部分。
none 网络在一个特定于容器的网络堆栈上添加了一个容器。该容器缺少网络接口。
host 网络在主机网络堆栈上添加一个容器。容器中的网络配置与主机相同。可以通过主机IP访问，端口也会使用主机端口。所以主机端口不能被占用，否则容器启动会有问题。
Dockerfile知识点

ENV

设置环境变量指令，用法

ENV WORKPATH /tmp
也可以这样:

ENV abc=bye def=$abc
第一种用法用于设置单个变量(第一个空格前为key，之后都是value,包括后面的空格)，第二种用于同时设置多个变量(空格为分隔符，value中包含空格时可以用双引号把value括起来，或者在空格前加反斜线)，当需要同时设置多个环境变量时推荐使用第二种格式。这些环境变量可以通过docker run命令的--env参数来进行修改。

ENV用法如下：

ENV myName John Doe
ENV myDog Rex The Dog
ENV myCat fluffy
FROM

设置基础镜像，一个有效的Dockerfile必须有一个FROM指令指定一个基础镜像，这个镜像可以是任何你可以从共用仓库获取到的镜像。执行命令格式

FROM <image>
或者

FROM <image>:<tag>
或者

FROM <image>@<digest>
MAINTAINER

设置创建镜像的作者信息。

MAINTAINER zhanghaojie@qq.com
RUN

这个指令有两种格式.

第一种形式：

RUN chown user2:user2 /home/webapi (以shell形式执行命令，等同于/bin/sh -c);
第二种形式：

RUN ["executable","param1", "param2"]
(等同于exec命令形式)，注意此处必须是双引号(")，因为这种格式被解析为JSON数组。

![](http://blog.colastar.club/static/images/RUN_docker.png)
ARG

ARG <name>[=<default value>]
ARG指令设置一些创建镜像时的参数，这些参数可以在执行docker build命令时通过--build-arg = 设置，如果指定的创建参数在Dockerfile中没有指定，创建时会输出错误信息: One or more build-args were not consumed, failing build.

Dockerfile 作者可以为ARG设置一个默认参数值，当创建镜像时如果没有传入参数就会使用默认值：

FROM busybox
我们可以使用ARG或者ENV指令来指定RUN指令使用的变量。我们可以使用ENV定义与ARG定义名称相同的变量来覆盖ARG定义的变量值。如下示例，我们执行

docker build --build-arg CONT_IMG_VER=v2.0.1 Dockerfile
后将获取到的CONTIMGVER变量值为v1.0.0:

FROM ubuntu
WORKDIR

WORKDIR /path/to/workdir
WORKDIR指令用来设置Dockerfile中任何使用目录的命令的当前工作目录，此目录如果不存在就会被自动创建，即使这个目录不被使用

VOLUME

VOLUME ["/data"]      (exec格式指令)
VOLUME指令创建一个可以从本地主机或其他容器挂载的挂载点。经常用到的是

docker run -ti -v /data:/data nginx:1.12 bash
时指定本地路径和容器内路径的映射。

COPY

COPY指令能够将构建命令所在的主机本地的文件或目录，复制到镜像文件系统。

exec格式用法（推荐）：

COPY ["<src>",... "<dest>"]
特别适合路径中带有空格的情况。

shell格式用法：

COPY <src>... <dest>
ADD

ADD指令不仅能够将构建命令所在的主机本地的文件或目录，而且能够将远程URL所对应的文件或目录，作为资源复制到镜像文件系统。

所以，可以认为ADD是增强版的COPY，支持将远程URL的资源加入到镜像的文件系统。

exec格式用法（推荐）：

ADD ["<src>",... "<dest>"]
特别适合路径中带有空格的情况。

shell格式用法：

ADD <src>... <dest>
说明，对于从远程URL获取资源的情况，由于ADD指令不支持认证，如果从远程获取资源需要认证，则只能使用RUN wget或RUN curl替代。

另外，如果源路径的资源发生变化，则该ADD指令将使Docker Cache失效，Dockerfile中后续的所有指令都不能使用缓存。因此尽量将ADD指令放在Dockerfile的后面。

参考：Dockerfile中的COPY和ADD指令详解与比较

https://blog.csdn.net/taiyangdao/article/details/73222601

EXPOSE指令

EXPOSE <端口> [<端口>...]
指令用于标明，这个镜像中的应用将会侦听某个端口，并且希望能将这个端口映射到主机的网络界面上。但是，为了安全，docker run命令如果没有带上响应的端口映射参数，docker并不会将端口映射到宿主机。

CMD 与 ENTRYPOINT

二者的区别看：[docker CMD ENTRYPOINT 区别 终极解读]

https://blog.csdn.net/u010900754/article/details/78526443

从根本上说, ENTRYPOINT和CMD都是让用户指定一个可执行程序, 这个可执行程序在container启动后自动启动. 实际上, 如果你想让自己制作的镜像自动运行程序(不需要在docker run后面添加命令行指定运行的命令), 你必须在Dockerfile里面，使用ENTRYPOINT或者CMD命令。在命令行启动docker镜像时, 执行其他命令行参数，覆盖默认的CMD。和CMD类似, 默认的ENTRYPOINT也在docker run时, 也可以被覆盖. 在运行时, 用--entrypoint覆盖默认的ENTRYPOINT。

dockerfile中的CMD命令被覆盖：

![](http://blog.colastar.club/static/images/dockerfile_CMD.png)
*CMD：*提供了容器默认的执行命令。Dockerfile 只允许使用一次 CMD 指令。使用多个 CMD 会抵消之前所有的指令，只有最后一个指令生效。CMD 有三种形式：

CMD ["executable","param1","param2"] (exec form, thisis the preferred form)
*ENTRYPOINT：*配置给容器一个可执行的命令，这意味着在每次使用镜像创建容器时一个特定的应用程序可以被设置为默认程序。同时也意味着该镜像每次被调用时仅能运行指定的应用。类似于CMD，Docker只允许一个ENTRYPOINT，多个ENTRYPOINT会抵消之前所有的指令，只执行最后的ENTRYPOINT指令。语法如下：

ENTRYPOINT ["executable", "param1","param2"]

