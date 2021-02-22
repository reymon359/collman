import { defaultCollection } from '../../../test/mocks/defaultCollection'
import { saveCollection } from './saveCollection'

describe('Markdown repository save collection', () => {
  it.skip('saves a collection in a directory with markdown files', async () => {
    // Arrange
    const mockedDefaultOutputCollection = 'src/test/mocks/defaultCollection/output/markdown/defaultCollection'
    const mockedCollection = defaultCollection
    // Act
    await saveCollection(mockedCollection)
    // Assert
    expect('the docs folder').toEqual(mockedDefaultOutputCollection)
  })
})
// https://stackoverflow.com/questions/63499624/use-jest-to-compare-content-of-two-files
