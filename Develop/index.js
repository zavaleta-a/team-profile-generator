// must use inquirer
const inquirer = require(inquirer);
// should use jest for unit tests

// first class = employee parent class
// employee class will have following properties and methods
// name
// id
// email
// getName()
// getId()
//getEmail()
//getRole()--returns 'Employee'

// Other 3 classes will extend 'Employee'

// Manager will have 'Employee's' properties and also;
// officeNumber
// getRole()--overridden to return 'Manager'

// Engineer will have 'Employee's' as well as;
// github--GitHub username
// getGithub()
// getRole()--overridden to return 'Engineer'

// Inter will have 'Employee's' as well as;
// school
// getSchool()
// getRole()--overridden to return 'Intern'


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
