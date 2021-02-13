import { Collection } from '../../domain/models'
import { Configuration } from '../../configuration'
import { repositories } from '../repositories'

export const uploadCollection = async (collectionPath: string, format: string): Promise<Collection> => {
  // Returns the Collection from the path specified
  const collection = await repositories[format].getCollection(collectionPath)

  return collection as Collection
}

export const processCollection = (collection: Collection, format: string):any => {
  return {} as any
}

export const saveCollection = (collectionProcessed: any, configuration: Configuration) => {
  // This calls the file system controller and saves it in the output path specified in the config
}
