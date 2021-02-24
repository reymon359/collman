import { Configuration, defaultConfiguration } from '../../../configuration'
import { Collection } from '../../../domain/models'
import { repositories } from '../index'

export const createOutputDirectory = async (outputDirectoryPath:string) => {
  await repositories.fileSystem.makeDirectory(outputDirectoryPath)
}

const createIndexFile = async (collection:Collection, outputDirectoryPath:string) => {
  const indexContent = 'test'

  await repositories.fileSystem.writeFile(`${outputDirectoryPath}/index.md`, indexContent)
}

export const saveCollection = async (collection:Collection, configuration:Configuration = defaultConfiguration) => {
  const { pathRootDirectory, outputDirectory } = configuration
  const outputDirectoryPath = `${pathRootDirectory}${outputDirectory}`
  // 1. Create the output directory. Default docs
  await createOutputDirectory(outputDirectoryPath)

  // 2. Create the index file
  await createIndexFile(collection, outputDirectoryPath)
  // 3. copy and paste the items in the folder removing the frontmatter. Or create the items with just the content and then copy the assets from the previous one

  // 4. Generate the categories

  return 'TODO'
}
