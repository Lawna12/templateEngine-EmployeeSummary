module.exports = class Employee {
    constructor(name, id, title, email) {
        this._name = name;
        this._id = id;
        this._title = title;
        this._email = email;
    }
    getName() {
        return this._name
    };

    getId() {
        return this._id
    };

    getTitle() {
        return this._title
    };

    getEmail() {
        return this._email
    };
    
    getRole() {
        return this.constructor.name
    }; //returns employee

}



