# LINUX创建文件和目录的默认权限

在linux中，一位用户在创建文件和目录时，对其具有的权限都是一样的，如需更改，需要chmod命令做相应的更改。为什么？其实是权限掩码起作用了。

权限掩码的作用就是规范初创文件和目录时候的权限设置，免去了创建后再次修改权限的问题。因此，权限掩码的设置需要合理。

## 1、查看用户的权限掩码

命令：umask

示例
```
dyp930@ubuntu:~/work$ umask    //初创文件的最大权限是666，减去掩码0002，表示初创文件的权限是664。初创目录的最大权限是777，减去掩码，
0002

dyp930@ubuntu:~/work$ touch a.txt
dyp930@ubuntu:~/work$ mkdir a
dyp930@ubuntu:~/work$ ls -lrt
-rw-rw-r-- 1 dyp930 dyp930    0 Jun 28 06:02 a.txt //权限为664
drwxrwxr-x 2 dyp930 dyp930 4096 Jun 28 06:02 a     //权限为775
 
```

## 2、修改用户的权限掩码

命令：umask abc

设置默认掩码为abc后，如下公式即为文件的初创权限。

备注：对于文件，掩码abc的实际值为偶数值，需要向下减1.
① 新创建的文件的权限为：(7-a)(7-b)(7-c) ，如果a/b/c中有一位为0，则相减之后的每位奇数都要减1.
② 新创建的目录的权限为：(7-a)(7-b)(7-c)

示例
```

dyp930@ubuntu:~/work$ umask 005
dyp930@ubuntu:~/work$ umask
0005
dyp930@ubuntu:~/work$ touch b.txt
dyp930@ubuntu:~/work$ mkdir b
dyp930@ubuntu:~/work$ ls -lrt
total 8
-rw-rw-r-- 1 dyp930 dyp930    0 Jun 28 06:02 a.txt
drwxrwxr-x 2 dyp930 dyp930 4096 Jun 28 06:02 a
-rw-rw--w- 1 dyp930 dyp930    0 Jun 28 06:05 b.txt   
drwxrwx-w- 2 dyp930 dyp930 4096 Jun 28 06:05 b
```

