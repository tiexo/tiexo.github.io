---
title: 站点日常更新V6.11.19
date: 2016-11-19 16:03:06
banner: https://obbuo9upd.qnssl.com/20161119160016.png?imageMogr2/format/webp
---

前几天我还在为博客的正常运行沾沾自喜，今天就发现部分css和js没有加载。
虽然没有影响正常浏览，可是搜索功能不能使用了

实在是因为主题更新需要修改的地方太多了...所以我一直忍着，今天趁着有时间就全部解决掉吧！
<!--more-->

# vendor文件夹

这个事件的缘由是，github最近的更新自动忽略了vendor文件夹，导致所有的js和css出现404无法加载的情况
而目前大家最主流的做法就是，将vendor文件夹重名为libs

某些主题倒还好，我这个主题作者虽然及时更新解决了这个问题，可是更改的文件太多了....必须下载整包来更新，这样我以前的修改必须全部重来一遍，想死。
所以拖到了现在...

# 修改记录

虽然前面有过类似的记录，可是后面又断断续续改了些，这次所幸全部记录下吧
希望没有落下什么。。。目前还没发现差异

打开`themes\icarus\languages\zh-CN`修改

```
profile:
    follow: '+关注我'
```

打开`themes\icarus\layout\comment\duoshuo` 修改

```
ds.src = (document.location.protocol == 'https:' ? 'https:' : 'http:') + '//dn-hb0716.qbox.me/duoshuo.js';
```


打开`themes\icarus\layout\common\article`  删除

```
<footer class="article-footer">
            <%- partial('share/index', { post: post }) %>
            <%- partial('comment/counter', { post: post }) %>
        </footer>
```

打开`themes\icarus\layout\common\footer`  替换

```
<footer id="footer">
    <div class="outer">
        <div id="footer-info" class="inner">
            	<a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/"><img alt="知识共享许可协议" style="border-width:0" src="https://obbuo9upd.qnssl.com/cc4.0.png?imageMogr2/format/webp" /></a><br />本作品采用<a rel="license" href="https://creativecommons.org/licenses/by-nc-sa/4.0/deed.zh">知识共享署名-非商业性使用-相同方式共享 4.0 国际许可协议</a>进行许可。
            </div>
    </div>
    
</footer>
```

打开`themes\icarus\layout\common\head`  添加

```
<script language="javascript">
    host = window.location.host
    if(host == "tiexo.coding.me")
        window.location.href = window.location.href.replace(/tiexo.coding.me/,"www.tiexo.cn")
</script>

    <script type="text/javascript">
    var host = "www.tiexo.cn";
    if ((host == window.location.host) && (window.location.protocol != "https:"))
        window.location.protocol = "https";
    </script>
```

打开`themes\icarus\source\css\images`    图片全部替换

打开`themes\icarus\source\css\_variables`    修改

```
// Fonts
font-sans =  "Source Han Sans"
font-serif =  "Source Han Sans"
font-mono =  "Source Han Sans"
font-size = 16px
line-height = 1.7em
line-height-title = 1.4em
```

打开`themes\icarus\_config`   直接复制粘贴，全部替换。

# 周末

上午睡觉，下午收拾，晚上上网，一天就过去了。
冬天马上就要来啦，我得准备准备`(*∩_∩*)′`

