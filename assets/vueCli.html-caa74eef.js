import{_ as a}from"./plugin-vue_export-helper-c27b6911.js";import{r,o as t,c,b as n,d as e,e as s,a as l}from"./app-63fcbd5b.js";const o={},d=l('<blockquote><p>https://cli.vuejs.org/zh/</p></blockquote><p>什么是Vue脚手架？</p><ul><li>我们前面学习了如何通过webpack配置Vue的开发环境，但是在真实开发中我们不可能每一个项目从头来完成 所有的webpack配置，这样显示开发的效率会大大的降低；</li><li>所以在真实开发中，我们通常会使用脚手架来创建一个项目，Vue的项目我们使用的就是Vue的脚手架；</li><li>脚手架其实是建筑工程中的一个概念，在我们软件工程中也会将一些帮助我们搭建项目的工具称之为脚手架；</li><li>我们可以通过CLI选择项目的配置和创建出我们的项目；</li><li>Vue CLI已经内置了webpack相关的配置，我们不需要从零来配置；</li></ul><p>Vue CLI 是一个基于 Vue.js 进行快速开发的完整系统，提供：</p><ul><li>通过 <code>@vue/cli</code> 实现的交互式的项目脚手架。</li><li>通过 <code>@vue/cli</code> + <code>@vue/cli-service-global</code> 实现的零配置原型开发。</li><li>一个运行时依赖 (<code>@vue/cli-service</code>)，该依赖： <ul><li>可升级；</li><li>基于 webpack 构建，并带有合理的默认配置；</li><li>可以通过项目内的配置文件进行配置；</li><li>可以通过插件进行扩展。</li></ul></li><li>一个丰富的官方插件集合，集成了前端生态中最好的工具。</li><li>一套完全图形化的创建和管理 Vue.js 项目的用户界面。</li></ul><p>Vue CLI 致力于将 Vue 生态中的工具基础标准化。它确保了各种构建工具能够基于智能的默认配置即可平稳衔接，这样你可以专注在撰写应用上，而不必花好几天去纠结配置的问题。与此同时，它也为每个工具提供了调整配置的灵活性，无需 eject。</p><h2 id="vue-cli-安装" tabindex="-1"><a class="header-anchor" href="#vue-cli-安装" aria-hidden="true">#</a> Vue CLI 安装</h2>',7),u=n("p",null,"Node 版本要求",-1),p={href:"https://nodejs.org/",target:"_blank",rel:"noopener noreferrer"},v={href:"https://github.com/tj/n",target:"_blank",rel:"noopener noreferrer"},b={href:"https://github.com/creationix/nvm",target:"_blank",rel:"noopener noreferrer"},m={href:"https://github.com/coreybutler/nvm-windows",target:"_blank",rel:"noopener noreferrer"},g=l(`<ul><li>可以使用下列任一命令安装这个新的包：</li></ul><div class="language-less line-numbers-mode" data-ext="less"><pre class="language-less"><code>npm install <span class="token operator">-</span>g <span class="token variable">@vue</span><span class="token operator">/</span>cli
# OR
yarn global add <span class="token variable">@vue</span><span class="token operator">/</span>cli
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>安装之后，你就可以在命令行中访问 <code>vue</code> 命令。你可以通过简单运行 <code>vue</code>，看看是否展示出了一份所有可用命令的帮助信息，来验证它是否安装成功。你还可以用这个命令来检查其版本是否正确：</li></ul><div class="language-less line-numbers-mode" data-ext="less"><pre class="language-less"><code>vue <span class="token operator">-</span><span class="token operator">-</span>version
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>如需升级全局的 Vue CLI 包，请运行：</li></ul><div class="language-less line-numbers-mode" data-ext="less"><pre class="language-less"><code>npm update <span class="token operator">-</span>g <span class="token variable">@vue</span><span class="token operator">/</span>cli

# 或者
yarn global upgrade <span class="token operator">-</span><span class="token operator">-</span>latest <span class="token variable">@vue</span><span class="token operator">/</span>cli
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>上面列出来的命令是用于升级全局的 Vue CLI。如需升级项目中的 Vue CLI 相关模块（以 <code>@vue/cli-plugin-</code> 或 <code>vue-cli-plugin-</code> 开头），请在项目目录下运行 <code>vue upgrade</code>：</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>用法： upgrade [options] [plugin-name]

（试用）升级 Vue CLI 服务及插件

选项：
-t, --to &lt;version&gt;    升级 &lt;plugin-name&gt; 到指定的版本
-f, --from &lt;version&gt;  跳过本地版本检测，默认插件是从此处指定的版本升级上来
-r, --registry &lt;url&gt;  使用指定的 registry 地址安装依赖
--all                 升级所有的插件
--next                检查插件新版本时，包括 alpha/beta/rc 版本在内
-h, --help            输出帮助内容
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="创建一个项目" tabindex="-1"><a class="header-anchor" href="#创建一个项目" aria-hidden="true">#</a> 创建一个项目</h2><p>运行以下命令来创建一个新项目：</p><div class="language-less line-numbers-mode" data-ext="less"><pre class="language-less"><code>vue create hello<span class="token operator">-</span>world
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol><li>选择预设 <ul><li>Default ([Vue 3] babel, eslint): 选择 Vue3 版本, 并且默认选择 babel, eslint</li><li>Default ([Vue 2] babel, eslint): 选择 Vue2 版本, 并且默认选择 babel, eslint</li><li>Manually select features: 手动选择需要获取的特性</li></ul></li></ol><figure><img src="https://qiniu.waite.wang/202311221033285.png" alt="image-20231122103332793" tabindex="0" loading="lazy"><figcaption>image-20231122103332793</figcaption></figure><ol start="2"><li>我们选择 <code>Manually select features</code><ul><li>Babel: Babel是一个JavaScript编译器，用于将新版本的JavaScript代码转换为向后兼容的旧版本，以便在不同浏览器和环境中运行。</li><li>TypeScript: TypeScript是一种静态类型的JavaScript超集，它添加了类型注解和其他特性，以提供更强大的开发工具和更可靠的代码。</li><li>Progressive Web App (PWA) Support: PWA是一种使用现代Web技术构建的应用程序，可以在各种设备和平台上提供类似原生应用的体验。</li><li>Router: Vue Router是Vue.js官方提供的路由管理器，用于实现单页面应用程序（SPA）中的导航和路由功能。</li><li>Vuex: Vuex是Vue.js官方提供的状态管理库，用于在大型应用程序中管理和共享状态。</li><li>CSS Pre-processors: CSS预处理器（如Sass、Less）允许您在编写CSS时使用变量、嵌套规则、函数等高级功能，以提高样式表的可维护性和可重用性。</li><li>Linter / Formatter: 代码检查工具（如ESLint）用于强制执行一致的代码风格和检测潜在的错误。代码格式化工具（如Prettier）可自动格式化代码，使其符合统一的样式规范。</li><li>Unit Testing: 单元测试是一种软件测试方法，用于验证应用程序中各个部分的功能是否按预期工作。</li><li>E2E Testing: 端到端（End-to-End）测试是一种测试方法，用于模拟用户在应用程序中执行的实际操作，以验证整个应用程序的功能和流程。</li></ul></li></ol><figure><img src="https://qiniu.waite.wang/202311221036769.png" alt="image-20231122103618450" tabindex="0" loading="lazy"><figcaption>image-20231122103618450</figcaption></figure><ol start="3"><li>选择 Vue 版本</li></ol><figure><img src="https://qiniu.waite.wang/202311221036975.png" alt="image-20231122103654515" tabindex="0" loading="lazy"><figcaption>image-20231122103654515</figcaption></figure><ol start="4"><li><p>Pick a linter / formatter config: 选择的代码检查和格式化配置</p><ul><li>ESLint with error prevention only：仅使用ESLint进行错误检查，不应用其他格式化规则。</li><li>ESLint + Airbnb config：使用ESLint进行错误检查，并应用Airbnb JavaScript风格指南的格式化规则。</li><li>ESLint + Standard config：使用ESLint进行错误检查，并应用JavaScript Standard风格的格式化规则。</li><li>ESLint + Prettier：使用ESLint进行错误检查，并与Prettier代码格式化工具集成，以实现一致的代码样式</li></ul></li><li><p>Pick additional lint features: 可供选择的附加代码检查功能</p><ul><li>Lint on save：在保存文件时运行代码检查，以及在编辑器中进行实时错误检测和提示。</li><li>Lint and fix on commit：在提交代码时运行代码检查，并自动修复一些常见的问题，以确保提交的代码符合规范。</li></ul></li><li><p>Where do you prefer placing config for Babel, ESLint, etc.? 配置文件位置选择</p><ul><li>In dedicated config files：将Babel、ESLint等配置信息分别保存在它们各自的配置文件中（如.babelrc、.eslintrc等。</li><li>In package.json：将Babel、ESLint等配置信息保存在package.json文件的特定字段中，如babel、eslintConfig等。</li></ul></li><li><p>Save this as a preset for future projects? (y/N) 这是一个保存预设供以后使用的选项，如果您希望将当前配置保存为预设，以便在将来的项目中重用，可以选择“y”，否则选择“N”。</p></li></ol><blockquote><p>您还可以使用图形界面使用以下<code>vue ui</code>命令创建和管理项目：</p></blockquote><div class="language-less line-numbers-mode" data-ext="less"><pre class="language-less"><code>vue ui
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><figure><img src="https://cli.vuejs.org/ui-new-project.png" alt="界面预览" tabindex="0" loading="lazy"><figcaption>界面预览</figcaption></figure><h2 id="项目结构" tabindex="-1"><a class="header-anchor" href="#项目结构" aria-hidden="true">#</a> 项目结构</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>|-node_modules       -- 所有的项目依赖包都放在这个目录下
|-public             -- 公共文件夹
---|favicon.ico      -- 网站的显示图标
---|index.html       -- 入口的html文件
|-src                -- 源文件目录，编写的代码基本都在这个目录下
---|assets           -- 放置静态文件的目录，比如logo.png就放在这里
---|components       -- Vue的组件文件，自定义的组件都会放到这
---|App.vue          -- 根组件，这个在Vue2中也有
---|main.ts          -- 入口文件，因为采用了TypeScript所以是ts结尾
---|shims-vue.d.ts   -- 类文件(也叫定义文件)，因为.vue结尾的文件在ts中不认可，所以要有定义文件
|-.browserslistrc    -- 在不同前端工具之间公用目标浏览器和node版本的配置文件，作用是设置兼容性
|-.eslintrc.js       -- Eslint的配置文件，不用作过多介绍
|-.gitignore         -- 用来配置那些文件不归git管理
|-package.json       -- 命令配置和包管理文件
|-README.md          -- 项目的说明文件，使用markdown语法进行编写
|-tsconfig.json      -- 关于TypeScript的配置文件
|-yarn.lock          -- 使用yarn后自动生成的文件，由Yarn管理，安装yarn包时的重要信息存储到yarn.lock文件中
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>在一个 Vue CLI 项目中，<code>@vue/cli-service</code> 安装了一个名为 <code>vue-cli-service</code> 的命令。你可以在 npm scripts 中以 <code>vue-cli-service</code>、或者从终端中以 <code>./node_modules/.bin/vue-cli-service</code> 访问这个命令。</p></blockquote><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token property">&quot;scripts&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
  <span class="token property">&quot;serve&quot;</span><span class="token operator">:</span> <span class="token string">&quot;vue-cli-service serve&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;build&quot;</span><span class="token operator">:</span> <span class="token string">&quot;vue-cli-service build&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;lint&quot;</span><span class="token operator">:</span> <span class="token string">&quot;vue-cli-service lint&quot;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>你可以通过 npm 或 Yarn 调用这些 script：</p><div class="language-less line-numbers-mode" data-ext="less"><pre class="language-less"><code>npm run serve
# OR
yarn serve
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,27),h={href:"https://github.com/npm/npx",target:"_blank",rel:"noopener noreferrer"},k=l(`<div class="language-less line-numbers-mode" data-ext="less"><pre class="language-less"><code>npx vue<span class="token operator">-</span>cli<span class="token operator">-</span>service serve
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="vue-cli-service-serve" tabindex="-1"><a class="header-anchor" href="#vue-cli-service-serve" aria-hidden="true">#</a> vue-cli-service serve</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>用法：vue-cli-service serve [options] [entry]

选项：

  --open    在服务器启动时打开浏览器
  --copy    在服务器启动时将 URL 复制到剪切版
  --mode    指定环境模式 (默认值：development)
  --host    指定 host (默认值：0.0.0.0)
  --port    指定 port (默认值：8080)
  --https   使用 https (默认值：false)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3),f=n("code",null,"vue-cli-service serve",-1),_={href:"https://github.com/webpack/webpack-dev-server",target:"_blank",rel:"noopener noreferrer"},x=n("code",null,"vue.config.js",-1),y={href:"https://cli.vuejs.org/zh/config/#devserver",target:"_blank",rel:"noopener noreferrer"},S=l("<p>命令行参数 <code>[entry]</code> 将被指定为唯一入口 (默认值：<code>src/main.js</code>，TypeScript 项目则为 <code>src/main.ts</code>)，而非额外的追加入口。尝试使用 <code>[entry]</code> 覆盖 <code>config.pages</code> 中的 <code>entry</code> 将可能引发错误。</p>",1),j={id:"vue-cli-service-build",tabindex:"-1"},E=n("a",{class:"header-anchor",href:"#vue-cli-service-build","aria-hidden":"true"},"#",-1),V={href:"https://cli.vuejs.org/zh/guide/cli-service.html#vue-cli-service-build",target:"_blank",rel:"noopener noreferrer"},w=l(`<div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>用法：vue-cli-service build [options] [entry|pattern]

选项：

  --mode        指定环境模式 (默认值：production)
  --dest        指定输出目录 (默认值：dist)
  --modern      面向现代浏览器带自动回退地构建应用
  --target      app | lib | wc | wc-async (默认值：app)
  --name        库或 Web Components 模式下的名字 (默认值：package.json 中的 &quot;name&quot; 字段或入口文件名)
  --no-clean    在构建项目之前不清除目标目录的内容
  --report      生成 report.html 以帮助分析包内容
  --report-json 生成 report.json 以帮助分析包内容
  --watch       监听文件变化
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>vue-cli-service build</code> 会在 <code>dist/</code> 目录产生一个可用于生产环境的包，带有 JS/CSS/HTML 的压缩，和为更好的缓存而做的自动的 vendor chunk splitting。它的 chunk manifest 会内联在 HTML 里。</p><p>这里还有一些有用的命令参数：</p>`,3),L=n("code",null,"--modern",-1),q={href:"https://cli.vuejs.org/zh/guide/browser-compatibility.html#%E7%8E%B0%E4%BB%A3%E6%A8%A1%E5%BC%8F",target:"_blank",rel:"noopener noreferrer"},C=n("code",null,"--target",-1),A={href:"https://cli.vuejs.org/zh/guide/build-targets.html",target:"_blank",rel:"noopener noreferrer"},I=n("li",null,[n("code",null,"--report"),e(" 和 "),n("code",null,"--report-json"),e(" 会根据构建统计生成报告，它会帮助你分析包中包含的模块们的大小。")],-1),B=l(`<h2 id="vue-cli-service-inspect" tabindex="-1"><a class="header-anchor" href="#vue-cli-service-inspect" aria-hidden="true">#</a> vue-cli-service inspect</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>用法：vue-cli-service inspect [options] [...paths]

选项：

  --mode    指定环境模式 (默认值：development)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果你想要设置 inspect 命令的选项，可以在命令后面添加对应的参数。例如，如果你想要查看生产环境的 webpack 配置，可以运行以下命令：<code>vue-cli-service inspect --mode production</code></p><p>你也可以通过在 vue.config.js 文件中配置 configureWebpack 选项来修改 webpack 配置。这个选项允许你返回一个对象或函数来修改默认的 webpack 配置。例如：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">configureWebpack</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token comment">// 添加一个插件</span>
    <span class="token punctuation">]</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,5),z=n("code",null,"vue-cli-service inspect",-1),P={href:"https://cli.vuejs.org/zh/guide/webpack.html#%E5%AE%A1%E6%9F%A5%E9%A1%B9%E7%9B%AE%E7%9A%84-webpack-config",target:"_blank",rel:"noopener noreferrer"};function T(N,W){const i=r("ExternalLinkIcon");return t(),c("div",null,[d,n("blockquote",null,[u,n("p",null,[e("Vue CLI 4.x 需要 "),n("a",p,[e("Node.js"),s(i)]),e(" v8.9 或更高版本 (推荐 v10 以上)。你可以使用 "),n("a",v,[e("n"),s(i)]),e("，"),n("a",b,[e("nvm"),s(i)]),e(" 或 "),n("a",m,[e("nvm-windows"),s(i)]),e(" 在同一台电脑中管理多个 Node 版本。")])]),g,n("p",null,[e("如果你可以使用 "),n("a",h,[e("npx"),s(i)]),e(" (最新版的 npm 应该已经自带)，也可以直接这样调用命令：")]),k,n("p",null,[f,e(" 命令会启动一个开发服务器 (基于 "),n("a",_,[e("webpack-dev-server"),s(i)]),e(") 并附带开箱即用的模块热重载 (Hot-Module-Replacement)。")]),n("p",null,[e("除了通过命令行参数，你也可以使用 "),x,e(" 里的 "),n("a",y,[e("devServer"),s(i)]),e(" 字段配置开发服务器。")]),S,n("h2",j,[E,e(),n("a",V,[e("vue-cli-service build"),s(i)])]),w,n("ul",null,[n("li",null,[L,e(" 使用"),n("a",q,[e("现代模式"),s(i)]),e("构建应用，为现代浏览器交付原生支持的 ES2015 代码，并生成一个兼容老浏览器的包用来自动回退。")]),n("li",null,[C,e(" 允许你将项目中的任何组件以一个库或 Web Components 组件的方式进行构建。更多细节请查阅"),n("a",A,[e("构建目标"),s(i)]),e("。")]),I]),B,n("blockquote",null,[n("p",null,[e("你可以使用 "),z,e(" 来审查一个 Vue CLI 项目的 webpack config。更多细节请查阅"),n("a",P,[e("审查 webpack config"),s(i)]),e("。")])])])}const M=a(o,[["render",T],["__file","vueCli.html.vue"]]);export{M as default};