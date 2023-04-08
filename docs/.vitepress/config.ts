import { defineConfig } from 'vitepress'
import { SearchPlugin } from "vitepress-plugin-search";
// https://vitepress.dev/reference/site-config

export default defineConfig({
  title: "个人杂记",
  description: "A Nodes Site",
  lastUpdated: true,

  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '主页', link: '/' },
      { text: '指南', link: '/guide/readme' }
    ],

    sidebar: [
      {
        text: '生活',
        collapsed: false,
        items: [
          { text: '红米2100路由器刷机', link: '/life/RM2100' },
          { text: '科学上网', link: '/life/ss/vpn' },
          { text: 'oh-my-zsh安装与基本配置', link: '/life/oh-my-zsh' },
          { text: 'Netflix UWP Windows客户端除网络隔离的方法', link: '/life/netflix' }
        ]
      },
      {
        text: '前端',
        collapsed: false,
        items: [
          { text: 'vscode无法运行npm脚本', link: '/study/pnpm' },
          { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      },
      {
        text: '文学',
        collapsed: false,
        items: [
          { text: 'vscode无法运行npm脚本', link: '/study/pnpm' },
          { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      },
      {
        text: '环境问题',
        collapsed: false,
        items: [
          { text: 'vscode无法运行npm脚本', link: '/study/pnpm' },
          { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/Icestab' }
    ],
    docFooter: { prev: '上一页', next: '下一页' },
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2023-present flysch'
    },
    lastUpdatedText: '上次更新',
    returnToTopLabel: '返回顶部',
    darkModeSwitchLabel: '主题',
    outlineTitle: '此页',


  },
  vite: {
    plugins: [SearchPlugin({
      previewLength: 62,
      buttonLabel: "搜索",
      placeholder: "搜索文档",
      tokenize: "full"
    }
    )]
  }
})
