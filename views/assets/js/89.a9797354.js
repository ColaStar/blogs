(window.webpackJsonp=window.webpackJsonp||[]).push([[89],{249:function(t,_,v){"use strict";v.r(_);var e=v(0),i=Object(e.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var t=this,_=t.$createElement,v=t._self._c||_;return v("div",{staticClass:"content"},[v("h1",{attrs:{id:"git版本管理规范"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#git版本管理规范","aria-hidden":"true"}},[t._v("#")]),t._v(" git版本管理规范")]),t._v(" "),v("h2",{attrs:{id:"一、基本开发流程"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#一、基本开发流程","aria-hidden":"true"}},[t._v("#")]),t._v(" 一、基本开发流程")]),t._v(" "),v("p",[t._v("Issues → 开发 → 评审 → 测试 → 上线")]),t._v(" "),v("h2",{attrs:{id:"二、分支命名"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#二、分支命名","aria-hidden":"true"}},[t._v("#")]),t._v(" 二、分支命名")]),t._v(" "),v("p",[v("strong",[t._v("2.1 主分支")])]),t._v(" "),v("p",[t._v("① "),v("strong",[t._v("master")]),t._v(" ：随时可供在生产环境中部署的代码")]),t._v(" "),v("p",[t._v("② dev： 保存当前稳定并且最新的开a发分支(多人开发同一分支)")]),t._v(" "),v("p",[v("strong",[t._v("2.2 辅助分支")])]),t._v(" "),v("p",[t._v("主要用于新功能的并行开发、对生产代码的缺陷进行紧急修复工作。合并 master后应该立即删除")]),t._v(" "),v("p",[t._v("① 用于开发新功能时所使用的feature分支\n② 用于修正生产代码中的缺陷的bug分支")]),t._v(" "),v("p",[v("strong",[t._v("2.3 根据实际开发情况合理命名分支：分支类型_开发者_时间_开发内容")])]),t._v(" "),v("p",[t._v("①　"),v("code",[t._v("feature")]),t._v("分支:f_yourname_20170416_customLimit")]),t._v(" "),v("p",[t._v("②　"),v("code",[t._v("bug")]),t._v("分支：bug_yourname_20170416_customLimit")]),t._v(" "),v("p",[t._v("③　"),v("code",[t._v("dev")]),t._v("分支：dev_yourname_20170416_customLimit")]),t._v(" "),v("h2",{attrs:{id:"三、git-commit"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#三、git-commit","aria-hidden":"true"}},[t._v("#")]),t._v(" 三、git-commit")]),t._v(" "),v("p",[v("strong",[t._v("3.1什么时候commit？")])]),t._v(" "),v("p",[v("code",[t._v("commit")]),t._v("在什么时候都可以，但是不建议为了保存代码而"),v("code",[t._v("commit")]),t._v("，每一次"),v("code",[t._v("commit")]),t._v("一定是代表代码开发进行到了某一个阶段，可以在后续开发或者合并代码出现错误的时候可以快速回到这个阶段。")]),t._v(" "),v("p",[v("strong",[t._v("3.2 commit注释")])]),t._v(" "),v("p",[t._v("每次提交必须要有提交注释，注释根据本次提交情况，进行简洁描述")]),t._v(" "),v("h2",{attrs:{id:"四、-git-push"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#四、-git-push","aria-hidden":"true"}},[t._v("#")]),t._v(" 四、 Git-push")]),t._v(" "),v("p",[v("strong",[t._v("4.1什么时候push？")])]),t._v(" "),v("p",[t._v("① 代码需要提测，并且自己都测试OK了，如果一次性测试通过则可以把master合并到自己的分支，然后push自己的分支，进行提测")]),t._v(" "),v("p",[t._v("② 代码提测了，如果有问题，把问题修改好后，再push自己的分支。")]),t._v(" "),v("p",[v("strong",[t._v("4.2 push流程")])]),t._v(" "),v("ul",[v("li",[t._v("git fetch")]),t._v(" "),v("li",[t._v("git checkout dev")]),t._v(" "),v("li",[t._v("git branch -b copy_dev(copy新分支进行合并)")]),t._v(" "),v("li",[t._v("git merge origin master (存在冲突必须解决)")])]),t._v(" "),v("p",[v("strong",[t._v("4.3 解决冲突：")])]),t._v(" "),v("p",[t._v("1⃣️ "),v("code",[t._v("git")]),t._v("reset --HARD HEAD^")]),t._v(" "),v("p",[t._v("2⃣️"),v("code",[t._v("git log")]),t._v(" (查看你的所有提交的历史)")]),t._v(" "),v("ul",[v("li",[v("p",[v("code",[t._v("git checkout dev")])])]),t._v(" "),v("li",[v("p",[v("code",[t._v("it merge copy_devg")])])]),t._v(" "),v("li",[v("p",[v("code",[t._v("git branch -d copy_dev")])])]),t._v(" "),v("li",[v("p",[v("code",[t._v("git push origin dev")])])])]),t._v(" "),v("h2",{attrs:{id:"五、git-issue"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#五、git-issue","aria-hidden":"true"}},[t._v("#")]),t._v(" 五、Git-issue")]),t._v(" "),v("p",[v("strong",[t._v("5.1对需求完全了解后，开发前先整理思路，在git上填写Issues")])])])}],!1,null,null,null);_.default=i.exports}}]);