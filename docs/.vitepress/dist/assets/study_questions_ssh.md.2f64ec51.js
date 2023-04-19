import{_ as s,o as a,c as n,U as l}from"./chunks/framework.3eb667f5.js";const A=JSON.parse('{"title":"SSH防止暴力破解","description":"","frontmatter":{},"headers":[],"relativePath":"study/questions/ssh.md","lastUpdated":1680934572000}'),p={name:"study/questions/ssh.md"},o=l(`<h1 id="ssh防止暴力破解" tabindex="-1">SSH防止暴力破解 <a class="header-anchor" href="#ssh防止暴力破解" aria-label="Permalink to &quot;SSH防止暴力破解&quot;">​</a></h1><p>个人购买云服务器后防止被SSH暴力破解，应当做好毕业的安全措施。</p><h2 id="_1-修改默认端口" tabindex="-1">1.修改默认端口 <a class="header-anchor" href="#_1-修改默认端口" aria-label="Permalink to &quot;1.修改默认端口&quot;">​</a></h2><p>ssh默认22端口，一般暴力扫描都是扫描22端口，所有修改为不常用的端口能有效防止被扫描。</p><div class="language-shell"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;">#进入配置文件</span></span>
<span class="line"><span style="color:#FFCB6B;">vim</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">/etc/ssh/sshd_config</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#找到#Port22，将#去掉并添加端口Port xxx(自己设定)，注意是添加，保留两个端口确保另外一个不能使用的时候还可以用22，测试成功再去掉22</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#重启ssh服务</span></span>
<span class="line"><span style="color:#FFCB6B;">systemctl</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">restart</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">sshd</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#进入服务器-网络与安全-安全组-配置规则-添加安全组规则，将上面自定义的端口添加进去，如果服务器有开启防火墙的话(建立开启)，必须开放自定义端口</span></span>
<span class="line"><span style="color:#FFCB6B;">firewall-cmd</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">--zone=public</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">--add-port=xxx/tcp</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">--permanent</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#重启防火墙</span></span>
<span class="line"><span style="color:#FFCB6B;">systemctl</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">restart</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">firewalld.service</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#测试成功后，只需进入配置文件将Port 22添加注释即可</span></span>
<span class="line"><span style="color:#FFCB6B;">vim</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">/etc/ssh/sshd_config</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#Port 22</span></span>
<span class="line"></span></code></pre></div><h2 id="_2-使用密钥登录" tabindex="-1">2.使用密钥登录 <a class="header-anchor" href="#_2-使用密钥登录" aria-label="Permalink to &quot;2.使用密钥登录&quot;">​</a></h2><p>禁止密码登录启用密钥登录是防止被暴力破解最有效的手段，一般云服务器都提供了ssh密钥的生成界面，按照参考操作即可。</p><h2 id="_3-禁止root-ssh-启用普通用户" tabindex="-1">3.禁止root ssh，启用普通用户 <a class="header-anchor" href="#_3-禁止root-ssh-启用普通用户" aria-label="Permalink to &quot;3.禁止root ssh，启用普通用户&quot;">​</a></h2><div class="language-shell"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;">#创建普通用户</span></span>
<span class="line"><span style="color:#FFCB6B;">useradd</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">xxx</span></span>
<span class="line"><span style="color:#FFCB6B;">passswd</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">xxx</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#生成登录密钥,为保障安全私钥不建议网络传输，所以生成密钥建议在本机操作，然后通过网络把公钥传输到云主机</span></span>
<span class="line"><span style="color:#FFCB6B;">ssh-keygen</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-N</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;&#39;</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-f</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">~/.ssh/xxxkey_rsa</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#将上述命令生成的~/.ssh/yolrekey_rsa.pub文件拷贝到服务器，并执行以下命令配置好密钥登录</span></span>
<span class="line"><span style="color:#FFCB6B;">mkdir</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-p</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">/home/yolre/.ssh</span></span>
<span class="line"></span>
<span class="line"><span style="color:#FFCB6B;">cat</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">/tmp/xxxkey_rsa.pub</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&gt;&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">/home/xxx/.ssh/authorized_keys</span></span>
<span class="line"></span>
<span class="line"><span style="color:#FFCB6B;">chown</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-R</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">xxx:xxx</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">/home/xxx/.ssh</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&amp;&amp;</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">chmod</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">700</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">/home/xxx/.ssh</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&amp;&amp;</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">chmod</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">600</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">/home/xxx/.ssh/authorized_keys</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#使用以下命令登录服务器</span></span>
<span class="line"><span style="color:#FFCB6B;">ssh</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-i</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">~/.ssh/xxxkey_rsa</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-p</span><span style="color:#89DDFF;">[</span><span style="color:#C3E88D;">端口号</span><span style="color:#89DDFF;">]</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">xxx@ip</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#如果可成功登录，则说明密钥登录配置成功，登录成功后可执行 su root切换至root权限进行操作，便可以禁用root登录了</span></span>
<span class="line"><span style="color:#FFCB6B;">vim</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">/etc/ssh/sshd_config</span></span>
<span class="line"><span style="color:#FFCB6B;">添加：PermitRootLogin</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">no</span></span>
<span class="line"></span></code></pre></div><h2 id="_4-云防火墙定期检查" tabindex="-1">4.云防火墙定期检查 <a class="header-anchor" href="#_4-云防火墙定期检查" aria-label="Permalink to &quot;4.云防火墙定期检查&quot;">​</a></h2><p>由于个人用户一般不具有固定ip，所以没办法设置ip白名单，不过个人宽带ip虽然定期再变，但是一般处于一个网络段范围。<br> 建议个人用户仍然设置ip地址段白名单。<br> 云厂商一般提供防范措施，能够看到有谁再扫描我们服务器，建议定期将这些ip添加到防火墙。</p>`,11),e=[o];function t(c,r,i,y,C,D){return a(),n("div",null,e)}const d=s(p,[["render",t]]);export{A as __pageData,d as default};