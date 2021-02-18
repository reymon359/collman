import { Configuration, defaultConfiguration } from '../../configuration'
import { repositories } from '../repositories'
import { Collection } from '../../domain/models'

// const processJsonItems

const jsonToCollection = (collectionJson:any, inputDirectory: string) :Collection => {

}

// Returns the Collection Json from the path specified
export const getCollection = async (configuration = defaultConfiguration): Promise<{}> => {
  const { inputType, inputDirectory, pathRootDirectory } = configuration
  const collectionJson = await repositories[inputType].getCollectionJson(pathRootDirectory, inputDirectory)

  const collection = await jsonToCollection(collectionJson, inputDirectory)
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
