module.exports = {
  main: {
    name: 'Default Collection',
    repo: 'https://github.com/reymon359/collection-manager',

    /* Navbars */
    loadSidebar: true,
    mergeNavbar: true,
    alias: {
      '/.*/_sidebar.md': '/_sidebar.md',
    },
    subMaxLevel: 3,

    /* Search */
    search: 'auto',

    /* Dark mode */
    themeColor: "#42b983",
    darkMode: {
      dark: {
        background: "#1c2022",
        toggleBtnBg: "#34495e",
        textColor: "white"
      },
      light: {
        background: "white",
        toggleBtnBg: "var(--theme-color)",
        textColor: "var(--theme-color)"
      }
    }
  },
  scriptsAndLinks:[
    `<link rel="stylesheet" href="//cdn.jsdelivr.net/npm/docsify@4/lib/themes/vue.css">`,
    `<script src="//cdn.jsdelivr.net/npm/docsify@4"></script>`,
    `<script src="//cdn.jsdelivr.net/npm/docsify-sidebar-collapse/dist/docsify-sidebar-collapse.min.js"></script>`,
    `<link rel="stylesheet" href="//cdn.jsdelivr.net/npm/docsify-sidebar-collapse/dist/sidebar.min.css" />`,
    `<script src="//cdn.jsdelivr.net/npm/docsify/lib/plugins/search.min.js"></script>`,
    `<script src="//cdn.jsdelivr.net/npm/docsify-dark-mode@latest/dist/index.min.js"></script>`,
    `<link rel="stylesheet" href="//cdn.jsdelivr.net/npm/docsify-dark-mode@latest/dist/style.min.css"
    />`,
    `<script src="//cdn.jsdelivr.net/npm/docsify/lib/docsify.min.js"></script>`,
    `<script src="//cdn.jsdelivr.net/npm/docsify-pagination/dist/docsify-pagination.min.js"></script>`,
    `<script src="//cdn.jsdelivr.net/npm/docsify/lib/plugins/zoom-image.min.js"></script>`,
  ]
}
