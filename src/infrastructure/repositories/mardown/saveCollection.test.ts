import { defaultCollection } from '../../../test/mocks/defaultCollection'
import { createOutputDirectory, saveCollection } from './saveCollection'
const fs = require('fs')

describe.skip('Markdown repository save collection', () => {
  it.skip('saves a collection in a directory with markdown files', async () => {
    // Arrange
    const mockedDefaultOutputCollection = 'src/test/mocks/defaultCollection/output/markdown/defaultCollection'
    const mockedCollection = defaultCollection
    // Act
    await saveCollection(mockedCollection)
    // Assert
    expect('the docs folder').toEqual(mockedDefaultOutputCollection)
  })

  it.skip('creates the output directory', async () => {
    const mockedPathRootDirectory = './'
    const mockedOutputDirectory = 'docs'

    // Expect the docs folder to not exist
    expect(fs.existsSync(mockedOutputDirectory)).toEqual(false)

    await createOutputDirectory(mockedPathRootDirectory + mockedOutputDirectory)

    // Expect the docs folder to exist
    expect(fs.existsSync(mockedOutputDirectory)).toEqual(true)
  })
})
// https://stackoverflow.com/questions/63499624/use-jest-to-compare-content-of-two-files
// https://stackoverflow.com/questions/58810079/is-it-possible-to-write-jest-unit-tests-for-node-js-fs-readfile /
// https://www.geeksforgeeks.org/node-js-fs-mkdir-method/
// https://levelup.gitconnected.com/use-node-js-to-to-create-directories-and-files-734063ce93ec
// https://www.npmjs.com/package/fs-extra
