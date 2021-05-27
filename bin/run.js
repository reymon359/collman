#!/usr/bin/env node

const yargs = require('yargs')
const collman = require('../lib/index')

const options = yargs
  .option('prd', { alias: 'pathRootDirectory', describe: 'The path of the directory containing the items directory.  Default: ./', type: 'string' })
  .option('id', { alias: 'inputDirectory', describe: 'The directory name with the collection items. Default: items', type: 'string' })
  .option('od', { alias: 'outputDirectory', describe: 'The directory name for the output collection. Default: docs', type: 'string' })
  .option('ds', { alias: 'docsify', describe: 'Enable Docsify visualization with the collection. Default: true', type: 'boolean' })
  .argv

collman(options)
