---

title: 通过Github Actions使用Gulp压缩静态文件
date: 2019-12-01 20:27:40
abbrlink: '28061956'
thumbnail: //r.photo.store.qq.com/psb?/V11rnv1t26XYl4/PAde*GMGt3LUUCYqbR64OPMtZ5LfpNJ9lD3YVIvfqSo!/r/dAgBAAAAAAAAnull&bo=rwQFAq8EBQIRCT4!&rf=photolist&t=5_yake_qzoneimgout.png

---

虽然本站大部分静态文件都使用了CDN，但是一些html文件依然存在大量的空白字符。通过Github Actions既不用增加部署命令，又可以实现静态文件的压缩，何乐而不为呢？

<!--more-->

###  本地安装Gulp

首先全局安装gulp

```js
npm install gulp -g
```

接着分别安装相关的html、js、css、image插件，后面这些主要是为了解决兼容的问题

```js
npm install gulp --save
npm install gulp-minify-css --save
npm install gulp-uglify --save
npm install gulp-htmlmin --save
npm install gulp-htmlclean --save
npm install gulp-imagemin --save
# 解决【Gulp打包问题】 GulpUglifyError: unable to minify JavaScript
# 解决 gulp-uglify 压缩JavaScript 不兼容 es5 语法的问题
npm install babel-core@6.26.3 --save
npm install gulp-babel@7.0.1 --save
npm install babel-preset-es2015@6.24.1 --save
# gulp-babel 取消严格模式方法("use strict")
npm install babel-plugin-transform-remove-strict-mode --save
```

### 创建`gulpfile.js`文件

直接在根目录新建gulpfile.js文件

```js
var gulp = require('gulp');
var minifycss = require('gulp-minify-css');
var uglify = require('gulp-uglify');
var htmlmin = require('gulp-htmlmin');
var htmlclean = require('gulp-htmlclean');
var imagemin = require('gulp-imagemin');
var babel = require('gulp-babel');

// 压缩css文件
gulp.task('minify-css', function (done) {
    return gulp.src('./public/**/*.css')
        .pipe(minifycss())
        .pipe(gulp.dest('./public'));
    done();
});

// 压缩html文件
gulp.task('minify-html', function (done) {
    return gulp.src('./public/**/*.html')
        .pipe(htmlclean())
        .pipe(htmlmin({
            removeComments: true,
            minifyJS: true,
            minifyCSS: true,
            minifyURLs: true,
        }))
        .pipe(gulp.dest('./public'));
    done();
});

// 压缩js文件
gulp.task('minify-js', function (done) {
    return gulp.src(['./public/**/*.js', '!./public/**/*.min.js'])
        .pipe(babel({
            //将ES6代码转译为可执行的JS代码
            presets: ['es2015'] // es5检查机制
        }))
        .pipe(uglify())
        .pipe(gulp.dest('./public'));
    done();
});

// 压缩 public/images 目录内图片(Version<3)
// gulp.task('minify-images', function () {
//     gulp.src('./public/images/**/*.*')
//         .pipe(imagemin({
//             optimizationLevel: 5, //类型：Number  默认：3  取值范围：0-7（优化等级）
//             progressive: true, //类型：Boolean 默认：false 无损压缩jpg图片
//             interlaced: false, //类型：Boolean 默认：false 隔行扫描gif进行渲染
//             multipass: false, //类型：Boolean 默认：false 多次优化svg直到完全优化
//         }))
//         .pipe(gulp.dest('./public/images'));
// });

// 压缩 public/images 目录内图片(Version>3)
gulp.task('minify-images', function (done) {
    gulp.src('./public/images/**/*.*')
        .pipe(imagemin([
            imagemin.gifsicle({interlaced: true}),
            imagemin.jpegtran({progressive: true}),
            imagemin.optipng({optimizationLevel: 5}),
            imagemin.svgo({
                plugins: [
                    {removeViewBox: true},
                    {cleanupIDs: false}
                ]
            })
        ]))
        .pipe(gulp.dest('./public/images'));
    done();
});

//4.0以前的写法 
//gulp.task('default', [
//  'minify-html', 'minify-css', 'minify-js', 'minify-images'
//]);
//4.0以后的写法
// 执行 gulp 命令时执行的任务
gulp.task('default', gulp.series(gulp.parallel('minify-html', 'minify-css',
 'minify-js', 'minify-images')), function () {
    console.log("----------gulp Finished----------");
    // Do something after a, b, and c are finished.
});
```

### 创建`.babelrc`文件

依然是在根目录新建即可

```js
{
    'presets': ['es2015'],
    "plugins": ["transform-remove-strict-mode"]
}
```

### 修改Acitons配置文件

修改`.github/workflows/main.yml`文件，这里我参考的Travis CI的配置，因为网上还没有Github Actions安装gulp相关的内容。

- 新增gulp安装命令

```js
npm install hexo-cli -g
npm install gulp -g
npm install
```

- 新增gulp压缩命令

```js
hexo clean
hexo g
gulp
hexo d
```

### 自动触发

接着使用git push即可自动触发gulp压缩静态文件并部署到Github Pages

<div align=center><img src="//r.photo.store.qq.com/psb?/V11rnv1t2fVV1f/mllaWFovunVLdx8odUwjEQm.Or8wj50M*wRUvOvDj9w!/r/dL8AAAAAAAAAnull&bo=9AKTAfQCkwEDCSw!&rf=photolist&t=5_yake_qzoneimgout.png"></div>

### 压缩效果

html压缩前24KB，压缩后17KB，减少29%的体积

<div align=center><img src="//r.photo.store.qq.com/psb?/V11rnv1t2fVV1f/t07wnkGiWV4Jeeag*eetZq8ene10idfYOyFF38JXjrg!/r/dD4BAAAAAAAAnull&bo=eAJqAXgCagEDCSw!&rf=photolist&t=5_yake_qzoneimgout.png"></div>

<div align=center><img src="//r.photo.store.qq.com/psb?/V11rnv1t2fVV1f/5jblezObgabMOwcPvTa9KdlBf8LGp5kENleaNbPVVI0!/r/dDQBAAAAAAAAnull&bo=XgIdAV4CHQEDCSw!&rf=photolist&t=5_yake_qzoneimgout.png"></div>

css和js也有接近30%的压缩，图片则没有效果，因为除了logo和ico全是用的CDN

### 参考资料

- https://segmentfault.com/a/1190000019842178