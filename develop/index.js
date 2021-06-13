// TODO: Include packages needed for this application
let inquirer = require('inquirer');
let fs = require('fs');

// TODO: Create an array of questions for user input
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
        {
            type: "list",
            message: "Which license does this project fall under?",
            name: "license",
            choices: [
                "MIT License",
                "Code Project Open License (CPOL)",
                "Common Development and Distribution License (CDDL)",
                "Microsoft Public License (Ms-PL)",
                "Mozilla Public License 1.1 (MPL 1.1)",
                "Common Public License Version 1.0 (CPL)",
                "Eclipse Public License 1.0",
                "Apache License, Version 2.0"
            ]
        }
    ])
    .then((res) => {
        console.log("Creating README file...");
        createREADMEFile(res);

    })
    .catch((err) => {
        console.log(err);
    })

// TODO: Create a function to write README file   
function createREADMEFile(input) {
    let readmeTitle;
    let readmeDescription;
    const descriptionHead = "## Description";
    let tableOfContents;
    const tocHead = "## Table of Contents";
    let installArr;
    const installHead = "## Installation";
    let readmeUsage;
    const usageHead = "## Usage";
    let readmeContribution;
    const contributionHead = "## Contribution";
    let readmeTest;
    const testingHead = "## Tests";
    let readmeLicence = input.license;
    const licenseHead = "## License";
    let readmeQuestions;
    const questionsHead = "## Questions";
    let completeREADME = [];

    // Adds Title
    if (input.title == '') {
        readmeTitle = '# TITLE';
    } else {
        readmeTitle = `# ${input.title}`;
    }
    completeREADME.push(readmeTitle);


    //Adds in license badge here!!
    let badge = `![](https://img.shields.io/badge/license-${readmeLicence.replace(/ /g, "%20")}-blue?style=flat-square)`;
    completeREADME.push(badge);


    // Adds description
    if (input.description == '') {
        readmeDescription = `${descriptionHead}\n Enter project description here.`;
    } else {
        readmeDescription = `${descriptionHead}\n${input.description}`;
    }
    completeREADME.push(readmeDescription);


    //Adds Table of Contents
    tableOfContents = `${tocHead}\n* [Installation](#installation)\n* [Usage](#usage)\n* [Contribution](#contribution)\n* [Tests](#tests)\n* [License](#license)\n* [Questions](#questions)\n`;
    completeREADME.push(tableOfContents);


    // TODO: Create a function to initialize app
    completeREADME.push(`${installHead}`);

    installArr = input.install.split(',').map(item => {
        return `${item.trim()}`;
    });

    for (var i = 0; i < installArr.length; i++) {
        completeREADME.push(`${i + 1}. ${installArr[i]}`);
    }


    //Adds Usage
    if (input.usage == '') {
        readmeUsage = `\n${usageHead}\n Enter project usage here.`;
    } else {
        readmeUsage = `\n${usageHead}\n${input.usage}`;
    }
    completeREADME.push(readmeUsage);


    //Adds Contributing
    if (input.contribution == '') {
        readmeContribution = `\n${contributionHead}\n Enter project contriburtion information here.`;
    } else {
        readmeContribution = `\n${contributionHead}\n${input.contribution}`;
    }
    completeREADME.push(readmeContribution);


    //Adds Tests
    if (input.testing == '') {
        readmeTest = `\n${testingHead}\n Enter project testing information here.`;
    } else {
        readmeTest = `\n${testingHead}\n${input.testing}`;
    }
    completeREADME.push(readmeTest);


    //License info
    readmeLicence = `\n${licenseHead}\nThis project is covered under the ${input.license}.`;
    completeREADME.push(readmeLicence);


    //Questions section with github link
    readmeQuestions = `\n${questionsHead}\nFor questions about this project, please see my GitHub at [${input.github}](https://github.com/${input.github}), or reach out by email at ${input.email}.`;
    completeREADME.push(readmeQuestions);


    // Function call to initialize app
    const README = completeREADME.join('\n');


    // TODO: Create a function to generate markdown for README
    fs.writeFile("./Example-ReadME-here.md", README, (err) => {
        if (err) {
            throw err;
        } else {
            console.log("README file successfully created!");
        }
    });
};

