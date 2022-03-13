const inquirer = require("inquirer");
const fs = require("fs");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");
const newHTML = require("./src/createHTML");
const team = [];

const initialQuest = [
  {
    type: "input",
    name: "name",
    message: "What is the manager's name? (Required)",
    validate: (nameInput) => {
      if (nameInput) {
        return true;
      } else {
        console.log("Please provide the manager's name!");
        return false;
      }
    },
  },
  {
    type: "input",
    name: "id",
    message: "What is the manager's ID number?",
    validate: (idInput) => {
      if (idInput) {
        return true;
      } else {
        console.log("Please provide the manager's ID number!");
        return false;
      }
    },
  },
  {
    type: "input",
    name: "email",
    message: "What is the manager's email address?",
    validate: (email) => {
      if (email) {
        return true;
      } else {
        console.log("Please provide the manager's email address!");
        return false;
      }
    },
  },
  {
    type: "input",
    name: "phone",
    message: "What is the manager's phone number?",
    validate: (phone) => {
      if (phone) {
        return true;
      } else {
        console.log("Please provide the manager's phone number!");
        return false;
      }
    },
  },
];

const newEmployee = [
  {
    type: "list",
    name: "newEmployee",
    message: "Would you like to add a new Employee?",
    choices: ["Engineer", "Intern", "I'm Done Building the Team!"],
    validate: (newEmployee) => {
      if (newEmployee === "Engineer") {
        engineerQuest();
      } else if (newEmployee === "Intern") {
        internQuest();
      } else {
        writeToFile();
      }
    },
  },
];

const engineer = [
  {
    type: "input",
    name: "github",
    message: "What is your github username?",
    validate: (github) => {
        if (github) {
          return true;
        } else {
          console.log("Please provide the engineer's Github username!");
          return false;
        }
      },
  },
];

const intern = [
  {
    type: "input",
    name: "school",
    message: "What school/university did you graduate from?",
    validate: (school) => {
        if (school) {
          return true;
        } else {
          console.log("Please provide the intern's school/university!");
          return false;
        }
      },
  },
];


function writeToFile(answers) {
    let newData = (JSON.stringify(answers))
    fs.writeFile('./index.html', newData, function (error) {
        if (error) {
            return console.log(error);
        } else {
            console.log("Your index html was created!")
        }
    })
}

function init() {
  inquirer
    .prompt(initialQuest)
    .then((answers) => { 
        position = new Manager(
            answers.name,
            answers.id,
            answers.email,
            answers.phone,
            answers.role
        )
        team.push(position)
        newTeam()
    });
}

function newTeam () {
    inquirer.prompt(newEmployee).then((data) => {
        if (data.newEmployee === "Engineer") {
            inquirer.prompt(engineer).then((engineerData) => {
                engineerNew = new Engineer(
                    engineerData.name,
                    engineerData.id,
                    engineerData.email,
                    engineerData.github
                )
                team.push(engineerNew)
                newTeam();
            })
        }
        if (data.newEmployee === "Intern") {
            inquirer.prompt(intern).then((internData) => {
                internNew = new Intern(
                    internData.name,
                    internData.id,
                    internData.email,
                    internData.school
                )
                team.push(internNew)
                newTeam();
            })
        }
        if (data.newEmployee === "I'm Done Building the Team!") {
            writeToFile(team)
        }
    })
}  

init();
