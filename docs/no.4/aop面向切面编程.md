# JavaScript面向切面编程

Aspect Oriented Programming(AOP)，面向切面编程，是一个比较热门的话题。AOP主要实现的**目的**是针对业务处理过程中的切面进行提取，它所面对的是处理过程中的某个步骤或阶段，以获得逻辑过程中各部分之间低耦合性的隔离效果,其中“通知”是切面的具体实现，分为before（前置通知）、after（后置通知）、around（环绕通知）。

在前端的常见需求中，有以下一些业务可以使用 AOP 将其从核心关注点中分离出来

- Node.js 日志log
- 埋点、数据上报
- 性能分析、无侵入的统计函数执行时间
- 给ajax请求动态添加参数、动态改变函数参数
- 分离表单请求和验证
- 防抖与节流
- 防止window.onload被二次覆盖.


举个例子，我们现在提供一个查询学生信息的服务，但是我们希望记录有谁进行了这个查询。如果按照传统的OOP的实现的话，那我们实现了一个查询学生信息的服务接口(StudentInfoService)和其实现 类 （StudentInfoServiceImpl.java），同时为了要进行记录的话，那我们在实现类(StudentInfoServiceImpl.java)中要添加其实现记录的过程。这样的话，假如我们要实现的服务有多个呢？那就要在每个实现的类都添加这些记录过程。这样做的话就会有点繁琐，而且每个实现类都与记录服务日志的行为紧耦合，违反了面向对象的规则。那么怎样才能把记录服务的行为与业务处理过程中分离出来呢？看起来好像就是查询学生的服务自己在进行，但却是背后日志记录对这些行为进行记录，并且查询学生的服务不知道存在这些记录过程，这就是我们要讨论AOP的目的所在。AOP的编程，好像就是把我们在某个方面的功能提出来与一批对象进行隔离，这样与一批对象之间降低了耦合性，可以就某个功能进行编程。

例子:
```
Function.prototype.before=function(fn){
    //保存原函数的引用
    var __self=this;
    //返回包含了原函数和新函数的"代理"函数
    return function(){
    //执行新函数,且保证this不被劫持,新函数接受的参数
    //也会被原封不动地传入原函数,新函数在原函数之前执行
        if(fn.apply(this,arguments) == false){
            return false
        };
    //执行原函数并返回原函数的执行结果
    //并且保证this不被劫持
        return __self.apply(this,arguments);
    }
}
Function.prototype.after=function(fn){
    var __self=this;
    return function(){
        var result=__self.apply(this,arguments);
        if(result == false){
            return false
        }
        fn.apply(this,arguments);
        return result;
    }
}
```
`Function.prototype.before`接受一个函数当作参数,这个函数即为新添加的函数,它装载了新添加的功能代码

接下来把当前的this保存起来,这个this指向原函数,然后返回一个"代理"函数,这个""代理"函数只是结构上像代理而已,并不承当代理的职责(比如控制对象的访问等).它的工作是把请求分别转发给新添加的函数和原函数,且负责保证它们的执行顺序,让新添加的函数在原函数之前执行(前置装饰),这样就实现了动态装饰的效果

我们注意到,通过`Function.prototype.apply`来动态传入正确的this,保证了函数在被装饰之后,this不会被劫持
`Function.prototype.after`的原理跟`Function.prototype.before`一样,唯一不同的地方在于让新添加的函数在原函数执行之后再执行

## AOP的应用实例

用AOP装饰函数的技巧在实际开发中非常有用.不论是业务代码的编写,还是在框架层面,我们都可以把行为依照职责分成粒度更细的函数,随后通过装饰把它们合并在一起,这有助于我们编写一个松耦合和高复用性的系统.

### 数据统计上报

分离业务代码和数据统计代码,无论在什么语言中,都是AOP的经典应用之一.在项目开发的结尾阶段难免要加上很多统计数据的代码,这些过程很可能让我们被迫改动早已封装好的函数.

