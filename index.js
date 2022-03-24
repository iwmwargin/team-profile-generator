const inquirer = require("inquirer");
const fs = require("fs");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");
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

function appendHTML() {
  let htmlBody = "";
  const htmlHead = `<!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Team Profile Generator</title>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css" integrity="sha512-KfkfwYDsLkIlwQp6LFnl8zNdLGxu9YAA1QvwINks4PhcElQSvqcyVLLD9aMhXd13uQjoXtEKNosOWaZqXgel0g==" crossorigin="anonymous" referrerpolicy="no-referrer" />
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
  
  </head>
  <body>
  <header class="row justify-content-md-center m-2">
                <div class="col-12 mb-3 team-heading jumbotron bg-success text-dark">
                    <h1 class="text-center"> My Team</h1>
            </div>
        </header>
        <div class="row justify-content-center">
        <div class ="card-deck">`;

  team.forEach((data, index) => {
    if(data.officeNum) {

      const managerCard = `<div class="card shadow-lg text-black mb-3" style="max-width: 18rem;">
      <div class="card-body bg-primary">
      <h5 class>${data.name}</h5>
      <h6 class="card-text font-weight-bold"><i class="fas fa-mug-hot mr-2"></i>Manager</h6>
      
      </div>
        <ul class="list-group list-group-flush">
        <li class="list-group-item">ID: ${data.id}</li>
        <a class="list-group-item" href ="mailto: ${data.email}">Email: ${data.email}</a>
        <li class="list-group-item">Office Number: ${data.officeNum}</li>
      </ul>
      </div>`

      htmlBody = htmlBody + managerCard
    }

    if(data.github) {
      const engCard = `<div class="card shadow-lg text-black mb-3" style="max-width: 18rem;">
      <div class="card-body bg-primary">
      <h5 class=>${data.name}</h5>
      <h6 class="card-text font-weight-bold"><i class="fas fa-glasses mr-2 "></i>Engineer</h6>
      
      </div>
        <ul class="list-group list-group-flush">
        <li class="list-group-item">ID: ${data.id}</li>
        <a class="list-group-item" href ="mailto: ${data.email}">Email: ${data.email}</a>
        <li class="list-group-item">Github: ${data.github}</li>
      </ul>
      </div>`

      htmlBody = htmlBody + engCard
    }

    if(data.school) {
      const intCard = `<div class="card shadow-lg text-black mb-3" style="max-width: 18rem;">
      <div class="card-body bg-primary">
      <h5 class>${data.name}</h5>
      <h6 class="card-text font-weight-bold"><i class="fas fa-user-graduate mr-2"></i>Intern</h6>
      
      </div>
        <ul class="list-group list-group-flush">
        <li class="list-group-item">ID: ${data.id}</li>
        <a class="list-group-item" href ="mailto: ${data.email}">Email: ${data.email}</a>
        <li class="list-group-item">School: ${data.school}</li>
      </ul>
      </div>`

      htmlBody = htmlBody + intCard
    }
    fs.writeFile("./index.html", htmlHead + htmlBody, function (err) {
      if (err) {
        return console.log(err);
      } else {
        console.log("Page Created!")
      }
    }
    )
  })  
}

// function writeToFile(answers) {
//     let newData = (JSON.stringify(answers))
//       // fs.writeFileSync(dist_path, render(newData), "utf-8")
//     fs.writeFile('./index.html', newData, function (error) {
//         if (error) {
//             return console.log(error);
//         } else {
//             console.log("Your index html was created!")
//         }
//     })
// }

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
            appendHTML(team)
            // writeToFile(team)
        }
    })
}  

init();
