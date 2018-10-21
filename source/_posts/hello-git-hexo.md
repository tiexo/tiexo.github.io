---
title: 你好，Git & Hexo
banner: 'https://obbuo9upd.qnssl.com/20160223212542.webp'
abbrlink: d91c8fe7
date: 2016-01-17 22:11:02
tags:
---
博客本身是一个消遣的平台，我们要付出时间和精力，或许我不再愿意付出金钱。

所以我选择了Git，不再担心域名和主机的续费。
所以我选择了Hexo，从此拥有更快的速度。

事实证明这是正确的，两个月没管它，也毫无怨言
好吧说了这么多，主要是对一些命令行进行备份

<!--more-->

### Git备份

在_config.yml文件中，我们定义：

```
deploy: 
 type: git
 repository: git@gitcafe.com:imhentai/imhentai.git
 branch: gitcafe-pages
```

首次备份时，输入以下命令行：

```gui
git init
git add .
git commit -m 'test'
git remote add origin git@gitcafe.com:imhentai/imhentai.git
git push origin master
```

第二次及以后只需输入：

```
git add .
git commit -m 'test'
git push
```

使用同步时，只需输入：

```
git clone git@gitcafe.com:imhentai/imhentai.git
```

### post格式

由于采用markdown文法，因此正文内容前需要定义各种参数

```
title: 你好，Git & Hexo
date: 2015-09-15 15::20:15
tags: 
- git
- hexo
categories: xxx
thumbnail: https://example.com/thumbnail.jpg
banner: https://example.com/banner.jpg
```

其中头图大小建议：1024x438