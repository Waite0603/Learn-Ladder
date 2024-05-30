import { web } from "./group/web";
import { backend } from "./group/backend";

// @ts-ignore
import { sidebar } from "vuepress-theme-hope";

export const sideBar = sidebar({
  "/web/": web,
  "/backend/": backend
});
