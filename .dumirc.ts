import { defineConfig } from "dumi";

export default defineConfig({
  themeConfig: {
    name: "谥号",
    logo: "/qsh.webp",
    favicons: [
      "https://gw.alipayobjects.com/zos/bmw-prod/d3e3eb39-1cd7-4aa5-827c-877deced6b7e/lalxt4g3_w256_h256.png",
    ],
    rtl: true,
    footer:"Powered by Emperor",
    nav: [
      { title: '皇帝列表', link: '/heroList' },
      { title: '皇帝语录', link: '/saying' },
      { title: '圣遗物规则', link: '/holyrelic' },
      { title: '武器规则', link: '/weapon' },
      { title: '项目愿景', link: '/project' },
    ],

  },

  tailwindcss: {},
  plugins: ["@umijs/plugins/dist/tailwindcss"],
  // vite: {
  //   cacheDir: 'node_modules/.bin/.vite',
  // }
});
