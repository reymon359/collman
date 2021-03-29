import { Collection } from '../../../../domain/models'
import { DocsifyConfiguration } from '../addDocsify'

export const getIndexHtmlContent = (collection:Collection, docsifyConfiguration: DocsifyConfiguration) => {
  return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Document</title>
  <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" />
  <meta name="description" content="Description">
  <meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=1.0">
<style type="text/css">
    .content {
        overflow: auto;
    }
  </style></head>
<body>
  <div id="app">Please wait...</div>
  <script>${'window.$docsify =' + JSON.stringify(docsifyConfiguration.main)} </script>
  ${docsifyConfiguration.scriptsAndLinks.reduce((acc, curr) => acc + curr)}
</body>
</html>`
}
