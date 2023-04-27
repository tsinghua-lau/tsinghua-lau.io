import{_ as s,o as n,c as a,a as l}from"./app.85afe299.js";const A=JSON.parse('{"title":"VitePress\u914D\u7F6E\u6307\u5357 - VitePress\u4E2D\u6587\u6587\u6863","description":"VitePress\u4E2D\u6587\u6587\u6863\u4E4BVitePress\u914D\u7F6E\u6307\u5357","frontmatter":{"title":"VitePress\u914D\u7F6E\u6307\u5357 - VitePress\u4E2D\u6587\u6587\u6863","description":"VitePress\u4E2D\u6587\u6587\u6863\u4E4BVitePress\u914D\u7F6E\u6307\u5357","tags":["VitePress\u4E2D\u6587\u6587\u6863,VitePress\u914D\u7F6E"],"head":[["meta",{"name":"keywords","content":"VitePress\u4E2D\u6587\u6587\u6863,VitePress\u914D\u7F6E"}]]},"headers":[{"level":2,"title":"\u7C7B\u578B\u63D0\u793A","slug":"\u7C7B\u578B\u63D0\u793A"},{"level":2,"title":"\u7C7B\u578B\u5316\u7684\u4E3B\u9898\u914D\u7F6E","slug":"\u7C7B\u578B\u5316\u7684\u4E3B\u9898\u914D\u7F6E"}],"relativePath":"vitepressCn/config-introduction.md"}'),e={name:"vitepressCn/config-introduction.md"},p=l(`<h1 id="\u914D\u7F6E" tabindex="-1">\u914D\u7F6E <a class="header-anchor" href="#\u914D\u7F6E" aria-hidden="true">#</a></h1><p>VitePress \u914D\u7F6E\u7684\u914D\u7F6E\u6587\u4EF6<code>.vitepress/config.js</code>\uFF0CVitePress\u7684\u914D\u7F6E\u90FD\u5728\u8FD9\u4E2A\u6587\u4EF6\u4E2D\u8BBE\u7F6E\u3002</p><div class="language-"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">.</span></span>
<span class="line"><span style="color:#A6ACCD;">\u251C\u2500 docs</span></span>
<span class="line"><span style="color:#A6ACCD;">\u2502  \u251C\u2500 .vitepress</span></span>
<span class="line"><span style="color:#A6ACCD;">\u2502  \u2502  \u2514\u2500 config.js</span></span>
<span class="line"><span style="color:#A6ACCD;">\u2502  \u2514\u2500 index.md</span></span>
<span class="line"><span style="color:#A6ACCD;">\u2514\u2500 package.json</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>VitePress\u67092\u79CD\u7C7B\u578B\u7684\u914D\u7F6E\u3002\u4E00\u79CD\u662F<a href="/vitepressCn/config-app.html">\u5E94\u7528\u914D\u7F6E</a>\uFF0C\u914D\u7F6E\u7F51\u7AD9\u7684\u57FA\u672C\u529F\u80FD\uFF0C\u5982\u8BBE\u7F6E\u7F51\u7AD9\u7684\u6807\u9898\uFF0C\u6216\u81EA\u5B9A\u4E49Markdown \u89E3\u6790\u5668\u7684\u5DE5\u4F5C\u65B9\u5F0F\u3002\u7B2C\u4E8C\u79CD\u662F<a href="/vitepressCn/config-theme.html">\u4E3B\u9898\u914D\u7F6E</a>\uFF0C\u7528\u4E8E\u914D\u7F6E\u7F51\u7AD9\u7684\u4E3B\u9898\uFF0C\u4F8B\u5982\uFF0C\u6DFB\u52A0\u4FA7\u8FB9\u680F\uFF0C\u6216\u8005\u6DFB\u52A0&quot;<a href="/vitepressCn/theme-edit-link.html">\u5728GitHub\u4E0A\u7F16\u8F91\u6B64\u9875\u9762</a>&quot;\u7684\u94FE\u63A5\u7B49\u529F\u80FD\u3002</p><p>\u8FD8\u6709\u4E00\u4E2A\u914D\u7F6E\uFF0C\u4F60\u53EF\u4EE5\u5728<code>Frontmatter</code>\u4E2D\u8FDB\u884C\u3002<a href="/vitepressCn/config-frontmatter.html">Frontmatter</a>\u7684\u914D\u7F6E\u53EF\u4EE5\u8986\u76D6<code>\u5E94\u7528\u914D\u7F6E</code>\u6216<code>\u4E3B\u9898\u914D\u7F6E</code>\u5B9A\u4E49\u7684\u5168\u5C40\u914D\u7F6E\u3002\u7136\u800C\uFF0C\u6709\u51E0\u4E2A\u9009\u9879\u4E5F\u53EA\u5728<code>Frontmatter</code>\u4E2D\u53EF\u7528\u3002</p><p>\u8BF7\u53C2\u8003\u76F8\u5E94\u7684\u914D\u7F6E\u9875\u9762\u4EE5\u4E86\u89E3\u66F4\u591A\u3002</p><h2 id="\u7C7B\u578B\u63D0\u793A" tabindex="-1">\u7C7B\u578B\u63D0\u793A <a class="header-anchor" href="#\u7C7B\u578B\u63D0\u793A" aria-hidden="true">#</a></h2><p>\u7531\u4E8E VitePress \u5E26\u6709 TypeScript \u7C7B\u578B\uFF0C\u4F60\u53EF\u4EE5\u5229\u7528\u4F60\u7684 IDE \u7684 intellisense \u4E0E jsdoc \u7C7B\u578B\u63D0\u793A\u3002</p><div class="language-js"><span class="copy"></span><pre><code><span class="line"><span style="color:#676E95;font-style:italic;">/**</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> * </span><span style="color:#89DDFF;font-style:italic;">@</span><span style="color:#C792EA;font-style:italic;">type</span><span style="color:#676E95;font-style:italic;"> </span><span style="color:#89DDFF;font-style:italic;">{</span><span style="color:#FFCB6B;font-style:italic;">import(&#39;vitepress&#39;).UserConfig</span><span style="color:#89DDFF;font-style:italic;">}</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> */</span></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> config </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;font-style:italic;">// ...</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">export</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">default</span><span style="color:#A6ACCD;"> config</span></span>
<span class="line"></span></code></pre></div><p>\u4F60\u4E5F\u53EF\u4EE5\u4F7F\u7528<code>defineConfig</code>\u65B9\u6CD5\uFF0C\u5B83\u53EF\u4EE5\u5728\u4E0D\u9700\u8981 jsdoc \u6CE8\u91CA\u7684\u60C5\u51B5\u4E0B\u63D0\u4F9B\u667A\u80FD\u63D0\u793A\u3002</p><div class="language-js"><span class="copy"></span><pre><code><span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">defineConfig</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">vitepress</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">export</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">default</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">defineConfig</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;font-style:italic;">// ...</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"></span></code></pre></div><p>VitePress \u4E5F\u76F4\u63A5\u652F\u6301 TS \u914D\u7F6E\u6587\u4EF6\u3002\u4F60\u4E5F\u53EF\u4EE5\u4F7F\u7528<code>.vitepress/config.ts</code>\u4E0E<code>defineConfig</code>\u65B9\u6CD5\u3002</p><h2 id="\u7C7B\u578B\u5316\u7684\u4E3B\u9898\u914D\u7F6E" tabindex="-1">\u7C7B\u578B\u5316\u7684\u4E3B\u9898\u914D\u7F6E <a class="header-anchor" href="#\u7C7B\u578B\u5316\u7684\u4E3B\u9898\u914D\u7F6E" aria-hidden="true">#</a></h2><p>\u9ED8\u8BA4\u60C5\u51B5\u4E0B\uFF0C<code>defineConfig</code>\u65B9\u6CD5\u4F7F\u7528\u4E86\u9ED8\u8BA4\u4E3B\u9898\u7684\u914D\u7F6E\u7C7B\u578B\uFF1A</p><div class="language-js"><span class="copy"></span><pre><code><span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">defineConfig</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">vitepress</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">export</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">default</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">defineConfig</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">themeConfig</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;font-style:italic;">// Type is \`DefaultTheme.Config\`</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"></span></code></pre></div><p>\u5982\u679C\u4F60\u4F7F\u7528\u81EA\u5B9A\u4E49\u4E3B\u9898\uFF0C\u5E76\u5E0C\u671B\u5BF9\u4E3B\u9898\u914D\u7F6E\u8FDB\u884C\u7C7B\u578B\u68C0\u67E5\uFF0C\u4F60\u9700\u8981\u4F7F\u7528<code>defineConfigWithTheme</code>\uFF0C\u5E76\u901A\u8FC7\u6CDB\u578B\u53C2\u6570\u4F20\u9012\u81EA\u5B9A\u4E49\u4E3B\u9898\u7684\u914D\u7F6E\u7C7B\u578B\u3002</p><div class="language-js"><span class="copy"></span><pre><code><span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">defineConfigWithTheme</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">vitepress</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">ThemeConfig</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">your-theme</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">export</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">default</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">defineConfigWithTheme</span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">ThemeConfig</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">themeConfig</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;font-style:italic;">// Type is \`ThemeConfig\`</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"></span></code></pre></div>`,17),o=[p];function t(c,r,i,y,D,F){return n(),a("div",null,o)}var d=s(e,[["render",t]]);export{A as __pageData,d as default};
