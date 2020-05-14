const fs = require('fs')
const chalk = require('chalk')

const addNote = (title, body) => {
  const notes = loadNotes()
  const duplicateNote = notes.find(note => note.title === title)

  // console.log(duplicateNote)

  if (!duplicateNote){
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
  console.log(chalk.white.inverse('Your notes'))
  notes.forEach(n => console.log(chalk.bold(n.title)))
}

const readNote = (title)=> {
  const notes = loadNotes()
  const note = notes.find(n => n.title === title)
  if (note){
    console.log(chalk.green.inverse(note.title))
    console.log(chalk.yellow.inverse(note.body))
  } else {
    console.log(chalk.red.inverse('There is no note by this Title!'))
  }
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
  addNote: addNote,
  removeNote: removeNote,
  listNotes: listNotes,
  readNote: readNote
}
