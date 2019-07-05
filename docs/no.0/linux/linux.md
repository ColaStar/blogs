# Linux笔记
## Linux操作系统的介绍
> Linux的历史

诞生于1991年发明人就叫Linux，
Linux存在不同的Linux版本（ubuntu（桌面市场），RedHat（服务器市场）、CentOs（服务器市场上）、Debain、Fedora（桌面市场）、SuSE、OpenUSE、TurboLinux、kali（安全方面的）），但他们都市用的是Linux内核，Linux可安装在各种计算机硬件设备中，比如手机、电脑、路由器、视频游戏控制台、台式计算机大型机和超级电脑。Linux的终端比window的终端强大很多。文本界面命令行vim与图形界面
>选择Linux的发行版本
服务器市场：RedHat、CentOs（Minimal ISO）
桌面市场：Ubuntu、Fadora
RedHat其实是商业型的操作系统。
CentOs是RedHat包装过的。
Ubuntu在中国是非常流行的。

LTS叫长期支持的。


虚拟机指通过软件模拟的具有完整硬件系统内功能的运行在一个完全隔离环境中的完整计算机系统。流行的虚拟及软件有：CMware、VirtualBox、VirtualPC，他们都能在windows系统上虚拟出多个计算机。


在windows系统中安装Linux系统  
1.下载最新版的虚拟机与Linux版本    
2.后打开虚拟机装Linux版本。
3.设置用户信息与语言

## Linux的目录结构

- / 根目录
- <span style=color:red>/bin - 重要的二进制 (binary) 应用程序</span>。bin就是binary，二进制。/bin目录放置可执行文件，root和一般账号都可以使用，如cat, chmod, mv, mkdir等。其实系统有很多放置执行文件的目录，但/bin 目录比较特殊，因为/bin 放置的是在单用户模式下还能够被操作的命令
- /boot - 启动 (boot) 配置文件，这个目录主要存放开机会使用的文件，如Linux内核和系统启动文件
- /dev - 设备 (device) 文件，存放所有设备文件，包括硬盘、分区、键盘、鼠标、USB、tty等。注：在Linux系统上，任何设备与接口设备都是以文件的形式存在于这个目录当中的
- <span style=color:red>/etc - 配置文件、启动脚本等 (etc)</span>，例如/etc/passwd存放用户账户信息，/etc/hostname文件存放主机名
- <span style=color:red>/home - 本地用户主 (home) 目录</span>
- /lib - 系统库 (libraries) 文件，存放开机时会用到的函数库，以及/bin和/sbin目录下的命令调用的函数库
- /lost+found - 在根 (/) 目录下提供一个遗失+查找(lost+found) 系统
- /media - 挂载可移动介质 (media)，诸如 CD、数码相机等，它下面存放可删除的设备，包括软盘，光盘，DVD等设备文件
- /mnt - 挂载 (mounted) 文件系统
- /opt - 提供一个供可选的 (optional) 应用程序安装目录
- <span style="color:red">/proc - 特殊的动态目录，这个目录本身是一个虚拟文件系统。它放置的数据都是在内存当中，例如系统内核，进程等</span>
- /root - root (root) 用户主文件夹，读作“slash-root”
- /sbin - 重要的系统二进制 (system binaries) 文件，这些命令只有root用户才能用设置系统，其他用户最多只能用来“查询”而已
- /sys - 系统 (system) 文件，这个目录跟/proc 非常类似，也是一个虚拟的文件系统，主要也是记录与内核相关的信息。这个目录同样不占硬盘容量
- /tmp - 临时(temporary)文件，就是用来存放临时文件的地方，所有用户都可以访问。该目录不要放重要数据
- /usr - 包含绝大部分所有用户(users)都能访问的应用程序和文件
- /var - 经常变化的(variable)文件，诸如日志或数据库等
- <span color="red">/run - 要特别注意的是：它使用tmpfs文件系统，这是一种存储在内存中的临时文件系统，当机器关闭的时候，文件系统自然就被清空了</span>

## Linux命令

### 1. 常用命令
- 查看帮助文档
   ```
    command --help
    man command    [manual]
   ```
- ls（选项）（参数） 查看指定目录下的内容

    **选项**

    ```
    $  -a：显示所有档案及目录（ls内定将档案名或目录名称为“.”的视为影藏，不会列出）；
    $  -l：以长格式显示目录下的内容列表。输出的信息从左到右依次包括文件名，文件类型、权限模式、硬连接数、所有者、组、文件大小和文件的最后修改时间等
    $  -t：用文件和目录的更改时间排序；
    ```
    **参数**
    ```
    $ 指定要显示列表的目录，也可以是具体的文件
    $ 文件或目录支持正则的写法  *?[]
    ```

- which ( 命令 )

    ```
    $ 可执行程序的绝对路径
    ```

- cd (目录)
    ```
    $ 用于切换当前工作目录至指定目录
    $ 可为绝对路径或相对路径
    $ 目录名称省略，则变换至使用者的 home 目录 ，"~"也标识home目录
    $ "-" 快速回到上一次所在目录
    $ "/" 表示根目录
    $ "." 则是表示目前所在的目录
    $ ".." 则表示目前目录位置的上一层目录
    ```

- pwd

    ```
    $ 执行pwd指令可立刻得知您目前所在的工作目录的绝对路径名称
    ```
— clear
    ```
    $ 清空屏幕
    ```

