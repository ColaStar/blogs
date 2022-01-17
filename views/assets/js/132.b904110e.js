(window.webpackJsonp=window.webpackJsonp||[]).push([[132],{535:function(s,e,n){"use strict";n.r(e);var a=n(56),t=Object(a.a)({},(function(){var s=this,e=s.$createElement,n=s._self._c||e;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("h1",{attrs:{id:"npm-脚本"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#npm-脚本"}},[s._v("#")]),s._v(" npm 脚本")]),s._v(" "),n("h2",{attrs:{id:"概念"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#概念"}},[s._v("#")]),s._v(" 概念")]),s._v(" "),n("blockquote",[n("p",[s._v("一、什么是 npm 脚本？npm 允许在package.json文件里面，使用scripts字段定义脚本命令。")])]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v('{\n  // ...\n  "scripts": {\n    "build": "node build.js"\n  }\n}\n')])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br")])]),n("p",[s._v("上面代码是package.json文件的一个片段，里面的scripts字段是一个对象。它的每一个属性，对应一段脚本。比如，build命令对应的脚本是node build.js。")]),s._v(" "),n("p",[s._v("命令行下使用npm run命令，就可以执行这段脚本。")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("$ npm run build\n# 等同于执行\n$ node build.js\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br")])]),n("p",[s._v("这些定义在package.json里面的脚本，就称为 npm 脚本。它的优点很多。")]),s._v(" "),n("ul",[n("li",[s._v("项目的相关脚本，可以集中在一个地方。")]),s._v(" "),n("li",[s._v("不同项目的脚本命令，只要功能相同，就可以有同样的对外接口。用户不需要知道怎么测试你的项目，只要运行npm run test即可。")]),s._v(" "),n("li",[s._v("可以利用 npm 提供的很多辅助功能。")])]),s._v(" "),n("p",[s._v("查看当前项目的所有 npm 脚本命令，可以使用不带任何参数的npm run命令。")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("$ npm run\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("h2",{attrs:{id:"原理"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#原理"}},[s._v("#")]),s._v(" 原理")]),s._v(" "),n("p",[s._v("npm 脚本的原理非常简单。每当执行"),n("code",[s._v("npm run")]),s._v("，就会自动新建一个 Shell，在这个 Shell 里面执行指定的脚本命令。因此，只要是 Shell（一般是 Bash）可以运行的命令，就可以写在 npm 脚本里面。")]),s._v(" "),n("p",[s._v("比较特别的是，"),n("code",[s._v("npm run")]),s._v("新建的这个 Shell，会将当前目录的"),n("code",[s._v("node_modules/.bin")]),s._v("子目录加入"),n("code",[s._v("PATH")]),s._v("变量，执行结束后，再将"),n("code",[s._v("PATH")]),s._v("变量恢复原样。")]),s._v(" "),n("p",[s._v("这意味着，当前目录的"),n("code",[s._v("node_modules/.bin")]),s._v("子目录里面的所有脚本，都可以直接用脚本名调用，而不必加上路径。比如，当前项目的依赖里面有 Mocha，只要直接写"),n("code",[s._v("mocha test")]),s._v("就可以了。")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v('"test": "mocha test"\n')])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("p",[s._v("而不用写成下面这样。")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v('"test": "./node_modules/.bin/mocha test"\n')])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("p",[s._v("由于 npm 脚本的唯一要求就是可以在 Shell 执行，因此它不一定是 Node 脚本，任何可执行文件都可以写在里面。")]),s._v(" "),n("p",[s._v("npm 脚本的退出码，也遵守 Shell 脚本规则。如果退出码不是"),n("code",[s._v("0")]),s._v("，npm 就认为这个脚本执行失败。")]),s._v(" "),n("h2",{attrs:{id:"通配符"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#通配符"}},[s._v("#")]),s._v(" 通配符")]),s._v(" "),n("p",[s._v("由于 npm 脚本就是 Shell 脚本，因为可以使用 Shell 通配符。")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v('"lint": "jshint *.js"\n"lint": "jshint **/*.js"\n')])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br")])]),n("p",[s._v("上面代码中，"),n("code",[s._v("*")]),s._v("表示任意文件名，"),n("code",[s._v("**")]),s._v("表示任意一层子目录。")]),s._v(" "),n("p",[s._v("如果要将通配符传入原始命令，防止被 Shell 转义，要将星号转义。")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v('"test": "tap test/\\*.js"\n')])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("p",[s._v("四、传参\n向 npm 脚本传入参数，要使用"),n("code",[s._v("--")]),s._v("标明。")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v('"lint": "jshint **.js"\n')])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("p",[s._v("向上面的"),n("code",[s._v("npm run lint")]),s._v("命令传入参数，必须写成下面这样。")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("$ npm run lint --  --reporter checkstyle > checkstyle.xml\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("p",[s._v("也可以在"),n("code",[s._v("package.json")]),s._v("里面再封装一个命令。")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v('"lint": "jshint **.js",\n"lint:checkstyle": "npm run lint -- --reporter checkstyle > checkstyle.xml"\n')])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br")])]),n("h2",{attrs:{id:"执行顺序"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#执行顺序"}},[s._v("#")]),s._v(" 执行顺序")]),s._v(" "),n("p",[s._v("如果 npm 脚本里面需要执行多个任务，那么需要明确它们的执行顺序。")]),s._v(" "),n("p",[s._v("如果是并行执行（即同时的平行执行），可以使用"),n("code",[s._v("&")]),s._v("符号。")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("$ npm run script1.js & npm run script2.js\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("p",[s._v("如果是继发执行（即只有前一个任务成功，才执行下一个任务），可以使用"),n("code",[s._v("&&")]),s._v("符号。")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("$ npm run script1.js && npm run script2.js\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("p",[s._v("这两个符号是 Bash 的功能。此外，还可以使用 node 的任务管理模块："),n("code",[s._v("script-runner、npm-run-all、redrun。")])]),s._v(" "),n("h2",{attrs:{id:"默认值"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#默认值"}},[s._v("#")]),s._v(" 默认值")]),s._v(" "),n("p",[s._v("一般来说，npm 脚本由用户提供。但是，npm 对两个脚本提供了默认值。也就是说，这两个脚本不用定义，就可以直接使用。")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v('"start": "node server.js"，\n"install": "node-gyp rebuild"\n')])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br")])]),n("p",[s._v("上面代码中，"),n("code",[s._v("npm run start")]),s._v("的默认值是"),n("code",[s._v("node server.js")]),s._v("，前提是项目根目录下有"),n("code",[s._v("server.js")]),s._v("这个脚本；"),n("code",[s._v("npm run install")]),s._v("的默认值是"),n("code",[s._v("node-gyp rebuild")]),s._v("，前提是项目根目录下有"),n("code",[s._v("binding.gyp")]),s._v("文件。")]),s._v(" "),n("p",[s._v("七、钩子\nnpm 脚本有"),n("code",[s._v("pre")]),s._v("和"),n("code",[s._v("post")]),s._v("两个钩子。举例来说，"),n("code",[s._v("build")]),s._v("脚本命令的钩子就是"),n("code",[s._v("prebuild")]),s._v("和"),n("code",[s._v("postbuild")]),s._v("。")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v('"prebuild": "echo I run before the build script",\n"build": "cross-env NODE_ENV=production webpack",\n"postbuild": "echo I run after the build script"\n')])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br")])]),n("p",[s._v("用户执行"),n("code",[s._v("npm run build")]),s._v("的时候，会自动按照下面的顺序执行。")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("npm run prebuild && npm run build && npm run postbuild\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("p",[s._v("因此，可以在这两个钩子里面，完成一些准备工作和清理工作。下面是一个例子。")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v('"clean": "rimraf ./dist && mkdir dist",\n"prebuild": "npm run clean",\n"build": "cross-env NODE_ENV=production webpack"\nnpm \n')])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br")])]),n("p",[s._v("默认提供下面这些钩子。")]),s._v(" "),n("ul",[n("li",[s._v("prepublish，postpublish")]),s._v(" "),n("li",[s._v("preinstall，postinstall")]),s._v(" "),n("li",[s._v("preuninstall，postuninstall")]),s._v(" "),n("li",[s._v("preversion，postversion")]),s._v(" "),n("li",[s._v("pretest，posttest")]),s._v(" "),n("li",[s._v("prestop，poststop")]),s._v(" "),n("li",[s._v("prestart，poststart")]),s._v(" "),n("li",[s._v("prerestart，postrestart")])]),s._v(" "),n("p",[s._v("自定义的脚本命令也可以加上"),n("code",[s._v("pre")]),s._v("和"),n("code",[s._v("post")]),s._v("钩子。比如，"),n("code",[s._v("myscript")]),s._v("这个脚本命令，也有"),n("code",[s._v("premyscript")]),s._v("和"),n("code",[s._v("postmyscript")]),s._v("钩子。不过，双重的"),n("code",[s._v("pre")]),s._v("和"),n("code",[s._v("post")]),s._v("无效，比如"),n("code",[s._v("prepretest")]),s._v("和"),n("code",[s._v("postposttest")]),s._v("是无效的。")]),s._v(" "),n("p",[s._v("npm 提供一个"),n("code",[s._v("npm_lifecycle_event")]),s._v("变量，返回当前正在运行的脚本名称，比如"),n("code",[s._v("pretest")]),s._v("、"),n("code",[s._v("test")]),s._v("、"),n("code",[s._v("posttest")]),s._v("等等。所以，可以利用这个变量，在同一个脚本文件里面，为不同的"),n("code",[s._v("npm scripts")]),s._v("命令编写代码。请看下面的例子。")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("const TARGET = process.env.npm_lifecycle_event;\n\nif (TARGET === 'test') {\n  console.log(`Running the test task!`);\n}\n\nif (TARGET === 'pretest') {\n  console.log(`Running the pretest task!`);\n}\n\nif (TARGET === 'posttest') {\n  console.log(`Running the posttest task!`);\n}\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br")])]),n("p",[s._v("注意，"),n("code",[s._v("prepublish")]),s._v("这个钩子不仅会在"),n("code",[s._v("npm publish")]),s._v("命令之前运行，还会在"),n("code",[s._v("npm install")]),s._v("（不带任何参数）命令之前运行。这种行为很容易让用户感到困惑，所以 npm 4 引入了一个新的钩子"),n("code",[s._v("prepare")]),s._v("，行为等同于"),n("code",[s._v("prepublish")]),s._v("，而从 npm 5 开始，"),n("code",[s._v("prepublish")]),s._v("将只在"),n("code",[s._v("npm publish")]),s._v("命令之前运行。")]),s._v(" "),n("h2",{attrs:{id:"简写形式"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#简写形式"}},[s._v("#")]),s._v(" 简写形式")]),s._v(" "),n("p",[s._v("四个常用的 npm 脚本有简写形式。")]),s._v(" "),n("ul",[n("li",[s._v("npm start是npm run start")]),s._v(" "),n("li",[s._v("npm stop是npm run stop的简写")]),s._v(" "),n("li",[s._v("npm test是npm run test的简写")]),s._v(" "),n("li",[s._v("npm restart是npm run stop && npm run restart && - npm run start的简写")])]),s._v(" "),n("p",[s._v("npm start、npm stop和npm restart都比较好理解，而npm restart是一个复合命令，实际上会执行三个脚本命令：stop、restart、start。具体的执行顺序如下。")]),s._v(" "),n("p",[s._v("1、prerestart"),n("br"),s._v("\n2、prestop"),n("br"),s._v("\n3、stop"),n("br"),s._v("\n4、poststop"),n("br"),s._v("\n5、restart"),n("br"),s._v("\n6、prestart"),n("br"),s._v("\n7、start"),n("br"),s._v("\n8、poststart"),n("br"),s._v("\n9、postrestart")]),s._v(" "),n("h2",{attrs:{id:"变量"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#变量"}},[s._v("#")]),s._v(" 变量")]),s._v(" "),n("p",[s._v("npm 脚本有一个非常强大的功能，就是可以使用 npm 的内部变量。")]),s._v(" "),n("p",[s._v("首先，通过"),n("code",[s._v("npm_package_")]),s._v("前缀，npm 脚本可以拿到"),n("code",[s._v("package.json")]),s._v("里面的字段。比如，下面是一个"),n("code",[s._v("package.json")]),s._v("。")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v('{\n  "name": "foo", \n  "version": "1.2.5",\n  "scripts": {\n    "view": "node view.js"\n  }\n}\n')])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br")])]),n("p",[s._v("那么，变量"),n("code",[s._v("npm_package_name")]),s._v("返回"),n("code",[s._v("foo")]),s._v("，变量"),n("code",[s._v("npm_package_version")]),s._v("返回1.2.5。")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("// view.js\nconsole.log(process.env.npm_package_name); // foo\nconsole.log(process.env.npm_package_version); // 1.2.5\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br")])]),n("p",[s._v("上面代码中，我们通过环境变量"),n("code",[s._v("process.env")]),s._v("对象，拿到"),n("code",[s._v("package.json")]),s._v("的字段值。如果是 Bash 脚本，可以用"),n("code",[s._v("$npm_package_name")]),s._v("和"),n("code",[s._v("$npm_package_version")]),s._v("取到这两个值。")]),s._v(" "),n("p",[n("code",[s._v("npm_package_")]),s._v("前缀也支持嵌套的"),n("code",[s._v("package.json")]),s._v("字段。")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v('  "repository": {\n    "type": "git",\n    "url": "xxx"\n  },\n  scripts: {\n    "view": "echo $npm_package_repository_type"\n  }\n')])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br")])]),n("p",[s._v("上面代码中，"),n("code",[s._v("repository")]),s._v("字段的"),n("code",[s._v("type")]),s._v("属性，可以通过"),n("code",[s._v("npm_package_repository_type")]),s._v("取到。")]),s._v(" "),n("p",[s._v("下面是另外一个例子。")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v('"scripts": {\n  "install": "foo.js"\n}\n')])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br")])]),n("p",[s._v("上面代码中，"),n("code",[s._v("npm_package_scripts_install")]),s._v("变量的值等于"),n("code",[s._v("foo.js")]),s._v("。")]),s._v(" "),n("p",[s._v("然后，npm 脚本还可以通过"),n("code",[s._v("npm_config_")]),s._v("前缀，拿到 npm 的配置变量，即"),n("code",[s._v("npm config get xxx")]),s._v("命令返回的值。比如，当前模块的发行标签，可以通过"),n("code",[s._v("npm_config_tag")]),s._v("取到。")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v('"view": "echo $npm_config_tag",\n')])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("p",[s._v("注意，"),n("code",[s._v("package.json")]),s._v("里面的"),n("code",[s._v("config")]),s._v("对象，可以被环境变量覆盖。")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v('{ \n  "name" : "foo",\n  "config" : { "port" : "8080" },\n  "scripts" : { "start" : "node server.js" }\n}\n')])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br")])]),n("p",[s._v("上面代码中，"),n("code",[s._v("npm_package_config_port")]),s._v("变量返回的是"),n("code",[s._v("8080")]),s._v("。这个值可以用下面的方法覆盖。")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("$ npm config set foo:port 80\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("p",[s._v("最后，"),n("code",[s._v("env")]),s._v("命令可以列出所有环境变量。")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v('"env": "env"\n')])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("h2",{attrs:{id:"常用脚本示例"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#常用脚本示例"}},[s._v("#")]),s._v(" 常用脚本示例")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v('// 删除目录\n"clean": "rimraf dist/*",\n\n// 本地搭建一个 HTTP 服务\n"serve": "http-server -p 9090 dist/",\n\n// 打开浏览器\n"open:dev": "opener http://localhost:9090",\n\n// 实时刷新\n "livereload": "live-reload --port 9091 dist/",\n\n// 构建 HTML 文件\n"build:html": "jade index.jade > dist/index.html",\n\n// 只要 CSS 文件有变动，就重新执行构建\n"watch:css": "watch \'npm run build:css\' assets/styles/",\n\n// 只要 HTML 文件有变动，就重新执行构建\n"watch:html": "watch \'npm run build:html\' assets/html",\n\n// 部署到 Amazon S3\n"deploy:prod": "s3-cli sync ./dist/ s3://example-com/prod-site/",\n\n// 构建 favicon\n"build:favicon": "node scripts/favicon.js",\n')])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br"),n("span",{staticClass:"line-number"},[s._v("23")]),n("br"),n("span",{staticClass:"line-number"},[s._v("24")]),n("br"),n("span",{staticClass:"line-number"},[s._v("25")]),n("br"),n("span",{staticClass:"line-number"},[s._v("26")]),n("br")])])])}),[],!1,null,null,null);e.default=t.exports}}]);