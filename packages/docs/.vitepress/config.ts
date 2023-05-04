import { defineConfig } from "vitepress";

const commonNav = [
  {
    text: "Guide",
    items: [
      { text: "Introduction", link: "/guide/introduction" },
      { text: "Key Concepts", link: "/guide/key-concepts" },
    ],
  },
  {
    text: "Essentials",
    items: [
      { text: "Getting Started", link: "/essentials/getting-started" },
      { text: "Route Parameters", link: "/essentials/route-parameters" },
      { text: "Nested Routes", link: "/essentials/nested-routes" },
      { text: "404 Page", link: "/essentials/404-page" },
    ],
  },
  {
    text: "API Reference",
    items: [
      { text: "Type Definitions", link: "/api-reference/type-definitions" },
      { text: "Router Class", link: "/api-reference/router-class" },
      { text: "createRouter", link: "/api-reference/create-router" },
    ],
  },
];

export default defineConfig({
  lang: "en-US",
  title: "Boylu Router",
  description: "A simple SPA router for JavaScript",

  lastUpdated: true,
  cleanUrls: true,

  themeConfig: {
    nav: [{ text: "Home", link: "/" }, ...commonNav],
    sidebar: [...commonNav, { text: "Our Team", link: "/our-team" }],

    socialLinks: [
      { icon: "github", link: "https://github.com/kadirboylu/boylu-router" },
    ],

    editLink: {
      pattern:
        "https://github.com/kadirboylu/boylu-router/edit/main/packages/docs/:path",
      text: "Edit this page on GitHub",
    },

    search: {
      provider: "local",
    },

    footer: {
      message: "Released under the MIT License.",
      copyright: "Copyright &copy; 2023-present Kadir Boylu",
    },
  },
});
