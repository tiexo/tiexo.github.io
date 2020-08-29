---
title: 收益率计算：净值法 VS XIRR
cover: >-
  //r.photo.store.qq.com/psc?/V11rnv1t26XYl4/3pY6KhS62k*1Vm7UATlxq7NxTMCOIBymrk9UiWAXHlfoPJFeF8GjrmLV76zPmd4RliYaGAPsu3akLQ0ys5Yl25TWy*c26ZydWInXmRdrGKM!/anull&bo=rwQbAq8EGwIRCT4!&rf=photolist&t=5/r/_yake_qzoneimgout.png
abbrlink: c02d8c7e
date: 2020-01-19 13:19:06
---

虽然对于钱少的我来说收益率意义不大，但是通过计算收益率可以提高自我信心，同时也能看出收益与成本的差异，从而适当调节杠杆水平。经过最近的研究，我发现净值法和XIRR是目前比较主流客观的收益率计算方法，今天就来简单谈谈吧。
<!--more-->

### 一、账户收益率显示

目前能够直观看到我股票账户收益率的APP有两个：同花顺和长江e号，不过两者存在一些差异。

<div align=center><img width="450px" src="//r.photo.store.qq.com/psc?/V11rnv1t2fVV1f/3pY6KhS62k*1Vm7UATlxqyvS4ORa1ihR8b*3K2ykLogom*B0WAmYoj.vmnWLUrS7RxMG*YNozou253.s4C2K0Ooye5vl29.plGtJ*FRpH0w!/anull&bo=OATJAjgEyQIRCT4!&rf=photolist&t=5/r/_yake_qzoneimgout.png"></div>

<div align=center><img width="450px" src="//r.photo.store.qq.com/psc?/V11rnv1t2fVV1f/3pY6KhS62k*1Vm7UATlxq35SAiAYCnjBN9DYwTxyvNGlSp2KE9706ftNC5Ghj4tc44XCu2ETjxWgOaUyWEXt1Mxwamicy0zEGMYtC7akBEE!/anull&bo=OAQ2BDgENgQRCT4!&rf=photolist&t=5/r/_yake_qzoneimgout.png"></div>

很明显，它们有一个是错的，或者两个都是错的。所以我打算抛弃它们，自己来进行计算。

### 二、净值法

所谓净值法就是将账户看作是一只基金，初始净值为1，初始份额与总资产一样。

日后若随着股票上涨，则总资产也会上涨，但份额不变，因此净值也会上涨。

如果期间进行资金转入、转出，则将其转换为份额的增加和减少，变动份额等于变动资金量除以当时的净值。

不过，它存在一个致命缺陷：

如初始资金10w，净值从1涨到5时，增加资金90w，然后净值从5跌到2。
单纯从净值看，1变成2赚了一倍，但实际上按本金计算，是亏损的。

这是因为基金经理只负责未赎回部分的收益率，至于赎回部分是赚是亏对他没有影响，所以基金的业绩可以用净值法。而我们个人却要对赎回部分的盈亏负责，所以会出现上面净值赚、本金亏的情况。

### 三、XIRR

第一次接触XIRR是2018年使用基金定投的时候，可以用来计算不定时买入卖出不定额资金的年化收益率。

如1月1日买入1万元，1月10日资产变成了1.2万元，此时赎回1万元，1月31日资产为1800元。

通过XIRR计算的年化收益率为114%。

它正好可以弥补净值法不能有效反映买入卖出部分盈亏的缺陷，而且考虑了资金占用时间的因素，对于频繁转入转出的我来说非常适用。

同样是这个案例，如果用净值法来计算：

1/1，净值为1，份额为1万，资产为1万；

1/10，净值为1.2，份额为1667，资产为2000；

1/31，净值为1.08，份额为1667，资产为1800。

那么净值法的收益率为8%，折算成年化收益率为96%。

### 四、且慢小账本

当然，你可以通过excel表格来记录以上两种方法的收益率，不过由于手机操作不便，所以我找了一个"且慢小账本"的微信小程序。

<div align=center><img width="450px" src="//r.photo.store.qq.com/psc?/V11rnv1t2fVV1f/3pY6KhS62k*1Vm7UATlxqxuykjBV2sIMsmAkqP6X*V01PxKga24e9PFt.a7ZPioJ6iNKZDbp.HxeX1aZqANdJpa29pD6ar0wVaYk*qZDvRQ!/anull&bo=OATKBTgEygURCT4!&rf=photolist&t=5/r/_yake_qzoneimgout.png"></div>  
<br>
只要输入每个交易日的总资产，记录好每笔资金转入转出的操作，它就会自动计算账户的净值和XIRR收益率，有兴趣的可以试试。