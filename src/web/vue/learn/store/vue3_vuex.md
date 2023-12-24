---
title: Vue3-Vuex
icon: post
order: 2
date: 2023-12-24
---

> Vue3 中推荐使用 pinia, 更具体可以看 https://gitee.com/lidongxuwork/bilibili-matching-code/blob/master/Web%E5%89%8D%E7%AB%AF/5-%E6%A1%86%E6%9E%B6/V2.x/%E6%A6%82%E5%BF%B5/1-vuex%E4%BD%BF%E7%94%A8/0_%E7%AC%94%E8%AE%B0/vuex%E4%BD%BF%E7%94%A8.md#day01_vuex

## Vuex介绍

### Vuex是什么

Vuex 是一个专为 Vue.js 应用程序开发的**状态管理模式**。它采用**集中式**存储管理数据，以相应的规则保证状态以一种可预测的方式发生变化
![在这里插入图片描述](https://qiniu.waite.wang/202312232248202.png)

优点：

1. 能够在Vuex中集中管理共享的数居，易于开发和后期维护
2. 能够高效地实现组件之间的数据共享，提高开发效率
3. 存储在vuex中的数据都是响应式的，能够实时保持数据与页面的同步

###  vuex为何学

程序页面多, 数据变量多

1. 不同组件数据**保持同步**
2. 数据的修改都是**可追踪**

一个户外商店有两名员工，张三和李四

一天的早上，他们分别对**帐篷的数量**做了一次盘点，发现一共有三个帐篷

张三卖出去俩个，他以为库存里还有**一个**

李四卖出去一个，他以为库存里还有**两个**

而事实上是，库存现在已经为**零**

如果他们再接受客户的预订，就会出现库存**不足**的情况

> 张三和李四因为没有保持库存的数量的同步导致了尴尬，这个就是所谓的`数据保持同步`
>
> 店长需要知道, 谁卖出了多少个帐篷，这个行为我们称之为`数据修改是可追踪的`

![image-20210601212946879](https://qiniu.waite.wang/202312241613856.png)

###  vuex中存什么

**多个组件共享状态**，才存储在vuex中

某个组件中的私有数据，依旧存储在data中

例如：

- 登陆的用户名需要在**首页**, **个人中心**, **结算**页面使用, 用户名存在vuex中
- 文章详情数据, 只有在文章详情页查看, 在自身data中声明

## 基本使用

1. 安装 vuex 依赖包

```less
  npm install vuex --save
```

2. 导入

```javascript
import Vuex from 'vuex'

app.use(Vuex)
```

3. 创建 store 对象

```javascript
const store = new Vuex.Store({
	// state 中存放的就是全局共享的数据
	state: { count: 0 }
})
```

4. 将 store 对象挂载到 vue 实例中

```javascript
new Vue({
  el: '#app',
  render: h => h(App),
  router
  // 将创建的共享数据对象挂载到 Vue 实例中
  // 所有的组件, 就可以直接从 store 中获取全局的数据
}).$mount('#app')
```

 ```javascript
// Vue3
import { createApp } from 'vue'
import { createStore } from 'vuex'

// 创建一个新的 store 实例
const store = createStore({
  state () {
    return {
      count: 0
    }
  },
  mutations: {
    increment (state) {
      state.count++
    }
  }
})

const app = createApp({ /* 根组件 */ })

// 将 store 实例作为插件安装
app.use(store)
 ```

## state

> state是唯一的公共数据源，统一存储

```javascript
// store/index.js
import { createStore } from 'vuex'
 
// 配置 Vuex
const store = createStore({
  state() {
    return {
      text: '我的博客 www.misterma.com',
      num: 12
    }
  },
  mutations: {
    changeText(state) {
      state.text = 'github https://github.com/changbin1997';
    },
    changeNum(state) {
      state.num ++;
    }
  }
});
 
export default store
```

### 使用

+ 方式1: 组件内 - **直接**使用

```javascript
this.$store.state.变量名
```

```javascript
import {useStore} from 'vuex';

const store = useStore();
console.log(store.state.变量名);
```

+ 方式2: 组件内 - **映射**使用 (推荐)

```javascript
import {computed} from 'vue';

const text = computed(() => store.state.text);
const num = computed(() => store.state.num);
```

> state是响应式的, 只要state值变化, 页面上使用的地方会自动更新同步

##  mutations

>  Vuex Mutations 则是用于修改状态的函数。在 Vuex 中，状态是通过 store 对象进行管理的，而 Mutations 则是通过提交（commit）来执行的。每个 Mutation 都是一个纯函数，它接收 state 对象作为第一个参数，并且可以接收额外的参数作为载荷（payload）。Mutation 函数用于同步地改变状态，它们在开发过程中可以帮助我们跟踪状态的变化。

在 Vue 3 中，Mutations 并不是唯一能修改 state 的地方。实际上，在 Vue 3 中，可以通过使用 Mutations、Actions 或直接操作 state 来修改状态。这是与 Vue 2 中的 Vuex 不同的地方。

在 Vue 3 中，可以使用 Mutations 来同步地改变状态，Actions 用于处理异步操作并提交 Mutations，而直接操作 state 则是为了简单的状态变化。这种方式使得状态管理更加灵活，并且能够更好地处理异步操作。

因此，在 Vue 3 中，Mutations 并不是唯一能修改 state 的地方，而是状态管理中的一部分，开发者可以根据具体情况选择合适的方式来修改状态。

> 以下是一个 mutations 与 store 结合的例子

```vue
<!-- App.vue -->

<template>
  <div>
    <!--输出 store 配置的 text 和 num-->
    <p>{{ store.state.text }}</p>
    <p>{{ store.state.num }}</p>
    <button type="button" @click="buttonClick">更改 text 和 num</button>
  </div>
</template>

<script setup>
import {useStore} from 'vuex';

const store = useStore();

function buttonClick() {
  // 更改 text 和 num
  store.commit('changeText');
  store.commit('changeNum');
}
</script>
```

```javascript
// store/index.js

import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/login',
    name: 'login',
    component: () => import('@/components/login.vue')
  },
  {
    path: '/main',
    name: 'main',
    component: () => import('@/components/main.vue')
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
```

## actions

在 Vue 3 中，使用 Vuex 的 Actions 是一种处理异步操作并提交 Mutations 的方式。Actions 允许您在应用程序中执行异步操作，例如从服务器获取数据，然后再提交 Mutations 来修改状态。以下是在 Vue 3 中使用 Vuex Actions 的基本方法：

```javascript
const store  = new Vuex.Store({
    // ...省略state和mutations此处
    actions: {
        asyncAddCount(store, num){
            setTimeout(() => { // 1秒后, 异步提交给add的mutations
                store.commit('addCount', num)
            }, 1000)
        },
        asyncSubCount(store, num) {
            setTimeout(() => { // 1秒后, 异步提交给sub的mutations
                store.commit('subCount', num)
            }, 1000)
        }
    }
})
```

## getters

Vuex Getters 是用于从 store 中获取状态的函数。Getters 允许您在 store 中计算状态或过滤数据，并且可以在组件中像计算属性一样使用。以下是在 Vue 3 中定义和使用 Vuex Getters 的基本方法：

```javascript
const store = new Vuex.Store({
    // ...省略其他
    getters: {
        allCount(state) {
            return state.goodsList.reduce((sum, obj) => {
                if (obj.goods_state === true) { // 选中商品才累加数量
                    sum += obj.goods_count;
                }
                return sum;
            }, 0)
        },
        allPrice(state) {
            return state.goodsList.reduce((sum, obj) => {
                if (obj.goods_state) {
                    sum += obj.goods_count * obj.goods_price
                }
                return sum;
            }, 0)
        }
    }
})
```

### 用getters的2种方式

- 方式1: 组件内 - **直接**使用

  语法:

  ```javascript
  this.$store.getters.计算属性名
  ```

- 方式2: 组件内 - **映射**使用

  语法:

  ```javascript
  // 1. 拿到mapGetters辅助函数
  import { mapGetters } from 'vuex'
  export default {
  	computed: {
          // 2. 把getters里属性映射到原地
        ...mapGetters(['getters里的计算属性名'])
      }   
  }
  ```

### MyFooter.vue里使用

- 使用2种方式给计算属性值

```javascript
<script>
import { mapGetters } from 'vuex'
export default {
  computed: {
    allCount(){
     return this.$store.getters.allCount;
    },
    ...mapGetters(['allPrice'])
  }
}
</script>
```