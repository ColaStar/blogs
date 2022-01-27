# Mac 下安装MYSQL

```
系统：mac os 10.12.6 
```
## mysql下载

- 1.首先[下载mysql](https://downloads.mysql.com/archives/community/)，下载版本如下所示：

![](http://blog.colastar.club/static/images/mysql_install.png)

- 2.打开下载好的dmg，之后会弹出如下所示，然后双击pkg文件
install1.png
![](http://blog.colastar.club/static/images/mysql_install1.png)

- 3.之后一路`continue`、`install`，最后显示如下图1所示,保存好弹出框中提示的密码，然后点击ok，最终出现如下图2，即成功，然后关闭即可。
![](http://blog.colastar.club/static/images/mysql_continue1.png)
![](http://blog.colastar.club/static/images/mysql_continue2.png)

- 4.之后打开mysql，有两种方式，一种是从系统设置，一种是命令行。
> 系统设置(显示runing即为启动成功)：

![](http://blog.colastar.club/static/images/mysql_start.png)
![](http://blog.colastar.club/static/images/mysql_start1.png)
![](http://blog.colastar.club/static/images/mysql_start2.png)

> 命令行启动
```
sudo /usr/local/mysql/support-files/mysql.server start      //启动   
sudo /usr/local/mysql/support-files/mysql.server stop      //停止   
sudo /usr/local/mysql/support-files/mysql.server restart   //重启  
```

注意：如果出现

```
 ERROR! MySQL server PID file could not be found!，或者ERROR! The server quit without updating PID file (/usr/local/mysql/data/maxdeMacBook-Pro.local.pid). 
```
 
 可能是因为没有`/usr/local/mysql/data/`文件夹读写权限，作者就遇到该问题，执行`sudo chown -R mysql:mysql /usr/local/mysql/data/*`即可。

- 5.配置环境变量

编辑配置文件

```
//打开配置文件
vim ~/.bash_profile

// 然后将 /usr/local/mysql 配置到path
MYSQL=/usr/local/mysql
PATH=$MYSQL/bin:$PATH

执行 mysql --version 出现
mysql  Ver 14.14 Distrib 5.7.20, for macos10.12 (x86_64) using  EditLine wrapper  即为成功

```
- 6.登陆数据库，并修改初试密码

```
//执行以下命令，会让你输入密码，这时候就将安装时候给你的密码输入会车即可登陆。
mysql -u root -p
```

- 7.修改数据库密码

登陆之后如下图所示：

![](http://blog.colastar.club/static/images/mysql_pwd_edit.png)

// 之后执行如下语句，xxx替换为你新的密码，然后回车，就会设置成功,如下图，成功之后，执行 quit，然后重新用新密码登陆，再次登陆界面与第一次登陆成功一样即修改密码成功。
```
SET PASSWORD FOR 'root'@'localhost' = PASSWORD('xxx')
```
![](http://blog.colastar.club/static/images/mysql_setting.png)

**注意的点：**

一、安装的时候最后生成的密码一定要保存好。

二、启动时候，报错，要记得执行
```
sudo chown -R mysql:mysql /usr/local/mysql/data/* 或者sudo chown -R mysql /usr/local/mysql/data
```

三、配置环境变量的时候，不要去修改别的地方，否则可能会导致别的应用程序启动失败。
