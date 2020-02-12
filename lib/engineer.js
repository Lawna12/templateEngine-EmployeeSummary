const Employee = require('./employee')

module.exports = class Engineer extends Employee {
    constructor(name, email, github) {
        super(name, email);
        this.github = github;
    };
    
    getGithub() {
        return this.github
    };

    easy() {
        return `
        <div class="col-lg-4">
            <div class="teamRoster card text-center">
                <div class="card-header">
                    ${this.name} <br>
                    Engineer
                </div>
                <div class="card-body">
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item">ID: ${this.id}</li>
                        <li class="list-group-item">Email: ${this.email} </li>
                        <li class="list-group-item">GitHub: ${this.github} </li>
                    </ul>
                </div>
            </div>
        </div>
        `
    }

    getRole() {
        return 'Engineer'
    }; //returns employee

}