### 2.文件管理常用命令
- ls
- touch (文件名)
    ```
    $ 修改文件或者目录的时间属性，包括存取时间和更改时间。若文件不存在，系统会建立一个新的文件
    ```
- echo (输出内容)
    ```
    $ 在命令行输出内容
    $ 用 ">" 符号可以重定向
    $ 用 ">>"符合可以追加内容
    ```
- cat (选项) (参数)
    **选项**
    ```
    $ -n 或 --number：由 1 开始对所有输出的行数编号。

    $ -b 或 --number-nonblank：和 -n 相似，只不过对于空白行不编号。
    ```
    **参数**
    ```
    $ 要输出的文件
    ```

- more (选项) (参数)
    **选项**
    ```
    $ -num 一次显示的行数
    $ +num 从第 num 行开始显示
    $ +/pattern 在每个文档显示前搜寻该字串（pattern），然后从该字串之后开始显示
    ```
    **参数**
    ```
    $ 要显示的文件
    ```
    **常用的操作命令**
    ```
    $ Enter 向下n行，需要定义。默认为1行
    $ Ctrl+F 向下滚动一屏
    $ 空格键 向下滚动一屏
    $ Ctrl+B 返回上一屏
    $ = 输出当前行的行号
    $ ：f 输出文件名和当前行的行号
    $ V 调用vi编辑器
    $ q 退出more
    ```
- gedit 文件名   编辑指定的文件
- vi  文件名     编辑指定的文件
- mkdir (选项) (参数)
    **选项**
    ```
    $ -p 可以创建递归目录
    ```
    **参数**
    ```
    $ 指定要创建的目录
    ```
- rmdir (选项)  (参数)
    **选项**
    ```
    $ 删除空的目录
    $ -p 是当子目录被删除后使它也成为空目录的话，则顺便一并删除
     如：rmdir -p aaa/bbb
    $ 在工作目录下的 aaa 目录中，删除名为 bbb 的子目录。若 bbb 删除后，aaa 目录成为空目录，则 BBB 亦予删除,否则只删除bbb，aaa则不予删除
    ```
    **参数**
    ```
    $ 要删除的目录
    ```

- rm (选项) (参数)
    **选项**
    ```
    $ -i 删除前逐一询问确认。
    $ -f 即使原档案属性设为唯读，亦直接删除，无需逐一确认。
    $ -r 将目录及以下之档案亦逐一删除。
    ```
    **参数**
    ```
    $ 要删除的文件或是目录
    ```

- cp (选项) source dest
    **选项**
    ```
    $ -p：除复制文件的内容外，还把修改时间和访问权限也复制到新文件中。
    $ -r：若给出的源文件是一个目录文件，此时将复制该目录下所有的子目录和文件
    ```
    **source**
    ```
    $ 要复制的文件名
    ```
    **dest**
    ```
    $ 目标地址
    ```
- mv (选项) source dest
    **选项**
    ```
    $ -i: 若指定目录已有同名文件，则先询问是否覆盖旧文件;
    $ -f: 在mv操作要覆盖某已有的目标文件时不给任何指示;
    ```
    **source**
    ```
    $ 要移动或修改的文件名
    ```
    **dest**
    ```
     要移动或修改的目标地址
    ```

- ln (选项) source dest
    `ln命令是一个非常重要命令，它的功能是为某一个文件在另外一个位置建立一个同步的链接`
    **硬链接**
    ```
    1.硬链接，以文件副本的形式存在。但不占用实际空间。
    2.不允许给目录创建硬链接
    3. ln  source dest
    4. 用 rm 命令 删除硬链接
    ```
    **软连接**
    ```
    1.软链接，以路径的形式存在。类似于Windows操作系统中的快捷方式
    2.软链接可以 跨文件系统 ，硬链接不可以
    3. ln -s source dest
    4. 用 rm 命令 删除硬链接
    ```
- grep (选项) (参数) 从文件里面找内容
    **选项**
    ```
    $ 要查找的范式
    ```
    **参数**
    ```
    $ 要查询的文件
    ```
- find path -option  找文件
    ```
    $ find . -name "*.c" 前目录及其子目录下所有延伸档名是 c 的文件列出来
    $ find . -type f     将目前目录其其下子目录中所有一般文件列出
    $ find . -ctime -20  将目前目录及其子目录下所有最近 20 天内更新过的文件列出
    ```

### 3.文件解压缩
- tar (选项) dest (mode) source
    **选项**
    ```
    $ -c 创建打包文件。
    $ -v 显示打包过程
    $ -f 指定打包后的文件名
    $ -x 解包
    $ -z 压缩格式 gzip
    $ -j 压缩格式  bz2
    ```
    **mode**
    ```
    $ -C 解压到指定目录
    ```
    **dest**
    ```
    $ 打包后的文件名  xxx.tar
    $ 打包并压缩成gzip格式     xxx.tar.gz
    $ 打包并压缩成bz2格式     xxx.tar.bz2
    ```
    **source**
    ```
    $ 要打包的文件
    ```

- zip 压缩
    ```
    $ zip dest source
    ```
- unzip (-d) (path) 解压
    ```
    $ unzip dest
    ```
### 4.磁盘管理
- cd  切换目录
- df (选项) (参数)   查看磁盘使用情况
    **选项**
    ```
    $ -h 可读的格式显示
    $ -a, --all 包含所有的具有 0 Blocks 的文件系统
    ```
    **参数**
    ```
    $ df -h /run
    ```
