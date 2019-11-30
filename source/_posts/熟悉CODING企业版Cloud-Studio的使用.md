---
title: 熟悉CODING企业版Cloud Studio的使用
thumbnail: >-
  //r.photo.store.qq.com/psb?/V11rnv1t26XYl4/lHceXUWapSGWTjMdktWyTFqUEd1o.8FaXxH.fW6bo38!/r/dFIBAAAAAAAAnull&bo=sAQBArAEAQIRCT4!&rf=photolist&t=5_yake_qzoneimgout.png
abbrlink: 6ea6b07d
date: 2019-11-29 15:38:14
---
由于CODING推出了企业版，我预感之前使用的WEB IDE将会逐渐停止维护，因此提前熟悉一下新版Cloud Studio的使用。
<!--more-->

### 注册企业版

要想使用新版Cloud Studio必须先注册CODING 企业版，目前5人以下团体是免费的。
实际上如果单纯为了使用Cloud Studio，并不需要去研究CODING的项目体系，因为我的博客托管在Github，只是利用它来管理代码而已。

不过需要注意的是，**新版Cloud Studio只能每天使用两个小时**。

### 导入项目

目前新版Cloud Studio不支持直接从Github导入仓库，因此只能通过git pull命令来实现。
记得将SSH公钥添加到Github仓库的`Setting—Deploy keys`里面。

### 安装Hexo

选择默认的Node.js环境，根据官网命令安装即可，如果安装失败记得使用`sudo`命令。

### 使用

由于新版Cloud Studio汉化不完全，而且配置选项跟之前有些差别，也耗费了我一些时间来摸索。

#### 本地预览

旧版是先输入hexo s命令，接着选择“`访问链接—修改端口号为4000`”，点击链接即可进行预览。

<div align=center><img src="//r.photo.store.qq.com/psb?/V11rnv1t2fVV1f/I73PO2Sb*jzd8pz2n46yZbOuJZm1m9j.2Qkjk3Y2pSI!/r/dFQBAAAAAAAAnull&bo=NQI0ATUCNAEDCSw!&rf=photolist&t=5_yake_qzoneimgout.png"></div>

但是新版去掉了图形化的界面，反而没有之前方便了。

在菜单栏点击“`查看—命令面板`”，输入"`preview`"点击"`generate preview config file`"创建一个预览配置文件"`.vscode/preview.yml`"

主要是修改`port、run、root`这三项

{% codeblock preview.yml lang:yaml %}
# .vscode/preview.yml
autoOpen: true # 打开工作空间时是否自动开启所有应用的预览
apps:
  - port: 4000 # 应用的端口
    run: hexo s # 应用的启动命令
    root: ./public # 应用的启动目录
    name: hexo s # 应用名称
    description: 在线预览 # 应用描述
    autoOpen: false # 打开工作空间时是否自动开启预览（优先级高于根级 autoOpen）
{% endcodeblock %}
以后每次想要预览时，只需要点击“`查看—命令面板`”，输入"`preview`"点击"`open preview tab`"，选择"`hexo s`"即可。

<div align=center><img src="//r.photo.store.qq.com/psb?/V11rnv1t2fVV1f/PLQy*uJyIc0ah0ca6PJeh0mcBF5PWc57Hgy8SNhOfUg!/r/dFIBAAAAAAAAnull&bo=ywHaAMsB2gADCSw!&rf=photolist&t=5_yake_qzoneimgout.png"></div>

点击"`open in browser`"可以在浏览器中打开新标签页。

<div align=center><img src="//r.photo.store.qq.com/psb?/V11rnv1t2fVV1f/7HniNNl*qWVA.xuICbVpKE6RofZ9G3rNnhJ*Xp.z6Vg!/r/dL8AAAAAAAAAnull&bo=JAeeAyQHngMDCSw!&rf=photolist&t=5_yake_qzoneimgout.png"></div>

不过，我发现修改某些文件后，预览页面并不会实时变动，而是要重新hexo g生成，还有待考察。

#### Git提交

旧版是在“版本”中依次选择“`提交—推送`”即可，分别对应git commit和git push。

<div align=center><img src="//r.photo.store.qq.com/psb?/V11rnv1t2fVV1f/fHF9AovBV4bUsld2TGtiWm1k2.oF*a00hBkWHp0Heqo!/r/dL8AAAAAAAAAnull&bo=MAImAjACJgIDCSw!&rf=photolist&t=5_yake_qzoneimgout.png"></div>

新版则是先在“`源代码管理`”提交commit

<div align=center><img src="//r.photo.store.qq.com/psb?/V11rnv1t2fVV1f/Nr6WaVSm9QaNcy*qJnsp.ERIejUccEi6KQb9sjyl0YM!/r/dFQBAAAAAAAAnull&bo=nwFnAZ8BZwEDCSw!&rf=photolist&t=5_yake_qzoneimgout.png"></div>

接着点击左下角的“`同步按钮`”，就会自动推送到git仓库了。

<div align=center><img src="//r.photo.store.qq.com/psb?/V11rnv1t2fVV1f/d6dfg04B3sA.M3qkTt5vKH09f1TZjsnQV7BtAjLoOHw!/r/dLYAAAAAAAAAnull&bo=MQFyADEBcgADCSw!&rf=photolist&t=5_yake_qzoneimgout.png"></div>

当然，你也可以直接输入git命令进行提交和推送。

### 总结

使用新版Cloud Studio来管理hexo在功能上没有问题，只不过一些细节和交互还需要优化改进。
另外每天限制两小时的使用比较坑，所以我目前还在使用旧版，等最后关头再转移过去吧。
