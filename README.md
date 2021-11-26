# anxious-helper

#### husky 工作原理

git 2.9 引进了 core.hooksPath,可以设置 Git hooks 脚本目录

- 可以使用 husky install 将 git hooks 的目录指定为.husky
- 使用 husky add 命令将 .husky 中添加 hook

#### lint-staged

一个仅仅过滤出 Git 代码暂存区文件(被 git add 的文件)的工具；这个很实用，因为我们如果对整个项目的代码做一个检查，可能耗时很长，如果是老项目，要对之前的代码做一个代码规范检查并修改的话，这可能就麻烦了呀，可能导致项目改动很大；

#### mrm
