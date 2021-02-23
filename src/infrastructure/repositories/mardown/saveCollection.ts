import { Configuration, defaultConfiguration } from '../../../configuration'
import { Collection } from '../../../domain/models'
const fs = require('fs')
const path = require('path')

export const createOutputDirectory = (pathRootDirectory:string, outputDirectory:string) => {
  // const outputDirectoryPath = `${pathRootDirectory}${outputDirectory}`

  // fs.mkdir(outputDirectoryPath).then((err:any, data:any) => {
  //   console.log(err,data)
  // })

  fs.mkdir(path.join(__dirname, outputDirectory),
    { recursive: true }, (err:any) => {
      if (err) {
        return console.error(err)
      }
      console.log('Directory created successfully!')
    })
}

export const saveCollection = async (collection:Collection, configuration:Configuration = defaultConfiguration) => {
  const { pathRootDirectory, outputDirectory } = configuration
  // 1. Create the output directory. Default docs
  await createOutputDirectory(pathRootDirectory, outputDirectory)

  // 2. Create the index file

  // 3. copy and paste the items in the folder removing the frontmatter. Or create the items with just the content and then copy the assets from the previous one

  // 4. Generate the categories

  return 'TODO'
}
