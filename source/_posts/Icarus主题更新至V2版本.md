---
title: Icarus主题更新至V2版本
cover: '//r.photo.store.qq.com/psb?/V11rnv1t26XYl4/t9xubrC00SFg7zYZClhiZjYXD9CEVKSF6X0CS7Y5nMg!/r/dDABAAAAAAAAnull&bo=5gOQAeYDkAERCT4!&rf=photolist&t=5qzoneimgout.png'
abbrlink: d2d7ecd5
date: 2018-11-03 11:47:47
---
实际上这次更新我已经准备了半个月，期间一直在Cloud Studio上面进行配置和修改，现在我觉得它基本符合了我的需求，故而正式切换上线。

<!--more-->

### V2版本主要变化

根据官方文档，V2版本的主要更新内容如下：

<div align=center><img src="//r.photo.store.qq.com/psb?/V11rnv1t2fVV1f/cB9f77OwGijRy1eysEbI7THuSteQDSTUip1Vfhqzs6s!/r/dFYAAAAAAAAAnull&bo=XwMqA18DKgMRCT4!&rf=photolist&t=5qzoneimgout.png"></div>

根据我个人的感受来说，主题设计变得更加现代化，配置更加灵活。
其中有不少新特性都是之前大家反馈的内容，譬如多布局切换和CDN加速，总体感觉还是很棒的。

### 个人配置

首先满足我之前的心愿，将profile和widget全部去掉，变成了如今的单栏布局。
去除多余页面，仅保留归档和留言，并将不常用的插件选项全部关闭。
其中比较纠结的问题有两个：

- LOGO显示

虽然V2版本支持图片或者文字logo，但好像不支持文字+logo，这与之前的版本有所不同。
所以我干脆去掉了文字，仅保留一个logo图标，同时去掉了底部的logo显示。
当然，受此影响，我还调整了导航栏的布局，让它从居中变成了两端靠齐。

- CDN

V2版本提供了包括公共JS库、字体和图标三类资源的CDN选择，其中公共JS和字体我选择了`css.loli.net`提供的常用前端公共库CDN服务。
而最后一个fontawesome图标却没有找到相应的服务，目前它也是页面加载耗时最长的。
另外还有一些包括评论、音乐播放相关的JS文件都是直接引用`jsdelivr`版本，如果七牛还能用的话就好了...


### 反馈

在配置V2版本的时候，我也遇到了一些问题，跑到主题issue提问，作者很友好很高效的帮我解决了。

![](//r.photo.store.qq.com/psb?/V11rnv1t2fVV1f/bqxbeBINEnPOtkik4VAS0AuJBrkl.v65nXdpgtf7g10!/r/dDQBAAAAAAAAnull&bo=4gSpAeIEqQERCT4!&rf=photolist&t=5qzoneimgout.png)

同时我也反馈了三个小bug，为icarus的完美进化贡献一份力量~

### 结语

另外，由于七牛测试域名失效，之前旧文章的很多图片都出现问题，干脆直接全部移除了。
总之，现在网站是以新面貌重新出发，后续有啥更新再继续发布吧。