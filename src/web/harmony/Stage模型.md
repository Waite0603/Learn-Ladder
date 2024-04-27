---
title: Stage 模型
icon: post
order: 7
date: 2024-04-25
---

https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V2/start-with-ets-stage-0000001477980905-V2

![](https://qiniu.waite.wang/202404271535958.png)

> 一个应用只能有一个 @EntryAbility，但可以有多个 @PageAbility。

## （Stage模型）目录结构

![](https://qiniu.waite.wang/202404181340550.png)

+ AppScope > app.json5：应用的全局配置信息。
+ entry：HarmonyOS工程模块，编译构建生成一个HAP包。
  + src > main > ets：用于存放ArkTS源码。
src > main > ets > entryability：应用/服务的入口。
  + src > main > ets > pages：应用/服务包含的页面
  + src > main > resources：用于存放应用/服务所用到的资源文件，如图形、多媒体、字符串、布局文件等。关于资源文件，详见资源分类与访问。
  + src > main > module.json5：Stage模型模块配置文件。主要包含HAP包的配置信息、应用/服务在具体设备上的配置信息以及应用/服务的全局配置信息。具体的配置文件说明，详见[module.json5配置文件](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V2/module-configuration-file-0000001427744540-V2)。
  + build-profile.json5：当前的模块信息、编译信息配置项，包括buildOption、targets配置等。其中targets中可配置当前运行环境，默认为HarmonyOS。
  + hvigorfile.ts：模块级编译构建任务脚本，开发者可以自定义相关任务和代码实现。
+ oh_modules：用于存放三方库依赖信息。关于原npm工程适配ohpm操作，请参考历史工程迁移。
+ build-profile.json5：应用级配置信息，包括签名、产品配置等。
+ hvigorfile.ts：应用级编译构建任务脚本。


## 应用配置文件

https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V2/14d_u7f6e_u6587_u4ef6_uff08stage_u6a21_u578b_uff09-0000001427902192-V2

![](https://qiniu.waite.wang/202404271550809.png)

> app.json5文件是应用的全局配置文件，用于配置应用的基本信息、版本信息、图标、名称、描述等。

| 属性名称                 | 含义                                                         | 数据类型 | 是否可缺省                                                   |
| ------------------------ | ------------------------------------------------------------ | -------- | ------------------------------------------------------------ |
| bundleName               | 标识应用的Bundle名称，用于标识应用的唯一性。该标签不可缺省。标签的值命名规则 ：- 字符串以字母、数字、下划线和符号“.”组成。- 以字母开头。- 最小长度7个字节，最大长度127个字节。推荐采用反域名形式命名（如com.example.demo，建议第一级为域名后缀com，第二级为厂商/个人名，第三级为应用名，也可以多级）。 | 字符串   | 该标签不可缺省。                                             |
| bundleType               | 标识应用的Bundle类型，用于区分应用或者原子化服务。该标签可选值为app和atomicService ：- app：当前Bundle为普通应用。- atomicService：当前Bundle为元服务。 | 字符串   | 该标签可以缺省，缺省为app。                                  |
| debug                    | 标识应用是否可调试，该标签由IDE编译构建时生成。- true：可调试。- false：不可调试。 | 布尔值   | 该标签可以缺省，缺省为false。                                |
| icon                     | 标识[应用的图标](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V2/application-component-configuration-stage-0000001478340869-V2)，标签值为图标资源文件的索引。 | 字符串   | 该标签不可缺省。                                             |
| label                    | 标识[应用的名称](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V2/application-component-configuration-stage-0000001478340869-V2)，标签值为字符串资源的索引。 | 字符串   | 该标签不可缺省。                                             |
| description              | 标识应用的描述信息，标签值是字符串类型（最大255个字节）或对描述内容的字符串资源索引。 | 字符串   | 该标签可缺省，缺省值为空。                                   |
| vendor                   | 标识对应用开发厂商的描述。该标签的值是字符串类型（最大255个字节）。 | 字符串   | 该标签可以缺省，缺省为空。                                   |
| versionCode              | 标识应用的版本号，该标签值为32位非负整数。此数字仅用于确定某个版本是否比另一个版本更新，数值越大表示版本越高。开发者可以将该值设置为任何正整数，但是必须确保应用的新版本都使用比旧版本更大的值。该标签不可缺省，versionCode值应小于2^31次方。 | 数值     | 该标签不可缺省。                                             |
| versionName              | 标识应用版本号的文字描述，用于向用户展示。该标签仅由数字和点构成，推荐采用“A.B.C.D”四段式的形式。四段式推荐的含义如下所示。第一段：主版本号/Major，范围0-99，重大修改的版本，如实现新的大功能或重大变化。第二段：次版本号/Minor，范围0-99，表示实现较突出的特点，如新功能添加或大问题修复。第三段：特性版本号/Feature，范围0-99，标识规划的新版本特性。第四段：修订版本号/Patch，范围0-999，表示维护版本，修复bug。标签最大字节长度为127。 | 字符串   | 该标签不可缺省。                                             |
| minCompatibleVersionCode | 标识应用能够兼容的最低历史版本号，用于跨设备兼容性判断。说明当前版本暂不支持跨设备能力。 | 数值     | 该标签可缺省，缺省值等于versionCode标签值。                  |
| minAPIVersion            | 标识应用运行需要的SDK的API最小版本。                         | 数值     | 由build-profile.json5中的compatibleSdkVersion生成。          |
| targetAPIVersion         | 标识应用运行需要的API目标版本。                              | 数值     | 由build-profile.json5中的compileSdkVersion生成。             |
| apiReleaseType           | 标识应用运行需要的API目标版本的类型，采用字符串类型表示。取值为“CanaryN”、“BetaN”或者“Release”，其中，N代表大于零的整数。- Canary：受限发布的版本。- Beta：公开发布的Beta版本。- Release：公开发布的正式版本。该字段由DevEco Studio读取当前使用的SDK的Stage来生成。 | 字符串   | 该标签可缺省，由IDE生成并覆盖。                              |
| multiProjects            | 标识当前工程是否支持多个工程的联合开发。- true：当前工程支持多个工程的联合开发。- false：当前工程不支持多个工程的联合开发。多工程开发可以参考文档：[多工程构建](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V2/build_overview-0000001055075201-V2#section73401914284)。 | 布尔值   | 可缺省，缺省值为false。                                      |
| tablet                   | 标识对tablet设备做的特殊配置，可以配置的属性字段有上文提到的：minAPIVersion、distributedNotificationEnabled。如果使用该属性对tablet设备做了特殊配置，则应用在tablet设备中会采用此处配置的属性值，并忽略在app.json5公共区域配置的属性值。 | 对象     | 该标签可缺省，缺省时tablet设备使用app.json5公共区域配置的属性值。 |
| tv                       | 标识对tv设备做的特殊配置，可以配置的属性字段有上文提到的：minAPIVersion、distributedNotificationEnabled。如果使用该属性对tv设备做了特殊配置，则应用在tv设备中会采用此处配置的属性值，并忽略在app.json5公共区域配置的属性值。 | 对象     | 该标签可缺省，缺省时tv设备使用app.json5公共区域配置的属性值。 |
| wearable                 | 标识对wearable设备做的特殊配置，可以配置的属性字段有上文提到的：minAPIVersion、distributedNotificationEnabled。如果使用该属性对wearable设备做了特殊配置，则应用在wearable设备中会采用此处配置的属性值，并忽略在app.json5公共区域配置的属性值。 | 对象     | 该标签可缺省，缺省时wearable设备使用app.json5公共区域配置的属性值。 |
| car                      | 标识对car设备做的特殊配置，可以配置的属性字段有上文提到的：minAPIVersion、distributedNotificationEnabled。如果使用该属性对car设备做了特殊配置，则应用在car设备中会采用此处配置的属性值，并忽略在app.json5公共区域配置的属性值。 | 对象     | 该标签可缺省，缺省时car设备使用app.json5公共区域配置的属性值。 |
| phone                    | 标识对phone设备做的特殊配置，可以配置的属性字段有上文提到的：minAPIVersion、distributedNotificationEnabled。如果使用该属性对phone设备做了特殊配置，则应用在phone设备中会采用此处配置的属性值，并忽略在app.json5公共区域配置的属性值。 | 对象     | 该标签可缺省，缺省时phone设备使用app.json5公共区域配置的属性值。 |

> module.json5文件是Stage模型模块配置文件，用于配置HAP包的配置信息、应用/服务在具体设备上的配置信息以及应用/服务的全局配置信息。 以下是一个示例:

```json
{
  "module": {
    "name": "entry",
    "type": "entry",
    "description": "$string:module_desc",
    "mainElement": "EntryAbility",
    "deviceTypes": [
      "tv",
      "tablet"
    ],
    "deliveryWithInstall": true,
    "installationFree": false,
    "pages": "$profile:main_pages",
    "virtualMachine": "ark",
    "metadata": [
      {
        "name": "string",
        "value": "string",
        "resource": "$profile:distributionFilter_config"
      }
    ],
    "abilities": [
      {
        "name": "EntryAbility",
        "srcEntry": "./ets/entryability/EntryAbility.ts",
        "description": "$string:EntryAbility_desc",
        "icon": "$media:icon",
        "label": "$string:EntryAbility_label",
        "startWindowIcon": "$media:icon",
        "startWindowBackground": "$color:start_window_background",
        "exported": true,
        "skills": [
          {
            "entities": [
              "entity.system.home"
            ],
            "actions": [
              "ohos.want.action.home"
            ]
          }
        ]
      }
    ],
    "requestPermissions": [
      {
        "name": "ohos.abilitydemo.permission.PROVIDER",
        "reason": "$string:reason",
        "usedScene": {
          "abilities": [
            "FormAbility"
          ],
          "when": "inuse"
        }
      }
    ]
  }
}
```

| 属性名称                                                     | 含义                                                         | 数据类型   | 是否可缺省                                           |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ---------- | ---------------------------------------------------- |
| name                                                         | 标识当前Module的名称，标签值采用字符串表示（最大长度31个字节），该名称在整个应用要唯一，仅支持英文字符。 | 字符串     | 该标签不可缺省。                                     |
| type                                                         | 标识当前Module的类型。类型有两种，分别：- entry：应用的主模块。- feature：应用的动态特性模块。-har：静态共享包模块。-shared：动态共享包模块。 | 字符串     | 该标签不可缺省。                                     |
| srcEntry                                                     | 标识当前Module所对应的代码路径，标签值为字符串（最长为127字节）。 | 字符串     | 该标签可缺省，缺省值为空。                           |
| description                                                  | 标识当前Module的描述信息，标签值是字符串类型（最长255字节）或对描述内容的字符串资源索引。 | 字符串     | 该标签可缺省，缺省值为空。                           |
| process                                                      | 标识当前Module的进程名，标签值为字符串类型（最长为31个字节）。如果在HAP标签下配置了process，该应用的所有UIAbility、DataShareExtensionAbility、ServiceExtensionAbility都运行在该进程中。**说明：**- 仅支持系统应用配置，三方应用配置不生效。 | 字符串     | 可缺省，缺省为app.json5文件下app标签下的bundleName。 |
| mainElement                                                  | 标识当前Module的入口UIAbility名称或者ExtensionAbility名称。标签最大字节长度为255。 | 字符串     | 该标签可缺省，缺省值为空。                           |
| [deviceTypes](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V2/module-configuration-file-0000001427744540-V2#ZH-CN_TOPIC_0000001573929365__devicetypes标签) | 标识当前Module可以运行在哪类设备上，标签值采用字符串数组的表示。 | 字符串数组 | 该标签不可缺省。                                     |
| deliveryWithInstall                                          | 标识当前Module是否在用户主动安装的时候安装，表示该Module对应的HAP是否跟随应用一起安装。- true：主动安装时安装。- false：主动安装时不安装。 | 布尔值     | 该标签不可缺省。                                     |
| installationFree                                             | 标识当前Module是否支持免安装特性。- true：表示支持免安装特性，且符合免安装约束。- false：表示不支持免安装特性。**说明：**- 当应用的entry类型Module的该字段配置为true时，该应用的feature类型的该字段也需要配置为true。- 当应用的entry类型Module的该字段配置为false时，该应用的feature类型的该字段根据业务需求配置true或false。 | 布尔值     | 该标签不可缺省。                                     |
| virtualMachine                                               | 标识当前Module运行的目标虚拟机类型，供云端分发使用，如应用市场和分发中心。该标签值为字符串。如果目标虚拟机类型为ArkTS引擎，则其值为“ark+版本号”。 | 字符串     | 该标签由IDE构建HAP的时候自动插入。                   |
| [pages](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V2/module-configuration-file-0000001427744540-V2#ZH-CN_TOPIC_0000001573929365__pages标签) | 标识当前Module的profile资源，用于列举每个页面信息。该标签最大长度为255个字节。 | 字符串     | 在有UIAbility的场景下，该标签不可缺省。              |
| [metadata](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V2/module-configuration-file-0000001427744540-V2#ZH-CN_TOPIC_0000001573929365__metadata标签) | 标识当前Module的自定义元信息，标签值为数组类型，只对当前Module、UIAbility、ExtensionAbility生效。 | 对象数组   | 该标签可缺省，缺省值为空。                           |
| [abilities](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V2/module-configuration-file-0000001427744540-V2#ZH-CN_TOPIC_0000001573929365__abilities标签) | 标识当前Module中UIAbility的配置信息，标签值为数组类型，只对当前UIAbility生效。 | 对象       | 该标签可缺省，缺省值为空。                           |
| [extensionAbilities](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V2/module-configuration-file-0000001427744540-V2#ZH-CN_TOPIC_0000001573929365__extensionabilities标签) | 标识当前Module中ExtensionAbility的配置信息，标签值为数组类型，只对当前ExtensionAbility生效。 | 对象       | 该标签可缺省，缺省值为空。                           |
| [requestPermissions](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V2/module-configuration-file-0000001427744540-V2#ZH-CN_TOPIC_0000001573929365__requestpermissions标签) | 标识当前应用运行时需向系统申请的权限集合。                   | 对象       | 该标签可缺省，缺省值为空。                           |
| [testRunner](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V2/module-configuration-file-0000001427744540-V2#ZH-CN_TOPIC_0000001573929365__testrunner标签) | 标识当前Module用于支持对测试框架的配置。                     | 对象       | 该标签可缺省，缺省值为空。                           |

> 详细可以查阅 https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V2/module-configuration-file-0000001427744540-V2

## 生命周期

### UIAbility组件生命周期

https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V2/uiability-lifecycle-0000001427902208-V2

![img](https://qiniu.waite.wang/202404272145594.png)

![image-20240427220332385](https://qiniu.waite.wang/202404272203694.png)

> src/main/ets/entryability/EntryAbility.ts

Foreground和Background状态分别在UIAbility实例切换至前台和切换至后台时触发，对应于onForeground()回调和onBackground()回调。

onForeground()回调，在UIAbility的UI界面可见之前，如UIAbility切换至前台时触发。可以在onForeground()回调中申请系统需要的资源，或者重新申请在onBackground()中释放的资源。

onBackground()回调，在UIAbility的UI界面完全不可见之后，如UIAbility切换至后台时候触发。可以在onBackground()回调中释放UI界面不可见时无用的资源，或者在此回调中执行较为耗时的操作，例如状态保存等。

例如应用在使用过程中需要使用用户定位时，假设应用已获得用户的定位权限授权。在UI界面显示之前，可以在onForeground()回调中开启定位功能，从而获取到当前的位置信息。

当应用切换到后台状态，可以在onBackground()回调中停止定位功能，以节省系统的资源消耗。

### 页面和组件的生命周期

https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V2/arkts-page-custom-components-lifecycle-0000001524296665-V2

在开始之前，我们先明确自定义组件和页面的关系：

- 自定义组件：@Component装饰的UI单元，可以组合多个系统组件实现UI的复用，可以调用组件的生命周期。
- 页面：即应用的UI页面。可以由一个或者多个自定义组件组成，[@Entry](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V2/arkts-create-custom-components-0000001473537046-V2#section1430055924816)装饰的自定义组件为页面的入口组件，即页面的根节点，一个页面有且仅能有一个@Entry。只有被@Entry装饰的组件才可以调用页面的生命周期。

页面生命周期，即被@Entry装饰的组件生命周期，提供以下生命周期接口：

- [onPageShow](https://developer.huawei.com/consumer/cn/doc/harmonyos-references-V2/arkts-custom-component-lifecycle-0000001482395076-V2#ZH-CN_TOPIC_0000001523488850__onpageshow)：页面每次显示时触发一次，包括路由过程、应用进入前台等场景。
- [onPageHide](https://developer.huawei.com/consumer/cn/doc/harmonyos-references-V2/arkts-custom-component-lifecycle-0000001482395076-V2#ZH-CN_TOPIC_0000001523488850__onpagehide)：页面每次隐藏时触发一次，包括路由过程、应用进入后台等场景。
- [onBackPress](https://developer.huawei.com/consumer/cn/doc/harmonyos-references-V2/arkts-custom-component-lifecycle-0000001482395076-V2#ZH-CN_TOPIC_0000001523488850__onbackpress)：当用户点击返回按钮时触发。

组件生命周期，即一般用@Component装饰的自定义组件的生命周期，提供以下生命周期接口：

- [aboutToAppear](https://developer.huawei.com/consumer/cn/doc/harmonyos-references-V2/arkts-custom-component-lifecycle-0000001482395076-V2#ZH-CN_TOPIC_0000001523488850__abouttoappear)：组件即将出现时回调该接口，具体时机为在创建自定义组件的新实例后，在执行其build()函数之前执行。
- [aboutToDisappear](https://developer.huawei.com/consumer/cn/doc/harmonyos-references-V2/arkts-custom-component-lifecycle-0000001482395076-V2#ZH-CN_TOPIC_0000001523488850__abouttodisappear)：在自定义组件析构销毁之前执行。不允许在aboutToDisappear函数中改变状态变量，特别是@Link变量的修改可能会导致应用程序行为不稳定。

生命周期流程如下图所示，下图展示的是被@Entry装饰的组件（页面）生命周期。

![img](https://qiniu.waite.wang/202404272209682.png)

![image-20240427222009106](https://qiniu.waite.wang/202404272220757.png)

```ts
// Index.ets
import router from '@ohos.router';

@Entry
@Component
struct MyComponent {
  @State showChild: boolean = true;

  // 只有被@Entry装饰的组件才可以调用页面的生命周期
  onPageShow() {
    console.info('Index onPageShow');
  }
  // 只有被@Entry装饰的组件才可以调用页面的生命周期
  onPageHide() {
    console.info('Index onPageHide');
  }

  // 只有被@Entry装饰的组件才可以调用页面的生命周期
  onBackPress() {
    console.info('Index onBackPress');
  }

  // 组件生命周期
  aboutToAppear() {
    console.info('MyComponent aboutToAppear');
  }

  // 组件生命周期
  aboutToDisappear() {
    console.info('MyComponent aboutToDisappear');
  }

  build() {
    Column() {
      // this.showChild为true，创建Child子组件，执行Child aboutToAppear
      if (this.showChild) {
        Child()
      }
      // this.showChild为false，删除Child子组件，执行Child aboutToDisappear
      Button('delete Child').onClick(() => {
        this.showChild = false;
      })
      // push到Page2页面，执行onPageHide
      Button('push to next page')
        .onClick(() => {
          router.pushUrl({ url: 'pages/Second' });
        })
    }

  }
}

@Component
struct Child {
  @State title: string = 'Hello World';
  // 组件生命周期
  aboutToDisappear() {
    console.info('[lifeCycle] Child aboutToDisappear')
  }
  // 组件生命周期
  aboutToAppear() {
    console.info('[lifeCycle] Child aboutToAppear')
  }

  build() {
    Text(this.title).fontSize(50).onClick(() => {
      this.title = 'Hello ArkUI';
    })
  }
}
```

![image-20240427223013370](https://qiniu.waite.wang/202404272230907.png)

## UIAbility组件启动模式

> 具体重新观看: https://www.bilibili.com/video/BV1Sa4y1Z7B1/?p=27

https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V2/uiability-launch-type-0000001428061476-V2

UIAbility的启动模式是指UIAbility实例在启动时的不同呈现状态。针对不同的业务场景，系统提供了三种启动模式：

- [singleton（单实例模式）](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V2/uiability-launch-type-0000001428061476-V2#ZH-CN_TOPIC_0000001523489150__singleton启动模式)
- [multiton（多实例模式）](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V2/uiability-launch-type-0000001428061476-V2#ZH-CN_TOPIC_0000001523489150__standard启动模式)
- [specified（指定实例模式）](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V2/uiability-launch-type-0000001428061476-V2#ZH-CN_TOPIC_0000001523489150__specified启动模式)

## singleton启动模式

singleton启动模式为单实例模式，也是默认情况下的启动模式。

每次调用startAbility()方法时，如果应用进程中该类型的UIAbility实例已经存在，则复用系统中的UIAbility实例。系统中只存在唯一一个该UIAbility实例，即在最近任务列表中只存在一个该类型的UIAbility实例。

**图1** 单实例模式演示效果

![img](https://qiniu.waite.wang/202404272235630.png)

说明

应用的UIAbility实例已创建，该UIAbility配置为单实例模式，再次调用startAbility()方法启动该UIAbility实例，此时只会进入该UIAbility的onNewWant()回调，不会进入其onCreate()和onWindowStageCreate()生命周期回调。

如果需要使用singleton启动模式，在[module.json5配置文件](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V2/module-configuration-file-0000001427744540-V2)中的"launchType"字段配置为"singleton"即可。

```json
{
  "module": {
    // ...
    "abilities": [
      {
        "launchType": "singleton",
        // ...
      }
    ]
  }
}
```

#### multiton启动模式

multiton启动模式为多实例模式，每次调用startAbility()方法时，都会在应用进程中创建一个新的该类型UIAbility实例。即在最近任务列表中可以看到有多个该类型的UIAbility实例。这种情况下可以将UIAbility配置为multiton（多实例模式）。

**图2** 多实例模式演示效果

![img](https://qiniu.waite.wang/202404272235979.png)

multiton启动模式的开发使用，在[module.json5配置文件](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V2/module-configuration-file-0000001427744540-V2)中的"launchType"字段配置为"multiton"即可。

```json
{
  "module": {
    // ...
    "abilities": [
      {
        "launchType": "multiton",
        // ...
      }
    ]
  }
}
```

#### specified启动模式

specified启动模式为指定实例模式，针对一些特殊场景使用（例如文档应用中每次新建文档希望都能新建一个文档实例，重复打开一个已保存的文档希望打开的都是同一个文档实例）。

在UIAbility实例创建之前，允许开发者为该实例创建一个唯一的字符串Key，创建的UIAbility实例绑定Key之后，后续每次调用startAbility()方法时，都会询问应用使用哪个Key对应的UIAbility实例来响应startAbility()请求。运行时由UIAbility内部业务决定是否创建多实例，如果匹配有该UIAbility实例的Key，则直接拉起与之绑定的UIAbility实例，否则创建一个新的UIAbility实例。

**图3** 指定实例模式演示效果

![点击放大](https://qiniu.waite.wang/202404272236549.png)

应用的UIAbility实例已创建，该UIAbility配置为指定实例模式，再次调用startAbility()方法启动该UIAbility实例，且[AbilityStage](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V2/abilitystage-0000001427584604-V2)的[onAcceptWant()](https://developer.huawei.com/consumer/cn/doc/harmonyos-references-V2/js-apis-app-ability-abilitystage-0000001493424312-V2#ZH-CN_TOPIC_0000001574088265__abilitystageonacceptwant)回调匹配到一个已创建的UIAbility实例。此时，再次启动该UIAbility时，只会进入该UIAbility的[onNewWant()](https://developer.huawei.com/consumer/cn/doc/harmonyos-references-V2/js-apis-app-ability-uiability-0000001493584184-V2#ZH-CN_TOPIC_0000001523808838__abilityonnewwant)回调，不会进入其onCreate()和onWindowStageCreate()生命周期回调。

例如有两个UIAbility：EntryAbility和FuncAbility，FuncAbility配置为specified启动模式，需要从EntryAbility的页面中启动FuncAbility。

1. 在FuncAbility中，将[module.json5配置文件](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V2/module-configuration-file-0000001427744540-V2)的"launchType"字段配置为"specified"。

   ```json
   {
     "module": {
       // ...
       "abilities": [
         {
           "launchType": "specified",
           // ...
         }
       ]
     }
   }
   ```

2. 在EntryAbility中，调用startAbility()方法时，在want参数中，增加一个自定义参数来区别UIAbility实例，例如增加一个"instanceKey"自定义参数。

   ```javascript
   // 在启动指定实例模式的UIAbility时，给每一个UIAbility实例配置一个独立的Key标识
   // 例如在文档使用场景中，可以用文档路径作为Key标识
   function getInstance() {
       // ...
   }
   
   let want = {
       deviceId: '', // deviceId为空表示本设备
       bundleName: 'com.example.myapplication',
       abilityName: 'FuncAbility',
       moduleName: 'module1', // moduleName非必选
       parameters: { // 自定义信息
           instanceKey: getInstance(),
       },
   }
   // context为调用方UIAbility的AbilityContext
   this.context.startAbility(want).then(() => {
       // ...
   }).catch((err) => {
       // ...
   })
   ```

3. 由于FuncAbility的启动模式配置为了指定实例启动模式，在FuncAbility启动之前，会先进入其对应的AbilityStage的[onAcceptWant()](https://developer.huawei.com/consumer/cn/doc/harmonyos-references-V2/js-apis-app-ability-abilitystage-0000001493424312-V2#ZH-CN_TOPIC_0000001574088265__abilitystageonacceptwant)生命周期回调中，解析传入的want参数，获取"instanceKey"自定义参数。根据业务需要通过AbilityStage的[onAcceptWant()](https://developer.huawei.com/consumer/cn/doc/harmonyos-references-V2/js-apis-app-ability-abilitystage-0000001493424312-V2#ZH-CN_TOPIC_0000001574088265__abilitystageonacceptwant)生命周期回调返回一个字符串Key标识。如果返回的Key对应一个已启动的UIAbility，则会将之前的UIAbility拉回前台并获焦，而不创建新的实例，否则创建新的实例并启动。

   ```javascript
   import AbilityStage from '@ohos.app.ability.AbilityStage';
   
   export default class MyAbilityStage extends AbilityStage {
       onAcceptWant(want): string {
           // 在被调用方的AbilityStage中，针对启动模式为specified的UIAbility返回一个UIAbility实例对应的一个Key值
           // 当前示例指的是module1 Module的FuncAbility
           if (want.abilityName === 'FuncAbility') {
               // 返回的字符串Key标识为自定义拼接的字符串内容
               return `ControlModule_EntryAbilityInstance_${want.parameters.instanceKey}`;
           }
   
           return '';
       }
   }
   ```

   例如在文档应用中，可以对不同的文档实例内容绑定不同的Key值。当每次新建文档的时候，可以传入不同的新Key值（如可以将文件的路径作为一个Key标识），此时AbilityStage中启动UIAbility时都会创建一个新的UIAbility实例；当新建的文档保存之后，回到桌面，或者新打开一个已保存的文档，回到桌面，此时再次打开该已保存的文档，此时AbilityStage中再次启动该UIAbility时，打开的仍然是之前原来已保存的文档界面。

   以如下步骤所示进行举例说明。

   1. 打开文件A，对应启动一个新的UIAbility实例，例如启动“UIAbility实例1”。
   2. 在最近任务列表中关闭文件A的进程，此时UIAbility实例1被销毁，回到桌面，再次打开文件A，此时对应启动一个新的UIAbility实例，例如启动“UIAbility实例2”。
   3. 回到桌面，打开文件B，此时对应启动一个新的UIAbility实例，例如启动“UIAbility实例3”。
   4. 回到桌面，再次打开文件A，此时对应启动的还是之前的“UIAbility实例2”。