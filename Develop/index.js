const fs = require('fs');
const inquirer = require('inquirer');
const util = require('util');
const generateMarkdown = require('./utils/generateMarkdown.js');



const writeFileAsync = util.promisify(fs.writeFile);


// array of questions for user
const questions = [
    {
        type: "input",
        message: "What is the title of your README?",
        name: "title"
    },
    {
        type: "input",
        message: "Enter Description Contents",
        name: "description"
    },
    {
        type: "editor",
        message: "Enter installation notes.",
        name: "installation"
    },
    {
        type: "editor",
        message: "What are the steps for usage?",
        name: "usage"
    },
    {
        type: "input",
        message: "Any contributers you'd like to credit?",
        name: "credit"
    },
    {
        type: "list",
        message: "Select a License.",
        name: "license",
        choices: [
            "Apache 2.0",
            "MIT",
            "ISC",
            "Unlicense"
        ]
    },
    {
        type: "input",
        message: "What is your GitHub Username?",
        name: "github"
    },
    {
        type: "input",
        message: "What is your email address?",
        name: "email"
    },
    {
        type: 'input',
        message: 'What are some tests for your application?',
        name: "test"
    }
];


// function to initialize program
function init() {
    inquirer
    .prompt(questions)
    .then((response) => {
        // writeToFile('answers.json', response)
        const markDown = generateMarkdown(response);
        return writeFileAsync('./readme_generations/generatedREADME.md', markDown);
    })
    .catch(err => {
        if (err){
            console.log(err);
            return err;
        }
    })
}

// function call to initialize program

init();