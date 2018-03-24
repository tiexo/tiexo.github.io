---
title: 腾讯云服务器安装AMH面板部署WordPress
date: 2016-02-28 20:06:58
tags: 
banner: https://obbuo9upd.qnssl.com/php7-logo.webp
---
前文已经提过关于腾讯云服务器的由来

> [《启用新域名www.tiexo.cn》](https://www.tiexo.cn/tiexo-domain/)

思考过后准备安装AMH面板，用来部署一些wp、discuz或其他程序玩玩，当作一个测试站吧。
折腾了两天，不知道重装多少次...总算成功了。
<!--more-->

### 操作系统

腾讯云服务器提供了很多操作系统镜像，如Centos、Debian、Ubuntu、Windows等
也提供了很多基础环境，如Nginx+PHP，甚至可以直接安装建站模板Wordpress和Discuz等。

![](https://obbuo9upd.qnssl.com/20160228184741.jpg)

这里我选择了CentOS6.5 64位版本。

### AMH安装

AMH最新版本是5.2，但是它是收费的...所以只能用免费的旧版本4.2了
百度搜索到了某大神优化的自用版本，于是打算用这个。
- php 升级到 5.6.17/7.0.2 
- MySQL 升级到 5.5.40 
- nginx 改为Tenginx 2.02 
- php默认开启Zend Opcache，可以为代码加速 
- amh面板将mysql函数全部改成mysqli，以支持php7
    
当初放弃WP就是因为太臃肿，代码运行太慢。
既然大家对PHP7.0一致好评，当然要体验体验了。

![](https://obbuo9upd.qnssl.com/20160228190042.jpg)

整个过程持续了将近半小时

### 安全组端口

这是我在使用腾讯云服务器遇到的第一个问题。
AMH安装好之后，访问 https://ip:8888 ,一直提示404

害我傻傻的重装了好多次系统...偶然搜索时发现有人提到了安全组端口的问题
原来是因为我没给服务器添加默认常用端口

![](https://obbuo9upd.qnssl.com/20160228190505.jpg)

所以一直不能打开管理面板--

### 域名绑定

遇到的第二个问题就是域名绑定，因为我打算直接使用ip访问服务器
然后在根目录下建立子目录
- wordpress
- discuz
- 等等

这个我就可以通过访问 https://ip/wordpress  这样不同的目录来访问不同的站点
这是我遇到的第二个问题，一直没成功...

![](https://obbuo9upd.qnssl.com/20160228190912.jpg)

最终也是搜索到，在绑定域名这儿填写了IP地址
感觉都是一些小问题，可是脑袋没开窍，折腾了半天。

### Wordpress安装

这个就很简单了，填写信息后就行了

![](https://obbuo9upd.qnssl.com/20160228191731.jpg)