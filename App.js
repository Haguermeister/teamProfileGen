const inquirer = require("inquirer");
const Engineer = require("./src/classes/engineer");
const Intern = require("./src/classes/intern");
const Manager = require("./src/classes/manager");
const templateStart = require("./teamplateStart");
const template = require("./template");
const fs = require("fs");

const questions = [
  {
    type: "input",
    name: "nameinput",
    message: "Please Enter Team Manager Name: ",
  },
  {
    type: "input",
    name: "idinput",
    message: "Please Enter Employee ID: ",
  },
  {
    type: "input",
    name: "emailinput",
    message: "Please Enter Email Address: ",
  },
  {
    type: "input",
    name: "officeNum",
    message: "Please Enter Phone Number: ",
  },
  {
    type: "list",
    name: "employeeType",
    message: "Would you like to add another member to your team?",
    choices: ["Engineer", "Intern", "Finished Building Team"],
  },
];

questionsEngineer = [
  {
    type: "input",
    name: "nameEng",
    message: "Please Enter Engineer Name: ",
  },
  {
    type: "input",
    name: "idinput",
    message: "Please Enter Engineer Employee ID: ",
  },
  {
    type: "input",
    name: "emailinput",
    message: "Please Enter Engineer Email Address: ",
  },
  {
    type: "input",
    name: "github",
    message: "Please Enter Engineer Github Username: ",
  },
  {
    type: "list",
    name: "employeeType",
    message: "Would you like to add another member to your team?",
    choices: ["Engineer", "Intern", "Finished Building Team"],
  },
];

questionsIntern = [
  {
    type: "input",
    name: "nameInt",
    message: "Please Enter Intern Name: ",
  },
  {
    type: "input",
    name: "idinput",
    message: "Please Enter Intern Employee ID: ",
  },
  {
    type: "input",
    name: "emailinput",
    message: "Please Enter Intern Email Address: ",
  },
  {
    type: "input",
    name: "school",
    message: "Please Enter the school intern attends: ",
  },
  {
    type: "list",
    name: "employeeType",
    message: "Would you like to add another member to your team?",
    choices: ["Engineer", "Intern", "Finished Building Team"],
  },
];
const teamAnswers = [];
let i = 1;
function askQuestions(questionsInput) {
  return inquirer.prompt(questionsInput).then((answers) => {
    if (i == 1) {
      teamAnswers.push(
        new Manager(
          answers.nameinput,
          answers.idinput,
          answers.emailinput,
          answers.officeNum
        )
      );
      i++;
    }
    if (answers.nameEng) {
      teamAnswers.push(
        new Engineer(
          answers.nameEng,
          answers.idinput,
          answers.emailinput,
          answers.github
        )
      );
    } else if (answers.nameInt) {
      teamAnswers.push(
        new Intern(
          answers.nameInt,
          answers.idinput,
          answers.emailinput,
          answers.school
        )
      );
    }
    if (answers.employeeType === "Engineer") {
      return askQuestions(questionsEngineer);
    } else if (answers.employeeType === "Intern") {
      return askQuestions(questionsIntern);
    }
    return teamAnswers;
  });
}
askQuestions(questions).then((data) => {
  fs.writeFile("index.html", template(templateStart(data)), () => {});
});
