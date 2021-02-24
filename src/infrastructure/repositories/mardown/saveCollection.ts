import { Configuration, defaultConfiguration } from '../../../configuration'
import { Collection } from '../../../domain/models'
import {repositories} from '../index'

export const createOutputDirectory = async (pathRootDirectory:string, outputDirectory:string) => {
  const outputDirectoryPath = `${pathRootDirectory}${outputDirectory}`

  await repositories.fileSystem.makeDirectory(outputDirectoryPath)
}

export const saveCollection = async (collection:Collection, configuration:Configuration = defaultConfiguration) => {
  const { pathRootDirectory, outputDirectory } = configuration
  // 1. Create the output directory. Default docs
  await createOutputDirectory(pathRootDirectory, outputDirectory)

  // 2. Create the index file

  // 3. copy and paste the items in the folder removing the frontmatter. Or create the items with just the content and then copy the assets from the previous one

  // 4. Generate the categories

  return 'TODO'
}
