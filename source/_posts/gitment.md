---
title: 体验GitHub Issues的评论系统——Gitment
banner: 'https://obbuo9upd.qnssl.com/201706031515.jpg?imageMogr2/format/webp'
abbrlink: 860dcef4
date: 2017-06-03 15:13:32
---

不折腾会死吗？才刚换畅言没多久呢...但是恰巧碰见主题那边提了Pull requests，按耐不住想试试。
虽然评论门槛高了很多，目前也不够完善，但是反正也没人评论啊。
<!--more-->

# 项目

[Gitment](https://github.com/imsun/gitment) 是作者实现的一款基于 GitHub Issues 的评论系统。支持在前端直接引入，不需要任何后端代码。可以在页面进行登录、查看、评论、点赞等操作，同时有完整的 Markdown / GFM 和代码高亮支持。尤为适合各种基于 GitHub Pages 的静态博客或项目页面。

这么棒的项目我竟然今天才知道，总之先试试吧。

# 安装

首先注册OAuth Application，记得以前在WP实现QQ和微博第三方登陆的时候也有这样的接口API，应该差不多类似吧。

![](https://obbuo9upd.qnssl.com/201706021854.PNG?imageMogr2/format/webp)

 其中callback URL（一般是评论页面对应的域名，如 [https://www.tiexo.cn](https://www.tiexo.cn)）
 

> PS：repo应该填写仓库名称，而非仓库地址

由于我这边主题已经适配了...所以直接在配置文件里面填写相关参数即可，如果你的主题没有适配，则需要去项目那边按照步骤安装

  

```
 gitment:
        owner: #your github ID
        repo: #the repo to store comments
		#Register an OAuth application, and you will get a client ID and a client secret.
        client_id: #your client ID
        client_secret: #your client
```

然后访问评论页面，也就是任意一篇文章，登录创建github仓库的账号

![](https://obbuo9upd.qnssl.com/201706031509.PNG?imageMogr2/format/webp)

授权完成后会看到一个初始化的按钮

![](https://obbuo9upd.qnssl.com/201706031456.PNG?imageMogr2/format/webp)

然后就可以随意评论啦，还支持MD语法喔

![](https://obbuo9upd.qnssl.com/201706031500.PNG?imageMogr2/format/webp)

其实原来就是在git仓库那边，会自动创建一条issue，这个想法确实挺棒的

![](https://obbuo9upd.qnssl.com/201706031503.PNG?imageMogr2/format/webp)

# 问题

目前这个项目还不完善，属于强行可用的状态
譬如：
* 只支持github账户登录，对于普通网民来说，恐怕不知道这个同性交友网站吧。这就注定了评论的门槛较高。
* 每篇文章都需要单独初始化，也就是创建一条issue，对于文章数很多的人来说也比较麻烦
* 每个不同的网站登录都需要授权

或许还有些其他我没发现的问题，当然作者承诺下个版本会解决一些，我也期待着。

# 为什么

为什么要换掉畅言？
一个原因是畅言加载的JS太多了，几十个....虽然速度还行，看着不太爽
另外一个原因自然是gitment逼格更高，这才是我们永恒的追求。
