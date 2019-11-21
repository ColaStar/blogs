# rollup

## 概念

Rollup是一个JavaScript模块打包工具;

可以将小块代码编译成大块复杂的代码。开发者可以使用ES2015模块和TypeScript，最终打包成一个独立的可运行在浏览器或者Node.js环境的文件（可以生成es6 module、commonjs、umd、amd、iife自执行、system规范的js文件）。

## 安装 `rollup` 

使用 `npm install --global rollup` 安装。执行 `rollup --help` 可以查看可用的选项和参数。

## 命令行编译
假如程序的入口文件是`main.js`,输出文件是`bundle.js`。

> 对于浏览器环境

对于浏览器环境：
```
rollup main.js --format iife --output bundle.js
```
> 对于 Node.js 环境：
```
rollup main.js --format cjs --output bundle.js
```
> 如果要在两种环境中都适用：
```
rollup main.js --format umd --name "myBundle" --output bundle.js
```
## Tree Shaking
Rollup能让打包文件体积很小，因为内部使用了tree-shaking机制。
### 2.1 概念
`tree-shaking`是能够在模块的层面上做到打包后的代码只包含被引用并被执行的模块，
而不被引用或者不被执行的模块被删除掉，以达到减包的效果。
### 2.2 处理范围
- 只能处理模块级别，消除引用但没有使用的模块，不能处理函数级别的冗余；
- 只能处理JavaScript相关冗余代码，不能处理CSS冗余代码
### 2.3 严格模式下不能处理函数级别的冗余的原因

类的新方法可以通过Object.assign()添加到prototype对象中，如：
```
class Person {
  public name:String
  constructor(name:String) {
    this.name = name
  }

}

Object.assign(Person.prototype,{
  getName() {
    console.log(this.name);
  },
  setName(name:String) {
    this.name = name
  }
})
console.log(Person.prototype);
```

在严格模式下，类内部的方法是不可枚举的，因为babel会将类内部的方法编译成Object.defineProperty()。
因为识别不到类内部的方法是否存在，也就不能知道究竟有没有用到过类内部的方法，
所以tree-shaking不能识别类内部的方法是否未被使用而删除掉。

### 2.4 module特征

- 只能作为模块顶层的语句出现
- import的模块名只能是字符串常量
- 模块依赖关系是确定的，和运行时的状态无关，可以进行可靠的静态分析。

**注意：在es6后才开始关注tree-shaking，是因为es6之前的模块化，是通过require引入一个模块，只有运行后才能知道引用了模块里的哪些方法。**
```
import {button,tab} from 'element-ui'
require('elememt-ui')
```
### 2.5 非严格模式下可以处理函数级别的冗余

在非严格模式下，类内部的方法编译后是直接加在原型链上的，变得可枚举，可以被识别并筛选
**但是，不建议使用非严格模式**。

### 2.6例子
除了使用 ES6 模块，Rollup 还可以静态分析导入模块，移除没用到的代码。这能尽量减小代码体积。

比如，对于 CommonJS，必须引入整体的工具或库文件：
```
var utils = require('utils');
var query = 'Rollup';

utils.ajax('https://api.example.com/?search=' + query).then(handleResponse);
```
如果使用了 ES6 模块，我们可以只导入需要的 ajax 函数：
```
import {ajax} from 'utils';
var query = 'Rollup';

ajax('https://api.example.com/?search=' + query).then(handleResponse);
```

## Rollup工程搭建

