import { Configuration, defaultConfiguration } from './configuration'
import { controllers } from './infrastructure/controllers'
import { Collection } from './models'

const collman = async (configuration: Configuration = defaultConfiguration) => {
  configuration = { ...defaultConfiguration, ...configuration }
  const collection = await controllers.collection.getCollection(configuration)
  // Process it to the output specified in the config
  await controllers.collection.saveCollection(collection as Collection, configuration)
}

export = collman
