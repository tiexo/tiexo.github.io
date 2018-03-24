---
title: PCS破解百度网盘下载限速
date: 2017-06-25 21:06:17
banner: https://obbuo9upd.qnssl.com/201706252102.jpg?imageMogr2/format/webp
---
网络上关于“破解百度网盘限速”的搜索结果很多，方法也让人眼花缭乱，但大多都不稳定、有局限性。

例如最普通的破解版客户端，时灵时不灵
还有很多提取下载链接的脚本，再配合IDM或者迅雷下载，但我体验过后并没有效果。

<!--more-->

我曾经在某篇文章中介绍过尝试aget无限制线程的方法，最终没成功

> [百度网盘之殇——Win10安装Linux子系统](https://www.tiexo.cn/wsl-and-archlinux/)

在这之后我又试了一次虚拟机安装，虽然安装没有报错，但下载还是会报错...
好在今天又得知了一款新工具——**PCS百度网盘命令行工具**

# 下载

这是一个在github上面的开源项目

最新版下载地址：[https://github.com/GangZhuo/BaiduPCS/releases](https://github.com/GangZhuo/BaiduPCS/releases)

选择pcs-win32版本即可，下载完成后解压，将软件复制到windows\System32里面

# 命令

由于这是一个命令行工具，因此我们要通过cmd或powershell来使用

### 配置

输入`pcs context`可以查看配置文件

![](https://obbuo9upd.qnssl.com/201706252016.PNG?imageMogr2/format/webp)

- captchafile:：验证码图片位置，如果登录时需要验证码前往此处查看
- workdir：百度网盘工作目录，即你要下载文件所在的网盘位置
- max_thread：线程大小

### 线程

首先设置线程大小，我就直接弄的100，大家可以根据需要调节。
输入`pcs set --max_thread=100`即可

### 登录

输入`pcs login`按照要求填写百度账号和密码

### 目录

你可以输入`pcs cd`切换对应的百度网盘目录，如你要下载的文件在movie文件夹里面，
输入`pcs cd movie`就行。

这里我的处理方法是新建一个文件夹，每次将要下载的文件复制到这个文件夹，这样工作目录就不需要频繁更改了。

### 查看

进入下载目录后，你可以查看当前目录下的所有文件
输入`pcs ls`即可

![](https://obbuo9upd.qnssl.com/201706252028.PNG?imageMogr2/format/webp)

### 下载

这里我需要下载`【药丸字幕组】HOS.S05E02.1080p.mp4`这个文件
下载的命令格式是：`pcs download <文件名> <下载目录和文件名>`

![](https://obbuo9upd.qnssl.com/201706252044.PNG?imageMogr2/format/webp)

这一步我也是测试好多次才搞懂，主要是后面的下载目录和文件名，即图中的`/test/02.mp4`
- `/test`：实际路径是C:\test，如果没有这个文件夹会自动新建，当然你也可以自己更改路径，如果你改成**"/用户/test"**c盘里面就会有两个"用户"文件夹，搞不懂==
- `02.mp4`：这个也是自己随意设置的，包括名字和后缀都可以随意设置..

也可能是我还没搞清楚，但也无伤大雅，只要能找到下载的文件在哪就行。
按照上面的命令下载完成后，你在C盘test文件夹里面，就会发现一个02.mp4的文件。

### 速度

经过我的实际测试，是能达到**"满速"**状态的，即如果你的宽带是10M，那么下载速度就是1.25M/S左右。如果宽带是100M，那么下载速度就是12M/S左右。

![](https://obbuo9upd.qnssl.com/201706252111.PNG?imageMogr2/format/webp)

下载过程中，可能会有一些报错，但是没啥影响...

# 扩展

除了下载，PCS还支持上传

```
pcs upload <你要上传的文件> <你要上传到网盘的目录>
```
另外还支持整个文件夹下载

```
pcs synch -cd "保存目录" ”你要下载的网盘文件夹名称"
```
这个方法其实也不算复杂，但对于不喜欢折腾的人来说，也有一定门槛吧
希望它可以活的久一点，阿门。