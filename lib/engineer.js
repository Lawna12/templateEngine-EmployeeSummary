const Employee = require('./employee')

module.exports = class Engineer extends Employee {
    constructor(name, id, email, title, github) {
        super(name, id, email, title);
        this._github = github;
    }
    
    getGithub() {
        return this._github
    }

}