(window.webpackJsonp=window.webpackJsonp||[]).push([[133],{536:function(e,a,s){"use strict";s.r(a);var n=s(56),t=Object(n.a)({},(function(){var e=this,a=e.$createElement,s=e._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("h1",{attrs:{id:"npx使用介绍"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#npx使用介绍"}},[e._v("#")]),e._v(" npx使用介绍")]),e._v(" "),s("p",[e._v("npm 从5.2版开始，增加了 npx 命令")]),e._v(" "),s("p",[e._v("Node 自带 npm 模块，所以可以直接使用 npx 命令。万一不能用，就要手动安装一下。")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("$ npm install -g npx\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br")])]),s("h2",{attrs:{id:"调用项目安装的模块"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#调用项目安装的模块"}},[e._v("#")]),e._v(" 调用项目安装的模块")]),e._v(" "),s("p",[e._v("npx 想要解决的主要问题，就是调用项目内部安装的模块。比如，项目内部安装了测试工具 Mocha。")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("$ npm install -D mocha\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br")])]),s("p",[e._v("一般来说，调用 "),s("code",[e._v("Mocha")]),e._v(" ，只能在项目脚本和 "),s("code",[e._v("package.json")]),e._v(" 的scripts字段里面， 如果想在命令行下调用，必须像下面这样。")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("#项目的根目录下执行\n$ node-modules/.bin/mocha --version\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br")])]),s("p",[e._v("npx 就是想解决这个问题，让项目内部安装的模块用起来更方便，只要像下面这样调用就行了。")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("$ npx mocha --version\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br")])]),s("p",[e._v("npx 的原理很简单，就是运行的时候，会到"),s("code",[e._v("node_modules/.bin")]),e._v("路径和环境变量"),s("code",[e._v("$PATH")]),e._v("里面，检查命令是否存在。")]),e._v(" "),s("p",[e._v("由于 npx 会检查环境变量$PATH，所以系统命令也可以调用。")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("# 等同于 ls\n$ npx ls\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br")])]),s("p",[e._v("注意，Bash 内置的命令不在"),s("code",[e._v("$PATH")]),e._v("里面，所以不能用。比如，"),s("code",[e._v("cd")]),e._v("是 "),s("code",[e._v("Bash")]),e._v(" 命令，因此就不能用"),s("code",[e._v("npx cd")]),e._v("。")]),e._v(" "),s("h2",{attrs:{id:"避免全局安装模块"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#避免全局安装模块"}},[e._v("#")]),e._v(" 避免全局安装模块")]),e._v(" "),s("p",[e._v("除了调用项目内部模块，npx 还能避免全局安装的模块。比如，"),s("code",[e._v("create-react-app")]),e._v("这个模块是全局安装，npx 可以运行它，而且不进行全局安装。")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("$ npx create-react-app my-react-app\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br")])]),s("p",[e._v("上面代码运行时，"),s("code",[e._v("npx")]),e._v(" 将"),s("code",[e._v("create-react-app")]),e._v("下载到一个临时目录，使用以后再删除。所以，以后再次执行上面的命令，会重新下载"),s("code",[e._v("create-react-app")]),e._v("。")]),e._v(" "),s("p",[e._v("下载全局模块时，"),s("code",[e._v("npx")]),e._v(" 允许指定版本。")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("$ npx uglify-js@3.1.0 main.js -o ./dist/main.js\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br")])]),s("p",[e._v("上面代码指定使用 3.1.0 版本的"),s("code",[e._v("uglify-js")]),e._v("压缩脚本。")]),e._v(" "),s("p",[e._v("注意，只要 npx 后面的模块无法在本地发现，就会下载同名模块。比如，本地没有安装http-server模块，下面的命令会自动下载该模块，在当前目录启动一个 Web 服务。")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("$ npx http-server\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br")])]),s("h2",{attrs:{id:"no-install-参数和-ignore-existing-参数"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#no-install-参数和-ignore-existing-参数"}},[e._v("#")]),e._v(" --no-install 参数和--ignore-existing 参数")]),e._v(" "),s("p",[e._v("如果想让 npx 强制使用本地模块，不下载远程模块，可以使用"),s("code",[e._v("--no-install")]),e._v("参数。如果本地不存在该模块，就会报错。")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("$ npx --no-install http-server\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br")])]),s("p",[e._v("反过来，如果忽略本地的同名模块，强制安装使用远程模块，可以使用--ignore-existing参数。比如，本地已经全局安装了create-react-app，但还是想使用远程模块，就用这个参数。")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("$ npx --ignore-existing create-react-app my-react-app\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br")])]),s("h2",{attrs:{id:"使用不同版本的-node"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#使用不同版本的-node"}},[e._v("#")]),e._v(" 使用不同版本的 node")]),e._v(" "),s("p",[e._v("利用 npx 可以下载模块这个特点，可以指定某个版本的 Node 运行脚本。它的窍门就是使用 npm 的 node 模块。")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("$ npx node@0.12.8 -v\nv0.12.8\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br")])]),s("p",[e._v("上面命令会使用 0.12.8 版本的 Node 执行脚本。原理是从 npm 下载这个版本的 node，使用后再删掉。")]),e._v(" "),s("p",[e._v("某些场景下，这个方法用来切换 Node 版本，要比 nvm 那样的版本管理器方便一些。")]),e._v(" "),s("h2",{attrs:{id:"p-参数"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#p-参数"}},[e._v("#")]),e._v(" -p 参数")]),e._v(" "),s("p",[s("code",[e._v("-p")]),e._v("参数用于指定 "),s("code",[e._v("npx")]),e._v(" 所要安装的模块，所以上一节的命令可以写成下面这样。")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("$ npx -p node@0.12.8 node -v \nv0.12.8\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br")])]),s("p",[e._v("上面命令先指定安装"),s("code",[e._v("node@0.12.8")]),e._v("，然后再执行"),s("code",[e._v("node -v")]),e._v("命令。")]),e._v(" "),s("p",[s("code",[e._v("-p")]),e._v("参数对于需要安装多个模块的场景很有用。")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("$ npx -p lolcatjs -p cowsay [command]\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br")])]),s("h2",{attrs:{id:"c-参数"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#c-参数"}},[e._v("#")]),e._v(" -c 参数")]),e._v(" "),s("p",[e._v("如果 npx 安装多个模块，默认情况下，所执行的命令之中，只有第一个可执行项会使用 npx 安装的模块，后面的可执行项还是会交给 Shell 解释。")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("$ npx -p lolcatjs -p cowsay 'cowsay hello | lolcatjs'\n# 报错\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br")])]),s("p",[e._v("上面代码中，"),s("code",[e._v("cowsay hello | lolcatjs")]),e._v("执行时会报错，原因是第一项"),s("code",[e._v("cowsay")]),e._v("由 "),s("code",[e._v("npx")]),e._v(" 解释，而第二项命令"),s("code",[e._v("localcatjs")]),e._v("由 "),s("code",[e._v("Shell")]),e._v(" 解释，但是"),s("code",[e._v("lolcatjs")]),e._v("并没有全局安装，所以报错。")]),e._v(" "),s("p",[s("code",[e._v("-c")]),e._v("参数可以将所有命令都用 npx 解释。有了它，下面代码就可以正常执行了。")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("$ npx -p lolcatjs -p cowsay -c 'cowsay hello | lolcatjs'\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br")])]),s("p",[s("code",[e._v("-c")]),e._v("参数的另一个作用，是将环境变量带入所要执行的命令。举例来说，npm 提供当前项目的一些环境变量，可以用下面的命令查看。")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("$ npm run env | grep npm_\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br")])]),s("p",[e._v("-c参数可以把这些 npm 的环境变量带入 npx 命令。")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("$ npx -c 'echo \"$npm_package_name\"'\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br")])]),s("p",[e._v("上面代码会输出当前项目的项目名。")]),e._v(" "),s("h2",{attrs:{id:"执行-github-源码"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#执行-github-源码"}},[e._v("#")]),e._v(" 执行 GitHub 源码")]),e._v(" "),s("p",[e._v("npx 还可以执行 GitHub 上面的模块源码。")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("# 执行 Gist 代码\n$ npx https://gist.github.com/zkat/4bc19503fe9e9309e2bfaa2c58074d32\n\n# 执行仓库代码\n$ npx github:piuccio/cowsay hello\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br"),s("span",{staticClass:"line-number"},[e._v("4")]),s("br"),s("span",{staticClass:"line-number"},[e._v("5")]),s("br")])]),s("p",[e._v("注意，远程代码必须是一个模块，即必须包含package.json和入口脚本。")])])}),[],!1,null,null,null);a.default=t.exports}}]);