const inquirer = require('inquirer');
const jest = require('jest');



const questionsManager = [{
    type: 'input',
    name: 'employeeID',
    message: 'Please enter employee ID: '
} /* {
    type: 'list',
    name: 'license',
    message: 'What liscense should your project have?',
    choices: ['APACHE 2.0', 'GPL 3.0', 'BSD 3', 'None']
} */];
// conditionals that start logic  and then based on continue we start loop over
//

function addManager() {
    inquirer.prompt(questions).then(answers => {

    }