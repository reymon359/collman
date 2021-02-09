// WIP
// export interface Classification {
//   name: string
//   agnosticClassificator: string
// }

export interface Configuration{
  collectionInputType: string
  collectionOutputType: string
  collectionPathRootDirectory: string // The root directory that holds the full project
  collectionInputDirectory: string // The directory with the original collection
  collectionOutputDirectory: string // The output directory with the collection managed
  // classifications: [Classification] // WIP
}

export const defaultConfiguration: Configuration = {
  collectionInputType: 'markdown',
  collectionOutputType: 'markdown',
  collectionPathRootDirectory: './',
  collectionInputDirectory: './content/',
  collectionOutputDirectory: './docs/'
}
