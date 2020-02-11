const Employee = require('./employee')

module.exports = class Engineer extends Employee {
    constructor(name, id, title, email, github) {
        super(name, id, title, email);
        this._github = github;
    };
    
    getGithub() {
        return this._github
    };

    getRole() {
        return this.constructor.title
    }; //returns employee

}