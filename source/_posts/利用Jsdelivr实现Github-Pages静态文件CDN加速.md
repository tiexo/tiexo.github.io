---
title: 利用Jsdelivr实现Github Pages静态文件CDN加速
cover: >-
  //r.photo.store.qq.com/psb?/V11rnv1t26XYl4/pwAHe6tXhNTne6aRjCCEaTHOZvSG4rO48zhmoLoPcmQ!/r/dFQBAAAAAAAAnull&bo=sATpAbAE6QERCT4!&rf=photolist&t=5_yake_qzoneimgout.png
abbrlink: 1e1b3df9
date: 2019-11-29 17:38:23
---

CDN加速不是一个新鲜的话题，但是受限于免费、无备案域名等因素，实际上并没有什么选择。直到偶然发现Jsdelivr竟然可以对整个Git仓库进行CDN加速后...
<!--more-->

### 图片

图片的CDN方案有很多，这里就不讨论了，本站使用QQ空间作为图床，速度应该是顶尖的。
有兴趣的可以访问：<a href="https://tiexo.github.io/e4ed098a/" target="_blank">《使用QQ空间相册生成图片外链》</a>

### 公共JS/CSS库

公共库也有不少选择，比如七牛、360、Loli等。
本站除了Fontawesome使用七牛外，其他的都是Loli CDN。

### 私人文件

本文今天介绍的主要是私人文件，譬如Github Pages仓库中CSS和JS两个文件夹里面的JS和CSS文件，以及搜索插件生成的JSON文件等。

其请求链接为

```html
https://tiexo.github.io/js/xxx.js
```
在主题引用处找到代码

```js
<%- _js('js/xxx', true) %>
```
将其修改为

```js
<%- _js('https://cdn.jsdelivr.net/gh/tiexo/tiexo.github.io/js/xxx', true) %>
```

其原理就是Jsdelivr会将所有Git仓库中的文件CDN化，我们使用文件的CDN链接替换其自身的链接，从而实现了CDN加速。

难点主要在于找到主题目录中的引用代码，之后直接按照格式替换链接即可。
具体格式为

```html
https://cdn.jsdelivr.net/gh/用户名/仓库名/文件路径
```

### 缺点

CDN都是有缓存的，可能修改某处文件后网站页面不会及时更新。

### 优点

至少比github.io要快吧？