import { defaultConfiguration } from './configuration'
import { controllers } from './infrastructure/controllers'

// TODO: Check if there is a custom config in the root directory and load it instead of the default
export const collectionConfiguration = defaultConfiguration

const main = async () => {
  const configuration = collectionConfiguration
  // Get the config values needed
  const { pathRootDirectory, inputType, outputType } = configuration
  // Upload the collection, pass it to json
  const collectionJson = await controllers.collection.getCollectionJson(pathRootDirectory, inputType)
  // Process it to the output specified in the config
  const collectionProcessed = controllers.collection.processCollection(collectionJson, outputType)
  // Save it in the folder specified in the config
  controllers.collection.saveCollection(collectionProcessed, configuration)
}

main()
