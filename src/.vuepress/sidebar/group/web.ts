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
          }
        ],
        collapsible: true,
      }
    ],
    collapsible: true,
  }
]);
