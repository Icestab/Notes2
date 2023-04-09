import{_ as a,o as e,c as r,U as t}from"./chunks/framework.3eb667f5.js";const n="/assets/1.18d13401.jpg",g=JSON.parse('{"title":"红米2100路由器刷机","description":"","frontmatter":{},"headers":[],"relativePath":"life/RM2100.md","lastUpdated":1680935284000}'),s={name:"life/RM2100.md"},o=t(`<h1 id="红米2100路由器刷机" tabindex="-1">红米2100路由器刷机 <a class="header-anchor" href="#红米2100路由器刷机" aria-label="Permalink to &quot;红米2100路由器刷机&quot;">​</a></h1><p>很久以前买了RM2100，小米官方固件虽然将就用着还行，但是功能太少，前段日子无聊去恩山论坛研究了下怎么刷Padavan，成功后记录一下。</p><h2 id="_1、开启ssh" tabindex="-1">1、开启SSH <a class="header-anchor" href="#_1、开启ssh" aria-label="Permalink to &quot;1、开启SSH&quot;">​</a></h2><h3 id="_1-1确认版本" tabindex="-1">1.1确认版本 <a class="header-anchor" href="#_1-1确认版本" aria-label="Permalink to &quot;1.1确认版本&quot;">​</a></h3><p>利用官方固件漏洞开启SSH，官方<strong>2.0.7</strong>*版本存在漏洞，所以第一步确认你手里面的机器目前的版本。</p><p>本我有新系统就更新的习惯，所以我手里的路由器是最新版，没关系我们降级就行了。</p><p><strong>官方下载链接：</strong> 红米RM2100： <a href="http://cdn.cnbj1.fds.api.mi-img.com/xiaoqiang/rom/rm2100/miwifi_rm2100_firmware_d6234_2.0.7.bin" target="_blank" rel="noreferrer">http://cdn.cnbj1.fds.api.mi-img.com/xiaoqiang/rom/rm2100/miwifi_rm2100_firmware_d6234_2.0.7.bin</a></p><p>小米R2100：<a href="http://cdn.cnbj1.fds.api.mi-img.com/xiaoqiang/rom/r2100/miwifi_r2100_firmware_4b519_2.0.722.bin" target="_blank" rel="noreferrer">http://cdn.cnbj1.fds.api.mi-img.com/xiaoqiang/rom/r2100/miwifi_r2100_firmware_4b519_2.0.722.bin</a></p><p>miwifi_rm2100开头的是红米的，miwifi_r2100开头的是小米的。</p><p>降级方法非常简单，电脑登录管理页面，在升级固件处选择手工选择，然后确认后等待机器重启即可。</p><h3 id="_1-2漏洞利用" tabindex="-1">1.2漏洞利用 <a class="header-anchor" href="#_1-2漏洞利用" aria-label="Permalink to &quot;1.2漏洞利用&quot;">​</a></h3><p>登录管理页面，此时地址栏链接应为：</p><div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">http://192.168.31.1/cgi-bin/luci/;stok=&lt;STOK&gt;/web/home#router</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p><strong>PS:</strong><code>&lt;STOK&gt;</code>是代表你登录后自动生成的那一长串数据，每个人都不一样，用于替换下一步中的链接中部分。</p><p>在浏览器地址栏中输入以下链接代码，<strong>注意替换掉</strong><code>&lt;STOK&gt;</code><strong>部分，否则无效</strong>：</p><p><code>http://192.168.31.1/cgi-bin/luci/;stok=&lt;STOK&gt;/api/misystem/set_config_iotdev?bssid=Xiaomi&amp;user_id=longdike&amp;ssid=-h%3B%20nvram%20set%20ssh_en%3D1%3B%20nvram%20commit%3B%20sed%20-i%20&#39;s%2Fchannel%3D.*%2Fchannel%3D%5C%22debug%5C%22%2Fg&#39;%20%2Fetc%2Finit.d%2Fdropbear%3B%20%2Fetc%2Finit.d%2Fdropbear%20start%3B</code></p><p>返回{&quot;code&quot;:0}即代表成功。</p><p>建议**一键注入后需等待一些时间，保证路由器后台能正确处理注入信息后再重启，**重启即可开启SSH。</p><p><strong>接下来更改root密码：</strong></p><p>在浏览器地址栏中输入以下链接代码，<strong>注意替换掉</strong><code>&lt;STOK&gt;</code><strong>部分，否则无效</strong>：</p><p><code>http://192.168.31.1/cgi-bin/luci/;stok=&lt;STOK&gt;/api/misystem/set_config_iotdev?bssid=Xiaomi&amp;user_id=longdike&amp;ssid=-h%3B%20echo%20-e%20&#39;admin%5Cnadmin&#39;%20%7C%20passwd%20root%3B</code></p><p>&#39;admin&#39;表示输入两次密码以修改密码为admin，想要自行设置密码的仅需要改动两个字符admin即可，其他地方不要改，怕出问题或记不住的不用修改。</p><p>使用SSH软件登录路由器，我用的Xshell，你们有什么用什么。</p><h2 id="_2、刷入breed" tabindex="-1">2、刷入Breed <a class="header-anchor" href="#_2、刷入breed" aria-label="Permalink to &quot;2、刷入Breed&quot;">​</a></h2><h3 id="_2-1备份" tabindex="-1">2.1备份 <a class="header-anchor" href="#_2-1备份" aria-label="Permalink to &quot;2.1备份&quot;">​</a></h3><p>如果后面想刷回官方需要备份一下<strong>BootLoader</strong>，建议都备份一下，代码如下：</p><div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">dd if=/dev/mtd1 of=/tmp/bootloader.bin</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>输入命令后一定要将&quot;/tmp/bootloader.bin&quot;<strong>移动到电脑上</strong>后再操作下一步</p><p>对了我传文件用的winscp，你们有什么用什么。</p><h3 id="_2-2刷入breed" tabindex="-1">2.2刷入breed <a class="header-anchor" href="#_2-2刷入breed" aria-label="Permalink to &quot;2.2刷入breed&quot;">​</a></h3><p><strong>下载breed：</strong></p><p>文件名： breed-mt7621-xiaomi-r3g.bin</p><p>H大链接(<strong>建议</strong>) ：<a href="https://breed.hackpascal.net/breed-mt7621-xiaomi-r3g.bin" target="_blank" rel="noreferrer">https://breed.hackpascal.net/breed-mt7621-xiaomi-r3g.bin</a></p><p><strong>刷入不死Breed</strong>：</p><p>复制breed-mt7621-xiaomi-r3g.bin 到/tmp</p><p>输入命令：</p><div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">mtd -r write /tmp/breed-mt7621-xiaomi-r3g.bin Bootloader</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>等待路由器重启（当电脑获取到ip或者路由只有一个蓝灯亮时，breed引导官方固件成功）。</p><p>为防止变砖，强烈<strong>建议等待5分钟后拔电，用牙签按住reset键再插电，等蓝灯闪烁，松开reset键，浏览器访问192.168.1.1</strong>即可进入breedweb界面。</p><p>首次进入breed记得先备份下编程器固件和eeprom。</p><p>更改环境变量，编缉,新增字段&quot;xiaomi.r3g.bootfw&quot;,值设置为 2,然后保存。（否则刷入非原厂固件可能会出现刷入固件后重启指示灯不断蓝黑交替（无限重启）的现象）</p><p>至此，路由器成功刷入breed。</p><h2 id="_3、刷入固件" tabindex="-1">3、刷入固件 <a class="header-anchor" href="#_3、刷入固件" aria-label="Permalink to &quot;3、刷入固件&quot;">​</a></h2><h3 id="_3-1下载" tabindex="-1">3.1下载 <a class="header-anchor" href="#_3-1下载" aria-label="Permalink to &quot;3.1下载&quot;">​</a></h3><p>Padavan(HIBOY)固件</p><p>红米ac2100：<a href="http://opt.cn2qq.com/padavan/RM2100_3.4.3.9-099.trx" target="_blank" rel="noreferrer">http://opt.cn2qq.com/padavan/RM2100_3.4.3.9-099.trx</a></p><p>小米ac2100：<a href="http://opt.cn2qq.com/padavan/R2100_3.4.3.9-099.trx" target="_blank" rel="noreferrer">http://opt.cn2qq.com/padavan/R2100_3.4.3.9-099.trx</a></p><p>这个链接下载的一直都是最新版本！</p><h3 id="_3-2刷入固件" tabindex="-1">3.2刷入固件 <a class="header-anchor" href="#_3-2刷入固件" aria-label="Permalink to &quot;3.2刷入固件&quot;">​</a></h3><p>点击“固件更新”-在“固件”位置上传trx文件</p><p>中复选框&quot;自动重启&quot;-点击上传</p><p>确认更新信息-点击&quot;更新&quot;-等待路由器重启</p><p>等待路由器LED灯恢复正常后-打开浏览器-进入<strong><a href="http://my.router" target="_blank" rel="noreferrer">http://my.router</a></strong></p><p>用户名&quot;admin&quot;-密码&quot;admin&quot;</p><p>显示下图-正常刷入。</p><p><img src="`+n+'" alt="1"></p><div class="tip custom-block"><p class="custom-block-title">提示</p><p>对了恩山还说了有些路由器有坏块刷不了，不过我没遇到过，如果你在刷入时遇到问题基本就是这个原因了。</p><p>刷机请用网线。</p></div>',57),i=[o];function p(l,d,c,m,b,h){return e(),r("div",null,i)}const u=a(s,[["render",p]]);export{g as __pageData,u as default};