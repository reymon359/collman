import * as fs from 'fs'

const makeDirectory = async (directoryPath:string) => {
  await fs.mkdir(directoryPath, { recursive: true }, (err:any) => {
    if (err) return console.error(`Error creating directory at path: ${directoryPath}`)
    console.log(`Directory created at path ${directoryPath} successfully!`)
  })
}



export const fileSystem: any = {
  makeDirectory,
  // makeFile
}
