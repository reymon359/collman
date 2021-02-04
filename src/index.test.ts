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
