---
title: 从Gitcafe迁移至Coding
date: 2016-03-02 17:13:45
tags:
banner: https://obbuo9upd.qnssl.com/201407245301406171800335.webp
---
下午打开微博就看到[@Gitcafe](https://t.cn/RGlgRkc) 发布的一条微博，要求将项目迁移至Coding.net。
<!--more-->
### 公告

> 猴年伊始， GitCafe 也正式和大家宣布好消息：GitCafe 已加入 CODING 成为 CODING的一员，共同打造最适合中国开发者使用的 Git 服务平台！
> 
> 为了业务的整合以及提高服务体验，请您在 5 月 31 日前把在 GitCafe 上所拥有的项目迁移到 Coding.net , 期间服务不会中断。私有云部署服务将不受影响，我们将一如既往的为您提供安全可靠的极致服务体验。

![](https://obbuo9upd.qnssl.com/20160302165829.jpg)

### 迁移

官方提供了一键迁移的通道，但是我刚刚使用的时候很卡，据说是带宽满了==
索性我就直接新建项目上传了

- **ssh配置**；直接打开C:\User\.ssh\id_rsa.pub，复制里面的内容粘贴到coding账户SSH公钥里面。
- **git config文件**；打开隐藏文件夹.git，修改config文件url为coding的项目地址
- **hexo config文件** ；修改url和deploy repository

然后直接hexo d -g ，记得打开coding pages服务

![](https://obbuo9upd.qnssl.com/20160302171005.jpg)

### 后话

对于一个不懂Git的人来说...折腾也是学习的一个过程吧
至少现在会用它来备份咯，希望coding能够给力！