import { Configuration, defaultConfiguration } from '../../../configuration'
import { Collection } from '../../../domain/models'
import { repositories } from '../index'
const json2md = require('json2md')

export const createOutputDirectory = async (outputDirectoryPath:string) => {
  await repositories.fileSystem.makeDirectory(outputDirectoryPath)
}

const createIndexFile = async (collection:Collection, outputDirectoryPath:string) => {
  const contentArray = []
  contentArray.push({ h1: collection.name })
  contentArray.push({ p: collection.description })

  // Classifications
  if (collection.classifications.length > 0) {
    contentArray.push({ h2: 'Classifications' })
    const unorderedListOfClassifications: any[] = []
    collection.classifications.sort((a, b) => (a.name > b.name) ? 1 : ((b.name > a.name) ? 0 : -1)).forEach(classification => {
      unorderedListOfClassifications.push({ link: { title: classification.name, source: `${classification.name}/index.md` } })
    })
    contentArray.push({ ul: unorderedListOfClassifications })
  }

  // Content
  contentArray.push({ h2: `Content: ${collection.content.name}` })
  const unorderedListOfContent: any[] = []
  collection.content.items.sort((a, b) => (a.name > b.name) ? 1 : ((b.name > a.name) ? 0 : -1)).forEach(item => {
    unorderedListOfContent.push({ link: { title: item.name, source: `${item.name}/index.md` } })
  })
  contentArray.push({ ul: unorderedListOfContent })

  const indexContent = json2md(contentArray)

  await repositories.fileSystem.writeFile(`${outputDirectoryPath}/index.md`, indexContent)
}

const addItemsInOutputDirectory = async (collection:Collection, inputDirectoryPath:string, outputDirectoryPath:string) => {
  for (const item of collection.content.items) {
    await repositories.fileSystem.writeFile(`${outputDirectoryPath}/${item.name}/index.md`, item.content)
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
      const valueUrl = classificationValue.trim().replace(/\s/g, '%20')
      listOfValues.push({ link: { title: classificationValue, source: `${classification.name}/${valueUrl}.md` } })

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
              listOfItemWithValue.push({ link: { title: item.name, source: `../${item.name}/index.md` } })
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
