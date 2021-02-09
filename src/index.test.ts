import { collectionConfiguration, getInputCollection } from './index'
import { defaultConfiguration } from './configuration'

describe('Configuration', () => {
  it('loads the default configuration', () => {
    // Act
    const loadedConfiguration = collectionConfiguration

    // Assert
    expect(loadedConfiguration).toEqual(defaultConfiguration)
    expect(loadedConfiguration).not.toBe({})
  })
})

describe.skip('Input System', () => {
  it('gets the input collection', () => {
    // Arrange
    // const mockedInputCollection =
    // const mockedRootPath =
    // // Act
    // const inputCollection = getInputCollection(mockedRootPath)
    //
    // // Assert
    // expect(inputCollection).toEqual(mockedInputCollection)
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
