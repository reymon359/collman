import { Configuration, defaultConfiguration } from '../../../configuration'
import { Collection } from '../../../domain/models'
import { repositories } from '../index'

const createSidebarFile = async (outputDirectoryPath:string) => {
  return 'todo'
}

const createIndexHtmlFile = async (outputDirectoryPath:string) => {
  return 'todo'
}

const createNojekillFile = async (outputDirectoryPath:string) => {
  return 'todo'
}

const createReadmeFile = async (outputDirectoryPath:string) => {
  await repositories.fileSystem.copy(`${outputDirectoryPath}/index.md`, `${outputDirectoryPath}/README.md`)
}

export const addDocsify = async (collection:Collection, configuration:Configuration = defaultConfiguration) => {
  const { pathRootDirectory, outputDirectory } = configuration
  const outputDirectoryPath = `${pathRootDirectory}${outputDirectory}`
  // 1. Copy the index and create a README.md with it
  await createReadmeFile(outputDirectoryPath)

  // 2. Create the .nojekill file
  await createNojekillFile(outputDirectoryPath)

  // 3. Create the index.html file
  await createIndexHtmlFile(outputDirectoryPath)

  // 4. Create the _sidebar.md file
  await createSidebarFile(outputDirectoryPath)
}
