---
title: Icarus主题更新至3.0版本
thumbnail: >-
  //r.photo.store.qq.com/psc?/V11rnv1t26XYl4/w47sCHZ1vIeYe.9hWkknXaHu5YOxN2fjPmQdlCENxvsj6j95Aa3X*xZJi5VrWoBL2EiDxfLI55*ta*gdBa.Feg!!/mnull&bo=sATpAbAE6QERCT4!&rf=photolist&t=5/r/_yake_qzoneimgout.png
abbrlink: faca3062
date: 2020-04-15 13:31:35
---

距离2.0版本更新已经有一年多的时间，前几天作者终于发布了3.0版本。对我来说，最大的改变在于主题结构重构以及语法切换，icarus3.0版本的代码从ejs变成了jsx，另外引入了[hexo-component-inferno](https://github.com/ppoffice/hexo-component-inferno)插件。但是，经过我不懈的努力，终于将主题修改成了2.0的模样...

<!--more-->

### themes/icarus/layout/common/footer.jsx

修改：去掉网站logo，另外调大了字体，添加了诗词一言。

```jsx
<div class="level">
<div class="level-start">
<script src="https://sdk.jinrishici.com/v2/browser/jinrishici.js" charset="utf-8"></script>
<p>
<span dangerouslySetInnerHTML={{ __html: `&copy; ${siteYear} ${author || siteTitle}` }}></span>
&nbsp;&nbsp;<br /><span id="jinrishici-sentence">正在加载....</span>
```

### themes/icarus/layout/common/scripts.jsx

修改：将main.js替换为cdn链接

```jsx
<Plugins site={site} config={config} page={page} helper={helper} head={false} />
<script src={url_for('https://cdn.jsdelivr.net/gh/tiexo/tiexo.github.io/js/main.js')} defer={true}></script>
```

### themes/icarus/layout/common/head.jsx

修改：将default.css替换为cdn链接

```jsx
 <link rel="stylesheet" href={fontCssUrl[variant]} />
<link rel="stylesheet" href={url_for('https://cdn.jsdelivr.net/gh/tiexo/tiexo.github.io/css/' + variant + '.css')} />
<Plugins site={site} config={config} helper={helper} page={page} head={true} />
```

### themes/icarus/layout/common/article copy.jsx

修改：新增文件，移除about页面的标题（删除article.jsx下列代码）

```
{/* Title */}
<h1 class="title is-3 is-size-4-mobile">
{index ? <a class="link-muted" href={url_for(page.link || page.path)}>{page.title}</a> : page.title}
</h1>
```

### themes/icarus/layout/page.jsx

修改：替换page引用模板

```jsx
const Article = require('./common/article copy');
```

### themes/icarus/layout/comment/valine-admin.js

修改：新增文件，点击valine通知邮件跳转至评论位置

```js
if (window.location.hash) {
    var checkExist = setInterval(function () {
        if ($(window.location.hash).length) {
            $('html, body').animate({
                scrollTop: $(window.location.hash).offset().top - 90
            }, 1000);
            clearInterval(checkExist);
        }
    }, 100);
}
```

### themes/icarus/layout/comment/valine.js

修改：新增文件（复制node_modules/hexo-component-inferno/lib/view/comment/valine.js，并修改）

```jsx
var _require2 = require('hexo-component-inferno/lib/util/cache'),
cacheComponent = _require2.cacheComponent;

_createClass(Valine, [{
            key: "render",
            value: function render() {
                var _this$props = this.props,
                appId = _this$props.appId,
                appKey = _this$props.appKey,
                notify = _this$props.notify,
                verify = _this$props.verify,
                enableQQ = _this$props.enableQQ,
                placeholder = _this$props.placeholder,
                _this$props$avatar = _this$props.avatar,

                var js = "new Valine({\n            el: '#valine-thread' ,\n            notify: ".concat(notify, ",\n            verify: ").concat(verify, ",\n            appId: '").concat(appId, "',\n            appKey: '").concat(appKey, "',\n            placeholder: '").concat(placeholder, "',\n            avatar: '").concat(avatar, "',\n            avatarForce: ").concat(avatarForce, ",\n            meta: ").concat(JSON.stringify(meta), ",\n            pageSize: ").concat(pageSize, ",\n            visitor: ").concat(visitor, ",\n            enableQQ: ").concat(enableQQ, ",\n            highlight: ").concat(highlight, ",\n            recordIP: ").concat(recordIp, "\n        });");
                return (0, _inferno.createFragment)([(0, _inferno.createVNode)(1, "div", "content", null, 1, {
                            "id": "valine-thread"
                        }), (0, _inferno.createVNode)(1, "script", null, null, 1, {
                            "src": "//cdn.jsdelivr.net/gh/tiexo/tiexo.github.io@blog/themes/icarus/layout/comment/valine-admin.js"
                        }), (0, _inferno.createVNode)(1, "script", null, null, 1, {
                            "src": "//cdn.jsdelivr.net/npm/valine/dist/Valine.min.js"
                        }), (0, _inferno.createVNode)(1, "script", null, null, 1, {
                            "dangerouslySetInnerHTML": {
                                __html: js
                            }
                        })], 4);
            }
        }
    ]);

return Valine;
}
(Component);

Valine.Cacheable = cacheComponent(Valine, 'comment.valine', function (props) {
    var comment = props.comment,
    helper = props.helper;
    return {
        appId: comment.app_id,
        appKey: comment.app_key,
        notify: comment.notify,
        verify: comment.verify,
        enableQQ: comment.enableQQ,
        placeholder: comment.placeholder,
        avatar: comment.avatar,
        avatarForce: comment.avatar_force,
        meta: comment.meta,
        pageSize: comment.page_size,
        visitor: comment.visitor,
        highlight: comment.highlight,
        recordIp: comment.record_ip
    };
});
module.exports = Valine;
```

### themes/icarus/scripts/index.js

修改：删除icarus提示字样

### themes/icarus/layout/search/insight.js

修改：新增文件（复制node_modules/hexo-component-inferno/lib/view/search/insight.js，并修改），替换cdn链接

```jsx
var _require2 = require('hexo-component-inferno/lib/util/cache'),

cacheComponent = _require2.cacheComponent;
```

```jsx
contentUrl: helper.url_for('https://cdn.jsdelivr.net/gh/tiexo/tiexo.github.io/content.json'),
jsUrl: helper.url_for('https://cdn.jsdelivr.net/gh/tiexo/tiexo.github.io/js/insight.js')
```

### themes/icarus/layout/plugin/animejs.jsx

修改：替换cdn链接

```jsx
jsUrl: helper.url_for('https://cdn.jsdelivr.net/gh/tiexo/tiexo.github.io/js/animation.js')
```

### themes/icarus/layout/plugin/back_to_top.jsx

修改：替换cdn链接

```jsx
jsUrl: helper.url_for('https://cdn.jsdelivr.net/gh/tiexo/tiexo.github.io/js/back_to_top.js')
```

### themes/icarus/include/style/base.styl

修改：调大、修改字体

```css
$body-size ?= 16px
$body-background-color ?= #f7f7f7

$family-sans-serif ?= Ubuntu, Roboto, 'Open Sans', 'Source Han Sans CN', sans-serif
$family-code ?= 'Source Code Pro', monospace, 'Source Han Sans CN'
```

### themes/icarus/include/style/navbar.styl

修改：调整m端导航栏样式

```css
.navbar-main
    box-shadow: $shadow
    & > .container
            display: flex
    .navbar-menu, .navbar-start, .navbar-end
        align-items: stretch
        display: flex
        padding: 0
        flex-shrink: 0
    
    +until($navbar-breakpoint)
        .navbar-menu
           
            box-shadow: none

.navbar-logo
    img
        max-height: $logo-height
```

### node_modules/hexo-component-inferno/asset/js/insight.js

修改：调整搜索框显示数量

```jsx
return {
posts: posts.filter(filters.post).sort((a, b) => { return weights.post(b) - weights.post(a); }).slice(0, 30),
pages: pages.filter(filters.page).sort((a, b) => { return weights.page(b) - weights.page(a); }).slice(0, 0),
categories: categories.filter(filters.category).sort((a, b) => { return weights.category(b) - weights.category(a); }).slice(0, 0),
tags: tags.filter(filters.tag).sort((a, b) => { return weights.tag(b) - weights.tag(a); }).slice(0, 0)
};
```

### source/about/index.md

修改：增加bgm

```markdown
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/aplayer/dist/APlayer.min.css">
<script src="https://cdn.jsdelivr.net/npm/aplayer/dist/APlayer.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/meting@2/dist/Meting.min.js"></script>  
<meting-js
	auto="https://music.163.com/#/song?id=1438865533" fixed="true" autoplay="true">
</meting-js>
```