import { Collection, Configuration, defaultConfiguration, DocsifyConfiguration, Json2mdLink } from './types'
import { getIndexHtmlContent } from './helpers/indexHtmlContent'
import { urlifyString } from './helpers/urlifyString'
import { sortUnorderedListOfLinks } from './helpers/sortUnorderedListOfLinks'
import { copy, pathExists, writeFile } from './helpers/fileSystem'
import path from 'path'

const json2md = require('json2md')

export const getSidebarFileContent = async (collection: Collection) => {
  const mainUnorderedList = []

  // Content
  const contentUnorderedList = []
  contentUnorderedList.push(`Content: ${collection.content.name}`)
  const itemsUnorderedList: Json2mdLink[] = []
  collection.content.items.sort((a, b) => (a.name > b.name) ? 1 : ((b.name > a.name) ? 0 : -1)).forEach(item => {
    itemsUnorderedList.push({ link: { title: item.name, source: `${urlifyString(item.name)}/index.md` } })
  })
  contentUnorderedList.push({ ul: sortUnorderedListOfLinks(itemsUnorderedList) })
  mainUnorderedList.push({ ul: contentUnorderedList })

  // Classifications
  collection.classifications.forEach(classification => {
    const classificationUnorderedList = []
    classificationUnorderedList.push(classification.name)
    const classificationValuesUnorderedList = []
    classificationValuesUnorderedList.push({ link: { title: 'All', source: `${urlifyString(classification.name)}/index.md` } })
    classification.values.sort().forEach(value => {
      classificationValuesUnorderedList.push({ link: { title: value, source: `./${urlifyString(classification.name)}/${urlifyString(value)}.md` } })
    })
    classificationUnorderedList.push({ ul: sortUnorderedListOfLinks(classificationValuesUnorderedList) })
    mainUnorderedList.push({ ul: classificationUnorderedList })
  })

  return json2md(mainUnorderedList)
}

const createReadmeFile = async (outputDirectoryPath:string) => {
  await copy(`${outputDirectoryPath}/index.md`, `${outputDirectoryPath}/README.md`)
}

const createNojekillFile = async (outputDirectoryPath:string) => {
  await writeFile(`${outputDirectoryPath}/.nojekill`, '')
}

const createIndexHtmlFile = async (collection:Collection, outputDirectoryPath:string, docsifyConfiguration:DocsifyConfiguration) => {
  await writeFile(`${outputDirectoryPath}/index.html`, getIndexHtmlContent(collection, docsifyConfiguration))
}

const createSidebarFile = async (collection: Collection, outputDirectoryPath:string) => {
  await writeFile(`${outputDirectoryPath}/_sidebar.md`, await getSidebarFileContent(collection))
}

export const addDocsify = async (collection:Collection, configuration:Configuration = defaultConfiguration) => {
  console.log('🎨 Docsify enabled. Adding it to the collection')
  const { pathRootDirectory, outputDirectory } = configuration
  const outputDirectoryPath = `${pathRootDirectory}${outputDirectory}`

  const docsifyConfigurationPath = path.join(process.cwd(), 'docsify.config.js')
  const existsConfig = await pathExists(docsifyConfigurationPath)
  const docsifyConfiguration = existsConfig ? require(docsifyConfigurationPath) : {}

  // 1. Copy the index and create a README.md with it
  await createReadmeFile(outputDirectoryPath)

  // 2. Create the .nojekill file
  await createNojekillFile(outputDirectoryPath)

  // 3. Create the index.html file
  await createIndexHtmlFile(collection, outputDirectoryPath, docsifyConfiguration)

  // 4. Create the _sidebar.md file
  await createSidebarFile(collection, outputDirectoryPath)
  console.log('🖼 Docsify added successfully to the collection. To have a look just do two things:')
  console.log('1. Install Docsify: npm i docsify-cli -g')
  console.log(`2. Run: docsify serve ${configuration.outputDirectory}`)
}
