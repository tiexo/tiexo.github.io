---
title: 直播重建云签到网站
banner: 'https://obbuo9upd.qnssl.com/201303302118.webp'
abbrlink: 2d0d67d8
date: 2016-03-30 21:14:34
tags:
---
今天心痛的发现贴吧竟然漏签了...花了我十几张补签卡
一怒之下决定换一个云签程序

<!--more-->

### 介绍

目前我可选择的（有回复功能的）云签程序共有三款
- KK版： 已经无人维护，出小问题了都很麻烦
- 无名智者版：漏签！乱回复！
- 绯色起源版：今天特意找他要的源码

好吧，其实我根本没有选择，开始！

### 环境

免费稳定的空间不多，还是继续用Openshift吧
- PHP5.4
- MySQL 5.5

### 工具
- Winscp

### 直播

首先下载源码解压，然后直接用winscp上传到服务器

![](https://obbuo9upd.qnssl.com/20160329212620.jpg)

今晚网速好慢...传了好久好久

![](https://obbuo9upd.qnssl.com/20160329214735.jpg)

上传完之后，直接访问签到网址（[qd.tiexo.cn](https://qd.tiexo.cn/))

![](https://obbuo9upd.qnssl.com/20160329215154.jpg)

在线按步骤安装，六步都完成后就可以登录了

![](https://obbuo9upd.qnssl.com/20160329215933.jpg)

系统目前只能用邮箱登录

![](https://obbuo9upd.qnssl.com/20160329220034.jpg)

因为百度账号现在有个登录保护很麻烦...我就直接用BDUSS绑定了

![](https://obbuo9upd.qnssl.com/20160329220207.jpg)

成功绑定后就可以看见帐号信息

![](https://obbuo9upd.qnssl.com/20160329220459.jpg)

这样签到就不用管它啦，我们把回复的设置好

![](https://obbuo9upd.qnssl.com/20160329221312.jpg)

依次添加完所有需要回复的帖子（遇到bug无法添加水帖任务）

> 解决：因为curl设置5秒极限时间，5秒后还没请求到数据就报错

总算弄好啦，但是目前不能自定义回复内容，倒是无所谓

![](https://obbuo9upd.qnssl.com/20160330210934.jpg)

### 后记

到此为止啦，后续如果还有体验我将继续分享~~~
