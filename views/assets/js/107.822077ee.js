(window.webpackJsonp=window.webpackJsonp||[]).push([[107],{159:function(s,a,n){"use strict";n.r(a);var t=n(0),e=Object(t.a)({},function(){var s=this,a=s.$createElement,n=s._self._c||a;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("h1",{attrs:{id:"常用-git-命令清单"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#常用-git-命令清单","aria-hidden":"true"}},[s._v("#")]),s._v(" 常用 Git 命令清单")]),s._v(" "),n("p",[n("font",{attrs:{color:"blue"}},[s._v("常用 Git 命令清单。几个专用名词的译名如下。")])],1),s._v(" "),n("ul",[n("li",[s._v("Workspace：工作区")]),s._v(" "),n("li",[s._v("Index / Stage：暂存区rm")]),s._v(" "),n("li",[s._v("Repository：仓库区（或本地仓库）")]),s._v(" "),n("li",[s._v("Remote：远程仓库")])]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("git pull origin master\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("h3",{attrs:{id:"一、新建代码库"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#一、新建代码库","aria-hidden":"true"}},[s._v("#")]),s._v(" 一、新建代码库")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("# 在当前目录新建一个Git代码库\n$ git init\n\n# 新建一个目录，将其初始化为Git代码库\n$ git init [project-name]\n\n# 下载一个项目和它的整个代码历史\n$ git clone [url] \n$ git clone [url]  [project-name]\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br")])]),n("h3",{attrs:{id:"二、配置"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#二、配置","aria-hidden":"true"}},[s._v("#")]),s._v(" 二、配置")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v('Git的设置文件为.gitconfig，它可以在用户主目录下（全局配置），也可以在项目目录下（项目配置）。\n\n# 显示当前的Git配置\n$ git config --list\n\n# 编辑Git配置文件\n$ git config -e [--global]\n\n# 设置提交代码时的用户信息\n$ git config [--global] user.name "[name]"\n$ git config [--global] user.email "[email address]"\n\n# 查询用户信息\n$ git config --list\n\n#登录错误后的重新登录\n$ git config --system --unset credential.helper\n')])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br")])]),n("h3",{attrs:{id:"三、增加-删除文件"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#三、增加-删除文件","aria-hidden":"true"}},[s._v("#")]),s._v(" 三、增加/删除文件")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("# 添加指定文件到暂存区\n$ git add [file1] [file2] ...\n\n# 添加指定目录到暂存区，包括子目录\n$ git add [dir]\n\n# 添加当前目录的所有文件到暂存区\n$ git add .\n\n# 添加每个变化前，都会要求确认\n# 对于同一个文件的多处变化，可以实现分次提交\n$ git add -p\n\n# 删除工作区文件，并且将这次删除放入暂存区\n$ git rm [file1] [file2] …\nrm -rf  删除文件夹\n\n# 停止追踪指定文件，但该文件会保留在工作区\n$ git rm --cached [file]\n\n# 改名文件，并且将这个改名放入暂存区\n$ git mv [file-original] [file-renamed]\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br")])]),n("h3",{attrs:{id:"四、代码提交"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#四、代码提交","aria-hidden":"true"}},[s._v("#")]),s._v(" 四、代码提交")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("# 提交暂存区到仓库区\n$ git commit -m [message]\n\n# 提交暂存区的指定文件到仓库区\n$ git commit [file1] [file2] ... -m [message]\n\n# 提交工作区自上次commit之后的变化，直接到仓库区\n$ git commit -a\n\n# 提交时显示所有diff信息\n$ git commit -v\n\n# 使用一次新的commit，替代上一次提交\n# 如果代码没有任何新变化，则用来改写上一次commit的提交信息\n$ git commit --amend -m [message]\n\n# 重做上一次commit，并包括指定文件的新变化\n$ git commit --amend [file1] [file2] ...\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br")])]),n("h3",{attrs:{id:"五、分支"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#五、分支","aria-hidden":"true"}},[s._v("#")]),s._v(" 五、分支")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("# 查看当前分支\n$ git branch -vv\n\n# 列出所有本地分支\n$ git branch\n\n# 列出所有远程分支\n$ git branch -r\n\n# 列出所有本地分支和远程分支\n$ git branch -a\n\n# 新建一个分支，但依然停留在当前分支\n$ git branch [branch-name]\n\n# 新建一个分支，并切换到该分支\n$ git checkout -b [branch]\n\n# 切换到别的分支\n$ git checkout -b branch-name [branch]\n# 新建一个分支，指向指定commit\n$ git branch [branch] [commit]\n\n# 新建一个分支，与指定的远程分支建立追踪关系\n$ 、\n\n# 切换到指定分支，并更新工作区\n$ git checkout [branch-name]\n\n# 切换到上一个分支\n$ git checkout -\n\n# 建立追踪关系，在现有分支与指定的远程分支之间\n$ git branch --set-upstream [branch] [remote-branch]\n\n# 合并指定分支到当前分支\n$ git merge [branch]\n\n# 选择一个commit，合并进当前分支\n$ git cherry-pick [commit]\n\n# 删除分支\n$ git branch -d [branch-name]\n\n# 删除远程分支\n$ git push origin --delete [branch-name]\n$ git branch -dr [remote/branch]\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br"),n("span",{staticClass:"line-number"},[s._v("23")]),n("br"),n("span",{staticClass:"line-number"},[s._v("24")]),n("br"),n("span",{staticClass:"line-number"},[s._v("25")]),n("br"),n("span",{staticClass:"line-number"},[s._v("26")]),n("br"),n("span",{staticClass:"line-number"},[s._v("27")]),n("br"),n("span",{staticClass:"line-number"},[s._v("28")]),n("br"),n("span",{staticClass:"line-number"},[s._v("29")]),n("br"),n("span",{staticClass:"line-number"},[s._v("30")]),n("br"),n("span",{staticClass:"line-number"},[s._v("31")]),n("br"),n("span",{staticClass:"line-number"},[s._v("32")]),n("br"),n("span",{staticClass:"line-number"},[s._v("33")]),n("br"),n("span",{staticClass:"line-number"},[s._v("34")]),n("br"),n("span",{staticClass:"line-number"},[s._v("35")]),n("br"),n("span",{staticClass:"line-number"},[s._v("36")]),n("br"),n("span",{staticClass:"line-number"},[s._v("37")]),n("br"),n("span",{staticClass:"line-number"},[s._v("38")]),n("br"),n("span",{staticClass:"line-number"},[s._v("39")]),n("br"),n("span",{staticClass:"line-number"},[s._v("40")]),n("br"),n("span",{staticClass:"line-number"},[s._v("41")]),n("br"),n("span",{staticClass:"line-number"},[s._v("42")]),n("br"),n("span",{staticClass:"line-number"},[s._v("43")]),n("br"),n("span",{staticClass:"line-number"},[s._v("44")]),n("br"),n("span",{staticClass:"line-number"},[s._v("45")]),n("br"),n("span",{staticClass:"line-number"},[s._v("46")]),n("br"),n("span",{staticClass:"line-number"},[s._v("47")]),n("br")])]),n("h3",{attrs:{id:"六、标签"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#六、标签","aria-hidden":"true"}},[s._v("#")]),s._v(" 六、标签")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("# 列出所有tag\n$ git tag\n\n# 新建一个tag在当前commit\n$ git tag [tag]\n\n# 新建一个tag在指定commit\n$ git tag [tag] [commit]\n\n# 删除本地tag\n$ git tag -d [tag]\n\n# 删除远程tag\n$ git push origin :refs/tags/[tagName]\n\n# 查看tag信息\n$ git show [tag]\n\n# 提交指定tag\n$ git push [remote] [tag]\n\n# 提交所有tag\n$ git push [remote] --tags\n\n# 新建一个分支，指向某个tag\n$ git checkout -b [branch] [tag]\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br"),n("span",{staticClass:"line-number"},[s._v("23")]),n("br"),n("span",{staticClass:"line-number"},[s._v("24")]),n("br"),n("span",{staticClass:"line-number"},[s._v("25")]),n("br"),n("span",{staticClass:"line-number"},[s._v("26")]),n("br")])]),n("h3",{attrs:{id:"七、查看信息"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#七、查看信息","aria-hidden":"true"}},[s._v("#")]),s._v(" 七、查看信息")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v('# 显示有变更的文件\n$ git status\n\n# 显示当前分支的版本历史\n$ git log\n\n# 显示commit历史，以及每次commit发生变更的文件\n$ git log --stat\n\n# 搜索提交历史，根据关键词\n$ git log -S [keyword]\n\ngit checkout . #本地所有修改的。没有的提交的，都返回到原来的状态\ngit stash #把所有没有提交的修改暂存到stash里面。可用git stash pop回复。\ngit reset --hard HASH #返回到某个节点，不保留修改。\ngit reset --soft HASH #返回到某个节点。保留修改\n\ngit clean -df #返回到某个节点\ngit clean 参数\n    -n 显示 将要 删除的 文件 和  目录\n    -f 删除 文件\n    -df 删除 文件 和 目录\n\n# 显示某个commit之后的所有变动，每个commit占据一行\n$ git log [tag] HEAD --pretty=format:%s\n\n# 显示某个commit之后的所有变动，其"提交说明"必须符合搜索条件\n$ git log [tag] HEAD --grep feature\n\n# 显示某个文件的版本历史，包括文件改名\n$ git log --follow [file]\n$ git whatchanged [file]\n\n# 显示指定文件相关的每一次diff\n$ git log -p [file]\n\n# 显示过去5次提交\n$ git log -5 --pretty --oneline\n\n# 显示所有提交过的用户，按提交次数排序\n$ git shortlog -sn\n\n# 显示指定文件是什么人在什么时间修改过\n$ git blame [file]\n\n# 显示暂存区和工作区的差异\n$ git diff\n\n# 显示暂存区和上一个commit的差异\n$ git diff --cached [file]\n\n# 显示工作区与当前分支最新commit之间的差异\n$ git diff HEAD\n\n# 显示两次提交之间的差异\n$ git diff [first-branch]...[second-branch]\n\n# 显示今天你写了多少行代码\n$ git diff --shortstat "@{0 day ago}"\n\n# 显示某次提交的元数据和内容变化\n$ git show [commit]\n\n# 显示某次提交发生变化的文件\n$ git show --name-only [commit]\n\n# 显示某次提交时，某个文件的内容\n$ git show [commit]:[filename]\n\n# 显示当前分支的最近几次提交\n$ git reflog\n')])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br"),n("span",{staticClass:"line-number"},[s._v("23")]),n("br"),n("span",{staticClass:"line-number"},[s._v("24")]),n("br"),n("span",{staticClass:"line-number"},[s._v("25")]),n("br"),n("span",{staticClass:"line-number"},[s._v("26")]),n("br"),n("span",{staticClass:"line-number"},[s._v("27")]),n("br"),n("span",{staticClass:"line-number"},[s._v("28")]),n("br"),n("span",{staticClass:"line-number"},[s._v("29")]),n("br"),n("span",{staticClass:"line-number"},[s._v("30")]),n("br"),n("span",{staticClass:"line-number"},[s._v("31")]),n("br"),n("span",{staticClass:"line-number"},[s._v("32")]),n("br"),n("span",{staticClass:"line-number"},[s._v("33")]),n("br"),n("span",{staticClass:"line-number"},[s._v("34")]),n("br"),n("span",{staticClass:"line-number"},[s._v("35")]),n("br"),n("span",{staticClass:"line-number"},[s._v("36")]),n("br"),n("span",{staticClass:"line-number"},[s._v("37")]),n("br"),n("span",{staticClass:"line-number"},[s._v("38")]),n("br"),n("span",{staticClass:"line-number"},[s._v("39")]),n("br"),n("span",{staticClass:"line-number"},[s._v("40")]),n("br"),n("span",{staticClass:"line-number"},[s._v("41")]),n("br"),n("span",{staticClass:"line-number"},[s._v("42")]),n("br"),n("span",{staticClass:"line-number"},[s._v("43")]),n("br"),n("span",{staticClass:"line-number"},[s._v("44")]),n("br"),n("span",{staticClass:"line-number"},[s._v("45")]),n("br"),n("span",{staticClass:"line-number"},[s._v("46")]),n("br"),n("span",{staticClass:"line-number"},[s._v("47")]),n("br"),n("span",{staticClass:"line-number"},[s._v("48")]),n("br"),n("span",{staticClass:"line-number"},[s._v("49")]),n("br"),n("span",{staticClass:"line-number"},[s._v("50")]),n("br"),n("span",{staticClass:"line-number"},[s._v("51")]),n("br"),n("span",{staticClass:"line-number"},[s._v("52")]),n("br"),n("span",{staticClass:"line-number"},[s._v("53")]),n("br"),n("span",{staticClass:"line-number"},[s._v("54")]),n("br"),n("span",{staticClass:"line-number"},[s._v("55")]),n("br"),n("span",{staticClass:"line-number"},[s._v("56")]),n("br"),n("span",{staticClass:"line-number"},[s._v("57")]),n("br"),n("span",{staticClass:"line-number"},[s._v("58")]),n("br"),n("span",{staticClass:"line-number"},[s._v("59")]),n("br"),n("span",{staticClass:"line-number"},[s._v("60")]),n("br"),n("span",{staticClass:"line-number"},[s._v("61")]),n("br"),n("span",{staticClass:"line-number"},[s._v("62")]),n("br"),n("span",{staticClass:"line-number"},[s._v("63")]),n("br"),n("span",{staticClass:"line-number"},[s._v("64")]),n("br"),n("span",{staticClass:"line-number"},[s._v("65")]),n("br"),n("span",{staticClass:"line-number"},[s._v("66")]),n("br"),n("span",{staticClass:"line-number"},[s._v("67")]),n("br"),n("span",{staticClass:"line-number"},[s._v("68")]),n("br"),n("span",{staticClass:"line-number"},[s._v("69")]),n("br"),n("span",{staticClass:"line-number"},[s._v("70")]),n("br"),n("span",{staticClass:"line-number"},[s._v("71")]),n("br")])]),n("h3",{attrs:{id:"八、远程同步"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#八、远程同步","aria-hidden":"true"}},[s._v("#")]),s._v(" 八、远程同步")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("# 下载远程仓库的所有变动\n$ git fetch [remote]\n\n# 显示所有远程仓库\n$ git remote -v\n\n# 显示某个远程仓库的信息\n$ git remote show [remote]\n\n# 增加一个新的远程仓库，并命名\n$ git remote add [shortname] [url]\n\n# 取回远程仓库的变化，并与本地分支合并\n$ git pull [remote] [branch]\n\n# 上传本地指定分支到远程仓库\n$ git push [remote] [branch]\n\n# 强行推送当前分支到远程仓库，即使有冲突\n$ git push [remote] --force\n\n# 推送所有分支到远程仓库\n$ git push [remote] --all\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br"),n("span",{staticClass:"line-number"},[s._v("23")]),n("br")])]),n("h3",{attrs:{id:"九、撤销"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#九、撤销","aria-hidden":"true"}},[s._v("#")]),s._v(" 九、撤销")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("# 恢复暂存区的指定文件到工作区\n$ git checkout [file]\n\n# 恢复某个commit的指定文件到暂存区和工作区\n$ git checkout [commit] [file]\n\n# 恢复暂存区的所有文件到工作区\n$ git checkout .\n\n# 重置暂存区的指定文件，与上一次commit保持一致，但工作区不变\n$ git reset [file]\n\n# 重置暂存区与工作区，与上一次commit保持一致\n$ git reset --hard\n\n# 重置当前分支的指针为指定commit，同时重置暂存区，但工作区不变\n$ git reset [commit]\n\n# 重置当前分支的HEAD为指定commit，同时重置暂存区和工作区，与指定commit一致\n$ git reset --hard [commit]\n\n# 重置当前HEAD为指定commit，但保持暂存区和工作区不变\n$ git reset --keep [commit]\n\n# 新建一个commit，用来撤销指定commit\n# 后者的所有变化都将被前者抵消，并且应用到当前分支\n$ git revert [commit]\n\n# 暂时将未提交的变化移除，稍后再移入\n$ git stash\n$ git stash pop\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br"),n("span",{staticClass:"line-number"},[s._v("23")]),n("br"),n("span",{staticClass:"line-number"},[s._v("24")]),n("br"),n("span",{staticClass:"line-number"},[s._v("25")]),n("br"),n("span",{staticClass:"line-number"},[s._v("26")]),n("br"),n("span",{staticClass:"line-number"},[s._v("27")]),n("br"),n("span",{staticClass:"line-number"},[s._v("28")]),n("br"),n("span",{staticClass:"line-number"},[s._v("29")]),n("br"),n("span",{staticClass:"line-number"},[s._v("30")]),n("br"),n("span",{staticClass:"line-number"},[s._v("31")]),n("br")])]),n("h3",{attrs:{id:"十、其他"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#十、其他","aria-hidden":"true"}},[s._v("#")]),s._v(" 十、其他")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("# 生成一个可供发布的压缩包\n$ git archive\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br")])]),n("h3",{attrs:{id:"十二、高级操作"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#十二、高级操作","aria-hidden":"true"}},[s._v("#")]),s._v(" 十二、高级操作")]),s._v(" "),n("h4",{attrs:{id:"git命令及别名"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#git命令及别名","aria-hidden":"true"}},[s._v("#")]),s._v(" git命令及别名")]),s._v(" "),n("table",[n("thead",[n("tr",[n("th",[s._v("别名 Alias")]),s._v(" "),n("th",[s._v("命令 Command")]),s._v(" "),n("th",[s._v("如何设置 What to Type")])])]),s._v(" "),n("tbody",[n("tr",[n("td",[s._v("git cm")]),s._v(" "),n("td",[s._v("git commit")]),s._v(" "),n("td",[s._v("git config --global alias.cm commit")])]),s._v(" "),n("tr",[n("td",[s._v("git co")]),s._v(" "),n("td",[s._v("git checkout")]),s._v(" "),n("td",[s._v("git config --global alias.co checkout")])]),s._v(" "),n("tr",[n("td",[s._v("git ac")]),s._v(" "),n("td",[s._v("git add . -A git commit")]),s._v(" "),n("td",[s._v("git config --global alias.ac '!git add -A && git commit'")])]),s._v(" "),n("tr",[n("td",[s._v("git st")]),s._v(" "),n("td",[s._v("git status -sb")]),s._v(" "),n("td",[s._v("git config --global alias.st 'status -sb'")])]),s._v(" "),n("tr",[n("td",[s._v("git tags")]),s._v(" "),n("td",[s._v("git tag -l")]),s._v(" "),n("td",[s._v("git config --global alias.tags 'tag -l'")])]),s._v(" "),n("tr",[n("td",[s._v("git branches")]),s._v(" "),n("td",[s._v("git branch -a")]),s._v(" "),n("td",[s._v("git config --global alias.branches 'branch -a'")])]),s._v(" "),n("tr",[n("td",[s._v("git remotes")]),s._v(" "),n("td",[s._v("git remote -v")]),s._v(" "),n("td",[s._v("git config --global alias.remotes 'remote -v'")])]),s._v(" "),n("tr",[n("td",[s._v("git lg")]),s._v(" "),n("td",[s._v("git log --color --graph --pretty=format:'%Cred%h%Creset -%C(yellow)%d%Creset %s %Cgreen(%cr) %C(bold blue)<%an>%Creset' --abbrev-commit --")]),s._v(" "),n("td",[s._v("git config --global alias.lg \"log --color --graph --pretty=format:'%Cred%h%Creset -%C(yellow)%d%Creset %s %Cgreen(%cr) %C(bold blue)<%an>%Creset' --abbrev-commit --\"")])])])]),s._v(" "),n("h4",{attrs:{id:"rebase-合并"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#rebase-合并","aria-hidden":"true"}},[s._v("#")]),s._v(" Rebase 合并")]),s._v(" "),n("p",[s._v("该命令可以让和 "),n("code",[s._v("merge")]),s._v(" 命令得到的结果基本是一致的。")]),s._v(" "),n("p",[s._v("通常使用 "),n("code",[s._v("merge")]),s._v(" 操作将分支上的代码合并到 "),n("code",[s._v("master")]),s._v(" 中，分支样子如下所示\n"),n("a",{attrs:{"data-fancybox":"",title:"git-merge",href:"https://raw.githubusercontent.com/ColaStar/static/master/images/git-merge.png"}},[n("img",{attrs:{src:"https://raw.githubusercontent.com/ColaStar/static/master/images/git-merge.png",alt:"git-merge"}})]),s._v("\n使用 "),n("code",[s._v("rebase")]),s._v(" 后，会将 "),n("code",[s._v("develop")]),s._v(" 上的 "),n("code",[s._v("commit")]),s._v(" 按顺序移到 "),n("code",[s._v("master")]),s._v(" 的第三个 "),n("code",[s._v("commit")]),s._v(" 后面，分支样子如下所示\n"),n("a",{attrs:{"data-fancybox":"",title:"git-rebase",href:"https://raw.githubusercontent.com/ColaStar/static/master/images/git-rebase.png"}},[n("img",{attrs:{src:"https://raw.githubusercontent.com/ColaStar/static/master/images/git-rebase.png",alt:"git-rebase"}})])]),s._v(" "),n("p",[n("code",[s._v("Rebase")]),s._v(" 对比 "),n("code",[s._v("merge")]),s._v("，优势在于合并后的结果很清晰，只有一条线，劣势在于如果一旦出现冲突，解决冲突很麻烦，可能要解决多个冲突，但是 "),n("code",[s._v("merge")]),s._v(" 出现冲突只需要解决一次。")]),s._v(" "),n("p",[s._v("使用 "),n("code",[s._v("rebase")]),s._v(" 应该在需要被 "),n("code",[s._v("rebase")]),s._v(" 的分支上操作，并且该分支是本地分支。如果 "),n("code",[s._v("develop")]),s._v(" 分支需要 "),n("code",[s._v("rebase")]),s._v(" 到 "),n("code",[s._v("master")]),s._v(" 上去，那么应该如下操作")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("## branch develop\ngit rebase master\ngit checkout master\n## 用于将 `master` 上的 HEAD 移动到最新的 commit\ngit merge develop\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br")])]),n("h4",{attrs:{id:"stash"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#stash","aria-hidden":"true"}},[s._v("#")]),s._v(" stash")]),s._v(" "),n("p",[n("code",[s._v("stash")]),s._v(" 用于临时保存工作目录的改动。开发中可能会遇到代码写一半需要切分支打包的问题，如果这时候你不想 "),n("code",[s._v("commit")]),s._v(" 的话，就可以使用该命令")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("git stash\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("p",[s._v("使用该命令可以暂存你的工作目录，后面想恢复工作目录，只需要使用")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("git stash pop\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("p",[s._v("这样你之前临时保存的代码又回来了")]),s._v(" "),n("h4",{attrs:{id:"reflog"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#reflog","aria-hidden":"true"}},[s._v("#")]),s._v(" reflog")]),s._v(" "),n("p",[n("code",[s._v("reflog")]),s._v(" 可以看到 "),n("code",[s._v("HEAD")]),s._v(" 的移动记录，假如之前误删了一个分支，可以通过 "),n("code",[s._v("git reflog")]),s._v(" 看到移动 "),n("code",[s._v("HEAD")]),s._v(" 的哈希值")]),s._v(" "),n("p",[n("a",{attrs:{"data-fancybox":"",title:"git-reflog",href:"https://raw.githubusercontent.com/ColaStar/static/master/images/git-reflog.png"}},[n("img",{attrs:{src:"https://raw.githubusercontent.com/ColaStar/static/master/images/git-reflog.png",alt:"git-reflog"}})])]),s._v(" "),n("p",[s._v("从图中可以看出，"),n("code",[s._v("HEAD")]),s._v(" 的最后一次移动行为是 "),n("code",[s._v("merge")]),s._v(" 后，接下来分支 "),n("code",[s._v("new")]),s._v(" 就被删除了，那么我们可以通过以下命令找回 "),n("code",[s._v("new")]),s._v(" 分支")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("git checkout 37d9aca\ngit checkout -b new\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br")])]),n("p",[s._v("PS：reflog 记录是时效的，只会保存一段时间内的记录.")]),s._v(" "),n("h4",{attrs:{id:"reset"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#reset","aria-hidden":"true"}},[s._v("#")]),s._v(" Reset")]),s._v(" "),n("p",[s._v("如果你想删除刚写的 commit，就可以通过以下命令实现")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("git reset --hard HEAD^\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("p",[s._v("但是 reset 的本质并不是删除了 commit，而是重新设置了 HEAD 和它指向的 branch。")]),s._v(" "),n("h3",{attrs:{id:"注意"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#注意","aria-hidden":"true"}},[s._v("#")]),s._v(" 注意")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("git 没有commit 注释\n\ngit fetch和git pull的区别\n\n- git pull：相当于是从远程获取最新版本并merge到本地\n- git fetch：相当于是从远程获取最新版本到本地，不会自动merge\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br")])])])},[],!1,null,null,null);a.default=e.exports}}]);