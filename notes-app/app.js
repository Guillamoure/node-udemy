const chalk = require('chalk')
const getNotes = require('./notes')

let msg = getNotes()

console.log(msg)

console.log(chalk.blue.bold.inverse('Success'))
