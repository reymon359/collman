import { Configuration, defaultConfiguration } from '../../../configuration'
import { Collection } from '../../../domain/models'
import { repositories } from '../index'
import { urlifyString } from './helpers/urlifyString'
const json2md = require('json2md')

export const createOutputDirectory = async (outputDirectoryPath:string) => {
  await repositories.fileSystem.makeDirectory(outputDirectoryPath)
}

const createIndexFile = async (collection:Collection, outputDirectoryPath:string) => {
  const contentArray = []
  contentArray.push({ h1: collection.name })
  contentArray.push({ p: collection.description })

  // Content
  contentArray.push({ h2: `Content: ${collection.content.name}` })
  const unorderedListOfContent: any[] = []
  collection.content.items.forEach(item => {
    unorderedListOfContent.push({ link: { title: item.name, source: `${urlifyString(item.name)}/index.md` } })
  })
  contentArray.push({ ul: unorderedListOfContent.sort((a, b) => (a.link.title > b.link.title) ? 1 : ((b.link.title > a.link.title) ? 0 : -1)) })

  // Classifications
  if (collection.classifications.length > 0) {
    contentArray.push({ h2: 'Classifications' })
    const unorderedListOfClassifications: any[] = []
    collection.classifications.forEach(classification => {
      unorderedListOfClassifications.push({ link: { title: classification.name, source: `${urlifyString(classification.name)}/index.md` } })
    })
    contentArray.push({ ul: unorderedListOfClassifications.sort((a, b) => (a.link.title > b.link.title) ? 1 : ((b.link.title > a.link.title) ? 0 : -1)) })
  }

  const indexContent = json2md(contentArray)

  await repositories.fileSystem.writeFile(`${outputDirectoryPath}/index.md`, indexContent)
}

const addItemsInOutputDirectory = async (collection:Collection, inputDirectoryPath:string, outputDirectoryPath:string) => {
  for (const item of collection.content.items) {
    const itemClassifications: any[] = []

    if (item.classifications.length > 0) {
      item.classifications.forEach((classification, i) => {
        itemClassifications[i] = `[${classification.name}:](${urlifyString(classification.name)}/index.md)`

        classification.values.forEach((value, i) => {
          itemClassifications[i] += `[${value}](../${urlifyString(classification.name)}/${urlifyString(value)}.md)`
        // if something add comma
        })
      })
    }

    const classificationsContent = itemClassifications.join('<br>')
    console.log(classificationsContent)
    await repositories.fileSystem.writeFile(`${outputDirectoryPath}/${item.name}/index.md`, item.content+classificationsContent)
    await repositories.fileSystem.copy(`${inputDirectoryPath}/${item.containerName}/assets`, `${outputDirectoryPath}/${item.name}/assets`)
  }
}

export const createClassifications = async (collection:Collection, outputDirectoryPath:string) => {
  for (const classification of collection.classifications) {
    await repositories.fileSystem.makeDirectory(`${outputDirectoryPath}/${classification.name}`)

    // Begin creating the classification index file
    const classificationIndexContent: any[] = []
    const listOfValues: any[] = [] // List of values for index.md
    classificationIndexContent.push({ h1: classification.name })

    // Create a file for each value
    for (const classificationValue of classification.values.sort()) {
      listOfValues.push({ link: { title: classificationValue, source: `../${urlifyString(classification.name)}/${urlifyString(classificationValue)}.md` } })

      const valueContentArray = []
      const listOfItemWithValue: any[] = []
      valueContentArray.push({ h1: classificationValue })
      // Go through the items and its classifications.
      // TODO: Maybe the sort is not necessary
      collection.content.items.sort((a, b) => (a.name > b.name) ? 1 : ((b.name > a.name) ? 0 : -1)).forEach(item => {
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
      if (listOfItemWithValue.length > 0) valueContentArray.push({ ul: listOfItemWithValue })
      await repositories.fileSystem.writeFile(`${outputDirectoryPath}/${classification.name}/${classificationValue}.md`, json2md(valueContentArray))
    }

    // Finish creating the index file
    classificationIndexContent.push({ ul: listOfValues })
    await repositories.fileSystem.writeFile(`${outputDirectoryPath}/${classification.name}/index.md`, json2md(classificationIndexContent))
  }
}

export const saveCollection = async (collection:Collection, configuration:Configuration = defaultConfiguration) => {
  const { pathRootDirectory, outputDirectory, inputDirectory } = configuration
  const outputDirectoryPath = `${pathRootDirectory}${outputDirectory}`
  // 0. TODO: Sort collection Classification and items
  collection.content.items.sort((a, b) => (a.name > b.name) ? 1 : ((b.name > a.name) ? 0 : -1))
  collection.classifications.sort((a, b) => (a.name > b.name) ? 1 : ((b.name > a.name) ? 0 : -1))

  // 1. Create the output directory. Default docs
  await createOutputDirectory(outputDirectoryPath)

  // 2. Create the index file
  await createIndexFile(collection, outputDirectoryPath)

  // 3. copy and paste the items in the folder removing the frontmatter. Or create the items with just the content and then copy the assets from the previous one
  const inputDirectoryPath = `${pathRootDirectory}${inputDirectory}`
  await addItemsInOutputDirectory(collection, inputDirectoryPath, outputDirectoryPath)

  // 4. Generate the classifcications
  await createClassifications(collection, outputDirectoryPath)
}
