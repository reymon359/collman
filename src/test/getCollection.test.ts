import defaultCollectionJson from './mocks/defaultCollection/input/markdown/defaultCollection.json'
import {
  getClassificationsFromCollectionItems,
  getItemClassificationsFromJsonItem,
  transformJsonItemsToCollectionItems,
  transformMarkdownDirectoryToJson
  , getCollection
} from '../getCollection'
import { defaultCollection } from './mocks/defaultCollection'

describe.skip('Markdown repository get collection', () => {
  it('transforms a markdown directory to a collection json', async () => {
    // Arrange
    const mockedPath = 'src/test/mocks/defaultCollection/input/markdown/defaultCollection'
    const mockedJsonCollection = defaultCollectionJson
    // Act
    const jsonCollection = await transformMarkdownDirectoryToJson(mockedPath)
    // Assert
    expect(jsonCollection).toEqual(mockedJsonCollection)
  })

  // TODO: Fix this test. Maybe add one more item to the transform items right now the first item is getting all the classifications instead of its own
  it.skip('gets a collection from a path and input directory', async () => {
    const mockedCollection = defaultCollection
    const mockedPath = 'src/test/mocks/defaultCollection/input/markdown/defaultCollection'
    const mockedInputDirectory = 'items'

    const collection = await getCollection(mockedPath, mockedInputDirectory)

    // Sort the collection items before comparing them
    await collection.content.items.sort((a, b) => (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0))
    await mockedCollection.content.items.sort((a, b) => (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0))

    expect(collection).toEqual(mockedCollection)
  })

  it.skip('gets Item Classifications from Json Item', async () => {
    const mockedJsonItem = {
      index: {
        containerName: 'irrelevant containerName',
        contents: 'irrelevant contents',
        name: 'irrelevant name',
        categories: ['Category1', 'Category2'],
        Tags: ['Tag 1', 'Tag 2', 'Tag 3']
      }
    }
    const mockedItemClassifications = [
      { name: 'categories', values: ['Category1', 'Category2'] },
      { name: 'Tags', values: ['Tag 1', 'Tag 2', 'Tag 3'] }]

    const jsonItemClassifications = await getItemClassificationsFromJsonItem(mockedJsonItem)

    expect(jsonItemClassifications).toEqual(mockedItemClassifications)
  })

  it.skip('transforms Json Items to Collection Items', async () => {
    const mockedJsonItems = [{
      containerName: 'irrelevant containerName',
      contents: 'irrelevant contents',
      name: 'irrelevant name',
      categories: ['Category1', 'Category2'],
      Tags: ['Tag 1', 'Tag 2', 'Tag 3']
    },
    {
      containerName: 'irrelevant containerName two',
      contents: 'irrelevant contents two',
      name: 'irrelevant name two',
      categories: ['Category2', 'Category3'],
      Tags: ['Tag 3', 'Tag 4', 'Tag 5']
    }
    ]

    const mockedCollectionItems = [{
      containerName: 'irrelevant containerName',
      content: 'irrelevant contents',
      name: 'irrelevant name',
      classifications: [
        { name: 'categories', values: ['Category1', 'Category2'] },
        { name: 'Tags', values: ['Tag 1', 'Tag 2', 'Tag 3'] }]
    },
    {
      containerName: 'irrelevant containerName two',
      content: 'irrelevant contents two',
      name: 'irrelevant name two',
      classifications: [
        { name: 'categories', values: ['Category2', 'Category3'] },
        { name: 'Tags', values: ['Tag 3', 'Tag 4', 'Tag 5'] }]
    }]

    const collectionItems = await transformJsonItemsToCollectionItems(mockedJsonItems)
    expect(collectionItems).toEqual(mockedCollectionItems)
  })

  it('gets Collection Classifications from an array of Collection Items', async () => {
    const mockedCollectionItems = [{
      containerName: 'irrelevant containerName',
      content: 'irrelevant contents',
      name: 'irrelevant name',
      classifications: [
        { name: 'categories', values: ['Category1', 'Category2'] },
        { name: 'Tags', values: ['Tag 1', 'Tag 2', 'Tag 3'] }]
    },
    {
      containerName: 'irrelevant containerName two',
      content: 'irrelevant contents two',
      name: 'irrelevant name two',
      classifications: [
        { name: 'categories', values: ['Category2', 'Category3'] },
        { name: 'Tags', values: ['Tag 3', 'Tag 4', 'Tag 5'] }]
    }
    ]
    const clonedMockedCollectionItems = JSON.parse(JSON.stringify(mockedCollectionItems))
    const mockedClassifications = [
      { name: 'categories', values: ['Category1', 'Category2', 'Category3'] },
      { name: 'Tags', values: ['Tag 1', 'Tag 2', 'Tag 3', 'Tag 4', 'Tag 5'] }]

    const classifications = await getClassificationsFromCollectionItems(mockedCollectionItems)

    expect(mockedCollectionItems).toEqual(clonedMockedCollectionItems)
    expect(classifications).toEqual(mockedClassifications)
  })
})
