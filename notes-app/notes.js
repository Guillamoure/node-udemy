const fs = require('fs')
const chalk = require('chalk')

function getNotes(){
  return 'Your notes...'
}

const addNote = function(title, body){
  const notes = loadNotes()
  const duplicateNotes = notes.filter((note) => note.title === title)

  if (duplicateNotes.length === 0){
    notes.push({
      title: title,
      body: body
    })

    saveNotes(notes)
    console.log(chalk.green.inverse('New Note Added'))
  } else {
    console.log(chalk.red.inverse('Note Title Taken'))
  }

}

const saveNotes = function(notes){
  const dataJSON = JSON.stringify(notes)
  fs.writeFileSync('notes.json', dataJSON)
}

const removeNote = function(title){
  const notes = loadNotes()
  const newNotes = notes.filter(note => note.title !== title)
  if (newNotes.length < notes.length){
    saveNotes(newNotes)
    console.log(chalk.green.inverse("Note removed"))
  } else {
    console.log(chalk.red.inverse("There is no note by that Title!"))
  }
}

const loadNotes = function(){
  try {
    const dataBuffer = fs.readFileSync('notes.json')
    const dataJSON = dataBuffer.toString()
    return JSON.parse(dataJSON)
  } catch (e){
    return []
  }
}

module.exports = {
  getNotes: getNotes,
  addNote: addNote,
  removeNote: removeNote
}
