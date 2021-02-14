import { Configuration } from '../../configuration'
import { repositories } from '../repositories'
import { collectionConfiguration } from '../../index'
import { Collection } from '../../domain/models'
const { inputDirectory } = collectionConfiguration

const jsonToCollection= (collectionJson:{}) :Collection => {
  const jsonItems:any = collectionJson[inputDirectory]
  // const { index } = jsonItems
  const { index, ...itemsToProcess } = jsonItems;
  console.log(index, itemsToProcess)
  // const collectionItems = processJsonItems

  return {
    name: index.name,
    description: index.contents,
    content: itemsToProcess
  }

}

// Returns the Collection Json from the path specified
export const getCollection = async (collectionPath: string, format: string): Promise<{}> => {
  const collectionJson = await repositories[format].getCollectionJson(collectionPath)

  const collection = await jsonToCollection(collectionJson)
  return collection

}

export const processCollection = (collection: {}, format: string):any => {
  // const items = getCollectionItems
  // const index =

  return {} as any
}

export const saveCollection = (collectionProcessed: any, configuration: Configuration) => {
  // This calls the file system controller and saves it in the output path specified in the config
}
