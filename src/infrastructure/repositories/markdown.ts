// https://github.com/scottstanfield/markdown-to-json
// https://github.com/IonicaBizau/json2md
// https://github.com/scottstanfield/markdown-to-json
const jdown = require('jdown')

export const transformMarkdownDirectoryToJson=async(path:string) => {
  const jsonCollection = await jdown(path, {parseMd:false})
  return jsonCollection
}

// Returns the json object
export const getCollectionJson = async (path:string) => {
  const jsonCollection = await transformMarkdownDirectoryToJson(path)
  return jsonCollection
}

// Creates a markdown directory from a json object
export const createMarkdownCollection = (json:object, outputPath?:string) => {

}
