import { collectionConfiguration } from './index'
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
  it('gets the input collection directory', () => {
    // Arrange
    const mockedInputCollection = null
    const mockedOutputCollection = null

    // Act
    const outputCollection = processCollection(mockedInputCollection)

    // Assert
    expect(outputCollection).toEqual(mockedOutputCollection)
  })
})
