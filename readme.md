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

node app.js <command> [options]


## Commands
node app.js add --title="Todo" --body="Complete Node.js project"
node app.js add --title="Books" --body="Read Clean Code"
node app.js list
node app.js read --title="Books"
node app.js remove --title="Todo"

