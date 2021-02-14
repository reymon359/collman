import { Configuration } from '../../configuration'
import { repositories } from '../repositories'

// Returns the Collection Json from the path specified
export const getCollectionJson = async (collectionPath: string, format: string): Promise<{}> => {
  return repositories[format].getCollectionJson(collectionPath)
}

export const processCollection = (collection: {}, format: string):any => {
  return {} as any
}

export const saveCollection = (collectionProcessed: any, configuration: Configuration) => {
  // This calls the file system controller and saves it in the output path specified in the config
}
