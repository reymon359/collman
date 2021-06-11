export interface Configuration{
  pathRootDirectory: string
  inputDirectory: string
  outputDirectory: string
  docsify: boolean
}

export const defaultConfiguration: Configuration = {
  pathRootDirectory: './',
  inputDirectory: 'items',
  outputDirectory: 'docs',
  docsify: true
}

export interface Classification {
  name: string // Example: Lets classify in Categories (Categories would be the name)
  values: string[] // Example: Array of the different Categories
}

export interface Item {
  containerName: string // Name of the folder
  name: string // Name of the item
  classifications: Classification[] // Array of different classifications
  content: string // Main content of the item
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

export interface JsonItemIndex {
  name: string
  categories?: string[]
  contents?: string
}

export interface JsonItem {
  containerName: string
  index: JsonItemIndex
}

export interface JsonCollection {
  items: JsonItem[]
}

export interface DocsifyConfiguration {
  main: object
  scriptsAndLinks: string[]
}