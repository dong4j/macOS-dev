module.exports = {
  title: 'Dev on macOS',
  description: '在 macOS 上优雅开发',
  // base: '/macOS-dev/',
  head: [
    ['link', {
      rel: 'icon',
      href: '/favicon.png'
    }],
    ['meta', {
      name: 'theme-color',
      content: '#00ABE9'
    }],
    ['meta', {
      name: 'apple-mobile-web-app-capable',
      content: 'yes'
    }],
    ['meta', {
      name: 'apple-mobile-web-app-status-bar-style',
      content: 'black'
    }],
    ['link', {
      rel: 'apple-touch-icon',
      href: '/favicon.png'
    }],
    ['meta', {
      name: 'msapplication-TileImage',
      content: '/favicon.png'
    }],
    ['meta', {
      name: 'msapplication-TileColor',
      content: '#06BDFF'
    }]
  ],
  host: '127.0.0.1',
  port: '9528',
  markdown: {
    // 代码块显示行号
    lineNumbers: true,
    anchor: {
      permalink: true
    },
    toc: {
      includeLevel: [1, 2]
    },
    config: md => {
      // 使用更多 markdown-it 插件！
      md.use(require('markdown-it-task-lists'))
      .use(require('markdown-it-imsize'), { autofill: true })
    }
  },
  themeConfig: {
    docsRepo: 'https://github.com/dong4j/macOS-dev',
    docsDir: 'docs',
    docsBranch: 'master',
    editLinks: true,
    editLinkText: '查看原文|编辑此页',
    searchMaxSuggestions: 10,
    sidebarDepth: 2,
    serviceWorker: {
      updatePopup: true,
    },
    lastUpdated: '上次更新',

    nav: [{
      text: '准备工作',
      link: '/start/'
    },
      {
        text: '工具链',
        items: [{
          text: '概要',
          link: '/2-tool-chain/'
        },
          {
            text: '终端环境',
            link: '/2-tool-chain/2-1-terminal'
          },
          {
            text: '开发工具',
            link: '/2-tool-chain/2-2-dev-tools'
          }
        ]
      },
      {
        text: '反馈',
        link: 'https://github.com/dong4j/macOS-dev/issues/new/choose',
        icon: 'reco-category'
      },
      {
        text: 'GitHub',
        link: 'https://github.com/dong4j/macOS-dev'
      },
    ],
    sidebar: {
      '/start/': [''],
      '/2-tool-chain/': [
        '',
        '2-1-terminal',
        '2-2-dev-tools'
      ],
      '/': ['']
    }
  }
};