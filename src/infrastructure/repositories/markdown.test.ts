import defaultCollectionJson from '../../test/mocks/defaultCollection/input/markdown/defaultCollection.json'
import {
  transformJsonCollectionToCollection,
  transformMarkdownDirectoryToJson
} from './markdown'

describe('Markdown repository', () => {
  it('transforms a markdown directory to a collection json', async () => {
    // Arrange
    const mockedPath = 'src/test/mocks/defaultCollection/input/markdown/defaultCollection'
    const mockedJsonCollection = defaultCollectionJson
    // Act
    const jsonCollection = await transformMarkdownDirectoryToJson(mockedPath)
    console.log(jsonCollection)
    // Assert
    expect(jsonCollection).toEqual(mockedJsonCollection)
  })

  it('transforms a collection json to a collection', async () => {
    // Arrange
    const mockedCollectionJson = defaultCollectionJson
    const mockedCollection = {}
    // Act
    const collection = await transformJsonCollectionToCollection(mockedCollectionJson)
    console.log(collection)
    // Assert
    expect(collection).toEqual(mockedCollectionJson)
  })
})
