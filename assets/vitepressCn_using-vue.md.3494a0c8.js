import{_ as a,o as n,c as e,e as o,i as t,a as l}from"./app.85afe299.js";const c={};function r(s,p){return n(),e("span",null,"\u26A1")}var i=a(c,[["render",r]]);const y="_example_t4bci_2";var D={example:y};const d={props:["slot-key"],components:{ComponentInHeader:i},mounted(){document.querySelector(`.${this.$style.example}`).textContent="\u8FD9\u6BB5\u6587\u672C\u7531\u7531\u5185\u8054\u811A\u672C\u6E32\u67D3\u7684\uFF0C\u5E76\u7531\u5185\u8054 CSS \u6837\u5F0F\u5316\u3002"}},V=JSON.parse('{"title":"VitePress\u5728Markdown\u4E2D\u4F7F\u7528Vue\u529F\u80FD - VitePress\u4E2D\u6587\u6587\u6863","description":"VitePress\u4E2D\u6587\u6587\u6863\u4E4B\u5728Markdown\u4E2D\u4F7F\u7528Vue\u529F\u80FD","frontmatter":{"title":"VitePress\u5728Markdown\u4E2D\u4F7F\u7528Vue\u529F\u80FD - VitePress\u4E2D\u6587\u6587\u6863","description":"VitePress\u4E2D\u6587\u6587\u6863\u4E4B\u5728Markdown\u4E2D\u4F7F\u7528Vue\u529F\u80FD","tags":["VitePress\u4E2D\u6587\u6587\u6863,Markdown,Vue"],"head":[["meta",{"name":"keywords","content":"VitePress\u4E2D\u6587\u6587\u6863,Markdown,Vue"}]]},"headers":[{"level":2,"title":"\u6A21\u677F","slug":"\u6A21\u677F"},{"level":3,"title":"\u63D2\u503C","slug":"\u63D2\u503C"},{"level":3,"title":"Directives","slug":"directives"},{"level":3,"title":"useData","slug":"usedata"},{"level":2,"title":"\u8F6C\u4E49","slug":"\u8F6C\u4E49"},{"level":2,"title":"\u4F7F\u7528 Components","slug":"\u4F7F\u7528-components"},{"level":3,"title":"\u5C40\u90E8\u7EC4\u4EF6","slug":"\u5C40\u90E8\u7EC4\u4EF6"},{"level":3,"title":"\u5168\u5C40\u7EC4\u4EF6","slug":"\u5168\u5C40\u7EC4\u4EF6"},{"level":2,"title":"\u5728 header \u6807\u7B7E\u4E2D\u4F7F\u7528\u7EC4\u4EF6","slug":"\u5728-header-\u6807\u7B7E\u4E2D\u4F7F\u7528\u7EC4\u4EF6"},{"level":2,"title":"CSS \u9884\u5904\u7406\u5668","slug":"css-\u9884\u5904\u7406\u5668"},{"level":2,"title":"Script & Style \u4F18\u5148\u7EA7\u63D0\u5347","slug":"script-style-\u4F18\u5148\u7EA7\u63D0\u5347"},{"level":2,"title":"\u5185\u7F6E\u7EC4\u4EF6","slug":"\u5185\u7F6E\u7EC4\u4EF6"},{"level":2,"title":"\u6D4F\u89C8\u5668 API \u8BBF\u95EE\u9650\u5236","slug":"\u6D4F\u89C8\u5668-api-\u8BBF\u95EE\u9650\u5236"}],"relativePath":"vitepressCn/using-vue.md"}'),F=l(`<h1 id="\u5728-markdown-\u4E2D\u4F7F\u7528-vue-\u529F\u80FD" tabindex="-1">\u5728 Markdown \u4E2D\u4F7F\u7528 Vue \u529F\u80FD <a class="header-anchor" href="#\u5728-markdown-\u4E2D\u4F7F\u7528-vue-\u529F\u80FD" aria-hidden="true">#</a></h1><details class="details custom-block"><summary>\u539F\u6587</summary><p>In VitePress, each markdown file is compiled into HTML and then processed as a Vue Single-File Component. This means you can use any Vue features inside the markdown, including dynamic templating, using Vue components, or arbitrary in-page Vue component logic by adding a <code>&lt;script&gt;</code> tag.</p><p>It is also important to know that VitePress leverages Vue 3&#39;s compiler to automatically detect and optimize the purely static parts of the markdown. Static contents are optimized into single placeholder nodes and eliminated from the page&#39;s JavaScript payload. They are also skipped during client-side hydration. In short, you only pay for the dynamic parts on any given page.</p></details><p>\u5728 VitePress \u4E2D\uFF0C\u6BCF\u4E2A Markdown \u6587\u4EF6\u90FD\u88AB\u7F16\u8BD1\u6210<code>HTML</code>\uFF0C\u7136\u540E\u4F5C\u4E3A\u4E00\u4E2A Vue \u5355\u6587\u4EF6\u7EC4\u4EF6\u8FDB\u884C\u5904\u7406\u3002\u8FD9\u610F\u5473\u7740\u4F60\u53EF\u4EE5\u5728 Markdown \u5185\u4F7F\u7528\u4EFB\u4F55 Vue \u529F\u80FD\uFF0C\u5305\u62EC\u52A8\u6001\u6A21\u677F\uFF0C\u4F7F\u7528 Vue \u7EC4\u4EF6\uFF0C\u6216\u901A\u8FC7\u6DFB\u52A0<code>&lt;script&gt;</code>\u6807\u7B7E\u6765\u5B9E\u73B0\u4EFB\u610F\u7684\u9875\u5185 Vue \u7EC4\u4EF6\u903B\u8F91\u3002</p><p>\u540C\u6837\u91CD\u8981\u7684\u662F\uFF0CVitePress \u5229\u7528 Vue 3 \u7684\u7F16\u8BD1\u5668\u6765\u81EA\u52A8\u68C0\u6D4B\u548C\u4F18\u5316 Markdown \u7684\u7EAF\u9759\u6001\u90E8\u5206\u3002\u9759\u6001\u5185\u5BB9\u88AB\u4F18\u5316\u4E3A\u5355\u4E2A\u5360\u4F4D\u7B26\u8282\u70B9\uFF0C\u5E76\u4ECE\u9875\u9762\u7684 JavaScript \u6709\u6548\u8F7D\u8377\u4E2D\u5220\u9664\u3002\u5B83\u4EEC\u4E5F\u4F1A\u5728\u5BA2\u6237\u7AEF <a href="https://blog.csdn.net/qq_41800366/article/details/117738916" target="_blank" rel="noopener noreferrer">hydration</a> \u8FC7\u7A0B\u4E2D\u88AB\u8DF3\u8FC7\u3002\u7B80\u800C\u8A00\u4E4B\uFF0C\u4F60\u53EA\u9700\u4E3A\u4EFB\u4F55\u7279\u5B9A\u9875\u9762\u7684\u52A8\u6001\u90E8\u5206\u4EA4\u4ED8\u529F\u80FD\u3002</p><h2 id="\u6A21\u677F" tabindex="-1">\u6A21\u677F <a class="header-anchor" href="#\u6A21\u677F" aria-hidden="true">#</a></h2><h3 id="\u63D2\u503C" tabindex="-1">\u63D2\u503C <a class="header-anchor" href="#\u63D2\u503C" aria-hidden="true">#</a></h3><p>\u6BCF\u4E2A Markdown \u6587\u4EF6\u9996\u5148\u88AB\u7F16\u8BD1\u6210 HTML\uFF0C\u7136\u540E\u4F5C\u4E3A\u4E00\u4E2A Vue \u7EC4\u4EF6\u4F20\u9012\u7ED9 Vite \u6D41\u7A0B\u7BA1\u9053\u3002\u8FD9\u610F\u5473\u7740\u4F60\u53EF\u4EE5\u5728\u6587\u672C\u4E2D\u4F7F\u7528 Vue \u98CE\u683C\u7684\u63D2\u503C\u3002</p><p><strong>\u8F93\u5165</strong></p><div class="language-md"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">{{ 1 + 1 }}</span></span>
<span class="line"></span></code></pre></div><p><strong>\u663E\u793A</strong></p><div class="language-"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">2</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h3 id="directives" tabindex="-1">Directives <a class="header-anchor" href="#directives" aria-hidden="true">#</a></h3><p>directives \u4E5F\u53EF\u4EE5\u6709\u6548\u5DE5\u4F5C:</p><p><strong>\u8F93\u5165</strong></p><div class="language-md"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">&lt;span v-for=&quot;i in 3&quot;&gt;{{ i }}&lt;/span&gt;</span></span>
<span class="line"></span></code></pre></div><p><strong>\u663E\u793A</strong></p><div class="language-"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">1 </span></span>
<span class="line"><span style="color:#A6ACCD;">2 </span></span>
<span class="line"><span style="color:#A6ACCD;">3 </span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h3 id="usedata" tabindex="-1">useData <a class="header-anchor" href="#usedata" aria-hidden="true">#</a></h3><p>\u4F60\u53EF\u4EE5\u5728<code>&lt;script&gt;</code>\u4E2D\u4F7F\u7528 useData helper\uFF0C\u5E76\u5C06\u6570\u636E\u66B4\u9732\u7ED9\u9875\u9762\u3002</p><p><strong>\u8F93\u5165</strong></p><div class="language-js"><span class="copy"></span><pre><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">setup</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">import </span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;"> useData </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> from &#39;vitepress&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">const </span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;"> page </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> = useData()</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">pre</span><span style="color:#89DDFF;">&gt;{{</span><span style="color:#A6ACCD;"> page </span><span style="color:#89DDFF;">}}&lt;/</span><span style="color:#F07178;">pre</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">Output</span></span>
<span class="line"></span></code></pre></div><p><strong>\u663E\u793A</strong></p><div class="language-json"><span class="copy"></span><pre><code><span class="line"><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C792EA;">path</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">/using-vue.html</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C792EA;">title</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">Using Vue in Markdown</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C792EA;">frontmatter</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><h2 id="\u8F6C\u4E49" tabindex="-1">\u8F6C\u4E49 <a class="header-anchor" href="#\u8F6C\u4E49" aria-hidden="true">#</a></h2><details class="details custom-block"><summary>\u539F\u6587</summary><p>By default, fenced code blocks are automatically wrapped with v-pre, unless you have set some language with -vue suffix like js-vue (in that case you can use Vue-style interpolation inside fences). To display raw mustaches or Vue-specific syntax inside inline code snippets or plain text, you need to wrap a paragraph with the v-pre custom container:</p></details><p>\u9ED8\u8BA4\u60C5\u51B5\u4E0B\uFF0C\u4EE3\u7801\u5757\u4F1A\u81EA\u52A8\u7528<code>v-pre</code>\u5305\u88C5\uFF0C\u9664\u975E\u4F60\u8BBE\u7F6E\u4E86\u4E00\u4E9B\u5E26\u6709<code>-vue</code>\u540E\u7F00\u7684\u8BED\u8A00\uFF0C\u5982<code>js-vue</code>\uFF08\u5728\u8FD9\u79CD\u60C5\u51B5\u4E0B\uFF0C\u4F60\u53EF\u4EE5\u5728\u4EE3\u7801\u5757\u5185\u4F7F\u7528 Vue \u98CE\u683C\u7684\u63D2\u503C\uFF09\u3002\u8981\u5728\u5185\u8054\u4EE3\u7801\u7247\u6BB5\u6216\u7EAF\u6587\u672C\u4E2D\u663E\u793A\u539F\u59CB\u7684\u5927\u62EC\u53F7\u6216 Vue \u7279\u5B9A\u7684\u8BED\u6CD5\uFF0C\u4F60\u9700\u8981\u7528<code>v-pre</code>\u81EA\u5B9A\u4E49\u5BB9\u5668\u6765\u5305\u88C5\u4E00\u4E2A\u6BB5\u843D\uFF1A</p><p><strong>\u8F93\u5165</strong></p><div class="language-md"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">::: v-pre</span></span>
<span class="line"><span style="color:#89DDFF;">\`</span><span style="color:#C3E88D;">{{ This will be displayed as-is }}</span><span style="color:#89DDFF;">\`</span></span>
<span class="line"><span style="color:#A6ACCD;">:::</span></span>
<span class="line"></span></code></pre></div><p><strong>\u663E\u793A</strong></p><div><p><code>{{ This will be displayed as-is }}</code></p></div><h2 id="\u4F7F\u7528-components" tabindex="-1">\u4F7F\u7528 Components <a class="header-anchor" href="#\u4F7F\u7528-components" aria-hidden="true">#</a></h2><p>\u5F53\u4F60\u9700\u8981\u6709\u66F4\u591A\u7684\u7075\u6D3B\u6027\u65F6\uFF0CVitePress \u5141\u8BB8\u4F60\u7528\u81EA\u5DF1\u7684 Vue \u7EC4\u4EF6\u6765\u6269\u5C55\u4F60\u7684 Markdown\u3002</p><h3 id="\u5C40\u90E8\u7EC4\u4EF6" tabindex="-1">\u5C40\u90E8\u7EC4\u4EF6 <a class="header-anchor" href="#\u5C40\u90E8\u7EC4\u4EF6" aria-hidden="true">#</a></h3><p>\u5982\u679C\u4F60\u7684\u7EC4\u4EF6\u53EA\u5728\u5C11\u6570\u5730\u65B9\u4F7F\u7528\uFF0C\u63A8\u8350\u7684\u4F7F\u7528\u65B9\u6CD5\u662F\u5728\u4F7F\u7528\u5B83\u7684\u6587\u4EF6\u4E2D\u5BFC\u5165\u7EC4\u4EF6\u3002</p><div class="language-md"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">&lt;script setup&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">import CustomComponent from &#39;../components/CustomComponent.vue&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;/script&gt;</span></span>
<span class="line"><span style="color:#89DDFF;"># </span><span style="color:#FFCB6B;">Docs</span></span>
<span class="line"><span style="color:#A6ACCD;">This is a .md using a custom component</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;CustomComponent /&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">## </span><span style="color:#FFCB6B;">More docs</span></span>
<span class="line"><span style="color:#A6ACCD;">...</span></span>
<span class="line"></span></code></pre></div><h3 id="\u5168\u5C40\u7EC4\u4EF6" tabindex="-1">\u5168\u5C40\u7EC4\u4EF6 <a class="header-anchor" href="#\u5168\u5C40\u7EC4\u4EF6" aria-hidden="true">#</a></h3><p>\u5982\u679C\u7EC4\u4EF6\u8981\u5728\u6587\u6863\u7684\u591A\u4E2A\u9875\u9762\u4E2D\u4F7F\u7528\uFF0C\u5B83\u4EEC\u53EF\u4EE5\u5728\u4E3B\u9898\u4E2D\u5168\u5C40\u6CE8\u518C\uFF08\u6216\u4F5C\u4E3A\u6269\u5C55\u9ED8\u8BA4 VitePress \u4E3B\u9898\u7684\u4E00\u90E8\u5206\uFF09\u3002\u8BF7\u67E5\u770B<a href="/vitepressCn/theme-introduction.html">\u4E3B\u9898\u6307\u5357</a>\u4EE5\u4E86\u89E3\u66F4\u591A\u4FE1\u606F\u3002</p><p>\u5728<code>.vitepress/theme/index.js</code>\u4E2D\uFF0C<code>enhanceApp</code>\u51FD\u6570\u63A5\u6536 Vue \u5E94\u7528\u5B9E\u4F8B\uFF0C\u56E0\u6B64\u4F60\u53EF\u4EE5\u50CF\u5728\u666E\u901AVue \u5E94\u7528\u4E2D\u90A3\u6837<a href="https://vuejs.org/guide/components/registration.html" target="_blank" rel="noopener noreferrer">\u6CE8\u518C\u7EC4\u4EF6</a>\u3002</p><div class="language-js"><span class="copy"></span><pre><code><span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> DefaultTheme </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">vitepress/theme</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">export</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">default</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">...</span><span style="color:#A6ACCD;">DefaultTheme</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">enhanceApp</span><span style="color:#89DDFF;">({</span><span style="color:#A6ACCD;"> app </span><span style="color:#89DDFF;">})</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">app</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">component</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">VueClickAwayExample</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">VueClickAwayExample</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><p>\u4EE5\u540E\u5728\u4F60\u7684 Markdown \u6587\u4EF6\u4E2D\uFF0C\u8BE5\u7EC4\u4EF6\u53EF\u4EE5\u7A7F\u63D2\u5728\u5185\u5BB9\u4E4B\u95F4\u3002</p><div class="language-md"><span class="copy"></span><pre><code><span class="line"><span style="color:#89DDFF;"># </span><span style="color:#FFCB6B;">Vue Click Away</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;VueClickAwayExample /&gt;</span></span>
<span class="line"></span></code></pre></div><div class="warning custom-block"><p class="custom-block-title">IMPORTANT</p><p>\u8BF7\u786E\u4FDD\u81EA\u5B9A\u4E49\u7EC4\u4EF6\u7684\u540D\u79F0\u5305\u542B\u4E00\u4E2A\u8FDE\u5B57\u7B26\u6216\u4F7F\u7528<code>PascalCase</code>\u3002\u5426\u5219\uFF0C\u5B83\u5C06\u88AB\u89C6\u4E3A\u5185\u8054\u5143\u7D20\uFF0C\u5E76\u88AB\u5305\u88F9\u5728<code>&lt;p&gt;</code>\u6807\u7B7E\u5185\uFF0C\u8FD9\u5C06\u5BFC\u81F4 hydration \u4E0D\u5339\u914D\uFF0C\u56E0\u4E3A<code>&lt;p&gt;</code>\u4E0D\u5141\u8BB8\u5C06\u5757\u72B6\u5143\u7D20\u653E\u5728\u5B83\u91CC\u9762\u3002</p></div><h2 id="\u5728-header-\u6807\u7B7E\u4E2D\u4F7F\u7528\u7EC4\u4EF6" tabindex="-1">\u5728 header \u6807\u7B7E\u4E2D\u4F7F\u7528\u7EC4\u4EF6 <a class="header-anchor" href="#\u5728-header-\u6807\u7B7E\u4E2D\u4F7F\u7528\u7EC4\u4EF6" aria-hidden="true">#</a></h2><p>\u53EF\u4EE5\u5728 header \u6807\u7B7E\u4E2D\u4F7F\u7528 Vue \u7EC4\u4EF6\uFF0C\u4F46\u9700\u8981\u6CE8\u610F\u8BED\u8A00\u4E4B\u95F4\u7684\u533A\u522B\uFF1A</p><table><thead><tr><th>Markdown</th><th>Output HTML</th><th>Parsed Header</th></tr></thead><tbody><tr><td><pre><code> # text &lt;Tag/&gt; </code></pre></td><td><code>&lt;h1&gt;text &lt;Tag/&gt;&lt;/h1&gt;</code></td><td><code>text</code></td></tr><tr><td><pre><code> # text \`&lt;Tag/&gt;\` </code></pre></td><td><code>&lt;h1&gt;text &lt;code&gt;&amp;lt;Tag/&amp;gt;&lt;/code&gt;&lt;/h1&gt;</code></td><td><code>text &lt;Tag/&gt;</code></td></tr></tbody></table><p>\u88AB<code>&lt;code&gt;</code>\u5305\u88F9\u7684 HTML \u5C06\u6309\u539F\u6837\u663E\u793A\uFF1B\u53EA\u6709\u672A\u88AB\u5305\u88F9\u7684 HTML \u4F1A\u88AB Vue \u89E3\u6790\u3002</p><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>\u8F93\u51FA\u7684 HTML \u662F\u7531<a href="https://github.com/markdown-it/markdown-it" target="_blank" rel="noopener noreferrer">markdown-it</a>\u5B8C\u6210\u7684\uFF0C\u800C\u89E3\u6790\u7684\u6807\u9898\u5219\u7531 VitePress \u5904\u7406\uFF08\u5E76\u7528\u4E8E\u4FA7\u8FB9\u680F\u548C\u6587\u4EF6\u6807\u9898\uFF09\u3002</p></div><h2 id="css-\u9884\u5904\u7406\u5668" tabindex="-1">CSS \u9884\u5904\u7406\u5668 <a class="header-anchor" href="#css-\u9884\u5904\u7406\u5668" aria-hidden="true">#</a></h2><p>VitePress <a href="https://vitejs.dev/guide/features.html#css" target="_blank" rel="noopener noreferrer">\u5185\u7F6E\u652F\u6301</a> CSS \u9884\u5904\u7406\u7A0B\u5E8F\uFF1A<code>.scss</code>\u3001<code>.sass</code>\u3001<code>.less</code>\u3001<code>.styl</code>\u548C<code>.stylus</code>\u6587\u4EF6\u3002\u4E0D\u9700\u8981\u4E3A\u5B83\u4EEC\u5B89\u88C5 Vite-specific \u63D2\u4EF6\uFF0C\u4F46\u5FC5\u987B\u5B89\u88C5\u76F8\u5E94\u7684\u9884\u5904\u7406\u5668\u672C\u8EAB\u3002</p><div class="language-"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;"># .scss and .sass</span></span>
<span class="line"><span style="color:#A6ACCD;">npm install -D sass</span></span>
<span class="line"><span style="color:#A6ACCD;"># .less</span></span>
<span class="line"><span style="color:#A6ACCD;">npm install -D less</span></span>
<span class="line"><span style="color:#A6ACCD;"># .styl and .stylus</span></span>
<span class="line"><span style="color:#A6ACCD;">npm install -D stylus</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>\u7136\u540E\u4F60\u53EF\u4EE5\u5728 Markdown \u548C\u4E3B\u9898\u7EC4\u4EF6\u4E2D\u4F7F\u7528\u4EE5\u4E0B\u5185\u5BB9\u3002</p><div class="language-vue"><span class="copy"></span><pre><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">style</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">lang</span><span style="color:#A6ACCD;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">sass</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#FFCB6B;">.title</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">font-size</span><span style="color:#A6ACCD;">: </span><span style="color:#F78C6C;">20</span><span style="color:#89DDFF;font-style:italic;">px</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">style</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span></code></pre></div><h2 id="script-style-\u4F18\u5148\u7EA7\u63D0\u5347" tabindex="-1">Script &amp; Style \u4F18\u5148\u7EA7\u63D0\u5347 <a class="header-anchor" href="#script-style-\u4F18\u5148\u7EA7\u63D0\u5347" aria-hidden="true">#</a></h2><p>\u6709\u65F6\u4F60\u53EF\u80FD\u9700\u8981\u5C06\u4E00\u4E9B JavaScript \u6216 CSS \u53EA\u5E94\u7528\u4E8E\u5F53\u524D\u9875\u9762\u3002\u5728\u8FD9\u4E9B\u60C5\u51B5\u4E0B\uFF0C\u4F60\u53EF\u4EE5\u76F4\u63A5\u5728 Markdown\u6587\u4EF6\u4E2D\u5199\u6839\u7EA7\u7684<code>&lt;script&gt;</code>\u6216<code>&lt;style&gt;</code>\u5757\u3002\u8FD9\u4E9B\u5C06\u88AB\u4ECE\u7F16\u8BD1\u7684 HTML \u4E2D\u63D0\u5347\u51FA\u6765\uFF0C\u5E76\u4F5C\u4E3A<code>&lt;script&gt;</code>\u548C<code>&lt;style&gt;</code>\u5757\u7528\u4E8E\u751F\u6210\u7684 Vue \u5355\u6587\u4EF6\u7EC4\u4EF6\u3002</p>`,54),C=l(`<div class="language-md"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">&lt;p class=&quot;demo&quot; :class=&quot;$style.example&quot;&gt;&lt;/p&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">&lt;style module&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">.example {</span></span>
<span class="line"><span style="color:#A6ACCD;">  color: #41b883;</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;/style&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">&lt;script&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">import ComponentInHeader from &#39;../components/ComponentInHeader.vue&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">export default {</span></span>
<span class="line"><span style="color:#A6ACCD;">  props: </span><span style="color:#89DDFF;">[</span><span style="color:#C3E88D;">&#39;slot-key&#39;</span><span style="color:#89DDFF;">]</span><span style="color:#A6ACCD;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">  components: { ComponentInHeader },</span></span>
<span class="line"><span style="color:#A6ACCD;">  mounted () {</span></span>
<span class="line"><span style="color:#A6ACCD;">    document.querySelector(</span><span style="color:#89DDFF;">\`</span><span style="color:#C3E88D;">.\${this.$style.example}</span><span style="color:#89DDFF;">\`</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">      .textContent = &#39;\u8FD9\u6BB5\u6587\u672C\u7531\u7531\u5185\u8054\u811A\u672C\u6E32\u67D3\u7684\uFF0C\u5E76\u7531\u5185\u8054 CSS \u6837\u5F0F\u5316\u3002&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;/script&gt;</span></span>
<span class="line"></span></code></pre></div><p>\u7EC4\u4EF6\u4EE3\u7801\uFF1A</p><div class="language-vue"><span class="copy"></span><pre><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">span</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">&amp;#x26A1;</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">span</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span></code></pre></div><h2 id="\u5185\u7F6E\u7EC4\u4EF6" tabindex="-1">\u5185\u7F6E\u7EC4\u4EF6 <a class="header-anchor" href="#\u5185\u7F6E\u7EC4\u4EF6" aria-hidden="true">#</a></h2><p>VitePress \u63D0\u4F9B<code>ClientOnly</code>\u548C<code>OutboundLink</code>\u7B49\u5185\u7F6E Vue \u7EC4\u4EF6\uFF0C\u8BF7\u67E5\u770B<a href="/vitepressCn/api.html">API \u7D22\u5F15</a>\u4EE5\u4E86\u89E3\u66F4\u591A\u4FE1\u606F\u3002</p><p>\u53C2\u8003\uFF1A</p><ul><li><a href="/vitepressCn/using-vue.html#\u5728-header-\u6807\u7B7E\u4E2D\u4F7F\u7528\u7EC4\u4EF6">\u5728-header-\u6807\u7B7E\u4E2D\u4F7F\u7528\u7EC4\u4EF6</a></li></ul><h2 id="\u6D4F\u89C8\u5668-api-\u8BBF\u95EE\u9650\u5236" tabindex="-1">\u6D4F\u89C8\u5668 API \u8BBF\u95EE\u9650\u5236 <a class="header-anchor" href="#\u6D4F\u89C8\u5668-api-\u8BBF\u95EE\u9650\u5236" aria-hidden="true">#</a></h2><p>\u7531\u4E8E VitePress \u5E94\u7528\u7A0B\u5E8F\u5728\u751F\u6210\u9759\u6001\u6784\u5EFA\u65F6\u662F\u5728 Node.js \u4E2D\u8FDB\u884C\u670D\u52A1\u5668\u6E32\u67D3\u7684\uFF0C\u4EFB\u4F55 Vue \u7684\u4F7F\u7528\u90FD\u5FC5\u987B\u7B26\u5408 <a href="https://vuejs.org/guide/scaling-up/ssr.html" target="_blank" rel="noopener noreferrer">universal code requirements</a>\u3002\u7B80\u800C\u8A00\u4E4B\uFF0C\u786E\u4FDD\u53EA\u5728<code>beforeMount</code>\u6216<code>mounted</code>\u94A9\u5B50\u4E2D\u8BBF\u95EE<code>Browser / DOM APIs</code>\u3002</p><p>\u5982\u679C\u4F60\u4F7F\u7528\u6216\u6F14\u793A\u7684\u7EC4\u4EF6\u5BF9 SSR \u4E0D\u53CB\u597D\uFF08\u4F8B\u5982\uFF0C\u5305\u542B\u81EA\u5B9A\u4E49\u6307\u4EE4\uFF09\uFF0C\u4F60\u53EF\u4EE5\u5C06\u5B83\u4EEC\u5305\u88F9\u5728\u5185\u7F6E\u7684<code>&lt;ClientOnly&gt;</code>\u7EC4\u4EF6\u5185\uFF1A</p><div class="language-md"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">&lt;ClientOnly&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  &lt;NonSSRFriendlyComponent /&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;/ClientOnly&gt;</span></span>
<span class="line"></span></code></pre></div><p>\u6CE8\u610F\u8FD9\u5E76\u4E0D\u80FD\u89E3\u51B3\u5728\u5BFC\u5165\u65F6\u8BBF\u95EE\u6D4F\u89C8\u5668 API \u7684\u7EC4\u4EF6\u6216\u5E93\u7684\u95EE\u9898\u3002\u8981\u4F7F\u7528\u5728\u5BFC\u5165\u65F6\u5047\u8BBE\u6D4F\u89C8\u5668\u73AF\u5883\u7684\u4EE3\u7801\uFF0C\u4F60\u9700\u8981\u5728\u9002\u5F53\u7684\u751F\u547D\u5468\u671F\u94A9\u5B50\u4E2D\u52A8\u6001\u5730\u5BFC\u5165\u5B83\u4EEC\uFF1A</p><div class="language-vue"><span class="copy"></span><pre><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">export</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">default</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">mounted</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">import</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">./lib-that-access-window-on-import</span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">then</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">module</span><span style="color:#89DDFF;">)</span><span style="color:#F07178;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#89DDFF;">      </span><span style="color:#676E95;font-style:italic;">// use code</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">}</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span></code></pre></div><p>\u5982\u679C\u4F60\u7684\u6A21\u5757\u9ED8\u8BA4\u5BFC\u51FA\u4E00\u4E2A Vue \u7EC4\u4EF6\uFF0C\u4F60\u53EF\u4EE5\u52A8\u6001\u5730\u6CE8\u518C\u5B83\uFF1A</p><div class="language-vue"><span class="copy"></span><pre><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">component</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#C792EA;">v-if</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">dynamicComponent</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">    :</span><span style="color:#C792EA;">is</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">dynamicComponent</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">component</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">export</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">default</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">data</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">      dynamicComponent</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">null</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">mounted</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">import</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">./lib-that-access-window-on-import</span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">then</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">module</span><span style="color:#89DDFF;">)</span><span style="color:#F07178;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#89DDFF;">this.</span><span style="color:#A6ACCD;">dynamicComponent</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">module.</span><span style="color:#A6ACCD;">default</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">}</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span></code></pre></div><p>\u53C2\u8003\uFF1A</p><ul><li><a href="https://vuejs.org/guide/essentials/component-basics.html#dynamic-components" target="_blank" rel="noopener noreferrer">Vue.js &gt; Dynamic Components</a></li></ul>`,17);function u(s,p,h,g,m,v){return n(),e("div",null,[F,o("p",{class:t(["demo",s.$style.example])},null,2),C])}const A={$style:D};var _=a(d,[["render",u],["__cssModules",A]]);export{V as __pageData,_ as default};
