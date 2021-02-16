import defaultCollectionJson from '../../test/mocks/defaultCollection/input/defaultCollection.json'
import { getCollection } from '../controllers/collection'
import { defaultConfiguration } from '../../configuration'
import { transformMarkdownDirectoryToJson } from './markdown'

describe('Collection Controller', () => {
  it('transforms a markdown directory to a collection json', async() => {
    // Arrange
    const mockedPath = 'src/test/mocks/defaultCollection/input/markdown/defaultCollection'
    // Act
    const collectionJson = await transformMarkdownDirectoryToJson(mockedPath)
    console.log(collectionJson)
    // Assert
    expect(collectionJson).toEqual('mockedCollectionJson')
  })
})
