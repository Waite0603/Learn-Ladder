---
title: Webpack_Babel
icon: post
order: 2
date: 2023-11-17
---

## 什么是 Babel?

> https://babeljs.io/

> + Babel 是一个 JavaScript 编译器，可以将 ECMAScript 2015+ 代码转换为向后兼容的 JavaScript 版本，以便在当前和旧版浏览器或环境中运行。它还支持将 JSX 转换为普通 JavaScript 代码。Babel 是一个非常流行的工具，许多现代的 JavaScript 应用程序都使用它来构建和部署。
> + 事实上，在开发中我们很少直接去接触babel，但是babel对于前端开发来说，目前是不可缺少的一部分：
> + 开发中，我们想要使用ES6+的语法，想要使用TypeScript，开发React项目，它们都是离不开Babel的；所以，学习Babel对于我们理解代码从编写到线上的转变过程至关重要；

+ 以下是一个使用 Babel 的示例：
+ 假设我们有一个使用箭头函数和 const 声明的简单 JavaScript 模块：

```javascript
const greet = (name) => {
  console.log(`Hello, ${name}!`);
}

export default greet;
```

+ 如果我们想要在旧版浏览器中运行它，我们可以使用 Babel 将其转换为 ES5：

```javascript
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var greet = function greet(name) {
  console.log("Hello, ".concat(name, "!"));
};

var _default = greet;
exports.default = _default;
```

+ 这个转换过的代码可以在大多数浏览器中运行，即使它们不支持箭头函数或 const 声明。

## Babel 命令行使用

+ babel本身可以作为一个独立的工具（和postcss一样），不和webpack等构建工具配置来单独使用。
+ 如果我们希望在命令行尝试使用babel，需要安装如下库：
  + @babel/core：babel的核心代码，必须安装；
  + @babel/cli：可以让我们在命令行使用babel；

```less
npm install @babel/cli @babel/core -D
```

+ 使用babel来处理我们的源代码：
  - src：是源文件的目录；
  - –out-dir：指定要输出的文件夹dist；
  - --out-file: 指定要输出的文件dist；

```less
npx babel src --out-dir dist
npx babel src --out-file dist
```

## 插件

+ Babel 的插件是用于转换 JavaScript 代码的小型程序，可以添加到 Babel 配置中。Babel 插件可以执行各种任务，例如：
  + 转换语法：将新的 ECMAScript 特性转换为向后兼容的代码。
  + 转换 API：将使用新 API 的代码转换为旧 API。
  + 转换 JSX：将 JSX 转换为普通的 JavaScript 代码。

+ 以下是一些常见的 Babel 插件：
  + @babel/plugin-transform-arrow-functions: 将箭头函数转换为普通函数。
  + @babel/plugin-transform-block-scoping: 将 let 和 const 声明转换为 var 声明。
  + @babel/plugin-transform-classes: 将类转换为 ES5 构造函数。
  + @babel/plugin-transform-destructuring: 将解构赋值转换为普通赋值。
  + @babel/plugin-transform-object-assign: 将 Object.assign() 转换为 ES5 兼容的代码。
  + @babel/plugin-transform-react-jsx: 将 JSX 转换为普通的 JavaScript 代码。
  + @babel/plugin-transform-runtime: 避免在每个文件中重复使用 Babel 运行时代码。

+ 如何使用?
  + 比如我们需要转换箭头函数, const 转成 var，那么我们就可以使用箭头函数转换相关的插件：

```less
npm install @babel/plugin-transform-arrow-functions -D 
npm install @babel/plugin-transform-block-scoping -D

npx babel src --out-dir dist --plugins=@babel/plugin-transform-block-scoping ,@babel/plugin-transform-arrow-functions
```

## 预设 preset

Babel 的预设（preset）是一组预先配置的转换规则，用于将特定版本的 JavaScript 代码转换为向后兼容的旧版本。以下是一些常用的 Babel 预设：

1. @babel/preset-env: 根据目标环境自动确定需要的转换规则。它根据你在 .babelrc 或 babel.config.js 文件中的配置来确定需要转换的 JavaScript 特性。
2. @babel/preset-react: 用于转换 React JSX 语法的预设。它可以将 JSX 转换为普通的 JavaScript 代码。
3. @babel/preset-typescript: 用于转换 TypeScript 代码的预设。它可以将 TypeScript 的类型注解和其他特定语法转换为普通的 JavaScript 代码。
4. @babel/preset-flow: 用于转换 Flow 类型注解的预设。它可以将 Flow 的类型注解转换为普通的 JavaScript 代码。

