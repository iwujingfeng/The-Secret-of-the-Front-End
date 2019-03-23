module.exports = {
  base: "/the-secret-of-the-front-end/",
  dest: "dist",
  title: "前端核心技术与应用场景揭秘",
  description: "从实际应用场景出发，彻底掌握核心技术",
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
    repo: 'iwujingfeng/The-Secret-of-the-Front-End', // 右上角GitHub
    editLinks: true,
    docsDir: "docs",
    editLinkText: "在 GitHub 上编辑此页",
    lastUpdated: "上次更新",
    nav: [{
        text: "核心技术",
        link: "/core/"
      },
      {
        text: "应用场景",
        link: "/scene/"
      }
    ],
    sidebarDepth: 2,
    sidebar: {
      // 根路径 上篇 核心技术
      "/core/": [{
        title: "核心技术",
        collapsable: false,
        children: ["new", "prototype-inherit", "object"]
      }],
      // 比较学习
      "/scene/": [{
        title: "应用场景",
        collapsable: false,
        children: ["type", "js-array-no-repeat"]
      }]
      // 框架 工程化
    }
  }
};