import defaultCollectionJson from '../../test/mocks/defaultCollection/defaultCollection.json'
import { getCollectionJson } from './collection'

describe('Collection Controller', () => {
  it('gets the collection json', async () => {
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
