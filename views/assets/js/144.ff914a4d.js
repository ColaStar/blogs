(window.webpackJsonp=window.webpackJsonp||[]).push([[144],{624:function(s,t,a){"use strict";a.r(t);var e=a(63),n=Object(e.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"git代码提交规范"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#git代码提交规范"}},[s._v("#")]),s._v(" Git代码提交规范")]),s._v(" "),a("ul",[a("li",[s._v("用什么规范？")]),s._v(" "),a("li",[s._v("Quick Start\n"),a("ul",[a("li",[s._v("1.全局安装commitizen & cz-conventional-changelog")]),s._v(" "),a("li",[s._v("2.项目内安装commitlint & husky")]),s._v(" "),a("li",[s._v("3.添加相应配置")]),s._v(" "),a("li",[s._v("4.使用")])])]),s._v(" "),a("li",[s._v("Commit message规范在rrd-fe落地使用情况\n"),a("ul",[a("li",[s._v("1.type")]),s._v(" "),a("li",[s._v("2.scope")]),s._v(" "),a("li",[s._v("3.body")]),s._v(" "),a("li",[s._v("4.break changes")]),s._v(" "),a("li",[s._v("5.affect issues")])])]),s._v(" "),a("li",[s._v("示例")]),s._v(" "),a("li",[s._v("扩展阅读")])]),s._v(" "),a("p",[s._v("git是现在市面上最流行的版本控制工具，书写良好的commit message能大大提高代码维护的效率。但是在日常开发中由于缺少对于commit message的约束，导致填写内容随意、质量参差不齐，可读性低亦难以维护。在项目中引入commit message规范已是迫在眉睫。")]),s._v(" "),a("h2",{attrs:{id:"用什么规范"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#用什么规范"}},[s._v("#")]),s._v(" 用什么规范？")]),s._v(" "),a("p",[s._v("现在市面上比较流行的方案是约定式提交规范（Conventional Commits），它受到了Angular提交准则的启发，并在很大程度上以其为依据。约定式提交规范是一种基于提交消息的轻量级约定。它提供了一组用于创建清晰的提交历史的简单规则；这使得编写基于规范的自动化工具变得更容易。这个约定与SemVer相吻合，在提交信息中描述新特性、bug 修复和破坏性变更。它的 message 格式如下:")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("<类型>[可选的作用域]: <描述>\n\n[可选的正文]\n\n[可选的脚注]\n\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br")])]),a("h2",{attrs:{id:"quick-start"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#quick-start"}},[s._v("#")]),s._v(" Quick Start")]),s._v(" "),a("h3",{attrs:{id:"_1-全局安装commitizen-cz-conventional-changelog"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-全局安装commitizen-cz-conventional-changelog"}},[s._v("#")]),s._v(" 1.全局安装commitizen & cz-conventional-changelog")]),s._v(" "),a("p",[a("code",[s._v("commitizen")]),s._v("是一个撰写合格"),a("strong",[s._v("commit message")]),s._v("的工具，用于代替"),a("code",[s._v("git commit")]),s._v(" 指令，而"),a("code",[s._v("cz-conventional-changelog")]),s._v("适配器提供"),a("code",[s._v("conventional-changelog")]),s._v("标准（约定式提交标准）。基于不同需求，也可以使用不同适配器;")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('npm install -g commitizen cz-conventional-changelog\necho \'{ "path": "cz-conventional-changelog" }\' > ~/.czrc\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("p",[s._v("安装完毕后，可直接使用"),a("code",[s._v("git cz")]),s._v("来取代"),a("code",[s._v("git commit")]),s._v("。")]),s._v(" "),a("p",[s._v("全局模式下，需要"),a("code",[s._v("~/.czrc")]),s._v(" 配置文件, 为"),a("code",[s._v("commitizen")]),s._v("指定"),a("code",[s._v("Adapter")]),s._v("。")]),s._v(" "),a("h3",{attrs:{id:"_2-项目内安装commitlint-husky"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-项目内安装commitlint-husky"}},[s._v("#")]),s._v(" 2.项目内安装commitlint & husky")]),s._v(" "),a("p",[a("code",[s._v("commitlint")]),s._v("负责用于对"),a("code",[s._v("commit message")]),s._v("进行格式校验，"),a("code",[s._v("husky")]),s._v("负责提供更易用的"),a("code",[s._v("git hook")]),s._v("。")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("//Use npm\nnpm i -D husky @commitlint/config-conventional @commitlint/cli\n\n//Use yarn\nyarn add husky @commitlint/config-conventional @commitlint/cli -D\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br")])]),a("p",[s._v("commitlint只能做格式规范，无法触及内容。对于内容质量的把控只能靠我们自己。")]),s._v(" "),a("h3",{attrs:{id:"_3-添加相应配置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-添加相应配置"}},[s._v("#")]),s._v(" 3.添加相应配置")]),s._v(" "),a("p",[s._v("创建commitlint.config.js")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("# In the same path as package.json\n\necho 'module.exports = {extends: [\"@commitlint/config-conventional\"]};' > ./commitlint.config.js\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("p",[s._v("引入husky")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('# package.json\n\n...,\n"husky": {\n    "hooks": {\n      "commit-msg": "commitlint -e $GIT_PARAMS"\n    }\n}\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br")])]),a("h3",{attrs:{id:"_4-使用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-使用"}},[s._v("#")]),s._v(" 4. 使用")]),s._v(" "),a("p",[s._v("执行git cz进入interactive模式，根据提示依次填写")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("1.Select the type of change that you're committing 选择改动类型 (<type>)\n\n2.What is the scope of this change (e.g. component or file name)? 填写改动范围 (<scope>)\n\n3.Write a short, imperative tense description of the change: 写一个精简的描述 (<subject>)\n\n4.Provide a longer description of the change: (press enter to skip) 对于改动写一段长描述 (<body>)\n\n5.Are there any breaking changes? (y/n) 是破坏性修改吗？默认n (<footer>)\n\n6.Does this change affect any openreve issues? (y/n) 改动修复了哪个问题？默认n (<footer>)\n\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br")])]),a("p",[s._v("生成的commit message格式如下：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("<type>(<scope>): <subject>\n<BLANK LINE>\n<body>\n<BLANK LINE>\n<footer>\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br")])]),a("p",[s._v("填写完毕后，"),a("strong",[s._v("husky")]),s._v("会调用"),a("strong",[s._v("commitlint")]),s._v("对"),a("strong",[s._v("message")]),s._v("进行格式校验，默认规定"),a("strong",[s._v("type")]),s._v("及"),a("strong",[s._v("subject")]),s._v("为必填项。")]),s._v(" "),a("p",[s._v("任何"),a("code",[s._v("git commit")]),s._v("指令的"),a("strong",[s._v("option")]),s._v("都能用在 "),a("code",[s._v("git cz")]),s._v("指令上, 例如"),a("code",[s._v("git cz -a")])]),s._v(" "),a("h2",{attrs:{id:"commit-message规范在rrd-fe落地使用情况"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#commit-message规范在rrd-fe落地使用情况"}},[s._v("#")]),s._v(" Commit message规范在rrd-fe落地使用情况")]),s._v(" "),a("p",[s._v("针对团队目前使用的情况，来拟定了commit message每一部分的填写规则。")]),s._v(" "),a("h3",{attrs:{id:"_1-type"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-type"}},[s._v("#")]),s._v(" 1. type")]),s._v(" "),a("p",[s._v("type为必填项，用于指定commit的类型，约定了feat、fix两个主要type，以及docs、style、build、refactor、revert五个特殊type，其余type暂不使用。")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("# 主要type\nfeat:     增加新功能\nfix:      修复bug\n\n# 特殊type\ndocs:     只改动了文档相关的内容\nstyle:    不影响代码含义的改动，例如去掉空格、改变缩进、增删分号\nbuild:    构造工具的或者外部依赖的改动，例如webpack，npm\nrefactor: 代码重构时使用\nrevert:   执行git revert打印的message\n\n# 暂不使用type\ntest:     添加测试或者修改现有测试\nperf:     提高性能的改动\nci:       与CI（持续集成服务）有关的改动\nchore:    不修改src或者test的其余修改，例如构建过程或辅助工具的变动\n\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br")])]),a("p",[s._v("当一次改动包括主要type与特殊type时，统一采用主要type。")]),s._v(" "),a("h3",{attrs:{id:"_2-scope"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-scope"}},[s._v("#")]),s._v(" 2. scope")]),s._v(" "),a("p",[s._v("scope也为必填项，用于描述改动的范围，格式为项目名/模块名，例如：node-pc/common rrd-h5/activity，而we-sdk不需指定模块名。如果一次commit修改多个模块，建议拆分成多次commit，以便更好追踪和维护。")]),s._v(" "),a("h3",{attrs:{id:"_3-body"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-body"}},[s._v("#")]),s._v(" 3. body")]),s._v(" "),a("p",[s._v("body填写详细描述，主要描述改动之前的情况及修改动机，对于小的修改不作要求，但是重大需求、更新等必须添加body来作说明。")]),s._v(" "),a("h3",{attrs:{id:"_4-break-changes"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-break-changes"}},[s._v("#")]),s._v(" 4. break changes")]),s._v(" "),a("p",[s._v("break changes指明是否产生了破坏性修改，涉及break changes的改动必须指明该项，类似版本升级、接口参数减少、接口删除、迁移等。")]),s._v(" "),a("h3",{attrs:{id:"_5-affect-issues"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_5-affect-issues"}},[s._v("#")]),s._v(" 5. affect issues")]),s._v(" "),a("p",[s._v("affect issues指明是否影响了某个问题。例如我们使用jira时，我们在commit message中可以填写其影响的JIRA_ID，若要开启该功能需要先打通jira与gitlab。参考文档：http://docs.gitlab.com/ee/user/pro…")]),s._v(" "),a("p",[s._v("填写方式例如：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("re #JIRA_ID\nfix #JIRA_ID\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("h2",{attrs:{id:"示例"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#示例"}},[s._v("#")]),s._v(" 示例")]),s._v(" "),a("h3",{attrs:{id:"完整的commit-message示例"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#完整的commit-message示例"}},[s._v("#")]),s._v(" 完整的commit message示例")]),s._v(" "),a("p",[a("a",{attrs:{"data-fancybox":"",title:"",href:"http://blog.colastar.club:9527/static/images/commit-lint.jpg"}},[a("img",{attrs:{src:"http://blog.colastar.club:9527/static/images/commit-lint.jpg",alt:""}})])]),s._v(" "),a("h3",{attrs:{id:"相应的git-log"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#相应的git-log"}},[s._v("#")]),s._v(" 相应的git log")]),s._v(" "),a("p",[a("a",{attrs:{"data-fancybox":"",title:"",href:"http://blog.colastar.club:9527/static/images/commitlint-log.jpg"}},[a("img",{attrs:{src:"http://blog.colastar.club:9527/static/images/commitlint-log.jpg",alt:""}})])]),s._v(" "),a("p",[a("a",{attrs:{href:"https://www.conventionalcommits.org/zh-hans/v1.0.0-beta.4/#%e7%ba%a6%e5%ae%9a%e5%bc%8f%e6%8f%90%e4%ba%a4%e8%a7%84%e8%8c%83",target:"_blank",rel:"noopener noreferrer"}},[s._v("介绍约定式提交标准"),a("OutboundLink")],1),s._v(" "),a("code",[s._v("必读")]),s._v(" 介绍约定式提交标准。")]),s._v(" "),a("p",[a("a",{attrs:{href:"https://github.com/conventional-changelog/commitlint/tree/master/%40commitlint/config-conventional#type-enum",target:"_blank",rel:"noopener noreferrer"}},[s._v("扩展"),a("OutboundLink")],1),s._v(" "),a("code",[s._v("必读")]),s._v("  介绍commitlint的校验规则config-conventional，以及一些常见passes/fails情况。")])])}),[],!1,null,null,null);t.default=n.exports}}]);