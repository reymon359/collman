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
