# PJAX的实现与应用

## 前言
web发展经历了一个漫长的周期，最开始很多人认为Javascript这门语言是前端开发的累赘，是个鸡肋，那个时候人们还享受着从一个a链接蹦到另一个页面的web神奇魔术。后来随着JavaScript的不断更新换代，他的功能不仅仅是为网页添加一点特效了，语言本身的加强以及对DOM操作能力的提升让他在前端大放光彩。尤其是ajax的出现，让JavaScript以及整个web的发展翻开了崭新的一页。

利用ajax局部刷新页面，相信很多人玩得相当熟练了。如果整个页面的刷新都是使用ajax，我们可以称之为一个webapp，所有的逻辑都是在当页处理，这种形式的页面带来的体验是十分不错的，减少了那些比较“冗余”的页面跳转、新开页面等。不过，webapp的代码是十分不好维护的，页面逻辑太多太深，出点小问题，整个页面就会瘫痪，而且不方便定位bug，可维护性很低。

## PJAX的实现与应用
### 1.场景再现-ajax弊端
ajax是一个非常好玩的小东西，不过用起来也会存在一些问题。

我们可以利用ajax进行无刷新改变文档内容，但是没办法去修改URL，有童鞋要问，这里为什么一定要修改URL呢？一个URL代表一个特定的网络资源，ajax修改了页面的内容，所以用不同的URL去标识他们，这个还是挺有必要的。

比如我们设计了一个单词查询的页面，比较合理的UR应该是http://example.com/word，不同的word对应不同的内容，但是如果整个页面都是ajax实现，我们就没法去修改/word了，当然我们可以使用hash如http://example.com#word，但这样就不能很好的处理浏览器的前进和后退问题。如：在页面中查询了单词A的翻译，接着又查询了单词B，这个时候浏览器的浏览历史会生成http://example.com#A和http://example.com#B两个记录，可是当我们从B转回A的时候，AJAX的效果还停留在B的状态（页面显示的还是单词B的翻译）。部分浏览器对此问题引入了onhashchange的接口，只要URL的hash值发生变化，我们的程序就可以监听并做出相应。不过对于那些木有这个接口的浏览器，就得定时去判断hash的变化了。

而这样的方式对搜索引擎是十分不友好的，twitter和google约定使用hash bang (#!xxx)，也就是hash后面的第一个字符为感叹号，这样的网址他们是会爬取的，但是其他搜索引擎不支持。PJAX可以在改变页面内容的同时也改变他的URL，下面来说说PJAX和他的应用。

### 2.什么是PJAX
history API中有几个新特性，分别是`history.pushState`和`history.replaceState`，我们把`pushState+AJAX`进行封装，合起来简单点叫，就是`PJAX~ `虽说实现技术上没什么新东西，但是概念上还是有所不同的。

PJAX的**基本思路**是，用户点击一个链接，通过ajax更新页面变化的部分，然后使用HTML5的pushState修改浏览器的URL地址，这样有效地避免了整个页面的重新加载。如果浏览器不支持history的两个新API或者JS被禁用了，那这个链接就只能跳转并重新刷新整个页面了。和传统的ajax设计稍微不同，ajax通常是从后台获取JSON数据，然后由前端解析渲染，而PJAX请求的是一个在服务器上生成好的HTML碎片，如下图所示：

<a data-fancybox title="" href="https://raw.githubusercontent.com/ColaStar/static/master/images/pajax.png">![](https://raw.githubusercontent.com/ColaStar/static/master/images/pajax.png)</a>

客户端向服务器发送一个普通的请求
- （1），其实也就是点击了一个链接，服务器会相应这个请求
- （2），返回一个html文档。客户端向服务器发送一个有PJAX标志的请求
- （3），此时服务器只返回一个html碎片
- （4）。但是这两次请求都让客户端的URL变化了，希望上面的说明可以让你明白了PAJX和AJAX的区别了。

3.PJAX的应用

先来看我的前端代码：
```
//$('document').pjax('html元素','需要跟新的容器')  给html元素绑定pjax传输的方法
 $(document).pjax('.header a,.container a,#divSearchPanel input', '.container', {
     fragment: '.container',
     timeout: 1500
 });
 
 //用ajax来实现
 //pjax请求带pjax header
 $.ajax({
     url: a.attr('href')ajaxUrl,
     type: 'GET',
     headers: {'x-pjax': true},
     success: function (data) {
         //localStorage ...
         history.pushState('', '', url);
         //containor 填充
     }
 });

 ```

 这个时候所有通过a标签发送的请求header里面都会出现x-pjax:true;
 <a data-fancybox title="" href="https://raw.githubusercontent.com/ColaStar/static/master/images/x-pajax.png">![](https://raw.githubusercontent.com/ColaStar/static/master/images/x-pajax.png)</a>

 前端部分完成，开始来部署后台；
```
var pjax = require('express-pjax');
app.use(pjax());
router.get('/',function (req,res) {
    if (req.headers['x-pjax']) {//如果x-pjax为true使用res.renderPjax()返回页面
        res.renderPjax('msg');
        //站内刷
    }
    res.render('msg');
    //直接刷
});

```
 <a data-fancybox title="" href="https://raw.githubusercontent.com/ColaStar/static/master/images/x-pajax2.png">![](https://raw.githubusercontent.com/ColaStar/static/master/images/x-pajax2.png)</a>
### 开源的PJAX库

已经有人对这个东西做了封装，我就不重复造轮子了。

- welefen封装的库，对jquery、qwrap和kissy都做了封装，[github地址](https://github.com/welefen/pjax)
- Yahoo团队[ PJAX地址](PJAX地址)
并不是页面中所有的链接都需要使用PJAX加载，所有在需要这个东西的a标签上加一个属性，如data-pjax=true，然后统一添加事件。

### 注意事项
- 1.如果浏览器不支持pushState接口函数，那就只能退化为ajax或者使用hash bang了~

- 2.本地环境下使用的话，浏览器会报错：`Uncaught SecurityError: A history state object with URL file:///E:/baidu_app/demo/PJAX/pic-2' cannot be created in a document with origin 'null'. ，所以如果你要测试的话，请把代码丢到服务器上！

- 3.为了得到更好的体验，PJAX经常配合localStorage来使用，把请求到的内容缓存到本地，再一次请求的时候先从本地查看。如果你的内容是动态变化的，缓存的时候加一个缓存时间，方便更新缓存。
- 4.还有一个容易忽略的东西是统计，使用PJAX只会局部刷新页面，如果忽略了对统计函数的更新，那就会让你失去很多数据。

### 参考资料
http://www.welefen.com/pjax-for-ajax-and-pushstate.html welefen

http://ntotten.com/2012/04/09/building-super-fast-web-apps-with-pjax/ Nathan Totten

http://yuilibrary.com/yui/docs/pjax/ YUI Pjax
 