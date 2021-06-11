import { getSidebarFileContent } from '../addDocsify'

describe('Add Docsify', () => {
  it('Gets the Sidebar file content', async () => {
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
    const mockedSidebarFileContent = '\n - Content: items\n     - [Apple](Apple/index.md)\n        \n     - [Orange](Orange/index.md)\n        \n     - [Watermelon](Watermelon/index.md)\n        \n    \n\n\n - Color\n     - [All](Color/index.md)\n        \n     - [Green](../Color/Green.md)\n        \n     - [Orange](../Color/Orange.md)\n        \n     - [Red](../Color/Red.md)\n        \n     - [Yellow](../Color/Yellow.md)\n        \n    \n\n\n - Size\n     - [All](Size/index.md)\n        \n     - [Big](../Size/Big.md)\n        \n     - [Medium](../Size/Medium.md)\n        \n    \n'

    const sidebarFileContent = await getSidebarFileContent(mockedCollection)

    expect(sidebarFileContent).toEqual(mockedSidebarFileContent)
  })
})
