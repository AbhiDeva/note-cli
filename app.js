const yargs = require("yargs/yargs");
const { hideBin } = require("yargs/helpers");
const notes = require("./note.js");
const chalk = require("chalk");

// Customize yargs version
yargs(hideBin(process.argv)).version("1.1.0");

// Create add command
const command = process.argv[2];
console.log(process.argv);


yargs(hideBin(process.argv))
.command({
    command: "add",
    describe: "Add a new note",
    builder: {
        title: {
            describe: "Note title",
            demandOption: true,
            type: "string",
        },
        body: {
            describe: "Note body",
            demandOption: true,
            type: "string",
        },
    },
    handler(argv) {
        notes.addNote(argv.title, argv.body);
    }
}).help()
  .argv;

// Create remove command
yargs(hideBin(process.argv))
.command({
    command: "remove",
    describe: "Remove a note",
    builder: {
        title: {
            describe: "Note title",
            demandOption: true,
            type: "string",
        },
    },
    handler(argv) {
        console.log("Removing note!");
        notes.removeNote(argv.title);
    }
}).help()
  .argv;

// Create list command
yargs(hideBin(process.argv)).command({
    command: "list",
    describe: "List your notes",
    handler() {
        notes.listNotes();
    }
}).help()
  .argv;

// Create read command
yargs(hideBin(process.argv)).command({
    command: "read",
    describe: "Read a note",
    builder: {
        title: {
            describe: "Note title",
            demandOption: true,
            type: "string",
        },
    },
    handler(argv) {
        notes.readNote(argv.title);
    }
}).help()
  .argv;

//yargs.parse();
// console.log(yargs.argv);