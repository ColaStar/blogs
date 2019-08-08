(window.webpackJsonp=window.webpackJsonp||[]).push([[88],{150:function(t,a,e){"use strict";e.r(a);var n=e(0),r=Object(n.a)({},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("p",[e("font",{attrs:{color:"blue"}},[t._v("常用 Git 命令清单。几个专用名词的译名如下。")])],1),t._v(" "),e("ul",[e("li",[t._v("Workspace：工作区")]),t._v(" "),e("li",[t._v("Index / Stage：暂存区rm")]),t._v(" "),e("li",[t._v("Repository：仓库区（或本地仓库）")]),t._v(" "),e("li",[t._v("Remote：远程仓库")])]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("git pull origin master\n")])])]),e("h3",{attrs:{id:"一、新建代码库"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#一、新建代码库","aria-hidden":"true"}},[t._v("#")]),t._v(" 一、新建代码库")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("# 在当前目录新建一个Git代码库\n$ git init\n\n# 新建一个目录，将其初始化为Git代码库\n$ git init [project-name]\n\n# 下载一个项目和它的整个代码历史\n$ git clone [url] \n$ git clone [url]  [project-name]\n")])])]),e("h3",{attrs:{id:"二、配置"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#二、配置","aria-hidden":"true"}},[t._v("#")]),t._v(" 二、配置")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v('Git的设置文件为.gitconfig，它可以在用户主目录下（全局配置），也可以在项目目录下（项目配置）。\n\n# 显示当前的Git配置\n$ git config --list\n\n# 编辑Git配置文件\n$ git config -e [--global]\n\n# 设置提交代码时的用户信息\n$ git config [--global] user.name "[name]"\n$ git config [--global] user.email "[email address]"\n\n# 查询用户信息\n$ git config --list\n\n#登录错误后的重新登录\n$ git config --system --unset credential.helper\n')])])]),e("h3",{attrs:{id:"三、增加-删除文件"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#三、增加-删除文件","aria-hidden":"true"}},[t._v("#")]),t._v(" 三、增加/删除文件")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("# 添加指定文件到暂存区\n$ git add [file1] [file2] ...\n\n# 添加指定目录到暂存区，包括子目录\n$ git add [dir]\n\n# 添加当前目录的所有文件到暂存区\n$ git add .\n\n# 添加每个变化前，都会要求确认\n# 对于同一个文件的多处变化，可以实现分次提交\n$ git add -p\n\n# 删除工作区文件，并且将这次删除放入暂存区\n$ git rm [file1] [file2] …\nrm -rf  删除文件夹\n\n# 停止追踪指定文件，但该文件会保留在工作区\n$ git rm --cached [file]\n\n# 改名文件，并且将这个改名放入暂存区\n$ git mv [file-original] [file-renamed]\n")])])]),e("h3",{attrs:{id:"四、代码提交"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#四、代码提交","aria-hidden":"true"}},[t._v("#")]),t._v(" 四、代码提交")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("# 提交暂存区到仓库区\n$ git commit -m [message]\n\n# 提交暂存区的指定文件到仓库区\n$ git commit [file1] [file2] ... -m [message]\n\n# 提交工作区自上次commit之后的变化，直接到仓库区\n$ git commit -a\n\n# 提交时显示所有diff信息\n$ git commit -v\n\n# 使用一次新的commit，替代上一次提交\n# 如果代码没有任何新变化，则用来改写上一次commit的提交信息\n$ git commit --amend -m [message]\n\n# 重做上一次commit，并包括指定文件的新变化\n$ git commit --amend [file1] [file2] ...\n")])])]),e("h3",{attrs:{id:"五、分支"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#五、分支","aria-hidden":"true"}},[t._v("#")]),t._v(" 五、分支")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("# 查看当前分支\n$ git branch -vv\n\n# 列出所有本地分支\n$ git branch\n\n# 列出所有远程分支\n$ git branch -r\n\n# 列出所有本地分支和远程分支\n$ git branch -a\n\n# 新建一个分支，但依然停留在当前分支\n$ git branch [branch-name]\n\n# 新建一个分支，并切换到该分支\n$ git checkout -b [branch]\n\n# 切换到别的分支\n$ git checkout -b branch-name [branch]\n# 新建一个分支，指向指定commit\n$ git branch [branch] [commit]\n\n# 新建一个分支，与指定的远程分支建立追踪关系\n$ 、\n\n# 切换到指定分支，并更新工作区\n$ git checkout [branch-name]\n\n# 切换到上一个分支\n$ git checkout -\n\n# 建立追踪关系，在现有分支与指定的远程分支之间\n$ git branch --set-upstream [branch] [remote-branch]\n\n# 合并指定分支到当前分支\n$ git merge [branch]\n\n# 选择一个commit，合并进当前分支\n$ git cherry-pick [commit]\n\n# 删除分支\n$ git branch -d [branch-name]\n\n# 删除远程分支\n$ git push origin --delete [branch-name]\n$ git branch -dr [remote/branch]\n")])])]),e("h3",{attrs:{id:"六、标签"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#六、标签","aria-hidden":"true"}},[t._v("#")]),t._v(" 六、标签")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("# 列出所有tag\n$ git tag\n\n# 新建一个tag在当前commit\n$ git tag [tag]\n\n# 新建一个tag在指定commit\n$ git tag [tag] [commit]\n\n# 删除本地tag\n$ git tag -d [tag]\n\n# 删除远程tag\n$ git push origin :refs/tags/[tagName]\n\n# 查看tag信息\n$ git show [tag]\n\n# 提交指定tag\n$ git push [remote] [tag]\n\n# 提交所有tag\n$ git push [remote] --tags\n\n# 新建一个分支，指向某个tag\n$ git checkout -b [branch] [tag]\n")])])]),e("h3",{attrs:{id:"七、查看信息"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#七、查看信息","aria-hidden":"true"}},[t._v("#")]),t._v(" 七、查看信息")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v('# 显示有变更的文件\n$ git status\n\n# 显示当前分支的版本历史\n$ git log\n\n# 显示commit历史，以及每次commit发生变更的文件\n$ git log --stat\n\n# 搜索提交历史，根据关键词\n$ git log -S [keyword]\n\ngit checkout . #本地所有修改的。没有的提交的，都返回到原来的状态\ngit stash #把所有没有提交的修改暂存到stash里面。可用git stash pop回复。\ngit reset --hard HASH #返回到某个节点，不保留修改。\ngit reset --soft HASH #返回到某个节点。保留修改\n\ngit clean -df #返回到某个节点\ngit clean 参数\n    -n 显示 将要 删除的 文件 和  目录\n    -f 删除 文件\n    -df 删除 文件 和 目录\n\n# 显示某个commit之后的所有变动，每个commit占据一行\n$ git log [tag] HEAD --pretty=format:%s\n\n# 显示某个commit之后的所有变动，其"提交说明"必须符合搜索条件\n$ git log [tag] HEAD --grep feature\n\n# 显示某个文件的版本历史，包括文件改名\n$ git log --follow [file]\n$ git whatchanged [file]\n\n# 显示指定文件相关的每一次diff\n$ git log -p [file]\n\n# 显示过去5次提交\n$ git log -5 --pretty --oneline\n\n# 显示所有提交过的用户，按提交次数排序\n$ git shortlog -sn\n\n# 显示指定文件是什么人在什么时间修改过\n$ git blame [file]\n\n# 显示暂存区和工作区的差异\n$ git diff\n\n# 显示暂存区和上一个commit的差异\n$ git diff --cached [file]\n\n# 显示工作区与当前分支最新commit之间的差异\n$ git diff HEAD\n\n# 显示两次提交之间的差异\n$ git diff [first-branch]...[second-branch]\n\n# 显示今天你写了多少行代码\n$ git diff --shortstat "@{0 day ago}"\n\n# 显示某次提交的元数据和内容变化\n$ git show [commit]\n\n# 显示某次提交发生变化的文件\n$ git show --name-only [commit]\n\n# 显示某次提交时，某个文件的内容\n$ git show [commit]:[filename]\n\n# 显示当前分支的最近几次提交\n$ git reflog\n')])])]),e("h3",{attrs:{id:"八、远程同步"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#八、远程同步","aria-hidden":"true"}},[t._v("#")]),t._v(" 八、远程同步")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("# 下载远程仓库的所有变动\n$ git fetch [remote]\n\n# 显示所有远程仓库\n$ git remote -v\n\n# 显示某个远程仓库的信息\n$ git remote show [remote]\n\n# 增加一个新的远程仓库，并命名\n$ git remote add [shortname] [url]\n\n# 取回远程仓库的变化，并与本地分支合并\n$ git pull [remote] [branch]\n\n# 上传本地指定分支到远程仓库\n$ git push [remote] [branch]\n\n# 强行推送当前分支到远程仓库，即使有冲突\n$ git push [remote] --force\n\n# 推送所有分支到远程仓库\n$ git push [remote] --all\n")])])]),e("h3",{attrs:{id:"九、撤销"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#九、撤销","aria-hidden":"true"}},[t._v("#")]),t._v(" 九、撤销")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("# 恢复暂存区的指定文件到工作区\n$ git checkout [file]\n\n# 恢复某个commit的指定文件到暂存区和工作区\n$ git checkout [commit] [file]\n\n# 恢复暂存区的所有文件到工作区\n$ git checkout .\n\n# 重置暂存区的指定文件，与上一次commit保持一致，但工作区不变\n$ git reset [file]\n\n# 重置暂存区与工作区，与上一次commit保持一致\n$ git reset --hard\n\n# 重置当前分支的指针为指定commit，同时重置暂存区，但工作区不变\n$ git reset [commit]\n\n# 重置当前分支的HEAD为指定commit，同时重置暂存区和工作区，与指定commit一致\n$ git reset --hard [commit]\n\n# 重置当前HEAD为指定commit，但保持暂存区和工作区不变\n$ git reset --keep [commit]\n\n# 新建一个commit，用来撤销指定commit\n# 后者的所有变化都将被前者抵消，并且应用到当前分支\n$ git revert [commit]\n\n# 暂时将未提交的变化移除，稍后再移入\n$ git stash\n$ git stash pop\n")])])]),e("h3",{attrs:{id:"十、其他"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#十、其他","aria-hidden":"true"}},[t._v("#")]),t._v(" 十、其他")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("# 生成一个可供发布的压缩包\n$ git archive\n")])])]),e("h3",{attrs:{id:"十二、高级操作"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#十二、高级操作","aria-hidden":"true"}},[t._v("#")]),t._v(" 十二、高级操作")]),t._v(" "),e("h4",{attrs:{id:"rebase-合并"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#rebase-合并","aria-hidden":"true"}},[t._v("#")]),t._v(" Rebase 合并")]),t._v(" "),e("p",[t._v("该命令可以让和 "),e("code",[t._v("merge")]),t._v(" 命令得到的结果基本是一致的。")]),t._v(" "),e("p",[t._v("通常使用 "),e("code",[t._v("merge")]),t._v(" 操作将分支上的代码合并到 "),e("code",[t._v("master")]),t._v(" 中，分支样子如下所示\n"),e("a",{attrs:{"data-fancybox":"",title:"git-merge",href:"https://raw.githubusercontent.com/ColaStar/static/master/images/git-merge.png"}},[e("img",{attrs:{src:"https://raw.githubusercontent.com/ColaStar/static/master/images/git-merge.png",alt:"git-merge"}})]),t._v("\n使用 "),e("code",[t._v("rebase")]),t._v(" 后，会将 "),e("code",[t._v("develop")]),t._v(" 上的 "),e("code",[t._v("commit")]),t._v(" 按顺序移到 "),e("code",[t._v("master")]),t._v(" 的第三个 "),e("code",[t._v("commit")]),t._v(" 后面，分支样子如下所示\n"),e("a",{attrs:{"data-fancybox":"",title:"git-rebase",href:"https://raw.githubusercontent.com/ColaStar/static/master/images/git-rebase.png"}},[e("img",{attrs:{src:"https://raw.githubusercontent.com/ColaStar/static/master/images/git-rebase.png",alt:"git-rebase"}})])]),t._v(" "),e("p",[e("code",[t._v("Rebase")]),t._v(" 对比 "),e("code",[t._v("merge")]),t._v("，优势在于合并后的结果很清晰，只有一条线，劣势在于如果一旦出现冲突，解决冲突很麻烦，可能要解决多个冲突，但是 "),e("code",[t._v("merge")]),t._v(" 出现冲突只需要解决一次。")]),t._v(" "),e("p",[t._v("使用 "),e("code",[t._v("rebase")]),t._v(" 应该在需要被 "),e("code",[t._v("rebase")]),t._v(" 的分支上操作，并且该分支是本地分支。如果 "),e("code",[t._v("develop")]),t._v(" 分支需要 "),e("code",[t._v("rebase")]),t._v(" 到 "),e("code",[t._v("master")]),t._v(" 上去，那么应该如下操作")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("## branch develop\ngit rebase master\ngit checkout master\n## 用于将 `master` 上的 HEAD 移动到最新的 commit\ngit merge develop\n")])])]),e("h4",{attrs:{id:"stash"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#stash","aria-hidden":"true"}},[t._v("#")]),t._v(" stash")]),t._v(" "),e("p",[e("code",[t._v("stash")]),t._v(" 用于临时保存工作目录的改动。开发中可能会遇到代码写一半需要切分支打包的问题，如果这时候你不想 "),e("code",[t._v("commit")]),t._v(" 的话，就可以使用该命令")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("git stash\n")])])]),e("p",[t._v("使用该命令可以暂存你的工作目录，后面想恢复工作目录，只需要使用")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("git stash pop\n")])])]),e("p",[t._v("这样你之前临时保存的代码又回来了")]),t._v(" "),e("h4",{attrs:{id:"reflog"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#reflog","aria-hidden":"true"}},[t._v("#")]),t._v(" reflog")]),t._v(" "),e("p",[e("code",[t._v("reflog")]),t._v(" 可以看到 "),e("code",[t._v("HEAD")]),t._v(" 的移动记录，假如之前误删了一个分支，可以通过 "),e("code",[t._v("git reflog")]),t._v(" 看到移动 "),e("code",[t._v("HEAD")]),t._v(" 的哈希值")]),t._v(" "),e("p",[e("a",{attrs:{"data-fancybox":"",title:"git-reflog",href:"https://raw.githubusercontent.com/ColaStar/static/master/images/git-reflog.png"}},[e("img",{attrs:{src:"https://raw.githubusercontent.com/ColaStar/static/master/images/git-reflog.png",alt:"git-reflog"}})])]),t._v(" "),e("p",[t._v("从图中可以看出，"),e("code",[t._v("HEAD")]),t._v(" 的最后一次移动行为是 "),e("code",[t._v("merge")]),t._v(" 后，接下来分支 "),e("code",[t._v("new")]),t._v(" 就被删除了，那么我们可以通过以下命令找回 "),e("code",[t._v("new")]),t._v(" 分支")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("git checkout 37d9aca\ngit checkout -b new\n")])])]),e("p",[t._v("PS：reflog 记录是时效的，只会保存一段时间内的记录.")]),t._v(" "),e("h4",{attrs:{id:"reset"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#reset","aria-hidden":"true"}},[t._v("#")]),t._v(" Reset")]),t._v(" "),e("p",[t._v("如果你想删除刚写的 commit，就可以通过以下命令实现")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("git reset --hard HEAD^\n")])])]),e("p",[t._v("但是 reset 的本质并不是删除了 commit，而是重新设置了 HEAD 和它指向的 branch。")]),t._v(" "),e("h3",{attrs:{id:"注意"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#注意","aria-hidden":"true"}},[t._v("#")]),t._v(" 注意")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("git 没有commit 注释\n\ngit fetch和git pull的区别\n\n- git pull：相当于是从远程获取最新版本并merge到本地\n- git fetch：相当于是从远程获取最新版本到本地，不会自动merge\n")])])])])},[],!1,null,null,null);a.default=r.exports}}]);