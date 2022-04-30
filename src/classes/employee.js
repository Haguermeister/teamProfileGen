class Employee {
    constructor(nameinput, idinput, emailinput) {
        this.name = nameinput;
        this.id = idinput;
        this.email = emailinput;
    }
    getName() {
        return this.name;
    }
    getId() {
        return this.id;
    }
    getEmail() {
        return this.email;
    }
    getRole() {
        return 'Employee';
    }
}

module.exports = Employee;