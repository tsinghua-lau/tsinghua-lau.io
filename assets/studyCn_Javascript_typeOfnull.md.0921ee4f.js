import{_ as s,o as n,c as a,a as l}from"./app.85afe299.js";const C=JSON.parse('{"title":"typeof null","description":"","frontmatter":{},"headers":[],"relativePath":"studyCn/Javascript/typeOfnull.md"}'),p={name:"studyCn/Javascript/typeOfnull.md"},o=l(`<h1 id="typeof-null" tabindex="-1">typeof null <a class="header-anchor" href="#typeof-null" aria-hidden="true">#</a></h1><p>\u4F7F\u7528 typeof \u64CD\u4F5C\u7B26\u6765\u68C0\u6D4B\u4E00\u4E2A\u53D8\u91CF\u7684\u7C7B\u578B\u65F6\uFF0C\u5982\u679C\u8BE5\u53D8\u91CF\u7684\u503C\u4E3A null\uFF0C\u5219\u8FD4\u56DE\u503C\u662F &#39;object&#39;\u3002</p><p>\u8FD9\u662F JavaScript \u8BED\u8A00\u672C\u8EAB\u7684\u4E00\u4E2A\u5386\u53F2\u9057\u7559\u95EE\u9898\u3002\u65E9\u671F\u7684 JavaScript \u5B9E\u73B0\u4E2D\uFF0Cnull \u88AB\u8868\u793A\u4E3A\u4E00\u4E2A\u6307\u5411\u7A7A\u5BF9\u8C61\u7684\u6307\u9488\uFF0C\u56E0\u6B64\u4F7F\u7528 typeof \u64CD\u4F5C\u7B26\u68C0\u6D4B null \u7684\u7C7B\u578B\u65F6\uFF0C\u4F1A\u88AB\u8BEF\u5224\u4E3A\u5BF9\u8C61\u7C7B\u578B\u3002</p><p>\u4EE5\u4E0B\u662F\u4E00\u4E2A\u793A\u4F8B\uFF1A</p><div class="language-javascript"><span class="copy"></span><pre><code><span class="line"></span>
<span class="line"><span style="color:#C792EA;">var</span><span style="color:#A6ACCD;"> result </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">null;</span></span>
<span class="line"><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">typeof</span><span style="color:#A6ACCD;"> result)</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">// &#39;object&#39;</span></span>
<span class="line"></span>
<span class="line"></span></code></pre></div><p>\u9700\u8981\u6CE8\u610F\u7684\u662F\uFF0C\u867D\u7136 null \u7684\u7C7B\u578B\u662F &#39;object&#39;\uFF0C\u4F46\u5B9E\u9645\u4E0A\u5B83\u5E76\u4E0D\u662F\u4E00\u4E2A\u5BF9\u8C61\uFF0C\u800C\u662F\u4E00\u4E2A\u539F\u59CB\u503C\u3002\u56E0\u6B64\uFF0C\u4E0E\u5176\u4ED6\u5BF9\u8C61\u4E0D\u540C\uFF0Cnull \u662F\u6CA1\u6709\u5C5E\u6027\u548C\u65B9\u6CD5\u7684\u3002</p><p>\u5728\u5B9E\u9645\u5F00\u53D1\u4E2D\uFF0C\u5982\u679C\u9700\u8981\u68C0\u6D4B\u4E00\u4E2A\u53D8\u91CF\u662F\u5426\u4E3A null\uFF0C\u53EF\u4EE5\u4F7F\u7528\u4E25\u683C\u76F8\u7B49\u64CD\u4F5C\u7B26\uFF08===\uFF09\u6765\u5224\u65AD\u3002\u4F8B\u5982\uFF1A</p><div class="language-javascript"><span class="copy"></span><pre><code><span class="line"></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> myVar </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">null;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">if</span><span style="color:#A6ACCD;"> (myVar </span><span style="color:#89DDFF;">===</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">null</span><span style="color:#A6ACCD;">) </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">myVar is null</span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">else</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">myVar is not null</span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"></span></code></pre></div><p>\u6211\u4EEC\u5229\u7528 === \u64CD\u4F5C\u7B26\u6765\u68C0\u6D4B myVar \u662F\u5426\u7B49\u4E8E null\uFF0C\u5E76\u6839\u636E\u7ED3\u679C\u8F93\u51FA\u76F8\u5E94\u7684\u4FE1\u606F\u3002\u8FD9\u79CD\u65B9\u5F0F\u66F4\u52A0\u51C6\u786E\u548C\u53EF\u9760\uFF0C\u4E5F\u66F4\u52A0\u7B26\u5408 JavaScript \u8BED\u8A00\u7684\u8BBE\u8BA1\u3002</p>`,9),e=[o];function t(c,r,y,D,F,i){return n(),a("div",null,e)}var u=s(p,[["render",t]]);export{C as __pageData,u as default};
