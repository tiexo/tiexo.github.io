---
title: Hexo音乐播放完美支持https和多平台
date: 2017-07-24 22:01:24
banner: https://obbuo9upd.qnssl.com/201707242203.jpg?imageMogr2/format/webp
---
本站的BGM终于满血复活啦，感谢 [@新垣结衣](https://www.bilimoe.com/) 的广播和 [@萨摩公园](https://i-meto.com/) 的技术支持。

<!--more-->

# 前科
为了让小站可以播放bgm我可算操碎了心，光是文章就写了好几篇

> [Hexo插入背景音乐的正确姿势](https://www.tiexo.cn/http-https-music/)

只是可惜这个项目GG了，目前访问都是502状态
于是之后很长一段时间，来到这里是听不到音乐的~~~

# Aplayer

毫无疑问今天介绍的方法是目前最完美的，既支持https还支持多平台
我们需要引用两个JS文件：

1. APlayer.min.js

```
 <script src="https://cdnjs.cloudflare.com/ajax/libs/aplayer/1.6.0/APlayer.min.js"></script> 
```

2. Meting.min.js

```
<script src="https://cdn.jsdelivr.net/npm/meting@1.0.1/dist/Meting.min.js"></script>
```

拿`Icarus`主题为例，将`APlayer.min.js`代码插入到`/layout/common/header.ejs`里面
将`Meting.min.js`代码插入到`/layout/common/footer.ejs`里面

需要注意的是，`Meting.min.js`必须在`jquery.min.js`后面，大家可以查看网页源代码进行调整。
当然js文件的地址也可以更改，如先将文件上传到七牛，再将地址替换为七牛外链地址即可，我就是这么操作的。

上述准备工作做完后，只需在插入音乐的地方添加：

```
<div class="aplayer" data-id="373559" data-server="xiami" data-type="song"></div>  
```

其中的参数如下，**加粗**表示必须填写

- **data-id**: 歌曲/专辑/歌单 ID

- **data-server**: 音乐平台，支持如下参数
 - netease （网易云音乐）
 - tencent  （qq音乐）
 - xiami  （虾米音乐）
 - kugou  （酷狗音乐）
 - baidu   （百度音乐）

- **data-type**: 请求类型，支持如下参数
 - song （单曲）
 - album （专辑）
 - playlist （歌单）
 - search （搜索）

- data-mode: 播放模式
 - random （随机）
 - single （单曲）
 - circulation （列表循环）
 - order （列表）

- data-autoplay: 自动播放
 - false
 - true

更多参数详见 [https://aplayer.js.org/docs/#/?id=options](https://aplayer.js.org/docs/#/?id=options)

# 示范

这里我稍微示范下，如果下面的音乐可以正常播放，则此方法未失效。

```
<div class="aplayer" data-id="31673404" data-server="netease" data-type="song"></div>
```

<div class="aplayer" data-id="31673404" data-server="netease" data-type="song"></div>


```
<div class="aplayer" data-id="11100236" data-server="netease" data-type="playlist" data-mode="random"></div>
```

<div class="aplayer" data-id="11100236" data-server="netease" data-type="playlist" data-mode="random"></div>


另外也是支持外链文件播放的，如上传到七牛，再引用也可以...但是太耗流量了
赶紧给你的网站添加BGM吧！
