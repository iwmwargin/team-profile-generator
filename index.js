const inquirer = require("inquirer");
const fs = require("fs");
// const path = require("path");

// const dist_dir = path.resolve(__dirname, "dist");
// const dist_path = path.join(dist_dir, "index.html");
// const render = require("./src/createHTML");
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
    message: "What is the manager's ID number? (Required)",
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
    message: "What is the manager's email address? (Required)",
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
    message: "What is the manager's office number? (Required)",
    validate: (officeNum) => {
      if (officeNum) {
        return true;
      } else {
        console.log("Please provide the manager's office number!");
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
  },
];

const engineer = [
    {
        type: "input",
        name: "name",
        message: "What is the engineer's name? (Required)",
        validate: (nameInput) => {
          if (nameInput) {
            return true;
          } else {
            console.log("Please provide the engineer's name!");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "id",
        message: "What is the engineer's ID number? (Required)",
        validate: (idInput) => {
          if (idInput) {
            return true;
          } else {
            console.log("Please provide the engineer's ID number!");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "email",
        message: "What is the engineer's email address? (Required)",
        validate: (email) => {
          if (email) {
            return true;
          } else {
            console.log("Please provide the engineer's email address!");
            return false;
          }
        },
      },
  {
    type: "input",
    name: "github",
    message: "What is the engineer's github username? (Required)",
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
        name: "name",
        message: "What is the intern's name? (Required)",
        validate: (nameInput) => {
          if (nameInput) {
            return true;
          } else {
            console.log("Please provide the intern's name!");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "id",
        message: "What is the intern's ID number? (Required)",
        validate: (idInput) => {
          if (idInput) {
            return true;
          } else {
            console.log("Please provide the intern's ID number!");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "email",
        message: "What is the intern's email address? (Required)",
        validate: (email) => {
          if (email) {
            return true;
          } else {
            console.log("Please provide the intern's email address!");
            return false;
          }
        },
      },
  {
    type: "input",
    name: "school",
    message: "What school/university did the intern graduate from? (Required)",
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

function appendHTML(answers) {
  let htmlBody = "";
  const htmlHead = `<!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Team Profile Generator</title>
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
  
  </head>
  <div class="container-fluid">
            <div class="row">
                <div class="col-12 mb-3 team-heading jumbotron bg-success text-dark">
                    <h1 class="text-center"> My Team</h1>
                </div>
            </div>
        </div>`;

  team.forEach((item, index) => {
    if(item.officeNum) {

      const managerCard = `<div class="card text-white mb-3" style="max-width: 18rem;">
      <div class="card-body bg-primary">${item.name}
      <h6 class="card-text>Manager</h6>
      <i class="bi bi-robot"></i>
      </div>
        <ul class="list-group list-group-flush">
        <li class="list-group-item">${item.id}</li>
        <a class="list-group-item" href ="mailto: ${item.email}">Email</a>
        <li class="list-group-item">Office Number: ${item.officeNum}</li>
      </ul>
      </div>`

      htmlBody = htmlBody + managerCard
    }

    if(item.github) {
      const engCard = `<div class="card text-white mb-3" style="max-width: 18rem;">
      <div class="card-body bg-primary">${item.name}
      <h6 class="card-text>Engineer</h6>
      <i class="bi bi-wrench-adjustable"></i>
      </div>
        <ul class="list-group list-group-flush">
        <li class="list-group-item">${item.id}</li>
        <a class="list-group-item" href ="mailto: ${item.email}">Email</a>
        <li class="list-group-item">Office Number: ${item.github}</li>
      </ul>
      </div>`

      htmlBody = htmlBody + engCard
    }

    if(item.school) {
      const intCard = `<div class="card text-white mb-3" style="max-width: 18rem;">
      <div class="card-body bg-primary">${item.name}
      <h6 class="card-text>Intern</h6>
      <i class="bi bi-mortarboard-fill"></i>
      </div>
        <ul class="list-group list-group-flush">
        <li class="list-group-item">${item.id}</li>
        <a class="list-group-item" href ="mailto: ${item.email}">Email</a>
        <li class="list-group-item">Office Number: ${item.school}</li>
      </ul>
      </div>`

      htmlBody = htmlBody + intCard
    }
  })  
}

function writeToFile(answers) {
    let newData = (JSON.stringify(answers))
      // fs.writeFileSync(dist_path, render(newData), "utf-8")
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
            appendHTML(writeToFile(team))
            // writeToFile(team)
        }
    })
}  

init();
