---
title: 服务体验更棒的Gitalk评论系统
banner: 'https://obbuo9upd.qnssl.com/201709132209jpg.jpg?imageMogr2/format/webp'
abbrlink: '8469e667'
date: 2017-09-13 21:49:31
---
咳咳，本站又更换评论系统啦！
从之前的gitment改为gitalk，两者原理一致，但在技术支持和界面显示上有了更好的体验，因此推荐给大家！
<!--more-->

# gitment

之前主要困扰的问题是，移动端兼容性很差，后来使用了pull requests里面的版本解决了（搞不懂作者为啥一直不合并，因此我判断他弃坑了）
所以，当有了更好的选择，我果断抛弃了这个被抛弃的项目。

> [体验GitHub Issues的评论系统——Gitment](https://www.tiexo.cn/gitment/)

# gitalk

这个名字...我之前一直以为是gittalk，原来中间缩写了一个t
然后安装的时候调试了半天才发现原因==

[Gitalk](https://github.com/gitalk/gitalk) 是一个基于 Github Issue 和 Preact 开发的评论插件。

### 特性
- 使用 Github 登录
- 支持多语言 [en, zh-CN, zh-TW, es-ES, fr]
- 支持个人或组织
- 无干扰模式（设置 distractionFreeMode 为 true 开启）
- 快捷键提交评论 （cmd|ctrl + enter）

以上为官方介绍...大体上原理是跟gitment一样滴

### 安装

下面我稍微说下自己在hexo（icarus主题）下的安装过程
首先在主题`layout/comment`新建一个`gitalk.ejs`文件（注意！不同主题的文件目录结构可能不同）

```javascript
<% if (typeof(script) !== 'undefined' && script) { %>
<link rel="stylesheet" href="https://unpkg.com/gitalk/dist/gitalk.css">
<script src="https://unpkg.com/gitalk/dist/gitalk.min.js"></script>
	<script>
		var gitalk = new Gitalk({
          clientID:  '<%= theme.comment.gitalk.clientID %>',
          clientSecret: '<%= theme.comment.gitalk.clientSecret %>',
          repo: '<%= theme.comment.gitalk.repo %>',
		  id: window.location.pathname,
          owner: '<%= theme.comment.gitalk.owner %>',
          admin: '<%= theme.comment.gitalk.admin %>',
		  distractionFreeMode: '<%= theme.comment.gitalk.distractionFreeMode %>',
     })
    gitalk.render('gitalk-container')
	</script>
<% } else { %>
    <div id="gitalk-container"></div>
<% } %>
```
在`comment/scripts.ejs`里面添加

  

```javascript
  else if (theme.comment.gitalk &&
  theme.comment.gitalk.owner &&
  theme.comment.gitalk.repo &&
  theme.comment.gitalk.admin &&
  theme.comment.gitalk.clientID &&
  theme.comment.gitalk.clientSecret) { %>
  <%- partial('comment/gitalk', { script: true }) %>
  <% } %>
```

在`comment/index.ejs`里面添加

```javascript
else if (theme.comment.gitalk) { %>
        <section id="comments"><%- partial('comment/gitalk') %></section>
    <% } %>
```

最后在主题`_config.yml`里面进行配置

```javascript
gitalk: 
    clientID: 'Github Application Client ID',
    clientSecret: 'Github Application Client Secret',
    repo: 'Github repo',
    owner: 'Github repo owner',
    admin: ['Github repo collaborators'],
    distractionFreeMode: 'true'
```
这些都是我一点点手动调试出来的，虽然代码不规范，但最后还是成功了！
关于`Github Application`就不多说了，操作步骤和gitment一样...大家也可以去看官方文档或者issue区提问。

### 设置

我认为几个比较重要的选项是
- id ——页面的唯一标识，默认是 `location.href`，最好改成`window.location.pathname`，这样可以让不同形态的链接共用评论。
- labels——Github issue 的标签，默认是`Gitalk`，如果你是从gitment转来的可以将它设置为`gitment`，这样之前的评论就不会丢失了，无缝转移。
- distractionFreeMode——类似Facebook评论框的全屏遮罩效果，默认是`false`关闭，可以设置`true`打开。
- pagerDirection——评论排序方式， `last`为按评论创建时间倒叙，`first`为按创建时间正序。
- createIssueManually ——如果当前页面没有相应的 isssue 且登录的用户属于 admin，则会自动创建 issue。如果设置为 `true`，则显示一个初始化页面，创建 issue 需要点击 init 按钮。

剩下的就不一一介绍了，大家可以在本文评论区测试体验下

### 界面

当你以游客身份浏览时，如果当前页面没有评论会提示：

![](https://obbuo9upd.qnssl.com/20170913195137.png?imageMogr2/format/webp)

由于插件是默认自动初始化评论，因此用管理员账号登录应该无需手动点击...
这样页面没有评论的话会显示这样：

![](https://obbuo9upd.qnssl.com/20170913212839.png?imageMogr2/format/webp)

在右上角个人菜单可以操作评论排序：

![](https://obbuo9upd.qnssl.com/20170913212950.png?imageMogr2/format/webp)

另外也可以直接点击回复按钮进行@人：

![](https://obbuo9upd.qnssl.com/20170913213150.png?imageMogr2/format/webp)

貌似管理员和其他用户的评论区颜色也不一样...

### 缺陷

除去github issue自带的特性，我认为最大的缺陷依然是移动端兼容性...就和官方版的gitment一样，在我手机浏览器中根本不显示评论区。

![](https://obbuo9upd.qnssl.com/20170913213951.jpg?imageMogr2/format/webp)

我会去issue区跟作者提需求...应该挺容易解决的吧，毕竟之前版本的gitment已经解决了...

然后就是我曾经写过一篇文章：

> [微信接收评论提醒并回复](https://www.tiexo.cn/github-reply/)

就在前阵子腾讯企业邮箱的微信公众号更新，强制关联了小程序，导致不能直接回复了！
我也有点束手无策，用小程序直接回复邮箱地址不对，用QQ邮箱APP回复地址虽然是对的，但是不支持发送邮件给这类型地址...

```
reply+007c9499179969f7bbafb8e075347c91385685873bbe58cf92cf0000000115cd139e92a169ce0eb3e15b@reply.github.com
```

找来找去，只发现foxmail客户端是支持的...但是手机上真没办法了T.T
这篇文章就到这儿吧，好久没更新了...以后要勤快起来才行
