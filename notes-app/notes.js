const fs = require('fs')
const chalk = require('chalk')


const getNotes = () => {
  return 'Your notes...'
}

const addNote = (title, body) => {
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

const saveNotes = notes => {
  const dataJSON = JSON.stringify(notes)
  fs.writeFileSync('notes.json', dataJSON)
}

const removeNote = title => {
  const notes = loadNotes()
  const newNotes = notes.filter(note => note.title !== title)
  if (newNotes.length < notes.length){
    saveNotes(newNotes)
    console.log(chalk.green.inverse("Note removed"))
  } else {
    console.log(chalk.red.inverse("There is no note by that Title!"))
  }
}

const listNotes = () => {
  const notes = loadNotes()
  console.log(chalk.blue.inverse('Your notes'))
  notes.forEach(n => console.log(chalk.bold(n.title)))
}

const readNote = (title)=> {
  const notes = loadNotes()
  const note = notes.find(n => n.title === title)
  console.log(chalk.yellow.inverse(note.body))
}

const loadNotes = () => {
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
  removeNote: removeNote,
  listNotes: listNotes,
  readNote: readNote
}
