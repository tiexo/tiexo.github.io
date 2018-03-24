---
title: 博客启用全站HTTPS
date: 2016-08-04 22:29:19
banner: https://obbuo9upd.qnssl.com/201608042231.jpg?imageMogr2/format/webp
---
 在发表这个观点之前，网络上有很多争论的声音
  譬如：
  - 博客又没几个人看，搞这个有啥用
  - 目前很多地方都不兼容，得不偿失
  
其实很简单，装逼本身就是写博客的一部分

<!--more-->

# Coding-pages

很早之前我就有这个念头，对地址栏前面的那把**"小绿锁"**心神向往
可是联想下目前的处境又放弃了，我并没有一个VPS去安装证书

前段时间访问某位网友的博客，竟然开启了https，我感到很纳闷因为他使用的和我类似的gh-pages。
问过之后原来是github强制要求的，于是我去coding冒泡了一条

![](https://obbuo9upd.qnssl.com/20160804214041.png?imageMogr2/format/webp)

大吃一惊！立马去看了下真的支持了，也不知道啥时候的事...

![](https://obbuo9upd.qnssl.com/20160803191741.png?imageMogr2/format/webp)

这下我真的没有理由拒绝了，于是开始谋划...

# 第一步

首先要明白一点，小绿锁出现的条件是当前网页所有的请求都是https的，如果有一个是http就失败

所以要做到第一步就是F12，查看一下当前的加载项
在Security栏，可以看见相关提示

![](https://obbuo9upd.qnssl.com/20160804215010.png?imageMogr2/format/webp) 

而我的原因就是图片，这也是我要做的第一步将所有的图片换成https的
本站使用的是七牛云，实际上官网是支持的，直接开启即可

![](https://obbuo9upd.qnssl.com/20160804215248.png?imageMogr2/format/webp)

接下来把所有文章的图片链接替换...只能手动搞了
用notepad++一篇篇复制，然后批量替换，粘贴

![](https://obbuo9upd.qnssl.com/20160803191640.png?imageMogr2/format/webp)

这样第一步就完成了

# 第二步

实际上网站本身的文件都是支持https加载的，一些引用的外部链接才需要处理，譬如音乐。
这一步根据不同人的喜好，有不同的状况，我的bgm是舍不得抛弃的

之前都是网易云音乐，可是这货不支持https，蛋疼啊....
于是找啊找，最后找到一篇文章介绍到了Hexo的插件`hexo-tag-aplayer`

直接输入命令行安装

```
npm install --save hexo-tag-aplayer
```

使用方法是

```
{% aplayer title author url [picture_url, narrow, autoplay, width:xxx, lrc:xxx] %}
```

最令我费解的就是这个音乐文件链接，我使用网易云、百度云播放页的网址都不行，最后用的七牛云的文件链接...但是耗流量啊，以后再研究吧

```
{% aplayer "丢你蕾姆" "Bilibili" "https://obbuo9upd.qnssl.com/bgm.mp3" "autoplay" "width:50%" %}
```

具体效果可在留言页面查看，移动端不支持自动播放...网易是可以的
先将就着用吧

本来还打算处理视频的，想了想使用频率不高算了吧==

# 第三步

这是我折腾最久的一步，最后还失败了....那就是评论
我尝试过下面几个方案

1. 多说是支持https的，但是第三方头像不支持，这有个卵用？？？

只要当前网页有人评论，就失败了，我一怒之下把所有评论都删除了。可是当我登录后还是失败，因为我自己的头像也是引用的第三方

这都好解决，可是没办法要求别人啊...如果访客用个QQ、微博啥的登录评论，整个网站都毁了....
目前还没发现方法，强制所有评论不使用第三方头像

2. disqus是支持https的，实际上我对它也比较有好感

在官网摸索了快半个小时才注册好shortname，我真是醉了，也不知道是咋引导的，点击创建网站就跳转到一个介绍页面，最后是稀里糊涂乱点才跳转到

设置好以后，的确可以正常使用，虽然速度有点慢也忍受了
可是我测试一阵子后，突然发现...评论区不显示了，我又恢复成原来的样子来回折腾，也不知道过了多久....反正是昨晚弄到今晚了，终于被我发现

> 原来是被墙了！！！

我真是日了狗，把xxnet关掉就显示不出来，打开就出来了
真是心灰意冷，如果评论还需要翻墙的话还有什么意义？？？

最后，我只能暂时性的关闭评论了。。。

# 第四步

上面折腾完以后，终于所有页面都正常啦

![](https://obbuo9upd.qnssl.com/20160804221523.png?imageMogr2/format/webp)

可是现在网站有两套页面，即http和https都可以访问，这也失去了全站ssl的意义
所以第四步就是强制http跳转到https

由于使用的托管空间，因此很多方法都不能用，包括多说头像反代和nginx强制https等等，只能用js跳转了

打开主题`head.ejs`文件添加如下代码
```
 <script type="text/javascript">
    var host = "www.tiexo.cn";
    if ((host == window.location.host) && (window.location.protocol != "https:"))
        window.location.protocol = "https";
</script>
```
我也不知道整个过程是否正确，但最终还是实现了想要的效果

现在访问 [http://www.tiexo.cn](http://www.tiexo.cn)
会自动跳转到 [https://www.tiexo.cn](https://www.tiexo.cn)

另外百度收录的页面点击后也会跳转到https，大功告成！

# 待续

当然还没有结束，一些小的地方还需要慢慢寻找解决方案，现在也只是处于一个能用的状态...
期待我的后续更新吧！

最后附上一张`hexo d`的调试记录

![](https://obbuo9upd.qnssl.com/201608042227.jpg?imageMogr2/format/webp)
