const Employee = require('./employee');

class Intern extends Employee {
    constructor(nameinput, idinput, emailinput, school) {
        super(nameinput, idinput, emailinput);
        this.school = school;
    }
    getSchool() {
        return this.school;
    }
    getRole() {
        return 'Intern';
    }
}
module.exports = Intern;