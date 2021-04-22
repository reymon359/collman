import { Configuration } from '../../configuration'
import { repositories } from '../repositories'
import { Collection } from '../../domain/models'
import path from 'path'

const getLocalConfiguration = async () => {
  const localConfigurationPath = path.join(process.cwd(), 'collman.config.js')
  const existsConfig = await repositories.fileSystem.pathExists(localConfigurationPath)
  const localConfiguration = existsConfig ? require(localConfigurationPath) : {}
  return localConfiguration
}

export const getCollection = async (configuration: Configuration): Promise<{}> => {
  console.log('👀 Getting collection based on the configuration')
  configuration = { ...configuration, ...await getLocalConfiguration() }
  const { inputType, inputDirectory, pathRootDirectory } = configuration
  const collection = await repositories[inputType].getCollection(pathRootDirectory, inputDirectory)
  console.log(`✅  Collection got: ${collection.name}`)
  return collection
}

export const saveCollection = async (collection: Collection, configuration: Configuration) => {
  const { outputType } = configuration
  console.log(`🚧 Processing collection and saving in directory: ${configuration.outputDirectory}`)
  await repositories[outputType].saveCollection(collection, configuration)
  console.log('🎉 Collection processed and saved successfully')
  if (configuration.docsify) await repositories[outputType].addDocsify(collection, configuration)
}
