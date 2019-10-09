# 模块规范对比

## 深入 CommonJs 与 ES6 Module
目前主流的模块规范

UMD  
CommonJs  
es6 module  



## umd 模块（通用模块）


```
(function (global, factory) {
    typeof exports === 'object' &amp;&amp; typeof module !== 'undefined' ? module.exports = factory() :
    typeof define === 'function' &amp;&amp; define.amd ? define(factory) :
    (global.libName = factory());
}(this, (function () { 'use strict';})));
```

如果你在js文件头部看到这样的代码，那么这个文件使用的就是 UMD 规范
实际上就是 `amd` + `commonjs` + `全局变量` 这三种风格的结合
这段代码就是对当前运行环境的判断，如果是 `Node` 环境 就是使用 `CommonJs` 规范， 如果**不是**就判断是否为 `AMD` 环境， 最后导出全局变量
有了 UMD 后我们的代码和同时运行在 Node 和 浏览器上
所以现在前端大多数的库最后打包都使用的是 UMD 规范

## CommonJs
Nodejs 环境所使用的模块系统就是基于CommonJs规范实现的，我们现在所说的CommonJs规范也大多是指Node的模块系统

### 模块导出

关键字：`module.exports` `exports`

```
// foo.js

//一个一个 导出

module.exports.age = 1
module.exports.foo = function(){}
exports.a = 'hello'

//整体导出
module.exports = { age: 1, a: 'hello', foo:function(){} }

//整体导出不能用`exports` 用exports不能在导入的时候使用

exports = { age: 1, a: 'hello', foo:function(){} }
```
这里需要注意 `exports` 不能被赋值，可以理解为在模块开始前`exports = module.exports`， 因为赋值之后`exports`失去了 对`module.exports`的引用，成为了一个模块内的局部变量

### 模块导入
关键字：`require`

```
const foo = require('./foo.js')
console.log(foo.age) //1
```
> 模块导入规则：

假设以下目录为 `src/app/index.js` 的文件 调用 `require()`

1、`./moduleA `相对路径开头

在没有指定后缀名的情况下

先去寻找同级目录同级目录：`src/app/`

- `src/app/moduleA` 无后缀名文件 按照`javascript`解析
- `src/app/moduleA.js` js文件 按照`javascrip`t解析
- `src/app/moduleA.json` json文件 按照`json`解析
- `src/app/moduleA.node` node文件 按照加载的编译插件模块`dlopen`

同级目录没有 `moduleA` 文件会去找同级的 `moduleA目录`：`src/app/moduleA`

- `src/app/moduleA/package.json` 判断该目录是否有`package.json`文件， 如果有 找到`main`字段定义的文件返回， 如果 `main` 字段指向文件不存在 或 `main`字段不存在 或 `package.json`文件不存在向下执行
- `src/app/moduleA/index.js`
- `src/app/moduleA/index.json`
- `src/app/moduleA/index.node`

结束

2、`/module/moduleA `绝对路径开头

直接在/module/moduleA目录中寻找 `规则同上`

3、`react` 没有路径开头

没有路径开头则视为导入一个包

会先判断`moduleA`是否是一个核心模块 如`path`，`http`，优先导入核心模块
不是核心模块 会从当前文件的同级目录的`node_modules`寻找

- /src/app/node_modules/ 寻找规则同上 以导入react为例 

先 node_modules 下 react 文件 -> react.js -> react.json -> react.node ->react目录 -> react package.json main -> index.js -> index.json -> index.node 如果没找到 继续向父目录的node_modules中找
- /src/node_modules/
- /node_modules/  (全局)

直到最后找不到 结束

4、require wrapper

`Node`的模块 实际上可以理解为代码被包裹在一个函数包装器内

一个简单的require demo：

