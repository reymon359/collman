import {
  getClassificationsFromCollectionItems,
  getItemClassificationsFromJsonItem,
  transformJsonItemsToCollectionItems,
  transformInputDirectoryJsonToCollection,
  transformObjectItemsToJsonItems
} from '../getCollection'

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
})
