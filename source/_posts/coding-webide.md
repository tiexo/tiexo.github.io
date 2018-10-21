---
title: 通过Coding提供的WebIDE来使用Hexo
banner: 'https://obbuo9upd.qnssl.com/201604151542.webp'
abbrlink: adfec812
date: 2016-04-15 14:17:59
tags:
---
Hexo这类静态博客，最不方便的就是跨平台使用
因为你必须安装npm、git、hexo、nodejs以及源码同步，这些条件一般只有自己的电脑符合

所以我们必须未雨绸缪，让自己随时随地都可以管理Hexo！

<!--more-->

### 方案

目前已经有很多种方案来实现跨平台使用和备份还原等
- Travis CI：作者推荐的一种方案，但是我看不懂门槛太高
- 插件：官网有一款`hexo-admin`的插件，但是部署还需要依赖环境，作用不大
- Git：这是我目前使用的方案，即通过在git新建分支备份源码
- 便携版Hexo：这是我在贴吧看见的一篇帖子

关于Git的方案，我曾在一篇文章中写过

> [你好，Git & Hexo](https://www.tiexo.cn/hello-git-hexo/)

它只是提供了跨平台的可能，但是还需要大量准备工作，不完美。
直到今天，我发现了WebIDE

### WebIDE

这是Coding自主研发的在线集成开发环境，用户可以通过 WebIDE 创建项目的工作空间, 进行在线开发, 调试等操作。

![](https://obbuo9upd.qnssl.com/20160415144319.jpg)

我们可以直接通过它来发布文章，管理和调试你的博客
同时能够在线commit、push代码到coding仓库

这就是一个云端的Hexo目录文件夹

### 安装

由于这方面的搜索结果很少，我也只能慢慢摸索了几个小时才初步完成
首先新建一个工作空间，自己选择配置

![](https://obbuo9upd.qnssl.com/20160415123927.jpg)

虽然说不是直接收费的，码币可以通过提交代码获得...可是每天最多0.01
暂时还不清楚支撑的住不，刚刚已经花了两个小时的时间了，上面写着10个小时0.01
这块待我使用一段时间后再说吧


![](https://obbuo9upd.qnssl.com/20160415123954.jpg)

你可以直接从coding同步你的仓库，但是我的master分支，并不包括node_modules等文件夹，而文件树并不能直接上传文件夹，只好重新安装hexo。

运行环境选择`ide-tty-nodejs`，直接点击使用即可

![](https://obbuo9upd.qnssl.com/20160415124311.jpg)

安装命令我也搞混了，中间报了好几次错，然后我就一条条命令试
结果是对的，我也懒得管了。

```
sudo npm install hexo-cli -g
hexo init
npm install
```

![](https://obbuo9upd.qnssl.com/20160415135430.jpg)

当然你也可以在设置里面更改编辑器的主题等等

![](https://obbuo9upd.qnssl.com/20160415124157.jpg)

接着我手动将一些配置文件通过文件树上传，在目录右键即可

![](https://obbuo9upd.qnssl.com/20160415150227.jpg)

如果你是第一次安装倒省事...将本地的迁移上去还麻烦些==
接着输入`hexo s`预览下你的网站吧

在右侧“访问链接”里面设置端口4000，生成

![](https://obbuo9upd.qnssl.com/20160415141054.jpg)

访问这个网址就可以预览了...与本地的localhost略微不同
至此整个安装过程结束

### 使用

和本地一样，我们需要发布新文章时，输入`hexo n 'title'`
打开`source/_posts/title.md`文件编辑，右侧可以实时预览MD语法

![](https://obbuo9upd.qnssl.com/20160415141927.jpg)

但是我想啊...它是按时计费的，我还是本地编辑完粘贴上去吧
直接`hexo d -g`首次提示需要输入git  config

![](https://obbuo9upd.qnssl.com/20160415151459.jpg)

deploy done没有出问题，在仓库那边也自动提交了

![](https://obbuo9upd.qnssl.com/20160415151530.jpg)

整个过程和本地完全一样，接着我尝试将源码push到master分支
提示这不是一个仓库...我试着重新`git init`果然有反应

于是我又把git命令重新输入一遍...

![](https://obbuo9upd.qnssl.com/20160415153542.jpg)

解决一些冲突后，再次push成功啦哈哈

![](https://obbuo9upd.qnssl.com/20160415153714.jpg)

但是同时...master分支把所有的文件都上传了，包括public和.deploy_git等等
不管啦，现在应该可以正常的hexo和git了。

### 总结

刚刚又最后检验操作了一遍，确定没啥问题了！

这肯是一次具有重要意义的折腾，由于我是边摸索边写的文章
可能逻辑不是很清楚...但是我也懒得更改了，现在脑袋有点昏昏沉沉

![](https://obbuo9upd.qnssl.com/20160415155933.jpg)

现在最担心的也就是这个收费了...

