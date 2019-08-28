# css工作流


> 写CSS是快乐的还是痛苦的？

有时候我们可能会因为CSS不是一门正统的编程语言而不重视它(我自己也是)，我总觉得写CSS是痛苦的，每天做着重复性的工作，没有大神的奇淫技巧也没有特别亮眼的特效，总是围绕着那几个CSS属性转。相信有很多人和我一样，把更多的精力放在JavaScript上面，每次再写CSS的时候我都感觉是痛苦的，但是现在随着自身能力的提升和各种奇淫技巧以及面向未来的CSS的发展让CSS更加的趋向于一门真正的编程语言，让我又重新爱上了它。

> CSS Workflow
相信很多同胞和我一样不满足CSS的现状，使用一些CSS预处理器进行编程。什么是预处理器，什么是CSS Workflow？

## Workflow

Workflow顾名思义就是工作流。现代化项目都是通过自动化构建工具来完成的，例如Webpack，CSS Workflow也就是在项目构建过程中处理CSS的一系列流程。

处理CSS流程包括两方面

- CSS 预处理器
- CSS 后处理器

![](css-workflow.png)

处理CSS就可以看做上图的一条河流，CSS预处理器就是在开始的时候处理源程序，把预处理器源程序处理成浏览器所能解析的CSS代码；在这条河流中有些CSS代码浏览器还不认得，因此必须要在输出浏览器之前做最后一次处理(例如：加浏览器前缀)，这就是后处理器的作用。

> 常用的CSS预处理器有：
![](css-预处理.png)

