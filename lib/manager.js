const Employee = require('./employee')

module.exports = class Manager extends Employee {
    constructor(name, email, officeNumber) {
        super(name, email);
        this.officeNumber = officeNumber;
    };
    
    getOfficeNumber() {
        return this.officeNumber
    };

    getRole() {
        return 'Manager'
    }; //returns employee

}