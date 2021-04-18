import { Configuration, defaultConfiguration } from '../../configuration'
import { repositories } from '../repositories'
import { Collection } from '../../domain/models'

export const getCollection = async (configuration = defaultConfiguration): Promise<{}> => {
  const { inputType, inputDirectory, pathRootDirectory } = configuration
  const collection = await repositories[inputType].getCollection(pathRootDirectory, inputDirectory)
  console.log(`Collection got: ${collection.name}`)
  return collection
}

export const saveCollection = async (collection: Collection, configuration: Configuration) => {
  const { outputType } = configuration
  console.log('Proceed to save collection')
  await repositories[outputType].saveCollection(collection, configuration)
  console.log('Collection saved')
  if (configuration.docsify) await repositories[outputType].addDocsify(collection, configuration)
}
