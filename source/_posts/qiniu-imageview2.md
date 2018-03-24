---
title: 尝试使用七牛图片基本处理 (imageView2)
date: 2016-06-02 18:46:38
banner: https://obbuo9upd.qnssl.com/16-6-2/36444154.jpg?imageMogr2/format/webp
---

一篇文章最重要的两个因素就是：文字+图片
所以怎么处理图片一直是件大事，尝到了WEBP的甜头之后，我想让整个操作变得更加轻松

<!--more-->

# WEBP

在下面这篇文章中，我提到过转换的方法，的确比较麻烦

> [——图片压缩：使用WebP格式](https://www.tiexo.cn/img-webp/)

因为它是在本地转换好之后，再手动上传到七牛空间，而且极简图床不支持这种格式==。
直到我刚刚意识到七牛的图片处理...

# imageView2

说实话对于这种接口的调用，我第一感觉就是很难...必须要有一定的技术基础
但是刚刚看了下相关实例，貌似不难啊，所以来试试吧

首先，我直接用极简图床上传jpg格式的图片
得到外链地址为：`https://obbuo9upd.qnssl.com/16-6-2/59058382.jpg`

接着在链接后面添加`?imageMogr2/format/webp`进行处理

得到新的外链：`https://obbuo9upd.qnssl.com/16-6-2/59058382.jpg?imageMogr2/format/webp`

最后一步，使用MD语法添加图片，复制新的外链粘贴即可
效果如下：

![](https://obbuo9upd.qnssl.com/16-6-2/59058382.jpg?imageMogr2/format/webp)

这张jpg的原图大小是234K，但是我们访问处理过的图片大小只有56K

![](https://obbuo9upd.qnssl.com/16-6-2/82152959.jpg?imageMogr2/format/webp)

与本地转换的webp格式图片大小相当！
这说明我们实现了在线格式转换，而且保留了原格式的图。

# 感想

七牛云真的很好用，只不过我一直没有去研究
这也算给我打开了一扇新的大门吧，现在的问题是，每次粘贴图片都要手动添加一段接口...呢

应该还会有更便捷的方法吧