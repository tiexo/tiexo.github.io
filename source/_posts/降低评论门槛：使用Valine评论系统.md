---
title: 降低评论门槛：使用Valine评论系统
thumbnail: //r.photo.store.qq.com/psb?/V11rnv1t26XYl4/oiC6oYru46lv2k1ZmSL4Ze1oKZsy.J85JW2Q5RK5XVc!/r/dDUBAAAAAAAAnull&bo=6AOVAegDlQERCT4!&rf=photolist&t=5qzoneimgout.png
abbrlink: b23226a5
date: 2018-10-22 13:49:52
---
这次从Gitalk更换至Valine评论，主要出于两方面的因素考虑：
- 降低评论门槛，后者甚至不需要填写任何信息即可评论；
- 文章链接重新生成，导致之前的Gitalk评论数据丢失。

从昨晚开始折腾到现在，总算把基本功能设置好啦~
<!--more-->

### Valine评论启用

实际上本款主题是适配了Valine评论系统的，但是由于版本错乱，加上我自己修改过主题文件，所以还是花了些时间。

![](//r.photo.store.qq.com/psb?/V11rnv1t2fVV1f/r6UZFUaiScjI2XHw*Cmr.rGkazDdccFyKKWkfldCGKI!/r/dFkAAAAAAAAAnull&bo=hQLIAIUCyAARCT4!&rf=photolist&t=5qzoneimgout.png)

另外还有一些配置项没弄好，例如默认头像和评论者信息，后面再慢慢研究。

### 搭配Valine-Admin系统

如果不搭配Valine-Admin系统使用，Valine在很多地方体验都不好，例如邮件通知和管理评论。
整个过程基本都是教程，其中在某些地方我也栽了跟头。
- **SMTP邮箱设置**

这里需要注意的是，如果用QQ邮箱，必须开启独立密码并用授权码登录，配置好后再重启一下。
![](//r.photo.store.qq.com/psb?/V11rnv1t2fVV1f/b7A4KgzN*t3vPbVQh*6.Tzi5GeRjJhUGSOtbxM47kkQ!/r/dDUBAAAAAAAAnull&bo=ZgMbAWYDGwERCT4!&rf=photolist&t=5qzoneimgout.png)

应用日志提示成功就行了。

- **管理评论**

管理评论的后台需要手动添加管理员账号，即`存储-_User`，依次在`email、username、password`三个单元格编辑，设置好邮箱、用户名和密码。
![](//r.photo.store.qq.com/psb?/V11rnv1t2fVV1f/7aA5dj0o7typPLbzDoVGaxC9SX.uvuglmkSkFH3cKU0!/r/dDQBAAAAAAAAnull&bo=WQSZAVkEmQERCT4!&rf=photolist&t=5qzoneimgout.png)

接着访问管理后台，输入邮箱和密码登录，不需要使用用户名。

![](//r.photo.store.qq.com/psb?/V11rnv1t2fVV1f/5WB*zTfwT6fTWMlhG*i.nyiO26IF5EVZjtklAlPx4LU!/r/dFMBAAAAAAAAnull&bo=FgJgARYCYAERCT4!&rf=photolist&t=5qzoneimgout.png)

在这里就可以进行评论管理啦，还支持手动发送邮件通知。
另外，每次有新评论产生时，应用日志中都会有提示：

![](//r.photo.store.qq.com/psb?/V11rnv1t2fVV1f/9Kf.3FAD3FE7Nap4Jgdcj7XzSK42DanhrGrRKQB2Tkc!/r/dC4BAAAAAAAAnull&bo=sgIUAbICFAERCT4!&rf=photolist&t=5qzoneimgout.png)

收到的提醒邮件

![](//r.photo.store.qq.com/psb?/V11rnv1t2fVV1f/9ZkFVT3pOKYk8PtPoHm7mVXVhNTIBZO518tsOOPpGjc!/r/dFMBAAAAAAAAnull&bo=VgOUAVYDlAERCT4!&rf=photolist&t=5qzoneimgout.png)

另外还有点击链接自动跳转到评论处，我还没弄好...
总之，现在评论是可以正常使用啦，后面的细节我再慢慢调整吧，勤快！