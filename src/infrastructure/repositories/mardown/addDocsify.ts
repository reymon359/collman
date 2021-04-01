import { Configuration, defaultConfiguration } from '../../../configuration'
import { Collection } from '../../../domain/models'
import { repositories } from '../index'
import { getIndexHtmlContent } from './helpers/indexHtmlContent'
import { urlifyString } from './helpers/urlifyString'
import { sortUnorderedListOfLinks } from './helpers/sortUnorderedListOfLinks'
const json2md = require('json2md')

export interface DocsifyConfiguration {
  main: object
  scriptsAndLinks: string[]
}

const createReadmeFile = async (outputDirectoryPath:string) => {
  await repositories.fileSystem.copy(`${outputDirectoryPath}/index.md`, `${outputDirectoryPath}/README.md`)
}

const createNojekillFile = async (outputDirectoryPath:string) => {
  await repositories.fileSystem.writeFile(`${outputDirectoryPath}/.nojekill`, '')
}

const createIndexHtmlFile = async (collection:Collection, outputDirectoryPath:string, docsifyConfiguration:DocsifyConfiguration) => {
  await repositories.fileSystem.writeFile(`${outputDirectoryPath}/index.html`, getIndexHtmlContent(collection, docsifyConfiguration))
}

const createSidebarFile = async (collection: Collection, outputDirectoryPath:string) => {
  const mainUnorderedList: any[] = []

  // Content
  const contentUnorderedList: any[] = []
  contentUnorderedList.push(`Content: ${collection.content.name}`)
  const itemsUnorderedList: any[] = []
  collection.content.items.sort((a, b) => (a.name > b.name) ? 1 : ((b.name > a.name) ? 0 : -1)).forEach(item => {
    itemsUnorderedList.push({ link: { title: item.name, source: `${urlifyString(item.name)}/index.md` } })
  })
  contentUnorderedList.push({ ul: sortUnorderedListOfLinks(itemsUnorderedList) })
  mainUnorderedList.push({ ul: contentUnorderedList })

  // Classifications
  collection.classifications.forEach(classification => {
    const classificationUnorderedList: any[] = []
    classificationUnorderedList.push(classification.name)
    const classificationValuesUnorderedList: any[] = []
    classificationValuesUnorderedList.push({ link: { title: 'All', source: `${urlifyString(classification.name)}/index.md` } })
    classification.values.sort().forEach(value => {
      classificationValuesUnorderedList.push({ link: { title: value, source: `../${urlifyString(classification.name)}/${urlifyString(value)}.md` } })
    })
    classificationUnorderedList.push({ ul: sortUnorderedListOfLinks(classificationValuesUnorderedList) })
    mainUnorderedList.push({ ul: classificationUnorderedList })
  })

  const sidebarContent = json2md(mainUnorderedList)

  await repositories.fileSystem.writeFile(`${outputDirectoryPath}/_sidebar.md`, sidebarContent)
}

export const addDocsify = async (collection:Collection, configuration:Configuration = defaultConfiguration) => {
  const { pathRootDirectory, outputDirectory } = configuration
  const outputDirectoryPath = `${pathRootDirectory}${outputDirectory}`
  const existsConfig = await repositories.fileSystem.pathExists(`${pathRootDirectory}docsify.config.js`)
  const docsifyConfiguration = existsConfig ? require(`${pathRootDirectory}docsify.config.js`) : {}
  // 1. Copy the index and create a README.md with it
  await createReadmeFile(outputDirectoryPath)

  // 2. Create the .nojekill file
  await createNojekillFile(outputDirectoryPath)

  // 3. Create the index.html file
  await createIndexHtmlFile(collection, outputDirectoryPath, docsifyConfiguration)

  // 4. Create the _sidebar.md file
  await createSidebarFile(collection, outputDirectoryPath)
  console.log('Docsify integration added to the collection')
}
