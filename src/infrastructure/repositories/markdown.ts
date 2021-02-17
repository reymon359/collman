const jdown = require('jdown')

export const transformMarkdownDirectoryToJson = async (path:string) => {
  const jsonCollection = await jdown(path, { parseMd: false })
  return jsonCollection
}

export const transformJsonCollectionToCollection = async (jsonCollection)=>{

}

// Returns the json object
export const getCollection = async (path:string) => {
  const jsonCollection = await transformMarkdownDirectoryToJson(path)
  const collection = await transformJsonCollectionToCollection(jsonCollection)

  return jsonCollection
}

// Creates a markdown directory from a json object
export const createMarkdownCollection = (json:object, outputPath?:string) => {

}
