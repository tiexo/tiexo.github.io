---
title: '站点日常更新V6.4.7 '
banner: 'https://obbuo9upd.qnssl.com/Konachan.com%20-%20218037%20sample.webp'
abbrlink: 79575ea4
date: 2016-04-07 16:57:11
tags:
---
模仿Flyme固件的命名方式

经常有人问：“Flyme5.6.4.7啥情况，不是才5.1吗？”
回复：”6指的是2016“

<!--more-->

### 增加本地搜索

Github某位大兄弟建议原文如下：

> Hello!
Please, add local search into your cool theme (not swiftype). ——[原文](httpss://github.com/ppoffice/hexo-theme-icarus/issues/125)

然后我也跟帖说明了Swiftype的不好用之处，妥妥的被作者采纳了
很快推出了本地搜索的方案，随即我下载Dev分支进行测试

果然出问题了...
- 点击搜索框无反应，点击搜索按钮跳转/?

结果发现是没有安装`hexo-generator-json-content`这个插件

> 顺便一提，现在安装插件无需再去`_config.yml`文件自定义`plugins`了

可是安装完还是不行，最后验证是个bug
- fix: insight search plugin site root issue

现在已经可以正常使用啦，大家可以右上角体验体验~

### 增加页面名字

由于搜索默认显示站点所有页面
- <a href="https://www.tiexo.cn/about" target="_blank">留言</a>
- <a href="https://www.tiexo.cn/404" target="_blank">404页面</a>

原本我为了让页面整洁，是没有命名的...所以名字显示空白，不好看

![](https://obbuo9upd.qnssl.com/20160407164954.jpg)

现在就顺眼多啦。

### 解决疑问

1. 站点的Top（一键回到顶部）功能，在双栏界面不显示
2. 更改`_config.yml`文件中url，解决了百度sitemap链接提交失败的问题
3. `hexo s`本地测试状态，不显示404页面

好啦，本次更新日志完毕。
