const shortid = require('shortid')

module.exports = class Employee {
    constructor(name, email) {
        this.name = name;
        this.id = shortid.generate();
        this.email = email;
    }
    getName() {
        return this.name
    };

    getId() {
        return this.id
    };

    getEmail() {
        return this.email
    };
    
    getRole() {
        return 'Employee'
    }; //returns employee

}



