export interface Classification {
  name: string // Example: Lets classify in Categories
  values: [string] // Example: Array of the different Categories
}

export interface Item {
  name: string // Name of the item
  description: string // Description of the item
  classifications: [Classification] // Array of different classifications
  content: string // Main content of the item
  dateCreated?: string
  dateUpdated?: string
}

export interface Content {
  name: string // Name of the collection content. Example: Posts or Animals
  items: [Item] // Array of the Content items
}

export interface Collection {
  name: string
  description: string
  content: Content
}
