import { Configuration, defaultConfiguration } from '../../configuration'
import { repositories } from '../repositories'
import { Collection } from '../../domain/models'
import path from 'path'

const getLocalConfiguration = async () => {
  console.log(__dirname)
  // TODO: try this in the index file
  const localConfigurationPath = path.join('./', 'collman.config.js')
  console.log(localConfigurationPath)
  const existsConfig = await repositories.fileSystem.pathExists(localConfigurationPath)
  const localConfiguration = existsConfig ? require(localConfigurationPath) : {}
  console.log(localConfiguration)
  return localConfiguration
}

export const getCollection = async (configuration: Configuration): Promise<{}> => {
  configuration = { ...defaultConfiguration, ...getLocalConfiguration() }
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
