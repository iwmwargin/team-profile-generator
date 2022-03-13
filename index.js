const inquirer = require('inquirer');
const fs = require('fs');
const Engineer = require('./lib/Engineer');
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");
const path = require("path");

const managerQuestions = [
    {
        type: "input",
        name: "name",
        message: "What is the manager's name? (Required)",
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log("Please provide the manager's name!");
                return false;
            }
        }
      },
      {
        type: "input",
        name: "id",
        message: "What is the manager's ID number?",
        validate: idInput => {
            if (idInput) {
                return true;
            } else {
                console.log("Please provide the manager's ID number!");
                return false;
            }
        }
      },
      {
        type: "input",
        name: "email",
        message: "What is the manager's email address?",
        validate: email => {
            if (email) {
                return true;
            } else {
                console.log("Please provide the manager's email address!");
                return false;
            }
        }
      },
    {
        type: "input",
        name: "phone",
        message: "What is the manager's phone number?",
        validate: phone => {
            if (phone) {
                return true;
            } else {
                console.log("Please provide the manager's phone number!");
                return false;
            }
        }
    },
  ];

  const addMember = [
    {
        type: "list",
        name: "newEmployee",
        message: "Would you like to add a new Employee?",
        choices: ["Engineer", "Intern", "I'm Done Building the Team!"],
        validate: newEmployee => {
            if (newEmployee === "Engineer") {
                engineerQuest();
            } else if (newEmployee === "Intern") {
                internQuest();
            } else {
                createHTML();
            }
        }
    },
  ];

function writeToFile(fileName, data) {
    // const pageHTML = generatePage(data);
    const html = `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
    </head>
    <body>
        ${JSON.stringify(data)}
    </body>
    </html>`
    
    fs.writeFile(fileName, html, err => {
        if (err) throw err;
        console.log(err);
        console.log('Page complete! Check out index.html to see the output!');
    });
}

function init() {
    inquirer
      .prompt(managerQuestions)
      .then((answers) => {
        console.log('answers????:', answers)
        if (answers) {
            const manager = new Manager(answers.name)
            console.log('engineer?????', manager)
            inquirer
            .prompt(employeeQuestions)
            // writeToFile('index.html', manager)
        } else if(answers.title === 'Manager') {

        }
        // writeToFile('index.html', answers)
      })
      .catch((error) => {
        console.log(error)
      });
  }
  
  init();
  