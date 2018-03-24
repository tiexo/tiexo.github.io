---
title: 站点日常更新V6.5.30
date: 2016-05-30 19:27:19
banner: https://obbuo9upd.qnssl.com/201605301928.webp
---
链接添加了nofollow属性&域名使用301重定向
<!--more-->

# nofollow

使用的是`hexo-autonofollow`插件

```
npm install hexo-autonofollow --save
```
插件主要有两大功能：
- 给所有站外链接添加nofollow属性，避免权重流失
- 所有站外链接在新窗口打开

在`_config.yml`文件中定义，排除友链

![](https://obbuo9upd.qnssl.com/20160529213003.webp)

实际效果：

![](https://obbuo9upd.qnssl.com/20160529213253.webp)

友情链接：

![](https://obbuo9upd.qnssl.com/20160529213322.webp)

虽然小站没有什么权重，也要装装逼

# 301重定向

在Github pages里面可以通过修改CNAME文件来操作，可是Coding并不支持
无奈只能从DNS这儿想办法了

可是添加“**显性转发**”记录的时候，页面提示需要使用域名30天以后方可使用此功能，于是我就等啊等...一直等到今天，还是不行！！！
![](https://obbuo9upd.qnssl.com/20160530191335.webp)

我查看了一下操作记录，发现已经超过45天了...于是向DNSPOD客服提交了一份工单
很快对方就回复我说刷新了操作

![](https://obbuo9upd.qnssl.com/20160530191602.webp)

试了下的确可以了，但是只能添加一条@记录，所以删除了@记录的CNAME解析

![](https://obbuo9upd.qnssl.com/20160530191831.webp)

它的主要作用就是，当你在浏览器地址栏输入“**[https://tiexo.cn](https://tiexo.cn)**"，会自动跳转到“[**https://www.tiexo.cn**](https://www.tiexo.cn)”，从而防止搜索引擎收录两个主页分散域名权重

大家也可以在站长工具，用https状态查询功能，看下是否做了301重定向

![](https://obbuo9upd.qnssl.com/20160530185722.webp)

返回301状态码就表示成功啦



