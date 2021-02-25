import { Configuration, defaultConfiguration } from '../../../configuration'
import { Collection } from '../../../domain/models'
import { repositories } from '../index'
const json2md = require("json2md")

export const createOutputDirectory = async (outputDirectoryPath:string) => {
  await repositories.fileSystem.makeDirectory(outputDirectoryPath)
}

const createIndexFile = async (collection:Collection, outputDirectoryPath:string) => {
 const contentArray = []
  contentArray.push({ h1: collection.name })
  contentArray.push({ p: collection.description })
  if (collection.classifications.length > 0){
    contentArray.push({ h2: 'Classifications' })
    collection.classifications.forEach(classification => {
      contentArray.push({link: { title: classification.name, source: `${classification.name}/index.md` }})
    })
  }
  const indexContent = json2md(contentArray)

  // # Default Collection
  //
  // Default Collection description
  //
  // ## Classifications
  //
  // ![Categories](Categories/index.md)
  //
  // ## Content
  //
  // - [item1](item1/index.md)
  // - [ITEM2](item2/index.md)
  // - [Item3](item3/index.md)



  // const indexContent = json2md([
  //   { h1: collection.name },
  //   { p: collection.description },
  //   { h2: collection.name },
  //   { img: [
  //       { title: "Some image", source: "https://example.com/some-image.png" }
  //       , { title: "Another image", source: "https://example.com/some-image1.png" }
  //       , { title: "Yet another image", source: "https://example.com/some-image2.png" }
  //     ]
  //   }
  //   , { h2: "Features" }
  //   , { ul: [
  //       "Easy to use"
  //       , "You can programmatically generate Markdown content"
  //       , "..."
  //     ]
  //   }
  //   , { h2: "How to contribute" }
  //   , { ol: [
  //       "Fork the project"
  //       , "Create your branch"
  //       , "Raise a pull request"
  //     ]
  //   }
  //   , { h2: "Code blocks" }
  //   , { p: "Below you can see a code block example." }
  //   , { "code": {
  //       language: "js"
  //       , content: [
  //         "function sum (a, b) {"
  //         , "   return a + b"
  //         , "}"
  //         , "sum(1, 2)"
  //       ]
  //     }
  //   }
  // ])
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
