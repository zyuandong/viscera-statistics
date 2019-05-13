# viscera-statistics
vue@2.6.10 + webpack@4.31.0 + echarts@4.2.1

## Tips
```
node-sass@4.12.0 > node-gyp@3.8.0 > tar@2.2.1

High            Arbitrary File Overwrite
Package         tar
Patched in      >=4.4.2
Dependency of   node-sass [dev]
Path            node-sass > node-gyp > tar
More info       https://nodesecurity.io/advisories/803
```
node-sass 依赖 node-gyp@3.8.0 ，但 node-gyp@4 才将依赖 tar 更新为 4.4.2+

- `npm audit fix --force` 并不一定能帮助解决依赖中的安全问题；
- 查找 github 中 node-sass 的 issues，搜索 tar 找到相关讨论以及两种解决办法：
  - `npm update node-sass --depth 999`
    - 从npm@2.6.1开始，`npm update` 仅更新顶级包。旧版本的 npm 会递归检查所有的依赖。如果要达到旧版本的行为，请使用`npm --depth 9999 update`
    - 执行命令后发现很长时间没有反应，放弃
  - 手动更改 package-lock.json 并删除 node_modules，再 `npm install`



