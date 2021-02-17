import defaultCollectionJson from '../../test/mocks/defaultCollection/input/markdown/defaultCollection.json'
import { transformMarkdownDirectoryToJson } from './markdown'

describe('Collection Controller', () => {
  it('transforms a markdown directory to a collection json', async () => {
    // Arrange
    const mockedPath = 'src/test/mocks/defaultCollection/input/markdown/defaultCollection'
    const mockedCollectionJson = defaultCollectionJson
    // Act
    const collectionJson = await transformMarkdownDirectoryToJson(mockedPath)
    console.log(collectionJson)
    // Assert
    expect(collectionJson).toEqual(mockedCollectionJson)
  })
})
