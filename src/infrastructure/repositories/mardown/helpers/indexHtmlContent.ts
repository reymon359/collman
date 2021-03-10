import { Collection } from '../../../../domain/models'
import { DocsifyOptions } from '../../../../configuration'

export const getIndexHtmlContent = (collection:Collection, docsifyOptions: DocsifyOptions) => {
  // TODO: Add search too
  console.log(collection)
  const { name, repo } = docsifyOptions
  // const docsifyRepo
  const script = `window.$docsify = {
      el: '#app',
      name: '${name || collection.name || 'Collection'}',
      ${repo && ("repo: '" + repo + "',")}
      loadNavbar: true,
      loadSidebar: true,
      alias: {
        '/.*/_sidebar.md': '/_sidebar.md',
      },
      subMaxLevel: 3,
    }`
  console.log(script)
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
  <script src="//cdn.jsdelivr.net/npm/docsify-sidebar-collapse/dist/docsify-sidebar-collapse.min.js"></script>
  <link rel="stylesheet" href="//cdn.jsdelivr.net/npm/docsify-sidebar-collapse/dist/sidebar.min.css" />

</body>
</html>`
}
