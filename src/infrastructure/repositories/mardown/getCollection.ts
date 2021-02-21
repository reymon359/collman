import { Classification, Item } from '../../../domain/models'

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
  // TODO #30 #33 Use the fileInfo option from jdown to get info from dates and file name
  const jsonCollection: JsonCollection = await jdown(path, { parseMd: false })
  return jsonCollection
}

export const getItemClassificationsFromJsonItem = async (jsonItem: any) => {
  const jsonItemKeys = (Object.keys(jsonItem))
  const itemClassifications: any[] = []
  await jsonItemKeys.forEach(key => {
    const value = jsonItem[key]
    if (Array.isArray(value)) {
      itemClassifications.push({ name: key, values: value })
    }
  })
  return itemClassifications
}

export const getClassificationsFromCollectionItems = async (collectionItems: Item[]) => {
  const collectionClassifications: Classification[] = []
  const clonedCollectionItems = JSON.parse(JSON.stringify(collectionItems))
  const allItemsClassifications = clonedCollectionItems.map((item:Item) => item.classifications)

  await allItemsClassifications.forEach((itemClassifications:Classification[]) => {
    itemClassifications.forEach(itemClassification => {
      // If the classification is already in the collection classifications
      if (collectionClassifications.some(collectionClassification => collectionClassification.name === itemClassification.name)) {
        // We get the index of the classification in the collection
        const collectionClassificationIndex = collectionClassifications.findIndex(collectionClassification => collectionClassification.name === itemClassification.name)
        // merge the values with the current ones
        const currentValues = collectionClassifications[collectionClassificationIndex].values

        collectionClassifications[collectionClassificationIndex].values = [...new Set([...currentValues, ...itemClassification.values])].sort()
      } else { // if the classification is not in collection classifications we add it
        collectionClassifications.push(itemClassification)
      }
    })
  })
  return collectionClassifications
}

export const transformJsonItemsToCollectionItems = async (jsonItems:any) => {
  const transformedItems:Item[] = []
  for (const jsonItem of jsonItems) {
    const classifications = await getItemClassificationsFromJsonItem(jsonItem)
    transformedItems.push({
      name: jsonItem.name,
      description: jsonItem.description,
      content: jsonItem.contents as string,
      classifications
    })
  }
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

export const getCollection = async (path:string, inputDirectory:string) => {
  const inputDirectoryJson = await transformMarkdownDirectoryToJson(path)
  const collection = await transformInputDirectoryJsonToCollection(inputDirectoryJson, inputDirectory)

  return collection
}
