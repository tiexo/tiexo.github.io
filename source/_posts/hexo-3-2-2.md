---
title: 更新Hexo V3.2.2版本
banner: 'https://obbuo9upd.qnssl.com/201606290957.jpg?imageMogr2/format/webp'
abbrlink: 88d1a8f9
date: 2016-06-29 09:56:20
---
貌似是增加了对Nodejs V6的支持

<!--more-->

# 如何更新

这个问题困扰我很长时间了，每次基本上都是误打误撞或者重新安装解决的，如果在保留现有配置的情况下更新版本？

从官网来看，主要有两条命令行

```
npm install hexo-cli -g
npm install
```

由于我是在IDE上操作的，提示需要管理员权限..所以在命令前添加sudo

```
sudo npm install hexo-cli -g
```

可是运行完之后，并没有升级至V3.2.2
我翻了下官网从2.X——3.0的文档，里面提到了重定义`package.json`这个文件

```
{
  "hexo": {
    "version": ""
  }
}
```

如果全部删除的话，那我安装的插件又要重新弄...因此我只是修改了`hexo version`这个选项

```
{
  "name": "hexo-site",
  "version": "0.0.0",
  "private": true,
  "hexo": {
    "version": "3.2.2"
  },
```

接着再重新运行上文两条命令，`hexo -v`查看下

![](https://obbuo9upd.qnssl.com/20160629092353.png?imageMogr2/format/webp)

我想应该是更新成功了吧...

# 困惑

如果每个插件都需要定义package文件来更新，真是太麻烦了
因为你还得时时观察哪个插件更新了，然后手动修改版本号，再下载安装

可是很无奈啊，hexo并不支持检查更新的功能

另外还有一个问题是，3.0版本更新的时候附带很多基础插件也更新了，可是我如果只修改hexo version的话，那些插件并不会更新==
从github提交的更新说明来看，目前还没发现有3.2.2有附带的插件更新

希望没落下什么吧....看看大家的反馈后，找个时间把nodejs也更新了~~~