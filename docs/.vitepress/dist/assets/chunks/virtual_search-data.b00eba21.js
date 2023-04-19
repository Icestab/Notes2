`,l:"api-examples.html#theme-data",a:"theme-data"},"0.3":{t:"page-data",p:`&lt;pre&gt;{{ page }}&lt;/pre&gt;
`,l:"api-examples.html#page-data",a:"page-data"},"0.4":{t:"page-frontmatter",p:`&lt;pre&gt;{{ frontmatter }}&lt;/pre&gt;



`,l:"api-examples.html#page-frontmatter",a:"page-frontmatter"},"0.5":{t:"results",p:"",l:"api-examples.html#results",a:"results"},"0.6":{t:"theme-data",p:`&lt;pre&gt;{{ theme }}&lt;/pre&gt;
`,l:"api-examples.html#theme-data",a:"theme-data"},"0.7":{t:"page-data",p:`&lt;pre&gt;{{ page }}&lt;/pre&gt;
`,l:"api-examples.html#page-data",a:"page-data"},"0.8":{t:"page-frontmatter",p:`&lt;pre&gt;{{ frontmatter }}&lt;/pre&gt;
`,l:"api-examples.html#page-frontmatter",a:"page-frontmatter"},"0.9":{t:"more",p:"Check out the documentation for the full list of runtime APIs. ...",l:"api-examples.html#more",a:"more"},"1.0":{t:"阅读指导",p:"",l:"guide/README.html",a:"阅读指导"},"1.1":{t:"生活",p:`
红米(小米)AC2100无需Telnet刷入Breed和Padavan固件教程
科学上网
oh-my-zsh
Netfli ...`,l:"guide/README.html#生活",a:"生活"},"1.2":{t:"前端",p:`
前端小技巧
Vue日常笔记

`,l:"guide/README.html#前端",a:"前端"},"1.3":{t:"文学",p:`
时间语录

`,l:"guide/README.html#文学",a:"文学"},"1.4":{t:"环境问题",p:`
Centos7重置Mysql8 root 密码
Linux命令
SSH防止暴力破解
Centos7 升级内核版本
ubun ...`,l:"guide/README.html#环境问题",a:"环境问题"},"3.0":{t:"netflix-uwp-windows客户端除网络隔离的方法",p:`此方式适用于其它内置应用
之前一直用edge浏览器观看Netflix，今天突然无法播放，而且尝试了很多办法依然无解。
如果不 ...`,l:"life/netflix.html",a:"netflix-uwp-windows客户端除网络隔离的方法"},"3.1":{t:"_1-找到你要挂代理内置应用的sid",p:`打开注册列表或者Win键+R打开运行窗口，运行Regedit打开注册表管理器，找到以下注册表项：
HKEY_CURRENT_ ...`,l:"life/netflix.html#_1-找到你要挂代理内置应用的sid",a:"_1-找到你要挂代理内置应用的sid"},"3.2":{t:"_2-以管理员的身份打开cmd面板",p:`输入以下命令：
CheckNetIsolation.exe loopbackexempt -a -p=SID

后面的SID ...`,l:"life/netflix.html#_2-以管理员的身份打开cmd面板",a:"_2-以管理员的身份打开cmd面板"},"4.0":{t:"oh-my-zsh安装与基本配置",p:"zsh是一个Linux下强大的shell, 由于大多数Linux产品安装以及默认使用bash shell, 但是丝毫不影响极 ...",l:"life/oh-my-zsh.html",a:"oh-my-zsh安装与基本配置"},"4.1":{t:"_1-、准备",p:`查看当前系统使用的shell
ubuntu@ubuntu:~$ echo $SHELL
/bin/bash

