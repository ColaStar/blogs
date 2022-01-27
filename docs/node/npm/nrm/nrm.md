# nrm源管理工具

## nrm安装

```
npm install -g nrm
```
## 查看可选源（带*号即为当前使用源）

```
nrm ls
```
<a data-fancybox title="" href="http://blog.colastar.club/static/images/nrmls.png">![](http://blog.colastar.club/static/images/nrmls.png)</a>

## 查看当前使用源

```
nrm current
```
<a data-fancybox title="" href="http://blog.colastar.club/static/images/nrmcurrent.png">![](http://blog.colastar.club/static/images/nrmcurrent.png)</a>

## 切换源

```
nrm use <registry>
```
其中，registry为源名。

比如：切换为taobao源

<a data-fancybox title="" href="http://blog.colastar.club/static/images/nrmuse.png">![](http://blog.colastar.club/static/images/nrmuse.png)</a>

## 添加源

```
nrm add <registry> <url>
```
其中，registry为源名，url为源地址。

比如：添加一个公司私有的npm源，源地址为：http://192.168.22.11:8888/repository/npm-public/，源名为cpm（随意取）。

```
nrm add cpm http://192.168.22.11:8888/repository/npm-public/
```
<a data-fancybox title="" href="http://blog.colastar.club/static/images/nrmadd.png">![](http://blog.colastar.club/static/images/nrmadd.png)</a>
## 删除源

```
nrm del <registry>
```
其中，registry为源名。

比如：删除刚才添加的cpm源
```
nrm del cpm
```
<a data-fancybox title="" href="http://blog.colastar.club/static/images/nrmdel.png">![](http://blog.colastar.club/static/images/nrmdel.png)</a>

## 测试源速度（即响应时间）

```
nrm test <registry>
```

其中，registry为源名。

比如：测试官方源和淘宝源的响应时间

```
nrm test npm
```
<a data-fancybox title="" href="http://blog.colastar.club/static/images/nrmtest.png">![](http://blog.colastar.club/static/images/nrmtest.png)</a>



