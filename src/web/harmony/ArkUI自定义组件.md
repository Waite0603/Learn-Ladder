---
title: ArkUI 自定义组件
icon: post
order: 3
date: 2024-04-20
---

## 自定义组件的基本结构

struct：自定义组件基于struct实现，struct + 自定义组件名 + {...}的组合构成自定义组件，不能有继承关系。对于struct的实例化，可以省略new。

> 自定义组件名、类名、函数名不能和系统组件名相同。

@Component：@Component装饰器仅能装饰struct关键字声明的数据结构。struct被@Component装饰后具备组件化的能力，需要实现build方法描述UI，一个struct只能被一个@Component装饰。

> 从API version 9开始，该装饰器支持在ArkTS卡片中使用。

```ts
@Component
struct MyComponent {
}
```
build()函数：build()函数用于定义自定义组件的声明式UI描述，自定义组件必须定义build()函数。

```ts
@Component
struct MyComponent {
  build() {
  }
}
```
@Entry：@Entry装饰的自定义组件将作为UI页面的入口。在单个UI页面中，最多可以使用@Entry装饰一个自定义组件。@Entry可以接受一个可选的LocalStorage的参数。

> 从API version 9开始，该装饰器支持在ArkTS卡片中使用。


```ts
@Entry
@Component
struct MyComponent {
}
```

## 自定义组件的基本用法

```ts
@Entry
@Component
struct ParentComponent {
  build() {
    Column() {
      Text('ArkUI message')
      HelloComponent({ message: 'Hello, World!' });
      HelloComponent({ message: '你好!' });
    }
  }
}
@Component
struct HelloComponent {
  @State message: string = 'Hello, World!';

  build() {
    // HelloComponent自定义组件组合系统组件Row和Text
    Row() {
      Text(this.message)
        .onClick(() => {
          // 状态变量message的改变驱动UI刷新，UI从'Hello, World!'刷新为'Hello, ArkUI!'
          this.message = 'Hello, ArkUI!';
        })
    }
  }
}
```

> 如果在另外的文件中引用该自定义组件，需要使用export关键字导出，并在使用的页面import该自定义组件。

```ts
@Component
export struct HelloComponent {
  @State message: string = 'Hello, World!';

  build() {
    // HelloComponent自定义组件组合系统组件Row和Text
    Row() {
      Text(this.message)
        .onClick(() => {
          // 状态变量message的改变驱动UI刷新，UI从'Hello, World!'刷新为'Hello, ArkUI!'
          this.message = 'Hello, ArkUI!';
        })
    }
  }
}
```

```ts
import { HelloComponent } from './HelloComponent'

@Entry
@Component
struct ParentComponent {
  build() {
    Column() {
      Text('ArkUI message')
      HelloComponent({ message: 'Hello, World!' });
      HelloComponent({ message: '你好!' });
    }
  }
}
```

