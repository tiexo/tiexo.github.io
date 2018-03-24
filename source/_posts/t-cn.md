---
title: 一键生成新浪短链接（书签版）
date: 2016-04-14 18:37:14
tags:
banner: https://obbuo9upd.qnssl.com/201604141848.webp
---
这个问题我已经默默关注好几年了...但是一直没有找到心仪的解决方式
虽然现在依然不是很满意吧

也许有些事情，本身就没有完美，哎。
<!--more-->

### 短链接

目前主要有三种形式，即三种域名
- goo.gl：被墙
- t.cn：新浪微博专用，目前使用最广泛
- dwn.cn：百度出品，有些网址解析不如新浪，我是遇到过很多次了

短链接的好处我就不多说了，大家自己琢磨！

### 百度短网址

它的优势在于，有一款扩展支持，使用起来非常方便。

> 安装地址：<del>[点我前往]</del>

![](https://obbuo9upd.qnssl.com/20160414181518.jpg)

使用的时候直接点击扩展图标即可，还能自动复制到剪切板
但是我在使用的过程中，一些淘宝网址和微博网址，缩短后打开直接错误==

一些网址不复杂的链接倒是可以，大家可以试试

### 新浪短网址

挺纳闷的，找遍整个世界都没有一款扩展...
我只能退而求其次，希望可以用JS书签来实现了

今天闲着无聊又开始Google，终于被我找到一个成品了

```js
javascript:(function()
{var%20u=location.href;var%20l=
'https://api.weibo.com/2/short_url/shorten.json';
if(u.match(l)){var%20s=%20document
.getElementsByTagName
('pre'[0];var%20j=%20eval('('+s.innerHTML+')');
s.style.cssText%20="width:50%;margin:0px%20auto;
textalign:center;";s.innerHTML=
'%E7%9F%AD%E9%93%BE%EF%BC%9A'
+j.urls[0].url_short+'<br><br>
<a%20href="javascript:history.go(-1)">
%E7%82%B9%E5%87%BB%E8%BF%94%E5%9B%9E%E5%8E
%9F%E9%A1%B5%E9%9D%A2</a>';}
else{location.href=l+'?source=2849184197
&url_long='+u;}})();
```
使用的时候需要点击两下，第一次跳转到如下界面

 ![](https://obbuo9upd.qnssl.com/20160414183018.jpg)

接着再点击一次就可以复制短链接了

![](https://obbuo9upd.qnssl.com/20160414183115.jpg)

作者后来还改良了代码，可以自动选择短链...可是在360极速上无效

### 总结

虽然操作步骤略繁琐，不过却是我知道最简单有效的手段了
总比那些去某个网站转换要好吧，嘻嘻。

另外本文的短链接网址是：[https://t.cn/Rq6A0nE](https://t.cn/Rq6A0nE)