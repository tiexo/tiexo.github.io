---
title: Icarus主题个性化定制
date: 2016-03-20 19:37:19
tags:
banner: https://obbuo9upd.qnssl.com/Konachan.com%20-%20217370%20sample.webp
---
icarus——也就是本站所用的主题，作者很多设计都是遵循大众标准，但是对我来说则并非完美。
因此我自己在一些细微的地方进行修改，此篇文章主要是为了备份。
<!--more-->

### Widgets

主要是将博客从三栏转为两栏，去掉右侧小工具栏
修改`icarus/_config.yml`文件

```bash
# Widgets
widgets:
    - 
```

### Archives

主要是修改归档页面文章显示数量（hexo默认和首页文章显示数量一致，因此需要自定义）
修改`_config.yml`文件

```bash
# Pagination
## Set per_page to 0 to disable pagination
per_page: 10
pagination_dir: page

# hexo-generator-archive
archive_generator:
  per_page: 0
```

### Social links

去掉左侧社交按钮，直接将`icarus/_config.yml`文件以下代码删除

```bash
social_links:
        github: /
        twitter: /
        facebook: /
        dribbble: /
        rss: /
```

### Article

删除文章页面末尾&首页的“评论”和“分享”按钮
在`icarus/layout/common/article.ejs`中删除如下代码

```bash
<footer class="article-footer">
      <%- partial('share/index', { post: post }) %>
      <%- partial('comment/counter', { post: post }) %>
</footer>
```

### Font size

调大网站所有字体，打开`icarus/source/css/_variables.styl`

```bash
font-size = 16px
line-height = 1.7em
line-height-title = 1.4em
```

### About

删除一切多余显示，添加一言api
修改`source/about/index.md`

```javascript
<script type="text/javascript" 
src="http://api.hitokoto.us/rand?encode=js&charset=utf-8">
</script> 
<div id="hitokoto"onclick="return false;">
<script>hitokoto()</script>
```

### Footer

将版权声明迁移至about页面，删除footer显示
修改`icarus/layout/common/footer.ejs`

```bash
<footer id="footer">
    <div class="outer">
        <div id="footer-info" class="inner">
            &copy; <%= date(new Date(), 'YYYY') %> 
            <%= config.author || config.title %> 
				& 转载请注明出处
            </div>
    </div>
</footer>
```

暂时就先这样吧。
