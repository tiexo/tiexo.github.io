---
title: 使用QQ空间相册生成图片外链
cover: >-
  //r.photo.store.qq.com/psb?/V11rnv1t26XYl4/8VheMW*o4XdH3aHps4u6Zz2mttZ2s8BTOa1rEk6CT7s!/r/dEYBAAAAAAAAnull&bo=6APBAegDwQERCT4!&rf=photolist&t=5qzoneimgout.png
abbrlink: e4ed098a
date: 2018-11-03 16:41:34
---
图片外链是每个博客都要折腾的项目，我曾经使用过七牛、SM图床、微博图床等等，但七牛域名需要备案并且HTTPS流量收费，SM和微博则对图片尺度限制较大，连本站不露点的动漫图片都会被和谐。
这个时候，我终于回想起曾经在狐吧看到的QQ空间相册外链项目...
<!--more-->

### QQ空间相册外链项目

目前该项目由Windows软件版和GM脚本版，地址分别如下：
- [Qzone-Photo-Outside](https://github.com/xunni1000/Qzone-Photo-Outside)
- [QQ相册外链工具](https://greasyfork.org/zh-CN/scripts/373731-qq%E7%9B%B8%E5%86%8C%E5%A4%96%E9%93%BE%E5%B7%A5%E5%85%B7)

两个版本都比较简陋，但这些都不是重点，因为QQ空间的确有独到的优势。
- 支持HTTPS，这是大势所趋。
- 稳定，除非QQ空间关闭或者接口被封。
- 高速，QQ空间图片的加载速度绝对是一流的。
- 限制少，不会动不动就和谐。
- 保留原文件，像SM图床和微博图床都无法保留原文件。

所以，我把本站的所有图片全部迁移到QQ空间啦。

### 使用

实际上外链工具只是提供链接转换，仍然需要我们手动把图片上传到QQ空间相册里面。
- 选择原图上传

根据作者提醒，必须选择原图上传，但是对访问权限无限制。

<div align=center><img src="//r.photo.store.qq.com/psb?/V11rnv1t2fVV1f/pMNIVnCwfKt8GVtB05P7REGs2RmOxToyev9cu78WtU4!/r/dFQBAAAAAAAAnull&bo=0AKzANACswADCSw!&rf=photolist&t=5qzoneimgout.png"></div>

- 复制链接

如果你用的GM脚本版，那么将鼠标移动到图片缩略图上面会显示“外链”字样，点击后会自动复制链接（无任何提示）。

<div align=center><img src="//r.photo.store.qq.com/psb?/V11rnv1t2fVV1f/phMDoUQk4qls17QsKBtEi41RoICkdx6Cn*ZEuboVKPo!/r/dDQBAAAAAAAAnull&bo=EgHZABIB2QADCSw!&rf=photolist&t=5qzoneimgout.png"></div>

如果你用的是软件版，那么需要手动复制QQ空间图片链接，然后去软件点击粘贴，接着会自动复制转换后的外链。

<div align=center><img src="//r.photo.store.qq.com/psb?/V11rnv1t2fVV1f/8gZTpF0TMZ6kKVg4gzhEP84nIslgaK2m*iguj1*FLrU!/r/dFIBAAAAAAAAnull&bo=tAK7AbQCuwEDCSw!&rf=photolist&t=5qzoneimgout.png"></div>
<br>
具体效果可以看看本站，根据作者所说已经稳定使用9年，应该没什么问题！