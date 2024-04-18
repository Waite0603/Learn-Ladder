---
title: ArkUI 组件
icon: post
order: 2
date: 2024-04-18
---

## 基础组件

### Text

![](https://qiniu.waite.wang/202404181859349.png)

```ts
Text($r("app.string.module_desc"))
```
> 文本会先在对应国家的资源文件中查找，如果没有找到，会在 base 全局资源文件中查找。

![](https://qiniu.waite.wang/202404181902495.png)

![](https://qiniu.waite.wang/202404181903070.png)


### TextInput

![](https://qiniu.waite.wang/202404182154723.png)


### Button

![](https://qiniu.waite.wang/202404182156605.png)

方法1： Button(options?: {type?: ButtonType, stateEffect?: boolean})

方法2： Button(label?: ResourceStr, options?: { type?: ButtonType, stateEffect?: boolean })

使用文本内容创建相应的按钮组件，此时Button无法包含子组件。


### Image

图片组件，支持本地图片和网络图片的渲染展示。

> Image(src: string | PixelMap | Resource)
> 图片的数据源，支持本地图片和网络图片。当使用相对路径引用图片资源时，例如Image("common/test.jpg")，不支持该Image组件被跨包/跨模块调用，建议使用$r方式来管理需全局使用的图片资源。
>  - 支持的图片格式包括png、jpg、bmp、svg和gif。
>  - 支持Base64字符串。格式data:image/[png|jpeg|bmp|webp];base64,[base64 data], 其中[base64 data]为Base64字符串数据。
> - 支持dataability://路径前缀的字符串，用于访问通过data ability提供的图片路径。

![](https://qiniu.waite.wang/202404181838112.png)

#### 从网络加载图片


使用网络图片时，需要申请权限ohos.permission.INTERNET。具体申请方式请参考[权限申请声明](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V3/accesstoken-guidelines-0000001333800609-V3#ZH-CN_TOPIC_0000001333800609__%E6%9D%83%E9%99%90%E7%94%B3%E8%AF%B7%E5%A3%B0%E6%98%8E)。

```json
// entry/src/main/module.json5

{
  "module": {
    "reqPermissions": [
      {
        "name": "ohos.permission.INTERNET",
      }
    ]
  }
}
```


通过以下代码，可以加载网络图片：

```ts
Image("https://example.com/image.jpg")
```

#### 从本地加载

```ts
Image($r("app.media.icon"))

Image($rawfile("abstract.png"))
```

### Slider

```ts
Slider({
  min: 0, // 最小值
  max: 100, // 最大值
  value: 40, // 当前值
  step: 10, // 步长
  style: SliderStyle.InSet, // Outer Slider
  direction: Axis.Horizontal, // 方向
  reverse: false // 方向滑动
})
  .showTips(true) // 展示 value 百分比
  .margin({
    top: 20
  })
```

## 容器组件

https://developer.huawei.com/consumer/cn/doc/harmonyos-references-V3/arkui-ts-container-components-0000001334734185-V3

### Column

沿垂直方向布局的容器。

```ts
@Entry
@Component
struct ColumnExample {
  build() {
    Column() {
        Text('space').fontSize(9).fontColor(0xCCCCCC).width('90%')
        Column({ space: 5 }) {
          Column().width('100%').height(30).backgroundColor(0xAFEEEE)
          Column().width('100%').height(30).backgroundColor(0x00FFFF)
        }.width('90%').height(100).border({ width: 1 })

        Text('alignItems(Start)').fontSize(9).fontColor(0xCCCCCC).width('90%')
        Column() {
          Column().width('50%').height(30).backgroundColor(0xAFEEEE)
          Column().width('50%').height(30).backgroundColor(0x00FFFF)
        }.alignItems(HorizontalAlign.Start).width('90%').border({ width: 1 })

        Text('alignItems(End)').fontSize(9).fontColor(0xCCCCCC).width('90%')
        Column() {
          Column().width('50%').height(30).backgroundColor(0xAFEEEE)
          Column().width('50%').height(30).backgroundColor(0x00FFFF)
        }.alignItems(HorizontalAlign.End).width('90%').border({ width: 1 })

        Text('justifyContent(Center)').fontSize(9).fontColor(0xCCCCCC).width('90%')
        Column() {
          Column().width('30%').height(30).backgroundColor(0xAFEEEE)
          Column().width('30%').height(30).backgroundColor(0x00FFFF)
        }.height('15%').border({ width: 1 }).justifyContent(FlexAlign.Center)

        Text('justifyContent(End)').fontSize(9).fontColor(0xCCCCCC).width('90%')
        Column() {
          Column().width('30%').height(30).backgroundColor(0xAFEEEE)
          Column().width('30%').height(30).backgroundColor(0x00FFFF)
        }.height('15%').border({ width: 1 }).justifyContent(FlexAlign.End)
    }.width('100%').padding({ top: 5 })
  }
}
```

![](https://qiniu.waite.wang/202404182315467.png)

### Row

沿水平方向布局容器。

```ts
// xxx.ets
@Entry
@Component
struct RowExample {
  build() {
    Column({ space: 5 }) {
      Text('space').fontSize(9).fontColor(0xCCCCCC).width('90%')
        Row({ space: 5 }) {
          Row().width('30%').height(50).backgroundColor(0xAFEEEE)
          Row().width('30%').height(50).backgroundColor(0x00FFFF)
        }.width('90%').height(107).border({ width: 1 })

        Text('alignItems(Top)').fontSize(9).fontColor(0xCCCCCC).width('90%')
        Row() {
          Row().width('30%').height(50).backgroundColor(0xAFEEEE)
          Row().width('30%').height(50).backgroundColor(0x00FFFF)
        }.alignItems(VerticalAlign.Top).height('15%').border({ width: 1 })

        Text('alignItems(Center)').fontSize(9).fontColor(0xCCCCCC).width('90%')
        Row() {
          Row().width('30%').height(50).backgroundColor(0xAFEEEE)
          Row().width('30%').height(50).backgroundColor(0x00FFFF)
        }.alignItems(VerticalAlign.Center).height('15%').border({ width: 1 })

        Text('justifyContent(End)').fontSize(9).fontColor(0xCCCCCC).width('90%')
        Row() {
          Row().width('30%').height(50).backgroundColor(0xAFEEEE)
          Row().width('30%').height(50).backgroundColor(0x00FFFF)
        }.width('90%').border({ width: 1 }).justifyContent(FlexAlign.End)

        Text('justifyContent(Center)').fontSize(9).fontColor(0xCCCCCC).width('90%')
        Row() {
          Row().width('30%').height(50).backgroundColor(0xAFEEEE)
          Row().width('30%').height(50).backgroundColor(0x00FFFF)
        }.width('90%').border({ width: 1 }).justifyContent(FlexAlign.Center)
    }.width('100%')
  }
}
```

![](https://qiniu.waite.wang/202404182315827.png)


## 案例

```ts
// xxx.ets
@Entry
@Component
struct Index {
  @State imgWidth: number = 30

  build() {
    Row() {
      Column() {
        Image($r("app.media.icon"))
          .width(this.imgWidth)
          .interpolation(ImageInterpolation.High)

        Text(`图片宽度: ${this.imgWidth}`)
          .margin(20)

        TextInput({
          placeholder: "请输入图片宽度",
          text: this.imgWidth.toString()
        })
          .width(200)
          .type(InputType.Number)
          .onChange(value => {
            this.imgWidth = parseInt(value)
          })
        Row() {
          Button("缩小")
            .width(80)
            .onClick(() => {
              if (this.imgWidth >= 10) {
                this.imgWidth -= 10
              }
            })

          Button("放大")
            .width(80)
            .onClick(() => {
              if (this.imgWidth <= 300) {
                this.imgWidth += 10
              }
            })
        }
        .margin({
          top: 20
        })

        Slider({
          min: 0, // 最小值
          max: 100, // 最大值
          value: 40, // 当前值
          step: 10, // 步长
          style: SliderStyle.InSet, // Outer Slider
          direction: Axis.Horizontal, // 方向
          reverse: false // 方向滑动
        })
          .showTips(true) // 展示 value 百分比
          .margin({
            top: 20
          })
          .width("80%")
      }
      .width("100%")
    }
    .height("100%")
  }
}
```

![](https://qiniu.waite.wang/202404182317729.png)
