# git版本管理规范

## 一、基本开发流程

Issues → 开发 → 评审 → 测试 → 上线

## 二、分支命名

**2.1 主分支**

① **master** ：随时可供在生产环境中部署的代码

② dev： 保存当前稳定并且最新的开a发分支(多人开发同一分支)

**2.2 辅助分支**

主要用于新功能的并行开发、对生产代码的缺陷进行紧急修复工作。合并 master后应该立即删除

① 用于开发新功能时所使用的feature分支
② 用于修正生产代码中的缺陷的bug分支

**2.3 根据实际开发情况合理命名分支：分支类型_开发者_时间_开发内容**

①　`feature`分支:f_yourname_20170416_customLimit

②　`bug`分支：bug_yourname_20170416_customLimit

③　`dev`分支：dev_yourname_20170416_customLimit

## 三、git-commit 

**3.1什么时候commit？**

`commit`在什么时候都可以，但是不建议为了保存代码而`commit`，每一次`commit`一定是代表代码开发进行到了某一个阶段，可以在后续开发或者合并代码出现错误的时候可以快速回到这个阶段。

**3.2 commit注释**

每次提交必须要有提交注释，注释根据本次提交情况，进行简洁描述

## 四、 Git-push

**4.1什么时候push？**

① 代码需要提测，并且自己都测试OK了，如果一次性测试通过则可以把master合并到自己的分支，然后push自己的分支，进行提测

② 代码提测了，如果有问题，把问题修改好后，再push自己的分支。

**4.2 push流程**

- git fetch
- git checkout dev
- git branch -b copy_dev(copy新分支进行合并)
- git merge origin master (存在冲突必须解决)

**4.3 解决冲突：**

　1⃣️ `git `reset --HARD HEAD^

　2⃣️`git log` (查看你的所有提交的历史)　
　
- `git checkout dev`

- `it merge copy_devg`

- `git branch -d copy_dev`

- `git push origin dev`

## 五、Git-issue

**5.1对需求完全了解后，开发前先整理思路，在git上填写Issues**
