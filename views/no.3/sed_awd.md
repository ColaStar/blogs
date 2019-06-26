# Linux 中 sed和awk用法
## Sed

sed是一个很好的文件处理工具，流编辑器（strem editor），本身是一个管道命令，主要是以行为单位进行处理，可以将数据行进行替换、删除、新增、选取等特定工作，

sed  编辑器是一行一行的处理文件内容的。正在处理的内容存放在模式空间（缓冲区）内，处理完成后按照选项的规定进行输出或文件的修改。

sed主要用来自动编辑一个或多个文件；简化文件的反复操作；非交互式编译文件

下面先了解一下sed的用法

`sed命令行格式`为：

```
sed [-nefri] ‘command’ 输入文本        
 ```

**常用选项：**
        -n∶使用安静(silent)模式。在一般 sed 的用法中，所有来自 STDIN的资料一般都会被列出到萤幕上。但如果加上 -n 参数后，则只有经过sed 特殊处理的那一行(或者动作)才会被列出来。
        -e∶直接在指令列模式上进行 sed 的动作编辑；
        -f∶直接将 sed 的动作写在一个档案内， -f filename 则可以执行 filename 内的sed 动作；
        -r∶sed 的动作支援的是延伸型正规表示法的语法。(预设是基础正规表示法语法)
        -i∶直接修改读取的档案内容，而不是由萤幕输出。       

**常用命令：**
        a   ∶新增， a 的后面可以接字串，而这些字串会在新的一行出现(目前的下一行)～
        c   ∶取代， c 的后面可以接字串，这些字串可以取代 n1,n2 之间的行！
        d   ∶删除，因为是删除啊，所以 d 后面通常不接任何咚咚；
        i   ∶插入， i 的后面可以接字串，而这些字串会在新的一行出现(目前的上一行)；
        p  ∶列印，亦即将某个选择的资料印出。通常 p 会与参数 sed -n 一起运作～
        s  ∶取代，可以直接进行取代的工作哩！通常这个 s 的动作可以搭配正规表示法！例如 1,20s/old/new/g 就是啦！

举例：（假设我们有一文件名为ab）

```
删除某行
[root@localhost ruby] # sed '1d' ab              #删除第一行 
[root@localhost ruby] # sed '$d' ab              #删除最后一行
[root@localhost ruby] # sed '1,2d' ab           #删除第一行到第二行
[root@localhost ruby] # sed '2,$d' ab           #删除第二行到最后一行

显示某行
[root@localhost ruby] # sed -n '1p' ab           #显示第一行 
[root@localhost ruby] # sed -n '$p' ab           #显示最后一行
[root@localhost ruby] # sed -n '1,2p' ab        #显示第一行到第二行
[root@localhost ruby] # sed -n '2,$p' ab        #显示第二行到最后一行

使用模式进行查询
[root@localhost ruby] # sed -n '/ruby/p' ab    #查询包括关键字ruby所在所有行
[root@localhost ruby] # sed -n '/\$/p' ab        #查询包括关键字$所在所有行，使用反斜线\屏蔽特殊含义

增加一行或多行字符串
[root@localhost ruby]# cat ab
Hello!
ruby is me,welcome to my blog.
end
[root@localhost ruby] # sed '1a drink tea' ab  #第一行后增加字符串"drink tea"
Hello!
drink tea
ruby is me,welcome to my blog. 
end
[root@localhost ruby] # sed '1,3a drink tea' ab #第一行到第三行后增加字符串"drink tea"
Hello!
drink tea
ruby is me,welcome to my blog.
drink tea
end
drink tea
[root@localhost ruby] # sed '1a drink tea\nor coffee' ab   #第一行后增加多行，使用换行符\n
Hello!
drink tea
or coffee
ruby is me,welcome to my blog.
end

代替一行或多行
[root@localhost ruby] # sed '1c Hi' ab                #第一行代替为Hi
Hi
ruby is me,welcome to my blog.
end
[root@localhost ruby] # sed '1,2c Hi' ab             #第一行到第二行代替为Hi
Hi
end

替换一行中的某部分
格式：sed 's/要替换的字符串/新的字符串/g'   （要替换的字符串可以用正则表达式）
[root@localhost ruby] # sed -n '/ruby/p' ab | sed 's/ruby/bird/g'    #替换ruby为bird
[root@localhost ruby] # sed -n '/ruby/p' ab | sed 's/ruby//g'        #删除ruby

插入
[root@localhost ruby] # sed -i '$a bye' ab         #在文件ab中最后一行直接输入"bye"
[root@localhost ruby]# cat ab
Hello!
ruby is me,welcome to my blog.
end
bye

删除匹配行

sed -i '/匹配字符串/d'  filename  （注：若匹配字符串是变量，则需要“”，而不是‘’。记得好像是）

替换匹配行中的某个字符串

sed -i '/匹配字符串/s/替换源字符串/替换目标字符串/g' filename
```
 

## awk

