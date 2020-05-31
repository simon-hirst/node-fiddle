const fs = require('fs');
const chalk = require('chalk');

const saveNotes = (notes) => {
  const dataJSON = JSON.stringify(notes);
  fs.writeFileSync('notes.json', dataJSON);
};

const loadNotes = () => {
  try {
    const dataBuffer = fs.readFileSync('notes.json');
    const dataJSON = dataBuffer.toString();
    return JSON.parse(dataJSON);
  } catch (e) {
    return [];
  }
};

const addNote = (title, body) => {
  const notes = loadNotes();
  const duplicateNote = notes.find((note) => note.title === title);

  if (!duplicateNote) {
    notes.push({
      title,
      body,
    });

    saveNotes(notes);
    console.log('new note added');
  } else {
    console.log('note title taken already');
  }
};

const removeNote = (title) => {
  const notes = loadNotes();
  const newNotes = notes.filter((note) => note.title !== title);

  if (notes.length === newNotes.length) {
    console.log(chalk.bgRed('no note found'));
  } else {
    console.log(chalk.bgGreenBright(`removed note ${title}`));
  }

  saveNotes(newNotes);
};

const listNotes = () => {
  const notes = loadNotes();
  console.log(chalk.bgBlue('Your notes:'));
  notes.forEach((note) => console.log(note.title));
};

const readNote = (title) => {
  const notes = loadNotes();
  const noteToRead = notes.find((note) => note.title === title);
  if (noteToRead) {
    console.log(chalk.bold(noteToRead.title));
    console.log(noteToRead.body);
  } else {
    console.log(chalk.red('Note not found'));
  }
};

module.exports = {
  addNote,
  removeNote,
  listNotes,
  readNote,
};
