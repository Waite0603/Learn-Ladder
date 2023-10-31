---
title: Vue 的Options API
icon: post
order: 3
date: 2023-10-31
---

## Computed

### 认识计算属性

我们知道，在模板中可以直接通过插值语法显示一些data中的数据。

但是在某些情况，我们可能需要对数据进行一些转化后再显示，或者需要将多个数据结合起来进行显示；

- 比如我们需要对多个data数据进行运算、三元运算符来决定结果、数据进行某种转化后显示；
- 在模板中使用表达式，可以非常方便的实现，但是设计它们的初衷是用于简单的运算；
- 在模板中放入太多的逻辑会让模板过重和难以维护；
- 并且如果多个地方都使用到，那么会有大量重复的代码；

我们有没有什么方法可以将逻辑抽离出去呢？

- 可以，其中一种方式就是将逻辑抽取到一个method中，放到methods的options中；
- 但是，这种做法有一个直观的弊端，就是所有的data使用过程都会变成了一个方法的调用；
- 另外一种方式就是使用计算属性computed；

什么是计算属性呢？

+ https://cn.vuejs.org/api/reactivity-core.html#computed
+ 官方并没有给出直接的概念解释；
+ 而是说：对于任何包含响应式数据的复杂逻辑，你都应该使用**计算属性**；
+ 计算属性将被混入到组件实例中。所有 getter 和 setter 的 `this` 上下文自动地绑定为组件实例；

### 基本使用

计算属性的用法：

- **选项：** computed
- **类型：**`{ [key: string]: Function | { get: Function, set: Function } }`

我们来看三个案例：

- 我们有两个变量：firstName 和 lastName，希望它们拼接之后在界面上显示；
- 我们有一个分数：score
  - 当score大于60的时候，在界面上显示及格；
  - 当score小于60的时候，在界面上显示不及格；
- 我们有一个变量message，记录一段文字：比如Hello World
  - 某些情况下我们是直接显示这段文字；
  - 某些情况下我们需要对这段文字进行反转；
- 我们可以有三种实现思路：
  - 思路一：在模板语法中直接使用表达式；
  - 思路二：使用method对逻辑进行抽取；
  - 思路三：使用计算属性computed；

#### 在模板语法中直接使用表达式

- 缺点一：模板中存在大量的复杂逻辑，不便于维护（模板中表达式的初衷是用于简单的计算）；
- 缺点二：当有多次一样的逻辑时，存在重复的代码；
- 缺点三：多次使用的时候，很多运算也需要多次执行，没有缓存；

```html
<template id="my-app">
    <!-- 1.实现思路一: -->
    <h2>{{ firstName + lastName }}</h2>
    <h2>{{ score >= 60 ? "及格": "不及格" }}</h2>
    <h2>{{ message.split("").reverse().join(" ") }}</h2>
</template>
```

#### 使用method对逻辑进行抽取

- 缺点一：我们事实上先显示的是一个结果，但是都变成了一种方法的调用；
- 缺点二：多次使用方法的时候，没有缓存，也需要多次计算；

```html
<template id="my-app">
  <h2>{{getFullName()}}</h2>
  <h2>{{getResult()}}</h2>
  <h2>{{getReverseMessage()}}</h2>
</template>

<script src="../js/vue.js"></script>
<script>
  const App = {
    template: '#my-app',
    data() {
      return {
        firstName: "Kobe",
        lastName: "Bryant",
        score: 80,
        message: "Hello World"
      }
    },
    methods: {
      getFullName() {
        return this.firstName + " " + this.lastName;
      },
      getResult() {
        return this.score >= 60 ? "及格": "不及格";
      },
      getReverseMessage() {
        return this.message.split(" ").reverse().join(" ");
      }
    }
  }

  Vue.createApp(App).mount('#app');
</script>
```

#### computed 实现

