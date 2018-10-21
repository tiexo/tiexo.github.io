---
title: 站点日常更新V7.1.9
banner: 'https://obbuo9upd.qnssl.com/201701091627.jpg?imageMogr2/format/webp'
abbrlink: 589fb653
date: 2017-01-09 16:24:00
---

主要是将部分JS和CSS替换为七牛CDN加速
<!--more-->

# CDN

之前就有这种想法，但是无奈对于主题的结构不了解，无从下手
前两天逛ISSUE区的时候，发现了作者的回复：

![](https://obbuo9upd.qnssl.com/20170109160851.png?imageMogr2/format/webp)

今天就顺便试试吧，生命不息，优化不止。

# 七牛

用习惯也懒得换了，首先我得将libs文件夹整个上传到七牛存储上
由于七牛不存在目录结构，为了方便以后的查找修改，在上传图片的时候进行前缀自定义

![](https://obbuo9upd.qnssl.com/20170109161257.png?imageMogr2/format/webp)

这样就可以逐个按照目录上传了
接着打开作者提到的两个文件，进行替换

![](https://obbuo9upd.qnssl.com/20170109161516.png?imageMogr2/format/webp)

整个过程倒是挺简单的，接着运行一遍，用F12检查下文件是否顺利加载
然后我顺便把几个小图片也替换了...

# 总结

其实Coding本身速度也还可以，但是比七牛还是差了一点，虽然替换后感觉不是很明显==！
目前还有一些加载速度比较慢的文件，没想到什么办法，因为是每次hexo g后都要重新生成的，这样也无法上传到七牛了。

今天先这样吧，我再研究研究。