这些预设可以根据你的项目需求进行选择和配置。你可以在 .babelrc 或 babel.config.js 文件中指定所需的预设，例如：

```javascript
module.exports = {
  presets: [
    "@babel/preset-env"
  ]
}
```

也可以

```less
npm install @babel/preset-env -D 
npx babel src --out-dir dist --presets=@babel/preset-env
```

## 原理

### 底层原理

+ babel是如何做到将我们的一段代码（ES6、TypeScript、React）转成另外一段代码（ES5）的呢？
  + 从一种源代码（原生语言）转换成另一种源代码（目标语言），这是什么的工作呢？
  + 就是编译器，事实上我们可以将babel看成就是一个编译器。
  + Babel编译器的作用就是将我们的源代码，转换成浏览器可以直接识别的另外一段源代码；
+ Babel也拥有编译器的工作流程：
  + 解析（Parsing）：Babel首先将输入的JavaScript代码解析成抽象语法树（Abstract Syntax Tree，AST）。AST是一个用于表示代码结构的树状数据结构，它能够准确地描述代码的语法和语义。
  + 转换（Transformation）：在AST的基础上，Babel会应用一系列的插件和预设来进行代码转换。这些插件和预设可以执行各种转换操作，例如语法转换、代码优化、添加兼容性处理等。每个插件都负责处理AST中的特定节点，并根据需要进行修改或替换。
  + 生成（Generation）：转换完成后，Babel会将修改后的AST重新生成为JavaScript代码。这些生成的代码可以是与输入代码相同的版本，也可以是经过转换后的新代码。

+ https://github.com/jamiebuilds/the-super-tiny-compiler: 非常简单的编译器实现，旨在教授编译器原理和实践。

### 执行原理

> Babel的执行阶段

