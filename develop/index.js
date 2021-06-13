// TODO: Include packages needed for this application
let inquirer = require('inquirer');
let fs = require('fs');

// TODO: Create an array of questions for user input
const questions = [];

inquirer
    .prompt([
        {
            type: "input",
            message: "What is the title of your project?",
            name: "title"
        },
        {
            type: "input",
            message: "Enter a description for your project:",
            name: "description"
        },
        {
            type: "input",
            message: "Enter installation insructions as a comma separated list:",
            name: "install"
        },
        {
            type: "input",
            message: "Enter usage information for your project:",
            name: "usage"
        },
        {
            type: "input",
            message: "Enter contribution guidelines for your project:",
            name: "contribution"
        },
        {
            type: "input",
            message: "Enter test information for your project:",
            name: "testing"
        },
        {
            type: "input",
            message: "Enter your GitHub Username:",
            name: "github"
        },
        {
            type: "input",
            message: "Enter your email address:",
            name: "email"
        },
       
    ])
    .then((res) => {
        console.log("Creating README file...");
        createREADMEFile(res);
        
    })
    .catch((err) => {
        console.log(err);
    })
    

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
