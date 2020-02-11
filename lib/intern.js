const Employee = require('./employee')

module.exports = class Intern extends Employee {
    constructor(name, email, school) {
        super(name, email);
        this.school = school;
    };
    
    getSchool() {
        return this.school
    };

    getRole() {
        return 'Intern'
    }; //returns Intern

}