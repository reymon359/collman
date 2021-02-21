import { getCollection } from './collection'
import { defaultConfiguration } from '../../configuration'
import { defaultCollection } from '../../test/mocks/defaultCollection'

describe('Collection Controller', () => {
  // TODO: #34 Fix this test Timeout - Async callback was not invoked within the 5000 ms timeout specified by jest.setTimeout.Error
  it.skip('gets a collection from the input directory', async () => {
    // Arrange
    const mockedCollection = defaultCollection
    const mockedCollectionConfiguration = { collectionPath: 'src/test/mocks/defaultCollection/input/markdown/defaultCollection' }
    // Act
    const collection = await getCollection({ ...defaultConfiguration, ...mockedCollectionConfiguration })
    // Assert
    expect(collection).toEqual(mockedCollection)
  })
})
