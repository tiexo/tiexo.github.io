---
title: CODING企业版持续集成+自动部署HEXO博客
thumbnail: >-
  //r.photo.store.qq.com/psc?/V11rnv1t26XYl4/3pY6KhS62k*1Vm7UATlxq2f6b84kJpYGSrSKf2TeSRkOI82iwbONeIhtFihbX42tu4jtF5UBmVGGLEFtdR6OjPrPJjxB6rUWFlO70raP3qE!/anull&bo=sATmAbAE5gERCT4!&rf=photolist&t=5/r/_yake_qzoneimgout.png
abbrlink: 2724904e
date: 2019-12-24 15:50:08
---

用了一段时间的GitHub Pages发现确实速度比较慢，即便优化再多也不能从根本上进行改善。于是这几天尝试在CODING企业版对本站进行持续集成+自动部署。

然后，这个过程并不顺利...

<!--more-->

### 方法一：hexo d

一开始我参考github actions的方法，先持续集成，接着通过hexo d命令推送到master分支，再进行自动部署。然而，最终卡在了hexo d这一步。

我反复搜索了网上的资料，唯一相关的一篇官方推荐文章也是这么操作的，详见：[《使用 CODING 进行 Hexo 项目的持续集成》](https://blog.coding.net/blog/Hexo)，但是没有提到过SSH权限受限的问题。

<div align=center><img src="//r.photo.store.qq.com/psc?/V11rnv1t2fVV1f/3pY6KhS62k*1Vm7UATlxq75*WwyFfc2cA8jrVi7eo6BS7j.ePW9uN4d9nb6SxZIxaK82LWy90tt58mxiicI5heo7WumtZERstzHqC*B0Tx4!/anull&bo=dQIOAXUCDgEDCSw!&rf=photolist&t=5/r/_yake_qzoneimgout.png"/></div>

根据我的逻辑，SSH就是一对密钥，将公钥放到被推送的仓库，私钥放到持续集成的工作空间就行了。

而coding的持续集成是通过调用凭据来进行验证的，但是这么设置后依然无效。

<div align=center><img src="//r.photo.store.qq.com/psc?/V11rnv1t2fVV1f/3pY6KhS62k*1Vm7UATlxq7m*O9IqBm8uqcci2dNR9cJyiTHNg7gZwgjMyZYeWBaTwp.BAhINh8641rc94X5K6cpfTJWhqSgsbUBEC5lyXyw!/anull&bo=3gXXAd4F1wEDCSw!&rf=photolist&t=5/r/_yake_qzoneimgout.png"/></div>

<div align=center><img src="//r.photo.store.qq.com/psc?/V11rnv1t2fVV1f/3pY6KhS62k*1Vm7UATlxq89B7b938ShkpxIZFvDr3a*tGHuTh6tMBAbbkt5kTThNbOSHx19EnFB59l7eheASTDj4i8AJdX.S9c1iXHgPv7w!/anull&bo=8wWQAfMFkAEDCSw!&rf=photolist&t=5/r/_yake_qzoneimgout.png"/></div>

思考过后，我觉得可能是密钥的生成方式有问题，因为我并不是在持续集成的工作空间生成的，而是通过外部cloud studio用ssh-keygen -f命令生成一对密钥。（但github也是如此操作的，却有效）

最终我尝试切换到https方式推送，却忘记了git密码...话说这个密码究竟是啥？难道不是coding账户的密码吗？也没找到忘记和重置密码的资料。

于是方法一无疾而终...

### 方法二：项目令牌

这里参考的方法是：[《coding持续集成部署hexo博客》](https://nobige.cn/post/20191007-coding_chi_xu_ji_cheng_bu_shu_hexo_bo_ke/)

与前文的区别是，这里去掉了hexo d的步骤，而是通过项目令牌的方式直接将public文件夹推送到master分支。

并且这里用到了docker的方式，具体原理我就不清楚了。

不过，只要参考原文的步骤，确实能实现持续集成+自动部署的目的。

<div align=center><img src="//r.photo.store.qq.com/psc?/V11rnv1t2fVV1f/3pY6KhS62k*1Vm7UATlxq0TWI4y.e5MAAh1eN*zxjPLp9Hs7J8o6*8NsrawSJ1L2k8.1Arf8XAItQYBVfhjLgNve1GeDafW02.M3SWF7n4E!/anull&bo=KQMSAikDEgIDCSw!&rf=photolist&t=5/r/_yake_qzoneimgout.png"/></div>

### 后语

最后要吐槽的一点是，coding pages的二级域名为什么不是用户名，而是随机生成的一串字符？