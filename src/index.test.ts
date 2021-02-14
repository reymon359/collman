import { collectionConfiguration } from './index'
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
