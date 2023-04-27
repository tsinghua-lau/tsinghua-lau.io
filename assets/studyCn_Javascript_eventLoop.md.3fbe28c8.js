import{_ as a,o as l,c as o,e as s,f as n,a as p}from"./app.85afe299.js";var e="/images/web/event-loop.gif";const f=JSON.parse('{"title":"event loop","description":"","frontmatter":{},"headers":[{"level":2,"title":"event loop","slug":"event-loop"},{"level":2,"title":"new","slug":"new"}],"relativePath":"studyCn/Javascript/eventLoop.md"}'),t={name:"studyCn/Javascript/eventLoop.md"},c=s("h2",{id:"event-loop",tabindex:"-1"},[n("event loop "),s("a",{class:"header-anchor",href:"#event-loop","aria-hidden":"true"},"#")],-1),r=s("p",null,[s("img",{src:e,alt:"event-loop"})],-1),D=s("p",null,[n("\xA0\xA0\xA0\xA0\xA0\u5982\u56FE\u6240\u793A\uFF0C\u6D4F\u89C8\u5668V8\u5F15\u64CE\u9047\u5230\u540C\u6B65\u4EFB\u52A1\u4F1A\u76F4\u63A5\u8FDB\u5165"),s("p",{color:"#33CC33",bgcolor:"#33CC33",size:"4",face:"\u534E\u6587\u65B0\u9B4F"},"\u8C03\u7528\u6808"),n("\u6267\u884C\uFF0C\u9047\u5230\u5F02\u6B65\u4EA4\u7ED9\u7531\u6D4F\u89C8\u5668\u7684Web Apis\u6765\u6267\u884C\uFF0C\u6267\u884C\u5B8C\u4E4B\u540E\u5C06\u56DE\u8C03\u6DFB\u52A0\u5230"),s("p",{color:"#33CC33",bgcolor:"#33CC33",size:"4",face:"\u534E\u6587\u65B0\u9B4F"},"\u8C03\u7528\u961F\u5217(\u4EFB\u52A1\u961F\u5217)"),n("\uFF0C\u7B49\u8C03\u7528\u6808\u7684\u4EFB\u52A1\u6E05\u7A7A\u540E\u6267\u884C\u8C03\u7528\u961F\u5217\u4E8B\u4EF6\uFF0C\u6765\u5B9E\u73B0 event loop\u3002")],-1),y=p(`<h2 id="new" tabindex="-1">new <a class="header-anchor" href="#new" aria-hidden="true">#</a></h2><ul><li>1\u3001\u521B\u5EFA\u4E00\u4E2A\u7A7A\u5BF9\u8C61</li></ul><p>var obj = new Object();</p><ul><li>2\u3001\u8BA9Person\u4E2D\u7684this\u6307\u5411obj\uFF0C\u5E76\u6267\u884CPerson\u8FD9\u4E2A\u6784\u9020\u51FD\u6570</li></ul><p>var result = Person.call(obj);</p><ul><li>3\u3001\u8BBE\u7F6E\u539F\u578B\u94FE\uFF0C\u5C06obj\u7684__proto__\u6210\u5458\u6307\u5411\u4E86Person\u51FD\u6570\u5BF9\u8C61\u7684prototype\u6210\u5458\u5BF9\u8C61</li></ul><p>obj.<strong>proto</strong> = Person.prototype;</p><ul><li>4\u3001\u5224\u65ADresult\u7684\u8FD4\u56DE\u503C\u7C7B\u578B\uFF0C\u5982\u679C\u662F\u503C\u7C7B\u578B\uFF0C\u8FD4\u56DEobj\u3002\u5982\u679C\u662F\u5F15\u7528\u7C7B\u578B\uFF0C\u5C31\u8FD4\u56DE\u8FD9\u4E2A\u5F15\u7528\u7C7B\u578B\u7684\u5BF9\u8C61\u3002\uFF08\u56E0\u6B64\u8C03\u7528call\u65B9\u6CD5\u7684\u65F6\u5019\u53EF\u80FD\u8FD4\u56DE\u4E86this\uFF0C\u4E5F\u53EF\u80FD\u6CA1\u6709\u8FD4\u56DE\uFF09</li></ul><div class="language-javascript"><span class="copy"></span><pre><code><span class="line"><span style="color:#89DDFF;font-style:italic;">if</span><span style="color:#A6ACCD;"> (</span><span style="color:#89DDFF;">typeof</span><span style="color:#A6ACCD;">(result) </span><span style="color:#89DDFF;">==</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">object</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">) </span></span>
<span class="line"><span style="color:#A6ACCD;">	person </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> result</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;">  </span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">else</span></span>
<span class="line"><span style="color:#A6ACCD;">	person </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> obj</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">   </span><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">Person</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">this.</span><span style="color:#A6ACCD;">name</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">pcm</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">this.</span><span style="color:#A6ACCD;">age</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">20</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;font-style:italic;">// return this    //\u53EF\u6709\u53EF\u65E0\uFF0C\u56E0\u4E3A\u5728\u4E0B\u9762\u505A\u4E86\u5224\u65AD</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"></span></code></pre></div><p>\u6574\u4F53\u5B9E\u4F8B\u5982\u4E0B\uFF1A</p><div class="language-javascript"><span class="copy"></span><pre><code><span class="line"></span>
<span class="line"><span style="color:#C792EA;">let</span><span style="color:#A6ACCD;"> obj </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">new</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Object</span><span style="color:#A6ACCD;">()</span></span>
<span class="line"><span style="color:#C792EA;">let</span><span style="color:#A6ACCD;"> result </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> Person</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">call</span><span style="color:#A6ACCD;">(obj)</span></span>
<span class="line"><span style="color:#A6ACCD;">obj</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">__proto__ </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Person</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">prototype</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">(result)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">if</span><span style="color:#A6ACCD;"> (</span><span style="color:#89DDFF;">typeof</span><span style="color:#A6ACCD;"> result </span><span style="color:#89DDFF;">===</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">object</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">) </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">person</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">result</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">else</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">person</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">obj</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">(person)</span></span>
<span class="line"><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">******</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">(person</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">name)</span></span>
<span class="line"></span>
<span class="line"></span></code></pre></div>`,11),F=[c,r,D,y];function C(A,i,_,d,u,v){return l(),o("div",null,F)}var b=a(t,[["render",C]]);export{f as __pageData,b as default};
