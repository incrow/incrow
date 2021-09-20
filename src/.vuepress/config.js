module.exports = {
  title: "Incrow",
  description: "Incremental game index",
  dest: "build",
  themeConfig: {
    logo: "/logo.svg",
    nav: [{ text: "Github", link: "https://github.com/incrow/incrow" }],
  },
  serviceWorker: true,
  head: [
    [
      "script",
      {
        async: true,
        src: "https://www.googletagmanager.com/gtag/js?id=G-N2BLW5N435",
      },
    ],
    [
      "script",
      {},
      [
        "window.dataLayer = window.dataLayer || [];\nfunction gtag(){dataLayer.push(arguments);}\ngtag('js', new Date());\ngtag('config', 'G-N2BLW5N435');",
      ],
    ],
  ],
};
