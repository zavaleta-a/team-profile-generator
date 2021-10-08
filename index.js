// must use inquirer
const inquirer = require(inquirer);
// use fs to write file
const fs = require("fs");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");

const employees = [];

// create array of questions for user input
const promptUser = () => {
  return inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "Please enter team member's name",
      },
      {
        type: "checkbox",
        name: "role",
        message: "Please select team member's role",
        choices: ["Employee", "Engineer", "Intern", "Manager"],
      },
      {
        type: "input",
        name: "id",
        message: "Please enter team member's ID number",
      },
      {
        type: "input",
        name: "email",
        message: "Please enter team member's email address",
      },
    ])

    .then(function ({ name, role, id, email }) {
      let roleInfo = "";
      if (role === "Intern") {
        roleInfo = "school name";
      } else if (role === "Engineer") {
        roleInfo = "GitHub Username";
      } else {
        roleInfo = "office phone number";
      }
      inquirer
        .prompt([
          {
            message: `Please enter team member's ${roleInfo}`,
            name: "roleInfo",
          },
          {
            type: "checkbox",
            name: "addMembers",
            message: "Would you like to add another team member?",
            choices: ["yes", "no"],
          },
        ])
        .then(function ({ roleInfo, addMembers }) {
          let newMember;
          if (role === "Intern") {
            newMember = new Intern(name, id, email, roleInfo);
          } else if (role === "Engineer") {
            newMember = new Engineer(name, id, email, roleInfo);
          } else {
            newMember = new Manager(name, id, email, roleInfo);
          }
          employees.push(newMember);
          addHtml(newMember).then(function () {
            if (moreMembers === "yes") {
              addMembers();
            } else {
              finishHtml();
            }
          });
        });
    });
};

// function to add members
function addHtml(member) {
  return new Promise(function (resolve, reject) {
    const name = member.getName();
    const id = member.getId();
    const email = member.getEmail();
    const role = memeber.getRole();
    let data = "";
    if (role === "Engineer") {
      const GitHub = member.getGithub();
    } else if (role === "Intern") {
      const school = member.getSchool();
    } else {
      const officePhoneNumber = memeber.getOfficeNumber();
    }
    console.log("Member added!");
    fs.appendFile("./output/team.hml", data, function (err) {
      if (err) {
        return reject(err);
      }
      return resolve();
    });
  });
}
function createHtml() {
  const html = `<!DOCTYPE html>
      <html lang="en">
        <head>
          <meta charset="UTF-8" />
          <meta http-equiv="X-UA-Compatible" content="IE=edge" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <link
            rel="stylesheet"
            href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
            integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
            crossorigin="anonymous"
          />
          <title>Team Profile</title>
        </head>
        <body>
          <nav class="navbar navbar-dark bg-dark mb-5">
            <div class="navbar-brand mb-0 h1 w-100 text-center">Team</div>
          </nav>
      
          <div class="container">
            <div class="row">`;
  fs.writeFile("./output/team.html", html, function (err) {
    if (err) {
      console.log(err);
    }
  });
}

function finishHtml() {
  const html = `</div>
    </div>
    </body>
    </html>`;

  fs.appendFile("./output/team.html", html, function (err) {
    if (err) {
      console.log(err);
    }
  });
  console.log("HTML completed");
}

// create function to initialize app
const init = () => {
  promptUser();
  createHtml();
  addHtml();
};

// function to call app init
init();

// Need to accept user input
// Email address will open default email program and populate the "To" field
// Link GitHub usernames to their profiles
// profiles need to open in a new tab

// Create questions to promp user;
// team manager's name
// employee ID
// email address
// office number

// Need to generate index.html with all of the info entered by user
