(window.webpackJsonp=window.webpackJsonp||[]).push([[86],{184:function(a,e,t){"use strict";t.r(e);var s=t(0),n=Object(s.a)({},function(){var a=this,e=a.$createElement,t=a._self._c||e;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("h1",{attrs:{id:"npx使用介绍"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#npx使用介绍","aria-hidden":"true"}},[a._v("#")]),a._v(" npx使用介绍")]),a._v(" "),t("p",[a._v("npm 从5.2版开始，增加了 npx 命令")]),a._v(" "),t("p",[a._v("Node 自带 npm 模块，所以可以直接使用 npx 命令。万一不能用，就要手动安装一下。")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("$ npm install -g npx\n")])])]),t("h2",{attrs:{id:"调用项目安装的模块"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#调用项目安装的模块","aria-hidden":"true"}},[a._v("#")]),a._v(" 调用项目安装的模块")]),a._v(" "),t("p",[a._v("npx 想要解决的主要问题，就是调用项目内部安装的模块。比如，项目内部安装了测试工具 Mocha。")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("$ npm install -D mocha\n")])])]),t("p",[a._v("一般来说，调用 "),t("code",[a._v("Mocha")]),a._v(" ，只能在项目脚本和 "),t("code",[a._v("package.json")]),a._v(" 的scripts字段里面， 如果想在命令行下调用，必须像下面这样。")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("#项目的根目录下执行\n$ node-modules/.bin/mocha --version\n")])])]),t("p",[a._v("npx 就是想解决这个问题，让项目内部安装的模块用起来更方便，只要像下面这样调用就行了。")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("$ npx mocha --version\n")])])]),t("p",[a._v("npx 的原理很简单，就是运行的时候，会到"),t("code",[a._v("node_modules/.bin")]),a._v("路径和环境变量"),t("code",[a._v("$PATH")]),a._v("里面，检查命令是否存在。")]),a._v(" "),t("p",[a._v("由于 npx 会检查环境变量$PATH，所以系统命令也可以调用。")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("# 等同于 ls\n$ npx ls\n")])])]),t("p",[a._v("注意，Bash 内置的命令不在"),t("code",[a._v("$PATH")]),a._v("里面，所以不能用。比如，"),t("code",[a._v("cd")]),a._v("是 "),t("code",[a._v("Bash")]),a._v(" 命令，因此就不能用"),t("code",[a._v("npx cd")]),a._v("。")]),a._v(" "),t("h2",{attrs:{id:"避免全局安装模块"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#避免全局安装模块","aria-hidden":"true"}},[a._v("#")]),a._v(" 避免全局安装模块")]),a._v(" "),t("p",[a._v("除了调用项目内部模块，npx 还能避免全局安装的模块。比如，"),t("code",[a._v("create-react-app")]),a._v("这个模块是全局安装，npx 可以运行它，而且不进行全局安装。")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("$ npx create-react-app my-react-app\n")])])]),t("p",[a._v("上面代码运行时，"),t("code",[a._v("npx")]),a._v(" 将"),t("code",[a._v("create-react-app")]),a._v("下载到一个临时目录，使用以后再删除。所以，以后再次执行上面的命令，会重新下载"),t("code",[a._v("create-react-app")]),a._v("。")]),a._v(" "),t("p",[a._v("下载全局模块时，"),t("code",[a._v("npx")]),a._v(" 允许指定版本。")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("$ npx uglify-js@3.1.0 main.js -o ./dist/main.js\n")])])]),t("p",[a._v("上面代码指定使用 3.1.0 版本的"),t("code",[a._v("uglify-js")]),a._v("压缩脚本。")]),a._v(" "),t("p",[a._v("注意，只要 npx 后面的模块无法在本地发现，就会下载同名模块。比如，本地没有安装http-server模块，下面的命令会自动下载该模块，在当前目录启动一个 Web 服务。")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("$ npx http-server\n")])])]),t("h2",{attrs:{id:"no-install-参数和-ignore-existing-参数"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#no-install-参数和-ignore-existing-参数","aria-hidden":"true"}},[a._v("#")]),a._v(" --no-install 参数和--ignore-existing 参数")]),a._v(" "),t("p",[a._v("如果想让 npx 强制使用本地模块，不下载远程模块，可以使用"),t("code",[a._v("--no-install")]),a._v("参数。如果本地不存在该模块，就会报错。")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("$ npx --no-install http-server\n")])])]),t("p",[a._v("反过来，如果忽略本地的同名模块，强制安装使用远程模块，可以使用--ignore-existing参数。比如，本地已经全局安装了create-react-app，但还是想使用远程模块，就用这个参数。")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("$ npx --ignore-existing create-react-app my-react-app\n")])])]),t("h2",{attrs:{id:"使用不同版本的-node"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#使用不同版本的-node","aria-hidden":"true"}},[a._v("#")]),a._v(" 使用不同版本的 node")]),a._v(" "),t("p",[a._v("利用 npx 可以下载模块这个特点，可以指定某个版本的 Node 运行脚本。它的窍门就是使用 npm 的 node 模块。")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("$ npx node@0.12.8 -v\nv0.12.8\n")])])]),t("p",[a._v("上面命令会使用 0.12.8 版本的 Node 执行脚本。原理是从 npm 下载这个版本的 node，使用后再删掉。")]),a._v(" "),t("p",[a._v("某些场景下，这个方法用来切换 Node 版本，要比 nvm 那样的版本管理器方便一些。")]),a._v(" "),t("h2",{attrs:{id:"p-参数"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#p-参数","aria-hidden":"true"}},[a._v("#")]),a._v(" -p 参数")]),a._v(" "),t("p",[t("code",[a._v("-p")]),a._v("参数用于指定 "),t("code",[a._v("npx")]),a._v(" 所要安装的模块，所以上一节的命令可以写成下面这样。")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("$ npx -p node@0.12.8 node -v \nv0.12.8\n")])])]),t("p",[a._v("上面命令先指定安装"),t("code",[a._v("node@0.12.8")]),a._v("，然后再执行"),t("code",[a._v("node -v")]),a._v("命令。")]),a._v(" "),t("p",[t("code",[a._v("-p")]),a._v("参数对于需要安装多个模块的场景很有用。")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("$ npx -p lolcatjs -p cowsay [command]\n")])])]),t("h2",{attrs:{id:"c-参数"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#c-参数","aria-hidden":"true"}},[a._v("#")]),a._v(" -c 参数")]),a._v(" "),t("p",[a._v("如果 npx 安装多个模块，默认情况下，所执行的命令之中，只有第一个可执行项会使用 npx 安装的模块，后面的可执行项还是会交给 Shell 解释。")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("$ npx -p lolcatjs -p cowsay 'cowsay hello | lolcatjs'\n# 报错\n")])])]),t("p",[a._v("上面代码中，"),t("code",[a._v("cowsay hello | lolcatjs")]),a._v("执行时会报错，原因是第一项"),t("code",[a._v("cowsay")]),a._v("由 "),t("code",[a._v("npx")]),a._v(" 解释，而第二项命令"),t("code",[a._v("localcatjs")]),a._v("由 "),t("code",[a._v("Shell")]),a._v(" 解释，但是"),t("code",[a._v("lolcatjs")]),a._v("并没有全局安装，所以报错。")]),a._v(" "),t("p",[t("code",[a._v("-c")]),a._v("参数可以将所有命令都用 npx 解释。有了它，下面代码就可以正常执行了。")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("$ npx -p lolcatjs -p cowsay -c 'cowsay hello | lolcatjs'\n")])])]),t("p",[t("code",[a._v("-c")]),a._v("参数的另一个作用，是将环境变量带入所要执行的命令。举例来说，npm 提供当前项目的一些环境变量，可以用下面的命令查看。")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("$ npm run env | grep npm_\n")])])]),t("p",[a._v("-c参数可以把这些 npm 的环境变量带入 npx 命令。")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("$ npx -c 'echo \"$npm_package_name\"'\n")])])]),t("p",[a._v("上面代码会输出当前项目的项目名。")]),a._v(" "),t("h2",{attrs:{id:"执行-github-源码"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#执行-github-源码","aria-hidden":"true"}},[a._v("#")]),a._v(" 执行 GitHub 源码")]),a._v(" "),t("p",[a._v("npx 还可以执行 GitHub 上面的模块源码。")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("# 执行 Gist 代码\n$ npx https://gist.github.com/zkat/4bc19503fe9e9309e2bfaa2c58074d32\n\n# 执行仓库代码\n$ npx github:piuccio/cowsay hello\n")])])]),t("p",[a._v("注意，远程代码必须是一个模块，即必须包含package.json和入口脚本。")])])},[],!1,null,null,null);e.default=n.exports}}]);