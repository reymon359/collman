import { Classification, Item } from '../../domain/models'

const jdown = require('jdown')

export interface JsonItem {
  name: string
  description: string
  categories?: string[]
  contents?: string
}

export interface JsonCollection {
  items: JsonItem[]
}

export const transformMarkdownDirectoryToJson = async (path:string) => {
  const jsonCollection: JsonCollection = await jdown(path, { parseMd: false })
  return jsonCollection
}

export const getClassificationsFromJsonItem = async (jsonItem: any) => {
  const jsonItemKeys = (Object.keys(jsonItem))
  const jsonItemClassifications: any[] = []
  await jsonItemKeys.forEach(key => {
    const value = jsonItem[key]
    if (Array.isArray(value)) {
      jsonItemClassifications.push({ name: key, values: value })
    }
  })
  return jsonItemClassifications
}

export const getClassificationsFromCollectionItems = async (collectionItems: Item[]) => {
  const collectionClassifications: Classification[] = []
  const allItemsClassifications = collectionItems.map(item => item.classifications)

  await allItemsClassifications.forEach(itemClassifications => {
    itemClassifications.forEach(itemClassification => {
      // If the classification is already in the collection classifications
      if (collectionClassifications.some(collectionClassification => collectionClassification.name === itemClassification.name)) {
        // We get the index of the classification in the collection
        const collectionClassificationIndex = collectionClassifications.findIndex(collectionClassification => collectionClassification.name === itemClassification.name)
        // merge the values with the current ones
        const currentValues = collectionClassifications[collectionClassificationIndex].values

        collectionClassifications[collectionClassificationIndex].values = [...new Set([...currentValues, ...itemClassification.values])]
      } else { // if the classification is not in collection classifications we add it
        collectionClassifications.push(itemClassification)
      }
    })
  })

  return collectionClassifications
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

  const jsonItems = await getJsonItemsFromObjectItems(objectItems)
  const collectionItems = await transformJsonItemsToCollectionItems(jsonItems as JsonItem[])
  const collectionClassifications = await getClassificationsFromCollectionItems(collectionItems)

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
