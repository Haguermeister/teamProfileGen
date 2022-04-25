const Employee = require('./employee');
class Engineer extends Employee {
    constructor(nameinput, idinput, emailinput, github) {
        super(nameinput, idinput, emailinput);
        this.github = github;
    }
    getGithub() {
        return this.github;
    }
    getRole() {
        return 'Engineer';
    }
}
module.exports = Engineer;