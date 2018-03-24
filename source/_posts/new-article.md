---
title: 我是如何发表一篇文章的
date: 2016-03-27 22:39:21
tags: 
banner: https://obbuo9upd.qnssl.com/20150718222715_h2mRV.webp
---
最近有过想写一些东西，开头后却不知道如何接下去
心里在想的是，这一刻我的心情记录下来有什么意义？

还有...我得了一种找不到图片当壁纸的病

<!--more-->

### 马克飞象

第一步是用编辑器写文章内容
我用的就是马克飞象，支持实时预览Markdown语法并且还有快捷方式

![](https://obbuo9upd.qnssl.com/20160327223148.jpg)

### 七牛云存储

虽然有很多方法实现本地图片上传到云存储
但是从WP开始就习惯了七牛，而且我用的是很原始的图片外链方法

直接将图片上传到七牛空间，复制外链

![](https://obbuo9upd.qnssl.com/20160327223256.jpg)

接着粘贴到编辑器中

![](https://obbuo9upd.qnssl.com/20160327223314.jpg)

可能有什么快捷方式直接引用本地路径的图片...可是我不习惯将图片保存到本地
索性直接上传粘贴了。

### 新建文章

接着在目录`git bash`输入`hexo n 'title'`

![](https://obbuo9upd.qnssl.com/20160327223927.jpg)

打开`source\_posts\new-article.md`
复制编辑器全部内容，粘贴到md文件

### 文章格式

主要是修改`title`、`banner`，因为我不用`tag`和`category`

![](https://obbuo9upd.qnssl.com/20160327224742.jpg)

找横幅图片...真的好难啊

### 本地预览

保存好md文件后，直接`hexo g`和`hexo s`
访问[http://localhost:4000](https://localhost:4000)查看预览效果

![](https://obbuo9upd.qnssl.com/20160327225102.jpg)

### 上传

预览无误后，输入`hexo d`上传到`coding pages`

然后访问[www.tiexo.cn](www.tiexo.cn)再次确认是否显示正常

### 备份

由于是静态博客，所以源文件需要备份以防止丢失
那么我是用`master`分支存放，这个在某篇文章已经提及

> [你好，Git & Hexo](https://www.tiexo.cn/hello-git-hexo/)

### 完成

这个过程还是很享受的
