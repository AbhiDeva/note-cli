

const log = console.log;
const addNote = (title, body) =>{
  const notes = loadNotes();
  const duplicateNote = notes.find((note) => note.title === title);

  if (!duplicateNote) {
    notes.push({
      title: title,
      body: body,
    });
    saveNotes(notes);
   log(chalk.green.inverse("New note added!"));
  } else {
    log(chalk.red.inverse("Note title taken!"));
  }
}

const loadNotes = () => {
    try{
        const dataBuffer = fs.readFileSync("notes.json");
       const dataJSON = dataBuffer.toString();
        return JSON.parse(dataJSON);
    } catch(e){
        return [];
    }
}

const saveNotes = (notes) => {
    const dataJSON = JSON.stringify(notes);
    fs.writeFileSync("notes.json", dataJSON);
}

const removeNote = (title) =>{
  const notes = loadNotes();
  const notesToKeep = notes.filter((note) => note.title !== title);

  if (notes.length > notesToKeep.length) {
    log(chalk.green.inverse("Note removed!"));
    saveNotes(notesToKeep);
  } else {
    log(chalk.red.inverse("No note found!"));
  }
}

const listNotes = () =>{
  const notes = loadNotes();
  notes.forEach((note) => {
    log(chalk.inverse(note.title));
  });
}

const readNote = (title) =>{
  const notes = loadNotes();
  const note = notes.find((note) => note.title === title);
  
  if (note) {
    log(chalk.inverse(note.title));
    log(chalk.green.inverse(note.body));
  } else {
    log(chalk.red.inverse("Note not found!"));
  }
}

module.exports = {
  addNote: addNote,
  removeNote: removeNote,
  listNotes: listNotes,
  readNote: readNote
};
const fs = require("fs");
const yargs = require("yargs");
const notes = require("./note.js");
const { default: chalk } = require("chalk");
