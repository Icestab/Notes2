import{_ as s,o as a,c as n,U as l}from"./chunks/framework.3eb667f5.js";const _=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"study/html_css_js/html_css.md","lastUpdated":1680935284000}'),e={name:"study/html_css_js/html_css.md"},p=l(`<h2 id="_1-更改盒模型" tabindex="-1">1.更改盒模型 <a class="header-anchor" href="#_1-更改盒模型" aria-label="Permalink to &quot;1.更改盒模型&quot;">​</a></h2><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">*{</span></span>
<span class="line"><span style="color:#A6ACCD;">    box-sizing:border-box;</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>box-sizing 属性允许您以特定的方式定义匹配某个区域的特定元素。</p><p>例如，假如您需要并排放置两个带边框的框，可通过将 box-sizing 设置为 &quot;border-box&quot;。这可令浏览器呈现出带有指定宽度和高度的框，并把边框和内边距放入框中。</p><h2 id="_2-生成圆" tabindex="-1">2.生成圆 <a class="header-anchor" href="#_2-生成圆" aria-label="Permalink to &quot;2.生成圆&quot;">​</a></h2><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    width:100px;</span></span>
<span class="line"><span style="color:#A6ACCD;">    height:100px;</span></span>
<span class="line"><span style="color:#A6ACCD;">    border-radius:50px;or50%</span></span>
<span class="line"><span style="color:#A6ACCD;">    overflow:hidden 隐藏多余部分</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h2 id="_3-绝对定位" tabindex="-1">3.绝对定位 <a class="header-anchor" href="#_3-绝对定位" aria-label="Permalink to &quot;3.绝对定位&quot;">​</a></h2><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">#father{</span></span>
<span class="line"><span style="color:#A6ACCD;">    position:relative;   </span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">#fative div:first-child{</span></span>
<span class="line"><span style="color:#A6ACCD;">    position:absolute;</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h2 id="_4-垂直水平居中" tabindex="-1">4.垂直水平居中 <a class="header-anchor" href="#_4-垂直水平居中" aria-label="Permalink to &quot;4.垂直水平居中&quot;">​</a></h2><p>外围用div包裹id=wrapper</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">#wrapper{</span></span>
<span class="line"><span style="color:#A6ACCD;">    height:100vh;</span></span>
<span class="line"><span style="color:#A6ACCD;">    display:flex;</span></span>
<span class="line"><span style="color:#A6ACCD;">    justify-content:center;</span></span>
<span class="line"><span style="color:#A6ACCD;">    align-items:center;</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h2 id="_5-媒体查询" tabindex="-1">5.媒体查询 <a class="header-anchor" href="#_5-媒体查询" aria-label="Permalink to &quot;5.媒体查询&quot;">​</a></h2><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">@media(max-width:500px)</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div>`,13),t=[p];function o(c,i,r,d,C,h){return a(),n("div",null,t)}const y=s(e,[["render",o]]);export{_ as __pageData,y as default};
