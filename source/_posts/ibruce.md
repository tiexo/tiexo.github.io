---
title: 添加不蒜子统计代码
banner: 'https://obbuo9upd.qnssl.com/201612052142.jpg?imageMogr2/format/webp'
abbrlink: 196d43c
date: 2016-12-05 21:36:14
---

为啥，我看我的博客越看越漂亮？？哈哈

<!--more-->

# 强迫症

为什么我要用不蒜子统计？这个说来话长了...
自从这个三栏的主题被我改成两栏后，又缝缝补补的修改了很多地方，譬如左侧的信息栏
我去掉了社交链接、同时放弃了标签和目录的分类

那么问题来了，主题本来显示文章数和标签数的地方变得极不对称

![](https://obbuo9upd.qnssl.com/20161205204213.png?imageMogr2/format/webp)

尤其是随着文章数量的增加，右侧的标签数一直是零...于是我在琢磨把这儿改改
今天突然灵光一闪，觉得改成访客统计是个不错的主意，于是...本篇文章就开始了。

# 不蒜子

在[官网](http://service.ibruce.info/)宣传中写道，只需两行代码，搞定计数。
当然这并不是我看重的亮点，毕竟主题自带百度统计，它最大的亮点是可以在任意地方显示当前的访客数或页面浏览量。

实际上代码很简单：

```
  <script async src="//dn-lbstatics.qbox.me/busuanzi/2.3/busuanzi.pure.mini.js"></script>
            <span id="busuanzi_container_site_pv">本站总访问量<span id="busuanzi_value_site_pv"></span>次</span>
```
我先在`footer.ejs`中添加脚本地址，接着在`profile.ejs`里面添加引用地址
可这个问题真是折腾的我够呛...

我发现，不蒜子的统计结果数字大小和左侧文章数字大小不一致
差点就让我崩溃...一直右键审查元素、开启`hexo s`一步步尝试

甚至用上了font size这样的定义也没成功...后来发现了一行样式代码

```
font-size: 22px;
```
如果取消应用则两者大小一致...然后顺藤摸瓜找到了样式文件里面的代码

```
font-size: font-size + 6px
```
如果删除这个+6px则大小一致...但是这样字体又会很小

> 机智的我这个时候尝试将统计代码里面的`span`修改为`div`

完美解决！
原理之类的我就不探究了...哈哈

# 统计

由于作者没有继续开发设置统计初始值的功能，所以我只能从头开始计算了...
顺便翻一下博客从三月份开始，目前累计访客2800名

![](https://obbuo9upd.qnssl.com/20161205213252.png?imageMogr2/format/webp)

现在又是新的开始，加油吧！
(PS：目前还有一个缺点，统计显示必须等到脚本加载完之后，略显怪异)