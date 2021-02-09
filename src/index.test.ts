import { collectionConfiguration, getInputCollection } from './index'
import { defaultConfiguration } from './configuration'
import defaultCollectionJson from './test/mocks/defaultCollection/defaultCollection.json'

describe('Configuration', () => {
  it('loads the default configuration', () => {
    // Act
    const loadedConfiguration = collectionConfiguration

    // Assert
    expect(loadedConfiguration).toEqual(defaultConfiguration)
    expect(loadedConfiguration).not.toBe({})
  })
})

describe('Input System', () => {
  it('gets the default input collection', async () => {
    // Arrange
    const mockedCollection = defaultCollectionJson
    const mockedRootPath = 'src/test/mocks/defaultCollection/input/markdown/defaultCollection'
    // Act
    const inputCollection = await getInputCollection({ ...defaultConfiguration, pathRootDirectory: mockedRootPath })
    // Assert
    expect(inputCollection).toEqual(mockedCollection)
  })

  it('creates a docs folder', () => {

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

describe.skip('Classification', () => {
  it('gets the classifications', () => {
  })
  it('generates classifications folders', () => {
  })
})
