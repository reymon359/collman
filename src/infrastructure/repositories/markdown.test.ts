import defaultCollectionJson from '../../test/mocks/defaultCollection/input/markdown/defaultCollection.json'
import {
  transformInputDirectoryJsonToCollection,
  transformMarkdownDirectoryToJson
} from './markdown'
import { defaultCollection } from '../../test/mocks/defaultCollection'

describe('Markdown repository', () => {
  it('transforms a markdown directory to a collection json', async () => {
    // Arrange
    const mockedPath = 'src/test/mocks/defaultCollection/input/markdown/defaultCollection'
    const mockedJsonCollection = defaultCollectionJson
    // Act
    const jsonCollection = await transformMarkdownDirectoryToJson(mockedPath)
    // Assert
    expect(jsonCollection).toEqual(mockedJsonCollection)
  })

  it.skip('transforms a collection json to a collection', async () => {
    // Arrange
    const mockedCollectionJson = defaultCollectionJson
    const mockedCollectionInputDirectory = 'items'
    const mockedCollection = defaultCollection
    // Act
    // @ts-ignore
    const collection = await transformInputDirectoryJsonToCollection(mockedCollectionJson, mockedCollectionInputDirectory)
    console.log(collection)
    // Assert
    expect(collection).toEqual(mockedCollection)
  })
})