- 注意：计算属性看起来像是一个函数，但是我们在使用的时候不需要加()，这个后面讲setter和getter时会讲到；
- 我们会发现无论是直观上，还是效果上计算属性都是更好的选择；
- 并且计算属性是有缓存的；

```html
<template id="my-app">
  <h2>{{fullName}}</h2>
  <h2>{{result}}</h2>
  <h2>{{reverseMessage}}</h2>
</template>

<script src="../js/vue.js"></script>
<script>
  const App = {
    template: '#my-app',
    data() {
      return {
        firstName: "Kobe",
        lastName: "Bryant",
        score: 80,
        message: "Hello World"
      }
    },
    computed: {
      // 定义了一个计算属性叫fullname
      fullName() {
        return this.firstName + " " + this.lastName;
      },
      result() {
        return this.score >= 60 ? "及格": "不及格";
      },
      reverseMessage() {
        return this.message.split(" ").reverse().join(" ");
      }
    }
  }

  Vue.createApp(App).mount('#app');
</script>
```

### 计算属性 vs methods

在上面的实现思路中，我们会发现计算属性和methods的实现看起来是差别是不大的，而且我们多次提到计算属性有缓存。

接下来我们来看一下同一个计算多次使用，计算属性和methods的差异：

```html
<template id="my-app">
  <button @click="changeFirstName">修改firstName</button>

  <h2>{{fullName}}</h2>
  <h2>{{fullName}}</h2>
  <h2>{{fullName}}</h2>
  <h2>{{fullName}}</h2>
  <h2>{{fullName}}</h2>
  <h2>{{fullName}}</h2>
  <h2>{{fullName}}</h2>
  <h2>{{fullName}}</h2>

  <h2>{{getFullName()}}</h2>
  <h2>{{getFullName()}}</h2>
  <h2>{{getFullName()}}</h2>
  <h2>{{getFullName()}}</h2>
  <h2>{{getFullName()}}</h2>
  <h2>{{getFullName()}}</h2>
</template>

<script src="../js/vue.js"></script>
<script>
  const App = {
    template: '#my-app',
    data() {
      return {
        firstName: "Kobe",
        lastName: "Bryant"
      }
    },
    computed: {
      // 计算属性是有缓存的, 当我们多次使用计算属性时, 计算属性中的运算只会执行一次.
      // 计算属性会随着依赖的数据(firstName)的改变, 而进行重新计算.
      fullName() {
        console.log("computed的fullName中的计算");
        return this.firstName + " " + this.lastName;
      }
    },
    methods: {
      getFullName() {
        console.log("methods的getFullName中的计算");
        return this.firstName + " " + this.lastName;
      },
      changeFirstName() {
        this.firstName = "Coder"
      }
    }
  }

  Vue.createApp(App).mount('#app');
</script>
```

> 打印结果如下：
>
> - 我们会发现methods在多次使用时，会调用多次；
> - 而计算属性虽然使用了多次，但是计算的过程只调用了一次；
> - 这是因为计算属性会基于它们的依赖关系进行缓存；
> - 在数据不发生变化时，计算属性是不需要重新计算的；
> - 但是如果依赖的数据发生变化，在使用时，计算属性依然会重新进行计算；如下:

```html
<body>
  <div id="app"></div>

  <template id="my-app">
    
    <input type="text" v-model="score">
    <!-- 1.使用methods -->
    <h2>{{getResult()}}</h2>
    <h2>{{getResult()}}</h2>
    <h2>{{getResult()}}</h2>

    <!-- 2.使用computed -->
    <h2>{{result}}</h2>
    <h2>{{result}}</h2>
    <h2>{{result}}</h2>
  </template>

  <script src="../js/vue.js"></script>
  <script>
    const App = {
      template: '#my-app',
      data() {
        return {
          score: 90
        }
      },
      computed: {
        result() {
          console.log("调用了计算属性result的getter");
          return this.score >= 60 ? "及格": "不及格";
        }
      },
      methods: {
        getResult() {
          console.log("调用了getResult方法");
          return this.score >= 60 ? "及格": "不及格";
        }
      }
    }
    
    Vue.createApp(App).mount('#app');
  </script>
</body>
```

