## 你不知道的HTML
### 1.开发工具
---
推荐Sublime Text（优点：轻量级，具有良好的扩展能力）

**插件推荐**

> 功能插件：

Emmet可以设置CSS形式的能够动态被解析的表达式，然后根据你所输入的缩写来得到相应的内容；很成熟的并且非常适用于编写HTML/XML 和 CSS 代码的前端开发人员，但也可以用于编程语言。
> 关于界面美观的一些插件

1.set-orig（编辑器的专题）  
2.material-ui(编辑器的专题，在angular-4会用)(https://github.com/equinusocio/material-theme)  
3.Comic Sans MS(编辑器字体样式)(设置font_face:'Comic Sans MS')

> 统一编辑器的好处：  

1)作为团队开发，统一的编辑器可以尽量减少团队的沟通的成本。    
2)好的编辑器能够提高团队的开发效率，无论从写代码的角度，还是审美的角度。  
3)有利于团队的css的hint。

### 浏览器同源策略及跨域的解决方法
---
1.什么是浏览器的同源策略  
2.同源策略的目的  
3.同源策略的限制范围  
4.如何设置同源策略
5.如何突破同源策略（跨域）  
6.跨域
  
> 1.什么是浏览器的同源策略 

同源策略是一种约定，他是浏览器最核心也是最基本的安全功能，如果缺少了同源策略，则浏览器的正常功能可能都会受影响，可以说Web是构建在同源策略基础上的，浏览器只是针对同源策略的一种实现。  
他的核心就在于它认为任何站点装载的信赖内容是不安全的，当被浏览器半信半疑的脚本运行在沙箱时，它们应该只被允许访问来自同一站点的资源，而不是那些来自其他站点可能怀有恶意的资源。  
**同源策略可以分为2种：**  
DOM 同源策略：禁止对不同源页面 DOM 进行操作。这里主要场景是 iframe 跨域的情况，不同域名的 iframe 是限制互相访问的。  
XMLHttpRequest 同源策略：禁止使用 XHR 对象向不同源的服务器地址发起 HTTP 请求。
所谓的同源就是：同协议，同域名（一级二级域名都相同），同端口。
> 2.同源策略的目的

是为了保证用户信息的安全，防止恶意的网站窃取数据。
例如：网站内的cookie信息，如果没有同源策略的话，cookie是可以共享的。

> 3.同源策略的限制范围

如果网站之间不能满足同源策略要求的话，将不能
1)共享Cookie、Localstorage、IndexDB（异步）、WebSQL(异步)
2)获取DOM
3)AJAX请求不能发送
> 4.如何设置同源策略

Cookie是服务器写入浏览器的一小段信息，只有同源网页才能共享。但是，俩个网页的一级域名 相同，二级域名不同时，浏览器允许通过设置document.domain的方式实现共享Cookie。
```
例如：现在有www.example.com和w2.example.com两个网页，可以通过设置window.domain的形式来处理,前端页面可以通过设置window.domain=example.com或者后台设置Set-Cookie: key=value; domain=.example.com; path=/来实现共享cookie
www.example.com
<script>
window.domain = 'example.com'
domain.cookie = 'test1=hello'
</script>
w2.example.com读取cookie
<script>
var allCookie = document.cookie;
</script>
```

> 5.如何突破同源策略

通过html解决跨域问题有以下几种方案
1.img;  
2.iframe;  
3.script(jsonp);  
4.link(background);

> 6.跨域

 受前面所讲的浏览器同源策略的影响，不是同源的脚本不能操作其他源下面的对象。想要操作另一个源下的对象是就需要跨域。

> 注意
---

1.浏览器不同的域名不能访问对应的cookie但是内部的表单没有限制

2.Localstorage是同步的。IndexDB\WebSQL是异步获取数据通过回调获取。
localstore的存储限制是5m但是超过2.5m后就会出现问题。

**简述jsonp解决跨域问题原理？**
ajax请求受同源策略影响，不允许进行跨域请求，而script标签src属性中的链接却可以访问跨域的js脚本，利用这个特性，服务端不再返回JSON格式的数据，而是返回一段调用某个函数的js代码，在src中进行了调用，这样实现了跨域。
**利用原生js实现jsonp**
```
(function(window,document){
    var jsonp = function(url,data,callback){
        //1.将传入的data数据转化为url的字符串形式
        //{id:1;name:'zhangsan'}----->id=1&name=zhangsan
        var dataString = url.indexOf(?) == -1 ? '?' :'&';
        for(var item in data){
            dataString += item + '=' data[item] +'&';
        }
        // 2 处理url中的回调函数
        // cbFuncName回调函数的名字 ：my_json_cb_名字的前缀 + 随机数（把小数点去掉）
        var cbFuncName = 'my_json_cb_' + Math.random().toString().replace('.','');
        dataString += 'callback=' + cbFuncName;
         // 3.创建一个script标签并插入到页面中
        var scriptEle = document.createElement('script');
        scriptEle.src = url + dataString;
        
        // 4.挂载回调函数
        window[cbFuncName] = function (data) {
            callback(data);
            // 处理完回调函数的数据之后，删除jsonp的script标签
            document.body.removeChild(scriptEle);
        }
        
        // 5.append到页面中
        document.body.appendChild(scriptEle);
    }
})()
```



### HTML语义化：
---
> 1、什么是HTML语义化？

语义化的HTML就是正确的标签做正确的事情，能够便于开发者阅读和写出更优雅的代码的同时让网络爬虫很好地解析。
> 2.为什么要做到语义化？

1)为了在没有CSS的情况下，页面也能呈现出很好地内容结构、代码结构:为了裸奔时好看；  
2)用户体验：例如title、alt用于解释名词或解释图片信息、label标签的活用；  
3)有利于SEO：和搜索引擎建立良好沟通，有助于爬虫抓取更多的有效信息：爬虫依赖于标签来确定上下文和各个关键字的权重；  
4)方便其他设备解析（如屏幕阅读器、盲人阅读器、移动设备）以意义的方式来渲染网页；  
5)便于团队开发和维护，语义化更具可读性，是下一步吧网页的重要动向，遵循W3C标准的团队都遵循这个标准，可以减少差异化

>3. 写HTML代码时应注意什么？

1.使用div布局，不要用div进行无意义的包裹。span。  
2、在语义不明显的情况下，既可以用div和p时，尽量用p因为p在默认情况下有上下边距，对兼容特殊终端有利。    
3.不要使用纯样式标签，如用b、font、u等，改用css设置。  
4、需要强调的文本，可以包含在strong或em标签中。  
5、使用表格时，标题要用caption，表头用thead主体用tbody，尾部用tfoot包围。  
6、每个input标签对应的说明文本都需要使用label标签，并且通过为input设置id属性，在lable标签中设置for=someld来让说明文本和相对应的input关联起来。  
7、有序列表与无序列表   
8、HTML5的新标签（让浏览器更好的理解或爬虫更好理解文章段落）  
header、main、section（段落或块）、nav、footer、article（文章）、aside（侧边栏）、adress（地址）。  
9、尽量少写html，用after与before伪类元素插入。一定要少写
html减少dom渲染的时间，浪费整个文件大小。最少减少3个元素。

> 4、HTML5新增了哪些语义标签?
header、main、footer、nav、article、section、aside、video、audio等













            
