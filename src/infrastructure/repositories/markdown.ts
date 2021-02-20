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

export const transformJsonItemsToCollectionItems = async (jsonItems:any) => {
  const transformedItems = await jsonItems.map((jsonItem:JsonItem) => {
    const classifications = getClassificationsFromJsonItem(jsonItem)
    return {
      name: jsonItem.name,
      description: jsonItem.description,
      content: jsonItem.contents,
      classifications
    }
  })
  return transformedItems
}

export const getJsonItemsFromObjectItems = (objectItems:any) => {
  // TODO: #30 Get here the item name from the folder if the object has not one
  // TODO: Add a default description if the item does not have one
  return Object.keys(objectItems).map(key => objectItems[key])
}

export const transformInputDirectoryJsonToCollection = async (inputDirectoryJson: {}, inputDirectory:string) => {
  // @ts-ignore
  const jsonCollection = inputDirectoryJson[inputDirectory]
  const { index, ...objectItems } = jsonCollection

  const jsonItems = getJsonItemsFromObjectItems(objectItems)

  const collectionItems = transformJsonItemsToCollectionItems(jsonItems as [JsonItem])

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
      items: collectionItems
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