> 当 score 变化, console 输出如下:

```
调用了getResult方法
调用了getResult方法
调用了getResult方法
调用了计算属性result的getter
```

### 计算属性的 setter 和 getter

计算属性在大多数情况下，只需要一个getter方法即可，所以我们会将计算属性直接写成一个函数。

但是，如果我们确实想设置计算属性的值呢？

- 这个时候我们也可以给计算属性设置一个setter的方法；

```html
<template id="my-app">
  <button @click="changeFullName">修改fullName</button>
  <h2>{{fullName}}</h2>
</template>

<script src="../js/vue.js"></script>
<script>
  const App = {
    template: '#my-app',
    data() {
      return {
        firstName: "Kobe",
        lastName: "Bryant"
      }
    },
    computed: {

      // fullName 的 getter方法
      fullName() {
        return this.firstName + " " + this.lastName;
      },
      
      // fullName的getter和setter方法
      fullName: {
        get: function() {
          return this.firstName + " " + this.lastName;
        },
        set: function(newValue) {
          console.log(newValue);
          const names = newValue.split(" ");
          this.firstName = names[0];
          this.lastName = names[1];
        }
      }
    },
    methods: {
      changeFullName() {
        this.fullName = "Coder Why";
      }
    }
  }

  Vue.createApp(App).mount('#app');
</script>
```

> 以下为内部判断

