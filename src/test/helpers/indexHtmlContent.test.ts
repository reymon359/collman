import { getIndexHtmlContent } from '../../helpers/indexHtmlContent'

describe('Helpers - Docsify Index Html Content', () => {
  it('Gets the Docsify index html content', async () => {
    const mockedCollection = {
      name: 'Fruits Collection',
      description: '# This is my awesome collection of fruits',
      classifications: [
        { name: 'Color', values: ['Green', 'Orange', 'Red', 'Yellow'] },
        { name: 'Size', values: ['Big', 'Medium'] }
      ],
      content: {
        name: 'items',
        items: [
          {
            containerName: 'apple',
            name: 'Apple',
            content: 'Apples are **amazing.**',
            classifications: [
              { name: 'Color', values: ['Green', 'Red', 'Yellow'] },
              { name: 'Size', values: ['Medium'] }
            ]
          },
          {
            containerName: 'orange',
            name: 'Orange',
            content: 'Is my favourite fruit',
            classifications: [
              { name: 'Color', values: ['Orange'] },
              { name: 'Size', values: ['Medium'] }
            ]
          },
          {
            containerName: 'watermelon',
            name: 'Watermelon',
            content: 'I like this watermelon picture\n\n![watermelon](./assets/watermelon.png)',
            classifications: [
              { name: 'Color', values: ['Green'] },
              { name: 'Size', values: ['Big'] }
            ]
          }
        ]
      }
    }
    const mockedDocsifyConfiguration = {
      main: { name: 'Default Collection', themeColor: '#20304a', loadSidebar: true, mergeNavbar: true, alias: { '/.*/_sidebar.md': '/_sidebar.md' }, subMaxLevel: 3, search: 'auto' },
      scriptsAndLinks: [
        '<link rel="stylesheet" href="//cdn.jsdelivr.net/npm/docsify-themeable@0/dist/css/theme-simple.css">',
        '<script src="//cdn.jsdelivr.net/npm/docsify@4"></script>',
        '<script src="//cdn.jsdelivr.net/npm/docsify/lib/plugins/search.min.js"></script>',
        '<script src="//cdn.jsdelivr.net/npm/docsify-sidebar-collapse/dist/docsify-sidebar-collapse.min.js"></script>',
        '<link rel="stylesheet" href="//cdn.jsdelivr.net/npm/docsify-sidebar-collapse/dist/sidebar.min.css" />',
        '<script src="//cdn.jsdelivr.net/npm/docsify-themeable@0/dist/js/docsify-themeable.min.js"></script>',
        '<script src="//cdn.jsdelivr.net/npm/docsify-pagination/dist/docsify-pagination.min.js"></script>',
        '<script src="//cdn.jsdelivr.net/npm/docsify/lib/plugins/zoom-image.min.js"></script>'
      ]
    }
    const mockedIndexHtmlContent = '\n<!DOCTYPE html>\n<html lang="en">\n<head>\n  <meta charset="UTF-8">\n  <title>Document</title>\n  <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" />\n  <meta name="description" content="Description">\n  <meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=1.0">\n<style type="text/css">\n    .content {\n        overflow: auto;\n    }\n  </style></head>\n<body>\n  <div id="app">Please wait...</div>\n  <script>window.$docsify ={"name":"Default Collection","themeColor":"#20304a","loadSidebar":true,"mergeNavbar":true,"alias":{"/.*/_sidebar.md":"/_sidebar.md"},"subMaxLevel":3,"search":"auto"} </script>\n  <link rel="stylesheet" href="//cdn.jsdelivr.net/npm/docsify-themeable@0/dist/css/theme-simple.css"><script src="//cdn.jsdelivr.net/npm/docsify@4"></script><script src="//cdn.jsdelivr.net/npm/docsify/lib/plugins/search.min.js"></script><script src="//cdn.jsdelivr.net/npm/docsify-sidebar-collapse/dist/docsify-sidebar-collapse.min.js"></script><link rel="stylesheet" href="//cdn.jsdelivr.net/npm/docsify-sidebar-collapse/dist/sidebar.min.css" /><script src="//cdn.jsdelivr.net/npm/docsify-themeable@0/dist/js/docsify-themeable.min.js"></script><script src="//cdn.jsdelivr.net/npm/docsify-pagination/dist/docsify-pagination.min.js"></script><script src="//cdn.jsdelivr.net/npm/docsify/lib/plugins/zoom-image.min.js"></script>\n</body>\n</html>'

    const indexHtmlContent = await getIndexHtmlContent(mockedCollection, mockedDocsifyConfiguration)

    expect(indexHtmlContent).toEqual(mockedIndexHtmlContent)
  })
})
