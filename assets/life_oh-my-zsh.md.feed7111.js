import{_ as s,o as n,c as a,U as l}from"./chunks/framework.3eb667f5.js";const p="/assets/z1.c8d2f6d9.png",e="/assets/z2.93b41666.png",C=JSON.parse('{"title":"oh-my-zsh安装与基本配置","description":"","frontmatter":{},"headers":[],"relativePath":"life/oh-my-zsh.md","lastUpdated":1680935284000}'),o={name:"life/oh-my-zsh.md"},r=l(`<h1 id="oh-my-zsh安装与基本配置" tabindex="-1">oh-my-zsh安装与基本配置 <a class="header-anchor" href="#oh-my-zsh安装与基本配置" aria-label="Permalink to &quot;oh-my-zsh安装与基本配置&quot;">​</a></h1><p>zsh是一个Linux下强大的shell, 由于大多数Linux产品安装以及默认使用bash shell, 但是丝毫不影响极客们对zsh的热衷, 几乎每一款Linux产品都包含有zsh，通常可以用apt、urpmi或yum等包管理器进行安装</p><p>zsh是bash的增强版，其实zsh和bash是两个不同的概念，zsh更加强大</p><p>通常zsh配置起来非常麻烦，且相当的复杂，所以oh-my-zsh是为了简化zsh的配置而开发的，因此oh-my-zsh算是zsh的配置</p><h2 id="_1-、准备" tabindex="-1">1 、准备 <a class="header-anchor" href="#_1-、准备" aria-label="Permalink to &quot;1 、准备&quot;">​</a></h2><p><strong>查看当前系统使用的shell</strong></p><div class="language-shell line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">ubuntu@ubuntu:~$</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">echo</span><span style="color:#A6ACCD;"> $SHELL</span></span>
<span class="line"><span style="color:#FFCB6B;">/bin/bash</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p><strong>查看系统自带哪些shell</strong></p><div class="language-shell line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">ubuntu@ubuntu:~$</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">cat</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">/etc/shells</span><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># /etc/shells: valid login shells</span></span>
<span class="line"><span style="color:#FFCB6B;">/bin/sh</span></span>
<span class="line"><span style="color:#FFCB6B;">/bin/bash</span></span>
<span class="line"><span style="color:#FFCB6B;">/usr/bin/bash</span></span>
<span class="line"><span style="color:#FFCB6B;">/bin/rbash</span></span>
<span class="line"><span style="color:#FFCB6B;">/usr/bin/rbash</span></span>
<span class="line"><span style="color:#FFCB6B;">/bin/dash</span></span>
<span class="line"><span style="color:#FFCB6B;">/usr/bin/dash</span></span>
<span class="line"><span style="color:#FFCB6B;">/usr/bin/tmux</span></span>
<span class="line"><span style="color:#FFCB6B;">/usr/bin/screen</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><h2 id="_2、安装zsh" tabindex="-1">2、安装zsh <a class="header-anchor" href="#_2、安装zsh" aria-label="Permalink to &quot;2、安装zsh&quot;">​</a></h2><p><strong>开始安装</strong></p><p><code>sudo apt install zsh -y</code></p><p><strong>再次查看</strong></p><div class="language-shell line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">ubuntu@ubuntu:~$</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">cat</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">/etc/shells</span><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># /etc/shells: valid login shells</span></span>
<span class="line"><span style="color:#FFCB6B;">/bin/sh</span></span>
<span class="line"><span style="color:#FFCB6B;">/bin/bash</span></span>
<span class="line"><span style="color:#FFCB6B;">/usr/bin/bash</span></span>
<span class="line"><span style="color:#FFCB6B;">/bin/rbash</span></span>
<span class="line"><span style="color:#FFCB6B;">/usr/bin/rbash</span></span>
<span class="line"><span style="color:#FFCB6B;">/bin/dash</span></span>
<span class="line"><span style="color:#FFCB6B;">/usr/bin/dash</span></span>
<span class="line"><span style="color:#FFCB6B;">/usr/bin/tmux</span></span>
<span class="line"><span style="color:#FFCB6B;">/usr/bin/screen</span></span>
<span class="line"><span style="color:#FFCB6B;">/bin/zsh</span></span>
<span class="line"><span style="color:#FFCB6B;">/usr/bin/zsh</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><p>表明已经安装好zsh</p><p><strong>配置</strong></p><p>zsh设为默认shell</p><div class="language-shell line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">chsh</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-s</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">/bin/zsh</span></span>
<span class="line"><span style="color:#FFCB6B;">reboot</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><div class="tip custom-block"><p class="custom-block-title">提示</p><p>若总是报错<code>chsh: PAM: Authentication failure</code> 直接修改用户的配置 <code>vim /etc/passwd/</code></p><p>查看系统当前使用的shell</p><div class="language-shell line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">ubuntu%</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">echo</span><span style="color:#A6ACCD;"> $SHELL </span></span>
<span class="line"><span style="color:#FFCB6B;">/bin/zsh</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>表明已经将zsh设置为默认shell</p></div><h2 id="_3、安装oh-my-zsh" tabindex="-1">3、安装oh-my-zsh <a class="header-anchor" href="#_3、安装oh-my-zsh" aria-label="Permalink to &quot;3、安装oh-my-zsh&quot;">​</a></h2><p><code>sh -c &quot;$(curl -fsSL https://raw.github.com/robbyrussell/oh-my-zsh/master/tools/install.sh)&quot;</code></p><p>或者</p><p><code>sh -c &quot;$(wget https://raw.github.com/robbyrussell/oh-my-zsh/master/tools/install.sh -O -)&quot;</code></p><p>如果github无法连接，可以使用gitee</p><div class="language-sh line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">https://gitee.com/mirrors/oh-my-zsh/raw/master/tools/install.sh</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>出现下面界面成功安装：</p><p><img src="`+p+'" alt="z1"></p><h2 id="_4、个性化" tabindex="-1">4、个性化 <a class="header-anchor" href="#_4、个性化" aria-label="Permalink to &quot;4、个性化&quot;">​</a></h2><h3 id="_1-主题" tabindex="-1">1.主题 <a class="header-anchor" href="#_1-主题" aria-label="Permalink to &quot;1.主题&quot;">​</a></h3><p><code>vim ~/.zshrc</code></p><p><img src="'+e+`" alt="z2"></p><p>使用下面命令使配置生效，我喜欢<strong>ys</strong></p><p><code>source ~/.zshrc</code></p><p>安装字体解决zsh乱码问题</p><p><code>apt install fonts-powerline -y</code></p><h3 id="_2-插件" tabindex="-1">2.插件 <a class="header-anchor" href="#_2-插件" aria-label="Permalink to &quot;2.插件&quot;">​</a></h3><p>ohmyzsh强大的地方就强大在其有丰富的插件，但是我个人推荐的插件不多6个，其中4个是自带的2个需要自己安装（<code>https://github.com/zsh-users</code>上有各种插件可以自行选择）</p><div class="language-shell line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">clone</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">https://github.com/zsh-users/zsh-syntax-highlighting.git</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">\${</span><span style="color:#A6ACCD;">ZSH_CUSTOM</span><span style="color:#89DDFF;">:-</span><span style="color:#A6ACCD;">~</span><span style="color:#89DDFF;">/</span><span style="color:#A6ACCD;">.oh-my-zsh</span><span style="color:#89DDFF;">/</span><span style="color:#A6ACCD;">custom</span><span style="color:#89DDFF;">}</span><span style="color:#C3E88D;">/plugins/zsh-syntax-highlighting</span></span>
<span class="line"></span>
<span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">clone</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">https://github.com/zsh-users/zsh-autosuggestions</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">\${</span><span style="color:#A6ACCD;">ZSH_CUSTOM</span><span style="color:#89DDFF;">:-</span><span style="color:#A6ACCD;">~</span><span style="color:#89DDFF;">/</span><span style="color:#A6ACCD;">.oh-my-zsh</span><span style="color:#89DDFF;">/</span><span style="color:#A6ACCD;">custom</span><span style="color:#89DDFF;">}</span><span style="color:#C3E88D;">/plugins/zsh-autosuggestions</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p><strong>安装完成之后需要配置zsh的配置文件</strong></p><p><code>vim ~/.zshrc</code></p><p><strong>打开文件之后在plugins中增加以下内容：</strong></p><div class="language-shell line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">plugins</span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;">(</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#FFCB6B;">git</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#FFCB6B;">z</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#FFCB6B;">extract</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#FFCB6B;">zsh-syntax-highlighting</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#FFCB6B;">zsh-autosuggestions</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#82AAFF;">history</span></span>
<span class="line"><span style="color:#A6ACCD;">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><ul><li><p>git：常用的git命令缩写</p></li><li><p>z：自动跳转（及其推荐使用）</p></li><li><p>extract：解压通过x命令解压任何类型的压缩文件</p></li><li><p>zsh-syntax-highlighting：命令高亮（及其推荐）</p></li><li><p>zsh-autosuggestions：命令自动补齐（及其推荐）</p></li><li><p>history：查看历史命令</p></li></ul><p><strong>启用配置文件：</strong></p><div class="language-bash line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#82AAFF;">source</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">~/.zshrc</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div>`,45),t=[r];function c(i,h,b,u,d,y){return n(),a("div",null,t)}const g=s(o,[["render",c]]);export{C as __pageData,g as default};
