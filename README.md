![License](https://img.shields.io/badge/License-MIT-yellow.svg)

# Team Profile Generator

## Table of Contents

- [Description](#description)
- [Installation](#installation)
- [Languages](#languages)
- [Usage](#usage)
- [Link to URL](#live-url-link)
- [Contributors](#contributors)
- [Testing](#tests)
- [Questions](#questions)
- [License](#license)

## User Story

```md
AS A manager
I WANT to generate a webpage that displays my team's basic info
SO THAT I have quick access to their emails and GitHub profiles
```

## Acceptance Criteria

```md
GIVEN a command-line application that accepts user input
WHEN I am prompted for my team members and their information
THEN an HTML file is generated that displays a nicely formatted team roster based on user input
WHEN I click on an email address in the HTML
THEN my default email program opens and populates the TO field of the email with the address
WHEN I click on the GitHub username
THEN that GitHub profile opens in a new tab
WHEN I start the application
THEN I am prompted to enter the team manager’s name, employee ID, email address, and office number
WHEN I enter the team manager’s name, employee ID, email address, and office number
THEN I am presented with a menu with the option to add an engineer or an intern or to finish building my team
WHEN I select the engineer option
THEN I am prompted to enter the engineer’s name, ID, email, and GitHub username, and I am taken back to the menu
WHEN I select the intern option
THEN I am prompted to enter the intern’s name, ID, email, and school, and I am taken back to the menu
WHEN I decide to finish building my team
THEN I exit the application, and the HTML is generated
```

## Description

This is a command-line application that takes in information about employees on a software engineering team and generates an HTML webpage that displays summaries for each person.

## Installation

You will need to clone the code into your computer, install NPM Inquirer, FS and Express & finally execute the program in the integrated terminal by typing node index.

## Languages

JavaScript,Node

## Live URL Link

https://iwmwargin.github.io/team-profile-generator/

## Usage

Start by running node index in the terminal. Then just following the instructions and after you are done, an HTML page will be created that contains your data.

## Contributors

Eric Wargin

## Tests

Using `npm run test` will run all of the installed tests.

## Questions?

iwmwargin@gmail.com
<br>
https://github.com/iwmwargin

## License

This project is licensed under the MIT. Please see https://opensource.org/licenses/MIT for more details.
