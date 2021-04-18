import * as fs from 'fs'
const fse = require('fs-extra')

const emptyDirectory = async (directoryPath:string) => {
  try {
    await fse.emptyDir(directoryPath)
  } catch (err) {
    console.error(`Error emptying the directory at path: ${directoryPath}`)
    throw err
  }
}

const makeDirectory = async (directoryPath:string) => {
  await fs.mkdir(directoryPath, { recursive: true }, (err:any) => {
    if (err) {
      console.error(`Error creating directory at path: ${directoryPath}`)
      throw err
    }
    // console.log(`Directory created at path ${directoryPath} successfully!`)
  })
}

const writeFile = async (filePath:string, fileContent:string) => {
  try {
    await fse.outputFile(filePath, fileContent)
  } catch (err) {
    console.error(`Error creating file at path: ${filePath}. Error: ${err.message}`)
    throw err
  }

  // await fs.writeFile(filePath, fileContent, (err:any) => {
  //   if (err) return console.error(`Error creating file at path: ${filePath}. Error: ${err.message}`)
  //   // console.log(`File created at path ${filePath} successfully!`)
  // })
}

const copy = async (from:string, to:string) => {
  try {
    await fse.copy(from, to)
    // console.log(`Success copying from: ${from} to: ${to}!`)
  } catch (err) {
    console.error(`Error copying from: ${from} to: ${to}. Error: ${err}`)
    throw err
  }
}

const pathExists = async (path:string) => {
  const exists = await fse.pathExists(path)
  return exists
}

export const fileSystem: any = {
  emptyDirectory,
  makeDirectory,
  writeFile,
  copy,
  pathExists
}
