---
title: 由一个报错引发的连串报错
banner: 'https://obbuo9upd.qnssl.com/201707250348.jpg?imageMogr2/format/webp'
abbrlink: c6fac71e
date: 2017-07-25 03:52:44
---
故事要从上一篇文章说起...
在解决了bgm的问题后，我按照习惯在IDE提交和推送代码，然后突然报错了。
<!--more-->

# Workspace

最开始的报错是这样的

```
error: unable to index file archives/2016/10/index.html                                                                     
fatal: updating files failed                                                                                                
FATAL Something's wrong. Maybe you can find the solution here: http://hexo.io/docs/troubleshooting.html                     
Error: error: unable to create temporary file: No space left on device                                                      
error: archives/2016/10/index.html: failed to insert into database                                                          
error: unable to index file archives/2016/10/index.html                                                                     
fatal: updating files failed                                                                                                
                                                                                                                            
    at ChildProcess.<anonymous> (/home/coding/workspace/node_modules/hexo-util/lib/spawn.js:37:17)                          
    at emitTwo (events.js:106:13)                                                                                           
    at ChildProcess.emit (events.js:191:7)                                                                                  
    at maybeClose (internal/child_process.js:885:16)                                                                        
    at Process.ChildProcess._handle.onexit (internal/child_process.js:226:5
```

我一琢磨不像是hexo的原因啊，于是跑去问coding的工作人员，回复我说是workspace硬盘满了。
额，然后我心疼的去把它从1G调整成2G
结果保存后没什么变化...我就多点了几次确定，页面出现提示

```
The workspace ‘woudlf’ is maintaining
```
我想应该是服务器正在调整资源吧，于是耐心等了十分钟，之后果然可以进去了
可是....里面所有的文件都没了！

难道硬盘扩容会格式化吗？我不清楚，也没心情去问了...
当我尝试从master分支拉取代码，拉了好几次，一直在ing没动静

一怒之下我就把workspace删了，新建了一个，然后从项目那边同步代码，的确找回了截止上次提交的文件。
不由暗喜，果然备份是个好习惯啊
但是问题远远没有结束，当我尝试输入hexo命令时才发现，需要重新安装hexo...

# Hexo

好嘛，我按照官网的步骤操作，当我输入`hexo init`时
报错又出现了

```
{target} not empty, please run `hexo init` on an empty folder and then copy your files into it
```
我会说之前在本地电脑上已经遇到过一次了么，如果你直接将hexo目录里的文件删除，再次安装时就会报这个错...
可在ide我也没有办法建新的文件夹安装再剪切啊，于是各种百度谷歌

终于在某个人的博客查到了一个思路：`git init`
初始化git，然后重新设置git config，最后git pull就搞定了。

这样总算是可以正常使用了...可万万没想到最难的还在后面...

# Nodejs

因为主题的本地搜索依赖`hexo-generator-json-content`插件，而ide自带的node版本太低，这样每次输入hexo命令都会报错

```
ERROR Plugin load failed: hexo-generator-json-content
```

解决办法就是升级nodejs版本
我本来以为挺简单的，因为之前也升级过一次，没想到这次好麻烦...不知道之前怎么操作的？
按例搜索了下，选择使用“n”来管理

```
sudo npm cache clean -f
sudo npm install -g n
sudo n stable
```

前面两步都没问题...最后一步弄得我要吐血了
下载速度是以0.1%为单位的，而且不超过5%就卡住不动了，我傻傻的不断重试都不行，只能先放弃了。

直到刚才，我又爬起来，希望半夜速度会快一点吧
虽然还是以0.1%推进，但是持续到了43%，然后报错了...

```
curl: (56) SSL read: error:00000000:lib(0):func(0):reason(0), errno 104
```

妈了个蛋，我又试了两次，分别在53%和93%报错
万念俱灰之时，我搜到了一篇文章，里面也提到了使用n下载速度慢的情况，并且他介绍了一个方法

```
curl -sL https://deb.nodesource.com/setup_8.x | sudo -E bash -
sudo apt-get install -y nodejs
```

我只想说牛逼了！感觉控制台数据嗖嗖嗖的加载，眨眼之间就下好了
原来这是github上面的一个项目，于是跑去默默的关注了，真是造福大众啊！
嗯，这样json插件的问题也解决了，网站满血复活。

# 总结

其实我多么想说一句，放弃吧，弄不好了
没想到被我瞎折腾的又恢复了...于是忍不住想写一篇文章纪念下。

好吧，不说了，睡觉晚安啦~
