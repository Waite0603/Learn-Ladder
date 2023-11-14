---
title: Webpack
icon: post
order: 1
date: 2023-11-15
---


## 认识webpack

+ 事实上随着前端的快速发展，目前前端的开发已经变的越来越复杂了：
  + 比如开发过程中我们需要通过模块化的方式来开发；
  + 比如也会使用一些高级的特性来加快我们的开发效率或者安全性，比如通过ES6+、TypeScript开发脚本逻辑， 通过sass、less等方式来编写 css 样式代码；
  + 比如开发过程中，我们还希望实时的监听文件的变化来并且反映到浏览器上，提高开发的效率；
  + 比如开发完成后我们还需要将代码进行压缩、合并以及其他相关的优化；
+ 但是对于很多的前端开发者来说，并不需要思考这些问题，日常的开发中根本就没有面临这些问题：

  + 这是因为目前前端开发我们通常都会直接使用三大框架来开发：Vue、React、Angular；
  + 但是事实上，这三大框架的创建过程我们都是借助于脚手架（CLI）的；
  + 事实上Vue-CLI、create-react-app、Angular-CLI都是基于webpack来帮助我们支持模块化、less、 TypeScript、打包优化等的；

## Webpack到底是什么呢？

> https://webpack.docschina.org/

> 本质上，**webpack** 是一个用于现代 JavaScript 应用程序的 *静态模块打包工具*。当 webpack 处理应用程序时，它会在内部从一个或多个入口点构建一个 [依赖图(dependency graph)](https://webpack.docschina.org/concepts/dependency-graph/)，然后将你项目中所需的每一个模块组合成一个或多个 *bundles*，它们均为静态资源，用于展示你的内容。
>
> + 打包bundler：webpack可以将帮助我们进行打包，所以它是一个打包工具
> + 模块化module：webpack默认支持各种模块化开发，ES Module、CommonJS、AMD等；

![image-20231102102926580](https://qiniu.waite.wang/202311021029845.png)

## Vue项目加载的文件有哪些呢？

+ JavaScript的打包：
  + 将ES6转换成ES5的语法；
  + TypeScript的处理，将其转换成JavaScript；
+ Css的处理：
  - CSS文件模块的加载、提取；
  - Less、Sass等预处理器的处理；
+ 资源文件img、font：
  - 图片img文件的加载；
  - 字体font文件的加载；
+ HTML资源的处理：
  - 打包HTML资源文件；
+ 处理vue项目的SFC文件.vue文件

## Webpack的使用

+ webpack的官方文档是[webpack](https://webpack.js.org/)
  + webpack的中文官方文档是[webpack](https://webpack.docschina.org/)
+ Webpack的运行是依赖Node环境的，所以我们电脑上必须有Node环境
  - 所以我们需要先安装Node.js，并且同时会安装npm；
  - Node官方网站：[Node.js](https://nodejs.org/)

### Webpack的安装

+ webpack的安装目前分为两个：webpack、webpack-cli
+ 执行webpack命令，会执行node_modules下的.bin目录下的webpack；
+ webpack在执行时是依赖webpack-cli的，如果没有安装就会报错；
+ 而webpack-cli中代码执行时，才是真正利用webpack进行编译和打包的过程；
+ 所以在安装webpack时，我们需要同时安装webpack-cli（第三方的脚手架事实上是没有使用webpack-cli的，而是类似于自 己的vue-service-cli的东西）

![img](https://qiniu.waite.wang/202311051542731.png)

### Webpack的默认打包

> ES6、CommonJS等模块化语法在浏览器中是不被直接识别的，但是通过使用Webpack的打包功能，可以将这些语法转换为浏览器可以识别的语法。Webpack可以将多个模块打包成一个或多个浏览器可识别的文件，使得在浏览器中可以正常运行这些模块化代码。

+ 我们可以通过webpack进行打包，之后运行打包之后的代码

  - 在目录下直接执行 webpack 命令

```
webpack
```

+ 生成一个 dist 文件夹，里面存放一个main.js的文件，就是我们打包之后的文件：

  - 这个文件中的代码被压缩和丑化了；
  - 另外我们发现代码中依然存在ES6的语法，比如箭头函数、const等，这是因为默认情况下webpack并不清楚我们打包后的文 件是否需要转成ES5之前的语法，后续我们需要通过babel来进行转换和设置；

+ 我们发现是可以正常进行打包的，但是有一个问题，webpack是如何确定我们的入口的呢？

  - 事实上，当我们运行webpack时，webpack会查找当前目录下的 src/index.js作为入口；
  - 所以，如果当前项目中没有存在 src/index.js 文件，那么会报错；

+ 当然，我们也可以通过配置来指定入口和出口

```css
npx webpack --entry ./src/main.js --output-path ./build
```

### webpack 局部安装

1. 版本控制：通过在项目中局部安装Webpack，可以确保每个项目使用的Webpack版本是一致的，避免不同项目之间的版本冲突。
2. 简化部署：将Webpack安装在项目的本地目录中，可以简化项目的部署过程。只需要将整个项目目录复制到其他环境中，不需要再次安装全局的Webpack。
3. 隔离环境：每个项目可以拥有自己独立的Webpack配置和插件，不会受到其他项目的影响。这样可以更灵活地根据项目需求进行定制和配置。
4. 可移植性：通过局部安装Webpack，可以将整个项目打包成一个可移植的文件夹，方便在不同环境中进行迁移和共享。

+ 第一步：创建package.json文件，用于管理项目的信息、库依赖等

```csharp
npm init
```

+ 第二步：安装局部的webpack

```csharp
npm install webpack webpack-cli --save-dev
// -D(--save-dev) 开发依赖
```

+ 第三步：使用局部的webpack

```undefined
npx webpack
```

+ 第四步：在 package.json 中创建scripts脚本，执行脚本打包即可

```coffeescript
# package
"scripts": {
    "build": "webpack"
}
# cmd
npm run build
```

![image-20231105235229201](https://qiniu.waite.wang/202311052352789.png)

## Webpack配置

### Webpack 配置文件

+ 在通常情况下，webpack需要打包的项目是非常复杂的，并且我们需要一系列的配置来满足要求，默认配置必然 是不可以的。
+ 我们可以在根目录下创建一个webpack.config.js文件，来作为webpack的配置文件：

```javascript
const path = require('path');

module.exports = {
  entry: "./src/main.js",
  output: {
    path: path.resolve(__dirname, "./build"),
    filename: "bundle.js"
  }
}
```

+ 继续执行webpack命令，依然可以正常打包

```coffeescript
npm run build
```

### 指定配置文件

+ 但是如果我们的配置文件并不是webpack.config.js的名字，而是其他的名字呢？

  - 比如我们将webpack.config.js修改成了 wk.config.js；
  - 这个时候我们可以通过 --config 来指定对应的配置文件；

```
webpack --config wk.config.js
```

+ 但是每次这样执行命令来对源码进行编译，会非常繁琐，所以我们可以在package.json中增加一个新的脚本：

```
"build": "webpack --config wk.config.js"
```

+ 之后我们执行 npm run build来打包即可。

## Webpack的依赖

Webpack通过以下步骤对项目进行打包：

1. 配置：创建一个Webpack配置文件（通常命名为webpack.config.js），在其中定义打包的入口文件、输出文件的路径、加载器和插件等。
2. 入口：在配置文件中指定打包的入口文件，可以是单个文件或多个文件,  从入口开始，会生成一个 依赖关系图，这个依赖关系图会包含应用程序中所需的所有模块（比如 js 文件、css 文件、图片、字体等), 然后遍历图结构，打包一个个模块（根据文件的不同使用不同的loader来解析）；
3. 加载器：根据需要，配置加载器来处理不同类型的文件。例如，使用babel-loader来转换ES6+代码，使用 css-loader 和 style-loader 来处理CSS文件。
4. 插件：根据需要，配置插件来执行额外的任务。例如，使用html-webpack-plugin生成HTML文件，使用mini-css-extract-plugin提取CSS文件。
5. 输出：在配置文件中指定打包输出的路径和文件名。
6. 运行：在命令行中运行webpack命令，Webpack将根据配置文件进行打包，并生成输出文件。

在运行Webpack命令时，可以使用不同的参数和选项来控制打包的行为。例如，使用--mode参数指定打包的模式（开发模式或生产模式），使用--watch选项启用监听模式等。

![img](https://qiniu.waite.wang/202311060009812.png)

## loader的使用

> https://webpack.docschina.org/loaders/
>
> 在 Webpack5 以后会采用 asset module type 来替代 loader

> 在Webpack中，Loader是用于对不同类型的文件进行转换和处理的模块。它们作为Webpack的一部分，用于在打包过程中对文件进行预处理。
>
> Loader可以将不同类型的文件（如JavaScript、CSS、图片等）转换为模块，以便在应用程序中使用。它们可以执行各种任务，例如将ES6+代码转换为ES5语法、处理CSS文件中的样式、压缩和优化图像等。
>
> Loader通常以链式调用的方式使用，可以根据需要配置多个Loader来处理文件。每个Loader都会对文件进行一次转换，并将转换后的结果传递给下一个Loader，直到最后一个Loader将最终的结果返回给Webpack进行打包。
>
> Loader的配置是通过Webpack的配置文件（通常是webpack.config.js）中的module.rules字段来完成。在这个字段中，可以指定不同类型文件的匹配规则和对应的Loader。

### css-loader 的使用

+ 对于加载css文件来说，我们需要一个可以读取css文件的loader；
+ 这个loader最常用的是css-loader；
+ css-loader的安装：

```
npm install css-loader -D
npm install css-loader --save-dev
```

+ 如何使用这个loader来加载css文件呢？有三种方式：
  - 内联方式；
  - CLI方式（webpack5中不再使用）；
  - 配置方式；

1. 内联方式：内联方式使用较少，因为不方便管理；

   - 在引入的样式前加上使用的loader，并且使用 ! 分割；

```css
import "css-loader!../css/style.css"
```

2. 配置方式

+ 配置方式表示的意思是在我们的webpack.config.js文件中写明配置信息：
  - module.rules中允许我们配置多个loader（因为我们也会继续使用其他的loader，来完成其他文件的加载)
  - 这种方式可以更好的表示loader的配置，也方便后期的维护，同时也让你对各个Loader有一个全局的概览
+ module.rules的配置如下：
  + rules属性对应的值是一个数组：[Rule]
  + 数组中存放的是一个个的Rule，Rule是一个对象，对象中可以设置多个属性：
    + test属性：用于对 resource（资源）进行匹配的，通常会设置成正则表达式；
    + use属性：对应的值时一个数组：[UseEntry]
      + UseEntry是一个对象，可以通过对象的属性来设置一些其他属性
        + loader：必须有一个 loader属性，对应的值是一个字符串；
        + options：可选的属性，值是一个字符串或者对象，值会被传入到loader中；
        + query：目前已经使用options来替代；
      + 传递字符串（如：use: [ 'style-loader' ]）是 loader 属性的简写方式（如：use: [ { loader: 'style-loader'} ]）；
    + loader属性： Rule.use: [ { loader } ] 的简写

```css
module.exports = {
  // ...
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      }
    ]
  }
};
```

### style-loader

+ 我们已经可以通过css-loader来加载css文件了

  + 但是你会发现这个css在我们的代码中并没有生效（页面没有效果）。

+ 因为css-loader只是负责将.css文件进行解析，并不会将解析之后的css插入到页面中；

+ 如果我们希望再完成插入style的操作，那么我们还需要另外一个loader，就是style-loader；

+ 安装style-loader：

```
npm install style-loader -D
```

+ 那么我们应该如何使用style-loader：
  - 在配置文件中，添加style-loader；
  - 注意：因为loader的执行顺序是从右向左（或者说从下到上，或者说从后到前的），所以我们需要将style-loader写到 css-loader 的前面；

```javascript
use: ['style-loader', 'css-loader']
```

### Less工具处理

+ 我们可以使用less工具来完成它的编译转换：

```coffeescript
npm install less -D
```

+ 执行如下命令：

```cobol
npm install less -D npx lessc ./src/css/title.less title.css
```

#### less-loader处理

+ 但是在项目中我们会编写大量的css，它们如何可以自动转换呢？

  - 这个时候我们就可以使用less-loader，来自动使用less工具转换less到css；

```coffeescript
npm install less-loader -D
```

```json
{
    test: /\.less$/,
    use: [
        "style-loader",
        "css-loader",
        "less-loader"
    ]	
}
```

### postcss-loader(认识)

+ 什么是PostCSS呢？
  - PostCSS是一个通过JavaScript来转换样式的工具；
  - 这个工具可以帮助我们进行一些CSS的转换和适配，比如自动添加浏览器前缀、css样式的重置； p但是实现这些功能，我们需要借助于PostCSS对应的插件；
+ 如何使用PostCSS呢？主要就是两个步骤：
  - 第一步：查找PostCSS在构建工具中的扩展，比如webpack中的postcss-loader；
  - 第二步：选择可以添加你需要的PostCSS相关的插件；

#### 命令行使用postcss

+ 安装一下它们：postcss、postcss-cli

```coffeescript
npm install postcss postcss-cli -D
```

+ 我们编写一个需要添加前缀的css：
  - [Autoprefixer CSS online](https://autoprefixer.github.io/)
  - 我们可以在上面的网站中查询一些添加css属性的样式；
  - 在Webpack中，PostCSS通常用于对CSS文件进行预处理和后处理。您可以使用PostCSS来编写现代CSS语法，然后使用各种插件对其进行处理，例如自动添加CSS前缀、压缩CSS等。

#### 插件autoprefixer

+ 因为我们需要添加前缀，所以要安装autoprefixer：

```coffeescript
npm install autoprefixer -D
```

+ 直接使用使用postcss工具，并且制定使用autoprefixer

```cobol
npx postcss --use autoprefixer -o end.css ./src/css/style.css
```

> 转化的结果如下 

```css
.title {
  user-select: none;
}

.title {
  -webkit-user-select: none;
     -moz-user-select: none;
      -ms-user-select: none;
          user-select: none;
}
/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRlc3QuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UseUJBQWlCO0tBQWpCLHNCQUFpQjtNQUFqQixxQkFBaUI7VUFBakIsaUJBQWlCO0FBQ25CIiwiZmlsZSI6ImRlbW8uY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRpdGxlIHtcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XG59Il19 */
```

#### postcss-loader

+ 真实开发中我们必然不会直接使用命令行工具来对css进行处理，而是可以借助于构建工具：

  - 在webpack中使用postcss就是使用postcss-loader来处理的；

+ 我们来安装postcss-loader：

```coffeescript
npm install postcss-loader -D
```

+ 因为postcss需要有对应的插件才会起效果，所以我们需要配置它的plugin；

```css
use: [
	{
		loading: "postcss-loader",
		options: {
			postcssOptions: {
				plugins: [
					require('autoprefixer')
				] 
			}
		}
	}
]
```

+ 我们可以将 postcss 配置分离, 根目录下新建 postcss.config.js

```javascript
module.exports = {
  plugins: [
    require("postcss-preset-env")
  ]
}
```

+ 这样在 webpack.config 中只需要 添加 `postcss-loader` 即可

#### postcss-preset-env

> `postcss-preset-env` 是一个 PostCSS 插件，它允许您使用最新的 CSS 特性，同时它会根据您的目标环境自动添加必要的回退。
>
> 这个插件包含了 autoprefixer（自动添加浏览器前缀），cssnano（压缩 CSS），以及一些其他的 PostCSS 插件。这意味着您可以在 CSS 中使用最新的特性，例如 CSS Grid，CSS Variables，等等，而不需要担心兼容性问题。
>
> 在您的 `postcss.config.js` 文件中，您已经将 `postcss-preset-env` 添加为一个插件，这意味着当您运行 PostCSS 时，它将使用 `postcss-preset-env` 来处理您的 CSS 文件。

+ 事实上，在配置postcss-loader时，我们配置插件并不需要使用autoprefixer。

+ 我们可以使用另外一个插件：postcss-preset-env

  + postcss-preset-env也是一个postcss的插件；
  + 它可以帮助我们将一些现代的CSS特性，转成大多数浏览器认识的CSS，并且会根据目标浏览器或者运行时环境 添加所需的polyfill；
  + 也包括会自动帮助我们添加 autoprefixer（所以相当于已经内置了 autoprefixer）；

+ 首先，我们需要安装 postcss-preset-env：

```coffeescript
npm install postcss-preset-env -D
```

+ 之后，我们直接修改掉之前的 autoprefixer 即可;

### file-loader

+ 要处理jpg、png等格式的图片，我们也需要有对应的loader：file-loader

  + file-loader的作用就是帮助我们处理import/require()方式引入的一个文件资源，并且会将它放到我们输出的文件夹中；
  + 当然我们待会儿可以学习如何修改它的名字和所在文件夹；

+ 安装file-loader：

```coffeescript
npm install file-loader -D
```

+ 配置处理图片的Rule：

```json
{
  test: /\.(jpe?g|png|gif|svg)$/,
  type: "asset",
  generator: {
    filename: "img/[name]_[hash:6][ext]"
  },
  parser: {
    dataUrlCondition: {
      maxSize: 100 * 1024
    }
  }
}
```

### url-loader

- url-loader和file-loader的工作方式是相似的，但是可以将较小的文件，转成base64的URI。

- 安装url-loader：

```coffeescript
url-loader npm install url-loader -D 
```

+ 显示结果是一样的，并且图片可以正常显示；

![image-20231111211324041](https://qiniu.waite.wang/202311112113242.png)

+ 但是在dist文件夹中，我们会看不到图片文件：
  - 这是因为我的两张图片的大小分别是38kb和295kb；
  - 默认情况下url-loader会将所有的图片文件转成base64编码

```javascript
{
  test: /\.(jpe?g|png|gif|svg)$/,
  use: {
    loader: "url-loader",
    options: {
      // outputPath: "img",
      name: "img/[name]_[hash:6].[ext]",
      limit: 100 * 1024
    }
  }
}
```

#### url-loader的limit

+ 但是开发中我们往往是小的图片需要转换，但是大的图片直接使用图片即可
  - 这是因为小的图片转换base64之后可以和页面一起被请求，减少不必要的请求过程；
  - 而大的图片也进行转换，反而会影响页面的请求速度；
+ 那么，我们如何可以限制哪些大小的图片转换和不转换呢？
  - url-loader有一个options属性limit，可以用于设置转换的限制；
  - 下面的代码38kb的图片会进行base64编码，而295kb的不会；

### 字体文件加载

```javascript
{
  test: /\.(eot|ttf|woff2?)$/,
  use: {
    loader: "file-loader",
    options: {
      // outputPath: "font",
      name: "font/[name]_[hash:6].[ext]"
    }
  }
},
{
  test: /\.(eot|ttf|woff2?)$/,
  type: "asset/resource",
  generator: {
    filename: "font/[name]_[hash:6][ext]"
  }
}
```



## 文件命名规则

+ 有时候我们处理后的文件名称按照一定的规则进行显示：
  - 比如保留原来的文件名、扩展名，同时为了防止重复，包含一个hash值等；
+ 这个时候我们可以使用PlaceHolders来完成，webpack给我们提供了大量的PlaceHolders来显示不同的内容：
  + https://webpack.js.org/loaders/file-loader/#placeholders
+ 我们这里介绍几个最常用的placeholder：
  - [ext]： 处理文件的扩展名；
  - [name]：处理文件的名称；
  - [hash]：文件的内容，使用MD4的散列函数处理，生成的一个128位的hash值（32个十六进制）；
  - [contentHash]：在file-loader中和[hash]结果是一致的（在webpack的一些其他地方不一样，后面会讲到）；
  - [`hash:<length>`]：截图hash的长度，默认32个字符太长了；
  - [path]：文件相对于webpack配置文件的路径；

### 设置文件名称

- 那么我们可以按照如下的格式编写：
- 这个也是vue的写法；

![img](https://qiniu.waite.wang/202311061505056.png)

### 设置文件的存放路径

- 刚才通过 img/ 已经设置了文件夹，这个也是vue、react脚手架中常见的设置方式
  - 其实按照这种设置方式就可以了；
  - 当然我们也可以通过outputPath来设置输出的文件夹；

![img](https://qiniu.waite.wang/202311061506379.png)

## asset module type

+ 我们当前使用的webpack版本是webpack5：
  - 在webpack5之前，加载这些资源我们需要使用一些loader，比如raw-loader 、url-loader、file-loader；
  - 在webpack5开始，我们可以直接使用资源模块类型（asset module type），来替代上面的这些loader；
+ 资源模块类型(asset module type)，通过添加 4 种新的模块类型，来替换所有这些 loader：
  - asset/resource 发送一个单独的文件并导出 URL。之前通过使用 file-loader 实现；
  - asset/inline 导出一个资源的 data URI。之前通过使用 url-loader 实现；
  - asset/source 导出资源的源代码。之前通过使用 raw-loader 实现；
  - asset 在导出一个 data URI 和发送一个单独的文件之间自动选择。之前通过使用 url-loader，并且配置资源体积限制实现；

### asset module type的使用

- 比如加载图片，我们可以使用下面的方式：

```javascript
{
  test: /\.(jpe?g|png|gif|svg)$/,
  type: "asset",
  // 自定义文件的输出路径和文件名
  generator: {
    filename: "img/[name]_[hash:6][ext]"
  },
  parser: {
    dataUrlCondition: {
      maxSize: 100 * 1024
    }
  }
}
```

## Plugin

+ Loader是用于特定的模块类型进行转换；
+ Plugin可以用于执行更加广泛的任务，比如打包优化、资源管理、环境变量注入等；

![image-20231112151429444](https://qiniu.waite.wang/202311121514761.png)

### CleanWebpackPlugin

+ 每次修改了一些配置，重新打包时，都需要手动删除dist文件夹：
+ 我们可以借助于一个插件来帮助我们完成，这个插件就是CleanWebpackPlugin；
+ 首先，我们先安装这个插件：

```less
 npm install clean-webpack-plugin -D
```

+ 之后在插件中配置：

```javascript
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
  plugins: [
    new CleanWebpackPlugin();
  ]
};
```

### HtmlWebpackPlugin

+ 我们的HTML文件是编写在根目录下的，而最终打包的dist文件夹中是没有index.html文件的。
+ 在进行项目部署的时，必然也是需要有对应的入口文件index.html；
+ 所以我们也需要对index.html进行打包处理；

+ 对HTML进行打包处理我们可以使用另外一个插件：HtmlWebpackPlugin；

```less
npm install html-webpack-plugin -D
```

#### 自定义HTML模板

+ 如果我们想在自己的模块中加入一些比较特别的内容：
  - 比如添加一个noscript标签，在用户的JavaScript被关闭时，给予响应的提示；
  - 比如在开发vue或者react项目时，我们需要一个可以挂载后续组件的根标签

+ 这个我们需要一个属于自己的index.html模块：

> public/index.html

```html
<!DOCTYPE html>
<html lang="">
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width,initial-scale=1.0">
    <link rel="icon" href="<%= BASE_URL %>favicon.ico">
    <title><%= htmlWebpackPlugin.options.title %></title>
  </head>
  <body>
    <noscript>
      <strong>We're sorry but <%= htmlWebpackPlugin.options.title %> doesn't work properly without JavaScript enabled. Please enable it to continue.</strong>
    </noscript>
    <div id="app"></div>
    <!-- built files will be auto injected -->
  </body>
</html>
```

+ 上面的代码中，会有一些类似这样的语法<% 变量 %>，这个是EJS模块填充数据的方式。
  + 在配置 HtmlWebpackPlugin 时，我们可以添加如下配置：
    + template：指定我们要使用的模块所在的路径；
    + title：在进行 htmlWebpackPlugin.options.title 读取时，就会读到该信息；


```javascript
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  plugins: [
      new HtmlWebpackPlugin({
      template: "./public/index.html",
      title: "哈哈哈哈"
    })
  ]
}; 
```

### DefinePlugin

> https://github.com/jantimon/html-webpack-plugin

+ 因为在模板中使用了 `BASE_URL`, 但是我们并没有设置过这个常量值，所以会出现没有定义的错误 - `BASE_URL is not defined`
+ 这个时候我们可以使用DefinePlugin插件
+ DefinePlugin允许在编译时创建配置的全局常量，是一个webpack内置的插件（不需要单独安装）：

```javascript
const { DefinePlugin } = require("webpack");

module.exports = {
  plugins: [
      new DefinePlugin({
      BASE_URL: "'./'"
    })
  ]
}; 
```

### CopyWebpackPlugin

+ `CopyWebpackPlugin` 是一个用于 webpack 的插件，它的主要功能是将单个文件或整个目录复制到构建目录。

  这个插件在以下情况下非常有用：

  1. 当你有一些静态资源（例如图片、字体或公共库）需要包含在你的构建中，但是这些资源并不需要通过 webpack 处理时。
  2. 当你需要将一些文件复制到构建目录，以便在部署应用程序时使用

+ 安装CopyWebpackPlugin插件：

```less
npm install copy-webpack-plugin -D
```

+ 接下来配置CopyWebpackPlugin即可：
  - 复制的规则在patterns中设置；
  - from：设置从哪一个源中开始复制；
  - to：复制到的位置，可以省略，会默认复制到打包的目录下；
  - globOptions：设置一些额外的选项，其中可以编写需要忽略的文件：
    - .DS_Store：mac目录下回自动生成的一个文件；
    - index.html：也不需要复制，因为我们已经通过HtmlWebpackPlugin完成了index.html的生成；

```javascript
const CopyWebpackPlugin = require('copy-webpack-plugin');

new CopyWebpackPlugin({
  patterns: [
    {
      from: "public",
      to: "./",
      globOptions: {
        ignore: [
          "**/index.html"
        ]
      }
    }
  ]
})
```

## Mode配置列表

```javascript
module.exports = {
  // 设置模式
  // development 开发阶段, 会设置development
  // production 准备打包上线的时候, 设置production
  mode: "development",
  // 设置source-map, 建立js映射文件, 方便调试代码和错误
  devtool: "source-map"
  }
```

