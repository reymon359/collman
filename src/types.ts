// WIP
// export interface Classification {
//   name: string
//   agnosticClassificator: string
// }

export interface Configuration{
  inputType: string
  outputType: string
  pathRootDirectory: string // The root directory that holds the full project
  inputDirectory: string // The directory with the original collection
  outputDirectory: string // The output directory with the collection managed
  docsify: boolean
  // classifications: [Classification] // WIP
}

export const defaultConfiguration: Configuration = {
  inputType: 'markdown',
  outputType: 'markdown',
  pathRootDirectory: './',
  inputDirectory: 'items',
  outputDirectory: 'docs',
  docsify: true
}

/* #32 Feature Classifications Version 2

export interface ClassificationValue {
  name: string
  quantity: number
}

export interface ClassificationV2 {
  name: string // Example: Lets classify in Categories
  values: [ClassificationValue] // Example: Array of the different Categories
}
*/

export interface Classification {
  name: string // Example: Lets classify in Categories
  values: string[] // Example: Array of the different Categories
}

export interface Item {
  containerName: string // Name of the folder
  name: string // Name of the item
  description: string // Description of the item
  classifications: Classification[] // Array of different classifications
  content: string // Main content of the item
  dateCreated?: string
  dateUpdated?: string
}

export interface Content {
  name: string // Name of the collection content. Example: Posts or Animals
  items: Item[] // Array of the Content items
}

export interface Collection {
  name: string
  description: string
  classifications: Classification[] // with all the collection possible classifications
  content: Content
}

export interface JsonItem {
  containerName: string
  name: string
  description: string
  categories?: string[]
  contents?: string
}

export interface JsonCollection {
  items: JsonItem[]
}
