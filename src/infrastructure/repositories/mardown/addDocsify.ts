import { Configuration, defaultConfiguration } from '../../../configuration'
import { Collection } from '../../../domain/models'
import { repositories } from '../index'
import { indexHtmlContent } from './fixtures/indexHtmlContent'
const json2md = require('json2md')

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
  const contentArray = []
  const unorderedList: any[] = []
  unorderedList.push({ link: { title: 'Home', source: '/' } })
  contentArray.push({ h1: collection.name })
  contentArray.push({ p: collection.description })

  // Classifications
  if (collection.classifications.length > 0) {
    contentArray.push({ h2: 'Classifications' })
    const unorderedList: any[] = []
    collection.classifications.sort((a, b) => (a.name > b.name) ? 1 : ((b.name > a.name) ? 0 : -1)).forEach(classification => {
      unorderedListOfClassifications.push({ link: { title: classification.name, source: `${urlifyString(classification.name)}/index.md` } })
    })
    contentArray.push({ ul: unorderedListOfClassifications })
  }

  // Content
  contentArray.push({ h2: `Content: ${collection.content.name}` })
  const unorderedListOfContent: any[] = []
  collection.content.items.sort((a, b) => (a.name > b.name) ? 1 : ((b.name > a.name) ? 0 : -1)).forEach(item => {
    unorderedListOfContent.push({ link: { title: item.name, source: `${urlifyString(item.name)}/index.md` } })
  })
  contentArray.push({ ul: unorderedListOfContent })

  const sidebarContent = json2md(contentArray)

  await repositories.fileSystem.writeFile(`${outputDirectoryPath}/_sidebar.md`, sidebarContent)
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