![image-20231116205304599](https://qiniu.waite.wang/202311162053777.png)

![image-20231116205317664](https://qiniu.waite.wang/202311162053832.png)

1. 词法分析（Lexing）：将输入的源代码字符串转换为一个令牌（Token）序列。每个令牌代表源代码中的一个语法单元，例如标识符、运算符、括号等。
2. 语法分析（Parsing）：将令牌序列转换为抽象语法树（AST）。AST是一个用于描述代码结构的树状数据结构，它能够准确地描述源代码的语法和语义。
3. 转换（Transformation）：在AST的基础上，应用一系列的转换规则，以修改和优化AST。这些规则可以执行各种操作，例如语法转换、代码优化、添加兼容性处理等。
4. 代码生成（Code Generation）：将修改后的AST转换为目标语言的代码。在"The Super Tiny Compiler"中，目标语言是JavaScript。
5. 输出：输出生成的目标代码。

## babel-loader

+ babel-loader是一个用于在Webpack构建过程中将JavaScript代码转换的加载器（loader）。它是与Babel配合使用的常用工具之一。
+ 通过配置Webpack的规则，使用babel-loader可以将指定的JavaScript文件传递给Babel进行转换。Babel会根据配置的插件和预设，将源代码转换为目标浏览器或环境所支持的语法。
+ 指定使用的插件

![image-20231116220536704](https://qiniu.waite.wang/202311162205301.png)

+ presets 预设:  如果我们一个个去安装使用插件，那么需要手动来管理大量的babel插件，我们可以直接给webpack提供一个 preset，webpack会根据我们的预设来加载对应的插件列表，并且将其传递给babel。以下使用 `@babel/preset-env`

  + env
  + react
  + TypeScript

+ 使用 babel-loader 的一般步骤如下：

  1. 安装 babel-loader 和相关的Babel插件和预设：

  ```less
  npm install --save-dev babel-loader @babel/core @babel/preset-env webpack
  ```

  2. webpack.config.js，在其中配置 babel-loader：

  ```javascript
  module.exports = {
    entry: './src/index.js',
    output: {
      filename: 'bundle.js',
      path: __dirname + '/dist'
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env']
            }
          }
        }
      ]
    }
  };
  ```

## 配置文件

+ 我们可以将babel的配置信息放到一个独立的文件中，babel给我们提供了两种配置文件的编写：
  - babel.config.json（或者.js，.cjs，.mjs）文件；
  - babelrc.json（或者.babelrc，.js，.cjs，.mjs）文件；
+ 它们两个有什么区别呢？目前很多的项目都采用了多包管理的方式（babel本身、element-plus、umi等）；
  - .babelrc.json：早期使用较多的配置方式，但是对于配置Monorepos项目是比较麻烦的；
  - babel.config.json（babel7）：可以直接作用于Monorepos项目的子包，更加推荐；
  - 补充: *Monorepo* 是一种项目代码管理方式,指单个仓库中管理多个项目,有助于简化代码共享、版本控制、构建和部署等方面的复杂性,并提供更好的可重用性和协作性, 类似 `@babel/preset-env` 这种写法大概率就是 Monorepo
+ 以下为 `babel.config.js`

```javascript
module.exports = {
  presets: [
    "@babel/preset-env"
  ]
}
```

+ 这样在 `webpack.config.js` 中只需要

```javascript
{
  test: /\.js$/,
  loader: "babel-loader"
}
```

## 在 Webpack 中使用 Vue

```less
npm install vue
```

```javascript
import { createApp } from 'vue';

createApp({
  template: "<h2>{{title}} - {{message}}</h2>",
  components: {

  },
  data() {
    return {
      title: "Hello World",
      message: "哈哈哈"
    }
  }
}).mount("#app");
```

> 此时重新 `build` 运行后不显示, 报错如下
>
> `runtime-core.esm-bundler.js:38 [Vue warn]: Component provided template option but runtime compilation is not supported in this build of Vue. Configure your bundler to alias "vue" to "vue/dist/vue.esm-bundler.js" at <App>` -> `runtime-core.esm-bundler.js:38`

> 这个错误是因为 Vue 3 默认不包含模板编译器，所以当你试图在组件中使用 `template` 选项时，你会看到这个警告。
>
> 要解决这个问题，你需要在 webpack 配置中添加一个别名，将 "vue" 指向 "vue/dist/vue.esm-bundler.js"。这个版本的 Vue 包含了模板编译器。

```javascript
// 在 main.js 中更改应用, 重新部署即可
import { createApp } from 'vue/dist/vue.esm-bundler.js';
```

> Vue打包后不同版本解析
>
> + vue(.runtime).global(.prod).js 是用于直接在浏览器中引入的全局版本，可以通过 `<script>` 标签来使用。
    + 我们之前通过CDN引入和下载的Vue版本就是这个版本；
    + 会暴露一个全局的Vue来使用；
> + vue(.runtime).esm-browser(.prod).js 是用于原生 ES 模块导入的版本，在支持 ES 模块的浏览器中可以使用 `<script type='module'>` 来引入。
> + vue(.runtime).esm-bundler.js 是用于构建工具（如webpack、rollup、parcel等）的版本，默认情况下会使用 vue.runtime.esm-bundler.js。如果需要解析模板（template），则需要手动指定 vue.esm-bundler.js。
> + vue.cjs(.prod).js 是用于服务器端渲染的版本，在 Node.js 中可以使用 require() 来引入。
>    + `require` 是 Node.js 中用于导入模块的函数。它是 CommonJS 模块系统的一部分，这是 Node.js 的默认模块系统。以下是一个 `require` 的基本用法示例：`const fs = require('fs');`在这个例子中，我们导入了 Node.js 的内置 `fs`（文件系统）模块。
>    + `require` 函数也可以用来导入你自己的模块。例如，如果你有一个名为 `myModule.js` 的文件，你可以这样导入它：`const myModule = require('./myModule.js');` 注意，当导入自己的模块时，你需要提供模块的相对路径（以 `./` 开头）。
>    + 然而，`require` 并不是 ECMAScript（JavaScript 的标准化规范）的一部分，因此它在浏览器环境中通常不可用。在浏览器环境中，你通常会使用 ECMAScript 的 `import` 和 `export` 语句来导入和导出模块。

+ 接下来我们把 main.js 中的 vue 代码抽离为单文件组件(SFC)

```vue
<!-- /vue/App.vue -->
<template>
  <h2>我是Vue渲染出来的</h2>
  <h2>{{title}}</h2>
  <hello-world></hello-world>
</template>

<script>
  import HelloWorld from './HelloWorld.vue';

  export default {
    components: {
      HelloWorld
    },
    data() {
      return {
        title: "Hello World",
        message: "哈哈哈"
      }
    },
    methods: {

    }
  }
</script>

<style scoped>
  h2 {
    color: red;
  }
</style>
```

+ 重新打包, 报错：我们需要合适的Loader来处理文件。

```less
npm install vue-loader -D
```

+ 配置 `webpack.config.js`

```javascript
{
  test: /\.vue$/,
  loader: "vue-loader"
}
```

+ 重新 build 仍然报错 `Error:vue-loader requires @vue/compiler present the dependency tree`, 打包依然会报错，这是因为我们必须添加@vue/compiler-sfc来对template进行解析：

  ```less
  npm install @vue/compiler-sfc -D
  ```

+ 重新打包即可支持App.vue的写法

