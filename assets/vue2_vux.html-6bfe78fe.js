const e=JSON.parse('{"key":"v-391f94bd","path":"/web/vue/learn/store/vue2_vux.html","title":"Vue2-Vuex","lang":"zh-CN","frontmatter":{"title":"Vue2-Vuex","icon":"post","order":1,"date":"2023-12-24T00:00:00.000Z","description":"Day01_vuex 今日学习目标(边讲边练) 跨组件通信能力 vuex的基础使用 购物车案例-改装 1.vuex介绍 目标 什么是vuex 为什么学习vuex 通信方案","head":[["meta",{"property":"og:url","content":"https://brain.sunguoqi.com/web/vue/learn/store/vue2_vux.html"}],["meta",{"property":"og:site_name","content":"Waite Wang"}],["meta",{"property":"og:title","content":"Vue2-Vuex"}],["meta",{"property":"og:description","content":"Day01_vuex 今日学习目标(边讲边练) 跨组件通信能力 vuex的基础使用 购物车案例-改装 1.vuex介绍 目标 什么是vuex 为什么学习vuex 通信方案"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-12-24T16:02:10.000Z"}],["meta",{"property":"article:published_time","content":"2023-12-24T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2023-12-24T16:02:10.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Vue2-Vuex\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2023-12-24T00:00:00.000Z\\",\\"dateModified\\":\\"2023-12-24T16:02:10.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"今日学习目标(边讲边练)","slug":"今日学习目标-边讲边练","link":"#今日学习目标-边讲边练","children":[]},{"level":2,"title":"1.vuex介绍","slug":"_1-vuex介绍","link":"#_1-vuex介绍","children":[{"level":3,"title":"目标","slug":"目标","link":"#目标","children":[]},{"level":3,"title":"通信方案","slug":"通信方案","link":"#通信方案","children":[]},{"level":3,"title":"vuex是什么","slug":"vuex是什么","link":"#vuex是什么","children":[]},{"level":3,"title":"vuex为何学","slug":"vuex为何学","link":"#vuex为何学","children":[]},{"level":3,"title":"vuex中存什么","slug":"vuex中存什么","link":"#vuex中存什么","children":[]},{"level":3,"title":"小结","slug":"小结","link":"#小结","children":[]}]},{"level":2,"title":"2.vuex学习内容","slug":"_2-vuex学习内容","link":"#_2-vuex学习内容","children":[{"level":3,"title":"目标","slug":"目标-1","link":"#目标-1","children":[]},{"level":3,"title":"核心概念","slug":"核心概念","link":"#核心概念","children":[]},{"level":3,"title":"图示关系","slug":"图示关系","link":"#图示关系","children":[]},{"level":3,"title":"小结","slug":"小结-1","link":"#小结-1","children":[]}]},{"level":2,"title":"3.vuex例子准备","slug":"_3-vuex例子准备","link":"#_3-vuex例子准备","children":[{"level":3,"title":"目标","slug":"目标-2","link":"#目标-2","children":[]},{"level":3,"title":"工程准备","slug":"工程准备","link":"#工程准备","children":[]},{"level":3,"title":"App.vue","slug":"app-vue","link":"#app-vue","children":[]},{"level":3,"title":"AddItem.vue","slug":"additem-vue","link":"#additem-vue","children":[]},{"level":3,"title":"SubItem.vue","slug":"subitem-vue","link":"#subitem-vue","children":[]},{"level":3,"title":"小结","slug":"小结-2","link":"#小结-2","children":[]}]},{"level":2,"title":"4.vuex-store准备","slug":"_4-vuex-store准备","link":"#_4-vuex-store准备","children":[{"level":3,"title":"目标","slug":"目标-3","link":"#目标-3","children":[]},{"level":3,"title":"store概念","slug":"store概念","link":"#store概念","children":[]},{"level":3,"title":"vuex目录","slug":"vuex目录","link":"#vuex目录","children":[]},{"level":3,"title":"使用步骤","slug":"使用步骤","link":"#使用步骤","children":[]},{"level":3,"title":"小结","slug":"小结-3","link":"#小结-3","children":[]}]},{"level":2,"title":"5.vuex-state数据源","slug":"_5-vuex-state数据源","link":"#_5-vuex-state数据源","children":[{"level":3,"title":"目标","slug":"目标-4","link":"#目标-4","children":[]},{"level":3,"title":"定义state","slug":"定义state","link":"#定义state","children":[]},{"level":3,"title":"使用state2种方式","slug":"使用state2种方式","link":"#使用state2种方式","children":[]},{"level":3,"title":"AddItem直接用","slug":"additem直接用","link":"#additem直接用","children":[]},{"level":3,"title":"App.vue直接用","slug":"app-vue直接用","link":"#app-vue直接用","children":[]},{"level":3,"title":"SubItem映射用","slug":"subitem映射用","link":"#subitem映射用","children":[]},{"level":3,"title":"注意","slug":"注意","link":"#注意","children":[]},{"level":3,"title":"小结","slug":"小结-4","link":"#小结-4","children":[]}]},{"level":2,"title":"6.vuex-mutations定义-同步修改","slug":"_6-vuex-mutations定义-同步修改","link":"#_6-vuex-mutations定义-同步修改","children":[{"level":3,"title":"目标","slug":"目标-5","link":"#目标-5","children":[]},{"level":3,"title":"定义mutations","slug":"定义mutations","link":"#定义mutations","children":[]},{"level":3,"title":"注意","slug":"注意-1","link":"#注意-1","children":[]},{"level":3,"title":"小结","slug":"小结-5","link":"#小结-5","children":[]}]},{"level":2,"title":"7.vuex-mutations使用","slug":"_7-vuex-mutations使用","link":"#_7-vuex-mutations使用","children":[{"level":3,"title":"目标","slug":"目标-6","link":"#目标-6","children":[]},{"level":3,"title":"使用mutations的2种方式","slug":"使用mutations的2种方式","link":"#使用mutations的2种方式","children":[]},{"level":3,"title":"AddItem直接用","slug":"additem直接用-1","link":"#additem直接用-1","children":[]},{"level":3,"title":"App.vue直接用","slug":"app-vue直接用-1","link":"#app-vue直接用-1","children":[]},{"level":3,"title":"SubItem映射用","slug":"subitem映射用-1","link":"#subitem映射用-1","children":[]},{"level":3,"title":"注意","slug":"注意-2","link":"#注意-2","children":[]},{"level":3,"title":"小结","slug":"小结-6","link":"#小结-6","children":[]}]},{"level":2,"title":"8.vuex-actions定义-异步修改","slug":"_8-vuex-actions定义-异步修改","link":"#_8-vuex-actions定义-异步修改","children":[{"level":3,"title":"目标","slug":"目标-7","link":"#目标-7","children":[]},{"level":3,"title":"定义actions","slug":"定义actions","link":"#定义actions","children":[]},{"level":3,"title":"小结","slug":"小结-7","link":"#小结-7","children":[]}]},{"level":2,"title":"9.vuex-actions使用","slug":"_9-vuex-actions使用","link":"#_9-vuex-actions使用","children":[{"level":3,"title":"目标","slug":"目标-8","link":"#目标-8","children":[]},{"level":3,"title":"使用actions的2种方式","slug":"使用actions的2种方式","link":"#使用actions的2种方式","children":[]},{"level":3,"title":"AddItem直接用","slug":"additem直接用-2","link":"#additem直接用-2","children":[]},{"level":3,"title":"SubItem映射用","slug":"subitem映射用-2","link":"#subitem映射用-2","children":[]},{"level":3,"title":"小结","slug":"小结-8","link":"#小结-8","children":[]}]},{"level":2,"title":"10.vuex-重构购物车-准备Store","slug":"_10-vuex-重构购物车-准备store","link":"#_10-vuex-重构购物车-准备store","children":[{"level":3,"title":"目标","slug":"目标-9","link":"#目标-9","children":[]},{"level":3,"title":"store准备","slug":"store准备","link":"#store准备","children":[]},{"level":3,"title":"小结","slug":"小结-9","link":"#小结-9","children":[]}]},{"level":2,"title":"11.vuex-重构购物车-配置项(上午结束)","slug":"_11-vuex-重构购物车-配置项-上午结束","link":"#_11-vuex-重构购物车-配置项-上午结束","children":[{"level":3,"title":"目标","slug":"目标-10","link":"#目标-10","children":[]},{"level":3,"title":"配置项准备","slug":"配置项准备","link":"#配置项准备","children":[]},{"level":3,"title":"App.vue使用vuex","slug":"app-vue使用vuex","link":"#app-vue使用vuex","children":[]},{"level":3,"title":"小结","slug":"小结-10","link":"#小结-10","children":[]}]},{"level":2,"title":"12.vuex-getters定义-计算属性","slug":"_12-vuex-getters定义-计算属性","link":"#_12-vuex-getters定义-计算属性","children":[{"level":3,"title":"目标","slug":"目标-11","link":"#目标-11","children":[]},{"level":3,"title":"getters概念","slug":"getters概念","link":"#getters概念","children":[]},{"level":3,"title":"定义getters","slug":"定义getters","link":"#定义getters","children":[]},{"level":3,"title":"小结","slug":"小结-11","link":"#小结-11","children":[]}]},{"level":2,"title":"13.vuex-getters使用","slug":"_13-vuex-getters使用","link":"#_13-vuex-getters使用","children":[{"level":3,"title":"目标","slug":"目标-12","link":"#目标-12","children":[]},{"level":3,"title":"使用getters的2种方式","slug":"使用getters的2种方式","link":"#使用getters的2种方式","children":[]},{"level":3,"title":"MyFooter.vue里使用","slug":"myfooter-vue里使用","link":"#myfooter-vue里使用","children":[]},{"level":3,"title":"小结","slug":"小结-12","link":"#小结-12","children":[]}]},{"level":2,"title":"14.vuex-modules定义-分模块","slug":"_14-vuex-modules定义-分模块","link":"#_14-vuex-modules定义-分模块","children":[{"level":3,"title":"目标","slug":"目标-13","link":"#目标-13","children":[]},{"level":3,"title":"为何分模块","slug":"为何分模块","link":"#为何分模块","children":[]},{"level":3,"title":"代码上的对比","slug":"代码上的对比","link":"#代码上的对比","children":[]},{"level":3,"title":"创建modules模块对象","slug":"创建modules模块对象","link":"#创建modules模块对象","children":[]},{"level":3,"title":"定义modules","slug":"定义modules","link":"#定义modules","children":[]},{"level":3,"title":"小结","slug":"小结-13","link":"#小结-13","children":[]}]},{"level":2,"title":"15.分模块-影响state取值方式","slug":"_15-分模块-影响state取值方式","link":"#_15-分模块-影响state取值方式","children":[{"level":3,"title":"目的","slug":"目的","link":"#目的","children":[]},{"level":3,"title":"state使用方式修改","slug":"state使用方式修改","link":"#state使用方式修改","children":[]},{"level":3,"title":"App.vue-修改","slug":"app-vue-修改","link":"#app-vue-修改","children":[]},{"level":3,"title":"小结","slug":"小结-14","link":"#小结-14","children":[]}]},{"level":2,"title":"16.分模块-命名空间","slug":"_16-分模块-命名空间","link":"#_16-分模块-命名空间","children":[{"level":3,"title":"目标","slug":"目标-14","link":"#目标-14","children":[]},{"level":3,"title":"开启命名空间","slug":"开启命名空间","link":"#开启命名空间","children":[]},{"level":3,"title":"state使用方式修改","slug":"state使用方式修改-1","link":"#state使用方式修改-1","children":[]},{"level":3,"title":"mutations使用方式修改","slug":"mutations使用方式修改","link":"#mutations使用方式修改","children":[]},{"level":3,"title":"actions使用方式修改","slug":"actions使用方式修改","link":"#actions使用方式修改","children":[]},{"level":3,"title":"getters使用方式修改","slug":"getters使用方式修改","link":"#getters使用方式修改","children":[]},{"level":3,"title":"小结","slug":"小结-15","link":"#小结-15","children":[]}]},{"level":2,"title":"扩展: 使用Devtools调试vuex数据","slug":"扩展-使用devtools调试vuex数据","link":"#扩展-使用devtools调试vuex数据","children":[{"level":3,"title":"目标","slug":"目标-15","link":"#目标-15","children":[]}]}],"git":{"createdTime":1703431684000,"updatedTime":1703433730000,"contributors":[{"name":"Waite Wang","email":"waite@waite.wang","commits":2}]},"readingTime":{"minutes":14.86,"words":4457},"filePathRelative":"web/vue/learn/store/vue2_vux.md","localizedDate":"2023年12月24日","excerpt":"<h1> Day01_vuex</h1>\\n<h2> 今日学习目标(边讲边练)</h2>\\n<ul>\\n<li>跨组件通信能力</li>\\n<li>vuex的基础使用</li>\\n<li>购物车案例-改装</li>\\n</ul>\\n<h2> 1.vuex介绍</h2>\\n<h3> 目标</h3>\\n<ul>\\n<li>什么是vuex</li>\\n<li>为什么学习vuex</li>\\n</ul>\\n<h3> 通信方案</h3>\\n<figure><img src=\\"https://qiniu.waite.wang/202312242346950.png\\" alt=\\"\\" tabindex=\\"0\\" loading=\\"lazy\\"><figcaption></figcaption></figure>","autoDesc":true}');export{e as data};