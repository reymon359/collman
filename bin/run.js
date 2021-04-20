#!/usr/bin/env node

const yargs = require('yargs')
const collman = require('../lib/index')

const options = yargs
  .option('id', { alias: 'inputDirectory', describe: 'The directory with your collection items. Default: items', type: 'string' })
  .option('prd', { alias: 'pathRootDirectory', describe: 'The path to the root directory were the collection directory is.  Default: ./', type: 'string' })
  .option('od', { alias: 'outputDirectory', describe: 'The name of the output directory with the collection ready. Default: docs', type: 'string' })
  .option('ds', { alias: 'docsify', describe: 'Param if you want or not to add Docsify to your collection. Default: true', type: 'boolean' })
  .argv

collman(options)
