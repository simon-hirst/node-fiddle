const getNotes = require('./notes')
const chalk = require('chalk')

console.log(getNotes())

const log = console.log;
log(chalk.red.bold.inverse("Error!"))