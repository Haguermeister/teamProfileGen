const Employee = require("./employee");
class Engineer extends Employee {
  constructor(nameEng, idinput, emailinput, github) {
    super(nameEng, idinput, emailinput);
    this.github = github;
  }
  getGithub() {
    return this.github;
  }
  getRole() {
    return "Engineer";
  }
}
module.exports = Engineer;
