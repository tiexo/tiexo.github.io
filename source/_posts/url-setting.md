---
title: URL网址统一修正
date: 2016-08-24 16:28:42
banner: https://obbuo9upd.qnssl.com/201608241630.jpg?imageMogr2/format/webp
---
前文提到过301重定向的问题，后来又加上强制https的设置，导致博客的网址比较混乱

今天就趁机把所有的网址统一整理下。
<!--more-->

# Coding

coding提供的pages服务，给每个用户都分配一个二级域名

> [http://tiexo.coding.me](http://tiexo.coding.me)

用户也可以选择绑定自己的域名

> [http://www.tiexo.cn](http://www.tiexo.cn)

两个域名都可以访问你的网站，但是事实上却不好
因为当你输入`tiexo.coding.me`的时候并不会跳转到`www.tiexo.cn`

也就是说搜索引擎会收录两个域名，但是里面的内容是一模一样的
区别就是网址不同而已

这不利于seo的优化和用户体验

所以第一步就是让两者合二为一，这里采用JS脚本跳转的方法
在`head.ejs`文件中添加代码

```js
<script language="javascript">
    host = window.location.host
    if(host == "tiexo.coding.me")
        window.location.href = window.location.href.replace(/tiexo.coding.me/,"www.tiexo.cn")
</script>
```

# 域名

域名有两种形态，带www或者不带
一般都是用301重定向的方法来解决，我在前文提到过

> [——————《站点日常更新V6.5.30》](https://www.tiexo.cn/nofollow-301/)

主要功能就是通过DNSPOD显性转发将

> [http://tiexo.cn](http://tiexo.cn)

跳到到

> [http://www.tiexo.cn](http://www.tiexo.cn)

这样也方便访客记忆，提高用户体验

# HTTPS

实际上通过前面两个步骤，我们已经顺利的将
- `http://tiexo.cn`
- `http://tiexo.coding.me`

两个网址都跳转到了`http://www.tiexo.cn`上面
所以最后一步只需将它强制https即可

依然是在`head.ejs`文件中添加代码

```js
<script type="text/javascript">
    var host = "www.tiexo.cn";
    if ((host == window.location.host) && (window.location.protocol != "https:"))
        window.location.protocol = "https";
</script>
```

这样不管你输入上面的哪个网址，最终都会指向

> [https://www.tiexo.cn](https://www.tiexo.cn)

这也将是我对外宣传的唯一入口

# 收录

目前网址收录的比较混乱，相信统一之后就可以逐渐改善了
然后坚持，稳定！

吐槽：
那个百度站长的自动推送代码好像没起作用，郁闷...还得好好研究