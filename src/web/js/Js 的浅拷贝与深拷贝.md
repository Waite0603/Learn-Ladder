---
title: Js 的浅拷贝与深拷贝
icon: post
order: 1
date: 2023-10-30
---

## 数据类型

1. 在探讨深浅拷贝之前，我们先梳理一下js中的数据类型，js的数据类型分为两类：基本数据类型和引用数据类型
2. 前者是存储在栈内存中，后者是将其地址存在栈内存中，而真实数据存储在堆内存中。
3. 如下图所示，基本类型如number、string、boolean、Null和 undefined 等存储在栈内存中，而引用数据类型如 Array、Object 和函数等则是分别存储数据1的地址、数据2的地址和数据3的地址。

![](https://qiniu.waite.wang/202310301908367.png)

## 深浅拷贝

> js中的基本数据类型：`String Number Boolean Null Undefined`，在赋值的过程中都是深拷贝。
>
>例如，let a = 10 ; b = a , 修改其中一个变量的值，不会影响到另一个变量的值。

### 概念

1. 浅拷贝：会在栈中开辟另一块空间，并将被拷贝对象的栈内存数据完全拷贝到该块空间中，即基本数据类型的值会被完全拷贝，而引用类型的值则是拷贝了“指向堆内存的地址”。因此，当修改其中一个变量的值时，会影响到另一个变量的值。
2. 深拷贝：不仅会在栈中开辟另一块空间，若被拷贝对象中有引用类型，则还会在堆内存中开辟另一块空间存储引用类型的真实数据。因此，当修改其中一个变量的值时，不会影响到另一个变量的值。

> 两者示意图如下：


![](https://qiniu.waite.wang/202310301911328.png)

> 浅拷贝是拷贝一层，属性为对象时，浅拷贝是复制，两个对象指向同一个地址
>
>深拷贝是递归拷贝深层次，属性为对象时，深拷贝是新开栈，两个对象指向不同的地址

## Js 中的深浅拷贝

### 浅拷贝

> 浅拷贝，指的是创建新的数据，这个数据有着原始数据属性值的一份精确拷贝
>
>如果属性是基本类型，拷贝的就是基本类型的值。如果属性是引用类型，拷贝的就是内存地址


#### 手写递归
  
```javascript
function shallowClone(obj) {
  if (typeof obj !== 'object') return;
  let newObj = obj instanceof Array ? [] : {};
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      newObj[key] = obj[key];
    }
  }
  return newObj;
}

const person = {
  name: 'cxk',
  hobby: ['sing', 'rap', 'basketball']
}

const person1 = shallowClone(person);
person1.name = 'xkc';
person1.hobby[0] = 'dance';

console.log(person); // {name: "cxk", hobby: ["dance", "rap", "basketball"]}
console.log(person1); // {name: "xkc", hobby: ["dance", "rap", "basketball"]}
```

#### 展开语法

> 展开语法(spread syntax)允许一个表达式在期望多个参数(用于函数调用)或多个元素(用于数组字面量)或多个变量(用于解构赋值)的位置扩展。

```javascript
let obj = {
  name: "cxk",
  lessons: ["语文", "数学", "英语"]
}

let hd1 = { ...obj };
hd1.name = "hdx";
hd1.lessons[0] = "物理";

console.log(obj); // {name: "cxk", lessons: ["物理", "数学", "英语"]}
console.log(hd1); // {name: "hdx", lessons: ["物理", "数学", "英语"]}
```

#### Object.assign()

> Object.assign() 方法用于将所有可枚举属性的值从一个或多个源对象复制到目标对象。它将返回目标对象。

```javascript
let info = {
  name: 'cxk',
  hobbies: ['唱', '跳', '篮球']
};
let obj = Object.assign({}, info);
obj.hobbies[0] = 'rap';

console.log(info);
console.log(obj); // {name: "cxk", hobbies: ["rap", "跳", "篮球"]}
```

#### slice()

> slice() 方法可从已有的数组中返回选定的元素。

```javascript
let arr1 = [1, 42, [3, 4]]
let arr1Copy = arr1.slice()
arr1Copy[0] = 10
arr1Copy[2][0] = 100
console.log(arr1) // [1, 42, [100, 4]]
console.log(arr1Copy) // [10, 42, [100, 4]]
```

#### concat()

> concat() 方法用于连接两个或多个数组。

```javascript
let arr2 = ['cat', 'dog', 'pig', { 'name': 'xia', 'age': 18 }]
let arr2Copy = [].concat(arr2)
arr2Copy[2] = 'big pig'
arr2Copy[3]['name'] = 'aa'
console.log(arr2)
console.log(arr2Copy)
```

![](https://qiniu.waite.wang/202310301917518.png)


### 深拷贝

> 深拷贝开辟一个新的栈，两个对象属性完成相同，但是对应两个不同的地址，修改一个对象的属性，不会改变另一个对象的属性

#### 手写递归

```javascript
function deepClone(obj) {
  let newObj = obj instanceof Array ? [] : {};
  for (let i in obj) {
    if (obj.hasOwnProperty(i)) {
      if (obj[i] && typeof obj[i] == 'object') {
        // 若对象属性还是引用类型，进行递归
        newObj[i] = deepClone(obj[i]);
      } else {
        // 对象属性为基础数据类型，直接赋值
        newObj[i] = obj[i];
      }
    }
  }
  return newObj;
}
const obj = {
  name: 'zs',
  hobby: ['排球', '网球', '乒乓球'],
};
const newObj = deepClone(obj);
newObj.name = 'lisi';
newObj.hobby[0] = '篮球';
console.log(obj); // { name: 'zs', hobby: [ '排球', '网球', '乒乓球' ] }
console.log(newObj); // { name: 'lisi', hobby: [ '篮球', '网球', '乒乓球' ] }
```

#### Object.entries(obj) 遍历对象

> Object.entries() 方法返回一个给定对象自身可枚举属性的键值对数组
>
> 比如：Object.entries({ foo: 'bar', baz: 42 }); // [ ['foo', 'bar'], ['baz', 42] ]


```javascript
function deepClone(obj) {
  let newObj = obj instanceof Array ? [] : {};
  for (const [k, v] of Object.entries(obj)) {
    newObj[k] = typeof v == 'object' ? deepClone(v) : v;
  }
  return newObj;
}
const obj = {
  name: 'zs',
  hobby: ['排球', '网球', '乒乓球'],
};
const newObj = deepClone(obj);
newObj.name = 'lisi';
newObj.hobby[0] = '篮球';
console.log(obj);
console.log(newObj);
```

#### JSON.parse(JSON.stringify(待拷贝对象) -> 常用

> JSON.stringify() 方法用于将 JavaScript 值转换为 JSON 字符串。
>
> 比如: JSON.stringify({ x: 5, y: 6 }); // "{"x":5,"y":6}" -> string
>
> JSON.parse() 方法用于将一个 JSON 字符串转换为对象。
>
> 比如: JSON.parse('{"name":"cxk","age":18}'); // {name: "cxk", age: 18} -> object

```javascript
const obj = {
  name: 'zs',
  hobby: ['排球', '网球', '乒乓球'],
};
const newObj = JSON.parse(JSON.stringify(obj));
newObj.name = 'lisi';
newObj.hobby[0] = '篮球';
console.log(obj);
console.log(newObj);
```

#### 其他方法

+ _.cloneDeep()
+ jQuery.extend()
+ 手写循环递归

## Vue 中的深拷贝实现

> 引入loadsh,提供 cloneDeep 实现深拷贝

1. 安装loadsh    npm i --save lodash
2. 引入loadsh    import _ from 'lodash'
3. 直接调用 loadsh 库的方法 `const newObj = _.cloneDeep(this.obj)`

> _clone 实现浅拷贝
  
```javascript
const obj = _.clone(info);

info.name = "kobe";
console.log(obj.name);

info.friend.name = "james";
console.log(obj.friend.name);
```