---
title: 适配谷歌AMP页面
date: 2018-02-06 00:24:33
banner: https://ws1.sinaimg.cn/large/902eb75fgy1fo61c2p5yuj20rs0b440p.jpg
---
刚刚在新闻APP上面看见了一篇关于AMP的文章，心血来潮开始适配！
<!--more-->

AMP即“Accelerated Mobile Pages Project（移动端网页加速加载技术）”的简称，是由谷歌及内容商共同发起的改善移动网页加速开源项目。

由于已经有人开发出相关插件，因此适配还是很简单的
首先安装`hexo-generator-amp`插件
 

```
npm install hexo-generator-amp --save
```

接着打开`themes/icarus/layout/common/head.ejs`添加代码

```
<% if (is_post() && config.generator_amp){ %>
  <link rel="amphtml" href="<%= config.url %><%= config.root %><%= page.path %>/amp/index.html">
<% } %>
```
打开站点`_config.yml`文件，添加代码

```
# hexo-generator-amp
# The following settings is the quick start options.

generator_amp:
  templateDir:  amp-template
  assetDistDir: amp-dist
  logo:
    path:   sample/sample-logo.png
    width:  600
    height: 60
  substituteTitleImage:
    path:   sample/sample-substituteTitleImage.png
    width:  1024
    height: 800
  warningLog: false   # To display warning, please set true.
```

尝试`hexo clean，hexo g，hexo s`进行测试，没有错误就`hexo d`部署
如果成功，文章后面可以添加 /amp/ 检验，Console 会进行提示：

```
Navigated to https://www.tiexo.cn/tblm-app/amp/
viewer-impl.js:716 Powered by AMP ⚡ HTML – Version 1516850240342 https://www.tiexo.cn/tblm-app/amp/
```
界面也会变成插件的默认主题

![](https://ws1.sinaimg.cn/large/902eb75fgy1fo5z2dsoj1j20b20judhc.jpg)

然后我们可以去谷歌测试下网页是否规范，[点此前往~](https://search.google.com/test/amp)

![](https://ws1.sinaimg.cn/large/902eb75fgy1fo5zcn6rhdj20qc07vgm7.jpg)

顺手把它提交给Google吧...收录后在搜索结果中就可以看见AMP闪电标志了

![](https://ws1.sinaimg.cn/large/902eb75fgy1fo5zdmtdqwj20bw05hdg7.jpg)

而且我发现目前百度也支持提交AMP页面，这样可用范围就大大增加啦，只不过还得研究下这个主动推送。

![](https://ws1.sinaimg.cn/large/902eb75fgy1fo616gh5rrj20zq0lg40q.jpg)

今天就到这吧，有兴趣的也可以试试。
