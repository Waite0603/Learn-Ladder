import theme from "./theme.js";
import { defineUserConfig } from "vuepress";
import { getDirname } from "@vuepress/utils";
// @ts-ignore
import { searchProPlugin } from "vuepress-plugin-search-pro";

const __dirname = getDirname(import.meta.url);

export default defineUserConfig({
  // 基础路径
  base: "/",
  //头部引入
  head: [
    
  ],
  // 网站信息
  locales: {
    "/": {
      lang: "zh-CN",
      title: "Waite Wang",
      description: "热爱可抵漫长岁月！",
    },
  },
  // 主题配置
  theme,
  // 根据别名添加功能
  alias: {

  },
  // 插件配置
  plugins: [
    searchProPlugin({
      // 索引全部内容
      indexContent: true,
    }),
  ],
  // Enable it with pwa
  shouldPrefetch: false,
});
