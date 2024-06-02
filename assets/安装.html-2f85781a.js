import{_ as n}from"./plugin-vue_export-helper-c27b6911.js";import{o as e,c as a,a as i}from"./app-b96769ad.js";const s={},l=i(`<h2 id="简介" tabindex="-1"><a class="header-anchor" href="#简介" aria-hidden="true">#</a> 简介</h2><p>Django(发音:[\`dʒæŋɡəʊ]) 也有的小伙伴读成 “酱狗”，&quot;贱狗&quot;，&quot;进狗&quot;，&quot;撞狗&quot;，甚至还有读成&quot;打 狗&quot;。 官方：https://www.djangoproject.com/ Django是一个高级的Python Web框架，可以快速开发安全和可维护的网站。由经验丰富的开发者构 建，Django负责处理网站开发中麻烦的部分，可以专注于编写应用程序，而无需重新开发。它是免费和 开源的，有活跃繁荣的社区，丰富的文档，以及很多免费和付费的解决方案。目前最新版本：5.0.1</p><h2 id="安装" tabindex="-1"><a class="header-anchor" href="#安装" aria-hidden="true">#</a> 安装</h2><p>pip安装：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>pip install Django==5.0.1 -i https://pypi.tuna.tsinghua.edu.cn/simple
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>执行安装完成后，在python目录的Scripts下，会多出一个<code>diango-admin.exe</code> 这个是<code>django</code>项目创建工具</p><figure><img src="https://qiniu.waite.wang/202405302020692.png" alt="image-20240530202013347" tabindex="0" loading="lazy"><figcaption>image-20240530202013347</figcaption></figure><p>当然同时Lib下的<code>site-packages</code>下，也会有一个<code>django</code>目录，这个是后面我们开发项目会用到的<code>django</code>开发包。</p><figure><img src="https://qiniu.waite.wang/202405302020300.png" alt="image-20240530202047189" tabindex="0" loading="lazy"><figcaption>image-20240530202047189</figcaption></figure><h2 id="项目创建与项目配置" tabindex="-1"><a class="header-anchor" href="#项目创建与项目配置" aria-hidden="true">#</a> 项目创建与项目配置</h2><h3 id="django5创建项目用命令方式" tabindex="-1"><a class="header-anchor" href="#django5创建项目用命令方式" aria-hidden="true">#</a> Django5创建项目用命令方式</h3><p>通过以下命令可以查看版本号：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code># python3 -V
Python 3.9.7
# python3 -m django --version
4.2.7
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>django-admin startproject 项目名称
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><figure><img src="https://qiniu.waite.wang/202405302021361.png" alt="image-20240530202153533" tabindex="0" loading="lazy"><figcaption>image-20240530202153533</figcaption></figure><h3 id="django5创建项目用pycharm工具" tabindex="-1"><a class="header-anchor" href="#django5创建项目用pycharm工具" aria-hidden="true">#</a> Django5创建项目用PyCharm工具</h3><figure><img src="https://qiniu.waite.wang/202405302022094.png" alt="image-20240530202246884" tabindex="0" loading="lazy"><figcaption>image-20240530202246884</figcaption></figure><h2 id="目录结构" tabindex="-1"><a class="header-anchor" href="#目录结构" aria-hidden="true">#</a> 目录结构</h2><p>使用 django-admin 来创建 HelloWorld 项目：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>django-admin startproject HelloWorld
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>创建完成后我们可以查看下项目的目录结构：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>$ cd HelloWorld/
$ tree
.
|-- HelloWorld
|   |-- __init__.py
|   |-- asgi.py
|   |-- settings.py
|   |-- urls.py
|   \`-- wsgi.py
\`-- manage.py
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>目录说明：</p><ul><li><strong>HelloWorld:</strong> 项目的容器。</li><li><strong>manage.py:</strong> 一个实用的命令行工具，可让你以各种方式与该 Django 项目进行交互。</li><li><strong>HelloWorld/<strong>init</strong>.py:</strong> 一个空文件，告诉 Python 该目录是一个 Python 包。</li><li><strong>HelloWorld/asgi.py:</strong> 一个 ASGI 兼容的 Web 服务器的入口，以便运行你的项目。</li><li><strong>HelloWorld/settings.py:</strong> 该 Django 项目的设置/配置。</li><li><strong>HelloWorld/urls.py:</strong> 该 Django 项目的 URL 声明; 一份由 Django 驱动的网站&quot;目录&quot;。</li><li><strong>HelloWorld/wsgi.py:</strong> 一个 WSGI 兼容的 Web 服务器的入口，以便运行你的项目。</li></ul><p>接下来我们进入 HelloWorld 目录输入以下命令，启动服务器：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>python3 manage.py runserver 0.0.0.0:8000
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>0.0.0.0 让其它电脑可连接到开发服务器，8000 为端口号。如果不说明，那么端口号默认为 8000。</p><p>在浏览器输入你服务器的 ip（这里我们输入本机 IP 地址： <strong>127.0.0.1:8000</strong>） 及端口号，如果正常启动，输出结果如下：</p><figure><img src="https://qiniu.waite.wang/202405302024176.jpeg" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><h2 id="视图和-url-配置" tabindex="-1"><a class="header-anchor" href="#视图和-url-配置" aria-hidden="true">#</a> 视图和 URL 配置</h2><p>在先前创建的 HelloWorld 目录下的 HelloWorld 目录新建一个 views.py 文件，并输入代码：</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">from</span> django<span class="token punctuation">.</span>http <span class="token keyword">import</span> HttpResponse
 
<span class="token keyword">def</span> <span class="token function">hello</span><span class="token punctuation">(</span>request<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">return</span> HttpResponse<span class="token punctuation">(</span><span class="token string">&quot;Hello world ! &quot;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>接着，绑定 URL 与视图函数。打开 urls.py 文件，删除原来代码，将以下代码复制粘贴到 urls.py 文件中：</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">from</span> django<span class="token punctuation">.</span>urls <span class="token keyword">import</span> path
 
<span class="token keyword">from</span> <span class="token punctuation">.</span> <span class="token keyword">import</span> views
 
urlpatterns <span class="token operator">=</span> <span class="token punctuation">[</span>
    path<span class="token punctuation">(</span><span class="token string">&quot;&quot;</span><span class="token punctuation">,</span> views<span class="token punctuation">.</span>hello<span class="token punctuation">,</span> name<span class="token operator">=</span><span class="token string">&quot;hello&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>整个目录结构如下：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>$ tree
.
|-- HelloWorld
|   |-- __init__.py
|   |-- __init__.pyc
|   |-- settings.py
|   |-- settings.pyc
|   |-- urls.py              # url 配置
|   |-- urls.pyc
|   |-- views.py              # 添加的视图文件
|   |-- views.pyc             # 编译后的视图文件
|   |-- wsgi.py
|   \`-- wsgi.pyc
\`-- manage.py
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>完成后，启动 Django 开发服务器，并在浏览器访问打开浏览器并访问：</p><figure><img src="https://qiniu.waite.wang/202405302027460.jpeg" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><p>我们也可以修改以下规则：</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token comment"># HelloWorld/HelloWorld/urls.py 文件代码：</span>
<span class="token keyword">from</span> django<span class="token punctuation">.</span>urls <span class="token keyword">import</span> path
 
<span class="token keyword">from</span> <span class="token punctuation">.</span> <span class="token keyword">import</span> views
 
urlpatterns <span class="token operator">=</span> <span class="token punctuation">[</span>
    path<span class="token punctuation">(</span><span class="token string">&#39;hello/&#39;</span><span class="token punctuation">,</span> views<span class="token punctuation">.</span>hello<span class="token punctuation">)</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>通过浏览器打开 <strong>http://127.0.0.1:8000/hello</strong>，输出结果如下：</p><figure><img src="https://qiniu.waite.wang/202405302028324.jpeg" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><p>**注意：**项目中如果代码有改动，服务器会自动监测代码的改动并自动重新载入，所以如果你已经启动了服务器则不需手动重启。</p><h2 id="创建app" tabindex="-1"><a class="header-anchor" href="#创建app" aria-hidden="true">#</a> 创建app</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>- 项目
	- app，用户管理【表结构、函数、HTML模板、CSS】
	- app，订单管理【表结构、函数、HTML模板、CSS】
	- app，后台管理【表结构、函数、HTML模板、CSS】
	- app，网站   【表结构、函数、HTML模板、CSS】
	- app，API    【表结构、函数、HTML模板、CSS】
	..
	
注意：我们开发比较简洁，用不到多app，一般情况下，项目下创建1个app即可。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="https://qiniu.waite.wang/202406011539511.png" alt="image-20240601153948318" tabindex="0" loading="lazy"><figcaption>image-20240601153948318</figcaption></figure><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>├── app01
│   ├── __init__.py
│   ├── admin.py         【固定，不用动】django默认提供了admin后台管理。
│   ├── apps.py          【固定，不用动】app启动类
│   ├── migrations       【固定，不用动】数据库变更记录
│   │   └── __init__.py
│   ├── models.py        【**重要**】，对数据库操作。
│   ├── tests.py         【固定，不用动】单元测试
│   └── views.py         【**重要**】，函数。
├── manage.py
└── mysite2
    ├── __init__.py
    ├── asgi.py
    ├── settings.py
    ├── urls.py          【URL-&gt;函数】
    └── wsgi.py
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,47),t=[l];function d(p,r){return e(),a("div",null,t)}const u=n(s,[["render",d],["__file","安装.html.vue"]]);export{u as default};
