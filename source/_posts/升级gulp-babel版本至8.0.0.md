---
title: 升级gulp-babel版本至8.0.0
thumbnail: >-
  //r.photo.store.qq.com/psb?/V11rnv1t26XYl4/tCWA6E6Y1FBEjTT5tl4VR2epiqWqEpHxaT4JhcJtseU!/r/dFIBAAAAAAAAnull&bo=sAQPArAEDwIRCT4!&rf=photolist&t=5_yake_qzoneimgout.png
abbrlink: dd1aca07
date: 2019-12-10 16:35:37
---

某次我使用npm-check -u命令时，提示gulp-babel可以升级至8.0.0，升级后就是一堆连环报错，我只能暂时回退版本。今天恰巧碰见一篇相关的资料，终于顺利升级。

<!--more-->

### 升级`gulp-babel`版本

在[《通过Github Actions使用Gulp压缩静态文件》](https://tiexo.github.io/28061956/)一文中介绍了通过gulp来压缩网站静态文件，当时使用的版本为`gulp-babel@7.0.1`，实际上最新版本为`8.0.0`，但是直接升级会报错。

根据最新资料的解决办法，首先安装新版 gulp-babel 和相关依赖。

```javascript
npm install --save-dev gulp-babel @babel/core @babel/preset-env
```

### 修改`gulpfile.js`文件

```javascript
var gulp = require('gulp');
var minifycss = require('gulp-clean-css');
var uglify = require('gulp-uglify');
var htmlmin = require('gulp-htmlmin');
var htmlclean = require('gulp-htmlclean');
var babel = require('gulp-babel');

// 压缩 public 目录 css
gulp.task('minify-css', function() {
    var option = {
        rebase: false,
        //advanced: true,               //类型：Boolean 默认：true [是否开启高级优化（合并选择器等）]
        compatibility: '*',         //保留ie7及以下兼容写法 类型：String 默认：''or'*' [启用兼容模式； 'ie7'：IE7兼容模式，'ie8'：IE8兼容模式，'*'：IE9+兼容模式]
        //keepBreaks: true,             //类型：Boolean 默认：false [是否保留换行]
        //keepSpecialComments: '*'      //保留所有特殊前缀 当你用autoprefixer生成的浏览器前缀，如果不加这个参数，有可能将会删除你的部分前缀
    }
    return gulp.src('./public/**/*.css')
        .pipe(minifycss())
        .pipe(gulp.dest('./public'));
});
// 压缩 public 目录 html
gulp.task('minify-html', function() {
    var cleanOptions = {
        protect: /<\!--%fooTemplate\b.*?%-->/g,             //忽略处理
        unprotect: /<script [^>]*\btype="text\/x-handlebars-template"[\s\S]+?<\/script>/ig //特殊处理
    }
    var minOption = {
        collapseWhitespace: true,           //压缩HTML
        collapseBooleanAttributes: true,    //省略布尔属性的值  <input checked="true"/> ==> <input />
        removeEmptyAttributes: true,        //删除所有空格作属性值    <input id="" /> ==> <input />
        removeScriptTypeAttributes: true,   //删除<script>的type="text/javascript"
        removeStyleLinkTypeAttributes: true,//删除<style>和<link>的type="text/css"
        removeComments: false,               //清除HTML注释
        minifyJS: true,                     //压缩页面JS
        minifyCSS: true,                    //压缩页面CSS
        minifyURLs: true                    //替换页面URL
    };  
  return gulp.src('./public/**/*.html')
    .pipe(htmlclean())
    .pipe(htmlmin({
         removeComments: true,
         minifyJS: true,
         minifyCSS: true,
         minifyURLs: true,
    }))
    .pipe(gulp.dest('./public'))
});
// 压缩 public/js 目录 js
gulp.task('minify-js', function() {
    return gulp.src('./public/**/*.js')

    //↓下面这些是新增的
    .pipe(babel({ 
        presets: ['@babel/env']  
    }))
    //↑上面这些是新增的
    
    .pipe(uglify())
    .pipe(gulp.dest('./public'));

});

// 执行 gulp 命令时执行的任务
// gulp 4.0 适用的方式
gulp.task('default', gulp.parallel('minify-html', 'minify-css', 'minify-js'
 //build the website
));
```

### 删除`.babelrc`&修改`package.json`

删除`.babelrc`文件，同时删除`package.json`文件中的依赖项。

```json
"babel-plugin-transform-remove-strict-mode": "0.0.2",
"babel-preset-es2015": "^6.24.1",
```

另外，安装`gulp-clean-css`插件，移除之前的`gulp-minify-css`和`gulp-imagemin`插件。

因为我搜索了一下，发现`gulp-minify-css`已经被弃用了，而图片压缩本站也用不上，因此一并删除。

### 解决JS生成路径错误

原文代码是：

```js
// 压缩 public/js 目录 js
gulp.task('minify-js', function() {
    return gulp.src('./public/js/**/*.js')
```

这会导致压缩后的js文件直接出现在`./public`文件夹，而不是覆盖`./public/js/`目录中的文件，也就是说会存在两个相同的js文件。

解决办法是修改成：

```javascript
// 压缩 public/js 目录 js
gulp.task('minify-js', function() {
    return gulp.src('./public/**/*.js')
```

### 参考资料

- https://www.imczw.com/post/tech/gulp_and_es6.html