```
function wrapper (script) {
    return '(function (exports, require, module, __filename, __dirname) {' + 
        script +
     '\n})'
}

function require(id) {
 var cachedModule = Module._cache[id];
  if(cachedModule){
    return cachedModule.exports;
  }
  
  const module = { exports: {} }

  // 这里先将引用加入缓存 后面循环引用会说到
  Module._cache[id] = module

  //当然不是eval这么简单
  eval(wrapper('module.exports = "123"'))(module.exports, require, module, 'filename', 'dirname')


  return module.exports
}
```
也可以查看：[node module 源码](https://github.com/nodejs/node/blob/master/lib/internal/modules/cjs/loader.js)

从以上代码我们可以知道：

- 模块只执行一次 之后调用获取的 `module.exports` 都是缓存哪怕这个 `js` 还没执行完毕（因为先加入缓存后执行模块）

- 模块导出就是return这个变量的其实跟a = b赋值一样， 基本类型导出的是值， 引用类型导出的是引用地址
`exports` 和 `module.exports` 持有相同引用，因为最后导出的是 `module.exports`， 所以对`exports`进行赋值会导致`exports`操作的不再是`module.exports`的引用
### 循环引用
```
// a.js
module.exports.a = 1
var b = require('./b')
console.log(b)
module.exports.a = 2

// b.js
module.exports.b = 11
var a = require('./a')
console.log(a)
module.exports.b = 22

//main.js
var a = require('./a')
console.log(a)
```

运行此段代码结合上面的require demo，分析每一步过程：

1、执行 node main.js -> 第一行 require(a.js)，（node 执行也可以理解为调用了require方法，我们省略require(main.js)内容）

2、进入 require(a)方法： 判断缓存（无） -> 初始化一个 module -> 将 module 加入缓存 -> 执行模块 a.js 内容，（需要注意 是`先加入缓存， 后执行模块内容`）

3、a.js： 第一行导出 a = 1 -> 第二行 require(b.js)（a 只执行了第一行）

4、进入 require(b) 内 同 1 -> 执行模块 b.js 内容

5、b.js： 第一行 b = 11 -> 第二行 require(a.js)

6、require(a) 此时 a.js 是第二次调用 require -> 判断缓存（有）-> cachedModule.exports -> 回到 b.js（因为js对象引用问题 此时的 cachedModule.exports = { a: 1 }）

7、b.js：第三行 输出 { a: 1 } -> 第四行 修改 b = 22 -> 执行完毕回到 a.js

8、a.js：第二行 require 完毕 获取到 b -> 第三行 输出 { b: 22 } -> 第四行 导出 a = 2 -> 执行完毕回到 main.js

9、main.js：获取 a -> 第二行 输出 { a: 2 } -> 执行完毕

以上就是node的module模块解析和运行的大致规则

## es6 module
`ES6` 之前 `javascript` 一直没有属于自己的模块规范，所以社区制定了 `CommonJs规范`， `Node` 从 `Commonjs` 规范中借鉴了思想于是有了 `Node` 的 `module`，而 `AMD` 异步模块 也同样脱胎于 `Commonjs` 规范，之后有了运行在浏览器上的 `require.js`

### es6 module 基本语法：

> export
```
export * from 'module'; //重定向导出 不包括 module内的default

export { name1, name2, ..., nameN } from 'module'; // 重定向命名导出

export { import1 as name1, import2 as name2, ..., nameN } from 'module'; // 重定向重命名导出

export { name1, name2, …, nameN }; // 与之前声明的变量名绑定 命名导出

export { variable1 as name1, variable2 as name2, …, nameN }; // 重命名导出

export let name1 = 'name1'; // 声明命名导出 或者 var, const，function， function*, class

export default expression; // 默认导出

export default function () { ... } // 或者 function*, class

export default function name1() { ... } // 或者 function*, class

export { name1 as default, ... }; // 重命名为默认导出
```

> export 规则

- export * from '' 或者 export {} from ''，重定向导出，重定向的命名并不能在本模块使用，只是搭建一个桥梁，例如：这个a并不能在本模块内使用

- export {}， 与变量名绑定，命名导出

- export Declaration，声明的同时，命名导出， Declaration就是： var, let, const, function, function*, class 这一类的声明语句

- export default AssignmentExpression，默认导出， AssignmentExpression的 范围很广，可以大致理解 为除了声明Declaration（其实两者是有交叉的），`a=2`,`i++,``i/4`,`a===b,``obj[name]`,`name in obj`,`func()`,`new P()`,`[1,2,3]`,`function(){}`等等很多

> import
```
// 命名导出 module.js
let a = 1,b = 2
export { a, b }
export let c = 3

// 命名导入 main.js
import { a, b, c } from 'module'; // a: 1  b: 2  c: 3
import { a as newA, b, c as newC } from 'module'; // newA: 1  b: 2  newC: 3


// 默认导出 module.js
export default 1

// 默认导入 main.js
import defaultExport from 'module'; // defaultExport: 1


// 混合导出 module.js
let a = 1
export { a }
const b = 2
export { b }
export let c = 3
export default [1, 2, 3]

// 混合导入 main.js
import defaultExport, { a, b, c as newC} from 'module'; //defaultExport: [1, 2, 3]  a: 1  b: 2  newC: 3
import defaultExport, * as name from 'module'; //defaultExport: [1, 2, 3]  name: { a: 1, b: 2, c: 3 }
import * as name from 'module'; // name: { a: 1, b: 2, c: 3, default: [1, 2, 3] }


// module.js
Array.prototype.remove = function(){}

//副作用 只运行一个模块
import 'module'; // 执行module 不导出值  多次调用module.js只运行一次

//动态导入(异步导入)
var promise = import('module');
```

> import 规则

- import { } from 'module'， 导入module.js的命名导出
- import defaultExport from 'module'， 导入module.js的默认导出
- import * as name from 'module'， 将module.js的的所有导出合并为name的对象，key为导出的命名，默认导出的key为default
- import 'module'，副作用，只是运行module，不为了导出内容例如 polyfill，多次调用次语句只能执行一次
- import('module')，动态导入返回一个 Promise，TC39的stage-3阶段被提出 tc39 import

> ES6 module 特点

ES6 module的语法是静态的

**import 会自动提升到代码的顶层**

export 和 import 只能出现在代码的顶层，下面这段语法是错误的

```
 //if for while 等都无法使用
{
  export let a = 1

  import defaultExport from 'module'
}

true || export let a = 1
```
import 的导入名不能为字符串或在判断语句，下面代码是错误的

```
import 'defaultExport' from 'module'

let name = 'Export'
import 'default' + name from 'module'
```
**静态的语法意味着可以在编译时确定导入和导出，更加快速的查找依赖，可以使用lint工具对模块依赖进行检查，可以对导入导出加上类型信息进行静态的类型检查**

> ES6 module的导出是绑定的
- 使用 import 被导入的模块运行在严格模式下

- 使用 import 被导入的变量是只读的，可以理解默认为 const 装饰，无法被赋值

- 使用 import 被导入的变量是与原变量绑定/引用的，可以理解为 import 导入的变量无论是否为基本类型都是引用传递

```
// js中 基础类型是值传递
let a = 1
let b = a
b = 2
console.log(a,b) //1 2

// js中 引用类型是引用传递
let obj = {name:'obj'}
let obj2 = obj
obj2.name = 'obj2'
console.log(obj.name, obj2.name) // obj2  obj2


// es6 module 中基本类型也按引用传递
// foo.js
export let a = 1
export function count(){
  a++
}

// main.js
import { a, count } from './foo'
console.log(a) //1
count()
console.log(a) //2
```
上面这段代码就是 CommonJs 导出变量 和 ES6 导出变量的区别

> es module 循环引用

```
// bar.js
import { foo } from './foo'
console.log(foo);
export let bar = 'bar'

// foo.js
import { bar } from './bar'
console.log(bar);
export let foo = 'foo'

// main.js
import { bar } from './bar'
console.log(bar)  //
```
1、执行 main.js -> 导入 bar.js

2、bar.js -> 导入 foo.js

3、foo.js -> 导入 bar.js -> bar.js 已经执行过直接返回 -> 输出 bar -> `bar is not defined`， bar 未定义报错

我们可以使用function的方式解决：

```
// bar.js
import { foo } from './foo'
console.log(foo());
export function bar(){
  return 'bar'
}

// foo.js
import { bar } from './bar'
console.log(bar());
export function foo(){
  return 'foo'
}

// main.js
import { bar } from './bar'
console.log(bar)

```
因为函数声明会提示到文件顶部，所以就可以直接在 foo.js 调用还没执行完毕的bar.js的 bar 方法

## CommonJs 和 ES6 Module 的区别
其实上面我们已经说到了一些区别

- CommonJs导出的是变量的一份拷贝，ES6 Module导出的是变量的绑定（引用）
- CommonJs是单个值导出，ES6 Module可以导出多个
- CommonJs是动态语法可以写在判断里，ES6 Module静态语法只能写在顶层
- CommonJs的 this 是当前模块，ES6 Module的 this 是 undefined
易混淆点

### 模块语法与解构

module语法与解构语法很容易混淆，例如：

```
import { a } from 'module'

const { a } = require('module')
```

尽管看上去很像，但是不是同一个东西，这是两种完全不一样的语法与作用，ps:两个人撞衫了，穿一样的衣服你不能说这俩人就是同一个人

module 的语法： 上面有写 `import/export { a } / { a, b } / { a as c} FromClause`
解构 的语法：

```
let { a } = { a: 1 }
let { a = 2 } = { }
let { a: b } = { a: 1 }
let { a: b = 2, ...res } = { name:'a' }
let { a: b, obj: { name } } = { a: 1, obj: { name: '1' } }

function foo({a: []}) {}
```
他们是差别非常大的两个东西，一个是`模块导入导出`，一个是`获取对象的语法糖`

> 导出语法与对象属性简写

同样下面这段代码也容易混淆

```
let a = 1

export { a } // 导出语法
export default { a } // 属性简写 导出 { a: 1 } 对象

module.exports = { a } // 属性简写 导出 { a: 1 } 对象
```

`export default` 和 `module.exports` 是相似的

### ES6 module 支持 CommonJs 情况

先简单说一下各个环境的 ES6 module 支持 CommonJs 情况，后面单独说如何在不同环境中使用

因为 module.exports 很像 export default 所以 ES6模块 可以很方便兼容 CommonJs
在`ES6 module`中使用`CommonJs`规范，根据各个环境，打包工具不同也是不一样的

我们现在大多使用的是 `webpack` 进行项目构建打包，因为现在前端开发环境都是在 `Node` 环境原因，而 `npm` 的包都是 `CommonJs` 规范的，所以 `webpack` 对ES6模块进行扩展 支持 `CommonJs`，并支持node的导入npm包的规范

如果你使用 `rollup` ，想在`ES Module`中支持`Commonjs`规范就需要**下载**`rollup-plugin-commonjs`插件，想要导入`node_modules`下的包也需要`rollup-plugin-node-resolve`插件

如果你使用 `node`，可以在 .mjs 文件使用 ES6，也支持 `CommonJs` 查看 nodejs es-modules.md

**在浏览器环境 不支持CommonJs**

> node 与 打包工具webpack，rollup的导入 CommonJs 差异

```
// module.js
module.export.a = 1

// index.js webpack rollup
import * as a from './module'
console.log(a) // { a: 1, default: { a:1 } }

// index.mjs node
import * as a from './module'
console.log(a) // { default: { a:1 } }
node 只是把 module.exports 整体当做 export default
打包工具除了把 module.export 整体当做 export default，还把 module.export 的每一项 又当做 export 输出，这样做是为了更加简洁 
import defaultExport from './foo'， defaultExport.foo()
import { foo } from './foo'， foo()
```

> 使用 ES6 Module

可以在 [es6module example ](https://github.com/Li13/module)仓库中获取代码在本地进行测试验证

**浏览器中使用**

你需要起一个Web服务器来访问，双击本地运行 index.html 并不会执行 

`type=module 标签 我们可以对 script 标签的 type 属性加上 module`

先定义两个模块

```
// index.js
import module from './module.js'
console.log(module) // 123

// module.js
export default 123
在html中内联调用

&lt;!-- index.html --&gt; &lt;script type="module"&gt; import module from './module.js' console.log(module) // 123 &lt;/script&gt;
```
在html中内联调用
```
&lt;!-- index.html --&gt; &lt;script type="module" src="index.js"&gt;&lt;/script&gt; // 控制台 123
```
浏览器导入路径规则
```
https://example.com/apples.mjs
http://example.com/apples.js
//example.com/bananas
./strawberries.mjs.cgi
../lychees
/limes.jsx
data:text/javascript,export default 'grapes';
blob:https://whatwg.org/d0360e2f-caee-469f-9a2f-87d5b0456f6f

补充:

不加 后缀名 找不到具体的文件
后端可以修改接口/getjs?name=module这一类的，不过后端要返回 Content-Type: application/javascript 确保返回的是js,因为浏览器是根据 MIME type 识别的
因为 ES6 Module 在浏览器中兼容并不是很好，这里就不介绍浏览器支持情况了，我们一般不会直接在浏览器中使用

```
### Nodejs中使用
*[nodejs es-modules.md](https://github.com/nodejs/node-eps/blob/master/002-es-modules.md)*

在 Node v8.5.0 以上支持 ES Module，需要 .mjs扩展名
```
NOTE: DRAFT status does not mean ESM will be implemented in Node core. Instead that this is the standard, should Node core decide to implement ESM. At which time this draft would be moved to ACCEPTED.
（上面链接可以知道 ES Module的状态是 DRAFT， 属于起草阶段）
```
```
// module.mjs
export default 123

// index.mjs
import module from './module.mjs'
console.log(module) // 123
```
我们需要执行 `node --experimental-modules index.mjs` 来启动
会提示一个 ExperimentalWarning: The ESM module loader is experimental.该功能是实验性的（此提示不影响执行）
ES Module 中导入 CommonJs

```
// module.js
module.exports.a = 123 // module.exports 就相当于 export default

// index.mjs
import module from './module.js'
console.log(module) // { a: 123 }

import * as module from './module.js'
console.log(module) // { get default: { a: 123 } }

import { default as module } from './module.js';
console.log(module) // { a: 123 }

import module from 'module'; // 导入npm包 导入规则与 require 差不多
```

**导入路径规则与require差不多**

这里要注意 `module` 扩展名为 `.js`，`.mjs`专属于 `es module`，`import form`导入的文件后缀名只能是`.mjs`，在 `.mjs`中 `module`未定义， 所以调用 `module.exports，exports` 会报错

`node`中 `CommonJs` 导入 `es module` 只能使用 `import() `动态导入/异步导入

```
// es.mjs
let foo = {name: 'foo'};
export default foo;

export let a = 1

// cjs
import('./es').then((res)=&gt;{
  console.log(res) // { get default: {name: 'foo'}, a: 1 }
});
```
### webpack中使用

从 webpack2 就默认支持 es module 了，并默认支持 CommonJs，支持导入 npm包， 这里 import 语法上面写太多 就不再写了

## rollup中使用
`rollup` 专注于 `es module`，可以将 `es module` 打包为主流的模块规范，注意这里与 `webpack` 的区别，我们可以在 `webpack` 的 `js` 中使用 `Commonjs` 语法， 但是 `rollup` 不支持，`rollup`需要 `plugin` 支持，包括加载 `node_modules` 下的包 `form` `'react' `也需要 `plugin` 支持

可以看到 es module 在浏览器与node中兼容性差与实验功能的

我们大多时候在 打包工具 中使用


## Tree-shaking
在最后我们说一下经常跟 es module 一起出现的一个名词 `Tree-shaking`

`Tree-shaking `我们先直译一下 树木摇晃 就是 摇晃树木把上面枯死的树叶晃下来，在代码中就是把**没有用到的代码删除**

`Tree-shaking` 最早由 `rollup` 提出，之后 `webpack 2` 也开始支持

这都是基于 `es module` 模块特性的静态分析

> rollup

下面代码使用 `rollup` 进行打包：

```
// module.js
export let foo = 'foo'
export let bar = 'bar'

// index.js
import { foo } from './module'
console.log(foo) // foo
```
在线运行 我们可以修改例子与导出多种规范

打包结果：

```
let foo = 'foo';

console.log(foo); // foo
```
可以看到 rollup 打包结果非常的简洁，并去掉了没有用到的 bar
是否支持对导入 `CommonJs` 的规范进行 `Tree-shaking：`

```
// index.js
import { a } from './module'
console.log(a) // 1

// module.js
module.exports.a = 1
module.exports.b = 2
```
打包为 **``es module``**

```
var a_1 = 2;

console.log(a_1);
可以看到去掉了未使用的 b

webpack

```
> webpack
我们下面看看 `webpack` 的支持情况

```
// src/module.js
export function foo(){ return 'foo' }
export function bar(){ return 'bar' }

// src/index.js
import { foo } from './module'
console.log(foo())
```

执行 `npx webpack -p`（我们使用`webpack 4，0`配置，-p开启生成模式 自动压缩）

打包后我们在打包文件搜索 bar 没有搜到，bar被删除

我们将上面例子修改一下：

```
// src/module.js
module.exports.foo = function (){ return 'foo' }
module.exports.bar = function (){ return 'bar' }

// src/index.js
import { foo } from './module'
console.log(foo())
打包后搜索 bar 发现bar存在，webpack 并不支持对CommonJs 进行 Tree-shaking
```
## pkg.module
webpack 不支持 Commonjs Tree-shaking，但现在npm的包都是CommonJs规范的，这该怎么办呢 ？如果我发了一个新包是 es module 规范， 但是如果代码运行在 node 环境，没有经过打包 就会报错

有一种按需加载的方案

全路径导入，导入具体的文件：

```
// src/index.js
import remove from 'lodash/remove'
import add from 'lodash/add'

console.log(remove(), add())
使用一个还好，如果用多个的话会有很多 import 语句
还可以使用插件如 babel-plugin-lodash, & lodash-webpack-plugin
```
但我们不能发一个库就自己写插件

**这时就提出了在 package.json 加一个 module 的字段来指向 es module规范的文件，main -> CommonJs，那么module - es module pkg.module**

`webpack` 与 `rollup` 都支持 `pkg.module`

加了 module 字段 webpack 就可以识别我们的 es module，但是还有一个问题就是 babel

我们一般使用 babel 都会排除 node_modules，所以我们这个 pkg.module 只是的 es6 module必须是编译之后的 es5 代码，因为 babel 不会帮我们编译，我们的包就必须是 拥有 es6 module 规范的 es5 代码

如果你使用了 presets-env 因为会把我们的代码转为 CommonJs 所以就要设置 "presets": [["env", {"modules":false}] 不将es module 转为 CommonJs

> webpack 与 rollup 的区别

- 1.webpack 不支持导出 es6 module 规范，rollup 支持导出 es6 module
- 2.webpack 打包后代码很多冗余无法直接看，rollup 打包后的代码简洁，可读，像源码
- 3.webpack 可以进行代码分割，静态资源处理，HRM，rollup 专注于 es module，tree-shaking更加强大的，精简

如果是开发应用可以使用 webpack，因为可以进行代码分割，静态资源，HRM，插件

如果是开发类似 vue，react 等类库，rollup 更好一些，因为可以使你的代码精简，无冗余代码，执行更快,导出多种模块语法



## 参考链接
[ECMAScript® 2015 Language Specification sec-imports/
sec-exports](http://www.ecma-international.org/ecma-262/6.0/)

[MDN import](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Statements/import)

[github nodejs lib/module](https://github.com/nodejs/node/blob/master/lib/internal/modules/cjs/loader.js)

[github nodejs node-eps/002-es-modules](https://github.com/nodejs/node-eps/blob/master/002-es-modules.md)

[nodejs docs modules](https://nodejs.org/dist/latest-v10.x/docs/api/modules.html)

[Understanding ECMAScript 6](https://leanpub.com/understandinges6/read)

[ECMAScript 6 入门](https://www.jqhtml.com/7065.html)

[es6-modules-final](http://2ality.com/2014/09/es6-modules-final.html)



