const Employee = require('./employee')

module.exports = class Intern extends Employee {
    constructor(name, email, school) {
        super(name, email);
        this.school = school;
    };
    
    getSchool() {
        return this.school
    };

    easy() {
        return `
        <div class="card-header">
            ${this.name} <br>
            Intern
        </div>
        <div class="card-body">
            <ul class="list-group list-group-flush">
                <li class="list-group-item">ID: ${this.id}</li>
                <li class="list-group-item">Email: ${this.email} </li>
                <li class="list-group-item">School: ${this.school} </li>
            </ul>
        </div>
        `
    }

    getRole() {
        return 'Intern'
    }; //returns Intern

}