---
title: 通过Github Actions实现Hexo博客自动部署
thumbnail: >-
  //r.photo.store.qq.com/psb?/V11rnv1t26XYl4/8wGH3vQfWMfzu0iLeNWywm7ZbJUEDX0*71NQAbs8OrE!/r/dL8AAAAAAAAAnull&bo=sAQQArAEEAIRCT4!&rf=photolist&t=5_yake_qzoneimgout.png
abbrlink: 37e5a6a1
date: 2019-11-29 23:02:26
---

一开始打算通过Travis CI来实现此功能，后来发现Github正式开放了Actions功能，本着一站体验的原则，选择了后者。

<!--more-->

### 自动部署

很早以前就听说了Travis CI自动部署的方案，但是我一直没觉得有什么优点，不过省了hexo d的命令而已。
在实际体验过后，依然没有感觉到...
但是我们折腾博客，从来就不是为了提高生产力，而是装逼罢了。

### Actions

Github Actions和Travis CI的原理是一样的。
- 生成SSH私钥

```git
ssh-keygen -f github-deploy-key
```
连续三次回车，会生成"`github-deploy-key`"和"`github-deploy-key.pub`"两个文件。

- Setting

打开博客源码分支"`blog/settings/secrets`"点击"`Add new secrets`"

name栏输入 HEXO_DEPLOY_PRI
value栏输入之前生成的 github-deploy-key文件里面的内容

接着打开pages分支"`master/settings/keys`"点击"`Add deploy key`"

title栏输入HEXO_DEPLOY_PUB
key栏输入之前生成的github-deploy-key.pub文件里面的内容

- yml文件

打开博客源码分支"`blog/.github/workflows`"新建一个"`main.yml`"文件

```yml
name: CI
on:
  push:
    branches:
      - blog
jobs:
  build:
    runs-on: ubuntu-latest

    steps:
      - name: Checkout source
        uses: actions/checkout@v1
        with:
          ref: blog
      - name: Use Node.js ${{ matrix.node_version }}
        uses: actions/setup-node@v1
        with:
          version: ${{ matrix.node_version }}
      - name: Setup hexo
        env:
          ACTION_DEPLOY_KEY: ${{ secrets.ACTION_DEPLOY_KEY }}
        run: |
          mkdir -p ~/.ssh/
          echo "$ACTION_DEPLOY_KEY" > ~/.ssh/id_rsa
          chmod 600 ~/.ssh/id_rsa
          ssh-keyscan github.com >> ~/.ssh/known_hosts
          git config --global user.email "输入邮箱"
          git config --global user.name "输入用户名"
          npm install hexo-cli -g
          npm install
      - name: Hexo deploy
        run: |
          hexo clean
          hexo d
```
### 自动部署

接着git push推送一个commit到博客源码分支，点击Actions即可看见部署过程。

<div align=center><img src="//r.photo.store.qq.com/psb?/V11rnv1t2fVV1f/2hXYYLvW48mRt9MqRvi5v5uaA9bzD9bDdmLs2xbbIuc!/r/dLYAAAAAAAAA&bo=DwMSAg8DEgIDCSw!&rf=viewer_4_yake_qzoneimgout.png"></div>
<br>
每次部署的时间大概在45s左右，实际上比hexo d还要慢些。
