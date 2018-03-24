---
title: 百度网盘之殇——Win10安装Linux子系统
date: 2017-05-13 11:09:19
banner:  https://obbuo9upd.qnssl.com/201705131105.jpg?imageMogr2/format/webp
---

百度网盘从8秒教育片到限速，一步一步的吞噬着我们的耐心...

前阵子偶然搜索到github上的一个项目，记录着破解百度网盘限速的几种方法。
先试了一个利用aria2下载的方法，无奈速度少于2M/S，于是想尝试下另外一种复杂点的，这样，噩梦就开始了。
<!--more-->

### Linux bash on win10

Win10系统内部多了一项功能，可以安装Linux子系统，但是问题实在太多太多了
按照教程它是通过应用商店下载的，可是国内没有节点，这意味着根本下载不了

由于免费代理需要经常维护/更新等等，所以我平时用的是XX-NET，可是它不能全局代理
找了半天VPN都没有，想到以前经常用来换IP的SQSX，特么的系统不支持，一打开就停止运行。
我没想到，自从更新win10创意者之后，这么多软件不支持（埋下伏笔）

绞尽脑汁的找啊找，终于通过SS在IE设置了代理，CMD命令也顺利的下载成功！
接下来依次安装Pyhton、pip、aget，可安装完后提示找不到命令....

![](https://obbuo9upd.qnssl.com/201705131049.png?imageMogr2/format/webp)

去issue提问说是WSL的bug，建议我更换Archlinux。

### Archlinux

在github同样有这个项目，也就是替换win10里面的Ubuntu为archlinux，直接下载bat文件在cmd安装即可。
中间还算顺利，最后一步卡在`renaming shortcut`....等了半个多小时都不动，去issue搜索说是bug已经修复。
可是问题根本还在啊，最后用作者提供的取消命令解决（不知有没有后续影响）

然后就安装环境...但是一直报错，原来又是代理的原因，需要替换成国内源
随意找了个网易的i686源，速度倒是挺快，可最后一步又报错
这次真的折腾好久，和作者一起排查了两三天，原来是不支持i686....

切换到X86_64后继续折腾，最后一步继续开始报错

```
root@FMBM-NG8ODO:~# pip install aget
/usr/bin/python: /usr/lib/libc.so.6: version `GLIBC_2.25' not found (required by /usr/lib/libpython3.6m.so.1.0)
```
搜索半天说是版本的原因....后来直接一个`pacman -S glibc`解决了
在原教程中根本没有这一步，包括后面一步的报错，安装了openssl才解决
这样终于测试了一遍下载，速度非常棒，简直要起飞了！！！

![](https://obbuo9upd.qnssl.com/201705131047.PNG?imageMogr2/format/webp)

不枉我折腾了一周，可万万没想到...第二次打开的时候又报错

```
错误: 0x8007001f
按任意键继续...
```
我还有什么话可说呢...估计又要重装才能解决，我放弃了
准备采用虚拟机的方案==

### Vmware

虚拟机和上面的方法类似，也是构建一个archlinux系统，依次下载好软件安装后
一切都非常顺利

直接需要安装Xshell的时候，系统又不支持，一安装就停止工作...我真是恨不得要重装系统了
后来用putty代替的，倒也可用。

和前面一样，依旧多了glibc和openssl两步，问题出在安装完openssl之后，不是一个问题而是三个问题。
郁闷的要吐血了，安装之路就是报错之路

 
```
sudo: error in /etc/sudo.conf, line 0 while loading plugin "sudoers_policy"
sudo: unable to load /usr/lib/sudo/sudoers.so: libssl.so.1.0.0: cannot open shared object file: No such file or directory
sudo: fatal error, unable to load plugins 
```

无论我输入任何sudo命令，都会报错
而且我把putty关闭后，再次打开就提示`Server unexpectedly closed network connection`
第三次打开又变成`network error:connection refused`直到现在

而输入其他非sudo命令也会报错，反正各种报错，全部报错
我不断的重新安装vmware都没用，估计只能重装系统了吧

### 总结

我觉得很大一部分原因和windows10系统有关，尤其是最新的创意者版本
现在我决定暂时放弃，等docker出来后再说，这一篇就是我的百度网盘之殇，呜呼！

