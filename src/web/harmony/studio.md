---
title: 安装 DevEcoStudio
icon: post
order: 1
date: 2024-04-17  
---

## 安装

1. [下载安装包](https://developer.huawei.com/consumer/cn/deveco-studio/#download)
2. 正常安装包, 下一步安装

![image-20240417121723826](https://qiniu.waite.wang/202404171217774.png)

3. 配置开发环境

![image-20240417121810196](https://qiniu.waite.wang/202404171218425.png)

选择 Agree, 进入配置选择页面, 选择不导入配置

![image-20240417121841096](https://qiniu.waite.wang/202404171218109.png)

选择要安装的Node.is和hpm位置，其中ohpm是Open Harmony Package Management的缩写，也就是类似npm的包管理工具。这里有几点注意事项:

+ 如果电脑上已经有Node.js，但是版本不一致，建议选择让工具重新安装
+ 如果电脑上已经有Node.js，并且版本一致，可以选择Local，指定node目录即可
+ 如果电脑上对Node.is做了一些特殊的options配置，建议先移除
+ 配置目录中不要出现中文、特殊字符，建议用默认路径

![image-20240417121951184](https://qiniu.waite.wang/202404171219038.png)

选择Next后，进入HarmonyOs的SDK安装目录选择页面以及同意协议, 配置目录/ 同意协议后下一步即可

## 环境错误处理

在安装的过程中，如果出现类似下面的错误

![image-20240417122147373](https://qiniu.waite.wang/202404171221142.png)

一般就是因为你本地原本的Node.is配置异常导致的，建议清理环境变量中对于Node.is的配置之后再重试
重试时无需重新安装，而是再次打开DevEco Studio，点击界面左下方的 ? 按钮: 选择第一个 Diagnose Development Environment 进入诊断页面, 这里会提示安装出现问题的选项，点击异常项后面的set it up now即可重新安装
如果所有问题都已经解决，最终重试后等待所有项都是 √即可

![image-20240417122238577](https://qiniu.waite.wang/202404171222747.png)

![image-20240417122305876](https://qiniu.waite.wang/202404171223032.png)

## 中文设置

设置->插件->已安装->其他工具->chinese->启用即可

![image-20240417122439395](https://qiniu.waite.wang/202404171224670.png)

## 创建项目

Create Project -> Empty Ability -> 按要求填写目录即可

此时项目内已有 Hello World 基础代码, 点右侧预览器即可预览效果

![image-20240417122904349](https://qiniu.waite.wang/202404171229268.png)

## 模拟器安装

我们也可以利用设备模拟器来查看更真实的效果。不过需要先配置模拟器

首先，选择主菜单中的Tools，找到其中的Device Manager，即设备管理

![image-20240417122932610](https://qiniu.waite.wang/202404171229476.png)

设备可以是 远端设备 ，也可以是 本地设备 ，我们以本地设备为例。

默认本地没有任何设备，选择install来安装一个

![image-20240417122953229](https://qiniu.waite.wang/202404171229123.png)

首次点击时，会弹出一个窗口，下载必要的SDK依赖, 安装完下一步即可

进入创建模拟器页面，选择New Emulator:

![image-20240417123032281](https://qiniu.waite.wang/202404171230423.png)

![image-20240417123043858](https://qiniu.waite.wang/202404171230731.png)

选择api9版本，不过需要注意，首次进入此页面，需要下载手机设备需要的系统，大概2.2G，需要耐心等待:

![image-20240417123103057](https://qiniu.waite.wang/202404171231835.png)

![image-20240417123115419](https://qiniu.waite.wang/202404171231885.png)

创建完成后，在设备列表中会出现一个本地设备，点击后面的运行按钮即可启动设备模拟器

![image-20240417123136573](https://qiniu.waite.wang/202404171231949.png)

启动后如下

![image-20240417123155182](https://qiniu.waite.wang/202404171231029.png)

然后，在应用启动位置选择刚刚添加的模拟器, 然后点击启动即可

![image-20240417123220059](https://qiniu.waite.wang/202404171232015.png)

![image-20240417123227197](https://qiniu.waite.wang/202404171232136.png)

效果如下

![image-20240417123240912](https://qiniu.waite.wang/202404171232051.png)