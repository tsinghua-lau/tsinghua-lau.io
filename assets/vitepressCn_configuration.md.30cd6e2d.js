import{_ as s,o as e,c as a,a as n}from"./app.85afe299.js";const f=JSON.parse('{"title":"VitePress\u914D\u7F6E - VitePress\u4E2D\u6587\u6587\u6863","description":"VitePress\u4E2D\u6587\u6587\u6863\u4E4B\u914D\u7F6E","frontmatter":{"title":"VitePress\u914D\u7F6E - VitePress\u4E2D\u6587\u6587\u6863","description":"VitePress\u4E2D\u6587\u6587\u6863\u4E4B\u914D\u7F6E","tags":["VitePress\u4E2D\u6587\u6587\u6863,VitePress\u914D\u7F6E"],"head":[["meta",{"name":"keywords","content":"VitePress\u4E2D\u6587\u6587\u6863,VitePress\u914D\u7F6E"}]]},"headers":[],"relativePath":"vitepressCn/configuration.md"}'),t={name:"vitepressCn/configuration.md"},o=n(`<h1 id="\u914D\u7F6E" tabindex="-1">\u914D\u7F6E <a class="header-anchor" href="#\u914D\u7F6E" aria-hidden="true">#</a></h1><details class="details custom-block"><summary>\u539F\u6587</summary><p>Without any configuration, the page is pretty minimal, and the user has no way to navigate around the site. To customize your site, let&#39;s first create a .vitepress directory inside your docs directory. This is where all VitePress-specific files will be placed. Your project structure is probably like this:</p></details><p>\u5728\u6CA1\u6709\u4EFB\u4F55\u914D\u7F6E\u7684\u60C5\u51B5\u4E0B\uFF0C\u9875\u9762\u662F\u76F8\u5F53\u5C0F\u7684\uFF0C\u7528\u6237\u6CA1\u6709\u529E\u6CD5\u5728\u7F51\u7AD9\u4E0A\u5BFC\u822A\u3002\u8981\u5B9A\u5236\u4F60\u7684\u7F51\u7AD9\uFF0C\u9996\u5148\u8BA9\u6211\u4EEC\u5728\u4F60\u7684<code>docs</code>\u76EE\u5F55\u4E2D\u521B\u5EFA\u4E00\u4E2A<code>.vitepress</code>\u76EE\u5F55\u3002VitePress \u914D\u7F6E\u76F8\u5173\u7684\u6587\u4EF6\u90FD\u5C06\u653E\u5728\u8FD9\u91CC\u3002\u4F60\u7684\u9879\u76EE\u7ED3\u6784\u53EF\u80FD\u662F\u8FD9\u6837\u7684:</p><div class="language-"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">.</span></span>
<span class="line"><span style="color:#A6ACCD;">\u251C\u2500 docs</span></span>
<span class="line"><span style="color:#A6ACCD;">\u2502  \u251C\u2500 .vitepress</span></span>
<span class="line"><span style="color:#A6ACCD;">\u2502  \u2502  \u2514\u2500 config.js</span></span>
<span class="line"><span style="color:#A6ACCD;">\u2502  \u2514\u2500 index.md</span></span>
<span class="line"><span style="color:#A6ACCD;">\u2514\u2500 package.json</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><details class="details custom-block"><summary>\u539F\u6587</summary><p>The essential file for configuring a VitePress site is .vitepress/config.js, which should export a JavaScript object:</p></details><p>\u914D\u7F6E VitePress \u7F51\u7AD9\u7684\u57FA\u672C\u6587\u4EF6\u662F<code>.vitepress/config.js</code>\uFF0C\u5B83\u5E94\u8BE5\u5BFC\u51FA\u4E00\u4E2A JavaScript \u5BF9\u8C61\u3002</p><div class="language-js"><span class="copy"></span><pre><code><span class="line"><span style="color:#89DDFF;font-style:italic;">export</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">default</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">title</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">VitePress</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">description</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">Just playing around.</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><details class="details custom-block"><summary>\u539F\u6587</summary><p>In the above example, the site will have the title of VitePress, and Just playing around. as the description meta tag.</p><p>Learn everything about VitePress features at <a href="https://vitepress.vuejs.org/guide/theme-introduction.html" target="_blank" rel="noopener noreferrer">Theme: Introduction</a> to find how to configure specific features within this config file.</p><p>You may also find all configuration references at <a href="https://vitepress.vuejs.org/config/introduction.html" target="_blank" rel="noopener noreferrer">Configs</a>.</p></details><p>\u5728\u4E0A\u9762\u7684\u4F8B\u5B50\u4E2D\uFF0C\u8BE5\u7F51\u7AD9\u5C06\u6709 VitePress \u7684 <code>title</code> \u548C <code>description</code> \u5143\u6807\u7B7E\uFF0C\u503C\u5206\u522B\u4E3A\uFF1A<code>VitePress</code> \u548C <code>Just playing around</code>\u3002</p><p>\u4E86\u89E3\u6709\u5173 VitePress \u529F\u80FD\u7279\u6027\u53EF\u4EE5\u5728<a href="/vitepressCn/theme-introduction.html">Theme \u4E3B\u9898</a>\u4E2D\u627E\u5230\u5982\u4F55\u5728\u6B64\u914D\u7F6E\u6587\u4EF6\u4E2D\u914D\u7F6E\u7279\u5B9A\u529F\u80FD\u3002</p><p>\u4F60\u4E5F\u53EF\u4EE5\u5728<a href="/vitepressCn/config-introduction.html">Configs \u914D\u7F6E</a>\u4E2D\u627E\u5230\u6240\u6709\u7684\u914D\u7F6E\u53C2\u8003\u3002</p>`,11),i=[o];function r(p,l,c,d,u,y){return e(),a("div",null,i)}var m=s(t,[["render",r]]);export{f as __pageData,m as default};
