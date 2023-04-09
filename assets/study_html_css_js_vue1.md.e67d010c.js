import{_ as s,o as n,c as a,U as e}from"./chunks/framework.3eb667f5.js";const A=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"study/html_css_js/vue1.md","lastUpdated":1680935284000}'),l={name:"study/html_css_js/vue1.md"},p=e(`<h2 id="_1-浅谈vue-mount" tabindex="-1">1.浅谈vue $mount() <a class="header-anchor" href="#_1-浅谈vue-mount" aria-label="Permalink to &quot;1.浅谈vue $mount()&quot;">​</a></h2><div class="language-vue line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">new Vue({</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">​		 router,//路由</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">​		 store,//根实例状态存储，子组件通过 this.$store 访问</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">​		 render: h =&gt; h(App),//App组件渲染，这里是h即是vm.$createElement，遍是在vm._render这个阶段</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">​		 data:{</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">​		 //</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">  		}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">}).$mount(&#39;#app&#39;)</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br></div></div><h2 id="_2-vue-config-js配置" tabindex="-1">2.vue.config.js配置 <a class="header-anchor" href="#_2-vue-config-js配置" aria-label="Permalink to &quot;2.vue.config.js配置&quot;">​</a></h2><h3 id="_2-1vue配置自定义路径" tabindex="-1">2.1vue配置自定义路径 <a class="header-anchor" href="#_2-1vue配置自定义路径" aria-label="Permalink to &quot;2.1vue配置自定义路径&quot;">​</a></h3><div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">npm  install  path  --save</span></span>
<span class="line"><span style="color:#A6ACCD;">const path = require(&quot;path&quot;);</span></span>
<span class="line"><span style="color:#A6ACCD;">function resolve(dir) {</span></span>
<span class="line"><span style="color:#A6ACCD;">  return path.join(__dirname, dir);</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#A6ACCD;">module.exports = {</span></span>
<span class="line"><span style="color:#A6ACCD;">  chainWebpack: config =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">    config.resolve.alias</span></span>
<span class="line"><span style="color:#A6ACCD;">      .set(&quot;@&quot;, resolve(&quot;src&quot;))</span></span>
<span class="line"><span style="color:#A6ACCD;">      .set(&quot;assets&quot;, resolve(&quot;src/assets&quot;))</span></span>
<span class="line"><span style="color:#A6ACCD;">      .set(&quot;components&quot;, resolve(&quot;src/components&quot;))</span></span>
<span class="line"><span style="color:#A6ACCD;">      .set(&quot;base&quot;, resolve(&quot;baseConfig&quot;))</span></span>
<span class="line"><span style="color:#A6ACCD;">      .set(&quot;public&quot;, resolve(&quot;public&quot;));</span></span>
<span class="line"><span style="color:#A6ACCD;">  },</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br></div></div><h3 id="_2-2vue打包去除console" tabindex="-1">2.2vue打包去除console <a class="header-anchor" href="#_2-2vue打包去除console" aria-label="Permalink to &quot;2.2vue打包去除console&quot;">​</a></h3><div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">npm  install  uglifyjs-webpack-plugin  --save</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">const UglifyJsPlugin = require(&quot;uglifyjs-webpack-plugin&quot;); // 引入插件</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">module.exports = {</span></span>
<span class="line"><span style="color:#A6ACCD;">  configureWebpack: {</span></span>
<span class="line"><span style="color:#A6ACCD;">    optimization: {</span></span>
<span class="line"><span style="color:#A6ACCD;">      minimizer: [</span></span>
<span class="line"><span style="color:#A6ACCD;">        new UglifyJsPlugin({</span></span>
<span class="line"><span style="color:#A6ACCD;">          uglifyOptions: {</span></span>
<span class="line"><span style="color:#A6ACCD;">            compress: {</span></span>
<span class="line"><span style="color:#A6ACCD;">              warnings: false,</span></span>
<span class="line"><span style="color:#A6ACCD;">              drop_console: true, //console</span></span>
<span class="line"><span style="color:#A6ACCD;">              drop_debugger: false,</span></span>
<span class="line"><span style="color:#A6ACCD;">              pure_funcs: [&quot;console.log&quot;] //移除console</span></span>
<span class="line"><span style="color:#A6ACCD;">            }</span></span>
<span class="line"><span style="color:#A6ACCD;">          }</span></span>
<span class="line"><span style="color:#A6ACCD;">        })</span></span>
<span class="line"><span style="color:#A6ACCD;">      ]</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">  },</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br></div></div><h2 id="_3vue引入本地图片" tabindex="-1">3vue引入本地图片 <a class="header-anchor" href="#_3vue引入本地图片" aria-label="Permalink to &quot;3vue引入本地图片&quot;">​</a></h2><div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">require(&#39;@/assets/xx.png&#39;) //由于vue编译最后图片存放在img目录下，不使用require会导致图片路径不对</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div>`,9),r=[p];function c(o,i,t,u,b,m){return n(),a("div",null,r)}const d=s(l,[["render",c]]);export{A as __pageData,d as default};
