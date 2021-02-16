import defaultCollectionJson from '../../test/mocks/defaultCollection/input/defaultCollection.json'
import { getCollection } from './collection'
import { defaultCollectionMock } from '../../test/mocks/defaultCollection'

describe('Collection Controller', () => {
  it('gets a collection json', async () => {
    // Arrange
    const mockedCollectionJson = defaultCollectionJson
    const mockedCollectionPath = 'src/test/mocks/defaultCollection/input/markdown/defaultCollection'
    // Act
    const collectionJson = await getCollection(mockedCollectionPath, 'markdown')
    console.log(collectionJson)
    // Assert
    expect(collectionJson).toEqual(mockedCollectionJson)
  })

  it('transforms a collection json into a collection model', async () => {
    // Arrange
    const mockedCollection = defaultCollectionMock
    const mockedCollectionPath = 'src/test/mocks/defaultCollection/input/markdown/defaultCollection'
    // Act
    const collectionJson = await getCollection(mockedCollectionPath, 'markdown')
    console.log(collectionJson)
    // Assert
    expect(collectionJson).toEqual(mockedCollectionJson)
  })

  it('process a collection json', async () => {
    // Arrange
    const mockedCollectionJson = defaultCollectionJson
    const mockedCollectionPath = 'src/test/mocks/defaultCollection/input/markdown/defaultCollection'
    // Act
    const collectionJson = await getCollectionJson(mockedCollectionPath, 'markdown')
    // Assert
    expect(collectionJson).toEqual(mockedCollectionJson)
  })

  it.skip('creates a docs folder', () => {

  })
})
it.skip('process the collection properly', () => {
  // WIP
  // // Arrange
  // const mockedInputCollection = null
  // const mockedOutputCollection = null
  //
  // // Act
  // const outputCollection = processCollection(mockedInputCollection)
  //
  // // Assert
  // expect(outputCollection).toEqual(mockedOutputCollection)
})