![图片](https://qiniu.waite.wang/202310251728011.jpeg)

## 侦听器 watch

> 用于声明在数据更改时调用的侦听回调。`watch` 选项期望接受一个对象，其中键是需要侦听的响应式组件实例属性 (例如，通过 `data` 或 `computed` 声明的属性)——值是相应的回调函数。该回调函数接受被侦听源的新值和旧值。

+ 什么是侦听器？
  + 开发中我们在data返回的对象中定义了数据，这个数据通过插值语法等方式绑定到template中;
  + 当数据变化时，template会自动进行更新来显示最新的数据;
  + 但是在某些情况下，我们希望在代码逻辑中监听某个数据的变化，这个时候就需要用侦听器watch来完成了;
+ 用法如下：
  + 选项：watch
  + 类型: `{[key: string]: string | Function | Object | Array}`

### 简单案例

```html
<body>
  <div id="app"></div>

  <template id="my-app">
    您的问题: <input type="text" v-model="question">
    <button @click="queryAnswer">查找答案</button>

    <p>您的问题是: {{ question }}</p>
    <p>答案是: {{ anwser }}</p>
  </template>

  <script src="../js/vue.js"></script>
  <script>
    const App = {
      template: '#my-app',
      data() {
        return {
          // 侦听question的变化时, 去进行一些逻辑的处理(JavaScript, 网络请求)
          question: "Hello World",
          anwser: ""
        }
      },
      watch: {
        // question侦听的data中的属性的名称
        // newValue变化后的新值
        // oldValue变化前的旧值
        question: function(newValue, oldValue) {
          console.log("新值: ", newValue, "旧值", oldValue);
          this.queryAnswer();
        }
      },
      methods: {
        queryAnswer() {
          // console.log(`你的问题${this.question}的答案是哈哈哈哈哈`);
          this.anwser = `你的问题${this.question}的答案是哈哈哈哈哈`;
        }
      }
    }

    Vue.createApp(App).mount('#app');
  </script>
</body>
```

### 配置选项

- `watch` 默认是浅层的：被侦听的属性，仅在被赋新值时，才会触发回调函数——而嵌套属性的变化不会触发。如果想侦听所有嵌套的变更，你需要深层侦听器：
- 以下为不使用深度监听, 当 info.name 在方法中被赋值改变时, 页面会改变, 但是watch不会侦听到, 理由如上

```html
<body>
  <div id="app"></div>

  <template id="my-app">
    <h2>{{info.name}}</h2>
    <button @click="changeInfo">改变info</button>
    <!-- 页面会改变, 但是watch不会侦听到 -->
    <button @click="changeInfoName">改变info.name</button>
    <button @click="changeInfoNbaName">改变info.nba.name</button>
  </template>

  <script src="../js/vue.js"></script>
  <script>
    const App = {
      template: '#my-app',
      data() {
        return {
          info: { name: "why", age: 18, nba: {name: 'kobe'} }
        }
      },
      watch: {
        // 默认情况下我们的侦听器只会针对监听的数据本身的改变(内部发生的改变是不能侦听)
        info(newInfo, oldInfo) {
          console.log("newValue:", newInfo, "oldValue:", oldInfo);
        }
      },
      methods: {
        changeInfo() {
          this.info = {name: "kobe"};
        },
        changeInfoName() {
          this.info.name = "kobe";
        },
        changeInfoNbaName() {
          this.info.nba.name = "james";
        }
      }
    }

    Vue.createApp(App).mount('#app');
  </script>
</body>
```

+ 将 watch 中更改如下, 不管多深都会侦听到

```javascript
watch: {
  // 深度侦听/立即执行(一定会执行一次)
  info: {
    handler: function(newInfo, oldInfo) {
      console.log("newValue:", newInfo, "oldValue:", oldInfo);
    },
    deep: true, // 深度侦听
    // immediate: true // 立即执行
  }
}
```

+ `immediate: true` 立即执行,  这个时候无论后面数据是否有变化，侦听的函数都会有限执行一次；即当刷新页面时会立刻执行一次, 回调函数的初次执行就发生在 `created` 钩子之前。Vue 此时已经处理了 `data`、`computed` 和 `methods` 选项，所以这些属性在第一次调用时就是可用的。

```
newValue: Proxy(Object) {name: 'why', age: 18, nba: {…}} oldValue: undefined
```

> 注意: 引用对象 or watch 不能侦听到旧值, 可以利用 计算属性 缓存旧值, 或者自己深拷贝一份作为保存

### 其他方式

> https://cn.vuejs.org/api/options-state.html#watch

```javascript
export default {
  data() {
    return {
      a: 1,
      b: 2,
      c: {
        d: 4
      },
      e: 5,
      f: 6
    }
  },
  watch: {
    // 侦听根级属性
    a(val, oldVal) {
      console.log(`new: ${val}, old: ${oldVal}`)
    },
    // 字符串方法名称
    b: 'someMethod',
    // 该回调将会在被侦听的对象的属性改变时调动，无论其被嵌套多深
    c: {
      handler(val, oldVal) {
        console.log('c changed')
      },
      deep: true
    },
    // 侦听单个嵌套属性：
    'c.d': function (val, oldVal) {
      // do something
    },
    // 该回调将会在侦听开始之后立即调用
    e: {
      handler(val, oldVal) {
        console.log('e changed')
      },
      immediate: true
    },
    // 你可以传入回调数组，它们将会被逐一调用
    f: [
      'handle1',
      function handle2(val, oldVal) {
        console.log('handle2 triggered')
      },
      {
        handler: function handle3(val, oldVal) {
          console.log('handle3 triggered')
        }
        /* ... */
      }
    ]
  },
  methods: {
    someMethod() {
      console.log('b changed')
    },
    handle1() {
      console.log('handle 1 triggered')
    }
  },
  created() {
    this.a = 3 // => new: 3, old: 1
  }
}
```

####  $watch 的API：

+ https://cn.vuejs.org/api/component-instance.html#watch

- 我们可以在created的生命周期（后续会讲到）中，使用 this.$watchs 来侦听；
- - 第一个参数是要侦听的源；
  - 第二个参数是侦听的回调函数callback；
  - 第三个参数是额外的其他选项，比如deep、immediate；

```javascript
created() {
  const unwatch = this.$watch("info", function(newInfo, oldInfo) {
    console.log(newInfo, oldInfo);
  }, {
    deep: true,
    immediate: true
  })
  // unwatch()
}
```

## 阶段案例

> 现在我们来做一个相对综合一点的练习：书籍购物车

+ css

```css
table {
  border: 1px solid #e9e9e9;
  border-collapse: collapse;
  border-spacing: 0;
}

th, td {
  padding: 8px 16px;
  border: 1px solid #e9e9e9;
  text-align: left;
}

th {
  background-color: #f7f7f7;
  color: #5c6b77;
  font-weight: 600;
}

.counter {
  margin: 0 5px;
}
```

+ index

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <link rel="stylesheet" href="./style.css" />
  </head>
  <body>
    <div id="app"></div>

    <template id="my-app">
      <template v-if="books.length > 0">
        <table>
          <thead>
            <th>序号</th>
            <th>书籍名称</th>
            <th>出版日期</th>
            <th>价格</th>
            <th>购买数量</th>
            <th>操作</th>
          </thead>
          <tbody>
            <tr v-for="(book, index) in books">
              <td>{{index + 1}}</td>
              <td>{{book.name}}</td>
              <td>{{book.date}}</td>
              <td>{{formatPrice(book.price)}}</td>
              <td>
                <button :disabled="book.count <= 1" @click="decrement(index)">
                  -
                </button>
                <span class="counter">{{book.count}}</span>
                <button @click="increment(index)">+</button>
              </td>
              <td>
                <button @click="removeBook(index)">移除</button>
              </td>
            </tr>
          </tbody>
        </table>
        <h2>总价格: {{formatPrice(totalPrice)}}</h2>
      </template>
      <template v-else>
        <h2>购物车为空~</h2>
      </template>
    </template>

    <script src="../js/vue.js"></script>
    <script src="./index.js"></script>

    <script>
      Vue.createApp({
        template: "#my-app",
        data() {
          return {
            books: [
              {
                id: 1,
                name: "《算法导论》",
                date: "2006-9",
                price: 85.0,
                count: 1,
              },
              {
                id: 2,
                name: "《UNIX编程艺术》",
                date: "2006-2",
                price: 59.0,
                count: 1,
              },
              {
                id: 3,
                name: "《编程珠玑》",
                date: "2008-10",
                price: 39.0,
                count: 1,
              },
              {
                id: 4,
                name: "《代码大全》",
                date: "2006-3",
                price: 128.0,
                count: 1,
              },
            ],
          };
        },
        computed: {
          totalPrice() {
            let finalPrice = 0;
            for (let book of this.books) {
              finalPrice += book.count * book.price;
            }
            return finalPrice;
          },
          // Vue3不支持过滤器了, 推荐两种做法: 使用计算属性/使用全局的方法
          filterBooks() {
            return this.books.map((item) => {
              const newItem = Object.assign({}, item);
              newItem.price = "¥" + item.price;
              return newItem;
            });
          },
        },
        methods: {
          increment(index) {
            // 通过索引值获取到对象
            this.books[index].count++;
          },
          decrement(index) {
            this.books[index].count--;
          },
          removeBook(index) {
            this.books.splice(index, 1);
          },
          formatPrice(price) {
            return "¥" + price;
          },
        },
      }).mount("#app");
    </script>
  </body>
</html>
```

## v-model

+ `v-model` 可以在组件上使用以实现双向绑定。

+ 首先让我们回忆一下 `v-model` 在原生元素上的用法：

  template

  ```javascript
  <input v-model="searchText" />
  ```

+ 在代码背后，模板编译器会对 `v-model` 进行更冗长的等价展开。因此上面的代码其实等价于下面这段：

  ```javascript
  <input
    :value="searchText"
    @input="searchText = $event.target.value"
  />
  ```

+ 而当使用在一个组件上时，`v-model` 会被展开为如下的形式：

  ```javascript
  <CustomInput
    :model-value="searchText"
    @update:model-value="newValue => searchText = newValue"
  />
  ```

+ 要让这个例子实际工作起来，`<CustomInput>` 组件内部需要做两件事：

  1. 将内部原生 `<input>` 元素的 `value` attribute 绑定到 `modelValue` prop
  2. 当原生的 `input` 事件触发时，触发一个携带了新值的 `update:modelValue` 自定义事件 

### 内部实现

![图片](https://qiniu.waite.wang/202310311437450.jpeg)

### 绑定其他表单

> 具体可以看: https://cn.vuejs.org/guide/essentials/forms.html#modifiers

> 在 HTML 中，`<label>` 标签的 `for` 属性被用来关联 `<label>` 标签和表单控件（如 `<input>`、`<textarea>`、`<select>` 等）。`for` 属性的值应该是你想要关联的表单控件的 `id`。 当 `<label>` 被点击时，与其关联的表单控件会获得焦点。

```html
<body>
  <div id="app"></div>

  <template id="my-app">
    <!-- 1.绑定textarea -->
    <label for="intro">
      自我介绍
      <textarea name="intro" id="intro" cols="30" rows="10" v-model="intro"></textarea>
    </label>
    <h2>intro: {{intro}}</h2>

    <!-- 2.checkbox -->
    <!-- 2.1.单选框 -->
    <label for="agree">
      <input id="agree" type="checkbox" v-model="isAgree"> 同意协议
    </label>
    <h2>isAgree: {{isAgree}}</h2>

    <!-- 2.2.多选框 -->
    <span>你的爱好: </span>
    <label for="basketball">
      <input id="basketball" type="checkbox" v-model="hobbies" value="basketball"> 篮球
    </label>
    <label for="football">
      <input id="football" type="checkbox" v-model="hobbies" value="football"> 足球
    </label>
    <label for="tennis">
      <input id="tennis" type="checkbox" v-model="hobbies" value="tennis"> 网球
    </label>
    <h2>hobbies: {{hobbies}}</h2>

    <!-- 3.radio -->
    <span>你的爱好: </span>
    <label for="male">
      <input id="male" type="radio" v-model="gender" value="male">男
    </label>
    <label for="female">
      <input id="female" type="radio" v-model="gender" value="female">女
    </label>
    <h2>gender: {{gender}}</h2>

    <!-- 4.select -->
    <span>喜欢的水果: </span>
    <select v-model="fruit" multiple size="2">
      <option value="apple">苹果</option>
      <option value="orange">橘子</option>
      <option value="banana">香蕉</option>
    </select>
    <h2>fruit: {{fruit}}</h2>
  </template>

  <script src="../js/vue.js"></script>
  <script>
    const App = {
      template: '#my-app',
      data() {
        return {
          intro: "Hello World",
          isAgree: false,
          hobbies: ["basketball"],
          gender: "",
          fruit: "orange"
        }
      },
      methods: {
        commitForm() {
          axios
        }
      }
    }

    Vue.createApp(App).mount('#app');
  </script>
</body>
```

![image-20231031200224648](https://qiniu.waite.wang/202310312002330.png)

目前我们在前面的案例中大部分的值都是在template中固定好的：

+ 比如gender的两个输入框值male、female；
+ 比如hobbies的三个输入框值basketball、football、tennis；

在真实开发中，我们的数据可能是来自服务器的，那么我们就可以先将值请求下来，绑定到data返回的对象中，再通过v-bind来进行值的绑定，这个过程就是值绑定。
### 修饰符

#### 内置修饰符

##### `.lazy`

默认情况下，`v-model` 会在每次 `input` 事件后更新数据 ([IME 拼字阶段的状态](https://cn.vuejs.org/guide/essentials/forms.html#vmodel-ime-tip)例外)。你可以添加 `lazy` 修饰符来改为在每次 `change` 事件后更新数据：

```html
<!-- 在 "change" 事件后同步更新而不是 "input" -->
<input v-model.lazy="msg" />
```

##### [`.number`](https://cn.vuejs.org/guide/essentials/forms.html#number)

如果你想让用户输入自动转换为数字，你可以在 `v-model` 后添加 `.number` 修饰符来管理输入：

另外，在我们进行逻辑判断时，如果是一个string类型，在可以转化的情况下会进行隐式转换的：

- 下面的score在进行判断的过程中会进行隐式转化的；

```javascript
const score = "100";if (score > 90) {  console.log("优秀");}
```

```html
<input v-model.number="age" />
```

如果该值无法被 `parseFloat()` 处理，那么将返回原始值。

`number` 修饰符会在输入框有 `type="number"` 时自动启用。

##### [`.trim`](https://cn.vuejs.org/guide/essentials/forms.html#trim)

如果你想要默认自动去除用户输入内容中两端的空格，你可以在 `v-model` 后添加 `.trim` 修饰符：

```html
<input v-model.trim="msg" />
```

#### 自定义的修饰符

在某些场景下，你可能想要一个自定义组件的 `v-model` 支持自定义的修饰符。

我们来创建一个自定义的修饰符 `capitalize`，它会自动将 `v-model` 绑定输入的字符串值第一个字母转为大写：

```html
<MyComponent v-model.capitalize="myText" />
```

组件的 `v-model` 上所添加的修饰符，可以通过 `modelModifiers` prop 在组件内访问到。在下面的组件中，我们声明了 `modelModifiers` 这个 prop，它的默认值是一个空对象：

```vue
<script>
export default {
  props: {
    modelValue: String,
    modelModifiers: {
      default: () => ({})
    }
  },
  emits: ['update:modelValue'],
  created() {
    console.log(this.modelModifiers) // { capitalize: true }
  }
}
</script>

<template>
  <input
    type="text"
    :value="modelValue"
    @input="$emit('update:modelValue', $event.target.value)"
  />
</template>
```

注意这里组件的 `modelModifiers` prop 包含了 `capitalize` 且其值为 `true`，因为它在模板中的 `v-model` 绑定 `v-model.capitalize="myText"` 上被使用了。

有了这个 prop，我们就可以检查 `modelModifiers` 对象的键，并编写一个处理函数来改变抛出的值。在下面的代码里，我们就是在每次 `<input />` 元素触发 `input` 事件时将值的首字母大写：

```vue
<script>
export default {
  props: {
    modelValue: String,
    modelModifiers: {
      default: () => ({})
    }
  },
  emits: ['update:modelValue'],
  methods: {
    emitValue(e) {
      let value = e.target.value
      if (this.modelModifiers.capitalize) {
        value = value.charAt(0).toUpperCase() + value.slice(1)
      }
      this.$emit('update:modelValue', value)
    }
  }
}
</script>

<template>
  <input type="text" :value="modelValue" @input="emitValue" />
</template>
```

### 多个 `v-model` 绑定

我们可以在单个组件实例上创建多个 `v-model` 双向绑定。

组件上的每一个 `v-model` 都会同步不同的 prop，而无需额外的选项：

```html
<UserName
  v-model:first-name="first"
  v-model:last-name="last"
/>
```

```html
<script>
export default {
  props: {
    firstName: String,
    lastName: String
  },
  emits: ['update:firstName', 'update:lastName']
}
</script>

<template>
  <input
    type="text"
    :value="firstName"
    @input="$emit('update:firstName', $event.target.value)"
  />
  <input
    type="text"
    :value="lastName"
    @input="$emit('update:lastName', $event.target.value)"
  />
</template>
```

