import defaultCollectionJson from '../../test/mocks/defaultCollection/input/markdown/defaultCollection.json'
import {
  getClassificationsFromCollectionItems,
  getItemClassificationsFromJsonItem,
  transformInputDirectoryJsonToCollection, transformJsonItemsToCollectionItems,
  transformMarkdownDirectoryToJson
} from './markdown'
import { defaultCollection } from '../../test/mocks/defaultCollection'

describe('Markdown repository', () => {
  it('transforms a markdown directory to a collection json', async () => {
    // Arrange
    const mockedPath = 'src/test/mocks/defaultCollection/input/markdown/defaultCollection'
    const mockedJsonCollection = defaultCollectionJson
    // Act
    const jsonCollection = await transformMarkdownDirectoryToJson(mockedPath)
    // Assert
    expect(jsonCollection).toEqual(mockedJsonCollection)
  })

  it('gets Item Classifications from Json Item', async () => {
    const mockedJsonItem = {
      contents: 'irrelevant contents',
      name: 'irrelevant name',
      description: 'irrelevant description',
      categories: ['Category1', 'Category2'],
      Tags: ['Tag 1', 'Tag 2', 'Tag 3']
    }
    const mockedItemClassifications = [
      { name: 'categories', values: ['Category1', 'Category2'] },
      { name: 'Tags', values: ['Tag 1', 'Tag 2', 'Tag 3'] }]

    const jsonItemClassifications = await getItemClassificationsFromJsonItem(mockedJsonItem)

    expect(jsonItemClassifications).toEqual(mockedItemClassifications)
  })

  it('transforms Json Items to Collection Items', async () => {
    const mockedJsonItems = [{
      contents: 'irrelevant contents',
      name: 'irrelevant name',
      description: 'irrelevant description',
      categories: ['Category1', 'Category2'],
      Tags: ['Tag 1', 'Tag 2', 'Tag 3']
    },
    {
      contents: 'irrelevant contents two',
      name: 'irrelevant name two',
      description: 'irrelevant description two',
      categories: ['Category2', 'Category3'],
      Tags: ['Tag 3', 'Tag 4', 'Tag 5']
    }
    ]

    const mockedCollectionItems = [{
      content: 'irrelevant contents',
      name: 'irrelevant name',
      description: 'irrelevant description',
      classifications: [
        { name: 'categories', values: ['Category1', 'Category2'] },
        { name: 'Tags', values: ['Tag 1', 'Tag 2', 'Tag 3'] }]
    },
    {
      content: 'irrelevant contents two',
      name: 'irrelevant name two',
      description: 'irrelevant description two',
      classifications: [
        { name: 'categories', values: ['Category2', 'Category3'] },
        { name: 'Tags', values: ['Tag 3', 'Tag 4', 'Tag 5'] }]
    }]

    const collectionItems = await transformJsonItemsToCollectionItems(mockedJsonItems)
    expect(collectionItems).toEqual(mockedCollectionItems)
  })

  it('gets Collection Classifications from an array of Collection Items', async () => {
    const mockedCollectionItems = [{
      content: 'irrelevant contents',
      name: 'irrelevant name',
      description: 'irrelevant description',
      classifications: [
        { name: 'categories', values: ['Category1', 'Category2'] },
        { name: 'Tags', values: ['Tag 1', 'Tag 2', 'Tag 3'] }]
    },
    {
      content: 'irrelevant contents two',
      name: 'irrelevant name two',
      description: 'irrelevant description two',
      classifications: [
        { name: 'categories', values: ['Category2', 'Category3'] },
        { name: 'Tags', values: ['Tag 3', 'Tag 4', 'Tag 5'] }]
    }
    ]
    const mockedClassifications = [
      { name: 'categories', values: ['Category1', 'Category2', 'Category3'] },
      { name: 'Tags', values: ['Tag 1', 'Tag 2', 'Tag 3', 'Tag 4', 'Tag 5'] }]

    const classifications = await getClassificationsFromCollectionItems(mockedCollectionItems)
    expect(classifications).toEqual(mockedClassifications)
  })

  it.skip('transforms a collection json to a collection', async () => {
    // Arrange
    const mockedCollectionJson = defaultCollectionJson
    const mockedCollectionInputDirectory = 'items'
    const mockedCollection = defaultCollection
    // Act
    // @ts-ignore
    const collection = await transformInputDirectoryJsonToCollection(mockedCollectionJson, mockedCollectionInputDirectory)
    // Assert
    expect(collection).toEqual(mockedCollection)
  })
})