- du (选项) (参数) 查看当前目录的存储状态
    **选项**
    ```
    $ -h 可读的格式显示
    ```
    **参数**
    ```
    $ du -h /run
    ```
### 5.文件传输
- scp (可选参数) file_source file_target
    **可选参数**
    ```
    $ -r 递归拷贝目录
    $ -v：详细方式显示输出。scp和ssh(1)会显示出整个过程的调试信息。这些信息用于调试连接，验证和配置问题
    $ -P port：注意是大写的P, port是指定数据传输用到的端口号
    ```
    **file_source**
    ```
    $ 要拷贝的源文件
    ```
    **file_target**
    ```
    $ 目标地址
    ```
    **案例**
    ```
    $ 本地文件上传服务器 scp -r local_folder remote_username@remote_ip:remote_folder
    $ 从服务器下载本地文件 scp -r remote_username@remote_ip:remote_folder local_folder

    对拷文件夹 (包括文件夹本身)

    scp -r   /home/wwwroot/www/charts/util root@192.168.1.65:/home/wwwroot/limesurvey_back/scp

    对拷文件夹下所有文件 (不包括文件夹本身)

    scp   /home/wwwroot/www/charts/util/* root@192.168.1.65:/home/wwwroot/limesurvey_back/scp

    对拷文件并重命名

    scp   /home/wwwroot/www/charts/util/a.txt root@192.168.1.65:/home/wwwroot/limesurvey_back/scp/b.text

    /home/wwwroot/www/charts/util/           本地绝对路径

    a.txt                                                     要拷贝

    root                                                      通过root用户登录到远程服务器

    192.168.1.65                                       远程服务器的ip地址

    /home/wwwroot/limesurvey_back/scp  复制到远程服务器上的路径      （注意ip地址后有：）

    注:  通常还在后面输入  用户名和密码

    将远程服务器上的文件复制到本机

    #scp remote@www.abc.com:/usr/local/sin.sh /home/administrator

    remote                       通过remote用户登录到远程服务器（也可以使用其他拥有同等权限的用户）

    www.abc.com              远程服务器的域名（当然也可以使用该服务器ip地址）

    /usr/local/sin.sh           欲复制到本机的位于远程服务器上的文件

    /home/administrator  将远程文件复制到本地的绝对路径

    注意两点：

    1.如果远程服务器防火墙有特殊限制，scp便要走特殊端口，具体用什么端口视情况而定，命令格式如下：

    #scp -p 4588 remote@www.abc.com:/usr/local/sin.sh /home/administrator

    2.使用scp要注意所使用的用户是否具有可读取远程服务器相应文件的权限。
    ```
- windows和linux传输文件
    1. 下载`PSCP.exe`,配置Windows的环境变量Path，或者直接通过命令行访问到pscp.exe
    2. 把本地文件file传输到Linxu服务器的目录中
    ```
    $ pscp  -r 本地目录 用户名@LinuxIP:目录
    ```
    3. 从Linux向Windows复制文件或目录
    ```
    $ pscp  -r 用户名@LinuxIP:目录 本地目录
    ```
### 服务管理命令 systemctl
systemctl 命令有两大类功能：

- 控制 systemd 系统
- 管理系统上运行的服务

> 检查 systemd 的版本
$ systemctl --version


> 查看 systemd 和 systemctl 程序相关的目录

$ whereis systemd
$ whereis systemctl


> 确认 1 号进程
作为 init 系统，systemd 进程作为系统中的 1 号进程应该是毋庸置疑的，让我们搜索与 systemd 相关的进程：

