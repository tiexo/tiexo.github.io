---
title: Hexo优化：压缩Html、CSS、JS文件
banner: 'https://obbuo9upd.qnssl.com/201605292233.webp'
abbrlink: 37be2bef
date: 2016-05-29 22:30:06
---
前几天曾使用`hexo-all-minifier`插件，结果却报错了
今晚一狠心就逐个添加测试，应该算是成功了吧
<!--more-->

# HTML

使用[**html-minifier**](https://github.com/kangax/html-minifier)来进行压缩，直接安装即可

```
npm install hexo-html-minifier --save
```
压缩前：

![](https://obbuo9upd.qnssl.com/20160529214919.webp)

压缩后：

![](https://obbuo9upd.qnssl.com/20160529214859.webp)


# CSS

使用[**clean-css**](https://github.com/jakubpawlowicz/clean-css)进行压缩

```
npm install hexo-clean-css --save
```
压缩前：

![](https://obbuo9upd.qnssl.com/20160529215601.webp)

压缩后：

![](https://obbuo9upd.qnssl.com/20160529215646.webp)

# JS

使用[**uglify**](https://lisperator.net/uglifyjs/)进行压缩

```
npm install hexo-uglify --save
```
压缩前：

![](https://obbuo9upd.qnssl.com/20160529220658.webp)

压缩后：

![](https://obbuo9upd.qnssl.com/20160529220643.webp)


# 完成

加上webq的图片，整个网站元素都压缩完成啦
虽然每个文件都变化的非常细微，但是也算进步吧！ㄟ(⊙ω⊙ㄟ)

