#  CSS魔术师Houdini

在现今的 Web 开发中，JavaScript 几乎占据所有版面，除了控制页面逻辑与操作 DOM 对象以外，连 CSS 都直接写在 JavaScript 里面了，就算浏览器都还沒有实现的特性，总会有人做出对应的 Polyfills，让你快速的将新 Feature 应用到 Production 环境中，更別提我们还有 Babel 等工具帮忙转译。

而 CSS 就不同了，除了制定 CSS 标准规范所需的时间外，各家浏览器的版本、实战进度差异更是旷日持久，再加上 CSS 并非 Javascript 这样的动态语言，我们无法简单的提供 Polyfills，顶多利用 PostCSS、Sass 等工具來帮我們转译出浏览器能接受的 CSS，而剩下的就是浏览器的事了。

这边让我们回想一下，浏览器在网頁的渲染过程中，做了哪些事情？

<a data-fancybox title="" href="http://blog.colastar.club:9527/static/images/css-浏览器.png">![](http://blog.colastar.club:9527/static/images/css-浏览器.png)</a>

浏览器的 Render Pipeline 中，JavaScript 与 Style 两个阶段会解析 HTML 并为加载的 JS 与 CSS 建立 Render Tree，也就是所谓的 DOM 与 CSSOM

<a data-fancybox title="" href="http://blog.colastar.club:9527/static/images/css-浏览器1.png">![](http://blog.colastar.club:9527/static/images/css-浏览器1.png)</a>

而就现阶段的 Web 技术來看，开发者们能操作的就是通过 JS 去控制 DOM 与 CSSOM，來来影响页面的变化，但是对于接下來的 Layout、Paint 与 Composite 就几乎沒有控制权了。

既无法让各家浏览器快速并统一实战规格，亦不能轻易产生 Polyfills，所以到现在我们依然无法大胆使用 Flexbox，即便它早在 2009 年就被提出了…

但 CSS 并非就此驻足不前。

为了解決上述问题，为了让 CSS 的魔力不再浏览器把持，Houdini 就诞生了！（ Houdini 是美国的伟大魔术师，擅长逃脱术，很适合想将 CSS 从浏览器中解放的概念）

## CSS Houdini

CSS Houdini 是由一群來自 Mozilla, Apple, Opera, Microsoft, HP, Intel, IBM, Adobe 与 Google 的工程 师所组成的工作小组，志在建立一系列的 API，让开发者能够介入浏览器的 CSS engine，帶给开发者更多的解決方案，用来解決 CSS 长久以来的问题：

- Cross-Browser isse
- CSS Polyfill 的制作困难

Houdini task force 目前起草了一些 API 规范，并逐步努力让其通过 W3C，成为真正的 Web standards。 由于都是草稿阶段，有些甚至只有规画，还未被真正写入规范，所以变动很大，有些我也不是很了解，所以就大致介绍一下，若有错误拜托务必告知！

另外，有兴趣的读者可以直接从这里 [CSS Houdini Drafts](https://dev.w3.org/houdini/) 看详细內容（ Drafts 的更新时间都非常近期，活跃中的草稿！）。

下面这张图我将 Google 提供的 Render pipeline 与 Houdini: Maybe The Most Exciting Development In CSS You’ve Never Heard Of 中提到的 pipeline 做个结合对比，显示出 Houdini 试图在浏览器的 Render pipeline 中提供哪些 API 给开发者使用：

<a data-fancybox title="" href="http://blog.colastar.club:9527/static/images/css-浏览器2.png">![](http://blog.colastar.club:9527/static/images/css-浏览器2.png)</a>

其中灰色部分就是只在规划阶段，而黃色部份就是已经写入规范正在推行中.

## Houdini API介绍

> Parser、Paint、Layout API扩展css的词法分析器

- `CSS Parser API` 还没有被写⼊规范，所以下⾯我要说的内容 随时都会有变化，但是它的基本思想不会变:允许开发者⾃由扩展 CSS 词法分析器，引入新的结构(constructs)， ⽐如新的媒体规则、新的伪类、嵌套、`@extends`、 `@apply` 等等。只要新的词法分析器知道如何 解析这些新结构，CSSOM 就 不会直接忽略略它们，⽽而把这 些结构放到正确的地⽅方。

- `CSS Layout API`允许开发 者可以通过 **CSS Layout API** 实现自己的布局模块 (layout module)，这⾥ 的“布局模块”指的是 `display` 的属性值。也就是 说，这个 API 实现以后， 开发者⾸次拥有了像 CSS 原⽣代码(比如 `display:flex、 display:table`)那样的布 局能力。

### CSS Properties and Values API

先介绍一个最能够使用的 API，除了 IE family 以外，Chrome、Firefox 与 Safari 都已经能夠直接使用了！ [caniuse](https://caniuse.com/#search=custom%20properties)

相信很多人都使用过 CSS Preprocessors，他给予开发者在 CSS 中使用变量的能力：
```
$font-size: 10px;
$brightBlue: blue;
.mark{
    font-size: 1.5 * $font-size;
    color: $brightBlue
}
```
但其实使用 `Preprocessors` 还是有其缺点，像是不同的 `Preprocessors` 就有不同的 `Syntax`，需要额外 `setup` 与 `compile`， 而现在 CSS 已经有原生的变量可以使用了！就是 **CSS Properties and Values API！**

SCSS 与 Native CSS Custom Properties 的一个主要差別可以看下图：
<a data-fancybox title="" href="http://blog.colastar.club:9527/static/images/scss-vs-css.png">![](http://blog.colastar.club:9527/static/images/scss-vs-css.png)</a>

原生的 CSS variable syntax：
```
/* declaration */
--VAR_NAME: <declaration-value>;
/* usage */
var(--VAR_NAME)
```
变量可以定义在 root element selector 內，也能在一般 selector 內，甚至是给別的变量 reuse：
```
/* root element selector (全域) */
:root {
    --main-color: #ff00ff;
    --main-bg: rgb(200, 255, 255);
    --block-font-size: 1rem;
}
.btn__active::after{
    --btn-text: 'This is btn';
    /* 相等於 --box-highlight-text:'This is btn been actived'; */
    --btn-highlight-text: var(--btn-text)' been actived';
    content: var(--btn-highlight-text);
    /* 也能使用 calc 來做運算 */
    font-size: calc(var(--block-font-size)*1.5);
}
body {
    /* variable usage */
    color: var(--main-color);
}
```
而有了变量以后，会为 CSS 带來什么好处应该很明显，他的 Use case 可以多写一篇文章來介绍了，或是可以直接看這篇的详细介绍，我这边介绍几个我觉得比较有趣的：

模拟一个特殊的 CSS rule:

单纯透过更改变量來达到改变 `box-shadow` 颜色
```
.textBox {
    --box-shadow-color: yellow;
    box-shadow: 0 0 30px var(--box-shadow-color);
}
.textBox:hover {
    /* box-shadow: 0 0 30px green; */
    --box-shadow-color: green;
}
```

此外，我们也可以用 JavaScript 来控制：
```
const textBox = document.querySelector('.textBox');
// GET
const Bxshc = getComputedStyle(textBox).getPropertyValue('--box-shadow-color');
// SET
textBox.style.setProperty('--box-shadow-color', 'new color');
```
非常好用的特性，几乎所有主流浏览器都已经支持了，大家快来使用吧！

### Box Tree API

Box tree API 并沒有出现在上图中，但在 Paintin API 中会用到其概念。

大家都知道在 DOM tree 中的每个元素都有一个 Box Modal，而在浏览器解析过程中，还会将其拆分成 fragments，至于什么是 `fragments`？以 drafts 中的例子來解释：
```
//html
<div class="wrapper">
<p>foo <i>bar baz</i></p>
</div>

//css
p::first-line { color: green; }

p::first-letter { color: red; }

.wrapper {
  width: 60px;
}
```

上面的 HTML 总共就会拆出七个 `fragments：`

- 最外层的 div
- 第一行的 box (包含 foo bar)
- 第二行的 box (包含 baz)
- 吃到 ::first-line 与 ::first-letter 的 f 也会被拆出來成独立的 fragments
- 只吃到 ::first-line 的 oo 只好也独立出來
- 吃到 ::first-line 与 包在 `<i> `內的 bar 当然也是
- 在第二行底下且为 italic 的 baz

而 Box tree API 目的就是希望让开发者能够取得这些 fragments 的信息，至于取得后要如何使用，基本上应该会跟后面介绍的 Parser API、Layout API 与 Paint API 有关联，当我们能取得详细的 Box Modal 信息时，要客制化 Layout Module 才更为方便。

### CSS Layout API

Layout API 顾名思义就是提供开发者撰写自己的 `Layout module`，Layout module 也就是用来 `assign` 给 `display` 属性的值，像是` display: grid` 或 `display: flex`。 你只要透过 `registerLayout` 的 `function`，传入 `Layout` 名称与 `JS class` 来定义 `Layout` 的逻辑即可，例如我们实战一个 `block-like` 的 `Layout：`
```
registerLayout('block-like', class extends Layout {
    static blockifyChildren = true;
    static inputProperties = super.inputProperties;
    *layout(space, children, styleMap) {
        const inlineSize = resolveInlineSize(space, styleMap);
        const bordersAndPadding = resolveBordersAndPadding(constraintSpace, styleMap);
        const scrollbarSize = resolveScrollbarSize(constraintSpace, styleMap);
        const availableInlineSize = inlineSize -
                                    bordersAndPadding.inlineStart -
                                    bordersAndPadding.inlineEnd -
                                    scrollbarSize.inline;
        const availableBlockSize = resolveBlockSize(constraintSpace, styleMap) -
                                bordersAndPadding.blockStart -
                                bordersAndPadding.blockEnd -
                                scrollbarSize.block;
        const childFragments = [];
        const childConstraintSpace = new ConstraintSpace({
            inlineSize: availableInlineSize,
            blockSize: availableBlockSize,
        });
        let maxChildInlineSize = 0;
        let blockOffset = bordersAndPadding.blockStart;
        for (let child of children) {
            const fragment = yield child.layoutNextFragment(childConstraintSpace);
            // 這段控制 Layout 下的 children 要 inline 排列
            // fragment 應該就是前述的 Box Tree API 內提到的 fragment
            fragment.blockOffset = blockOffset;
            fragment.inlineOffset = Math.max(
                bordersAndPadding.inlineStart,
                (availableInlineSize - fragment.inlineSize) / 2);
            maxChildInlineSize =
                Math.max(maxChildInlineSize, childFragments.inlineSize);
            blockOffset += fragment.blockSize;
        }
        const inlineOverflowSize = maxChildInlineSize + bordersAndPadding.inlineEnd;
        const blockOverflowSize = blockOffset + bordersAndPadding.blockEnd;
        const blockSize = resolveBlockSize(
            constraintSpace, styleMap, blockOverflowSize);
        return {
            inlineSize: inlineSize,
            blockSize: blockSize,
            inlineOverflowSize: inlineOverflowSize,
            blockOverflowSize: blockOverflowSize,
            childFragments: childFragments,
        };
    }
});
```
上面这段代码是来自 [Houdini Draft](https://drafts.css-houdini.org/css-layout-api/) 的示例，完整放上来是想给大家看一下实战一个 `Layout` 需要注意的细节有多少，其实并不是如想像中的轻松， 相信未来会出现更多方便的 API 辅助开发。（放心接下来不会再有这么多 code 了 XD）

有了 Layout API，不管是自己实战或是拿別人写好的 Layout，你都可以直接如下方式使用：
```
.wrapper {
    display: layout('block-like');
}
```

### CSS Painting API
Painting API 与 Layout 类似，提供一个叫做 `registerPaint` 的方法：

定义 `Paint Method`，这边偷偷用到了待会要介紹的 `CSS Properties`：

```
registerPaint('simpleRect', class {
    static get inputProperties() { return ['--rect-color']; }
    paint(ctx, size, properties) {
        // 依據 properties 改變顏色
        const color = properties.get('--rect-color');
        ctx.fillStyle = color.cssText;
        ctx.fillRect(0, 0, size.width, size.height);
    }
});
```
宣告使用：
```
.div-1 {
    --rect-color: red;
    width: 50px;
    height: 50px;
    background-image: paint(simpleRect);
}
.div-2 {
    --rect-color: yellow;
    width: 100px;
    height: 100px;
    background-size: 50% 50%;
    background-image: paint(simpleRect);
}
```
`.div-1` 与 `.div-2` 就可以拥有各自定义宽高颜色的方形 `background-image`。

### Worklets
在上述的 `Layout API` 与 `Paint API` 中，我们都有撰写一个 JS文件，用来定义新的属性，然后在 CSS 文件中呼叫取用，你可能会觉得那个 JS 文件就直接像一般 Web 嵌入 JS 的方式一样即可， 但实际上并非如此，我们需要通过 `Worklets` 來帮我們载入。以上面的 Paint API 为例：

```
// add a Worklet
paintWorklet.addModule('simpleRect.js');
// WORKLET "simpleRect.js"
registerPaint('simpleRect', class {
    static get inputProperties() { return ['--rect-color']; }
    paint(ctx, size, properties) {
        // 依據 properties 改變顏色
        const color = properties.get('--rect-color');
        ctx.fillStyle = color.cssText;
        ctx.fillRect(0, 0, size.width, size.height);
    }
});
```
同理，Layout API 则是 `layoutWorklet.addModule('blockLike.js')`。

`Worklets` 光名字就有点像 `Web Worker` 了，都是独立于主要执行者之外，并且不直接与 DOM 互动。你可能会想那为何还需要有一個 Worklets？

因为 Houdini 是希望将开发者的程式码 hook 到 CSS engine 中运作，而根据规范內的叙述，web worker 相对笨重，不适合用来处理 CSS engine 這种可能会牵扯到数百万像素图片的工作。

所以可以推断，Worklets 的特点就是轻量以及生命周期较短。

共实除了 Layout Worklets 与 Paint Worklets 外，还有所谓的 Animation Worklet，虽然还沒有放入规范，但已经有在着手进行中，也有 [Polyfills](https://github.com/GoogleChrome/houdini-samples/tree/master/animation-worklet) 了，Chrome 的 Sticky Header 就是采用 Houdini 的 Animation Worklet。Twitter 的 [Header Effect](https://blog.hospodarets.com/demos/houdini-anim-twitter/) 也是采用 Animation Worklet Animation Worklet 是想介入 Render Pipeline 中的 Composite 步骤，也就是原本利用 JS 与 CSS 控制动画时，浏览器会重新执行的部分。

关于 Animation Worklet 的详细操作介绍可以看这份PPT: [houdini-codemotion](https://slides.com/malyw/houdini-codemotion#/48)

### CSS Parser API

Parser API 目前还是处在 Unofficial draft，但我相信如果这个 API 确认的话，对前端开发有绝对的帮助，她的概念是想让开发者能扩充浏览器解析 HTML、CSS 的功能， 也就是说，你可以想办法让他看得懂最新定义的 pseudo-classes 或甚至是 element-queries 等等，这样就能正确解析出 CSSOM，从此不用再等浏览器更新。

### CSS Typed OM
CSS Typed OM 就是 CSSOM 的強化版，最主要的功能在于将 CSSOM 所使用的字串值转换成具有型別意义的 JavaScript 表示形态，像是所有的 CSS Values 都有一个 base class interface：
```
interface CSSStyleValue {
    stringifier;
    static CSSStyleValue? parse(DOMString property, DOMString cssText);
    static sequence<CSSStyleValue>? parseAll(DOMString property, DOMString cssText);
};
```
你可以如下操作 CSS style: [(source from CSS Houdini- the bridge between CSS, JavaScript and the browser)](https://slides.com/malyw/houdini-codemotion#/27)
```
// CSS -> JS
const map = document.querySelector('.example').styleMap;
console.log( map.get('font-size') );
// CSSSimpleLength {value: 12, type: "px", cssText: "12px"}
// JS -> JS
console.log( new CSSUnitValue(5, "px") );
// CSSUnitValue{value:5,unit:"px",type:"length",cssText:"5px"}
// JS -> CSS
// set style "transform: translate3d(0px, -72.0588%, 0px);"
elem.outputStyleMap.set('transform',
    new CSSTransformValue([
        new CSSTranslation(
        0, new CSSSimpleLength(100 - currentPercent, '%'), 0
        )]));
```
根据 [Drafts](https://drafts.css-houdini.org/css-typed-om/) 的內容，有了型別定义，在 JavaScript 的操作上据说会有性能上的显著提升。此外，CSS Typed OM 也应用在 Parser API 与 CSS Properties API 上。

Font Metrics API
Font Metrics 也沒有出現在上方的 Houdini API on render pipeline 中，但它其实已经被写入 Draft 规范 中了。

老实说看不是很懂他的 spec 写的內容，但我猜测这东西的用途应该跟这篇文章 [Deep dive CSS: font metrics, line-height and vertical-align](https://iamvdo.me/en/blog/css-font-metrics-line-height-and-vertical-align) 其中提到一个问题有关，（里面非常详细的介绍了 font metrics、line-height 与 vertical-align 在网页上如何互相影响，推荐大家有空的话耐心阅读一番。）：

不同 `font-family` 在相同 `font-size` 下，所产生的 `span` 高度会不同。



要想控制 Font metrics，也就是控制字所占的宽高的话，目前可以先用 CSS Properties 來处理，根据已知字体的 font-metrics 动态算出我们要 apply 多少的 font-size：
```
p {
    /* 定義好我們已知字型的 Font metrics */
    /* font metrics */
    --font: Catamaran;
    --fm-capitalHeight: 0.68;
    --fm-descender: 0.54;
    --fm-ascender: 1.1;
    --fm-linegap: 0;
    /* 定義想要的高度 */
    --capital-height: 100;
    /* 設定 font-family */
    font-family: var(--font);
    /* 利用 Font metrics 的資訊與想定義的高度來計算出 font-size */
    --computedFontSize: (var(--capital-height) / var(--fm-capitalHeight));
    font-size: calc(var(--computedFontSize) * 1px);
}
```
而想必 `Font Metrics API `就是希望能 expose 出更方便的 API 來达成上述的事情。

总结

手动拼接字符串和各种奇怪错误的日子已经结束了!

- 更少的bug。例如数字值总是以数字形式返回，而不是字符串。
- el.style.opacity += 0.1; el.style.opacity === '0.30.1' // dragons! 
- 算术运算和单位转换。在绝对长度单位(例如 px -> cm)之间进行转换并进行基本的数学运算。 
- 数值范围限制和舍入。Typed OM 通过对值进行范围限制和舍入，以使其在属性的可接受范围内。 
- 更好的性能。浏览器必须做更少的工作序列化和反序列化字符串值。现在，对于 CSS 值，引擎可以对 JS
和 C++ 使用相似的理解。Tab Akins 已经展示了一些早期的性能基准测试，与使用旧的 CSSOM 和字符串相 比，Typed OM 的运行速度快了 ~30%。这对使用 requestionAnimationFrame() 处理快速 CSS 动画可能很重 要 。crbug.com/808933 可以追踪 Blink 的更多性能演示。
- 错误处理。新的解析方法带来了 CSS 世界中的错误处理。
- “我应该使用骆驼式的 CSS 名称还是字符串呢?” 你不再需要猜测名字是骆驼还或字符串(例如 el.style.backgroundColor vs el.style['background-color'])。Typed OM 中的 CSS 属性名称始终是字符串，与 您实际在 CSS 中编写的内容一致:)