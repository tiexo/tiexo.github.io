---
title: Hexo插入背景音乐的正确姿势
banner: 'https://obbuo9upd.qnssl.com/20161010232.jpg?imageMogr2/format/webp'
abbrlink: ea919457
date: 2016-10-10 23:22:24
---

根据百度统计结果，我发现搜索`"hexo插入背景音乐"`的人好多好多...

而本站展示量最高的那篇文章，并没有介绍具体方法，再加上博客添加SSL后插入音乐方式发生了变化，今天就好好的总结下吧。

<!--more-->

# HTTP环境

这次主要分两类来讲，一类是http环境
也就是网址格式为`"http://www.xxx.com"`或`"http://xxx.com"`的网站

目前大多数个人网站均为此类，添加背景音乐的方式很简单
直接打开[@网易云音乐网页版](http://music.163.com/) 搜索音乐名字，如东京不太热

![](https://obbuo9upd.qnssl.com/20161010221831.png?imageMogr2/format/webp)

在播放器页面点击左侧的“生成外链播放器”

![](https://obbuo9upd.qnssl.com/20161010222043.png?imageMogr2/format/webp)

在这里你可以调节播放器的长宽，以及是否自动播放
设置好以后点击右下角的“复制代码”，然后直接粘贴到.md文章里面即可

由于我的网站不是http环境，所以无法展示效果...
另外如果你搜不到想要的歌曲，还可以通过本地上传到网易云音乐

> 详见：[《网易云音乐生成本地音乐外链》](https://www.tiexo.cn/163-music-leimu/)

不仅如此，你还可以直接创建一个歌单

![](https://obbuo9upd.qnssl.com/0161010222904.png?imageMogr2/format/webp)

一样的步骤，点击“生成外链播放器”接着设置好参数复制粘贴代码即可

![](https://obbuo9upd.qnssl.com/20161010222802.png?imageMogr2/format/webp)

但是上面介绍的方法，都只能在某一个页面播放，如某一篇文章或者留言板等。
一旦页面跳转则没有了...不像WP可以全站背景音乐

# HTTPS环境

现在使用https的网站越来越多，像百度、淘宝等等都是如此
另外使用github搭建hexo的同学们，现在gh-pages已经强制要求全站https啦

这种网站格式一般为`"https://xxx.github.io"`
然后...发现网易云音乐已经不能正常使用了

由于网易云目前并不支持https，所以我们只能通过插件来实现音乐播放
这里需要使用到[163music-APlayer-you-get-docker](https://github.com/YUX-IO/163music-APlayer-you-get-docker)项目

在github项目文档上我们可以看见，参数实在是太多，再加上版本迭代和英文介绍，我一脸懵逼...

但是在iframe用法里面，我发现有一个demos

```
https://music.daoapp.io/iframe?song=287749&qnarrow=1&qssl=1
```
格式非常像上文介绍的网易云外链，于是我尝试直接替换为

```
<iframe frameborder="no" border="0" marginwidth="0" marginheight="0" width=330 height=86 src="https://music.daoapp.io/iframe?song=287749&qssl=1&qlrc=0&qnarrow=0&autoplay=1"></iframe>
```

也就是把`src=""`里面的链接换掉，其他保持不变
接着来分析这段代码
- width和height是播放器的宽度和高度
- 287749这串数字是网易云音乐的歌曲编号
- qlrc=0代表不显示歌词
- autoplay=1代表自动播放

这样如果没有特殊要求的话，每次只需在网易云找好歌曲编号，然后替换这串数字即可
粘贴到.md文件里面效果如下

<iframe frameborder="no" border="0" marginwidth="0" marginheight="0" width=330 height=86 src="https://music.daoapp.io/iframe?song=34723470&qssl=1&qlrc=0&qnarrow=0&autoplay=1"></iframe>

这个项目的玩法非常多，如果需要显示歌词的话
修改`qlrc=1`为再调整下播放器宽度（width）高度（height）数值

<iframe frameborder="no" border="0" marginwidth="0" marginheight="0" width=430 height=146 src="https://music.daoapp.io/iframe?song=34723470&qssl=1&qlrc=1&qnarrow=0&autoplay=0"></iframe>

其实还支持歌单、MV播放的，但是经过我测试发现某些资源会引用http导致小绿锁消失。
有兴趣的可以研究下，我平常用的也就是单曲播放

最后就是移动设备播放的问题，两种都是支持在手机端播放的，但是后者不支持自动播放...