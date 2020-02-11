const Employee = require('./employee')

module.exports = class Manager extends Employee {
    constructor(name, id, title, email, officeNumber) {
        super(name, id, title, email);
        this._officeNumber = officeNumber;
    };
    
    getOfficeNumber() {
        return this._officeNumber
    };

    getRole() {
        return this.constructor.title
    }; //returns employee

}