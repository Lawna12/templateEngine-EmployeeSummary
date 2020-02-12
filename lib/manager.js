const Employee = require('./employee')

module.exports = class Manager extends Employee {
    constructor(name, email, officeNumber) {
        super(name, email);
        this.officeNumber = officeNumber;
    };
    
    getOfficeNumber() {
        return this.officeNumber
    };

    easy() {
        return `
        <div class="col-lg-4">
            <div class="teamRoster card text-center">
                <div class="card-header">
                    ${this.name} <br>
                    Manager
                </div>
                <div class="card-body">
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item">ID: ${this.id}</li>
                        <li class="list-group-item">Email: ${this.email} </li>
                        <li class="list-group-item">Office Number: ${this.officeNumber} </li>
                    </ul>
                </div>
            </div>
        </div>
        `
    }

    getRole() {
        return 'Manager'
    }; //returns employee

}