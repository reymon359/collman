import * as fs from 'fs'
const fse = require('fs-extra')

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

const copy = async (from:string, to:string) => {
  try {
    await fse.copy(from, to)
    console.log(`Success copying from: ${from} to: ${to}!`)
  } catch (err) {
    console.error(`Error copying from: ${from} to: ${to}. Error: ${err}`)
  }
}

export const fileSystem: any = {
  makeDirectory,
  writeFile,
  copy
}
