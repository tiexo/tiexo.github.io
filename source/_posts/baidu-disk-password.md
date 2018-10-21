---
title: 自定义百度网盘提取密码
banner: 'https://obbuo9upd.qnssl.com/1603091535.webp'
abbrlink: dda14519
date: 2016-03-09 15:28:22
tags:
---
本文所涉及代码转载自[@giuem](https://www.giuem.com/)，仅供个人收集备份

<!--more-->

### 原理

百度网盘的自定义密码是在本地生成的
因此采用 JS 的方式修改 `makePrivatePassword` 这一函数即可

### 代码

压缩版
 

```javascript
javascript:
require(["function-widget-1:share/util/service/createLinkShare.js"])
.prototype.makePrivatePassword=function()
{return prompt("请输入自定义的密码","1234")}
```

原版

```javascript
require(["function-widget-1:share/util/service/createLinkShare.js"])
.prototype.makePrivatePassword = () => 
{return prompt("请输入自定义的密码", "1234")}
```

两者有啥区别...不清楚。

### 使用

将代码保存为书签网址，名字随意

![](https://obbuo9upd.qnssl.com/20160309151415.jpg)

按照正常的分享步骤，依次完成①和②

![](https://obbuo9upd.qnssl.com/20160309151105.jpg)

接着点击书签，然后再完成③，切记不能乱了顺序
即①-②-书签-③，页面会自动弹出窗口

![](https://obbuo9upd.qnssl.com/20160309151918.jpg)

注意只能输入4位字符，即四个字母或四个数字或一个中文+一个数字或字母
- test
- 1234
- te34
- 唐1
- 门t

成功后如下显示，不成功则提示参数错误

![](https://obbuo9upd.qnssl.com/20160309151943.jpg)

接着就可以复制发送给别人了...

> 链接: [http://pan.baidu.com/s/1bokT8Ph](http://pan.baidu.com/s/1bokT8Ph) 密码: test

看看效果如何吧=。=
当然你也可以用F12来使用...就不介绍啦。
