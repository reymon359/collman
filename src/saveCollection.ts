import { Classification, Collection, Configuration, defaultConfiguration, Item } from './types'
import { urlifyString } from './helpers/urlifyString'
import { sortUnorderedListOfLinks } from './helpers/sortUnorderedListOfLinks'
import { copy, emptyDirectory, makeDirectory, pathExists, writeFile } from './helpers/fileSystem'
const json2md = require('json2md')

export const createOutputDirectory = async (outputDirectoryPath:string) => {
  await emptyDirectory(outputDirectoryPath)
  await makeDirectory(outputDirectoryPath)
}

export const getMainIndexFileContent = async (collection:Collection) => {
  const contentArray = []
  contentArray.push({ h1: collection.name })
  contentArray.push({ p: collection.description })

  // Content
  contentArray.push({ h2: `Content: ${collection.content.name}` })
  const unorderedListOfContent: any[] = []
  collection.content.items.forEach(item => {
    unorderedListOfContent.push({ link: { title: item.name, source: `${urlifyString(item.name)}/index.md` } })
  })
  contentArray.push({ ul: sortUnorderedListOfLinks(unorderedListOfContent) })

  // Classifications
  if (collection.classifications.length > 0) {
    contentArray.push({ h2: 'Classifications' })
    const unorderedListOfClassifications: any[] = []
    collection.classifications.forEach(classification => {
      unorderedListOfClassifications.push({ link: { title: classification.name, source: `${urlifyString(classification.name)}/index.md` } })
    })
    contentArray.push({ ul: sortUnorderedListOfLinks(unorderedListOfClassifications) })
  }

  const indexContent = `${json2md(contentArray)}<br/><br/><br/><sub>Made with [Collman](https://github.com/reymon359/collman)<sub>`
  return indexContent
}

export const getItemIndexFileContent = async (item:Item) => {
  // Get classifications to add in bottom
  const itemClassifications: any[] = []
  if (item.classifications.length > 0) {
    item.classifications.forEach((classification, i) => {
      itemClassifications[i] = `[${classification.name}:](../${urlifyString(classification.name)}/index.md)`

      classification.values.forEach((value) => {
        itemClassifications[i] += ` [${value}](../${urlifyString(classification.name)}/${urlifyString(value)}.md)`
      })
    })
  }
  const classificationsContent = itemClassifications.join('<br/>')

  const itemIndexFileContent = `${item.content}<br/>${classificationsContent}`
  return itemIndexFileContent
}

const createItemsInOutputDirectory = async (collection:Collection, inputDirectoryPath:string, outputDirectoryPath:string) => {
  for (const item of collection.content.items) {
    await writeFile(`${outputDirectoryPath}/${item.name}/index.md`, await getItemIndexFileContent(item))

    const itemHasAssets = await pathExists(`${inputDirectoryPath}/${item.containerName}/assets`)
    if (itemHasAssets) {
      await copy(`${inputDirectoryPath}/${item.containerName}/assets`, `${outputDirectoryPath}/${item.name}/assets`)
    }
  }
}

export const getClassificationValueFileContent = async (classificationValue:string, collection:Collection, classification:Classification) => {
  const valueContentArray = []
  const listOfItemWithValue: any[] = []
  valueContentArray.push({ h1: classificationValue })
  // Go through the items and its classifications.
  collection.content.items.forEach(item => {
    item.classifications.forEach(itemClassification => {
      // If the item has the classification
      if (itemClassification.name === classification.name) {
        // If the items has values in that classification and includes the value
        if (itemClassification.values.length > 0 && itemClassification.values.includes(classificationValue)) {
          listOfItemWithValue.push({ link: { title: item.name, source: `../${urlifyString(item.name)}/index.md` } })
        }
      }
    })
  })
  if (listOfItemWithValue.length > 0) valueContentArray.push({ ul: sortUnorderedListOfLinks(listOfItemWithValue) })

  return json2md(valueContentArray)
}

export const getClassificationIndexFileContent = async (classification:Classification) => {
  const classificationIndexContent: any[] = []
  const listOfValues: any[] = [] // List of values for index.md

  classificationIndexContent.push({ h1: classification.name })

  for (const classificationValue of classification.values) {
    listOfValues.push({ link: { title: classificationValue, source: `../${urlifyString(classification.name)}/${urlifyString(classificationValue)}.md` } })
  }

  classificationIndexContent.push({ ul: sortUnorderedListOfLinks(listOfValues) })

  return json2md(classificationIndexContent)
}

const createClassifications = async (collection:Collection, outputDirectoryPath:string) => {
  for (const classification of collection.classifications) {
    await makeDirectory(`${outputDirectoryPath}/${classification.name}`)

    // Create a file for each value
    for (const classificationValue of classification.values) {
      await writeFile(`${outputDirectoryPath}/${classification.name}/${classificationValue}.md`, await getClassificationValueFileContent(classificationValue, collection, classification))
    }

    await writeFile(`${outputDirectoryPath}/${classification.name}/index.md`, await getClassificationIndexFileContent(classification))
  }
}

export const saveCollection = async (collection:Collection, configuration:Configuration = defaultConfiguration) => {
  const { pathRootDirectory, outputDirectory, inputDirectory } = configuration
  const outputDirectoryPath = `${pathRootDirectory}${outputDirectory}`
  const inputDirectoryPath = `${pathRootDirectory}${inputDirectory}`

  // 1. Create the output directory. Default docs
  await createOutputDirectory(outputDirectoryPath)

  // 2. Create the Main index file
  await writeFile(`${outputDirectoryPath}/index.md`, await getMainIndexFileContent(collection))

  // 3. Create the items and then copy the assets from the original one
  await createItemsInOutputDirectory(collection, inputDirectoryPath, outputDirectoryPath)

  // 4. Generate the classifications
  await createClassifications(collection, outputDirectoryPath)
}
