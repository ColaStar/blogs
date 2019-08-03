(window.webpackJsonp=window.webpackJsonp||[]).push([[85],{151:function(e,s,t){"use strict";t.r(s);var a=t(0),n=Object(a.a)({},function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h2",{attrs:{id:"一、什么是-npm-脚本？npm-允许在package-json文件里面，使用scripts字段定义脚本命令。"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#一、什么是-npm-脚本？npm-允许在package-json文件里面，使用scripts字段定义脚本命令。","aria-hidden":"true"}},[e._v("#")]),e._v(" 一、什么是 npm 脚本？npm 允许在package.json文件里面，使用scripts字段定义脚本命令。")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('{\n  // ...\n  "scripts": {\n    "build": "node build.js"\n  }\n}\n')])])]),t("p",[e._v("上面代码是package.json文件的一个片段，里面的scripts字段是一个对象。它的每一个属性，对应一段脚本。比如，build命令对应的脚本是node build.js。")]),e._v(" "),t("p",[e._v("命令行下使用npm run命令，就可以执行这段脚本。")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("$ npm run build\n# 等同于执行\n$ node build.js\n")])])]),t("p",[e._v("这些定义在package.json里面的脚本，就称为 npm 脚本。它的优点很多。")]),e._v(" "),t("ul",[t("li",[e._v("项目的相关脚本，可以集中在一个地方。")]),e._v(" "),t("li",[e._v("不同项目的脚本命令，只要功能相同，就可以有同样的对外接口。用户不需要知道怎么测试你的项目，只要运行npm run test即可。")]),e._v(" "),t("li",[e._v("可以利用 npm 提供的很多辅助功能。")])]),e._v(" "),t("p",[e._v("查看当前项目的所有 npm 脚本命令，可以使用不带任何参数的npm run命令。")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("$ npm run\n")])])]),t("h2",{attrs:{id:"二、原理"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#二、原理","aria-hidden":"true"}},[e._v("#")]),e._v(" 二、原理")]),e._v(" "),t("p",[e._v("npm 脚本的原理非常简单。每当执行"),t("code",[e._v("npm run")]),e._v("，就会自动新建一个 Shell，在这个 Shell 里面执行指定的脚本命令。因此，只要是 Shell（一般是 Bash）可以运行的命令，就可以写在 npm 脚本里面。")]),e._v(" "),t("p",[e._v("比较特别的是，"),t("code",[e._v("npm run")]),e._v("新建的这个 Shell，会将当前目录的"),t("code",[e._v("node_modules/.bin")]),e._v("子目录加入"),t("code",[e._v("PATH")]),e._v("变量，执行结束后，再将"),t("code",[e._v("PATH")]),e._v("变量恢复原样。")]),e._v(" "),t("p",[e._v("这意味着，当前目录的"),t("code",[e._v("node_modules/.bin")]),e._v("子目录里面的所有脚本，都可以直接用脚本名调用，而不必加上路径。比如，当前项目的依赖里面有 Mocha，只要直接写"),t("code",[e._v("mocha test")]),e._v("就可以了。")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('"test": "mocha test"\n')])])]),t("p",[e._v("而不用写成下面这样。")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('"test": "./node_modules/.bin/mocha test"\n')])])]),t("p",[e._v("由于 npm 脚本的唯一要求就是可以在 Shell 执行，因此它不一定是 Node 脚本，任何可执行文件都可以写在里面。")]),e._v(" "),t("p",[e._v("npm 脚本的退出码，也遵守 Shell 脚本规则。如果退出码不是"),t("code",[e._v("0")]),e._v("，npm 就认为这个脚本执行失败。")]),e._v(" "),t("h2",{attrs:{id:"三、通配符"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#三、通配符","aria-hidden":"true"}},[e._v("#")]),e._v(" 三、通配符")]),e._v(" "),t("p",[e._v("由于 npm 脚本就是 Shell 脚本，因为可以使用 Shell 通配符。")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('"lint": "jshint *.js"\n"lint": "jshint **/*.js"\n')])])]),t("p",[e._v("上面代码中，"),t("code",[e._v("*")]),e._v("表示任意文件名，"),t("code",[e._v("**")]),e._v("表示任意一层子目录。")]),e._v(" "),t("p",[e._v("如果要将通配符传入原始命令，防止被 Shell 转义，要将星号转义。")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('"test": "tap test/\\*.js"\n')])])]),t("p",[e._v("四、传参\n向 npm 脚本传入参数，要使用"),t("code",[e._v("--")]),e._v("标明。")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('"lint": "jshint **.js"\n')])])]),t("p",[e._v("向上面的"),t("code",[e._v("npm run lint")]),e._v("命令传入参数，必须写成下面这样。")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("$ npm run lint --  --reporter checkstyle > checkstyle.xml\n")])])]),t("p",[e._v("也可以在"),t("code",[e._v("package.json")]),e._v("里面再封装一个命令。")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('"lint": "jshint **.js",\n"lint:checkstyle": "npm run lint -- --reporter checkstyle > checkstyle.xml"\n')])])]),t("h2",{attrs:{id:"五、执行顺序"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#五、执行顺序","aria-hidden":"true"}},[e._v("#")]),e._v(" 五、执行顺序")]),e._v(" "),t("p",[e._v("如果 npm 脚本里面需要执行多个任务，那么需要明确它们的执行顺序。")]),e._v(" "),t("p",[e._v("如果是并行执行（即同时的平行执行），可以使用"),t("code",[e._v("&")]),e._v("符号。")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("$ npm run script1.js & npm run script2.js\n")])])]),t("p",[e._v("如果是继发执行（即只有前一个任务成功，才执行下一个任务），可以使用"),t("code",[e._v("&&")]),e._v("符号。")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("$ npm run script1.js && npm run script2.js\n")])])]),t("p",[e._v("这两个符号是 Bash 的功能。此外，还可以使用 node 的任务管理模块："),t("code",[e._v("script-runner、npm-run-all、redrun。")])]),e._v(" "),t("h2",{attrs:{id:"六、默认值"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#六、默认值","aria-hidden":"true"}},[e._v("#")]),e._v(" 六、默认值")]),e._v(" "),t("p",[e._v("一般来说，npm 脚本由用户提供。但是，npm 对两个脚本提供了默认值。也就是说，这两个脚本不用定义，就可以直接使用。")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('"start": "node server.js"，\n"install": "node-gyp rebuild"\n')])])]),t("p",[e._v("上面代码中，"),t("code",[e._v("npm run start")]),e._v("的默认值是"),t("code",[e._v("node server.js")]),e._v("，前提是项目根目录下有"),t("code",[e._v("server.js")]),e._v("这个脚本；"),t("code",[e._v("npm run install")]),e._v("的默认值是"),t("code",[e._v("node-gyp rebuild")]),e._v("，前提是项目根目录下有"),t("code",[e._v("binding.gyp")]),e._v("文件。")]),e._v(" "),t("p",[e._v("七、钩子\nnpm 脚本有"),t("code",[e._v("pre")]),e._v("和"),t("code",[e._v("post")]),e._v("两个钩子。举例来说，"),t("code",[e._v("build")]),e._v("脚本命令的钩子就是"),t("code",[e._v("prebuild")]),e._v("和"),t("code",[e._v("postbuild")]),e._v("。")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('"prebuild": "echo I run before the build script",\n"build": "cross-env NODE_ENV=production webpack",\n"postbuild": "echo I run after the build script"\n')])])]),t("p",[e._v("用户执行"),t("code",[e._v("npm run build")]),e._v("的时候，会自动按照下面的顺序执行。")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("npm run prebuild && npm run build && npm run postbuild\n")])])]),t("p",[e._v("因此，可以在这两个钩子里面，完成一些准备工作和清理工作。下面是一个例子。")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('"clean": "rimraf ./dist && mkdir dist",\n"prebuild": "npm run clean",\n"build": "cross-env NODE_ENV=production webpack"\nnpm \n')])])]),t("p",[e._v("默认提供下面这些钩子。")]),e._v(" "),t("ul",[t("li",[e._v("prepublish，postpublish")]),e._v(" "),t("li",[e._v("preinstall，postinstall")]),e._v(" "),t("li",[e._v("preuninstall，postuninstall")]),e._v(" "),t("li",[e._v("preversion，postversion")]),e._v(" "),t("li",[e._v("pretest，posttest")]),e._v(" "),t("li",[e._v("prestop，poststop")]),e._v(" "),t("li",[e._v("prestart，poststart")]),e._v(" "),t("li",[e._v("prerestart，postrestart")])]),e._v(" "),t("p",[e._v("自定义的脚本命令也可以加上"),t("code",[e._v("pre")]),e._v("和"),t("code",[e._v("post")]),e._v("钩子。比如，"),t("code",[e._v("myscript")]),e._v("这个脚本命令，也有"),t("code",[e._v("premyscript")]),e._v("和"),t("code",[e._v("postmyscript")]),e._v("钩子。不过，双重的"),t("code",[e._v("pre")]),e._v("和"),t("code",[e._v("post")]),e._v("无效，比如"),t("code",[e._v("prepretest")]),e._v("和"),t("code",[e._v("postposttest")]),e._v("是无效的。")]),e._v(" "),t("p",[e._v("npm 提供一个"),t("code",[e._v("npm_lifecycle_event")]),e._v("变量，返回当前正在运行的脚本名称，比如"),t("code",[e._v("pretest")]),e._v("、"),t("code",[e._v("test")]),e._v("、"),t("code",[e._v("posttest")]),e._v("等等。所以，可以利用这个变量，在同一个脚本文件里面，为不同的"),t("code",[e._v("npm scripts")]),e._v("命令编写代码。请看下面的例子。")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("const TARGET = process.env.npm_lifecycle_event;\n\nif (TARGET === 'test') {\n  console.log(`Running the test task!`);\n}\n\nif (TARGET === 'pretest') {\n  console.log(`Running the pretest task!`);\n}\n\nif (TARGET === 'posttest') {\n  console.log(`Running the posttest task!`);\n}\n")])])]),t("p",[e._v("注意，"),t("code",[e._v("prepublish")]),e._v("这个钩子不仅会在"),t("code",[e._v("npm publish")]),e._v("命令之前运行，还会在"),t("code",[e._v("npm install")]),e._v("（不带任何参数）命令之前运行。这种行为很容易让用户感到困惑，所以 npm 4 引入了一个新的钩子"),t("code",[e._v("prepare")]),e._v("，行为等同于"),t("code",[e._v("prepublish")]),e._v("，而从 npm 5 开始，"),t("code",[e._v("prepublish")]),e._v("将只在"),t("code",[e._v("npm publish")]),e._v("命令之前运行。")]),e._v(" "),t("h2",{attrs:{id:"八、简写形式"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#八、简写形式","aria-hidden":"true"}},[e._v("#")]),e._v(" 八、简写形式")]),e._v(" "),t("p",[e._v("四个常用的 npm 脚本有简写形式。")]),e._v(" "),t("ul",[t("li",[e._v("npm start是npm run start")]),e._v(" "),t("li",[e._v("npm stop是npm run stop的简写")]),e._v(" "),t("li",[e._v("npm test是npm run test的简写")]),e._v(" "),t("li",[e._v("npm restart是npm run stop && npm run restart && - npm run start的简写")])]),e._v(" "),t("p",[e._v("npm start、npm stop和npm restart都比较好理解，而npm restart是一个复合命令，实际上会执行三个脚本命令：stop、restart、start。具体的执行顺序如下。")]),e._v(" "),t("p",[e._v("1、prerestart"),t("br"),e._v("\n2、prestop"),t("br"),e._v("\n3、stop"),t("br"),e._v("\n4、poststop"),t("br"),e._v("\n5、restart"),t("br"),e._v("\n6、prestart"),t("br"),e._v("\n7、start"),t("br"),e._v("\n8、poststart"),t("br"),e._v("\n9、postrestart")]),e._v(" "),t("h2",{attrs:{id:"九、变量"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#九、变量","aria-hidden":"true"}},[e._v("#")]),e._v(" 九、变量")]),e._v(" "),t("p",[e._v("npm 脚本有一个非常强大的功能，就是可以使用 npm 的内部变量。")]),e._v(" "),t("p",[e._v("首先，通过"),t("code",[e._v("npm_package_")]),e._v("前缀，npm 脚本可以拿到"),t("code",[e._v("package.json")]),e._v("里面的字段。比如，下面是一个"),t("code",[e._v("package.json")]),e._v("。")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('{\n  "name": "foo", \n  "version": "1.2.5",\n  "scripts": {\n    "view": "node view.js"\n  }\n}\n')])])]),t("p",[e._v("那么，变量"),t("code",[e._v("npm_package_name")]),e._v("返回"),t("code",[e._v("foo")]),e._v("，变量"),t("code",[e._v("npm_package_version")]),e._v("返回1.2.5。")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("// view.js\nconsole.log(process.env.npm_package_name); // foo\nconsole.log(process.env.npm_package_version); // 1.2.5\n")])])]),t("p",[e._v("上面代码中，我们通过环境变量"),t("code",[e._v("process.env")]),e._v("对象，拿到"),t("code",[e._v("package.json")]),e._v("的字段值。如果是 Bash 脚本，可以用"),t("code",[e._v("$npm_package_name")]),e._v("和"),t("code",[e._v("$npm_package_version")]),e._v("取到这两个值。")]),e._v(" "),t("p",[t("code",[e._v("npm_package_")]),e._v("前缀也支持嵌套的"),t("code",[e._v("package.json")]),e._v("字段。")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('  "repository": {\n    "type": "git",\n    "url": "xxx"\n  },\n  scripts: {\n    "view": "echo $npm_package_repository_type"\n  }\n')])])]),t("p",[e._v("上面代码中，"),t("code",[e._v("repository")]),e._v("字段的"),t("code",[e._v("type")]),e._v("属性，可以通过"),t("code",[e._v("npm_package_repository_type")]),e._v("取到。")]),e._v(" "),t("p",[e._v("下面是另外一个例子。")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('"scripts": {\n  "install": "foo.js"\n}\n')])])]),t("p",[e._v("上面代码中，"),t("code",[e._v("npm_package_scripts_install")]),e._v("变量的值等于"),t("code",[e._v("foo.js")]),e._v("。")]),e._v(" "),t("p",[e._v("然后，npm 脚本还可以通过"),t("code",[e._v("npm_config_")]),e._v("前缀，拿到 npm 的配置变量，即"),t("code",[e._v("npm config get xxx")]),e._v("命令返回的值。比如，当前模块的发行标签，可以通过"),t("code",[e._v("npm_config_tag")]),e._v("取到。")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('"view": "echo $npm_config_tag",\n')])])]),t("p",[e._v("注意，"),t("code",[e._v("package.json")]),e._v("里面的"),t("code",[e._v("config")]),e._v("对象，可以被环境变量覆盖。")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('{ \n  "name" : "foo",\n  "config" : { "port" : "8080" },\n  "scripts" : { "start" : "node server.js" }\n}\n')])])]),t("p",[e._v("上面代码中，"),t("code",[e._v("npm_package_config_port")]),e._v("变量返回的是"),t("code",[e._v("8080")]),e._v("。这个值可以用下面的方法覆盖。")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("$ npm config set foo:port 80\n")])])]),t("p",[e._v("最后，"),t("code",[e._v("env")]),e._v("命令可以列出所有环境变量。")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('"env": "env"\n')])])]),t("h2",{attrs:{id:"十、常用脚本示例"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#十、常用脚本示例","aria-hidden":"true"}},[e._v("#")]),e._v(" 十、常用脚本示例")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('// 删除目录\n"clean": "rimraf dist/*",\n\n// 本地搭建一个 HTTP 服务\n"serve": "http-server -p 9090 dist/",\n\n// 打开浏览器\n"open:dev": "opener http://localhost:9090",\n\n// 实时刷新\n "livereload": "live-reload --port 9091 dist/",\n\n// 构建 HTML 文件\n"build:html": "jade index.jade > dist/index.html",\n\n// 只要 CSS 文件有变动，就重新执行构建\n"watch:css": "watch \'npm run build:css\' assets/styles/",\n\n// 只要 HTML 文件有变动，就重新执行构建\n"watch:html": "watch \'npm run build:html\' assets/html",\n\n// 部署到 Amazon S3\n"deploy:prod": "s3-cli sync ./dist/ s3://example-com/prod-site/",\n\n// 构建 favicon\n"build:favicon": "node scripts/favicon.js",\n')])])])])},[],!1,null,null,null);s.default=n.exports}}]);