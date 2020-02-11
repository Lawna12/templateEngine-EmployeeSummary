const Employee = require('./employee')

module.exports = class Manager extends Employee {
    constructor(name, id, email, title, officeNumber) {
        super(name, id, email, title);
        this._officeNumber = officeNumber;
    }
    
    getofficeNumber() {
        return this._officeNumber
    }

}