import { defaultCollection } from './mocks/defaultCollection'
import { createOutputDirectory, getIndexFileContent, saveCollection } from '../saveCollection'
const fs = require('fs')

describe('Save collection', () => {
  it('Gets the Index File content from a collection before saving it', async () => {
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
    const mockedIndexFileContent = '# Fruits Collection\n\n\n# This is my awesome collection of fruits\n\n## Content: items\n\n\n - [Apple](Apple/index.md)\n    \n - [Orange](Orange/index.md)\n    \n - [Watermelon](Watermelon/index.md)\n    \n\n## Classifications\n\n\n - [Color](Color/index.md)\n    \n - [Size](Size/index.md)\n    \n<br/><br/><br/>Made with [Collman](https://github.com/reymon359/collman)'

    const indexFileContent = await getIndexFileContent(mockedCollection)

    expect(indexFileContent).toEqual(mockedIndexFileContent)
  })

  it.skip('saves a collection in a directory with markdown files', async () => {
    // Arrange
    const mockedDefaultOutputCollection = 'src/test/mocks/defaultCollection/output/markdown/defaultCollection'
    const mockedCollection = defaultCollection
    // Act
    await saveCollection(mockedCollection)
    // Assert
    expect('the docs folder').toEqual(mockedDefaultOutputCollection)
  })

  it.skip('creates the output directory', async () => {
    const mockedPathRootDirectory = './'
    const mockedOutputDirectory = 'docs'

    // Expect the docs folder to not exist
    expect(fs.existsSync(mockedOutputDirectory)).toEqual(false)

    await createOutputDirectory(mockedPathRootDirectory + mockedOutputDirectory)

    // Expect the docs folder to exist
    expect(fs.existsSync(mockedOutputDirectory)).toEqual(true)
  })
})
// https://stackoverflow.com/questions/63499624/use-jest-to-compare-content-of-two-files
// https://stackoverflow.com/questions/58810079/is-it-possible-to-write-jest-unit-tests-for-node-js-fs-readfile /
// https://www.geeksforgeeks.org/node-js-fs-mkdir-method/
// https://levelup.gitconnected.com/use-node-js-to-to-create-directories-and-files-734063ce93ec
// https://www.npmjs.com/package/fs-extra
