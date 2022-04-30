const Employee = require('./employee');

class Manager extends Employee {
    constructor(nameinput, idinput, emailinput, officeNum) {
        super(nameinput, idinput, emailinput);
        this.officeNum = officeNum;
    }
    getRole() {
        return 'Manager';
    }
}
module.exports = Manager;

