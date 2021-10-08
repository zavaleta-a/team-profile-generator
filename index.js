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
}



// function to add members
function addHtml(member) {
    return new Promise (function(resolve, reject) {
        const name = member.getName();
        const id = member.getId();
        const email = member.getEmail();
        const role = memeber.getRole();
        let data = "";
        if (role)
    })
}

// create function to initialize app
const init = () => {
  promptUser();
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
