# Notes CLI App

A simple command-line notes application built with **Node.js**, **Yargs**, and **Chalk**.  
You can add, remove, list, and read notes directly from the terminal. Notes are stored in a local JSON file (`notes.json`).

---

## 📦 Installation

1. Clone this repository or copy the files into a project folder:
   ```bash
   git clone <repo-url>
   cd node-projects

2.Install dependencies:

npm install yargs chalk
Run the app with Node:

node app.js command [options]


## Commands
### Add a note
node app.js add --title="Todo" --body="Complete Node.js project" 
node app.js add --title="Books" --body="Read Clean Code" 

✅ Creates a new note with the given title and body.
If the title already exists, it will show an error.

### List all notes

node app.js list 

✅ Displays all saved notes (titles only).

### Read a note

node app.js read --title="Books" 

✅ Displays the title and body of the specified note.

### Remove a note

node app.js remove --title="Todo" 
✅ Removes the note with the specified title.