<a data-fancybox title="" href="https://raw.githubusercontent.com/ColaStar/static/master/images/rollup_工程图.png">![](https://raw.githubusercontent.com/ColaStar/static/master/images/rollup_工程图.png)</a>


### 3.2 安装rollup并且创建配置文件

#### 3.2.1 安装rollup
```
yarn add rollup --save-dev
```

#### 3.2.2 创建rollup.config.js
//一份配置过的
```
import json from 'rollup-plugin-json';

export defaut {
    input: './src/mian.js',  // 入口文件
    output: [
        {
            file: './dist/index.js', // 出口文件
            name: 'test' // 包的名字,
            format: 'umd' // 代码打包时的格式，这个格式可以前后端通用，除此之外还有其他格式：cjs，iife，es，amd
            minify: true // 代码是否压缩
            sourceMap:'inline'
        },
        {
            // 可同时输出多个文件
        }
    ],
     plugins: [
        postcss({
            plugins: [
                simplevars(),
                nested(),
                cssnext({
                warnForDuplicates: false,
                }),
                cssnano(),
            ],
            extensions: ['.css','.scss'],
        }),//处理css/.scss文件
        rollupTypescript(), //Typescript
        resolve({
            jsnext: true,
            main: true,
            browser: true,
            }),
        commonjs(),
        json(),
        babel({
        exclude: 'node_modules/**' // 只编译我们的源代码
        }),
        replace({
            exclude: 'node_modules/**',
            ENV: JSON.stringify(process.env.NODE_ENV || 'development'),
        }),
        (process.env.NODE_ENV === 'production' && uglify()),
        serve({
            // Launch in browser (default: false)
            open: true,

            // Show server address in console (default: true)
            verbose: false,

            // Folder to serve files from
            contentBase: '',

            // Multiple folders to serve from
            contentBase: ['build'],

            // Set to true to return index.html instead of 404
            historyApiFallback: true,

            // Options used in setting up server
            host: 'localhost',
            port: 10001
        })
    ]
}
```
### 3.3配置插件与npm包

> 3.3.1  rollup-plugin-json 插件

它允许 Rollup 从 JSON 文件中导入数据。

安装 rollup-plugin-json：
```
npm install --save-dev rollup-plugin-json
```

更新 src/main.js 文件，所以可以从 package.json 中读取数据：
```
import {version} from '../package.json';

export default function() {
    console.log('version: ' + version);
}
```

使用 npm run build 运行 Rollup 。结果如下所示：

```
'use strict';

var version = '1.0.0';

var main = function() {
    console.log('version ' + version);
};

module.exports = main;
```



> rollup-plugin-node-resolve

有时候，项目会依赖 npm 包。Rollup 和 Webpack、Browserify 不同，默认不知道如何处理包之间的关系 
--- 我们需要做一些配置。

举个例子，我们需要一个简单的依赖：the-answer，它会输出人生、宇宙等终极问题的答案：
```
npm install --save the-answer
# 简写形式：
npm i -S the-answer
```
如果我们更新了 src/main.js 文件...
```
import answer from 'the-answer';

export default function() {
    console.log('the answer is ' + answer);
}
```
然后运行 Rollup ...

我们会看到一条警告：
```
 'the-answer' is imported by src/main.js, but could not be resolved – treating it as an external dependency
```

输出的结果 bundle.js 依然可以在 Node.js 中使用，因为 import 指令变成了 CommonJS 的 require 指令，但是 the-answer 没有打包到结果中。为此，我们需要一个插件。

rollup-plugin-node-resolve 插件告诉 Rollup 如何搜寻外部依赖。安装命令如下...
```
npm install --save-dev rollup-plugin-node-resolve
```

然后添加到你的配置文件（最开始的工程图里有）

这次，当你再次运行 npm run build，就没有警告了 --- 输出文件包含引入的模块了。
> rollup-plugin-commonjs

有些库象 the-answer 一样，暴露了 ES6 风格的模块，可以如上所示引用。但是，目前 npm 上大多数模块使用了 CommonJS 风格。在此之前，需要将 CommonJS 转换为 ES2015，然后才能供 Rollup 享用。
rollup-plugin-commonjs 就是这样的插件。
注意，rollup-plugin-commonjs 需要在其他插件转换代码之前引入，这样可以避免 CommonJS 语法规范被其他插件破坏。

> rollup-plugin-commonjs与rollup-plugin-vue

配置roolup的vue环境


> rollup-plugin-babel

- 安装插件
```
yarn add rollup-plugin-babel babel-preset-latest  --save-dev
```

使用这个插件要注意版本问题，因为rollup的版本目前和babel的高版本还没有兼容，如果使用babel高版本会出现问题，所以安装插件时，如下：
```

{
    "babel-core": "^6.26.3",
    "babel-plugin-external-helpers": "^6.22.0",
    "babel-plugin-transform-runtime": "^6.23.0",
    "babel-preset-env": "^1.7.0",
    "babel-preset-es2015-rollup": "^3.0.0",
    "babel-preset-latest": "^6.24.1",
    "babel-preset-stage-2": "^6.24.1",
    "babel-register": "^6.26.0",
    "rimraf": "^2.6.2",
    "rollup": "^0.65.0",
    "rollup-plugin-babel": "^3.0.7",
    "uglify-js": "^3.4.9"
}

```

- 作用

用于在旧版浏览器或者环境中将es2015+转换为向后兼容的JavaScript版本。
- babel过程

1.编译：解析代码生成相同的代码
2.转换：所有语法的转换工作都是由插件完成的
3.生成：生成向后兼容的es5

- .babelrc文件
```
{
  "presets": [
    ["latest", {
      "es2015": {
        "modules": false
      }
    }]
  ],
  "plugins": [
    "external-helpers"
  ]
}
```
更新rollup.config.js文件

> 配置TypeScript

- 安装TypeScript
```
yarn add typescript ts-loader rollup-plugin-typescript2 --save-dev
yarn add awesome-typescript-loader --save
````
- tsconfig.json文件
```
{
  "compilerOptions": {
      "sourceMap": true, //代码映射
      "noImplicitAny": true, //强类型检查
      "module": "es2015", //组织代码方式
      "target": "es2015", //编译目标平台
      "allowJs": true, //允许使用js
      "allowSyntheticDefaultImports": true //允许从没有设置默认导出的模块中默认导入。这并不影响代码的显示，仅为了类型检查。
  },
  "include": [
      "./src/**/*"
  ]
}
```
- 更新rollup.config.js文件
```
import rollupTypescript from 'rollup-plugin-typescript2'
...
  plugins: [
    ...
    rollupTypescript(),
  ]
...
```
> 其他插件

- rollup-plugin-postcss ------rollup中集成PostCSS

- rollup-plugin-serve ---------提供静态服务器能力

- rollup-plugin-replace------- 可在源码中通过process.env.NODE_ENV用于构建区分Development与Production环境
- rollup-plugin-uglify---------压缩bundle文件
- rollup-watch

实时监听rollup代码更改，当代码发生变化时，会自动编译文件更新内容。
在配置文件中不需要配置该插件，只需要：
```
"scripts": {
    "build": "rollup -c",
    "dev": "rollup -c --watch",
    "pro": "SET NODE_ENV=production",
    "run": "npm run pro && npm run build",
    "test": "jest"
  },
```




