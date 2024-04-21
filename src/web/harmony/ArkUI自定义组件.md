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

## 自定义组件的参数规定

从上文的示例中，我们已经了解到，可以在build方法里创建自定义组件，在创建自定义组件的过程中，根据装饰器的规则来初始化自定义组件的参数。

```ts
@Component
struct MyComponent {
  private countDownFrom: number = 0;
  private color: Color = Color.Blue;

  build() {
  }
}

@Entry
@Component
struct ParentComponent {
  private someColor: Color = Color.Pink;

  build() {
    Column() {
      // 创建MyComponent实例，并将创建MyComponent成员变量countDownFrom初始化为10，将成员变量color初始化为this.someColor
      MyComponent({ countDownFrom: 10, color: this.someColor })
    }
  }
}
```

## build()函数

所有声明在build()函数的语言，我们统称为UI描述，UI描述需要遵循以下规则：

+ @Entry装饰的自定义组件，其build()函数下的根节点唯一且必要，且必须为容器组件，其中ForEach禁止作为根节点。
+ @Component装饰的自定义组件，其build()函数下的根节点唯一且必要，可以为非容器组件，其中ForEach禁止作为根节点。

```ts
@Entry
@Component
struct MyComponent {
  build() {
    // 根节点唯一且必要，必须为容器组件
    Row() {
      ChildComponent() 
    }
  }
}

@Component
struct ChildComponent {
  build() {
    // 根节点唯一且必要，可为非容器组件
    Image('test.jpg')
  }
}
```

+ 不允许声明本地变量，反例如下。

```ts
build() {
  // 反例：不允许声明本地变量
  let a: number = 1;
}
```

+ 不允许在UI描述里直接使用console.info，但允许在方法或者函数里使用，反例如下。

```ts
build() {
  // 反例：不允许console.info
  console.info('print debug log');
}
```

+ 不允许创建本地的作用域，反例如下。

```ts
build() {
  // 反例：不允许本地作用域
  {
    ...
  }
}
```

+ 不允许调用没有用@Builder装饰的方法，允许系统组件的参数是TS方法的返回值。

```ts
@Component
struct ParentComponent {
  doSomeCalculations() {
  }

  calcTextValue(): string {
    return 'Hello World';
  }

  @Builder doSomeRender() {
    Text(`Hello World`)
  }

  build() {
    Column() {
      // 反例：不能调用没有用@Builder装饰的方法
      this.doSomeCalculations();
      // 正例：可以调用
      this.doSomeRender();
      // 正例：参数可以为调用TS方法的返回值
      Text(this.calcTextValue())
    }
  }
}
```

+ 不允许switch语法，如果需要使用条件判断，请使用if。反例如下。

```ts
build() {
  Column() {
    // 反例：不允许使用switch语法
    switch (expression) {
      case 1:
        Text('...')
        break;
      case 2:
        Image('...')
        break;
      default:
        Text('...')
        break;
    }
  }
}
```

+ 不允许使用表达式，反例如下。


```ts
build() {
  Column() {
    // 反例：不允许使用表达式
    (this.aVar > 10) ? Text('...') : Image('...')
  }
}
```

## 自定义组件通用样式

自定义组件通过“.”链式调用的形式设置通用样式。

```ts
@Component
struct MyComponent2 {
  build() {
    Button(`Hello World`)
  }
}

@Entry
@Component
struct MyComponent {
  build() {
    Row() {
      MyComponent2()
        .width(200)
        .height(300)
        .backgroundColor(Color.Red)
    }
  }
}
```