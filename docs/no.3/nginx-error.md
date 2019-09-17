## centos启动Nginx提示nginx: [emerg] still could not bind()

centos7中启动Nginx： /usr/local/nginx/sbin/nginx，提示以下内容

```

[root@xyw-cyck-cms-3 ~]# /usr/local/nginx/sbin/nginx 
nginx: [emerg] bind() to 0.0.0.0:80 failed (98: Address already in use)
nginx: [emerg] bind() to 0.0.0.0:80 failed (98: Address already in use)
nginx: [emerg] bind() to 0.0.0.0:80 failed (98: Address already in use)
nginx: [emerg] bind() to 0.0.0.0:80 failed (98: Address already in use)
nginx: [emerg] bind() to 0.0.0.0:80 failed (98: Address already in use)
nginx: [emerg] still could not bind()
```

**解决办法：**
根据Nginx配置文件查看配置的端口（本文中使用的是80端口），然后根据端口查看端口占用情况

```

[root@xyw-cyck-cms-3 ~]# netstat -ntlp|grep 80  
tcp        0      0 0.0.0.0:80              0.0.0.0:*               LISTEN      7043/nginx: worker

```
2.使用kill命令杀死占用进程，之后重新启动Nginx
```
kill -9 7043
```

## centos7使用密钥连接服务器提示bad permissions不能正常登陆处理

登陆服务器时，说使用密钥文件登陆时提示输入密码后一直登陆不进去。

报错：
```
[root@imzcy ~]# ssh zcy@192.168.5.5 -p 15122 -i zcy.pem
@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
@         WARNING: UNPROTECTED PRIVATE KEY FILE!          @
@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
Permissions 0644 for 'zcy.pem' are too open.
It is recommended that your private key files are NOT accessible by others.
This private key will be ignored.
bad permissions: ignore key: zcy.pem
Enter passphrase for key 'zcy.pem': 
 
[root@imzcy ~]# 
```

看提示是说密钥文件权限0644太开放了，建议密钥文件不能被其他人访问，并且此次使用的密钥文件被忽略了（所以哪怕提示你输入密码，输入正常的密码也会一直让你继续输入密码，直到最大密码输入次数或超时自动退出）！

**解决方法：**

修改zcy.pem密钥文件权限为600即可。

```

[root@imzcy ~]# ll zcy.pem 
-rw-r--r-- 1 root root 1766 09-12 09:53 zcy.pem
[root@imzcy ~]# 
[root@imzcy ~]# chmod 600 zcy.pem 
[root@imzcy ~]# 
```

再尝试使用密钥连接服务器即可正常登入：
```
[root@imzcy ~]# ssh zcy@192.168.5.5 -p 2233 -i zcy.pem
Enter passphrase for key 'zcy.pem': 
Last login: Fri Sep 14 11:01:14 2018 from 192.168.1.210
 
###    欢迎使用Jumpserver开源跳板机系统   ### 
 
        1) 输入 ID 直接登录.
        2) 输入 / + IP, 主机名 or 备注 搜索.
        3) 输入 P/p 显示您有权限的主机.
        4) 输入 G/g 显示您有权限的主机组.
        5) 输入 G/g + 组ID 显示该组下主机.
        6) 输入 E/e 批量执行命令.
        7) 输入 U/u 批量上传文件.
        8) 输入 D/d 批量下载文件.
        9) 输入 H/h 帮助.
        0) 输入 Q/q 退出.
 
Opt or ID>: 
Opt or ID>: q
Connection to 192.168.5.5 closed.
[root@imzcy ~]# 
```

## centos启动Nginx启动报错
- 原因一：可能是防火墙挡了
```
systemctl stop firewalld.service  关闭防火墙
systemctl stop firewalld.service  禁用防火墙
或者设置白名单
```
- 原因二：启动立刻多个nginx
```
kill -9 端口号
```