import * as fs from 'fs'

const makeDirectory = async (directoryPath:string) => {
  await fs.mkdir(directoryPath, { recursive: true }, (err:any) => {
    if (err) return console.error(`Error creating directory at path: ${directoryPath}`)
    console.log(`Directory created at path ${directoryPath} successfully!`)
  })
}

const writeFile = async (filePath:string, fileContent:string) => {
  await fs.writeFile(filePath, fileContent, (err:any) => {
    if (err) return console.error(`Error creating file at path: ${filePath}`)
    console.log(`File created at path ${filePath} successfully!`)
  })
}

export const fileSystem: any = {
  makeDirectory,
  writeFile
}