使用方法
```
awk '{pattern + action}' {filenames}
```
尽管操作可能会很复杂，但语法总是这样，其中 pattern 表示 AWK 在数据中查找的内容，而 action 是在找到匹配内容时所执行的一系列命令。花括号（{}）不需要在程序中始终出现，但它们用于根据特定的模式对一系列指令进行分组。 pattern就是要表示的正则表达式，用斜杠括起来。

awk语言的最基本功能是在文件或者字符串中基于指定规则浏览和抽取信息，awk抽取信息后，才能进行其他文本操作。完整的awk脚本通常用来格式化文本文件中的信息。

通常，awk是以文件的一行为处理单位的。awk每接收文件的一行，然后执行相应的命令，来处理文本。

> 调用awk
有**三种**方式调用awk


- 1.命令行方式
```
awk [-F  field-separator]  'commands'  input-file(s)
```
其中，commands 是真正awk命令，[-F域分隔符]是可选的。 input-file(s) 是待处理的文件。
在awk中，文件的每一行中，由域分隔符分开的每一项称为一个域。通常，在不指名-F域分隔符的情况下，默认的域分隔符是空格。

- 2.shell脚本方式
将所有的awk命令插入一个文件，并使awk程序可执行，然后awk命令解释器作为脚本的首行，一遍通过键入脚本名称来调用。
相当于shell脚本首行的：#!/bin/sh
可以换成：#!/bin/awk

- 3.将所有的awk命令插入一个单独文件，然后调用：
awk -f awk-script-file input-file(s)
其中，-f选项加载awk-script-file中的awk脚本，input-file(s)跟上面的是一样的。


本章重点介绍命令行方式。

 

入门实例
假设last -n 5的输出如下
```
[root@www ~]# last -n 5 <==仅取出前五行
root     pts/1   192.168.1.100  Tue Feb 10 11:21   still logged in
root     pts/1   192.168.1.100  Tue Feb 10 00:46 - 02:28  (01:41)
root     pts/1   192.168.1.100  Mon Feb  9 11:41 - 18:30  (06:48)
dmtsai   pts/1   192.168.1.100  Mon Feb  9 11:41 - 11:41  (00:00)
root     tty1                   Fri Sep  5 14:09 - 14:10  (00:01)
```
如果只是显示最近登录的5个帐号
```
#last -n 5 | awk  '{print $1}'
root
root
root
dmtsai
root
```
**awk工作流程**是这样的：读入有'\n'换行符分割的一条记录，然后将记录按指定的域分隔符划分域，填充域，$0则表示所有域,$1表示第一个域,$n表示第n个域。默认域分隔符是"空白键" 或 "[tab]键",所以$1表示登录用户，$3表示登录用户ip,以此类推。

 

如果只是显示/etc/passwd的账户
```
#cat /etc/passwd |awk  -F ':'  '{print $1}'  
root
daemon
bin
sys
这种是awk+action的示例，每行都会执行action{print $1}。

-F指定域分隔符为':'。
```
 

如果只是显示/etc/passwd的账户和账户对应的shell,而账户与shell之间以tab键分割
```
#cat /etc/passwd |awk  -F ':'  '{print $1"\t"$7}'
root    /bin/bash
daemon  /bin/sh
bin     /bin/sh
sys     /bin/sh
 ```

如果只是显示/etc/passwd的账户和账户对应的shell,而账户与shell之间以逗号分割,而且在所有行添加列名name,shell,在最后一行添加"blue,/bin/nosh"。

```
cat /etc/passwd |awk  -F ':'  'BEGIN {print "name,shell"}  {print $1","$7} END {print "blue,/bin/nosh"}'
name,shell
root,/bin/bash
daemon,/bin/sh
bin,/bin/sh
sys,/bin/sh
....
blue,/bin/nosh
```
**awk工作流程**是这样的：先执行BEGING，然后读取文件，读入有/n换行符分割的一条记录，然后将记录按指定的域分隔符划分域，填充域，$0则表示所有域,$1表示第一个域,$n表示第n个域,随后开始执行模式所对应的动作action。接着开始读入第二条记录······直到所有的记录都读完，最后执行END操作。

 

搜索/etc/passwd有root关键字的所有行
```
#awk -F: '/root/' /etc/passwd
root:x:0:0:root:/root:/bin/bash
这种是pattern的使用示例，匹配了pattern(这里是root)的行才会执行action(没有指定action，默认输出每行的内容)。
```
搜索支持正则，例如找root开头的: awk -F: '/^root/' /etc/passwd

 

搜索/etc/passwd有root关键字的所有行，并显示对应的shell
```
# awk -F: '/root/{print $7}' /etc/passwd             
/bin/bash
```
 这里指定了action{print $7}

 

> awk内置变量

