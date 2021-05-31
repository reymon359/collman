import * as fs from 'fs'
const fse = require('fs-extra')

export const emptyDirectory = async (directoryPath:string) => {
  try {
    await fse.emptyDir(directoryPath)
  } catch (err) {
    console.error(`Error emptying the directory at path: ${directoryPath}`)
    throw err
  }
}

export const makeDirectory = async (directoryPath:string) => {
  await fs.mkdir(directoryPath, { recursive: true }, (err:any) => {
    if (err) {
      console.error(`Error creating directory at path: ${directoryPath}`)
      throw err
    }
  })
}

export const writeFile = async (filePath:string, fileContent:string) => {
  try {
    await fse.outputFile(filePath, fileContent)
  } catch (err) {
    console.error(`Error creating file at path: ${filePath}. Error: ${err.message}`)
    throw err
  }
}

export const copy = async (from:string, to:string) => {
  try {
    await fse.copy(from, to)
  } catch (err) {
    console.error(`Error copying from: ${from} to: ${to}. Error: ${err}`)
    throw err
  }
}

export const pathExists = async (path:string) => {
  try {
    const exists = await fse.pathExists(path)
    return exists
  } catch (err) {
    console.error(`Error checking if path: ${path} exists`)
    throw err
  }
}