![](https://files.jb51.net/file_images/article/201803/2018031611110733.jpg)

结果让人有点不敢相信自己的眼睛，我们搜到了好几个与 systemd 相关的进程，但是却没有 1 号进程。让我们看看 1 号进程是谁：

![](https://files.jb51.net/file_images/article/201803/2018031611110734.jpg)
/sbin/init 是什么？
![](https://files.jb51.net/file_images/article/201803/2018031611110735.jpg)


好吧，/sbin/init 只是到 /lib/systemd/systemd 的链接文件，系统的 1 号进程的确是 systemd，只不过在 ubuntu 系统中被起了个别名叫 /sbin/init。

> 管理单个 unit
systemctl 提供了一组子命令来管理单个的 unit，其命令格式为：
systemctl [command] [unit]
command 主要有：
start：立刻启动后面接的 unit。
stop：立刻关闭后面接的 unit。
restart：立刻关闭后启动后面接的 unit，亦即执行 stop 再 start 的意思。
reload：不关闭 unit 的情况下，重新载入配置文件，让设置生效。
enable：设置下次开机时，后面接的 unit 会被启动。
disable：设置下次开机时，后面接的 unit 不会被启动。
status：目前后面接的这个 unit 的状态，会列出有没有正在执行、开机时是否启动等信息。
is-active：目前有没有正在运行中。
is-enable：开机时有没有默认要启用这个 unit。
kill ：不要被 kill 这个名字吓着了，它其实是向运行 unit 的进程发送信号。
show：列出 unit 的配置。
mask：注销 unit，注销后你就无法启动这个 unit 了。
unmask：取消对 unit 的注销。

我们先通过 prometheus.service 来观察服务类型 unit 的基本信息：
![](https://files.jb51.net/file_images/article/201803/2018031611110736.jpg)


输出内容的第一行是对 unit 的基本描述。
第二行中的 Loaded 描述操作系统启动时会不会启动这个服务，enabled 表示开机时启动，disabled 表示开机时不启动。而启动该服务的配置文件路径为：/lib/systemd/system/prometheus.service。
第三行 中的 Active 描述服务当前的状态，active (running) 表示服务正在运行中。如果是 inactive (dead) 则表示服务当前没有运行。后面则是服务的启动时间。
第四行的 Docs 提供了在线文档的地址。
下面的 Main PID 表示进程的 ID，接下来是任务的数量，占用的内存和 CPU 资源。
再下面的 Cgroup 描述的是 cgrpup 相关的信息，笔者会在后续的文章中详细的介绍。
最后是输出的日志信息。

关于 unit 的启动状态，除了 enable 和 disable 之外还有：
static：这个 unit 不可以自己启动，不过可能会被其它的 enabled 的服务来唤醒。
mask：这个 unit 无论如何都无法被启动！因为已经被强制注销。可通过 systemctl unmask 改回原来的状态。

关于 unit 的运行状态 Active，除了 active 和 inactive 之外还有：
active (exited)：仅执行一次就正常结束的服务，目前并没有任何程序在系统中执行。举例来说，开机或者是挂载时才会进行一次的 quotaon 功能，就是这种模式！ Quotaon 不需要一直执行，只在执行一次之后，就交给文件系统去自行处理。通常用 bash shell 写的小型服务，大多是属于这种类型。
active (waiting)：正在执行当中，不过还再等待其他的事件才能继续处理。举例来说，打印的相关服务就是这种状态。

e> nable 和 disable 操作
比如我们为 prometheus 服务创建了配置文件 /lib/systemd/system/prometheus.service，然后执行 enable 命令：

```
$ sudo systemctl enable prometheus.service

```
![](https://files.jb51.net/file_images/article/201803/2018031611110737.jpg)
所谓的 enable 就是在 multi-user.target.wants 下面创建了一个链接文件：

![](https://files.jb51.net/file_images/article/201803/2018031611110838.jpg)

至于为什么会链接到 multi-user.target.wants 目录下，则是由 prometheus.server 文件中的配置信息决定的。

查看 unit 的配置
使用 show 子命令可以查看 unit 的详细配置情况：

```
$ sudo systemctl show prometheus.service
```
![](https://files.jb51.net/file_images/article/201803/2018031611110839.jpg)

这里的输出非常多，主要是很多的默认设置也都显示出来了。

> 注销与反注销 unit
如果我们想暂时的禁用某个 unit，比如 prometheus.service，可以注销这个 unit，注销之后就无法再启动这个服务了：

```
$ sudo systemctl mask prometheus.service
```
![](https://files.jb51.net/file_images/article/201803/2018031611110840.jpg)

从上图中的输出我们可以看到，所谓的注销就是把 prometheus.service 文件链接到 /dev/null 这个空设备中去了。所以就无法再启动该服务了。下面我们尝试执行一次反注销：

```
$ sudo systemctl unmask prometheus.service
```
![](https://files.jb51.net/file_images/article/201803/2018031611110841.jpg)
unmask 操作就是删除掉 mask 操作中创建的链接。

> 查看系统上的 unit
systemctl 提供了子命令可以查看系统上的 unit，命令格式为：
systemctl [command] [--type=TYPE] [--all]
command 有：
list-units：列出当前已经启动的 unit，如果添加 -all 选项会同时列出没有启动的 unit。
list-unit-files：根据 /lib/systemd/system/ 目录内的文件列出所有的 unit。
--type=TYPE：可以过滤某个类型的 unit。
不带任何参数执行 systemctl 命令会列出所有已启动的 unit：

![](https://files.jb51.net/file_images/article/201803/2018031611110842.jpg)

系统默认启动的服务是非常多的，上图只截取了前面几行。下面是对输出的介绍：
```
UNIT：项目的名称，包括各个 unit 的类别(看扩展名)。
LOAD：开机时 unit 的配置是否被加载。
ACTIVE：目前的状态，须与后续的 SUB 搭配！就是我们用 systemctl status 观察时，active的内容。
DESCRIPTION：描述信息。
注意，systemctl 不加参数，其实等同于 systemctl list-units！
```
下面我们查看系统上一共安装了多少 unit：

```
$ sudo systemctl list-unit-files
```
![](https://files.jb51.net/file_images/article/201803/2018031611110843.jpg)
结果也非常的多，我们仍然只截取一部分结果。这里的 STATE 就是我们前面介绍的 服务的启动状态，有 enable 和 disable、static 和 mask。

> 只查看某种类型的 unit
比如我们只想看服务类型的 unit：
```
$ systemctl list-units --type=service --all
```
这次只有以 .service 结尾的 unit 才会出现。
如果要看 mount 类型的 unit 指定 --type=mount 就可以了：

![](https://files.jb51.net/file_images/article/201803/2018031611110844.jpg)

> 查看加载失败的 unit
如果发现某个 unit 不工作，可以查看是否有 unit 加载失败：

```
$ systemctl --failed
```
![](https://files.jb51.net/file_images/article/201803/2018031611110845.jpg)

管理不同的操作环境(target unit)
通过指定 --type=target 就可以用 systemctl list-units 命令查看系统中默认有多少种 target：
![](https://files.jb51.net/file_images/article/201803/2018031611110946.jpg)


笔者的 ubuntu 16.04 中居然有 27 个 target！我们在此仅介绍几个常用的 target。
graphical.target：就是文字界面再加上图形界面，这个 target 已经包含了下面的 multi-user.target。
multi-user.target：纯文本模式！
rescue.target：在无法使用 root 登陆的情况下，systemd 在开机时会多加一个额外的临时系统，与你原本的系统无关。这时你可以取得 root 的权限来维护你的系统。
emergency.target：紧急处理系统的错误，在无法使用 rescue.target 时，可以尝试使用这种模式！
shutdown.target：就是执行关机。
getty.target：可以设置 tty 的配置。
正常的模式是 multi-user.target 和 graphical.target 两个，救援方面的模式主要是 rescue.target 以及更严重的 emergency.target。如果要修改可提供登陆的 tty 数量，则修改 getty.target。

下面是操作 target unit 命令的格式：
systemctl [command] [unit.target] 
command 有：
get-default：取得目前的 target。
set-default：设置后面接的 target 成为默认的操作模式。
isolate：切换到后面接的模式。

> 查看和设置默认的 target

```
$ sudo systemctl get-default
```
![](https://files.jb51.net/file_images/article/201803/2018031611110947.jpg)
笔者系统的默认 target 为 graphical.target，所以启动时默认启动图形界面。下面我们把它设置为 multi-user.target：

```
$ sudo systemctl set-default multi-user.target
```

实际的执行过程是删除之前的链接文件，然后创建新的到 /lib/systemd/system/multi-user.target 的链接文件。这样下次开机时默认会进入纯文本模式。
![](https://files.jb51.net/file_images/article/201803/2018031611110948.jpg)
> 切换 target
我们还可以在不重新启动的情况下切换不同的 target，比如从图形界面切换到纯文本的模式：
```
$ sudo systemctl isolate multi-user.target
```
在一般情况下，使用上述 isolate 的方式即可完成不同 target 的切换。不过为了方便起见，systemd 也提供了
几个简单的指令用来切换操作模式，大致如下所示：

```
$ sudo systemctl poweroff  # 系统关机
$ sudo systemctl reboot    # 重新开机
$ sudo systemctl suspend   # 进入暂停模式
$ sudo systemctl hibernate  # 进入休眠模式
$ sudo systemctl rescue    # 强制进入救援模式
$ sudo systemctl emergency # 强制进入紧急救援模式
```
这里简单介绍一下暂停模式与休眠模式的区别
suspend：暂停模式会将系统的状态保存到内存中，然后关闭掉大部分的系统硬件，当然，并没有实际关机。当用户按下唤醒机器的按钮，系统数据会从内存中回复，然后重新驱动被大部分关闭的硬件，所以唤醒系统的速度比较快。
hibernate：休眠模式则是将系统状态保存到硬盘当中，保存完毕后，将计算机关机。当用户尝试唤醒系统时，系统会开始正常运行，然后将保存在硬盘中的系统状态恢复回来。因为数据需要从硬盘读取，因此唤醒的速度比较慢(如果你使用的是 SSD 磁盘，唤醒的速度也是非常快的)。

检查 unit 之间的依赖性
很多服务之间是有依赖关系的，systemd 的一大亮点就是可以管理 unit 之间的依赖关系。我们可以通过下面的命令来查看 unit 间的依赖关系：
systemctl list-dependencies [unit] [--reverse] 选项 --reverse 会反向追踪是谁在使用这个 unit。
下面让我们看看当前运行的 target 的依赖关系：

![](https://files.jb51.net/file_images/article/201803/2018031611110949.jpg)

我们当前运行在 graphical.target 下，它由一个长长的依赖列表(上图并未展示所有的项目)，其中最重要的依赖项目为 multi-user.target。下面我们使用 --reverse 选项查看 multi-user.target unit 被谁使用：
```
$ systemctl list-dependencies multi-user.target --reverse
```
![](https://files.jb51.net/file_images/article/201803/2018031611110950.jpg)

从上面两张图上我们可以确定下面的关系：graphical.target 依赖 multi-user.target。
我们这里只是通过 target unit 介绍了如何查看 unit 之间的依赖关系，实际使用中更多的是检查服务 unit 之间的依赖关系。
> 相关的目录和文件
在不同的发行版中与 systemd 相关的文件路径可能会不太一样，强调一下，本文介绍的是 ubuntu 16.04 。
/lib/systemd/system/ 大多数 unit 的配置文件都放在这个目录下。 
/run/systemd/system/ 系统运行过程中产生的脚本，比如用户相关的脚本和会话相关的脚本。
/etc/systemd/system/ 这个目录中主要的文件都是指向 /lib/systemd/system/ 目录中的链接文件。
注意，在我们自己创建 unit 配置文件时，既可以把配置文件放在 /lib/systemd/system/ 目录下，也可以放在 /etc/systemd/system/ 目录下。

/etc/default/ 这个目录中放置很多服务默认的配置文件。
/var/lib/ 一些会产生数据的服务都会将他的数据写入到 /var/lib/ 目录中，比如 docker 相关的数据文件就放在这个目录下。
/run/ 这个目录放置了好多服务运行时的临时数据，比如 lock file 以及 PID file 等等。

我们知道 systemd 里管理了很多会用到本机 socket 的服务，所以系统中肯定会产生很多的 socket 文件。那么，这些 socke 文件都存放在哪里呢？我们可以使用 systemctl 进行查看：

```
$ systemctl list-sockets
```
![](https://files.jb51.net/file_images/article/201803/2018031611110951.jpg)
其实，绝大多数的 socket 文件都存放在 /run 目录及其子目录中。

> systemctl daemon-reload 子命令
daemon-reload 是一个很容易被误用的子命令，主要是因为它名字中包含的 daemon 一词很容易让它和 reload 子命令混淆。
我们在前文简略的介绍了 reload 子命令，它的作用是重新加载某个服务程序的配置文件。这里的程序指的是服务类型 unit 的配置中指定的程序，也就是我们常说的 daemon(提供某种服务的应用程序)。比如服务类型的 unit prometheus.service，提供服务的 daemon 程序在我的机器上是 /usr/local/share/prometheus/prometheus，所以 reload 子命令重新加载的是 prometheus 的配置文件。

如果把 daemon-reload 子命令中的 daemon 理解为 systemd 程序，就可以把这个命令解释为重新加载 systemd 程序的配置文件。而所有的 unit 配置文件都是作为 systemd 程序的配置文件存在的。这样得出的结论就是：

新添加 unit 配置文件时需要执行 daemon-reload 子命令
有 unit 的配置文件发生变化时也需要执行 daemon-reload 子命令
daemon-reload 命令会做很多的事情，其中之一是重新生成依赖树(也就是 unit 之间的依赖关系)，所以当你修改了 unit 配置文件中的依赖关系后如果不执行 daemon-reload 命令是不会生效的。




### 6.网络通讯
- ifconfig 查看或设置网卡
    ```
    启动关闭指定网卡
    $ ifconfig eth0 down
    $ ifconfig eth0 up
    重启网卡服务
    $ service network restart
    ```
    ```
    配置IP地址
    $ ifconfig eth0 192.168.1.56 netmask 255.255.255.0 broadcast 192.168.1.255
    ```
- netstat   利用netstat指令可让你得知整个Linux系统的网络情况
    ```
    显示UDP端口号的使用情况
    $ netstat -apu

    $ netstat -ltunp
    ```

    关闭httpd服务： service httpd stop
- ping  用于检测主机

- ssh
```
1.登录                   
       ssh -p22 omd@192.168.25.137               
   2.直接执行命令  -->最好全路径                   
       ssh root@192.168.25.137 ls -ltr /backup/data                       
           ==>ssh root@192.168.25.137 /bin/ls -ltr /backup/data               
   3.查看已知主机                    
        cat /root/.ssh/known_hosts
   4.ssh远程执行sudo命令
       ssh -t omd@192.168.25.137 sudo rsync hosts /etc/
 
   5.scp               
             1.功能   -->远程文件的安全(加密)拷贝                   
                 scp -P22 -r -p /home/omd/h.txt omd@192.168.25.137:/home/omd/               
             2.scp知识小结                   
                 scp是加密远程拷贝，cp为本地拷贝                   
                 可以推送过去，也可以拉过来                   
                 每次都是全量拷贝(效率不高，适合第一次)，增量拷贝用rsync
 
   6.ssh自带的sftp功能               
             1.Window和Linux的传输工具                   
                  wincp   filezip                   
               sftp  -->基于ssh的安全加密传输                   
               samba   
             2.sftp客户端连接                   
                sftp -oPort=22 root@192.168.25.137                   
                put /etc/hosts /tmp                   
                get /etc/hosts /home/omd   
            3.sftp小结：                   
                1.linux下使用命令： sftp -oPort=22 root@x.x.x.x                   
                2.put加客户端本地路径上传                  
                3.get下载服务器端内容到本地                   
                4.远程连接默认连接用户的家目录
```
- 关于后台ssh服务的相关
```
# 查询openssl软件
    rpm -qa openssh openssl
# 查询sshd进程
    ps -ef | grep ssh
        --> /usr/sbin/sshd
# 查看ssh端口
    netstat -lntup | grep ssh  
    ss | grep ssh                (效果同上，同下，好用)
    netstat -a | grep ssh(记住这个)
    netstat -lnt | grep 22    ==>  查看22端口有没有开/ssh服务有没有开启
    技巧： netstat -lnt | grep ssh | wc -l -->只要大于2个就是ssh服务就是好的
# 查看ssh的秘钥目录
    ll /root/.ssh/known_hosts  # 当前用户家目录的.ssh目录下
# ssh的配置文件
    cat /etc/ssh/sshd_config   
# ssh服务的关闭
    service sshd stop
# ssh服务的开启：
    service sshd start
# ssh服务的重启
    service sshd reload    [停止进程后重启] ==> 推荐
    service sshd restart   [干掉进程后重启] ==> 不推荐
# ssh远程登录
    ssh 192.168.1.100      # 默认利用当前宿主用户的用户名登录
    ssh omd@192.168.1.100  # 利用远程机的用户登录
    ssh omd@192.168.1.100  -o stricthostkeychecking=no # 首次登陆免输yes登录
    ssh omd@192.168.1.100 "ls /home/omd"  # 当前服务器A远程登录服务器B后执行某个命令
    ssh omd@192.168.1.100 -t "sh /home/omd/ftl.sh"  # 当前服务器A远程登录服务器B后执行某个脚本
```

### 7.权限管理
- sudo -s
- whoami 查看当前用户
- who 查看所有登陆用户
- echo $USER 查看当前用户
- useradd (选项) (参数)
    **选项**
    ```
    $ -d 指定用户登入时的启始目录
    $ -m 自动建立用户的登入目录
    $ -g 指定用户所属的群组
    $ -G 追加用户所属的群组
    ```
    **参数**
    ```
    $ 用户名
    $ user add -d aaa -m aaa -g aaa username
    ```
- usermod  修改用户
- passwd 修改密码
- su    切换账户
```
切换超级管理员时需要需要输入密码
普通账户这不需要
```
- userdel (参数) (选项)
    **参数**
    ```
    $ -f 强制删除

    ```
    **选项**
    ```
    $ 要删除的用户名
    $ userdel -f username
    ```
- groupadd (组名) 添加一个用户组
- groupamod (选项) (参数) 修改用户组的信息
    **选项**
    ```
    $ -g<群组识别码>：设置欲使用的群组识别码；
    $ -n<新群组名称>：设置欲使用的群组名称。
    ```
    **参数**
    ```
    组名：指定要修改的工作的组名。
    ```

    ```
    让改用户组拥有sudo的功能
    $ groupmod -a -G sudo groupname
    $ groupmod -a -G adm  groupname
    ```
- gpasswd (参数) (用户) (组) 将用户从用户组中添加或删除
  **参数**
  ```
  $ -a : 添加用户到组
  $ -d : 从组删除用户
  $ gpasswd -a userA groupA
  ```
- groupadel 删除用户组
- groups 查看当前用户所属的用户组
- chgrp (选项) (参数) 用来改变文件或目录所属的用户组
  **选项**
  ```
  $ -R或——recursive：递归处理，将指令目录下的所有文件及子目录一并处理；
  $ chgrp -R groupname /usr/meng
  ```
  **参数**
  ```
  组：指定新工作名称；
  文件：指定要改变所属组的文件列表。多个文件或者目录之间使用空格隔开。
  ```
- chmod (选项) (参数)
    **选项**
    ```
    $ u 表示该文件的拥有者，g 表示与该文件的拥有者属于同一个群体(group)者，o 表示其他以外的人，a 表示这三者皆是
    $ r 表示可读取 4，w 表示可写入 2，x 表示可执行 1
    $ -R : 对目前目录下的所有文件与子目录进行相同的权限变更(即以递回的方式逐个变更)
    ```
    **参数**
    ```
    rwx r读4 w写2 x执行1
    chmod u=rwx g=rwx o=rwx
    $ chmod u=rwx,g=rw,o=r file
    ```
- chattr

    ```
    chattr可以防止关键文件被修改
    在linux下，有些配置文件是不允许任何人包括root修改的，为了防止被误删除或修改，
    可以设定该文件的"不可修改位(immutable)"。
    
    例如：
    chattr +i /etc/fstab
    如果需要修改文件则：
    chattr -i /etc/fstab
    以后再修改文件。

   ```

### 8.软件安装和管理
- APT (Advanced Package Tool,高级软件包工具) 是一个强大的包管理系统，而那些图形化程序如 添加/删除 应用程序 和 Synaptic 都是建立在它的基础之上的。APT 自动处理依赖关系并在系统软件包执行其他操作以便安装所要的软件包
- 添加包地址:
  - sudo add-apt-repository ppa:webupd8team/java
  - 如果没有 add-apt-repository 这个命令，运行 sudo apt-get install software-properties-common python-software-properties
  - ppa 全称为Personal Package Archives(个人软件包档案),是UbuntuLaunchpad网站提供的一项服务
- 安装软件包：
  - sudo apt-get install packagename
- 删除软件包：
  - sudo apt-get remove packagename
- 删除软件包包括配置文件
  - apt-get --purge remove mysql-server mysql-client
- 删除该软件的依赖包
  - apt-get autoremove mysql-server mysql-client
- 清理无用的包
  - sudo apt-get clean && sudo apt-get autoclean
- 获取新的软件包列表：
  - sudo apt-get update
- 升级有可用更新的系统：
  - sudo apt-get upgrade
- 下载该包的源代码
  - apt-get source package

- 列出更多命令和选项：
  - apt-get help

### 9. 其他常用系统命令
- 关机
  ```
  $ halt 立刻关机
  $ poweroff 立刻关机
  $ shutdown -h now 立刻关机(root用户使用)
  $ shutdown -h 10 10分钟后自动关机
  ```
- 重启
  ```
  $ reboot
  $ shutdown -r now
  $ shutdown -r now 10
  $ shutdown -r 20:35
  $ shutdown -c 取消重启
  ```
- 进程
  ```
  ps -aux  显示所有包含使用者的进程
  top 动态显示所有进程
  kill pid  杀死进程
  kill -9 pid  强制杀死进程
  ```



### 10.vi\vim编辑器
```
vi <filename>     # 无则创建，有则编辑
vi -o file1 file2 # 以分屏的方式打开两个文件
Esc               # 退出到命令模式
i                 # 进入插入模式
:                 # 进入命令模式
ZZ || :wq         # 保存修改并退出
:w                # 只保存文件
:q!               # 放弃所有文件的修改并退出 强制退出
:e!               # 放弃更改，但不退出
```

### 11.安装 pycharm
    ```
    1. 安装java运行环境
    sudo add-apt-repository ppa:webupd8team/java
    sudo apt-get update
    sudo apt-get install oracle-java8-installer
    2. 运行命令
    java -version
    javac -version
    如果以上两个命令找不到的话，执行第二步，否则跳过第三步
    3. 添加全局变量
    echo JAVA_HOME="/usr/lib/jvm/java-8-oracle" >> /etc/environment
    source /etc/environment
    4. 安装pycharm
    到pycharm官网下载在linux的安装包
    解压

    并且运行 bin/pycharm.sh
    $ sudo sh pycharm/bin/pychar.sh

    5. 破解
    到http://idea.lanyus.com/网站获取注册码
    6. 创建快捷方式
    - Ubuntu的快捷方式都放在/usr/share/applications，首先在该目录下创建一个Pycharm.desktop
    - 在 该文件写入以下配置：
    [Desktop Entry]
    Type=Application
    Name=Pycharm
    GenericName=Pycharm3
    Comment=Pycharm3:The Python IDE
    Exec="/XXX/pycharm/bin/pycharm.sh" %f
    Icon=/XXX/pycharm/bin/pycharm.png
    Terminal=pycharm
    Categories=Pycharm;
    - 锁定到启动器
    ```
### 12.ubuntu修改时区和时间的方法
    ```
    参考： https://blog.csdn.net/YEYUANGEN/article/details/52103445
    ```


## Winow常用的命令

dir         列文件名
```
显示目录文件和子目录列表
　　可以使用通配符（? 和 *），？表通配一个字符，*表通配任意字符
　　*.后缀
　　指定要查看后缀的文件。 上面其实也可以为“ . 后缀”,例如dir *.exe 等于dir .exe
　　/p
　　每次显示一个列表屏幕。要查看下一屏，请按键盘上的任意键。
　　/w
　　以宽格式显示列表，在每一行上最多显示 5 个文件名或目录名。
　　/s
　　列出指定目录及所有子目录中出现的每个指定的文件名。比win环境下的查找快多了
　　dir *.* -> a.txt 把当前目录文件列表写入a.txt
　　dir *.* /s -> a.txt 把当前目录文件列表写入a.txt，包括子目录下文件。
```
deltree     删除目录树   
cls         清屏   
cd          改变当前目录。/去根目录  
copy        拷贝文件         例：copy 要复制的文件 复制以后的文件与目录  
rename     更改文件名    例：rename 要改的文件 更改后的文件名  
diskcopy    复制磁盘   
del         删除文件 （不会出现在回收站中）  
format      格式化磁盘。
```
　/q 执行快速格式化。删除以前已格式化卷的文件表和根目录，但不在扇区之间扫描损坏区域。使用 /q 命令行选项应该仅格式化以前已格式化的完好的卷
```  
Ipconfig
```
显示所有当前的 TCP/IP 网络配置值、刷新动态主机配置协议 (DHCP) 和域名系统 (DNS) 设置。使用不带参数的 ipconfig 可以显示所有适配器的 IP 地址、子网掩码、默认网关。
　　/all 显示所有适配器的完整 TCP/IP 配置信息。
　　ipconfig 等价于 winipcfg，后者在ME、98 和 95 上可用。尽管 Windows XP 没有提供象 winipcfg 命令一样的图形化界面，但可以使用“网络连接”查看和更新 IP 地址。要做到这一点，请打开 网络连接，右键单击某一网络连接，单击“状态”，然后单击“支持”选项卡。
　　该命令最适用于配置为自动获取 IP 地址的计算机。它使用户可以确定哪些 TCP/IP 配置值是由 DHCP、自动专用 IP 地址 (APIPA) 和其他配置配置的。
```
edit        文本编辑   
mem         查看内存状况   
md          建立子目录   
move        移动文件、改目录名。  
more        分屏显示   
type        显示文件内容   
rd          删除目录  
sys         制作DOS系统盘。  
ren         改变文件名   
xcopy       拷贝目录与文件   
chkdsk      检查磁盘   
attrib      设置文件属性。  
Exit        退出当前命令解释程序并返回到系统。
```
　显示、设置或删除指派给文件或目录的只读、存档、系统以及隐藏属性。如果在不含参数的情况下使用，则 attrib 会显示当前目录中所有文件的属性。
　　+r 设置只读属性。
　　-r 清除只读属性。
　　+a 设置存档文件属性。
　　-a 清除存档文件属性。
　　+s 设置系统属性。
　　-s 清除系统属性。
　　+h 设置隐藏属性。
　　-h 清除隐藏属性
```
```
fdisk       硬盘分区
date        显示及修改日期 
label       设置卷标号
defrag      磁盘碎片整理。
msd         系统检测 
path        设置搜寻目录 
share       文件共享
memmaker    内存优化管理。
help        帮助
restore     恢复备份文件 
set         设置环境变量
time        显示及修改时间。
tree        列目录树
debug       随机调试程序 
doskey      重新调用DOS命令
prempt      设置提示符
undelete    恢复被删的文件 
scandisk    检测、修理磁盘。

```
## Cygwin
在window用Linux命令


<!-- ## vim命令简介 -->


注意：Linux 只有一个盘符


### web服务器
负载主机器进行分发，找到离自己最近的小机器，进行localhost（127.0.0.1）
输入链接后->通过DNS服务查找到ip地址进行连接。

window：IIS   /   Apache
1、XAMPP：基于php的开发环境 （推荐）
    注意：安装的时候以管理员的身份运行，否则会报错
    因为需要往电脑里面安服务，需要各种权限
    
2、IIS：windows运行平台的服务器
    控制面板==>程序和功能==>打开或关闭windows功能==>internet信息服务（服务器		相关扩展，FTP:上传文件到远程）




































