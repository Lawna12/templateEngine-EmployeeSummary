const inquirer = require('inquirer');


const Employee = require('./employee')
const Engineer = require('./engineer')
const Manager = require('./manager')
const Intern = require('./intern')

module.exports = class Main {
    constructor() {
        this.teamArray = [];
    }
    
    async run() {
        const { teamSize } = await inquirer.prompt([{
            type: 'input',
            name: 'teamSize',
            message: 'Please input your team size',
            default: 2,
        }]);

        for (let i = 0; i < teamSize; i++) {
            console.log("======================")
            const response = await inquirer.prompt([
                {
                    type: 'input',
                    name: 'name',
                    message: 'Please input your name',
                },
                {
                    type: 'input',
                    name: 'email',
                    message: 'Please input your email',
                },
                {
                    type: 'list',
                    name: 'role',
                    message: 'Please choose your role',
                    choices: [
                        'Engineer',
                        'Intern',
                        'Manager',
                    ]
                },
                {
                        type: 'input',
                        name: 'github',
                        message: 'Please input your github',
                        when: ({ role })=> role == "Engineer"
                },
                {
                    type: 'input',
                    name: 'school',
                    message: 'Please input your school',
                    when: ({ role })=> role == "Intern"
                },
                {
                    type: 'input',
                    name: 'officeNumber',
                    message: 'Please input your officeNumber',
                    when: ({ role })=> role == "Manager"
                },
            ]);
            
            const {
                name,
                email,
                role,
                github,
                school,
                officeNumber,
            } = response;

            if (role == 'Engineer') {
                this.teamArray
            }
        }
        console.log(this.teamArray)
    }
}

