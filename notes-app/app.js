const chalk = require('chalk')
const yargs = require('yargs')
const getNotes = require('./notes')

yargs.version('1.1.0')

// Create add command
yargs.command({
  command: 'add',
  describe: 'Add a new note',
  handler: function(){
    console.log('adding a new note')
  }
})

// Create remove command
yargs.command({
  command: 'remove',
  describe: 'Remove a note',
  handler: function(){
    console.log('removing a note')
  }
})

// Create read command
yargs.command({
  command: 'read',
  describe: 'Reading a note',
  handler: function(){
    console.log('reading a note')
  }
})

// Create list command
yargs.command({
  command: 'list',
  describe: 'List all notes',
  handler: function(){
    console.log('Listing all notes')
  }
})

// add, remove, read, list

console.log(yargs.argv)
