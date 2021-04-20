#!/usr/bin/env node

const yargs = require('yargs')
const collman = require('../lib/index')

// inputType: string
// outputType: string
// pathRootDirectory: string // The root directory that holds the full project
// inputDirectory: string // The directory with the original collection
// outputDirectory: string // The output directory with the collection managed
// docsify: boolean
const options = yargs
  .usage('Usage: -id <inputDirectory>')
  .option('id', { alias: 'inputDirectory', describe: 'The directory with your collection', type: 'string', demandOption: true })
  .argv

collman({ inputDirectory: options.inputDirectory })
