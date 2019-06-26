> centos启动Nginx提示nginx: [emerg] still could not bind()

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