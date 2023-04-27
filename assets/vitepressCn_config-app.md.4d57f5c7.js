import{_ as s,o as a,c as n,a as l}from"./app.85afe299.js";const C=JSON.parse('{"title":"VitePress\u5E94\u7528\u914D\u7F6E - VitePress\u4E2D\u6587\u6587\u6863","description":"VitePress\u4E2D\u6587\u6587\u6863\u4E4BVitePress\u5E94\u7528\u914D\u7F6E","frontmatter":{"title":"VitePress\u5E94\u7528\u914D\u7F6E - VitePress\u4E2D\u6587\u6587\u6863","description":"VitePress\u4E2D\u6587\u6587\u6863\u4E4BVitePress\u5E94\u7528\u914D\u7F6E","tags":["VitePress\u4E2D\u6587\u6587\u6863,VitePress\u5E94\u7528\u914D\u7F6E,VitePress App config"],"head":[["meta",{"name":"keywords","content":"VitePress\u4E2D\u6587\u6587\u6863,VitePress\u5E94\u7528\u914D\u7F6E,VitePress App config"}]]},"headers":[{"level":2,"title":"appearance","slug":"appearance"},{"level":2,"title":"base","slug":"base"},{"level":2,"title":"description","slug":"description"},{"level":2,"title":"head","slug":"head"},{"level":2,"title":"ignoreDeadLinks","slug":"ignoredeadlinks"},{"level":3,"title":"lang","slug":"lang"},{"level":2,"title":"lastUpdated","slug":"lastupdated"},{"level":2,"title":"markdown","slug":"markdown"},{"level":2,"title":"outDir","slug":"outdir"},{"level":2,"title":"title","slug":"title"},{"level":2,"title":"titleTemplate","slug":"titletemplate"}],"relativePath":"vitepressCn/config-app.md"}'),p={name:"vitepressCn/config-app.md"},e=l(`<h1 id="\u5E94\u7528\u914D\u7F6E" tabindex="-1">\u5E94\u7528\u914D\u7F6E <a class="header-anchor" href="#\u5E94\u7528\u914D\u7F6E" aria-hidden="true">#</a></h1><p>\u5E94\u7528\u914D\u7F6E\u662F\u53EF\u4EE5\u5B9A\u4E49\u7F51\u7AD9\u7684\u5168\u5C40\u8BBE\u7F6E\u7684\u5730\u65B9\u3002\u5E94\u7528\u914D\u7F6E\u5B9A\u4E49\u7684\u57FA\u672C\u8BBE\u7F6E\u4E0D\u4EC5\u9650\u4E8E\u4E3B\u9898\u914D\u7F6E\uFF0C\u5982 &quot;\u57FA\u672C\u76EE\u5F55 &quot;\u7684\u914D\u7F6E\uFF0C\u6216\u7F51\u7AD9\u7684 &quot;\u6807\u9898&quot;\u3002</p><div class="language-js"><span class="copy"></span><pre><code><span class="line"><span style="color:#89DDFF;font-style:italic;">export</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">default</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;font-style:italic;">// These are app level configs.</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">lang</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">en-US</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">title</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">VitePress</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">description</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">Vite &amp; Vue powered static site generator.</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">...</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><h2 id="appearance" tabindex="-1">appearance <a class="header-anchor" href="#appearance" aria-hidden="true">#</a></h2><ul><li><p>\u7C7B\u578B\uFF1A<code>boolean</code></p></li><li><p>\u9ED8\u8BA4\u503C\uFF1A<code>true</code></p></li></ul><p>\u662F\u5426\u542F\u7528&quot;\u6697\u9ED1\u6A21\u5F0F&quot;\u9009\u9879\u3002\u5982\u679C\u8BE5\u9009\u9879\u88AB\u8BBE\u7F6E\u4E3A<code>true</code>\uFF0C\u5B83\u4F1A\u6839\u636E\u7528\u6237\u7684\u504F\u597D\uFF0C\u5728<code>&lt;html&gt;</code>\u6807\u7B7E\u4E2D\u6DFB\u52A0<code>.dark</code>\u7C7B\u3002</p><p>\u5B83\u8FD8\u4F1A\u6CE8\u5165\u5185\u8054\u811A\u672C\uFF0C\u8BD5\u56FE\u901A\u8FC7<code>vitepress-theme-appearance</code>\u952E\u4ECE\u672C\u5730\u5B58\u50A8\u4E2D\u8BFB\u53D6\u7528\u6237\u7684\u8BBE\u7F6E\uFF0C\u5E76\u6062\u590D\u7528\u6237\u504F\u597D\u7684\u989C\u8272\u6A21\u5F0F\u3002</p><div class="language-js"><span class="copy"></span><pre><code><span class="line"><span style="color:#89DDFF;font-style:italic;">export</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">default</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">appearance</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FF9CAC;">true</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><h2 id="base" tabindex="-1">base <a class="header-anchor" href="#base" aria-hidden="true">#</a></h2><ul><li><p>\u7C7B\u578B\uFF1A<code>string</code></p></li><li><p>\u9ED8\u8BA4\u503C\uFF1A<code>/</code></p></li></ul><p><code>base URL</code>\u662F\u7F51\u7AD9\u90E8\u7F72\u6240\u5728\u7684 URL\u3002\u5982\u679C\u4F60\u6253\u7B97\u5728\u4E00\u4E2A\u5B50\u8DEF\u5F84\u4E0B\u90E8\u7F72\u4F60\u7684\u7F51\u7AD9\uFF0C\u4F8B\u5982 GitHub \u9875\u9762\uFF0C\u4F60\u5C31\u9700\u8981\u8BBE\u7F6E\u8FD9\u4E2A\u3002\u5982\u679C\u4F60\u8BA1\u5212\u5C06\u4F60\u7684\u7F51\u7AD9\u90E8\u7F72\u5230<code>https://foo.github.io/bar/</code>\uFF0C\u90A3\u4E48\u4F60\u5E94\u8BE5\u5C06<code>base</code>\u8BBE\u7F6E\u4E3A<code>&#39;/bar/&#39;</code>\u3002\u5B83\u5E94\u8BE5\u603B\u662F\u4EE5\u659C\u7EBF\u5F00\u59CB\u548C\u7ED3\u675F\u3002</p><p><code>base</code>\u4F1A\u81EA\u52A8\u9884\u7F6E\u5230\u5176\u4ED6\u9009\u9879\u4E2D\u4EE5<code>/</code>\u5F00\u5934\u7684\u6240\u6709 URL \u4E2D\uFF0C\u6240\u4EE5\u4F60\u53EA\u9700\u8981\u6307\u5B9A\u4E00\u6B21\u3002</p><div class="language-js"><span class="copy"></span><pre><code><span class="line"><span style="color:#89DDFF;font-style:italic;">export</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">default</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">base</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">/base/</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><h2 id="description" tabindex="-1">description <a class="header-anchor" href="#description" aria-hidden="true">#</a></h2><ul><li><p>\u7C7B\u578B\uFF1A<code>string</code></p></li><li><p>\u9ED8\u8BA4\u503C\uFF1A<code>A VitePress site</code></p></li></ul><p>\u7F51\u7AD9\u7684\u63CF\u8FF0\u3002\u8FD9\u5C06\u4F5C\u4E3A\u9875\u9762 HTML \u4E2D\u7684<code>&lt;meta&gt;</code>\u6807\u7B7E\u5448\u73B0\u3002</p><div class="language-js"><span class="copy"></span><pre><code><span class="line"><span style="color:#89DDFF;font-style:italic;">export</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">default</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">description</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">A VitePress site</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><h2 id="head" tabindex="-1">head <a class="header-anchor" href="#head" aria-hidden="true">#</a></h2><ul><li><p>\u7C7B\u578B\uFF1A<code>HeadConfig[]</code></p></li><li><p>\u9ED8\u8BA4\u503C\uFF1A<code>[]</code></p></li></ul><p>\u5728\u9875\u9762 HTML \u7684<code>&lt;head&gt;</code>\u6807\u7B7E\u4E2D\u5448\u73B0\u7684\u989D\u5916\u5143\u7D20\u3002\u7528\u6237\u6DFB\u52A0\u7684\u6807\u7B7E\u5C06\u51FA\u73B0\u5728<code>head</code>\u6807\u7B7E\u7ED3\u675F\u524D\uFF0C\u5728VitePress \u6807\u7B7E\u4E4B\u540E\u3002</p><div class="language-js"><span class="copy"></span><pre><code><span class="line"><span style="color:#89DDFF;font-style:italic;">export</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">default</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">head</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> [</span></span>
<span class="line"><span style="color:#A6ACCD;">    [</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">link</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">rel</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">preconnect</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">href</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">https://fonts.gstatic.com</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">crossorigin</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;&#39;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">]</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;font-style:italic;">// would render: &lt;link rel=&quot;preconnect&quot; href=&quot;https://fonts.gstatic.com&quot; crossorigin /&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  ]</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><div class="language-ts"><span class="copy"></span><pre><code><span class="line"><span style="color:#C792EA;">type</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">HeadConfig</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> [</span><span style="color:#FFCB6B;">string</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Record</span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">string</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">string</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">]</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> [</span><span style="color:#FFCB6B;">string</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Record</span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">string</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">string</span><span style="color:#89DDFF;">&gt;,</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">string</span><span style="color:#A6ACCD;">]</span></span>
<span class="line"></span></code></pre></div><h2 id="ignoredeadlinks" tabindex="-1">ignoreDeadLinks <a class="header-anchor" href="#ignoredeadlinks" aria-hidden="true">#</a></h2><ul><li><p>\u7C7B\u578B\uFF1A<code>boolean</code></p></li><li><p>\u9ED8\u8BA4\u503C\uFF1A<code>false</code></p></li></ul><p>\u5982\u679C\u8BBE\u7F6E\u4E3A<code>true</code>\uFF0C\u90A3 VitePress \u5728\u6784\u5EFA\u65F6\u4E0D\u4F1A\u56E0\u4E3A\u6B7B\u94FE\u63A5\u800C\u5BFC\u81F4\u6784\u5EFA\u5931\u8D25\u3002</p><div class="language-ts"><span class="copy"></span><pre><code><span class="line"><span style="color:#89DDFF;font-style:italic;">export</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">default</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">ignoreDeadLinks</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FF9CAC;">true</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><h3 id="lang" tabindex="-1">lang <a class="header-anchor" href="#lang" aria-hidden="true">#</a></h3><ul><li><p>\u7C7B\u578B\uFF1A<code>boolean</code></p></li><li><p>\u9ED8\u8BA4\u503C\uFF1A<code>en-US</code></p></li></ul><p>\u7F51\u7AD9<code>lang</code>\u5C5E\u6027\uFF0C\u5728\u9875\u9762 HTML \u4E2D\u5448\u73B0\u4E3A<code>&lt;html lang=&quot;en-US&quot;&gt;</code>\u6807\u7B7E\u3002</p><div class="language-js"><span class="copy"></span><pre><code><span class="line"><span style="color:#89DDFF;font-style:italic;">export</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">default</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">lang</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">en-US</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><h2 id="lastupdated" tabindex="-1">lastUpdated <a class="header-anchor" href="#lastupdated" aria-hidden="true">#</a></h2><ul><li><p>\u7C7B\u578B\uFF1A<code>boolean</code></p></li><li><p>\u9ED8\u8BA4\u503C\uFF1A<code>false</code></p></li></ul><p>\u4F7F\u7528<code>git commit</code>\u6765\u83B7\u53D6\u65F6\u95F4\u6233\u3002\u8BE5\u9009\u9879\u4F7F\u9ED8\u8BA4\u4E3B\u9898\u663E\u793A\u9875\u9762\u7684\u6700\u540E\u66F4\u65B0\u65F6\u95F4\u3002\u4F60\u53EF\u4EE5\u901A\u8FC7<a href="/vitepressCn/config-theme.html#lastupdatedtext">themeConfig.lastUpdatedText</a>\u9009\u9879\u81EA\u5B9A\u4E49\u6587\u672C\u3002</p><div class="language-js"><span class="copy"></span><pre><code><span class="line"><span style="color:#89DDFF;font-style:italic;">export</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">default</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">lastUpdated</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FF9CAC;">true</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><h2 id="markdown" tabindex="-1">markdown <a class="header-anchor" href="#markdown" aria-hidden="true">#</a></h2><ul><li>\u7C7B\u578B\uFF1A<code>MarkdownOption</code></li></ul><p>\u914D\u7F6E Markdown \u89E3\u6790\u5668\u9009\u9879\u3002VitePress \u4F7F\u7528<a href="https://github.com/markdown-it/markdown-it" target="_blank" rel="noopener noreferrer">Markdown-it</a>\u4F5C\u4E3A\u5206\u6790\u5668\uFF0C\u5E76\u4F7F\u7528<a href="https://shiki.matsu.io/" target="_blank" rel="noopener noreferrer">Shiki</a>\u6765\u5F3A\u8C03\u8BED\u8A00\u8BED\u6CD5\u3002\u5728\u8FD9\u4E2A\u9009\u9879\u4E2D\uFF0C\u4F60\u53EF\u4EE5\u901A\u8FC7\u5404\u79CD\u4E0E Markdown \u6709\u5173\u7684\u9009\u9879\u6765\u6EE1\u8DB3\u4F60\u7684\u9700\u8981\u3002</p><div class="language-js"><span class="copy"></span><pre><code><span class="line"><span style="color:#89DDFF;font-style:italic;">export</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">default</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">markdown</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">theme</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">material-palenight</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">lineNumbers</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FF9CAC;">true</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><p>\u4E0B\u9762\u662F\u8FD9\u4E2A\u5BF9\u8C61\u4E2D\u53EF\u4EE5\u914D\u7F6E\u7684\u6240\u6709\u9009\u9879\uFF1A</p><div class="language-js"><span class="copy"></span><pre><code><span class="line"><span style="color:#C792EA;">interface</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">MarkdownOptions</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">extends</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">MarkdownIt</span><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">Options</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;font-style:italic;">// Custom theme for syntax highlighting.</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;font-style:italic;">// You can use an existing theme.</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;font-style:italic;">// See: https://github.com/shikijs/shiki/blob/main/docs/themes.md#all-themes</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;font-style:italic;">// Or add your own theme.</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;font-style:italic;">// See: https://github.com/shikijs/shiki/blob/main/docs/themes.md#loading-theme</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">theme</span><span style="color:#89DDFF;">?:</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Shiki</span><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">IThemeRegistration</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#FFCB6B;">light</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">Shiki</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">IThemeRegistration</span><span style="color:#89DDFF;">;</span><span style="color:#F07178;"> </span><span style="color:#FFCB6B;">dark</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">Shiki</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">IThemeRegistration</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;font-style:italic;">// Enable line numbers in code block.</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">lineNumbers</span><span style="color:#89DDFF;">?:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">boolean</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;font-style:italic;">// markdown-it-anchor plugin options.</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;font-style:italic;">// See: https://github.com/valeriangalliat/markdown-it-anchor</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">anchor</span><span style="color:#89DDFF;">?:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">permalink</span><span style="color:#89DDFF;">?:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">anchor</span><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">AnchorOptions</span><span style="color:#A6ACCD;">[</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">permalink</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">]</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;font-style:italic;">// markdown-it-attrs plugin options.</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;font-style:italic;">// See: https://github.com/arve0/markdown-it-attrs</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">attrs</span><span style="color:#89DDFF;">?:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">leftDelimiter</span><span style="color:#89DDFF;">?:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">string</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">rightDelimiter</span><span style="color:#89DDFF;">?:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">string</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">allowedAttributes</span><span style="color:#89DDFF;">?:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">string</span><span style="color:#A6ACCD;">[]</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">disable</span><span style="color:#89DDFF;">?:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">boolean</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;font-style:italic;">// markdown-it-toc-done-right plugin options</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;font-style:italic;">// See: https://github.com/nagaozen/markdown-it-toc-done-right</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">toc</span><span style="color:#89DDFF;">?:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">any</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;font-style:italic;">// Configure the Markdown-it instance.</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">config</span><span style="color:#89DDFF;">?:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">md</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">MarkdownIt</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">void</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><h2 id="outdir" tabindex="-1">outDir <a class="header-anchor" href="#outdir" aria-hidden="true">#</a></h2><ul><li><p>\u7C7B\u578B\uFF1A<code>string</code></p></li><li><p>\u9ED8\u8BA4\u503C\uFF1A<code>./.vitepress/dist</code></p></li></ul><p>\u7F51\u7AD9\u7684\u6784\u5EFA\u5B8C\u6210\u540E\u7684\u8F93\u51FA\u4F4D\u7F6E\uFF0C\u76F8\u5BF9\u4E8E\u9879\u76EE\u6839\u76EE\u5F55\uFF08\u5982\u679C\u4F60\u6B63\u5728\u8FD0\u884C VitePress \u6784\u5EFA\u9879\u76EE\uFF0C\u5219\u662F<code>docs</code>\u6587\u4EF6\u5939\uFF09\u3002</p><div class="language-js"><span class="copy"></span><pre><code><span class="line"><span style="color:#89DDFF;font-style:italic;">export</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">default</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">outDir</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">../public</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><h2 id="title" tabindex="-1">title <a class="header-anchor" href="#title" aria-hidden="true">#</a></h2><ul><li><p>\u7C7B\u578B\uFF1A<code>string</code></p></li><li><p>\u9ED8\u8BA4\u503C\uFF1A<code>VitePress</code></p></li></ul><p>\u7F51\u7AD9\u7684\u6807\u9898\u3002\u8FD9\u5C06\u663E\u793A\u5728\u5BFC\u822A\u680F\u4E2D\u3002\u9664\u975E\u5B9A\u4E49\u4E86<code>titleTemplate</code>\uFF0C\u5426\u5219\u4E5F\u4F5C\u4E3A\u6240\u6709\u9875\u9762\u6807\u9898\u7684\u540E\u7F00\u3002</p><div class="language-js"><span class="copy"></span><pre><code><span class="line"><span style="color:#89DDFF;font-style:italic;">export</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">default</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">title</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">VitePress</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><h2 id="titletemplate" tabindex="-1">titleTemplate <a class="header-anchor" href="#titletemplate" aria-hidden="true">#</a></h2><ul><li>\u7C7B\u578B\uFF1A<code>string | boolean</code></li></ul><p><code>title</code>\u7684\u540E\u7F00\u3002\u4F8B\u5982\uFF0C\u5982\u679C\u4F60\u5C06<code>title</code>\u8BBE\u7F6E\u4E3A VitePress\uFF0C\u5E76\u5C06<code>titleTemplate</code>\u8BBE\u7F6E\u4E3A My Site\uFF0C\u90A3\u4E48 HTML \u6807\u9898\u5C31\u53D8\u6210<code>VitePress | My Site</code>\u3002</p><p>\u8BBE\u7F6E\u4E3A<code>false</code>\u5219\u7981\u7528\u8BE5\u529F\u80FD\u3002\u5982\u679C\u8BE5\u9009\u9879\u672A\u5B9A\u4E49\uFF0C\u90A3\u4E48\u5C06\u4F7F\u7528\u6807\u9898\u9009\u9879\u7684\u503C\u3002</p><div class="language-js"><span class="copy"></span><pre><code><span class="line"><span style="color:#89DDFF;font-style:italic;">export</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">default</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">title</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">VitePress</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">titleTemplate</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">Vite &amp; Vue powered static site generator</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div>`,53),o=[e];function t(c,r,i,D,y,F){return a(),n("div",null,o)}var A=s(p,[["render",t]]);export{C as __pageData,A as default};
