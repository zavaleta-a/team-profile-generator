// must use inquirer
const inquirer = require(inquirer);
// use fs to write file
const fs = require("fs");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");

const employees [];

// create array of questions for user input
const promptUser = () => {
    return inquirer.prompt([
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
}




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
