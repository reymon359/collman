import { collectionConfiguration, getInputCollection } from './index'
import { defaultConfirguration } from './configuration'

describe('Configuration', () => {
  it('loads the default configuration', () => {
    // Act
    const loadedConfiguration = collectionConfiguration

    // Assert
    expect(loadedConfiguration).toEqual(defaultConfirguration)
    expect(loadedConfiguration).not.toBe({})
  })
})

describe('File System', () => {
  it('gets the input collection', () => {
    // Arrange
    const mockedInputCollection =
    const mockedRootPath =
    // Act
    const inputCollection = getInputCollection(mockedRootPath)

    // Assert
    expect(inputCollection).toEqual(mockedInputCollection)
  })

  it('creates a docs folder', () => {

  })
})
it('process the collection properly', () => {
  // Arrange
  const mockedInputCollection = null
  const mockedOutputCollection = null

  // Act
  const outputCollection = processCollection(mockedInputCollection)

  // Assert
  expect(outputCollection).toEqual(mockedOutputCollection)
})

describe('Classification', () => {
  it('gets the classifications', () => {
  })
  it('generates classifications folders', () => {
  })
})
