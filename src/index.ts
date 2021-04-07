import { Configuration, defaultConfiguration } from './configuration'
import { controllers } from './infrastructure/controllers'
import { Collection } from './domain/models'

// TODO: Check if there is a custom config in the root directory and load it instead of the default
const collman = async (configuration: Configuration = defaultConfiguration) => {
  const collection = await controllers.collection.getCollection(configuration)
  // Process it to the output specified in the config
  await controllers.collection.saveCollection(collection as Collection, configuration)
}
module.exports = {
  collman
}

// collman()
// collman({ ...defaultConfiguration, pathRootDirectory: '/Users/ramonmorcillo/Documents/developer/collection-manager/src/test/mocks/defaultCollection/output/markdown/defaultCollectionWithDocsify/' })
