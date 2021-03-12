import { Collection } from '../../../../domain/models'

export const getIndexHtmlContent = (collection:Collection, docsifyConfiguration: any) => {
  const { name, repo } = docsifyConfiguration

  const script = `window.$docsify = {
      el: '#app',
      name: '${name || collection.name || 'Collection'}',
      ${repo ? ("repo: '" + repo + "',") : ''}
      
      /* Navbars */
      loadNavbar: true,
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
    }`

  return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Document</title>
  <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" />
  <meta name="description" content="Description">
  <meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=1.0">
  <link rel="stylesheet" href="//cdn.jsdelivr.net/npm/docsify@4/lib/themes/vue.css">
 
</head>
<body>
  <div id="app">Please wait...</div>
  <script>${script} </script>
  <!-- Docsify v4 -->
  <script src="//cdn.jsdelivr.net/npm/docsify@4"></script>
  
<!--  Navbars-->
  <script src="//cdn.jsdelivr.net/npm/docsify-sidebar-collapse/dist/docsify-sidebar-collapse.min.js"></script>
  <link rel="stylesheet" href="//cdn.jsdelivr.net/npm/docsify-sidebar-collapse/dist/sidebar.min.css" />
  
<!--  Search-->
  <script src="//cdn.jsdelivr.net/npm/docsify/lib/plugins/search.min.js"></script>
  
<!--  Dark Mode-->
<script src="//cdn.jsdelivr.net/npm/docsify-dark-mode@latest/dist/index.min.js"></script>
 <link
  rel="stylesheet"
  href="//cdn.jsdelivr.net/npm/docsify-dark-mode@latest/dist/style.min.css"
/>

<!--  Pagination-->
<script src="//cdn.jsdelivr.net/npm/docsify/lib/docsify.min.js"></script>
<script src="//cdn.jsdelivr.net/npm/docsify-pagination/dist/docsify-pagination.min.js"></script>

</body>
</html>`
}
