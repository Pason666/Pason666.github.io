import { defineUserConfig } from "vuepress";

import theme from "./theme.js";

export default defineUserConfig({
  base: "/",

  lang: "en-US",
  title: "Blog",
  description: "A blog of Pason",

  head:[
    ["link", { rel: "icon", href: "/dark.jpg" }],
  ],

  theme,

  // Enable it with pwa
  // shouldPrefetch: false,
});
