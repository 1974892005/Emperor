import { defineConfig } from "dumi";

export default defineConfig({
  favicons: [
    "/hdIcon.png",
  ],
  themeConfig: {
    name: "现代皇帝",
    logo: "/hdBg.png",
    rtl: true,
    footer: "Powered by Emperor",
    socialLinks: {
      github: 'https://github.com/1974892005/Emperor',
    },
    prefersColor: { default: 'light', switch: true },
    nav: [
      { title: '皇帝列表', link: '/herolist' },
      { title: '圣遗物规则', link: '/holyrelic' },
      { title: '武器规则', link: '/weapon' },
      { title: '项目愿景', link: '/guide' },
    ],

  },

  tailwindcss: {},
  plugins: ["@umijs/plugins/dist/tailwindcss"],
});
