---
title: 站点日常更新V7.6.5
date: 2017-06-05 16:27:57
banner:  https://obbuo9upd.qnssl.com/201706051630.jpg?imageMogr2/format/webp
---

本次更新日志如下：
- Hexo版本升级到V3.3.7
- 通过百度站长平台HTTPS认证
- 添加百度主动推送插件

接下来可能还会有一些小优化，针对网站响应速度的吧
<!--more-->

# Hexo版本

其实这也算填了一个小小的坑，早在十天前就准备升级到V3.3.7，然后中间出了点小问题。
由于擅自修改了`packages.json`文件，导致无法通过`npm update`命令升级，亏我还特意去发了一条issue，结果还是没找到错误的地方，今天终于解决了。

首先我贴上配置文件：

```
{
  "name": "hexo-site",
  "version": "0.0.0",
  "private": true,
  "hexo": {
    "version": "3.3.7"
  },
  "dependencies": {
    "hexo": "^3.3.7",
    "hexo-autonofollow": "^1.0.0",
    "hexo-baidu-url-submit": "0.0.5",
    "hexo-deployer-git": "^0.3.0",
    "hexo-generator-archive": "^0.1.4",
    "hexo-generator-index": "^0.2.0",
    "hexo-generator-json-content": "^3.0.1",
    "hexo-generator-sitemap": "^1.1.2",
    "hexo-renderer-ejs": "^0.3.0",
    "hexo-renderer-marked": "^0.3.0",
    "hexo-renderer-stylus": "^0.3.1",
    "hexo-server": "^0.2.0"
  }
}
```

我把name、version两项都修改了（默认真的不好看），接着删除了dependencies的hexo一栏
因为我觉得两个重复了==

刚刚又把它恢复成了原来的状态，终于成功升级了...

# HTTPS认证

自从放弃百度统计后，我就没登陆过百度站长平台。昨天进去看了下，竟然多了不少功能，
而HTTPS认证就是其中的一个。

![](https://obbuo9upd.qnssl.com/201706051559.PNG?imageMogr2/format/webp)

它的作用就是一条，将百度收录的页面链接从http替换成https。
之前我还纳闷，全站https化后很久了，为啥百度还不收录https页面？原来要主动去认证的！

提交申请后，提示一日内审核，实际上很快几分钟或者一个小时就通过了。
效果也是杠杠的：

![](https://obbuo9upd.qnssl.com/20170605104.PNG?imageMogr2/format/webp)

大家赶紧去试试吧

# 百度主动推送

以前尝试过添加“百度自动推送”的代码，后来https化失效了，一直没弄清楚原因就撤掉了

> [添加百度自动推送JS代码](https://www.tiexo.cn/baidu-auto-push/)

这两天偶然又发现了一款主动推送的插件，相比以前更高级啦
我们直接输入命令安装：

```
npm install hexo-baidu-url-submit --save
```
在`_config.yml`文件中添加配置选项

```
baidu_url_submit:
  count: 1 ## 一次提交链接数量
  host: www.tiexo.cn ## 在百度站长平台中注册的域名
  token: your_token ## 请注意这是您的秘钥， 所以请不要把博客源代码发布在公众仓库里!
  path: baidu_urls.txt ## 文本文档的地址， 新链接会保存在此文本文档里
```

提交数量第一次可以设置大点，把所有的链接都提交一次，以后可以设置为1，因为你每次写一篇文章就会hexo d一次，这样只需将新文章的链接提交即可。

有点问题的是，如果你没发布新文章，只是修改文件后hexo d也会主动推送一次，额，希望没啥坏处吧，虽然官网说推送次数多了不好。

而token可以在百度站长平台——链接提交——主动推送处获取

![](https://obbuo9upd.qnssl.com/201706051616.PNG?imageMogr2/format/webp)

上图红色涂抹处就是的了
接着在`_config.yml`文件deploy处添加：

```
deploy:
  - type: git
    repo: git@git.coding.net
    branch: coding-pages
  - type: baidu_url_submitter
```
也就是在原有的基础上，添加一条type，这里需要注意

> 两个type前都要加上横岗"-"和"空格"，并且记得对齐

我被它折腾好几次呢，弄完就成功了，日后`hexo d -g`会自动生成文件并推送的。
效果如下：

![](https://obbuo9upd.qnssl.com/201706051625.PNG?imageMogr2/format/webp)

相信日后文章收录会更多更及时吧~！
然后本次更新就到此结束啦，下次再见吧。




