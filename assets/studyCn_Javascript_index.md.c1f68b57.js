import{_ as s,o as a,c as n,a as l}from"./app.85afe299.js";const i=JSON.parse('{"title":"JS\u6570\u636E\u7C7B\u578B","description":"","frontmatter":{},"headers":[{"level":2,"title":"JS\u6570\u636E\u7C7B\u578B","slug":"js\u6570\u636E\u7C7B\u578B"},{"level":2,"title":"null \u548C undefined \u7684\u533A\u522B","slug":"null-\u548C-undefined-\u7684\u533A\u522B"},{"level":2,"title":"\u5224\u65AD\u6570\u7EC4\u7684\u65B9\u5F0F","slug":"\u5224\u65AD\u6570\u7EC4\u7684\u65B9\u5F0F"},{"level":2,"title":"\u6570\u7EC4\u53BB\u91CD\u9047 \u6DF1\u5EA6\u5BF9\u8C61\u5904\u7406","slug":"\u6570\u7EC4\u53BB\u91CD\u9047-\u6DF1\u5EA6\u5BF9\u8C61\u5904\u7406"},{"level":2,"title":"\u7F16\u5199\u4E00\u4E2A\u67E5\u627E\u6570\u7EC4\u4E2D\u6700\u957F\u516C\u5171\u524D\u7F00\u7684\u51FD\u6570","slug":"\u7F16\u5199\u4E00\u4E2A\u67E5\u627E\u6570\u7EC4\u4E2D\u6700\u957F\u516C\u5171\u524D\u7F00\u7684\u51FD\u6570"},{"level":2,"title":"\u6570\u7EC4\u8F6C\u4E3A\u5BF9\u8C61","slug":"\u6570\u7EC4\u8F6C\u4E3A\u5BF9\u8C61"}],"relativePath":"studyCn/Javascript/index.md"}'),p={name:"studyCn/Javascript/index.md"},o=l(`<h2 id="js\u6570\u636E\u7C7B\u578B" tabindex="-1">JS\u6570\u636E\u7C7B\u578B <a class="header-anchor" href="#js\u6570\u636E\u7C7B\u578B" aria-hidden="true">#</a></h2><p>\u9996\u5148\uFF0CJS \u5206\u4E3A<strong>\u57FA\u672C\u6570\u636E\u7C7B\u578B</strong>\u548C<strong>\u5F15\u7528\u6570\u636E\u7C7B\u578B</strong>\u3002</p><p>\u57FA\u672C\u6570\u636E\u7C7B\u578B\uFF1A number , string , boolean , undefined , null ,symbol</p><p>\u5F15\u7528\u6570\u636E\u7C7B\u578B\uFF1A Object , Array , Function</p><h2 id="null-\u548C-undefined-\u7684\u533A\u522B" tabindex="-1">null \u548C undefined \u7684\u533A\u522B <a class="header-anchor" href="#null-\u548C-undefined-\u7684\u533A\u522B" aria-hidden="true">#</a></h2><ol><li><h4 id="\u610F\u4E49\u4E0D\u540C" tabindex="-1">\u610F\u4E49\u4E0D\u540C <a class="header-anchor" href="#\u610F\u4E49\u4E0D\u540C" aria-hidden="true">#</a></h4><p>null \u8868\u793A\u6CA1\u6709\u5BF9\u8C61\uFF0C\u5373\u8BE5\u5904\u4E0D\u5E94\u8BE5\u6709\u503C</p><p>undefined \u8868\u793A\u7F3A\u5C11\u503C\uFF0C\u5373\u6B64\u5904\u5E94\u8BE5\u6709\u503C\uFF0C\u4F46\u672A\u5B9A\u4E49</p></li><li><h4 id="\u7C7B\u578B\u8F6C\u5316\u4E0D\u540C" tabindex="-1">\u7C7B\u578B\u8F6C\u5316\u4E0D\u540C <a class="header-anchor" href="#\u7C7B\u578B\u8F6C\u5316\u4E0D\u540C" aria-hidden="true">#</a></h4><p>null \u9ED8\u8BA4\u8F6C\u6210 0</p><p>undefined \u9ED8\u8BA4\u8F6C\u4E3A NaN</p></li></ol><h2 id="\u5224\u65AD\u6570\u7EC4\u7684\u65B9\u5F0F" tabindex="-1">\u5224\u65AD\u6570\u7EC4\u7684\u65B9\u5F0F <a class="header-anchor" href="#\u5224\u65AD\u6570\u7EC4\u7684\u65B9\u5F0F" aria-hidden="true">#</a></h2><ol><li><h4 id="array-isarray" tabindex="-1">Array.isArray() <a class="header-anchor" href="#array-isarray" aria-hidden="true">#</a></h4></li></ol><div class="language-javascript"><span class="copy"></span><pre><code><span class="line"><span style="color:#C792EA;">let</span><span style="color:#A6ACCD;"> a </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> [</span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">,</span><span style="color:#F78C6C;">2</span><span style="color:#89DDFF;">,</span><span style="color:#F78C6C;">3</span><span style="color:#A6ACCD;">]</span></span>
<span class="line"><span style="color:#FFCB6B;">Array</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">isArray</span><span style="color:#A6ACCD;">(a)</span><span style="color:#89DDFF;">;</span><span style="color:#676E95;font-style:italic;">//true</span></span>
<span class="line"></span></code></pre></div><ol start="2"><li><h4 id="instanceof" tabindex="-1">instanceof <a class="header-anchor" href="#instanceof" aria-hidden="true">#</a></h4></li></ol><div class="language-javascript"><span class="copy"></span><pre><code><span class="line"><span style="color:#C792EA;">let</span><span style="color:#A6ACCD;"> a </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> []</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">a </span><span style="color:#89DDFF;">instanceof</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Array</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">//true</span></span>
<span class="line"></span></code></pre></div><ol start="3"><li><h4 id="constructor" tabindex="-1">constructor <a class="header-anchor" href="#constructor" aria-hidden="true">#</a></h4></li></ol><div class="language-javascript"><span class="copy"></span><pre><code><span class="line"><span style="color:#C792EA;">let</span><span style="color:#A6ACCD;"> a </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> [</span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">,</span><span style="color:#F78C6C;">3</span><span style="color:#89DDFF;">,</span><span style="color:#F78C6C;">4</span><span style="color:#A6ACCD;">]</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">a</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">constructor </span><span style="color:#89DDFF;">===</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Array</span><span style="color:#89DDFF;">;</span><span style="color:#676E95;font-style:italic;">//true</span></span>
<span class="line"></span></code></pre></div><ol start="4"><li><h4 id="object-prototype-tostring-call" tabindex="-1">Object.prototype.toString.call() <a class="header-anchor" href="#object-prototype-tostring-call" aria-hidden="true">#</a></h4></li></ol><div class="language-javascript"><span class="copy"></span><pre><code><span class="line"><span style="color:#C792EA;">let</span><span style="color:#A6ACCD;"> a </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> [</span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">,</span><span style="color:#F78C6C;">2</span><span style="color:#89DDFF;">,</span><span style="color:#F78C6C;">3</span><span style="color:#A6ACCD;">]</span></span>
<span class="line"><span style="color:#FFCB6B;">Object</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">prototype</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">toString</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">call</span><span style="color:#A6ACCD;">(a) </span><span style="color:#89DDFF;">===</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">[object Array]</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">;</span><span style="color:#676E95;font-style:italic;">//true</span></span>
<span class="line"></span></code></pre></div><p>\u5B83\u5F3A\u5927\u7684\u5730\u65B9\u5728\u4E8E\u4E0D\u4EC5\u4EC5\u53EF\u4EE5\u68C0\u9A8C\u662F\u5426\u4E3A\u6570\u7EC4\uFF0C\u6BD4\u5982\u662F\u5426\u662F\u4E00\u4E2A\u51FD\u6570\uFF0C\u662F\u5426\u662F\u6570\u5B57\u7B49\u7B49\u3002</p><div class="language-javascript"><span class="copy"></span><pre><code><span class="line"><span style="color:#676E95;font-style:italic;">//\u68C0\u9A8C\u662F\u5426\u662F\u51FD\u6570</span></span>
<span class="line"><span style="color:#C792EA;">let</span><span style="color:#A6ACCD;"> a </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{};</span></span>
<span class="line"><span style="color:#FFCB6B;">Object</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">prototype</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">toString</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">call</span><span style="color:#A6ACCD;">(a) </span><span style="color:#89DDFF;">===</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">[object Function]</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">;</span><span style="color:#676E95;font-style:italic;">//true</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">//\u68C0\u9A8C\u662F\u5426\u662F\u6570\u5B57</span></span>
<span class="line"><span style="color:#C792EA;">let</span><span style="color:#A6ACCD;"> b </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">;;</span></span>
<span class="line"><span style="color:#FFCB6B;">Object</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">prototype</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">toString</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">call</span><span style="color:#A6ACCD;">(a) </span><span style="color:#89DDFF;">===</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">[object Number]</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">;</span><span style="color:#676E95;font-style:italic;">//true</span></span>
<span class="line"></span></code></pre></div><h2 id="\u6570\u7EC4\u53BB\u91CD\u9047-\u6DF1\u5EA6\u5BF9\u8C61\u5904\u7406" tabindex="-1">\u6570\u7EC4\u53BB\u91CD\u9047 \u6DF1\u5EA6\u5BF9\u8C61\u5904\u7406 <a class="header-anchor" href="#\u6570\u7EC4\u53BB\u91CD\u9047-\u6DF1\u5EA6\u5BF9\u8C61\u5904\u7406" aria-hidden="true">#</a></h2><div class="language-javascript"><span class="copy"></span><pre><code><span class="line"><span style="color:#C792EA;">let</span><span style="color:#A6ACCD;"> arr</span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;">[</span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">,</span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">,</span><span style="color:#F78C6C;">2</span><span style="color:#89DDFF;">,</span><span style="color:#F78C6C;">5</span><span style="color:#89DDFF;">,</span><span style="color:#F78C6C;">4</span><span style="color:#89DDFF;">,</span><span style="color:#F78C6C;">5</span><span style="color:#89DDFF;">,</span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">,</span><span style="color:#F78C6C;">2</span><span style="color:#89DDFF;">,</span><span style="color:#F78C6C;">3</span><span style="color:#A6ACCD;">]</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#C792EA;">let</span><span style="color:#A6ACCD;"> arr2</span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;">[</span><span style="color:#89DDFF;">...new</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Set</span><span style="color:#A6ACCD;">(arr)]</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">(arr2)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span></code></pre></div><div class="language-javascript"><span class="copy"></span><pre><code><span class="line"><span style="color:#C792EA;">let</span><span style="color:#A6ACCD;"> arr</span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;">[</span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">,</span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">,</span><span style="color:#F78C6C;">2</span><span style="color:#89DDFF;">,{</span><span style="color:#F07178;">a</span><span style="color:#89DDFF;">:</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">11</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">},</span><span style="color:#F78C6C;">5</span><span style="color:#89DDFF;">,</span><span style="color:#F78C6C;">4</span><span style="color:#89DDFF;">,</span><span style="color:#F78C6C;">5</span><span style="color:#89DDFF;">,</span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">,</span><span style="color:#F78C6C;">2</span><span style="color:#89DDFF;">,</span><span style="color:#F78C6C;">3</span><span style="color:#89DDFF;">,{</span><span style="color:#F07178;">a</span><span style="color:#89DDFF;">:</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">11</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">]</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#C792EA;">let</span><span style="color:#A6ACCD;"> arr2</span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;">[]</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">arr</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">forEach</span><span style="color:#A6ACCD;">(item</span><span style="color:#C792EA;">=&gt;</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">arr2</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">findIndex</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">x</span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;">JSON</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">parse</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">JSON</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">stringify</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">x</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">===</span><span style="color:#A6ACCD;">JSON</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">stringify</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">item</span><span style="color:#F07178;">)))</span><span style="color:#89DDFF;">&gt;=</span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">?</span><span style="color:#89DDFF;">&#39;&#39;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;">arr2</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">push</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">item</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">(arr2)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span></code></pre></div><h2 id="\u7F16\u5199\u4E00\u4E2A\u67E5\u627E\u6570\u7EC4\u4E2D\u6700\u957F\u516C\u5171\u524D\u7F00\u7684\u51FD\u6570" tabindex="-1">\u7F16\u5199\u4E00\u4E2A\u67E5\u627E\u6570\u7EC4\u4E2D\u6700\u957F\u516C\u5171\u524D\u7F00\u7684\u51FD\u6570 <a class="header-anchor" href="#\u7F16\u5199\u4E00\u4E2A\u67E5\u627E\u6570\u7EC4\u4E2D\u6700\u957F\u516C\u5171\u524D\u7F00\u7684\u51FD\u6570" aria-hidden="true">#</a></h2><p>\u4F8B\u5982 str=[&#39;flower&#39;,&#39;flow&#39;,&#39;flight&#39;] =&gt; &#39;fl&#39;</p><p>\u4F8B\u5982 str=[&#39;tiger&#39;,&#39;dog&#39;,&#39;cat&#39;] =&gt; &#39;&#39;</p><div class="language-javascript"><span class="copy"></span><pre><code><span class="line"><span style="color:#C792EA;">let</span><span style="color:#A6ACCD;"> arr</span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;">[</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">flower</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">flow</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">flight</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">]</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#C792EA;">let</span><span style="color:#A6ACCD;"> res</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&#39;&#39;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">for</span><span style="color:#A6ACCD;">(</span><span style="color:#C792EA;">let</span><span style="color:#A6ACCD;"> i</span><span style="color:#89DDFF;">=</span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;">i</span><span style="color:#89DDFF;">&lt;</span><span style="color:#A6ACCD;">arr[</span><span style="color:#F78C6C;">0</span><span style="color:#A6ACCD;">]</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">length</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;">i</span><span style="color:#89DDFF;">++</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#C792EA;">let</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">temp</span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;">arr</span><span style="color:#F07178;">[</span><span style="color:#F78C6C;">0</span><span style="color:#F07178;">][</span><span style="color:#A6ACCD;">i</span><span style="color:#F07178;">]</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;font-style:italic;">if</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">arr</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">every</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">x</span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;">x</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">charAt</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">i</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">===</span><span style="color:#A6ACCD;">temp</span><span style="color:#F07178;">))</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#A6ACCD;">res</span><span style="color:#89DDFF;">+=</span><span style="color:#A6ACCD;">temp</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">}</span><span style="color:#89DDFF;font-style:italic;">else</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#89DDFF;font-style:italic;">break</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">(res)</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;">   </span><span style="color:#676E95;font-style:italic;">// fl</span></span>
<span class="line"></span></code></pre></div><h2 id="\u6570\u7EC4\u8F6C\u4E3A\u5BF9\u8C61" tabindex="-1">\u6570\u7EC4\u8F6C\u4E3A\u5BF9\u8C61 <a class="header-anchor" href="#\u6570\u7EC4\u8F6C\u4E3A\u5BF9\u8C61" aria-hidden="true">#</a></h2><div class="language-javascript"><span class="copy"></span><pre><code><span class="line"><span style="color:#C792EA;">let</span><span style="color:#A6ACCD;"> arr</span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;">[</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">flower</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">flow</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">flight</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">]</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#C792EA;">let</span><span style="color:#A6ACCD;"> obj</span><span style="color:#89DDFF;">={...</span><span style="color:#A6ACCD;">arr</span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">(obj)</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;">   </span><span style="color:#676E95;font-style:italic;">// {0: &#39;flower&#39;, 1: &#39;flow&#39;, 2: &#39;flight&#39;}</span></span>
<span class="line"></span></code></pre></div>`,26),e=[o];function t(r,c,y,D,F,C){return a(),n("div",null,e)}var d=s(p,[["render",t]]);export{i as __pageData,d as default};
