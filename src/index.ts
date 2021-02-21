import { Configuration, defaultConfiguration } from './configuration'
import { controllers } from './infrastructure/controllers'

// TODO: Check if there is a custom config in the root directory and load it instead of the default
const main = async (configuration: Configuration = defaultConfiguration) => {
  // Get the config values needed
  const { outputType } = configuration
  // Upload the collection, pass it to json
  const collectionUploaded = await controllers.collection.getCollection(configuration)
  // Process it to the output specified in the config
  const collectionProcessed = controllers.collection.processCollection(collectionUploaded, outputType)
  // Save it in the folder specified in the config
  controllers.collection.saveCollection(collectionProcessed, configuration)
}

main()
