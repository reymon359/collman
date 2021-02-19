const jdown = require('jdown')

export interface JsonItem {
  name: string
  description: string
  categories?: [string]
  contents?: string
}

export interface JsonCollection {
  items: [JsonItem]
}

export const transformMarkdownDirectoryToJson = async (path:string) => {
  const jsonCollection: JsonCollection = await jdown(path, { parseMd: false })
  return jsonCollection
}

export const getClassificationsFromJsonItem = (jsonItem: any) => {
  const jsonItemKeys = (Object.keys(jsonItem))
  const jsonItemClassifications: any[] = []
  jsonItemKeys.forEach(key => {
    const value = jsonItem[key]
    if (Array.isArray(value)) {
      jsonItemClassifications.push({ name: key, values: value })
    }
  })
  return jsonItemClassifications
}

export const getClassificationsFromJsonItems = async (jsonItems:[any]) => {
  // const allClassifications = jsonItems.forEach(jsonItem => getClassificationsFromJsonItem(jsonItem))
  return [{
    name: 'categories',
    values: ['Category1', 'Category2', 'Category3']
  }, {
    name: 'tags',
    values: ['Tag 1', 'Tag 2', 'Tag 3', 'Tag 4', 'Tag 5']
  }]
}


export const transformJsonItemsToCollectionItems =(jsonItems:[any]) => {


   // Add this here to rename the content .map(({ contents: content, ...rest }) => ({ content, ...rest }))

}

export const getArrayJsonItems = (itemsObjects:any) =>{

  return Object.keys(itemsObjects).map(key => itemsObjects[key])

}

export const transformInputDirectoryJsonToCollection = async (inputDirectoryJson: {}, inputDirectory:string) => {
  // @ts-ignore
  const jsonCollection = inputDirectoryJson[inputDirectory]
  const { index, ...itemsObjects } = jsonCollection

  // Gets the items objects and transforms into an array and changes the name of contents to content
  const jsonItems = getArrayJsonItems(itemsObjects)




  const itemsTransformed = transformJsonItemsToCollectionItems(jsonItems as [JsonItem])
  //
  //   console.log(index, jsonItems)
  //   const jsonItems = jsonItems.map(({ contents: content, ...rest }) => ({ content, ...rest }));
  //   console.log(jsonItems)
  const collectionClassifications = getClassificationsFromJsonItems(jsonItems as [JsonItem])
  // console.log('wtf')
  // const collectionItems = processJsonItems

  return {
    name: index.name,
    description: index.contents,
    classifications: collectionClassifications,
    content: {
      name: inputDirectory,
      items: [{
        name: 'item1',
        description: 'description1',
        classifications: [{
          name: 'categories',
          values: ['Category1', 'Category2']
        }],
        content: '# Title 1\n\n![Image 1](./assets/image-1.jpg)\n\nItem 1 introduction\n\n\n'
      }, {
        name: 'ITEM2',
        description: 'DESCRIPTION2',
        classifications: [{
          name: 'categories',
          values: ['Category1', 'Category3']
        }],
        content: '# Title 2\n\n![Image 2](./assets/image-2.png)\n\nItem 2 introduction\n\n\n'
      }, {
        name: 'Item3',
        description: 'Description3',
        classifications: [{
          name: 'categories',
          values: ['Category2', 'Category3']
        }],
        content: '# Title 3\n\n![Image 3](./assets/image-3.svg)\n\nItem 3 introduction\n\n\n'
      }]
    }

  }
}

// Returns the json object
export const getCollection = async (path:string, inputDirectory:string) => {
  const inputDirectoryJson = await transformMarkdownDirectoryToJson(path)
  const collection = await transformInputDirectoryJsonToCollection(inputDirectoryJson, inputDirectory)

  return collection
}

// Creates a markdown directory from a json object
export const createMarkdownCollection = (json:object, outputPath?:string) => {

}