awk有许多内置变量用来设置环境信息，这些变量可以被改变，下面给出了最常用的一些变量。
```
ARGC               命令行参数个数
ARGV               命令行参数排列
ENVIRON            支持队列中系统环境变量的使用
FILENAME           awk浏览的文件名
FNR                浏览文件的记录数
FS                 设置输入域分隔符，等价于命令行 -F选项
NF                 浏览记录的域的个数
NR                 已读的记录数
OFS                输出域分隔符
ORS                输出记录分隔符
RS                 控制记录分隔符
```
 此外,$0变量是指整条记录。$1表示当前行的第一个域,$2表示当前行的第二个域,......以此类推。

 

统计/etc/passwd:文件名，每行的行号，每行的列数，对应的完整行内容:
```
#awk  -F ':'  '{print "filename:" FILENAME ",linenumber:" NR ",columns:" NF ",linecontent:"$0}' /etc/passwd
filename:/etc/passwd,linenumber:1,columns:7,linecontent:root:x:0:0:root:/root:/bin/bash
filename:/etc/passwd,linenumber:2,columns:7,linecontent:daemon:x:1:1:daemon:/usr/sbin:/bin/sh
filename:/etc/passwd,linenumber:3,columns:7,linecontent:bin:x:2:2:bin:/bin:/bin/sh
filename:/etc/passwd,linenumber:4,columns:7,linecontent:sys:x:3:3:sys:/dev:/bin/sh
```

使用printf替代print,可以让代码更加简洁，易读
```
 awk  -F ':'  '{printf("filename:%10s,linenumber:%s,columns:%s,linecontent:%s\n",FILENAME,NR,NF,$0)}' /etc/passwd
```

> print和printf
awk中同时提供了print和printf两种打印输出的函数。

其中`print函数`的参数可以是变量、数值或者字符串。字符串必须用双引号引用，参数用逗号分隔。如果没有逗号，参数就串联在一起而无法区分。这里，逗号的作用与输出文件的分隔符的作用是一样的，只是后者是空格而已。

`printf函数`，其用法和c语言中printf基本相似,可以格式化字符串,输出复杂时，printf更加好用，代码更易懂。

 

> awk编程

- 变量和赋值

除了awk的内置变量，awk还可以自定义变量。

下面统计/etc/passwd的账户人数
```
awk '{count++;print $0;} END{print "user count is ", count}' /etc/passwd
root:x:0:0:root:/root:/bin/bash
......
user count is  40
```
count是自定义变量。之前的action{}里都是只有一个print,其实print只是一个语句，而action{}可以有多个语句，以;号隔开。

 

这里没有初始化count，虽然默认是0，但是妥当的做法还是初始化为0:
```
awk 'BEGIN {count=0;print "[start]user count is ", count} {count=count+1;print $0;} END{print "[end]user count is ", count}' /etc/passwd
[start]user count is  0
root:x:0:0:root:/root:/bin/bash
...
[end]user count is  40
 ```

统计某个文件夹下的文件占用的字节数
```
ls -l |awk 'BEGIN {size=0;} {size=size+$5;} END{print "[end]size is ", size}'
[end]size is  8657198
 ```

如果以M为单位显示:
```
ls -l |awk 'BEGIN {size=0;} {size=size+$5;} END{print "[end]size is ", size/1024/1024,"M"}' 
[end]size is  8.25889 M
```
注意，统计不包括文件夹的子目录。

 

- 条件语句

 awk中的条件语句是从C语言中借鉴来的，见如下声明方式：
```
if (expression) {
    statement;
    statement;
    ... ...
}

if (expression) {
    statement;
} else {
    statement2;
}

if (expression) {
    statement1;
} else if (expression1) {
    statement2;
} else {
    statement3;
}
```
 

统计某个文件夹下的文件占用的字节数,过滤4096大小的文件(一般都是文件夹):
```
ls -l |awk 'BEGIN {size=0;print "[start]size is ", size} {if($5!=4096){size=size+$5;}} END{print "[end]size is ", size/1024/1024,"M"}' 
[end]size is  8.22339 M
```

- 循环语句

awk中的循环语句同样借鉴于C语言，支持while、do/while、for、break、continue，这些关键字的语义和C语言中的语义完全相同。

 

- 数组

因为awk中数组的下标可以是数字和字母，数组的下标通常被称为关键字(key)。值和关键字都存储在内部的一张针对key/value应用hash的表格里。由于hash不是顺序存储，因此在显示数组内容时会发现，它们并不是按照你预料的顺序显示出来的。数组和变量一样，都是在使用时自动创建的，awk也同样会自动判断其存储的是数字还是字符串。一般而言，awk中的数组用来从记录中收集信息，可以用于计算总和、统计单词以及跟踪模板被匹配的次数等等。

 

显示/etc/passwd的账户

```
awk -F ':' 'BEGIN {count=0;} {name[count] = $1;count++;}; END{for (i = 0; i < NR; i++) print i, name[i]}' /etc/passwd
0 root
1 daemon
2 bin
3 sys
4 sync
5 games
......
```
这里使用for循环遍历数组



awk编程的内容极多，这里只罗列简单常用的用法，更多请参考 http://www.gnu.org/software/gawk/manual/gawk.html
