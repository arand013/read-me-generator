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
        GenerateReadMe(res);

    })
    .catch((err) => {
        console.log(err);
    })

// TODO: Create a function to write README file   
function GenerateReadMe(input) {
    let Title;
    let Description;
    const descriptionHead = "## Description";
    let tableOfContents;
    const tocHead = "## Table of Contents";
    let installArr;
    const installHead = "## Installation";
    let Usage;
    const usageHead = "## Usage";
    let Contribution;
    const contributionHead = "## Contribution";
    let Test;
    const testingHead = "## Tests";
    let License = input.license;
    const licenseHead = "## License";
    let Questions;
    const questionsHead = "## Questions";
    let fullReadME = [];

    // Adds Title
    if (input.title == '') {
        Title = '# TITLE';
    } else {
        Title = `# ${input.title}`;
    }
    fullReadME.push(Title);


    //Adds in license badge here!!
    let badge = `![](https://img.shields.io/badge/license-${License.replace(/ /g, "%20")}-blue?style=flat-square)`;
    fullReadME.push(badge);


    // Adds description
    if (input.description == '') {
        Description = `${descriptionHead}\n Enter project description here.`;
    } else {
        Description = `${descriptionHead}\n${input.description}`;
    }
    fullReadME.push(Description);


    //Adds Table of Contents
    tableOfContents = `${tocHead}\n* [Installation](#installation)\n* [Usage](#usage)\n* [Contribution](#contribution)\n* [Tests](#tests)\n* [License](#license)\n* [Questions](#questions)\n`;
    fullReadME.push(tableOfContents);


    // TODO: Create a function to initialize app
    fullReadME.push(`${installHead}`);

    installArr = input.install.split(',').map(item => {
        return `${item.trim()}`;
    });

    for (var i = 0; i < installArr.length; i++) {
        fullReadME.push(`${i + 1}. ${installArr[i]}`);
    }


    //Adds Usage
    if (input.usage == '') {
        Usage = `\n${usageHead}\n Enter project usage here.`;
    } else {
        Usage = `\n${usageHead}\n${input.usage}`;
    }
    fullReadME.push(Usage);


    //Adds Contributing
    if (input.contribution == '') {
        Contribution = `\n${contributionHead}\n Enter project contriburtion information here.`;
    } else {
        Contribution = `\n${contributionHead}\n${input.contribution}`;
    }
    fullReadME.push(Contribution);


    //Adds Tests
    if (input.testing == '') {
        Test = `\n${testingHead}\n Enter project testing information here.`;
    } else {
        Test = `\n${testingHead}\n${input.testing}`;
    }
    fullReadME.push(Test);


    //License info
    License = `\n${licenseHead}\nThis project is covered under the ${input.license}.`;
    fullReadME.push(License);


    //Questions section with github link
    Questions = `\n${questionsHead}\nFor questions about this project, please see my GitHub at [${input.github}](https://github.com/${input.github}), or reach out by email at ${input.email}.`;
    fullReadME.push(Questions);


    // Function call to initialize app
    const README = fullReadME.join('\n');


    // TODO: Create a function to generate markdown for README
    fs.writeFile("./Example-ReadME-here.md", README, (err) => {
        if (err) {
            throw err;
        } else {
            console.log("README file successfully generated!");``
        }
    });
};

