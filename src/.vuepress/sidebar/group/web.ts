// @ts-ignore
import { arraySidebar } from "vuepress-theme-hope";

export const web = arraySidebar([
  {
    text: "JS",
    icon: "javascript",
    prefix: "js/",
    children: "structure",
    collapsible: true,
  },
  {
    text: "Vue",
    icon: "vue",
    prefix: "vue/",
    children: [
      {
        text: "Learn",
        icon: "xuexi",
        prefix: "learn/",
        children: [
          {
            text: "基础",
            icon: "files",
            prefix: "essential/",
            children: "structure",
            collapsible: true,
          },
          {
            text: "深入组件",
            icon: "files",
            prefix: "components/",
            children: "structure",
            collapsible: true,
          },
          {
            text: "脚手架",
            icon: "files",
            prefix: "cli/",
            children: "structure",
            collapsible: true,
          },
          {
            text: "动画",
            icon: "files",
            prefix: "animation/",
            children: "structure",
            collapsible: true,
          },
          {
            text: "路由",
            icon: "files",
            prefix: "router/",
            children: "structure",
            collapsible: true,
          },
          {
            text: "状态管理",
            icon: "files",
            prefix: "store/",
            children: "structure",
            collapsible: true,
          }

        ],
        collapsible: true,
      }
    ],
    collapsible: true,
  },  
  {
    text: "微信小程序",
    icon: "wechat",
    prefix: "weChat/",
    children: "structure",
    collapsible: true,
  },
  {
    text: "Uni-app",
    icon: "package",
    prefix: "uni-app/",
    children: "structure",
    collapsible: true,
  }
]);
