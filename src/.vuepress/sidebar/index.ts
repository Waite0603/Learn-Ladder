import { web } from "./group/web";

// @ts-ignore
import { sidebar } from "vuepress-theme-hope";

export const sideBar = sidebar({
  "/web/": web,
});
