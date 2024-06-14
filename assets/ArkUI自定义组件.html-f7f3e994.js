import{_ as n}from"./plugin-vue_export-helper-c27b6911.js";import{o as s,c as a,e as t}from"./app-4df96303.js";const p={},e=t(`<h2 id="自定义组件的基本结构" tabindex="-1"><a class="header-anchor" href="#自定义组件的基本结构" aria-hidden="true">#</a> 自定义组件的基本结构</h2><p>struct：自定义组件基于struct实现，struct + 自定义组件名 + {...}的组合构成自定义组件，不能有继承关系。对于struct的实例化，可以省略new。</p><blockquote><p>自定义组件名、类名、函数名不能和系统组件名相同。</p></blockquote><p>@Component：@Component装饰器仅能装饰struct关键字声明的数据结构。struct被@Component装饰后具备组件化的能力，需要实现build方法描述UI，一个struct只能被一个@Component装饰。</p><blockquote><p>从API version 9开始，该装饰器支持在ArkTS卡片中使用。</p></blockquote><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token decorator"><span class="token at operator">@</span><span class="token function">Component</span></span>
struct MyComponent <span class="token punctuation">{</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>build()函数：build()函数用于定义自定义组件的声明式UI描述，自定义组件必须定义build()函数。</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token decorator"><span class="token at operator">@</span><span class="token function">Component</span></span>
struct MyComponent <span class="token punctuation">{</span>
  <span class="token function">build</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>@Entry：@Entry装饰的自定义组件将作为UI页面的入口。在单个UI页面中，最多可以使用@Entry装饰一个自定义组件。@Entry可以接受一个可选的LocalStorage的参数。</p><blockquote><p>从API version 9开始，该装饰器支持在ArkTS卡片中使用。</p></blockquote><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token decorator"><span class="token at operator">@</span><span class="token function">Entry</span></span>
<span class="token decorator"><span class="token at operator">@</span><span class="token function">Component</span></span>
struct MyComponent <span class="token punctuation">{</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="自定义组件的基本用法" tabindex="-1"><a class="header-anchor" href="#自定义组件的基本用法" aria-hidden="true">#</a> 自定义组件的基本用法</h2><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token decorator"><span class="token at operator">@</span><span class="token function">Entry</span></span>
<span class="token decorator"><span class="token at operator">@</span><span class="token function">Component</span></span>
struct ParentComponent <span class="token punctuation">{</span>
  <span class="token function">build</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">Column</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token function">Text</span><span class="token punctuation">(</span><span class="token string">&#39;ArkUI message&#39;</span><span class="token punctuation">)</span>
      <span class="token function">HelloComponent</span><span class="token punctuation">(</span><span class="token punctuation">{</span> message<span class="token operator">:</span> <span class="token string">&#39;Hello, World!&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token function">HelloComponent</span><span class="token punctuation">(</span><span class="token punctuation">{</span> message<span class="token operator">:</span> <span class="token string">&#39;你好!&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token decorator"><span class="token at operator">@</span><span class="token function">Component</span></span>
struct HelloComponent <span class="token punctuation">{</span>
  <span class="token decorator"><span class="token at operator">@</span><span class="token function">State</span></span> message<span class="token operator">:</span> <span class="token builtin">string</span> <span class="token operator">=</span> <span class="token string">&#39;Hello, World!&#39;</span><span class="token punctuation">;</span>

  <span class="token function">build</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// HelloComponent自定义组件组合系统组件Row和Text</span>
    <span class="token function">Row</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token function">Text</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>message<span class="token punctuation">)</span>
        <span class="token punctuation">.</span><span class="token function">onClick</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
          <span class="token comment">// 状态变量message的改变驱动UI刷新，UI从&#39;Hello, World!&#39;刷新为&#39;Hello, ArkUI!&#39;</span>
          <span class="token keyword">this</span><span class="token punctuation">.</span>message <span class="token operator">=</span> <span class="token string">&#39;Hello, ArkUI!&#39;</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>如果在另外的文件中引用该自定义组件，需要使用export关键字导出，并在使用的页面import该自定义组件。</p></blockquote><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token decorator"><span class="token at operator">@</span><span class="token function">Component</span></span>
<span class="token keyword">export</span> struct HelloComponent <span class="token punctuation">{</span>
  <span class="token decorator"><span class="token at operator">@</span><span class="token function">State</span></span> message<span class="token operator">:</span> <span class="token builtin">string</span> <span class="token operator">=</span> <span class="token string">&#39;Hello, World!&#39;</span><span class="token punctuation">;</span>

  <span class="token function">build</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// HelloComponent自定义组件组合系统组件Row和Text</span>
    <span class="token function">Row</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token function">Text</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>message<span class="token punctuation">)</span>
        <span class="token punctuation">.</span><span class="token function">onClick</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
          <span class="token comment">// 状态变量message的改变驱动UI刷新，UI从&#39;Hello, World!&#39;刷新为&#39;Hello, ArkUI!&#39;</span>
          <span class="token keyword">this</span><span class="token punctuation">.</span>message <span class="token operator">=</span> <span class="token string">&#39;Hello, ArkUI!&#39;</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> HelloComponent <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;./HelloComponent&#39;</span>

<span class="token decorator"><span class="token at operator">@</span><span class="token function">Entry</span></span>
<span class="token decorator"><span class="token at operator">@</span><span class="token function">Component</span></span>
struct ParentComponent <span class="token punctuation">{</span>
  <span class="token function">build</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">Column</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token function">Text</span><span class="token punctuation">(</span><span class="token string">&#39;ArkUI message&#39;</span><span class="token punctuation">)</span>
      <span class="token function">HelloComponent</span><span class="token punctuation">(</span><span class="token punctuation">{</span> message<span class="token operator">:</span> <span class="token string">&#39;Hello, World!&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token function">HelloComponent</span><span class="token punctuation">(</span><span class="token punctuation">{</span> message<span class="token operator">:</span> <span class="token string">&#39;你好!&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="自定义组件的参数规定" tabindex="-1"><a class="header-anchor" href="#自定义组件的参数规定" aria-hidden="true">#</a> 自定义组件的参数规定</h2><p>从上文的示例中，我们已经了解到，可以在build方法里创建自定义组件，在创建自定义组件的过程中，根据装饰器的规则来初始化自定义组件的参数。</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token decorator"><span class="token at operator">@</span><span class="token function">Component</span></span>
struct MyComponent <span class="token punctuation">{</span>
  <span class="token keyword">private</span> countDownFrom<span class="token operator">:</span> <span class="token builtin">number</span> <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
  <span class="token keyword">private</span> color<span class="token operator">:</span> Color <span class="token operator">=</span> Color<span class="token punctuation">.</span>Blue<span class="token punctuation">;</span>

  <span class="token function">build</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token decorator"><span class="token at operator">@</span><span class="token function">Entry</span></span>
<span class="token decorator"><span class="token at operator">@</span><span class="token function">Component</span></span>
struct ParentComponent <span class="token punctuation">{</span>
  <span class="token keyword">private</span> someColor<span class="token operator">:</span> Color <span class="token operator">=</span> Color<span class="token punctuation">.</span>Pink<span class="token punctuation">;</span>

  <span class="token function">build</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">Column</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">// 创建MyComponent实例，并将创建MyComponent成员变量countDownFrom初始化为10，将成员变量color初始化为this.someColor</span>
      <span class="token function">MyComponent</span><span class="token punctuation">(</span><span class="token punctuation">{</span> countDownFrom<span class="token operator">:</span> <span class="token number">10</span><span class="token punctuation">,</span> color<span class="token operator">:</span> <span class="token keyword">this</span><span class="token punctuation">.</span>someColor <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="build-函数" tabindex="-1"><a class="header-anchor" href="#build-函数" aria-hidden="true">#</a> build()函数</h2><p>所有声明在build()函数的语言，我们统称为UI描述，UI描述需要遵循以下规则：</p><ul><li>@Entry装饰的自定义组件，其build()函数下的根节点唯一且必要，且必须为容器组件，其中ForEach禁止作为根节点。</li><li>@Component装饰的自定义组件，其build()函数下的根节点唯一且必要，可以为非容器组件，其中ForEach禁止作为根节点。</li></ul><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token decorator"><span class="token at operator">@</span><span class="token function">Entry</span></span>
<span class="token decorator"><span class="token at operator">@</span><span class="token function">Component</span></span>
struct MyComponent <span class="token punctuation">{</span>
  <span class="token function">build</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 根节点唯一且必要，必须为容器组件</span>
    <span class="token function">Row</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token function">ChildComponent</span><span class="token punctuation">(</span><span class="token punctuation">)</span> 
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token decorator"><span class="token at operator">@</span><span class="token function">Component</span></span>
struct ChildComponent <span class="token punctuation">{</span>
  <span class="token function">build</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 根节点唯一且必要，可为非容器组件</span>
    <span class="token function">Image</span><span class="token punctuation">(</span><span class="token string">&#39;test.jpg&#39;</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>不允许声明本地变量，反例如下。</li></ul><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token function">build</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// 反例：不允许声明本地变量</span>
  <span class="token keyword">let</span> a<span class="token operator">:</span> <span class="token builtin">number</span> <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>不允许在UI描述里直接使用console.info，但允许在方法或者函数里使用，反例如下。</li></ul><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token function">build</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// 反例：不允许console.info</span>
  <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">info</span><span class="token punctuation">(</span><span class="token string">&#39;print debug log&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>不允许创建本地的作用域，反例如下。</li></ul><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token function">build</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// 反例：不允许本地作用域</span>
  <span class="token punctuation">{</span>
    <span class="token operator">...</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>不允许调用没有用@Builder装饰的方法，允许系统组件的参数是TS方法的返回值。</li></ul><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token decorator"><span class="token at operator">@</span><span class="token function">Component</span></span>
struct ParentComponent <span class="token punctuation">{</span>
  <span class="token function">doSomeCalculations</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token punctuation">}</span>

  <span class="token function">calcTextValue</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token string">&#39;Hello World&#39;</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token decorator"><span class="token at operator">@</span><span class="token function">Builder</span></span> <span class="token function">doSomeRender</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">Text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">Hello World</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>

  <span class="token function">build</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">Column</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">// 反例：不能调用没有用@Builder装饰的方法</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">doSomeCalculations</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token comment">// 正例：可以调用</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">doSomeRender</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token comment">// 正例：参数可以为调用TS方法的返回值</span>
      <span class="token function">Text</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">calcTextValue</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>不允许switch语法，如果需要使用条件判断，请使用if。反例如下。</li></ul><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token function">build</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token function">Column</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 反例：不允许使用switch语法</span>
    <span class="token keyword">switch</span> <span class="token punctuation">(</span>expression<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">case</span> <span class="token number">1</span><span class="token operator">:</span>
        <span class="token function">Text</span><span class="token punctuation">(</span><span class="token string">&#39;...&#39;</span><span class="token punctuation">)</span>
        <span class="token keyword">break</span><span class="token punctuation">;</span>
      <span class="token keyword">case</span> <span class="token number">2</span><span class="token operator">:</span>
        <span class="token function">Image</span><span class="token punctuation">(</span><span class="token string">&#39;...&#39;</span><span class="token punctuation">)</span>
        <span class="token keyword">break</span><span class="token punctuation">;</span>
      <span class="token keyword">default</span><span class="token operator">:</span>
        <span class="token function">Text</span><span class="token punctuation">(</span><span class="token string">&#39;...&#39;</span><span class="token punctuation">)</span>
        <span class="token keyword">break</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>不允许使用表达式，反例如下。</li></ul><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token function">build</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token function">Column</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 反例：不允许使用表达式</span>
    <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>aVar <span class="token operator">&gt;</span> <span class="token number">10</span><span class="token punctuation">)</span> <span class="token operator">?</span> <span class="token function">Text</span><span class="token punctuation">(</span><span class="token string">&#39;...&#39;</span><span class="token punctuation">)</span> <span class="token operator">:</span> <span class="token function">Image</span><span class="token punctuation">(</span><span class="token string">&#39;...&#39;</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="自定义组件通用样式" tabindex="-1"><a class="header-anchor" href="#自定义组件通用样式" aria-hidden="true">#</a> 自定义组件通用样式</h2><p>自定义组件通过“.”链式调用的形式设置通用样式。</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token decorator"><span class="token at operator">@</span><span class="token function">Component</span></span>
struct MyComponent2 <span class="token punctuation">{</span>
  <span class="token function">build</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">Button</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">Hello World</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token decorator"><span class="token at operator">@</span><span class="token function">Entry</span></span>
<span class="token decorator"><span class="token at operator">@</span><span class="token function">Component</span></span>
struct MyComponent <span class="token punctuation">{</span>
  <span class="token function">build</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">Row</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token function">MyComponent2</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
        <span class="token punctuation">.</span><span class="token function">width</span><span class="token punctuation">(</span><span class="token number">200</span><span class="token punctuation">)</span>
        <span class="token punctuation">.</span><span class="token function">height</span><span class="token punctuation">(</span><span class="token number">300</span><span class="token punctuation">)</span>
        <span class="token punctuation">.</span><span class="token function">backgroundColor</span><span class="token punctuation">(</span>Color<span class="token punctuation">.</span>Red<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,38),o=[e];function c(i,l){return s(),a("div",null,o)}const d=n(p,[["render",c],["__file","ArkUI自定义组件.html.vue"]]);export{d as default};
