const Employee = require('./employee')

module.exports = class Intern extends Employee {
    constructor(name, id, title, email, school) {
        super(name, id, title, email);
        this._school = school;
    };
    
    getSchool() {
        return this._school
    };

    getRole() {
        return this.constructor.title
    }; //returns Intern

}