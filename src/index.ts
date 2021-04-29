import { Configuration, defaultConfiguration, Collection } from './types'
import path from 'path'
import { pathExists } from './helpers/fileSystem'
import { getCollection } from './getCollection'
import { saveCollection } from './saveCollection'
import { addDocsify } from './addDocsify'

const getLocalConfiguration = async () => {
  const localConfigurationPath = path.join(process.cwd(), 'collman.config.js')
  const existsConfig = await pathExists(localConfigurationPath)
  const localConfiguration = existsConfig ? require(localConfigurationPath) : {}
  return localConfiguration
}

const getCollectionMain = async (configuration: Configuration): Promise<{}> => {
  console.log('👀 Getting collection based on the configuration')
  configuration = { ...configuration, ...await getLocalConfiguration() }
  const { inputDirectory, pathRootDirectory } = configuration
  const collection = await getCollection(pathRootDirectory, inputDirectory)
  console.log(`✅  Collection got: ${collection.name}`)
  return collection
}

const saveCollectionMain = async (collection: Collection, configuration: Configuration) => {
  console.log(`🚧 Processing collection and saving in directory: ${configuration.outputDirectory}`)
  await saveCollection(collection, configuration)
  console.log('🎉 Collection processed and saved successfully')
  if (configuration.docsify) await addDocsify(collection, configuration)
}

const collman = async (configuration: Configuration = defaultConfiguration) => {
  configuration = { ...defaultConfiguration, ...configuration }
  const collection = await getCollectionMain(configuration)
  // Process it to the output specified in the config
  await saveCollectionMain(collection as Collection, configuration)
}

export = collman
