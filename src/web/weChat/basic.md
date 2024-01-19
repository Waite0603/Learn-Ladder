---
title: 微信小程序基础-
icon: post
order: 1
date: 2024-01-19
---

## 微信小程序介绍

### 微信小程序介绍

​	微信小程序，简称小程序，是一种不需要下载安装即可使用的应用，它实现了应用”触手可及”的梦想，用户扫一扫或搜一下即可打开应用。

​	说明：

* 小程序是需要下载的，小程序的占用大小很小，感觉不到下载
* 目前大小限制2M （最终开发的小程序打包压缩后的大小），如果超过2M,就得做分包上传.之后再合并
* 进入小程序后继续网络请求数据

### 小程序特点

微信小程序的特点：

* 免安装
* 接近原生（IOS，Android ）的app操作基于微信开发。使用wx提供的api开发
* 必须在微信里面使用

### 小程序的优缺点

* ==方便快捷，即用即走==
* ==速度快、不占内存==
* 安全稳定、保密性强
* 功能丰富，场景丰富
* ==开发成本低、维护简便==
* ==开发周期比较短==
* 体验好

### 小程序开发需求

 - 不注册可以开发小程序(不能发布)
 - 注册小程序
   - 企业注册(公司内部人员注册好了，给一个APPID)
   - 个人注册

###  微信小程序的注册

微信公众平台：https://mp.weixin.qq.com/

## 开发工具

开发工具下载地址：https://developers.weixin.qq.com/miniprogram/dev/devtools/download.html

![image-20220122170116175](https://qiniu.waite.wang/202401192149328.png)

### 开发者工具的使用

 ![image-20220122201456358](https://qiniu.waite.wang/202401192150079.png)

![image-20220608183526635](https://qiniu.waite.wang/202401192150318.png)

> 以下就是微信小程序开发工具的界面，主要有：微信小程序模拟器、项目目录、代码编写区域、控制台。



##  项目目录结构介绍

![image-20240119215440525](https://qiniu.waite.wang/202401192154095.png)

### pages目录

​	pages目录下放的就是小程序中的各个页面。

​	在pages中创建页面的时候，会出现4个文件：

* xxx.js：页面相关的js代码可以写在这里
* xxx.wxml：这个就是页面文件，相当于我们之前的HTML，所以页面结构内容写在这里
* xxx.wxss：页面的样式内容，相当于之前的css，所以页面相关的样式可以写在这里
* xxx.json：页面有关的配置，比如页面导航栏的背景色、内容等等

比如：	![10](https://qiniu.waite.wang/202401192151123.png)

### app.js文件

​	app.js文件是整个项目的一个==总体配置==。里面包含了项目运行==生命周期的回调函数==。

###  app.json文件

​	小程序根目录下的 `app.json` 文件用来对微信小程序进行全局配置，决定页面文件的路径、窗口表现、设置网络超时时间、设置多 tab 等。

小程序根目录下的 `app.json` 文件用来对微信小程序进行全局配置。文件内容为一个 JSON 对象，有以下属性：

https://developers.weixin.qq.com/miniprogram/dev/reference/configuration/app.html

![](https://qiniu.waite.wang/202401192155179.png)

###  app.wxss文件

* app.wxss 文件是微信小程序项目的==全局样式表==，它可以应用到所有的wxml文件中。
* 微信小程序中使用 rpx 作为长度单位。1rpx = 1/750 屏幕宽度。也就是屏幕宽度等于 750rpx。
* px 也可以使用，表示的是设备独立像素。
* 建议使用长度单位 rpx。它自动做了适配。

### project.config.json文件

​	`project.config.json`文件是小程序项目的配置文件（如开发工具的外观配置），一般不需要修改，我们目前就改一个地方：

![11](https://qiniu.waite.wang/202401192153939.png)

`"checkSiteMap":false` 作用是==控制台不要有一些没用的警告==。

### Sitemap.json

https://developers.weixin.qq.com/miniprogram/dev/framework/sitemap.html

搜索功能文件，指定哪些页面可以被搜索，可被配置。是在搜索小程序的时候，指定哪些页面允许被搜索到。