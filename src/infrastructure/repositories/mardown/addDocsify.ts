import { Configuration, defaultConfiguration } from '../../../configuration'
import { Collection } from '../../../domain/models'
import { repositories } from '../index'
import { indexHtmlContent } from './fixtures/indexHtmlContent'

const createReadmeFile = async (outputDirectoryPath:string) => {
  await repositories.fileSystem.copy(`${outputDirectoryPath}/index.md`, `${outputDirectoryPath}/README.md`)
}

const createNojekillFile = async (outputDirectoryPath:string) => {
  await repositories.fileSystem.writeFile(`${outputDirectoryPath}/.nojekill`, '')
}

const createIndexHtmlFile = async (outputDirectoryPath:string) => {
  await repositories.fileSystem.writeFile(`${outputDirectoryPath}/index.html`, indexHtmlContent())
}

const createSidebarFile = async (outputDirectoryPath:string) => {
  return 'todo'
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
