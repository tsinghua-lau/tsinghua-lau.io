import{_ as t,o,c as r,z as e,a}from"./chunks/framework.d95bcf44.js";const x=JSON.parse('{"title":"v-for 和 v-if 不能同时书写","description":"","frontmatter":{"0":"t","1":"i","2":"t","3":"l","4":"e","5":" ","6":"基","7":"础"},"headers":[],"relativePath":"studyCn/Vue2/for-if.md"}'),s={name:"studyCn/Vue2/for-if.md"},f=e("h1",{id:"v-for-和-v-if-不能同时书写",tabindex:"-1"},[a("v-for 和 v-if 不能同时书写 "),e("a",{class:"header-anchor",href:"#v-for-和-v-if-不能同时书写","aria-label":'Permalink to "v-for 和 v-if 不能同时书写"'},"​")],-1),i=e("p",null,"首先， v-for 的优先级高于 v-if ，也就是说，假设总计50条数据，即使经过v-if以后，只剩下25条显示，但是v-for早就循环了一遍50条数据。",-1),n=e("p",null,"为了提高性能，解决办法就是用一个计算属性先将数据过滤了以后，v-for循环过滤了之后的数据。",-1),c=[f,i,n];function d(_,l,v,p,h,u){return o(),r("div",null,c)}const V=t(s,[["render",d]]);export{x as __pageData,V as default};
