---
title: 添加百度自动推送JS代码
banner: 'https://obbuo9upd.qnssl.com/201604272118.webp'
abbrlink: bcfcf1f6
date: 2016-04-27 21:17:30
---
感觉网站可以更新和优化的地方不多了...
最近比较关注的就是SEO优化，想提高百度的索引量和文章收录数

果实熟了可以摘了吧？

<!--more-->

### 链接提交

在百度站长平台里面有四种提交链接的方式

- 手动提交：自己复制粘贴你的文章链接，我曾经也弄过
- 主动推送：这是最高级最有效的，可惜门槛太高现在我也不会弄
- 自动推送：每次访问文章页面时就自动提交链接
- sitemap：基本每个站长都会弄了

今天谈的就是第三种，相对有效和简便的方法

### 自动推送

当新页面每次被浏览时，页面URL会自动推送给百度，无需站长汇总URL再进行主动推送操作。
借助用户的浏览行为来触发推送动作，省去了站长人工操作的时间。

实现便捷和后续维护成本低，适合技术能力相对薄弱，无能力支持全天候实时主动推送程序的站长。
站长仅需一次部署自动推送JS代码的操作，就可以实现新页面被浏览即推送的效果，低成本实现链接自动提交。

以上均为官方解释...

### 代码

我是在谷歌时发现某位博主的代码，由于漏了个符号....导致我添加后评论加载不出来
后来去百度官方文档对照了才发现

另外他还在前头加了一句代码，貌似是判断首页的？
不管了....就加上吧

打开`themes/icarus/layout/common/article.ejs`可能每个主题的路径都不一样，反正记住article.ejs文件就行了，在尾部添加如下代码

```js
<% if (!index){ %>
<script>
(function(){
    var bp = document.createElement('script');
    bp.src = '//push.zhanzhang.baidu.com/push.js';
    var s = document.getElementsByTagName("script")[0];
    s.parentNode.insertBefore(bp, s);
})();
</script>     
<% } %>
```

完毕。
