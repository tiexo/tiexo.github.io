---
title: 暂时使用微博HTTPS图床
date: 2017-09-25 16:20:48
banner: https://ws1.sinaimg.cn/large/902eb75fgy1fjvw0lwzjbj20rs0b841j.jpg
---

我决定从这篇博客开始使用微博图床，但为什么是暂时呢？因为我不确定这个接口什么时候失效...

<!--more-->

# 七牛图床

之前本站一直使用的七牛图片存储，包括所有的JS和CSS都放在上面，可昨天上传图片的时候发现出问题了...

![](https://ws1.sinaimg.cn/large/902eb75fgy1fjvv2az2vej20yx0nrq6e.jpg)

无论什么都是网络故障，我切换到手机4G网络则正常，估计是移动宽带的问题。
然后跑去提交了工单

![](https://ws1.sinaimg.cn/large/902eb75fgy1fjvv6cuh8ij217h09gwin.jpg)

工程师要我F12查看报错，页面显示某个链接502不能访问

![](https://ws1.sinaimg.cn/large/902eb75fgy1fjvv74irbej20jh0aegnx.jpg)

于是继续反馈，又回复我ping一下试试

![](https://ws1.sinaimg.cn/large/902eb75fgy1fjvv82wq6yj20vm03qjrn.jpg)

我觉得可能要麻烦了，因为ping值没有什么问题

![](https://ws1.sinaimg.cn/large/902eb75fgy1fjvv8wlahqj20j2075dgx.jpg)

反正现在还不能用...另外就是七牛的https流量并不免费，虽然我的小博客每个月也就1G流量吧。

![](https://ws1.sinaimg.cn/large/902eb75fgy1fjvvaymabej21c50g9go8.jpg)

这个没办法了...即便我从现在开始不用它，之前的图片链接替换也很麻烦，而且还有一部分CSS和JS文件，只能让它慢慢扣钱了。

还有特别舍不得七牛的webp图片处理，对于提高网站加载速度还是很有效的...

# 微博图床

找了一大堆图床，那些私人搭建的就不考虑了...最后还是决定使用微博的。
最主要的是配套的chrome扩展很好用

![](https://ws1.sinaimg.cn/large/902eb75fgy1fjvvj753poj215t0p1am6.jpg)

安装后点击图标就能直接上传

![](https://ws1.sinaimg.cn/large/902eb75fgy1fjvvk7pu8nj20m80faq59.jpg)

其实我更换图床还有一个要求，那就是必须支持https！
在考察微博图床的时候也纠结了一番，因为我发现在新标签页打开图片时，小绿锁会消失。

![](https://ws1.sinaimg.cn/large/902eb75fgy1fjvvnahra3j20jc08aq3h.jpg)

这是一个favicon图标的http请求，导致页面提示不安全。
但后来发现文章里面没影响，那就可以接受吧...

另外一个缺陷就是，无法删除图片源文件...好在博客都是可以公开访问的内容。
所以，待我体验一段时间后再考虑要不要换回来吧。