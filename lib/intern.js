const Employee = require('./employee')

module.exports = class Intern extends Employee {
    constructor(name, id, email, title, school) {
        super(name, id, email, title);
        this._school = school;
    }
    
    getSchool() {
        return this._school
    }

}