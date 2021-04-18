import { Configuration, defaultConfiguration } from './configuration'
import { controllers } from './infrastructure/controllers'
import { Collection } from './domain/models'

// TODO: Check if there is a custom config in the root directory and load it instead of the default
const collman = async (configuration: Configuration = defaultConfiguration) => {
  configuration = { ...defaultConfiguration, ...configuration }
  const collection = await controllers.collection.getCollection(configuration)
  // Process it to the output specified in the config
  await controllers.collection.saveCollection(collection as Collection, configuration)
}

export = collman