查看系统自带哪 ...`,l:"life/oh-my-zsh.html#_1-、准备",a:"_1-、准备"},"4.2":{t:"_2、安装zsh",p:`开始安装
sudo apt install zsh -y
再次查看
ubuntu@ubuntu:~$ cat /etc/sh ...`,l:"life/oh-my-zsh.html#_2、安装zsh",a:"_2、安装zsh"},"4.3":{t:"_3、安装oh-my-zsh",p:"sh -c &quot;$(curl -fsSL https://raw.github.com/robbyrussell/o ...",l:"life/oh-my-zsh.html#_3、安装oh-my-zsh",a:"_3、安装oh-my-zsh"},"4.4":{t:"_4、个性化",p:"\r",l:"life/oh-my-zsh.html#_4、个性化",a:"_4、个性化"},"4.5":{t:"_1-主题",p:`vim ~/.zshrc
!z2
使用下面命令使配置生效，我喜欢ys
source ~/.zshrc
安装字体解决zsh乱码 ...`,l:"life/oh-my-zsh.html#_1-主题",a:"_1-主题"},"4.6":{t:"_2-插件",p:"ohmyzsh强大的地方就强大在其有丰富的插件，但是我个人推荐的插件不多6个，其中4个是自带的2个需要自己安装（https: ...",l:"life/oh-my-zsh.html#_2-插件",a:"_2-插件"},"5.0":{t:"介绍",p:"感觉OpenWrt是每个玩路由器的人最终归属，相较于其它固件具有更高的自定义上限及可玩性,本期教程围绕红米2100路由器展开 ...",l:"life/OpenWrt.html",a:"介绍"},"5.1":{t:"_1、红米2100刷openwrt",p:"\r",l:"life/OpenWrt.html#_1、红米2100刷openwrt",a:"_1、红米2100刷openwrt"},"5.2":{t:"_1-1前提条件",p:"如果你手里的RM2100还是官方固件，请参考红米2100路由器刷机，自此你手里的RM2100已经是刷入Breed的Padav ...",l:"life/OpenWrt.html#_1-1前提条件",a:"_1-1前提条件"},"5.3":{t:"_1-2固件选择",p:`网上很对对OpenWrt二次开发的项目，具体选择刷入哪一个我也不好推荐，当然你也可以选择自己封装一个。
我主要在恩山论坛看别 ...`,l:"life/OpenWrt.html#_1-2固件选择",a:"_1-2固件选择"},"5.4":{t:"_1-3刷入固件",p:"",l:"life/OpenWrt.html#_1-3刷入固件",a:"_1-3刷入固件"},"6.0":{t:"红米2100路由器刷机",p:"很久以前买了RM2100，小米官方固件虽然将就用着还行，但是功能太少，前段日子无聊去恩山论坛研究了下怎么刷Padavan，成 ...",l:"life/RM2100.html",a:"红米2100路由器刷机"},"6.1":{t:"_1、开启ssh",p:"\r",l:"life/RM2100.html#_1、开启ssh",a:"_1、开启ssh"},"6.2":{t:"_1-1确认版本",p:`利用官方固件漏洞开启SSH，官方2.0.7版本存在漏洞，所以第一步确认你手里面的机器目前的版本。
本我有新系统就更新的习惯， ...`,l:"life/RM2100.html#_1-1确认版本",a:"_1-1确认版本"},"6.3":{t:"_1-2漏洞利用",p:`登录管理页面，此时地址栏链接应为：
http://192.168.31.1/cgi-bin/luci/;stok=&lt;S ...`,l:"life/RM2100.html#_1-2漏洞利用",a:"_1-2漏洞利用"},"6.4":{t:"_2、刷入breed",p:"\r",l:"life/RM2100.html#_2、刷入breed",a:"_2、刷入breed"},"6.5":{t:"_2-1备份",p:`如果后面想刷回官方需要备份一下BootLoader，建议都备份一下，代码如下：
dd if=/dev/mtd1 of=/tm ...`,l:"life/RM2100.html#_2-1备份",a:"_2-1备份"},"6.6":{t:"_2-2刷入breed",p:`下载breed：
文件名： breed-mt7621-xiaomi-r3g.bin
H大链接(建议) ：https://br ...`,l:"life/RM2100.html#_2-2刷入breed",a:"_2-2刷入breed"},"6.7":{t:"_3、刷入固件",p:"\r",l:"life/RM2100.html#_3、刷入固件",a:"_3、刷入固件"},"6.8":{t:"_3-1下载",p:`Padavan(HIBOY)固件
红米ac2100：http://opt.cn2qq.com/padavan/RM2100_ ...`,l:"life/RM2100.html#_3-1下载",a:"_3-1下载"},"6.9":{t:"_3-2刷入固件",p:`点击“固件更新”-在“固件”位置上传trx文件
中复选框&quot;自动重启&quot;-点击上传
确认更新信息-点击&qu ...`,l:"life/RM2100.html#_3-2刷入固件",a:"_3-2刷入固件"},"7.0":{t:"科学上网",p:"大约3年前因为需要使用google接触了科学上网，当时非常流行ss代理，在一个网站购买了包月服务开启了外网之旅；后来有机会拥 ...",l:"life/ss/vpn.html",a:"科学上网"},"7.1":{t:"_1、shadowsocks",p:"\r",l:"life/ss/vpn.html#_1、shadowsocks",a:"_1、shadowsocks"},"7.2":{t:"_1-1-ss介绍-维基百科",p:"Shadowsocks（简称SS）是一种基于Socks5代理方式的加密传输协议，也可以指实现这个协议的各种开发包。目前包使用 ...",l:"life/ss/vpn.html#_1-1-ss介绍-维基百科",a:"_1-1-ss介绍-维基百科"},"7.3":{t:"_1-2-ss搭建",p:"\r",l:"life/ss/vpn.html#_1-2-ss搭建",a:"_1-2-ss搭建"},"7.4":{t:"_1-2-1-快速搭建",p:"目前这个项目在github上仍然能够搜到点击前往，不够原作者已经没有维护了，基于Python的版本也停留在了2017年，但是 ...",l:"life/ss/vpn.html#_1-2-1-快速搭建",a:"_1-2-1-快速搭建"},"7.5":{t:"_1-2-2-shadowsocks-libev",p:"我个人使用的是这个版本，最新v3.3.5上次更新2020年9月，算是比较新的，而且网上也能下载到一键搭建脚本，使用比较方便。 ...",l:"life/ss/vpn.html#_1-2-2-shadowsocks-libev",a:"_1-2-2-shadowsocks-libev"},"7.6":{t:"_1-3-ss客服端",p:"服务端搭建完毕后需要客户端配合使用，可以到shadowsocks (github.com)找到对应的操作系统版本下载，不过为 ...",l:"life/ss/vpn.html#_1-3-ss客服端",a:"_1-3-ss客服端"},"7.7":{t:"_1-4-ss服务端优化",p:"目前SS可以使用算法加速，我现在使用的是BBR加速和open_fast,当然还有kcptun由于我目前使用已经很流畅了，就没 ...",l:"life/ss/vpn.html#_1-4-ss服务端优化",a:"_1-4-ss服务端优化"},"7.8":{t:"_2、vpn",p:"\r",l:"life/ss/vpn.html#_2、vpn",a:"_2、vpn"},"7.9":{t:"_2-1-介绍",p:"\r",l:"life/ss/vpn.html#_2-1-介绍",a:"_2-1-介绍"},"7.10":{t:"pptp",p:"PPTP(Point-to-Point Tunneling Protocol，点对点隧道协议)是由微软为了在拨号网络方面创建 ...",l:"life/ss/vpn.html#pptp",a:"pptp"},"7.11":{t:"l2tp-以及-l2tp-ipsec",p:"L2TP(Layer 2 Tunnel Protocol，第二层隧道协议)是一种协议本身不对通过的流量进行加密或实施保密措施 ...",l:"life/ss/vpn.html#l2tp-以及-l2tp-ipsec",a:"l2tp-以及-l2tp-ipsec"},"7.12":{t:"openvpn",p:"OpenVPN可以说是一种崭新的开源技术，它使用了OpenSSL库和SSLv3/TLSv1协议，通过与其他的技术融为一体，来 ...",l:"life/ss/vpn.html#openvpn",a:"openvpn"},"7.13":{t:"sstp",p:"SSTP（Secure Socket Tunneling Protocol，安全套接字隧道协议）是微软在Windows Vi ...",l:"life/ss/vpn.html#sstp",a:"sstp"},"7.14":{t:"ikev2",p:"IKEv2（Internet Key Exchange version 2，因特网密钥交换版本2）基于IPSec隧道协议，由 ...",l:"life/ss/vpn.html#ikev2",a:"ikev2"},"7.15":{t:"_2-2-协议选择",p:"PPTP是搭建最为简单，但也是最不推荐的一种，我个人比较钟爱L2TP/IPsec，这个协议目前几乎所有智能设备都内置了，不用 ...",l:"life/ss/vpn.html#_2-2-协议选择",a:"_2-2-协议选择"},"7.16":{t:"_2-3-vpn搭建",p:"\r",l:"life/ss/vpn.html#_2-3-vpn搭建",a:"_2-3-vpn搭建"},"7.17":{t:"_2-3-1-l2tp",p:`在开始我就要很不幸的告诉大家，我失败了，浪费了一天的时间，试了好几个文章的方法都无法正常连接，我选择放弃了。
下面我给出我找 ...`,l:"life/ss/vpn.html#_2-3-1-l2tp",a:"_2-3-1-l2tp"},"7.18":{t:"_2-3-2-ikev2",p:`其实这个协议应该算是目前最好的，开始以为搭建会很麻烦，结果比昨天的L2TP还简单，一次成功。
下面是详细操作步骤：
1.安装 ...`,l:"life/ss/vpn.html#_2-3-2-ikev2",a:"_2-3-2-ikev2"},"7.19":{t:"_2-4-vpn使用",p:`基本上系统都自带了IKEv2的协议的vpn
将服务器ca.cert.pem导出到需要的设备上，ios和mac操作都很简单这里 ...`,l:"life/ss/vpn.html#_2-4-vpn使用",a:"_2-4-vpn使用"},"8.0":{t:"markdown-extension-examples",p:"This page demonstrates some of the built-in markdown extension ...",l:"markdown-examples.html",a:"markdown-extension-examples"},"8.1":{t:"syntax-highlighting",p:"VitePress provides Syntax Highlighting powered by Shiki, with  ...",l:"markdown-examples.html#syntax-highlighting",a:"syntax-highlighting"},"8.2":{t:"custom-containers",p:`Input
::: info
This is an info box.
:::

