// WIP
// export interface Classification {
//   agnosticClassificator: string
// }

export interface Configuration{
  collectionRootDirectory: string // The root directory that holds the full project
  collectionInputDirectory: string // The directory with the original collection
  collectionOutputDirectory: string // The output directory with the collection managed
  // classifications: [Classification] // WIP
}

export const defaultConfirguration: Configuration = {
  collectionRootDirectory: './',
  collectionInputDirectory: './content/',
  collectionOutputDirectory: './docs/'
}