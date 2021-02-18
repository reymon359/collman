const jdown = require('jdown')

export interface JsonItem {
  name: string
  description: string
  categories?: [string]
  contents?: string
}

export interface JsonCollection {
  jsonItems: [JsonItem]
}


export const transformMarkdownDirectoryToJson = async (path:string,) => {
  const jsonCollection: JsonCollection = await jdown(path, { parseMd: false })
  return jsonCollection
}

export const transformJsonCollectionToCollection = async (jsonCollection:{}) => {
  const collection = jsonCollection

  return collection
}

// Returns the json object
export const getCollection = async (path:string) => {
  const jsonCollection = await transformMarkdownDirectoryToJson(path)
  const collection = await transformJsonCollectionToCollection(jsonCollection)

  return collection
}

// Creates a markdown directory from a json object
export const createMarkdownCollection = (json:object, outputPath?:string) => {

}
