const Employee = require("./employee");

class Intern extends Employee {
  constructor(nameInt, idinput, emailinput, school) {
    super(nameInt, idinput, emailinput);
    this.school = school;
  }
  getSchool() {
    return this.school;
  }
  getRole() {
    return "Intern";
  }
}
module.exports = Intern;
