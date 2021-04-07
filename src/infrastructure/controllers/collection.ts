import { Configuration, defaultConfiguration } from '../../configuration'
import { repositories } from '../repositories'
import { Collection } from '../../domain/models'

export const getCollection = async (configuration = defaultConfiguration): Promise<{}> => {
  const { inputType, inputDirectory, pathRootDirectory } = configuration
  const collection = await repositories[inputType].getCollection(pathRootDirectory, inputDirectory)
  console.log('collection got:', collection)
  return collection
}

export const saveCollection = async (collection: Collection, configuration: Configuration) => {
  const { outputType } = configuration
  await repositories[outputType].saveCollection(collection, configuration)
  if (configuration.docsify) await repositories[outputType].addDocsify(collection, configuration)
}