- [Less](http://lesscss.cn/)
- [Sass](https://www.sass.hk/)
- [Stylus](http://stylus-lang.com/)

> 常用的CSS后处理器(貌似只有一个)有：

[PostCSS](https://www.postcss.com.cn/)

关于PostCSS后面详细介绍。

## 预处理器

CSS预处理器可以说让我们以一种编程语言的方式来写CSS，常见的CSS预处理器都会有以下特性：

- 变量
- 混合(Mixin) Extends
- 嵌套规则
- 运算
- 函数
- Namespace 和 Accessors
- scope
- 注释

## 后处理器

后处理器一般都是对CSS做最终的处理：

- CSS压缩 clean-css
- 自动添加浏览器前缀 autprefixe
- css更加美观排序 csscomb
- Rework取代Stylus 后处理器发热
- 前后通吃 PostCSS

> 后处理的过程
抽象语法树(Abstract Syntax Tree ，AST)作为程序的一种中间表示形式
把css拿过来解析成AST语法树后通过一些手段转换为优化过的css如下图
![](css-后处理.png)


## Workflow 流程

在自动化构建工具中处理CSS的流程可以分为两个方面：

预处理器处理

后处理器处理

## CSS-Next

PostCSS可以说是目前最重要的一个东西了，为什么重要，看[css-next](https://cssnext.github.io/)官网的一句话就知道了。

> Use tomorrow’s CSS today!

使用明天的CSS，也就是下一代CSS。

有很多人知道现代化的CSS出现了变量并且浏览器原生支持，没错这就是CSS的下一个版本。

CSS的下一个版本完全有了CSS预处理器的能力，目前为止有很多语法还在stage阶段有些语法浏览器还不能很好的解析，因此需要PostCSS的一个插件`postcss-preset-env`来解析成当前浏览器可以解析的`CSS`，相当与`JavaScript`的`babel`。

### 变量
新一代的CSS有了变量的功能

```
//在root中定义的变量为全局变量
:root{
    //定义一个变量
    --color:red;
}
div {
    //定义一个局部变量
    --size: 10px;
}
```

如何使用一个变量？

```
div{
    //使用一个变量需要通过var方法
    background-color:var(--color);
}
```

> 变量的默认值

使用变量是可以指定默认值的，只有当变量不生效的时候，默认值才会生效。
```
div{
    background-color:var(--color,red);
}
```
上面代码指定了变量的默认值，当–color变量不生效的时候，div的背景为红色。

> 定义变量规则
使用变量可以定义一种规则，可以说是更强大的变量，有代码复用的特点。
```
:root {
    //定义垂直居中的规则
    --centered {
        dispaly:flex;
        justify-content: center;
        align-items: center;
    }
}
```
如何使用？
```
div{
    //使用@apply规则调用
    @apply --centered;
}
```
@apply规则默认是不可以被PostCSS解析的，因此需要安装`postcss-apply`插件。

### 自定义媒体查询
现代化的CSS不仅可以定义变量，而且可以自定义媒体查询。
```
//1、@custom-media 自定义媒体查询
//2、自定义媒体查询的名称遵循定义变量的规范。
@custom-media --viewport-medium (width <= 50rem)
```
如何使用?
```
@media (--viewport-medium) {
    body{
        background-color:red;
    }
}
```
### 自定义选择器
现代化CSS提供自定义选择器。
```
//1、使用@custom-selector规则来定义自定义选择器
//2、自定义选择器的名称必须遵守下面定义的规则
@custon-selector :--heading h1,h2,h3,h4,h5,h6;
```
自定义选择器相当与对一系列选择器做一下代理，通过自定义选择器去设置其他选择器的属性。
```
:--heading {
    margin: 0;
    padding: 0;
}
```
### 嵌套
现代化CSS同样支持众多CSS预处理器中的嵌套写法。
```
a{
    color: rgb(0 0 100%/90%);
    &:hover{
        color:red;
    }
}
```
编译后就是
```
a{
    color: rgba(0, 0, 255, 0.9)
}
a:hover{
    color:red;
}
```
### 判断
现在现代化的CSS也是出了`@when/@else`这种方式支持判断，但是在`stage-0`阶段，我也没能`postcss-preset-env`编译掉它(我个人觉得是判断处于运行时的缘故)，只能期待浏览器的支持。

虽然上述方法不可用，但是也是有办法的，使用`@supports`这个规则也可以实现判断的效果。

`@supports`是一个方法，只有当参数为真的时候才会执行后面代码。这样就可以模拟判断。
```
body{
    background-color:green;
}
@supports(display:flex) {
    body{
        background-color:red;
    }
}
```

上面代码当浏览器不支持display的时候背景为绿色，当支持的时候，下面的body中定义的背景颜色会覆盖上面，达到了判断的效果。这种方式也是渐进增强的方式。

另外附上`@when/@else`的写法
```
@when supports(display:flex) {
    body {
        background-color: red;
    }
}@else {
    body {
        background-color: yellow;
    }
}
```

这种方式就看着舒服多了，也是通过`supports`判断是否为真。

### 正则匹配
现代化的CSS在发展过程中有两种正则匹配的方式：

- 类似正则表达式的方式匹配。
- 使用正则方法匹配。

> 类似正则表达式
这种方式类似于JavaScript中的正则表达式。
```
// i的意思是不区分大小写
[frame=hsides i]{
  background-color:red;
}

匹配的结果

[frame=hsides],[frame=Hsides],[frame=hSides],[frame=HSides],[frame=hsIdes],[frame=HsIdes],[frame=hSIdes],[frame=HSIdes],[frame=hsiDes],[frame=HsiDes],[frame=hSiDes],[frame=HSiDes],[frame=hsIDes],[frame=HsIDes],[frame=hSIDes],[frame=HSIDes],[frame=hsidEs],[frame=HsidEs],[frame=hSidEs],[frame=HSidEs],[frame=hsIdEs],[frame=HsIdEs],[frame=hSIdEs],[frame=HSIdEs],[frame=hsiDEs],[frame=HsiDEs],[frame=hSiDEs],[frame=HSiDEs],[frame=hsIDEs],[frame=HsIDEs],[frame=hSIDEs],[frame=HSIDEs],[frame=hsideS],[frame=HsideS],[frame=hSideS],[frame=HSideS],[frame=hsIdeS],[frame=HsIdeS],[frame=hSIdeS],[frame=HSIdeS],[frame=hsiDeS],[frame=HsiDeS],[frame=hSiDeS],[frame=HSiDeS],[frame=hsIDeS],[frame=HsIDeS],[frame=hSIDeS],[frame=HSIDeS],[frame=hsidES],[frame=HsidES],[frame=hSidES],[frame=HSidES],[frame=hsIdES],[frame=HsIdES],[frame=hSIdES],[frame=HSIdES],[frame=hsiDES],[frame=HsiDES],[frame=hSiDES],[frame=HSiDES],[frame=hsIDES],[frame=HsIDES],[frame=hSIDES],[frame=HSIDES]{
  background-color:red;
}
```
把所有有可能的情况全部匹配出来，这种方式可以用来做组件库。

> 正则方法
这种方方式是使用一个伪类来进行匹配。
```
.hero:matches(main, .main) {
    background-color: var(--color);
}
编译后的结果

main.hero, .hero.main {
    backgorund-color:var(--color);
}
```

## 总结

这些都是现代化CSS在语法上的一些改变，还有许多CSS一些其他的特性，都在[cssdb](https://cssdb.org/)这里。

### Webpack接入PostCSS

新标准提案阶段

CSS标准的提案有5个阶段，分别是

stage-0
stage-1
stage-2
stage-3
stage-5

- stage-0

这个阶段是产生一个想法，由W3C工作组提出草案，并且是不稳定的可能会被改变。

- stage-1

这个阶段是实验阶段，并且是不稳定的可能会被改变。

- stage-2

这个阶段是允许阶段，表示这个提案可以被接纳。

- stage-3
这个阶段是拥抱阶段，表示提案正在成为网络的一部分。

- stage-4
这个阶段死标准化阶段，表示提案正式称为Web标准。

总结一下

正如上面所知，现代化的CSS并不全部达到stage-4阶段，浏览器支持度并不高，那么我们应该怎么用呢？新版本的ES6+，当浏览器不支持的时候可以通过babel编译或者使用polyfill来让新标准可用，CSS也可以通过这种方式来实现。

## 前后通吃的PostCSS

一般我们都是使用PostCSS做后处理器来使用，其实PostCSS就只是提供了一个容器，通过插件的机制来让编译CSS。现代化的CSS也是通过PostCSS插件编译，从而让PostCSS前后通吃。

编译CSS用到的插件是postcss-preset-env。
```
const PostcssPresetEnv = require("postcss-preset-env");
const {resolve} = require("path");
//编译@apply
const PostcssApply = require("postcss-apply");
module.exports = {
    plugins: [
        PostcssPresetEnv({
            stage: 0,           //阶段
            preserve: false,            //配置是否保留
            browsers: 'last 3 versions',        //浏览器支持
            importFrom: resolve('./src/components/common.css'),     //导入
            exportTo: {     //导出

            },
            insertBefore: {         //在postcss-preset-env前接入插件
                "postcss-apply":PostcssApply({
                    preserve: false,
                }),     
            },
            insertAfter: {   //在postcss-preset-env后接入插件

            },
            autoprefixer: {             //浏览器前缀
                // grid: true,
                flex: true,
            }
        }),
        
    ]
}
```
上这些就是postcss-preset-env的一些配置。

# 总结

拥抱变化、拥抱新技术一直是我学习的最大动力。同时我也觉得新的东西可以让我更加热爱前端。