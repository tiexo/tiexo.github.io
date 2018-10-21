---
title: WebIDE使用反馈
banner: 'https://obbuo9upd.qnssl.com/201604191453.webp'
abbrlink: '9926e436'
date: 2016-04-19 14:13:16
tags:
---
经过几天的使用，我对WebIDE有了初步的认识
今天进行一些反馈和总结，同时也改变了我的写作方式
<!--more-->

### 码币

我在[《通过Coding提供的WebIDE来使用Hexo》](https://www.tiexo.cn/coding-webide/)一文中很担忧码币的消耗问题

从这几天的情况来看，计费系统显示我使用了3个小时，并未超出限制，因此目前只消耗了0.01码币

![](https://obbuo9upd.qnssl.com/20160419141950.jpg)

但是...我通过WebIDE提交代码，不再获得码币

![](https://obbuo9upd.qnssl.com/20160419142323.jpg)

不管我是用“`git push`”还是“`提交并推送`”
两者的区别是显示由我或者Ubuntu提交了代码...而码币却不增加

![](https://obbuo9upd.qnssl.com/20160419142436.jpg)

这就令我很郁闷...因为我现在已经不用`git bash`，直接在IDE操作的
可是Coding并不承认我推送了代码，故而没有码币奖励

非常尴尬！虽然码币消耗没问题，可是获取来源没了。
这样不是迟早会用完嘛...因此我打算重新建一个项目，在本地每天push下。。。

### 写作方式

我曾经在一篇文章中记录了我整个发布文章的过程

> [我是如何发表一篇文章的](https://www.tiexo.cn/new-article/)

现在已经有了一些变化，整个过程除了编辑文章内容，其他都在WebIDE里面完成

首先打开终端，输入`hexo n 'title'`

![](https://obbuo9upd.qnssl.com/20160419141308.jpg)

接着复制md文件头部信息，粘贴到马克飞象编辑器里面

![](https://obbuo9upd.qnssl.com/20160419141352.jpg)

因为....在线编辑器非常不好用，尤其是删除和移动光标操作，很像Dos系统那种感觉。
另外也是为了节省使用时间

![](https://obbuo9upd.qnssl.com/20160419143641.jpg)

完成后，直接`ctrl+a/c/v`粘贴到md文件即可
然后保存，输入`hexo g`和`hexo s`生成预览，说实话这个预览也没本地预览好用...

确定没问题后就可以`hexo d`了

相比以前不同的是，我不用在终端输入git命令，直接版本-提交并推送

![](https://obbuo9upd.qnssl.com/20160419144100.jpg)

系统会自动帮你add、commit、push，一键提交非常方便

![](https://obbuo9upd.qnssl.com/20160419144425.jpg)

这样就完成了一篇文章的发布
