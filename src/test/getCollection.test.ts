import defaultCollectionJson from './mocks/defaultCollection/input/markdown/defaultCollection.json'
import {
  getClassificationsFromCollectionItems,
  getItemClassificationsFromJsonItem,
  transformJsonItemsToCollectionItems,
  transformMarkdownDirectoryToJson
  , getCollection,
  transformInputDirectoryJsonToCollection,
  transformObjectItemsToJsonItems
} from '../getCollection'
import { defaultCollection } from './mocks/defaultCollection'

describe('Get collection', () => {
  it('Transforms an Input Directory Json To a Collection', async () => {
    const mockedInputDirectoryJson = {
      index: {
        name: 'Fruits Collection',
        contents: '# This is my awesome collection of fruits'
      },
      apple: {
        index: {
          name: 'Apple',
          Color: ['Green', 'Red', 'Yellow'],
          Size: ['Medium'],
          contents: 'Apples are **amazing.**'
        }
      },
      orange: {
        index: {
          name: 'Orange',
          Color: ['Orange'],
          Size: ['Medium'],
          contents: 'Is my favourite fruit'
        }
      },
      watermelon: {
        index: {
          name: 'Watermelon',
          Color: ['Green'],
          Size: ['Big'],
          contents: 'I like this watermelon picture\n\n![watermelon](./assets/watermelon.png)'
        }
      }
    }

    const mockedExpectedCollection = {
      name: 'Fruits Collection',
      description: '# This is my awesome collection of fruits',
      classifications: [
        { name: 'Color', values: ['Green', 'Orange', 'Red', 'Yellow'] },
        { name: 'Size', values: ['Big', 'Medium'] }
      ],
      content: {
        name: 'items',
        items: [
          {
            containerName: 'apple',
            name: 'Apple',
            content: 'Apples are **amazing.**',
            classifications: [
              { name: 'Color', values: ['Green', 'Red', 'Yellow'] },
              { name: 'Size', values: ['Medium'] }
            ]
          },
          {
            containerName: 'orange',
            name: 'Orange',
            content: 'Is my favourite fruit',
            classifications: [
              { name: 'Color', values: ['Orange'] },
              { name: 'Size', values: ['Medium'] }
            ]
          },
          {
            containerName: 'watermelon',
            name: 'Watermelon',
            content: 'I like this watermelon picture\n\n![watermelon](./assets/watermelon.png)',
            classifications: [
              { name: 'Color', values: ['Green'] },
              { name: 'Size', values: ['Big'] }
            ]
          }
        ]
      }
    }

    const expectedCollection = await transformInputDirectoryJsonToCollection(mockedInputDirectoryJson, 'items')

    expect(expectedCollection).toEqual(mockedExpectedCollection)
  })

  it('Transforms Object Items to Json Items', async () => {
    const mockedObjectItems = {
      apple: {
        index: {
          name: 'Apple',
          Color: ['Green', 'Red', 'Yellow'],
          Size: ['Medium'],
          contents: 'Apples are **amazing.**'
        }
      },
      orange: {
        index: {
          name: 'Orange',
          Color: ['Orange'],
          Size: ['Medium'],
          contents: 'Is my favourite fruit'
        }
      },
      watermelon: {
        index: {
          name: 'Watermelon',
          Color: ['Green'],
          Size: ['Big'],
          contents: 'I like this watermelon picture\n\n![watermelon](./assets/watermelon.png)'
        }
      }
    }
    const mockedExpectedJsonItems = [
      {
        containerName: 'apple',
        index: {
          name: 'Apple',
          Color: ['Green', 'Red', 'Yellow'],
          Size: ['Medium'],
          contents: 'Apples are **amazing.**'
        }
      },
      {
        containerName: 'orange',
        index: {
          name: 'Orange',
          Color: ['Orange'],
          Size: ['Medium'],
          contents: 'Is my favourite fruit'
        }
      },
      {
        containerName: 'watermelon',
        index: {
          name: 'Watermelon',
          Color: ['Green'],
          Size: ['Big'],
          contents: 'I like this watermelon picture\n\n![watermelon](./assets/watermelon.png)'
        }
      }
    ]

    const expectedJsonItems = await transformObjectItemsToJsonItems(mockedObjectItems)

    expect(expectedJsonItems).toEqual(mockedExpectedJsonItems)
  })

  it('Transforms Json Items to Collection Items', async () => {
    const mockedJsonItems = [
      {
        containerName: 'apple',
        index: {
          name: 'Apple',
          Color: ['Green', 'Red', 'Yellow'],
          Size: ['Medium'],
          contents: 'Apples are **amazing.**'
        }
      },
      {
        containerName: 'orange',
        index: {
          name: 'Orange',
          Color: ['Orange'],
          Size: ['Medium'],
          contents: 'Is my favourite fruit'
        }
      },
      {
        containerName: 'watermelon',
        index: {
          name: 'Watermelon',
          Color: ['Green'],
          Size: ['Big'],
          contents: 'I like this watermelon picture\n\n![watermelon](./assets/watermelon.png)'
        }
      }
    ]
    const mockedExpectedCollectionItems = [
      {
        containerName: 'apple',
        name: 'Apple',
        content: 'Apples are **amazing.**',
        classifications: [{ name: 'Color', values: ['Green', 'Red', 'Yellow'] }, { name: 'Size', values: ['Medium'] }]
      },
      {
        containerName: 'orange',
        name: 'Orange',
        content: 'Is my favourite fruit',
        classifications: [{ name: 'Color', values: ['Orange'] }, { name: 'Size', values: ['Medium'] }]
      },
      {
        containerName: 'watermelon',
        name: 'Watermelon',
        content: 'I like this watermelon picture\n\n![watermelon](./assets/watermelon.png)',
        classifications: [{ name: 'Color', values: ['Green'] }, { name: 'Size', values: ['Big'] }]
      }
    ]

    const expectedCollectionItems = await transformJsonItemsToCollectionItems(mockedJsonItems)

    expect(expectedCollectionItems).toEqual(mockedExpectedCollectionItems)
  })

  it('Gets all the collection classifications from the collection items', async () => {
    const mockedCollectionItems = [
      {
        containerName: 'apple',
        name: 'Apple',
        content: 'Apples are **amazing.**',
        classifications: [{ name: 'Color', values: ['Green', 'Red', 'Yellow'] }, { name: 'Size', values: ['Medium'] }]
      },
      {
        containerName: 'orange',
        name: 'Orange',
        content: 'Is my favourite fruit',
        classifications: [{ name: 'Color', values: ['Orange'] }, { name: 'Size', values: ['Medium'] }]
      },
      {
        containerName: 'watermelon',
        name: 'Watermelon',
        content: 'I like this watermelon picture\n\n![watermelon](./assets/watermelon.png)',
        classifications: [{ name: 'Color', values: ['Green'] }, { name: 'Size', values: ['Big'] }]
      }
    ]
    const mockedExpectedClassifications = [
      { name: 'Color', values: ['Green', 'Orange', 'Red', 'Yellow'] },
      { name: 'Size', values: ['Big', 'Medium'] }
    ]

    const expectedClassifications = await getClassificationsFromCollectionItems(mockedCollectionItems)

    expect(expectedClassifications).toEqual(mockedExpectedClassifications)
  })

  it('Gets the Item classifications from a Json item', async () => {
    const mockedJsonItem = {
      containerName: 'apple',
      index: {
        name: 'Apple',
        Color: ['Green', 'Red', 'Yellow'],
        Size: ['Medium'],
        contents: 'Apples are **amazing.**'
      }
    }
    const mockedExpectedItemClassifications = [
      { name: 'Color', values: ['Green', 'Red', 'Yellow'] },
      { name: 'Size', values: ['Medium'] }
    ]

    const expectedItemClassifications = await getItemClassificationsFromJsonItem(mockedJsonItem)

    expect(expectedItemClassifications).toEqual(mockedExpectedItemClassifications)
  })

  it.skip('transforms a markdown directory to a collection json', async () => {
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
      containerName: 'irrelevant containerName',
      index: {
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

  it.skip('gets Collection Classifications from an array of Collection Items', async () => {
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
