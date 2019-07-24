(window.webpackJsonp=window.webpackJsonp||[]).push([[83],{201:function(e,s,n){"use strict";n.r(s);var a=n(0),t=Object(a.a)({},function(){var e=this,s=e.$createElement,n=e._self._c||s;return n("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[n("h1",{attrs:{id:"typescript入门"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#typescript入门","aria-hidden":"true"}},[e._v("#")]),e._v(" TypeScript入门")]),e._v(" "),n("h2",{attrs:{id:"简介"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#简介","aria-hidden":"true"}},[e._v("#")]),e._v(" 简介")]),e._v(" "),n("h3",{attrs:{id:"什么是typescript"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#什么是typescript","aria-hidden":"true"}},[e._v("#")]),e._v(" 什么是typeScript")]),e._v(" "),n("p",[e._v("首先，我对 TypeScript 的理解如下：")]),e._v(" "),n("p",[e._v("​TypeScript 是 JavaScript 的一个超集，主要提供了"),n("strong",[e._v("类型系统")]),e._v("和对 "),n("strong",[e._v("ES6")]),e._v(" 的支持，它由"),n("strong",[e._v("Microsoft")]),e._v(" 开发，代码开源于 "),n("strong",[e._v("GitHub")]),e._v(" 上。")]),e._v(" "),n("p",[e._v("其次引用官网的定义：")]),e._v(" "),n("blockquote",[n("p",[e._v("TypeScript is a typed superset of JavaScript that compiles to plain JavaScript. Any browser. Any host. Any OS. Open source.")])]),e._v(" "),n("p",[e._v("翻译成中文即是：")]),e._v(" "),n("blockquote",[n("p",[e._v("TypeScript 是 JavaScript 的类型的超集，它可以编译成纯 JavaScript。编译出来的 JavaScript 可以运行在任何浏览器上。TypeScript 编译工具可以运行在任何服务器和任何系统上。TypeScript 是开源的。")])]),e._v(" "),n("h3",{attrs:{id:"为什么选择-typescript"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#为什么选择-typescript","aria-hidden":"true"}},[e._v("#")]),e._v(" 为什么选择 TypeScript")]),e._v(" "),n("p",[e._v("​TypeScript 官网列举了一些优势，不过我更愿意自己总结一下：")]),e._v(" "),n("blockquote",[n("p",[e._v("TypeScript 增加了代码的可读性和可维护性")])]),e._v(" "),n("ul",[n("li",[n("p",[e._v("类型系统实际上是最好的文档，大部分的函数看看类型的定义就可以知道如何使用了")])]),e._v(" "),n("li",[n("p",[e._v("可以在编译阶段就发现大部分错误，这总比在运行时候出错好")])]),e._v(" "),n("li",[n("p",[e._v("增强了编辑器和 IDE 的功能，包括代码补全、接口提示、跳转到定义、重构等")])])]),e._v(" "),n("blockquote",[n("p",[e._v("TypeScript 非常包容")])]),e._v(" "),n("ul",[n("li",[n("p",[e._v("TypeScript 是 JavaScript 的超集，.js 文件可以直接重命名为 .ts 即可")])]),e._v(" "),n("li",[n("p",[e._v("即使不显式的定义类型，也能够自动做出类型推论​")])]),e._v(" "),n("li",[n("p",[e._v("可以定义从简单到复杂的几乎一切类型")])]),e._v(" "),n("li",[n("p",[e._v("即使 TypeScript 编译报错，也可以生成 JavaScript 文件")])]),e._v(" "),n("li",[n("p",[e._v("兼容第三方库，即使第三方库不是用 TypeScript 写的，也可以编写单独的类型文件供 "),n("code",[e._v("TypeScript")]),e._v(" 读取")])])]),e._v(" "),n("blockquote",[n("p",[e._v("TypeScript 拥有活跃的社区")])]),e._v(" "),n("ul",[n("li",[n("p",[e._v("大部分第三方库都有提供给 "),n("code",[e._v("TypeScript")]),e._v(" 的类型定义文件")])]),e._v(" "),n("li",[n("p",[n("code",[e._v("Google")]),e._v(" 开发的 "),n("code",[e._v("Angular2")]),e._v(" 就是使用 "),n("code",[e._v("TypeScript")]),e._v(" 编写的")])]),e._v(" "),n("li",[n("p",[n("code",[e._v("vue3")]),e._v(" 就是使用 "),n("code",[e._v("TypeScript")]),e._v(" 编写的")])]),e._v(" "),n("li",[n("p",[n("code",[e._v("TypeScript")]),e._v(" 拥抱了 "),n("code",[e._v("ES6")]),e._v(" 规范，也支持部分 "),n("code",[e._v("ESNext")]),e._v(" 草案的规范")])])]),e._v(" "),n("blockquote",[n("p",[e._v("TypeScript 的缺点")])]),e._v(" "),n("p",[e._v("任何事物都是有两面性的，我认为 TypeScript 的弊端在于：")]),e._v(" "),n("ul",[n("li",[n("p",[e._v("有一定的学习成本，需要理解接口（Interfaces）、泛型（Generics）、类（Classes）、枚举类型（Enums）等前端工程师可能不是很熟悉的概念")])]),e._v(" "),n("li",[n("p",[e._v("短期可能会增加一些开发成本，毕竟要多写一些类型的定义，不过对于一个需要长期维护的项目，TypeScript 能够减少其维护成本")])]),e._v(" "),n("li",[n("p",[e._v("集成到构建流程需要一些工作量")])]),e._v(" "),n("li",[n("p",[e._v("可能和一些库结合的不是很完美")])])]),e._v(" "),n("p",[e._v("所以大家可以根据自己团队和项目的情况判断是否需要使用 TypeScript。")]),e._v(" "),n("h2",{attrs:{id:"安装typescript"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#安装typescript","aria-hidden":"true"}},[e._v("#")]),e._v(" 安装typeScript")]),e._v(" "),n("p",[e._v("TypeScript 的命令行工具安装方法如下：")]),e._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("npm install -g typescript\n")])]),e._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[e._v("1")]),n("br")])]),n("p",[e._v("以上命令会在全局环境下安装 "),n("code",[e._v("tsc")]),e._v(" 命令，安装完成之后，我们就可以在任何地方执行 "),n("code",[e._v("tsc")]),e._v(" 命令了。")]),e._v(" "),n("p",[e._v("编译一个 TypeScript 文件很简单：")]),e._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("tsc hello.ts\n")])]),e._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[e._v("1")]),n("br")])]),n("p",[e._v("我们约定使用 "),n("code",[e._v("TypeScript")]),e._v(" 编写的文件以 "),n("code",[e._v(".ts")]),e._v(" 为后缀，用 "),n("code",[e._v("TypeScript")]),e._v(" 编写 "),n("code",[e._v("React")]),e._v(" 时，以 "),n("code",[e._v(".tsx")]),e._v(" 为后缀。")]),e._v(" "),n("blockquote",[n("p",[e._v("编辑器\nTypeScript 最大的优势便是增强了编辑器和 IDE 的功能，包括代码补全、接口提示、跳转到定义、重构等。")])]),e._v(" "),n("p",[e._v("主流的编辑器都支持 "),n("code",[e._v("TypeScript")]),e._v("，这里我推荐使用 "),n("code",[e._v("Visual Studio Code")])]),e._v(" "),n("p",[e._v("它是一款开源，跨终端的轻量级编辑器，内置了 "),n("code",[e._v("TypeScript")]),e._v(" 支持。\n另外它本身也是用 "),n("code",[e._v("TypeScript")]),e._v(" 编写的。")]),e._v(" "),n("h2",{attrs:{id:"hello-typescript"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#hello-typescript","aria-hidden":"true"}},[e._v("#")]),e._v(" Hello TypeScript")]),e._v(" "),n("p",[e._v("我们从一个简单的例子开始。")]),e._v(" "),n("p",[e._v("将以下代码复制到 hello.ts 中：")]),e._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("function sayHello(person: string) {\n    return 'Hello, ' + person;\n}\n​\nlet user = 'Tom';\nconsole.log(sayHello(user));\n")])]),e._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[e._v("1")]),n("br"),n("span",{staticClass:"line-number"},[e._v("2")]),n("br"),n("span",{staticClass:"line-number"},[e._v("3")]),n("br"),n("span",{staticClass:"line-number"},[e._v("4")]),n("br"),n("span",{staticClass:"line-number"},[e._v("5")]),n("br"),n("span",{staticClass:"line-number"},[e._v("6")]),n("br")])]),n("p",[e._v("然后执行")]),e._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("tsc hello.ts\n")])]),e._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[e._v("1")]),n("br")])]),n("p",[e._v("这时候会生成一个编译好的文件 hello.js：")]),e._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("function sayHello(person) {\n    return 'Hello, ' + person;\n}\nvar user = 'Tom';\nconsole.log(sayHello(user));\n")])]),e._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[e._v("1")]),n("br"),n("span",{staticClass:"line-number"},[e._v("2")]),n("br"),n("span",{staticClass:"line-number"},[e._v("3")]),n("br"),n("span",{staticClass:"line-number"},[e._v("4")]),n("br"),n("span",{staticClass:"line-number"},[e._v("5")]),n("br")])]),n("p",[n("code",[e._v("TypeScript")]),e._v(" 中，使用 "),n("code",[e._v(":")]),e._v("指定变量的类型，"),n("code",[e._v(":")]),n("strong",[e._v("的前后有没有空格都可以")]),e._v("。")]),e._v(" "),n("p",[e._v("上述例子中，我们用 : 指定 "),n("code",[e._v("person")]),e._v(" 参数类型为 string。但是编译为 js 之后，并没有什么检查的代码被插入进来。")]),e._v(" "),n("p",[n("strong",[e._v("TypeScript 只会进行静态检查，如果发现有错误，编译的时候就会报错。")])]),e._v(" "),n("p",[e._v("let 是 ES6 中的关键字，和 var 类似，用于定义一个局部变量，可以参阅 let 和 const 命令。")]),e._v(" "),n("p",[e._v("下面尝试把这段代码编译一下：")]),e._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("function sayHello(person: string) {\n    return 'Hello, ' + person;\n}\n​\nlet user = [0, 1, 2];\nconsole.log(sayHello(user));\n")])]),e._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[e._v("1")]),n("br"),n("span",{staticClass:"line-number"},[e._v("2")]),n("br"),n("span",{staticClass:"line-number"},[e._v("3")]),n("br"),n("span",{staticClass:"line-number"},[e._v("4")]),n("br"),n("span",{staticClass:"line-number"},[e._v("5")]),n("br"),n("span",{staticClass:"line-number"},[e._v("6")]),n("br")])]),n("p",[n("strong",[e._v("编辑器中会提示错误，编译的时候也会出错：")])]),e._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("index.ts(6,22): error TS2345: Argument of type 'number[]' is not assignable to parameter of type 'string'.\n")])]),e._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[e._v("1")]),n("br")])]),n("p",[e._v("但是还是生成了 js 文件：")]),e._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("function sayHello(person) {\n    return 'Hello, ' + person;\n}\nvar user = [0, 1, 2];\nconsole.log(sayHello(user));\n")])]),e._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[e._v("1")]),n("br"),n("span",{staticClass:"line-number"},[e._v("2")]),n("br"),n("span",{staticClass:"line-number"},[e._v("3")]),n("br"),n("span",{staticClass:"line-number"},[e._v("4")]),n("br"),n("span",{staticClass:"line-number"},[e._v("5")]),n("br")])]),n("p",[n("strong",[e._v("TypeScript 编译的时候即使报错了，还是会生成编译结果")]),e._v("，我们仍然可以使用这个编译之后的文件。")]),e._v(" "),n("p",[e._v("如果要在报错的时候终止 "),n("code",[e._v("js")]),e._v(" 文件的生成，可以在 "),n("code",[e._v("tsconfig.json")]),e._v(" 中配置 "),n("code",[e._v("noEmitOnError")]),e._v(" 即可。关于 "),n("code",[e._v("tsconfig.json")]),e._v("，请参阅"),n("a",{attrs:{href:"https://zhongsp.gitbooks.io/typescript-handbook/content/doc/handbook/tsconfig.json.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("官方手册（中文版）"),n("OutboundLink")],1),e._v("。")]),e._v(" "),n("h2",{attrs:{id:"基础类型"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#基础类型","aria-hidden":"true"}},[e._v("#")]),e._v(" 基础类型")]),e._v(" "),n("h3",{attrs:{id:"原始数据类型"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#原始数据类型","aria-hidden":"true"}},[e._v("#")]),e._v(" 原始数据类型")]),e._v(" "),n("h4",{attrs:{id:"布尔值"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#布尔值","aria-hidden":"true"}},[e._v("#")]),e._v(" 布尔值")]),e._v(" "),n("p",[e._v("布尔值是最基础的数据类型，在 "),n("code",[e._v("TypeScript")]),e._v(" 中，使用 "),n("code",[e._v("boolean")]),e._v(" 定义布尔值类型")]),e._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("//布尔值\nlet boolean = true;\nlet isflag:boolean = true\nlet isdone:boolean = false\n\n//编译通过\nvar boolean = true;\nvar isflag = true;\nvar isdone = false;\n")])]),e._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[e._v("1")]),n("br"),n("span",{staticClass:"line-number"},[e._v("2")]),n("br"),n("span",{staticClass:"line-number"},[e._v("3")]),n("br"),n("span",{staticClass:"line-number"},[e._v("4")]),n("br"),n("span",{staticClass:"line-number"},[e._v("5")]),n("br"),n("span",{staticClass:"line-number"},[e._v("6")]),n("br"),n("span",{staticClass:"line-number"},[e._v("7")]),n("br"),n("span",{staticClass:"line-number"},[e._v("8")]),n("br"),n("span",{staticClass:"line-number"},[e._v("9")]),n("br")])]),n("p",[e._v("注意，使用构造函数 "),n("code",[e._v("Boolean")]),e._v(" 创造的对象不是布尔值：")]),e._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("let createdByNewBoolean: boolean = new Boolean(1);\n\n// index.ts(1,5): error TS2322: Type 'Boolean' is not assignable to type 'boolean'.\n// 后面约定，注释中标出了编译报错的代码片段，表示编译未通过\n")])]),e._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[e._v("1")]),n("br"),n("span",{staticClass:"line-number"},[e._v("2")]),n("br"),n("span",{staticClass:"line-number"},[e._v("3")]),n("br"),n("span",{staticClass:"line-number"},[e._v("4")]),n("br")])]),n("p",[e._v("事实上 "),n("code",[e._v("new Boolean()")]),e._v(" 返回的是一个 "),n("code",[e._v("Boolean")]),e._v(" "),n("strong",[e._v("对象")]),e._v("：")]),e._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("let createdByNewBoolean: Boolean = new Boolean(1);\n")])]),e._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[e._v("1")]),n("br")])]),n("p",[e._v("直接调用 "),n("code",[e._v("Boolean")]),e._v(" 也可以返回一个 "),n("code",[e._v("boolean")]),e._v(" 类型：")]),e._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("let createdByBoolean: boolean = Boolean(1);\n")])]),e._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[e._v("1")]),n("br")])]),n("p",[e._v("在 "),n("code",[e._v("TypeScript")]),e._v(" "),n("code",[e._v("中，boolean")]),e._v(" 是 "),n("code",[e._v("JavaScript")]),e._v(" 中的基本类型，而 "),n("code",[e._v("Boolean")]),e._v(" 是 "),n("code",[e._v("JavaScript")]),e._v(" 中的构造函数。其他基本类型（除了 "),n("code",[e._v("null")]),e._v(" 和 "),n("code",[e._v("undefined")]),e._v("）一样，不再赘述。")]),e._v(" "),n("h4",{attrs:{id:"数值"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#数值","aria-hidden":"true"}},[e._v("#")]),e._v(" 数值")]),e._v(" "),n("p",[e._v("使用 number 定义数值类型：")]),e._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("let decLiteral: number = 6;\nlet hexLiteral: number = 0xf00d;\n// ES6 中的二进制表示法\nlet binaryLiteral: number = 0b1010;\n// ES6 中的八进制表示法\nlet octalLiteral: number = 0o744;\nlet notANumber: number = NaN;\nlet infinityNumber: number = Infinity;\n\n//编译结果\nvar decLiteral = 6;\nvar hexLiteral = 0xf00d;\n// ES6 中的二进制表示法\nvar binaryLiteral = 10;\n// ES6 中的八进制表示法\nvar octalLiteral = 484;\nvar notANumber = NaN;\nvar infinityNumber = Infinity;\n")])]),e._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[e._v("1")]),n("br"),n("span",{staticClass:"line-number"},[e._v("2")]),n("br"),n("span",{staticClass:"line-number"},[e._v("3")]),n("br"),n("span",{staticClass:"line-number"},[e._v("4")]),n("br"),n("span",{staticClass:"line-number"},[e._v("5")]),n("br"),n("span",{staticClass:"line-number"},[e._v("6")]),n("br"),n("span",{staticClass:"line-number"},[e._v("7")]),n("br"),n("span",{staticClass:"line-number"},[e._v("8")]),n("br"),n("span",{staticClass:"line-number"},[e._v("9")]),n("br"),n("span",{staticClass:"line-number"},[e._v("10")]),n("br"),n("span",{staticClass:"line-number"},[e._v("11")]),n("br"),n("span",{staticClass:"line-number"},[e._v("12")]),n("br"),n("span",{staticClass:"line-number"},[e._v("13")]),n("br"),n("span",{staticClass:"line-number"},[e._v("14")]),n("br"),n("span",{staticClass:"line-number"},[e._v("15")]),n("br"),n("span",{staticClass:"line-number"},[e._v("16")]),n("br"),n("span",{staticClass:"line-number"},[e._v("17")]),n("br"),n("span",{staticClass:"line-number"},[e._v("18")]),n("br")])]),n("p",[e._v("其中 0b1010 和 0o744 是 ES6 中的二进制和八进制表示法，它们会被编译为十进制数字。")]),e._v(" "),n("h4",{attrs:{id:"字符串"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#字符串","aria-hidden":"true"}},[e._v("#")]),e._v(" 字符串")]),e._v(" "),n("p",[e._v("使用 "),n("code",[e._v("string")]),e._v(" 定义字符串类型(可以使用双引号（"),n("code",[e._v('"')]),e._v("）或单引号（`）表示字符串)：")]),e._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v('let name: string = "bob";\nname = "smith";\n')])]),e._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[e._v("1")]),n("br"),n("span",{staticClass:"line-number"},[e._v("2")]),n("br")])]),n("p",[e._v("你还可以使用模版字符串，它可以定义多行文本和内嵌表达式。 这种字符串是被反引号包围（`），并且以${ expr }这种形式嵌入表达式")]),e._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("let name: string = `Gene`;\nlet age: number = 37;\nlet sentence: string = `Hello, my name is ${ name }.\n\nI'll be ${ age + 1 } years old next month.`;\n\n")])]),e._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[e._v("1")]),n("br"),n("span",{staticClass:"line-number"},[e._v("2")]),n("br"),n("span",{staticClass:"line-number"},[e._v("3")]),n("br"),n("span",{staticClass:"line-number"},[e._v("4")]),n("br"),n("span",{staticClass:"line-number"},[e._v("5")]),n("br"),n("span",{staticClass:"line-number"},[e._v("6")]),n("br")])]),n("p",[e._v("这与下面定义"),n("code",[e._v("sentence")]),e._v("的方式效果相同：")]),e._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v('let sentence: string = "Hello, my name is " + name + ".\\n\\n" +\n    "I\'ll be " + (age + 1) + " years old next month.";\n')])]),e._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[e._v("1")]),n("br"),n("span",{staticClass:"line-number"},[e._v("2")]),n("br")])]),n("h3",{attrs:{id:"数组"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#数组","aria-hidden":"true"}},[e._v("#")]),e._v(" 数组")]),e._v(" "),n("p",[n("code",[e._v("TypeScript")]),e._v("像"),n("code",[e._v("JavaScript")]),e._v("一样可以操作数组元素。 有两种方式可以定义数组。 第一种，可以在元素类型后面接上 "),n("code",[e._v("[]")]),e._v("，表示由此类型元素组成的一个数组：")]),e._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("let list: number[] = [1, 2, 3];\nlet arr1: string[] = [undefined, '2'];\n")])]),e._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[e._v("1")]),n("br"),n("span",{staticClass:"line-number"},[e._v("2")]),n("br")])]),n("p",[e._v("第二种方式是使用数组泛型，Array<元素类型>：")]),e._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("let list: Array<number> = [1, 2, 3];\n")])]),e._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[e._v("1")]),n("br")])]),n("h3",{attrs:{id:"枚举"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#枚举","aria-hidden":"true"}},[e._v("#")]),e._v(" 枚举")]),e._v(" "),n("p",[n("code",[e._v("enum")]),e._v("类型是对JavaScript标准数据类型的一个补充。 像C#等其它语言一样，使用枚举类型可以为一组数值赋予友好的名字。")]),e._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("enum Color {Red, Green, Blue}\nlet c: Color = Color.Green;\n\nconsole.log(Color)\n\n编译结果\n\nvar Color;\n(function (Color) {\n    Color[Color[\"Red\"] = 0] = \"Red\";\n    Color[Color[\"Green\"] = 1] = \"Green\";\n    Color[Color[\"Blue\"] = 2] = \"Blue\";\n})(Color || (Color = {}));\nvar c = Color.Green;\n\nconsole.log(Color);  //{ '0': 'Red', '1': 'Green', '2': 'Blue', Red: 0, Green: 1, Blue: 2 }\nconsole.log(c);  //1\n\n")])]),e._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[e._v("1")]),n("br"),n("span",{staticClass:"line-number"},[e._v("2")]),n("br"),n("span",{staticClass:"line-number"},[e._v("3")]),n("br"),n("span",{staticClass:"line-number"},[e._v("4")]),n("br"),n("span",{staticClass:"line-number"},[e._v("5")]),n("br"),n("span",{staticClass:"line-number"},[e._v("6")]),n("br"),n("span",{staticClass:"line-number"},[e._v("7")]),n("br"),n("span",{staticClass:"line-number"},[e._v("8")]),n("br"),n("span",{staticClass:"line-number"},[e._v("9")]),n("br"),n("span",{staticClass:"line-number"},[e._v("10")]),n("br"),n("span",{staticClass:"line-number"},[e._v("11")]),n("br"),n("span",{staticClass:"line-number"},[e._v("12")]),n("br"),n("span",{staticClass:"line-number"},[e._v("13")]),n("br"),n("span",{staticClass:"line-number"},[e._v("14")]),n("br"),n("span",{staticClass:"line-number"},[e._v("15")]),n("br"),n("span",{staticClass:"line-number"},[e._v("16")]),n("br"),n("span",{staticClass:"line-number"},[e._v("17")]),n("br"),n("span",{staticClass:"line-number"},[e._v("18")]),n("br")])]),n("p",[e._v("默认情况下，"),n("strong",[e._v("从0开始为元素编号")]),e._v("。 你也可以手动的指定成员的数值。 例如，我们将上面的例子改成从 1开始编号：")]),e._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("enum Color {Red = 1, Green, Blue}\nlet c: Color = Color.Green;\n\nconsole.log(Color);  //{ '1': 'Red', '2': 'Green', '3': 'Blue', Red: 1, Green: 2, Blue: 3 }\n")])]),e._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[e._v("1")]),n("br"),n("span",{staticClass:"line-number"},[e._v("2")]),n("br"),n("span",{staticClass:"line-number"},[e._v("3")]),n("br"),n("span",{staticClass:"line-number"},[e._v("4")]),n("br")])]),n("p",[e._v("或者，全部都采用手动赋值：")]),e._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("enum Color {Red = 1, Green = 2, Blue = 4}\nlet c: Color = Color.Green;\n\n{ '1': 'Red', '2': 'Green', '4': 'Blue', Red: 1, Green: 2, Blue: 4 }\n")])]),e._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[e._v("1")]),n("br"),n("span",{staticClass:"line-number"},[e._v("2")]),n("br"),n("span",{staticClass:"line-number"},[e._v("3")]),n("br"),n("span",{staticClass:"line-number"},[e._v("4")]),n("br")])]),n("p",[e._v("枚举类型提供的一个便利是你可以由枚举的值得到它的名字。 例如，我们知道数值为2，但是不确定它映射到Color里的哪个名字，我们可以查找相应的名字：")]),e._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("enum Color {Red = 1, Green, Blue}\nlet colorName: string = Color[2];\n\nconsole.log(colorName);  // 显示'Green'因为上面代码里它的值是2\n")])]),e._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[e._v("1")]),n("br"),n("span",{staticClass:"line-number"},[e._v("2")]),n("br"),n("span",{staticClass:"line-number"},[e._v("3")]),n("br"),n("span",{staticClass:"line-number"},[e._v("4")]),n("br")])]),n("h3",{attrs:{id:"任意值any"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#任意值any","aria-hidden":"true"}},[e._v("#")]),e._v(" 任意值Any")]),e._v(" "),n("p",[e._v("有时候，我们会想要为那些在编程阶段还不清楚类型的变量指定一个类型。 这些值可能来自于动态的内容，比如来自用户输入或第三方代码库。 这种情况下，我们不希望类型检查器对这些值进行检查而是直接让它们通过编译阶段的检查。 那么我们可以使用 any类型来标记这些变量：")]),e._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v('let notSure: any = 4;\nnotSure = "maybe a string instead";\nnotSure = false; // okay, definitely a boolean\n')])]),e._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[e._v("1")]),n("br"),n("span",{staticClass:"line-number"},[e._v("2")]),n("br"),n("span",{staticClass:"line-number"},[e._v("3")]),n("br")])]),n("p",[e._v("在对现有代码进行改写的时候，any类型是十分有用的，它允许你在编译时可选择地包含或移除类型检查。 你可能认为 Object有相似的作用，就像它在其它语言中那样。 但是 Object类型的变量只是允许你给它赋任意值 - 但是却不能够在它上面调用任意的方法，即便它真的有这些方法：")]),e._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("let notSure: any = 4;\nnotSure.ifItExists(); // okay, ifItExists might exist at runtime\nnotSure.toFixed(); // okay, toFixed exists (but the compiler doesn't check)\n\nlet prettySure: Object = 4;\nprettySure.toFixed(); // Error: Property 'toFixed' doesn't exist on type 'Object'.\n")])]),e._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[e._v("1")]),n("br"),n("span",{staticClass:"line-number"},[e._v("2")]),n("br"),n("span",{staticClass:"line-number"},[e._v("3")]),n("br"),n("span",{staticClass:"line-number"},[e._v("4")]),n("br"),n("span",{staticClass:"line-number"},[e._v("5")]),n("br"),n("span",{staticClass:"line-number"},[e._v("6")]),n("br")])]),n("p",[e._v("当你只知道一部分数据的类型时，any类型也是有用的。 比如，你有一个数组，它包含了不同的类型的数据：")]),e._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v('let list: any[] = [1, true, "free"];\n\nlist[1] = 100;\n')])]),e._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[e._v("1")]),n("br"),n("span",{staticClass:"line-number"},[e._v("2")]),n("br"),n("span",{staticClass:"line-number"},[e._v("3")]),n("br")])]),n("p",[e._v("变量如果在声明的时候，未指定其类型，那么它会被识别为任意值类型：")]),e._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("let something;\nsomething = 'seven';\nsomething = 7;\n\nsomething.setName('Tom');\n\n等价于\nlet something: any;\nsomething = 'seven';\nsomething = 7;\n\nsomething.setName('Tom');\n")])]),e._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[e._v("1")]),n("br"),n("span",{staticClass:"line-number"},[e._v("2")]),n("br"),n("span",{staticClass:"line-number"},[e._v("3")]),n("br"),n("span",{staticClass:"line-number"},[e._v("4")]),n("br"),n("span",{staticClass:"line-number"},[e._v("5")]),n("br"),n("span",{staticClass:"line-number"},[e._v("6")]),n("br"),n("span",{staticClass:"line-number"},[e._v("7")]),n("br"),n("span",{staticClass:"line-number"},[e._v("8")]),n("br"),n("span",{staticClass:"line-number"},[e._v("9")]),n("br"),n("span",{staticClass:"line-number"},[e._v("10")]),n("br"),n("span",{staticClass:"line-number"},[e._v("11")]),n("br"),n("span",{staticClass:"line-number"},[e._v("12")]),n("br")])]),n("h3",{attrs:{id:"void"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#void","aria-hidden":"true"}},[e._v("#")]),e._v(" Void")]),e._v(" "),n("p",[e._v("使用 "),n("code",[e._v(":void")]),e._v(" 来表示一个函数没有一个返回值")]),e._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v('function warnUser(): void {\n    console.log("This is my warning message");\n}\n')])]),e._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[e._v("1")]),n("br"),n("span",{staticClass:"line-number"},[e._v("2")]),n("br"),n("span",{staticClass:"line-number"},[e._v("3")]),n("br")])]),n("p",[e._v("声明一个void类型的变量没有什么大用，因为你只能为它赋予undefined和null：")]),e._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("let unusable: void = undefined;\n")])]),e._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[e._v("1")]),n("br")])]),n("h3",{attrs:{id:"null-和-undefined"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#null-和-undefined","aria-hidden":"true"}},[e._v("#")]),e._v(" Null 和 Undefined")]),e._v(" "),n("p",[e._v("TypeScript里，"),n("code",[e._v("undefined")]),e._v("和"),n("code",[e._v("null")]),e._v("两者各自有自己的类型分别叫做"),n("code",[e._v("undefined")]),e._v("和"),n("code",[e._v("null")]),e._v("。 和 "),n("code",[e._v("void")]),e._v("相似，它们的本身的类型用处不是很大：")]),e._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("// Not much else we can assign to these variables!\nlet u: undefined = undefined;\nlet n: null = null;\n")])]),e._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[e._v("1")]),n("br"),n("span",{staticClass:"line-number"},[e._v("2")]),n("br"),n("span",{staticClass:"line-number"},[e._v("3")]),n("br")])]),n("p",[e._v("默认情况下"),n("code",[e._v("null")]),e._v("和"),n("code",[e._v("undefined")]),e._v("是"),n("strong",[e._v("所有类型的子类型")]),e._v("。 就是说你可以把 "),n("code",[e._v("null")]),e._v("和"),n("code",[e._v("undefined")]),e._v("赋值给"),n("code",[e._v("number")]),e._v("类型的变量。")]),e._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("let v:number = undefined;\nlet v:number = null;\n")])]),e._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[e._v("1")]),n("br"),n("span",{staticClass:"line-number"},[e._v("2")]),n("br")])]),n("h3",{attrs:{id:"never"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#never","aria-hidden":"true"}},[e._v("#")]),e._v(" Never")]),e._v(" "),n("p",[n("code",[e._v("never")]),e._v("类型表示的是那些永不存在的值的类型。 例如， "),n("code",[e._v("never")]),e._v("类型是那些总是会抛出异常或根本就不会有返回值的函数表达式或箭头函数表达式的返回值类型； 变量也可能是 "),n("code",[e._v("never")]),e._v("类型，当它们被永不为真的类型保护所约束时。")]),e._v(" "),n("p",[n("code",[e._v("never")]),e._v("类型是任何类型的子类型，也可以赋值给任何类型；然而，没有类型是"),n("code",[e._v("never")]),e._v("的子类型或可以赋值给"),n("code",[e._v("never")]),e._v("类型（除了never本身之外）。 即使 "),n("code",[e._v("any")]),e._v("也不可以赋值给"),n("code",[e._v("never")]),e._v("。")]),e._v(" "),n("p",[e._v("下面是一些返回never类型的函数：")]),e._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v('// 返回never的函数必须存在无法达到的终点\nfunction error(message: string): never {\n    throw new Error(message);\n}\n\n// 推断的返回值类型为never\nfunction fail() {\n    return error("Something failed");\n}\n\n// 返回never的函数必须存在无法达到的终点\nfunction infiniteLoop(): never {\n    while (true) {\n    }\n}\n')])]),e._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[e._v("1")]),n("br"),n("span",{staticClass:"line-number"},[e._v("2")]),n("br"),n("span",{staticClass:"line-number"},[e._v("3")]),n("br"),n("span",{staticClass:"line-number"},[e._v("4")]),n("br"),n("span",{staticClass:"line-number"},[e._v("5")]),n("br"),n("span",{staticClass:"line-number"},[e._v("6")]),n("br"),n("span",{staticClass:"line-number"},[e._v("7")]),n("br"),n("span",{staticClass:"line-number"},[e._v("8")]),n("br"),n("span",{staticClass:"line-number"},[e._v("9")]),n("br"),n("span",{staticClass:"line-number"},[e._v("10")]),n("br"),n("span",{staticClass:"line-number"},[e._v("11")]),n("br"),n("span",{staticClass:"line-number"},[e._v("12")]),n("br"),n("span",{staticClass:"line-number"},[e._v("13")]),n("br"),n("span",{staticClass:"line-number"},[e._v("14")]),n("br"),n("span",{staticClass:"line-number"},[e._v("15")]),n("br")])]),n("h3",{attrs:{id:"object"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#object","aria-hidden":"true"}},[e._v("#")]),e._v(" Object")]),e._v(" "),n("p",[n("code",[e._v("object")]),e._v("表示非原始类型，也就是除"),n("code",[e._v("number")]),e._v("，"),n("code",[e._v("string")]),e._v("，"),n("code",[e._v("boolean")]),e._v("，"),n("code",[e._v("symbol")]),e._v("，"),n("code",[e._v("null")]),e._v("或"),n("code",[e._v("undefined")]),e._v("之外的类型。")]),e._v(" "),n("p",[e._v("使用"),n("code",[e._v("object")]),e._v("类型，就可以更好的表示像"),n("code",[e._v("Object.create")]),e._v("这样的"),n("code",[e._v("API")]),e._v("。例如：")]),e._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v('declare function create(o: object | null): void;\n\ncreate({ prop: 0 }); // OK\ncreate(null); // OK\n\ncreate(42); // Error\ncreate("string"); // Error\ncreate(false); // Error\ncreate(undefined); // Error\n')])]),e._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[e._v("1")]),n("br"),n("span",{staticClass:"line-number"},[e._v("2")]),n("br"),n("span",{staticClass:"line-number"},[e._v("3")]),n("br"),n("span",{staticClass:"line-number"},[e._v("4")]),n("br"),n("span",{staticClass:"line-number"},[e._v("5")]),n("br"),n("span",{staticClass:"line-number"},[e._v("6")]),n("br"),n("span",{staticClass:"line-number"},[e._v("7")]),n("br"),n("span",{staticClass:"line-number"},[e._v("8")]),n("br"),n("span",{staticClass:"line-number"},[e._v("9")]),n("br")])])])},[],!1,null,null,null);s.default=t.exports}}]);