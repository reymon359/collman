const jdown = require('jdown')

export interface JsonItem {
  name: string
  description: string
  categories?: [string]
  contents?: string
}

export interface JsonCollection {
  items: [JsonItem]
}


export const transformMarkdownDirectoryToJson = async (path:string,) => {
  const jsonCollection: JsonCollection = await jdown(path, { parseMd: false })
  return jsonCollection
}

export const getClassificationsFromItems = async (items:any) => {
  const classifications: [] = []
  return classifications
}


export const transformInputDirectoryJsonToCollection = async (inputDirectoryJson: {}, inputDirectory:string) => {
  // @ts-ignore
  const jsonCollection  = inputDirectoryJson[inputDirectory]
  const { index, ...jsonCollectionItems } = jsonCollection
  console.log(jsonCollection, index, jsonCollectionItems)

  const items = Object.keys(jsonCollectionItems).map(key =>  jsonCollectionItems[key]).map(({ contents: content, ...rest }) => ({ content, ...rest }));
  console.log(items)

//
//   console.log(index, jsonItems)
//   const items = jsonItems.map(({ contents: content, ...rest }) => ({ content, ...rest }));
//   console.log(items)
  const collectionClassifications = getClassificationsFromItems(items)
// console.log('wtf')
  // const collectionItems = processJsonItems


  return {
    name: index.name,
    description: index.contents,
    classifications: collectionClassifications,
    content: {
      name: inputDirectory,
      items: [{
        name: "item1",
        description: "description1",
        classifications: [{
          name: "categories",
          values: ["Category1", "Category2"]
        }],
        content: "# Title 1\n\n![Image 1](./assets/image-1.jpg)\n\nItem 1 introduction\n\n\n"
      },{
        name: "ITEM2",
        description: "DESCRIPTION2",
        classifications: [{
          name: "categories",
          values: ["Category1", "Category3"]
        }],
        content: "# Title 2\n\n![Image 2](./assets/image-2.png)\n\nItem 2 introduction\n\n\n"
      },{
        name: "Item3",
        description: "Description3",
        classifications: [{
          name: "categories",
          values: ["Category2", "Category3"]
        }],
        content: "# Title 3\n\n![Image 3](./assets/image-3.svg)\n\nItem 3 introduction\n\n\n"
      }]
    }


  }
}

// Returns the json object
export const getCollection = async (path:string,  inputDirectory:string) => {
  const inputDirectoryJson = await transformMarkdownDirectoryToJson(path)
  const collection = await transformInputDirectoryJsonToCollection(inputDirectoryJson, inputDirectory)

  return collection
}

// Creates a markdown directory from a json object
export const createMarkdownCollection = (json:object, outputPath?:string) => {

}