::: tip
This is a tip ...`,l:"markdown-examples.html#custom-containers",a:"custom-containers"},"8.3":{t:"more",p:"Check out the documentation for the full list of markdown exte ...",l:"markdown-examples.html#more",a:"more"},"9.0":{t:"_1-更改盒模型",p:`*{
    box-sizing:border-box;
}

box-sizing 属性允许您以特定的方式定义匹配某个区 ...`,l:"study/html_css_js/html_css.html",a:"_1-更改盒模型"},"9.1":{t:"_2-生成圆",p:`{
    width:100px;
    height:100px;
    border-radius:50px;or ...`,l:"study/html_css_js/html_css.html#_2-生成圆",a:"_2-生成圆"},"9.2":{t:"_3-绝对定位",p:`#father{
    position:relative;   
}
#fative div:first-child{
 ...`,l:"study/html_css_js/html_css.html#_3-绝对定位",a:"_3-绝对定位"},"9.3":{t:"_4-垂直水平居中",p:`外围用div包裹id=wrapper
#wrapper{
    height:100vh;
    display:fle ...`,l:"study/html_css_js/html_css.html#_4-垂直水平居中",a:"_4-垂直水平居中"},"9.4":{t:"_5-媒体查询",p:`@media(max-width:500px)

`,l:"study/html_css_js/html_css.html#_5-媒体查询",a:"_5-媒体查询"},"10.0":{t:"_1-浅谈vue-mount",p:`new Vue({

​		 router,//路由

​		 store,//根实例状态存储，子组件通过 this.$st ...`,l:"study/html_css_js/vue1.html",a:"_1-浅谈vue-mount"},"10.1":{t:"_2-vue-config-js配置",p:"",l:"study/html_css_js/vue1.html#_2-vue-config-js配置",a:"_2-vue-config-js配置"},"10.2":{t:"_2-1vue配置自定义路径",p:"",l:"study/html_css_js/vue1.html#_2-1vue配置自定义路径",a:"_2-1vue配置自定义路径"},"10.3":{t:"",p:"",l:"study/html_css_js/vue1.html#",a:""},"10.4":{t:"",p:`
npm  install  path  --save
const path = require(&quot;path&qu ...`,l:"study/html_css_js/vue1.html#",a:""},"10.5":{t:"_2-2vue打包去除console",p:"",l:"study/html_css_js/vue1.html#_2-2vue打包去除console",a:"_2-2vue打包去除console"},"10.6":{t:"",p:"",l:"study/html_css_js/vue1.html#",a:""},"10.7":{t:"",p:`npm  install  uglifyjs-webpack-plugin  --save

const UglifyJsP ...`,l:"study/html_css_js/vue1.html#",a:""},"10.8":{t:"_3vue引入本地图片",p:"require('@/assets/xx.png') //由于vue编译最后图片存放在img目录下，不使用require会导 ...",l:"study/html_css_js/vue1.html#_3vue引入本地图片",a:"_3vue引入本地图片"},"11.0":{t:"_2020-01-19-《曼昆经济学原理》",p:`”为了得到我们喜爱的一件东西，通常就不得下放弃另一件我们喜爱的东西。作出决策要求我们在一个目标与另一个目标之间有所取舍。
- ...`,l:"study/literary/extract.html",a:"_2020-01-19-《曼昆经济学原理》"},"11.1":{t:"_2021-02-07-《icestab》",p:`每个时代都有属于自己的背景，而我们只需要努力扮演好属于自己的那个角色，毕竟那些行色匆匆的人谁又会停下来目睹属于你的剧本。
`,l:"study/literary/extract.html#_2021-02-07-《icestab》",a:"_2021-02-07-《icestab》"},"11.2":{t:"_2021-03-30-《鼠疫》",p:`世间的罪恶，几乎总是来自愚昧无知，善意如不明智，就可能跟邪恶造成同样的损害。
`,l:"study/literary/extract.html#_2021-03-30-《鼠疫》",a:"_2021-03-30-《鼠疫》"},"11.3":{t:"_2021-04-30-《定投十年-财务自由》",p:`人性的不耐和懒惰，是人们陷入贫穷的根本原因。我们想要变得富有，就不能犯同样的错误。
`,l:"study/literary/extract.html#_2021-04-30-《定投十年-财务自由》",a:"_2021-04-30-《定投十年-财务自由》"},"11.4":{t:"_2021-05-09-《未来的未来》",p:`不管发生什么，都要抬头注视远方。
`,l:"study/literary/extract.html#_2021-05-09-《未来的未来》",a:"_2021-05-09-《未来的未来》"},"11.5":{t:"_2021-05-31-《飘》",p:"若一个人总能在别人身上发现一些令人仰慕的优点，而这些优点就连他们自己也都是做梦都不敢想的，那么，有谁能抵挡这样一个人的魅力呢 ...",l:"study/literary/extract.html#_2021-05-31-《飘》",a:"_2021-05-31-《飘》"},"11.6":{t:"_2021-08-02-《瓦尔登湖》",p:"清醒得足以从事体力劳动的人数以百万计，但百万人中只有一个清醒得足以从事脑力劳动，而清醒得足以过上诗意或者神圣生活的人，一亿人 ...",l:"study/literary/extract.html#_2021-08-02-《瓦尔登湖》",a:"_2021-08-02-《瓦尔登湖》"},"11.7":{t:"_2021-09-08-《地火》",p:"我们不必留恋所谓过去的好时光，那个时候生活充满艰难危险和迷惘；我们也不必为今天的时代过分沮丧，因为今天，也总有一天会被人们称 ...",l:"study/literary/extract.html#_2021-09-08-《地火》",a:"_2021-09-08-《地火》"},"11.8":{t:"_2021-09-14-《超新星纪元》",p:"有志者，事竟成。现在我要告诉你们，这句话是完全错误的。只有符合科学规律和社会发展规律的事，才能成，人们想干的大部分事，不管多 ...",l:"study/literary/extract.html#_2021-09-14-《超新星纪元》",a:"_2021-09-14-《超新星纪元》"},"11.9":{t:"_2021-09-15-《蝇王》",p:`戈尔丁说道：“经历过那些岁月的人如果还不了解，‘恶’出于人犹如‘蜜’产于蜂，那他不是瞎了眼，就是脑子出了毛病。”
`,l:"study/literary/extract.html#_2021-09-15-《蝇王》",a:"_2021-09-15-《蝇王》"},"11.10":{t:"_2022-05-09-《且听风吟》",p:`直言不讳是件极为困难的事。甚至越是想直言不讳，直率的言语越是遁入黑暗的深处。
`,l:"study/literary/extract.html#_2022-05-09-《且听风吟》",a:"_2022-05-09-《且听风吟》"},"11.11":{t:"_2022-06-06-《1973-年的弹子机》",p:`“迟早要失去的东西并没有太多意义. 必失之物的荣光并非真正的荣光.”
`,l:"study/literary/extract.html#_2022-06-06-《1973-年的弹子机》",a:"_2022-06-06-《1973-年的弹子机》"},"12.0":{t:"vscode无法运行npm脚本",p:"\r",l:"study/pnpm.html",a:"vscode无法运行npm脚本"},"12.1":{t:"_1、pnpm-无法加载文件-c-users-administrator-appdata-roaming-npm-pnpm-ps1-因为在此系统上禁止运行脚本。",p:`!p1
`,l:"study/pnpm.html#_1、pnpm-无法加载文件-c-users-administrator-appdata-roaming-npm-pnpm-ps1-因为在此系统上禁止运行脚本。",a:"_1、pnpm-无法加载文件-c-users-administrator-appdata-roaming-npm-pnpm-ps1-因为在此系统上禁止运行脚本。"},"12.2":{t:"_2、win-s-在系统中搜索框-输入-windos-powershell-右击-管理员身份运行",p:`!p2
`,l:"study/pnpm.html#_2、win-s-在系统中搜索框-输入-windos-powershell-右击-管理员身份运行",a:"_2、win-s-在系统中搜索框-输入-windos-powershell-右击-管理员身份运行"},"12.3":{t:"_3、输入-set-executionpolicy-remotesigned-回车-根据提示输入a-回车",p:`!p3
`,l:"study/pnpm.html#_3、输入-set-executionpolicy-remotesigned-回车-根据提示输入a-回车",a:"_3、输入-set-executionpolicy-remotesigned-回车-根据提示输入a-回车"},"12.4":{t:"_4、再次回到pnpm-v执行成功。",p:"不只是pnpm命令，包括cnpm、yarn等这些命令，如果执行时，报这样的错误，都可以通过此方法解决。前提是，如果是用npm ...",l:"study/pnpm.html#_4、再次回到pnpm-v执行成功。",a:"_4、再次回到pnpm-v执行成功。"},"12.5":{t:"_5、科普window-powershell-知识点",p:`Windows给powershell设定了一个叫“执行策略”的东西。
为什么要弄这么一个执行策略呢，因为powershell ...`,l:"study/pnpm.html#_5、科普window-powershell-知识点",a:"_5、科普window-powershell-知识点"},"13.0":{t:"centos7-升级内核版本",p:"\r",l:"study/questions/centos7.html",a:"centos7-升级内核版本"},"13.1":{t:"_1、查看当前内核版本",p:`$ uname -r
3.10.0-1160.el7.x86_64

$ uname -a
Linux localhost. ...`,l:"study/questions/centos7.html#_1、查看当前内核版本",a:"_1、查看当前内核版本"},"13.2":{t:"_2、升级内核",p:"\r",l:"study/questions/centos7.html#_2、升级内核",a:"_2、升级内核"},"13.3":{t:"更新yum源仓库",p:`$ yum -y update

`,l:"study/questions/centos7.html#更新yum源仓库",a:"更新yum源仓库"},"13.4":{t:"启用-elrepo-仓库",p:"ELRepo 仓库是基于社区的用于企业级 Linux 仓库，提供对 RedHat Enterprise (RHEL) 和 其 ...",l:"study/questions/centos7.html#启用-elrepo-仓库",a:"启用-elrepo-仓库"},"13.5":{t:"_3、查看可用的系统内核包",p:"yum --disablerepo=&quot;*&quot; --enablerepo=&quot;elrepo-kern ...",l:"study/questions/centos7.html#_3、查看可用的系统内核包",a:"_3、查看可用的系统内核包"},"13.6":{t:"_4、安装最新长期支持版本内核",p:`$ yum --enablerepo=elrepo-kernel install kernel-lt

kernel-ml  ...`,l:"study/questions/centos7.html#_4、安装最新长期支持版本内核",a:"_4、安装最新长期支持版本内核"},"13.7":{t:"_5、设置-grub2",p:`内核安装好后，需要设置为默认启动选项并重启后才会生效
`,l:"study/questions/centos7.html#_5、设置-grub2",a:"_5、设置-grub2"},"13.8":{t:"查看系统上的所有可用内核",p:"$ sudo awk -F\\' '$1==&quot;menuentry &quot; {print i++ &quot;  ...",l:"study/questions/centos7.html#查看系统上的所有可用内核",a:"查看系统上的所有可用内核"},"13.9":{t:"设置新的内核为grub2的默认版本",p:"服务器上存在4 个内核，我们要使用 5.4 这个版本，可以通过 grub2-set-default 0 命令或编辑 /etc ...",l:"study/questions/centos7.html#设置新的内核为grub2的默认版本",a:"设置新的内核为grub2的默认版本"},"13.10":{t:"方法1、通过-grub2-set-default-0-命令设置",p:`其中 0 是上面查询出来的可用内核
grub2-set-default 0
`,l:"study/questions/centos7.html#方法1、通过-grub2-set-default-0-命令设置",a:"方法1、通过-grub2-set-default-0-命令设置"},"13.11":{t:"方法2、编辑-etc-default-grub-文件",p:`设置 GRUB_DEFAULT=0，通过上面查询显示的编号为 0 的内核作为默认内核：
$ vim /etc/default ...`,l:"study/questions/centos7.html#方法2、编辑-etc-default-grub-文件",a:"方法2、编辑-etc-default-grub-文件"},"13.12":{t:"生成-grub-配置文件并重启",p:`$ grub2-mkconfig -o /boot/grub2/grub.cfg
Generating grub confi ...`,l:"study/questions/centos7.html#生成-grub-配置文件并重启",a:"生成-grub-配置文件并重启"},"13.13":{t:"_6、验证",p:`$ uname -r
5.4.181-1.el7.elrepo.x86_64

`,l:"study/questions/centos7.html#_6、验证",a:"_6、验证"},"13.14":{t:"_7、删除旧内核-可选",p:"\r",l:"study/questions/centos7.html#_7、删除旧内核-可选",a:"_7、删除旧内核-可选"},"13.15":{t:"查看系统中全部的内核",p:`$ rpm -qa | grep kernel
kernel-lt-5.4.181-1.el7.elrepo.x86_64
 ...`,l:"study/questions/centos7.html#查看系统中全部的内核",a:"查看系统中全部的内核"},"13.16":{t:"方法1、yum-remove-删除旧内核的-rpm-包",p:`$ yum remove kernel-tools-libs-3.10.0-1160.el7.x86_64 \\
kernel ...`,l:"study/questions/centos7.html#方法1、yum-remove-删除旧内核的-rpm-包",a:"方法1、yum-remove-删除旧内核的-rpm-包"},"13.17":{t:"方法2、yum-utils-工具",p:"如果安装的内核不多于 3 个，yum-utils 工具不会删除任何一个。只有在安装的内核大于 3 个时，才会自动删除旧内核。 ...",l:"study/questions/centos7.html#方法2、yum-utils-工具",a:"方法2、yum-utils-工具"},"14.0":{t:"linux命令",p:"\r",l:"study/questions/linux.html",a:"linux命令"},"14.1":{t:"_1-删除当前文件夹文件-不删除子目录文件",p:`find . -maxdepth 1 -type f | xargs rm

-maxdepth 1 限制深度为1的查找，避 ...`,l:"study/questions/linux.html#_1-删除当前文件夹文件-不删除子目录文件",a:"_1-删除当前文件夹文件-不删除子目录文件"},"14.2":{t:"_2-部署golang",p:`1.在linux环境换编译代码
CGO_ENABLED=0 GOOS=linux GOARCH=amd64 go build ...`,l:"study/questions/linux.html#_2-部署golang",a:"_2-部署golang"},"14.3":{t:"命令详解",p:"",l:"study/questions/linux.html#命令详解",a:"命令详解"},"14.4":{t:"后台运行",p:"命令 参数 &amp;：在原有的命令和参数后面加空格&amp;，此时当有日志时仍然会输出到屏幕，但进程会在后台运行，我们在前 ...",l:"study/questions/linux.html#后台运行",a:"后台运行"},"14.5":{t:"nohup始终运行",p:"nohup 命令 参数：nohup 的位置在命令的前面，即使关闭putty终端该进程仍然会继续执行，其日志不会输出到前台，而 ...",l:"study/questions/linux.html#nohup始终运行",a:"nohup始终运行"},"14.6":{t:"nohup-结合",p:"nohup 命令 参数 &amp;：当两者结合使用时，进程会在后台始终运行，关闭putty终端或在前台ctrl+c都不会关闭 ...",l:"study/questions/linux.html#nohup-结合",a:"nohup-结合"},"14.7":{t:"dev-null-黑洞设备",p:"通常一些java框架如spring都会配置记录日志，我们并不需要linux来记录日志，而且时间长了nohup.out文件会变 ...",l:"study/questions/linux.html#dev-null-黑洞设备",a:"dev-null-黑洞设备"},"14.8":{t:"_2-1错误输出",p:"有一种很流行的命令格式是：nohup 命令 参数 &gt;/dev/null 2&gt;&amp;1 &amp;，比上面多了 ...",l:"study/questions/linux.html#_2-1错误输出",a:"_2-1错误输出"},"15.0":{t:"centos7重置mysql8-root-密码",p:`安装完 最新版的 mysql8后忘记了密码，向重置root密码；找了网上好多资料都不尽相同，根据自己的问题总结如下：
`,l:"study/questions/mysql_pass.html",a:"centos7重置mysql8-root-密码"},"15.1":{t:"一、修改配置文件免密码登录mysql",p:"",l:"study/questions/mysql_pass.html#一、修改配置文件免密码登录mysql",a:"一、修改配置文件免密码登录mysql"},"15.2":{t:"_1-1-打开配置文件",p:`vim /etc/my.cnf
!m1
`,l:"study/questions/mysql_pass.html#_1-1-打开配置文件",a:"_1-1-打开配置文件"},"15.3":{t:"_1-2-在-mysqld-最后加上如下语句-并保持退出文件",p:`skip-grant-tables
!m2
`,l:"study/questions/mysql_pass.html#_1-2-在-mysqld-最后加上如下语句-并保持退出文件",a:"_1-2-在-mysqld-最后加上如下语句-并保持退出文件"},"15.4":{t:"_1-3-重启mysql服务",p:`service mysqld restart
`,l:"study/questions/mysql_pass.html#_1-3-重启mysql服务",a:"_1-3-重启mysql服务"},"15.5":{t:"二、免密登录mysql-直接在命令行上输入",p:`mysql
//或者
mysql -u root -p 
//password直接回车

`,l:"study/questions/mysql_pass.html#二、免密登录mysql-直接在命令行上输入",a:"二、免密登录mysql-直接在命令行上输入"},"15.6":{t:"三、给root用户重置密码",p:"",l:"study/questions/mysql_pass.html#三、给root用户重置密码",a:"三、给root用户重置密码"},"15.7":{t:"_3-1首先查看当前root用户相关信息-在mysql数据库的user表中",p:`select host, user, authentication_string, plugin from user;

h ...`,l:"study/questions/mysql_pass.html#_3-1首先查看当前root用户相关信息-在mysql数据库的user表中",a:"_3-1首先查看当前root用户相关信息-在mysql数据库的user表中"},"15.8":{t:"_3-2如果当前root用户authentication-string字段下有内容-先将其设置为空",p:`use mysql;
update user set authentication_string='' where user ...`,l:"study/questions/mysql_pass.html#_3-2如果当前root用户authentication-string字段下有内容-先将其设置为空",a:"_3-2如果当前root用户authentication-string字段下有内容-先将其设置为空"},"15.9":{t:"_3-3-退出mysql-删除-etc-my-cnf文件最后的-skip-grant-tables-重启mysql服务",p:"",l:"study/questions/mysql_pass.html#_3-3-退出mysql-删除-etc-my-cnf文件最后的-skip-grant-tables-重启mysql服务",a:"_3-3-退出mysql-删除-etc-my-cnf文件最后的-skip-grant-tables-重启mysql服务"},"15.10":{t:"_3-4-使用root用户进行登录-因为上面设置了authentication-string为空-所以可以免密码登录",p:`mysql -u root -p
passwrod:直接回车;

`,l:"study/questions/mysql_pass.html#_3-4-使用root用户进行登录-因为上面设置了authentication-string为空-所以可以免密码登录",a:"_3-4-使用root用户进行登录-因为上面设置了authentication-string为空-所以可以免密码登录"},"15.11":{t:"_3-5使用alter修改root用户密码",p:` ALTER user 'root'@'localhost' IDENTIFIED BY 'Qian123#'

至此修改成 ...`,l:"study/questions/mysql_pass.html#_3-5使用alter修改root用户密码",a:"_3-5使用alter修改root用户密码"},"16.0":{t:"ssh防止暴力破解",p:`个人购买云服务器后防止被SSH暴力破解，应当做好毕业的安全措施。
`,l:"study/questions/ssh.html",a:"ssh防止暴力破解"},"16.1":{t:"_1-修改默认端口",p:`ssh默认22端口，一般暴力扫描都是扫描22端口，所有修改为不常用的端口能有效防止被扫描。
#进入配置文件
vim /etc ...`,l:"study/questions/ssh.html#_1-修改默认端口",a:"_1-修改默认端口"},"16.2":{t:"_2-使用密钥登录",p:`禁止密码登录启用密钥登录是防止被暴力破解最有效的手段，一般云服务器都提供了ssh密钥的生成界面，按照参考操作即可。
`,l:"study/questions/ssh.html#_2-使用密钥登录",a:"_2-使用密钥登录"},"16.3":{t:"_3-禁止root-ssh-启用普通用户",p:`#创建普通用户
useradd xxx
passswd xxx

#生成登录密钥,为保障安全私钥不建议网络传输，所以生成密钥 ...`,l:"study/questions/ssh.html#_3-禁止root-ssh-启用普通用户",a:"_3-禁止root-ssh-启用普通用户"},"16.4":{t:"_4-云防火墙定期检查",p:`由于个人用户一般不具有固定ip，所以没办法设置ip白名单，不过个人宽带ip虽然定期再变，但是一般处于一个网络段范围。
建议个 ...`,l:"study/questions/ssh.html#_4-云防火墙定期检查",a:"_4-云防火墙定期检查"},"17.0":{t:"ubuntu-20-04-4-server安装与基本配置",p:"\r",l:"study/questions/ubuntu-20.04.4-server.html",a:"ubuntu-20-04-4-server安装与基本配置"},"17.1":{t:"问题产生背景",p:"由于众所周知的原因，业务需要从centos迁移到其它操作系统了；本人还是觉得非常可惜，这么久以来这个系统一直是大家的首选，其 ...",l:"study/questions/ubuntu-20.04.4-server.html#问题产生背景",a:"问题产生背景"},"17.2":{t:"_1、安装",p:`点击上分系统链接进入官网镜像下载界面，下载完成后根据自己实际使用方式选择安装
`,l:"study/questions/ubuntu-20.04.4-server.html#_1、安装",a:"_1、安装"},"17.3":{t:"_1-选择语言",p:`!u1
`,l:"study/questions/ubuntu-20.04.4-server.html#_1-选择语言",a:"_1-选择语言"},"17.4":{t:"_2-设置键盘",p:`!u2
`,l:"study/questions/ubuntu-20.04.4-server.html#_2-设置键盘",a:"_2-设置键盘"},"17.5":{t:"_3-配置网络",p:`如果你所处的网络没有DHCP，需要静态IP；在此处键入对应值即可
!u3
`,l:"study/questions/ubuntu-20.04.4-server.html#_3-配置网络",a:"_3-配置网络"},"17.6":{t:"_4-配置代理",p:`没有需求可直接跳过
!u4
`,l:"study/questions/ubuntu-20.04.4-server.html#_4-配置代理",a:"_4-配置代理"},"17.7":{t:"_5-设置源地址",p:`这个可以配置阿里云(http://mirrors.aliyun.com/ubuntu/)，下载加速
!u5
`,l:"study/questions/ubuntu-20.04.4-server.html#_5-设置源地址",a:"_5-设置源地址"},"17.8":{t:"_6-配置磁盘分区",p:`一般默认即可，如果有特殊需求自行设置
!u6
!u6.1
!u6.2
`,l:"study/questions/ubuntu-20.04.4-server.html#_6-配置磁盘分区",a:"_6-配置磁盘分区"},"17.9":{t:"_7-配置用户名和密码",p:`!u7
`,l:"study/questions/ubuntu-20.04.4-server.html#_7-配置用户名和密码",a:"_7-配置用户名和密码"},"17.10":{t:"_8-输入ubuntu-advantage-一般跳过",p:`!u8
`,l:"study/questions/ubuntu-20.04.4-server.html#_8-输入ubuntu-advantage-一般跳过",a:"_8-输入ubuntu-advantage-一般跳过"},"17.11":{t:"_9-安装openssh",p:`!u9
`,l:"study/questions/ubuntu-20.04.4-server.html#_9-安装openssh",a:"_9-安装openssh"},"17.12":{t:"_10-选择需要插件",p:`!u10
`,l:"study/questions/ubuntu-20.04.4-server.html#_10-选择需要插件",a:"_10-选择需要插件"},"17.13":{t:"_11-等待安装",p:`!u11
`,l:"study/questions/ubuntu-20.04.4-server.html#_11-等待安装",a:"_11-等待安装"},"17.14":{t:"_12-出现reboot后选择并重启",p:`!u12
`,l:"study/questions/ubuntu-20.04.4-server.html#_12-出现reboot后选择并重启",a:"_12-出现reboot后选择并重启"},"17.15":{t:"_13-重启成功后即可登陆使用",p:`参考配置免密登录
!u13
`,l:"study/questions/ubuntu-20.04.4-server.html#_13-重启成功后即可登陆使用",a:"_13-重启成功后即可登陆使用"},"17.16":{t:"_2、系统时区修改",p:`安装完后的系统默认是UTC时区，需要修改到国内
`,l:"study/questions/ubuntu-20.04.4-server.html#_2、系统时区修改",a:"_2、系统时区修改"},"17.17":{t:"通过命令设置-tzselect",p:`!u14
!u14.1
!u14.2
按照图片依次执行完后，发现时区任然没有更改
ubuntu@ubuntu:~$ date ...`,l:"study/questions/ubuntu-20.04.4-server.html#通过命令设置-tzselect",a:"通过命令设置-tzselect"},"17.18":{t:"复制时间文件",p:"ubuntu@ubuntu:~$ sudo cp /usr/share/zoneinfo/Asia/Shanghai /et ...",l:"study/questions/ubuntu-20.04.4-server.html#复制时间文件",a:"复制时间文件"},"17.19":{t:"_3、修改dns",p:`国内目前DNS污染严重，修改DNS可以有效解决部分网络问题
使用nslookup命令查看当前DNS:
ubuntu@ubun ...`,l:"study/questions/ubuntu-20.04.4-server.html#_3、修改dns",a:"_3、修改dns"},"17.20":{t:"_4、删除snap",p:"虽然 snap 具有众多有点，但是我们是服务器不需要这些功能，而且使用 snap 还会带来额外的困扰，比如使用top查看能发 ...",l:"study/questions/ubuntu-20.04.4-server.html#_4、删除snap",a:"_4、删除snap"}},n={previewLength:62,buttonLabel:"搜索",placeholder:"搜索文档",tokenize:"full"},o={INDEX_DATA:e,PREVIEW_LOOKUP:s,Options:n};export{o as default};