module.exports = {
  base: "/the-secret-of-the-front-end/",
  dest: "dist",
  title: "前端核心技术揭秘",
  description: "全面系统的前端进阶知识文档",
  head: [
    [
      "link",
      {
        rel: "icon",
        href: `/logo.png`
      }
    ],
    [
      "link",
      {
        rel: "manifest",
        href: "/manifest.json"
      }
    ],
    [
      "meta",
      {
        name: "theme-color",
        content: "#3eaf7c"
      }
    ],
    [
      "meta",
      {
        name: "apple-mobile-web-app-capable",
        content: "yes"
      }
    ],
    [
      "meta",
      {
        name: "apple-mobile-web-app-status-bar-style",
        content: "black"
      }
    ],
    [
      "link",
      {
        rel: "apple-touch-icon",
        href: `/icons/apple-touch-icon-152x152.png`
      }
    ],
    [
      "link",
      {
        rel: "mask-icon",
        href: "/icons/safari-pinned-tab.svg",
        color: "#3eaf7c"
      }
    ],
    [
      "meta",
      {
        name: "msapplication-TileImage",
        content: "/icons/msapplication-icon-144x144.png"
      }
    ],
    [
      "meta",
      {
        name: "msapplication-TileColor",
        content: "#000000"
      }
    ]
  ],
  serviceWorker: false,
  themeConfig: {
    // repo: 'ustbhuangyi/vue-analysis',
    editLinks: true,
    docsDir: "docs",
    editLinkText: "在 GitHub 上编辑此页",
    lastUpdated: "上次更新",
    nav: [{
        text: "核心技术",
        link: "/base/"
      },
      {
        text: "高级进阶",
        link: "/compare/"
      }
    ],
    sidebarDepth: 2,
    sidebar: {
      // 根路径 上篇
      "/base/": [{
          title: "HTML强化",
          collapsable: false,
          children: ["", "html-codegen"]
        },
        {
          title: "CSS强化",
          collapsable: false,
          children: ["css-entrance", "css-optimize"]
        },
        {
          title: "JS强化",
          collapsable: false,
          children: ["js-new", "js-type", "js-array-no-repeat"]
        }
      ],
      // 比较学习
      "/compare/": [{
          title: "HTML强化",
          collapsable: false,
          children: ["html-codegen"]
        },
        {
          title: "CSS强化",
          collapsable: false,
          children: ["css-entrance", "css-optimize"]
        },
        {
          title: "JS强化",
          collapsable: false,
          children: ["js-parse"]
        }
      ]
      // 框架 工程化
    }
  }
};