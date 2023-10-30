import { navBar } from "./navbar/index.js";
import { sideBar } from "./sidebar/index.js";
// @ts-ignore
import { hopeTheme } from "vuepress-theme-hope";

export default hopeTheme(
  {
    docsDir: "/src",
    repo: "waite0603/Learn-Ladder",
    logo: "/avatar.png",
    hostname: "https://brain.sunguoqi.com",

    iconAssets: ["//at.alicdn.com/t/c/font_4184658_h8wbc7pvu6o.css"],

    locales: {
      "/": {
        navbar: navBar,
        sidebar: sideBar,
        footer: "GPL Licensed | © sun0225SUN",
        displayFooter: false,
        blog: {
          description: "黑色世界唯有东方的曙光！",
          intro: "https://waite.wang",
          timeline: "没有新的内容哦",
        },
        metaLocales: {
          editLink: "编辑此页",
        },
      },
    },

    navbarLayout: {
      start: ["Brand"],
      center: ["Links"],
      end: ["Outlook", "Repo", "Search"],
    },

    plugins: {
      blog: true,

      feed: {
        rss: true,
      },

      comment: {
      },

      mdEnhance: {
        tabs: true,
        codetabs: true,
        chart: true,
        echarts: true,
        mermaid: true,
        katex: true,
        vuePlayground: true,
        sub: true,
        sup: true,
        demo: true,
        tasklist: true,
        card: true,
        figure: true,
        imgLazyload: true,
        imgMark: true,
        imgSize: true,
        include: true,
        attrs: true,
        mark: true,
        footnote: true,
        container: true,
        align: true,
      },

      components: {
        components: [
          "AudioPlayer",
          "Badge",
          "BiliBili",
          "CodePen",
          "PDF",
          "Replit",
          "StackBlitz",
          "VideoPlayer",
          "YouTube",
        ],
      },

      pwa: {
        favicon: "/avatar.png",
        cacheHTML: true,
        cachePic: true,
        appendBase: true,
        update: "hint",
        apple: {
          icon: "/assets/icon/apple-touch-icon-57x57.png",
          statusBarColor: "black",
        }
      },
    },
  },
  { custom: true }
);
