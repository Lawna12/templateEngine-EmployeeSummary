const inquirer = require('inquirer');
const fs = require('fs')
const path = require('path');
const util = require('util')


const Employee = require('./employee')
const Engineer = require('./engineer')
const Manager = require('./manager')
const Intern = require('./intern')

const writeFileAsync = util.promisify(fs.writeFile)


class Main {
    constructor() {
        this.teamArray = [];
    }

    async easy() {
        let teamHTMLString = '';
        for (const teamMember of this.teamArray) {
            teamHTMLString += teamMember.easy()
        }
        const result = Main.templateStart + teamHTMLString + Main.templateEnd

        await writeFileAsync(path.resolve(__dirname, '..', 'output', 'generated.html'), result);
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
                this.teamArray.push(new Engineer(name, email, github))
            }
            if (role == 'Manager') {
                this.teamArray.push(new Engineer(name, email, officeNumber))
            }
            if (role == 'Intern') {
                this.teamArray.push(new Engineer(name, email, school))
            }
        }
        await this.easy();
    }
}

Main.templateStart = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">

    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">
    <!-- <link rel="stylesheet" href="./style.css"> -->
    <title>Team Roster</title>
</head>
<body>

    <div class="container">
    <h1 class="header">My Team</h1>

    
    <div class="container">
        <div class="row">
            <div class="col-lg-4">
                <div class="teamRoster card text-center">
`

Main.templateEnd = `
    
    </div>


<style>
* {
    box-sizing: border-box;
}



.header {
    font-size: 50px;
    font-weight: bold;
    background-color: dimgray;
    color: chocolate;
    text-align: center;
    padding: 50px;
}

.teamRoster {
    float: left;
    width: 250px;
    margin: 35px;
}
</style>

    
    <script src="https://code.jquery.com/jquery-3.4.1.slim.min.js" integrity="sha384-J6qa4849blE2+poT4WnyKhv5vZF5SrPo0iEjwBvKU7imGFAV0wwj1yYfoRSJoZ+n" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js" integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" crossorigin="anonymous"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js" integrity="sha384-wfSDF2E50Y2D1uUdj0O3uMBJnjuUD4Ih7YwaYd1iqfktj0Uod8GCExl3Og8ifwB6" crossorigin="anonymous"></script>

</body>
</html>
`

module.exports = Main;

