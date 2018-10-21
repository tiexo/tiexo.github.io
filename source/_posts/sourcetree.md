---
title: IDE迁移至SourceTree管理Hexo
banner: 'https://obbuo9upd.qnssl.com/201708092146.jpg?imageMogr2/format/webp'
abbrlink: 1ee8c4bf
date: 2017-08-09 21:44:54
---
使用IDE将近一年半，的确给了我很不错的体验，基本上做到了和管理WP一样方便.
<!--more-->

> [通过Coding提供的WebIDE来使用Hexo](https://www.tiexo.cn/coding-webide/)

然而由于码币获取越来越难，空间配置也要求越来越高，在实际操作上也遇到了问题。如反应速度过慢，安装速度也很慢，我怀疑是配置不够...但是我也没有那么多码币去维持了。

所以我决定将管理权迁移到本地，而IDE作为紧急手段备用...

# SourceTree

这是一款图形化的Git管理工具，相比git bash命令行更方便的是，在提交和推送两个操作上轻轻一点即可。
这点倒是和IDE很像，事实上现在我还没记住git commit完整的命令行=。=

![](https://obbuo9upd.qnssl.com/20170809211302.png?imageMogr2/format/webp)

嗯，使用门槛也不高，我没看教程自己摸索也成功了
唯一遇到的问题就是ssh验证，总是要我手动加载私钥...可能是我改用户名的原因吧。

另外你也可以很直观的看见分支每一次提交的信息

![](https://obbuo9upd.qnssl.com/20170809211936.png?imageMogr2/format/webp)

之前那些都是我用ide提交的喔，最近网站优化的内容都在这里了。
剩下的内容我在日后使用中在慢慢摸索吧，有新的情况再分享出来。

# 图片懒加载

给网站添加了图片懒加载的功能，实际上在之前的主题更新里面就包含了，但是我实际体验中并没有生效

![](https://obbuo9upd.qnssl.com/20170809212514.png?imageMogr2/format/webp)

现在使用的一款插件：`hexo-lazyload-image`
感觉还不错吧，有兴趣的也可以试试。
效果如下：

![](https://obbuo9upd.qnssl.com/201708092131.gif?imageMogr2/format/webp)

# 统计

最近最困扰我的问题就是网站统计，目前使用的不蒜子统计，但是我这边访问速度非常非常慢，ping值稳定在300以上。

而且很多时候，请求了几十秒最后还失败了...之前都正常，就是最近才这样，我还加了官方群也没得到什么有效解决办法。
我只能寄希望是地区网络原因，其实访问这个网站次数最多的就是我自己了，所以还是很严重啊，即便你们那边没问题。

![](https://obbuo9upd.qnssl.com/20170809213857.png?imageMogr2/format/webp)

另外这样光秃秃的显示也很难看，我尝试过搜索其他统计方法，想要在前台显示访客数的确实很少。
貌似百度统计需要申请API什么的，略显复杂，我会继续搜索的希望能解决这个问题。

如果你能留下评论，告诉我访客数加载速度如何，我会很感谢你的！
