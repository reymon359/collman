import { defaultConfiguration } from './configuration'
const jdown = require('jdown')
// TODO: Check if there is a custom config in the root directory and load it instead of the default
export const collectionConfiguration = defaultConfiguration

// Returns the inputCollection from the root directory specified in the config
export const getInputCollection = async (configuration = collectionConfiguration) => {
  const { pathRootDirectory /*, inputType */ } = configuration

  const inputCollection = await jdown(pathRootDirectory)

  return inputCollection
}

// Process the collection WIP
// export const processCollection = inputCollection => {
//   const outputCollection
//
//   return outputCollection
// }