比如页面中有一个登录button,点击这个button会弹出登录浮层,与此同时要进行数据上报,来统计有多少用户点击了这个登录button
```
<html>
<button id="button" tag="login">点击打开登录浮层</button>
<script>
var showLogin = function() {
    console.log("打开登录浮层");
    log(this.getAttribute('tag'));
}
var log = function(tag) {
    console.log("上传标签为:" + tag);
    //(new Image).src="http://xxx.com/report?tag="+tag; //真正的上传代码略
}
document.getElementById('button').onclick = showLogin;
</script>
</html>
```
我们看到在showLogin函数里,既要负责打开登录浮层,又要负责数据上传,这是两个层面的功能,在此处却被耦合进一个函数里.使用AOP分离之后,代码如下:
```
<html>
<button id="button" tag="login">点击打开登录浮层</button>
<script>
Function.prototype.after = function(afterfn) {
    var __self = this;
    return function() {
        var ret = __self.apply(this, arguments);
        afterfn.apply(this, arguments);
        return ret;
    }
}
var showLogin=function(){
  console.log("打开登录浮层");
}
var log=function(){
  console.log("上传标签为:"+this.getAttribute('tag'));
}
showLogin=showLogin.after(log);
document.getElementById('button').onclick=showLogin;
</script>
</html>
```

## 用AOP动态改变函数的参数
观察`Function.prototype.before`方法:

```
Function.prototype.before=function(beforefn){
    var __self=this;
    //保存原函数的引用
    return function(){
    //返回包含了原函数和新函数的"代理"函数
        beforefn.apply(this,arguments);//(1)
    //执行新函数,且保证this不被劫持,新函数接受的参数
    //也会被原封不动地传入原函数,新函数在原函数之前执行
        return __self.apply(this,arguments);//(2)
    //执行原函数并返回原函数的执行结果
    //并且保证this不被劫持
    }
}
```

从这段代码的(1)处和(2)处可以看到,`beforefn`和原函数`__self`共用一组参数列表`arguments`,当我们在`beforefn`的函数体内改变`arguments`的时候,原函数__self接收的参数列表自然也会变化.

下面的例子展示了如何通过Function.prototype.before方法给函数func的参数param动态地添加属性b:
```
Function.prototype.before = function(beforefn) {
    var __self = this;
    //保存原函数的引用
    return function() {
        //返回包含了原函数和新函数的"代理"函数
        beforefn.apply(this, arguments); //(1)
        //执行新函数,且保证this不被劫持,新函数接受的参数
        //也会被原封不动地传入原函数,新函数在原函数之前执行
        return __self.apply(this, arguments); //(2)
        //执行原函数并返回原函数的执行结果
        //并且保证this不被劫持
    }
}
var func = function(param) {
    console.log(param);
}
func = func.before(function(param) {
    param.b = 'b';
})
func({a: "a"}); //{a:"a",b:"b"}
```
## AOP 实现ajax回调函数

```

function actsAsDecorator(object) { 
object.setupDecoratorFor = function(method) { 
if (! ('original_' + method in object) ) { 
object['original_' + method] = object[method]; 
object['before_' + method] = [ ]; 
object['after_' + method] = [ ]; 
object[method] = function() { 
var i; 
var b = this['before_' + method]; 
var a = this['after_' + method]; 
var rv; 
for (i = 0; i < b.length; i++) { 
b[i].call(this, arguments); 
} 
rv = this['original_' + method].apply(this, arguments); 
for (i = 0; i < a.length; i++) { 
a[i].call(this, arguments); 
} 
return rv; 
} 
} 
}; 
object.before = function(method, f) { 
object.setupDecoratorFor(method); 
object['before_' + method].unshift(f); 
}; 
object.after = function(method, f) { 
object.setupDecoratorFor(method); 
object['after_' + method].push(f); 
}; 
} 
/** 
Invoking 
*/ 
function Test(){ 
this.say1 = function(s){ 
alert(s); 
} 
this.say2 = function(s){ 
alert(s); 
} 
} 
var t = new Test(); 
actsAsDecorator(t); 
t.before("say1",beforeHander); 
t.after("say2",afterHander); 
test(); 
```

## 分离表单请求和校验
```
var validata_rules = {
    no_empty: function(value){
            return value.length !== '';
    },
    max_length:function(value){
         return value.length > length;
    }
}

var validata = function(){
    for(var i in validata_rules){
        if(validata_rules[i].apply(this,arguments === false)){
            return false
        }
    }
}

var send = function(value){
    if(validata(value) == false){
        return ;
    }
    from.send()
}
```

