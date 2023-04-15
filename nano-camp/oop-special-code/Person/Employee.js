const Uniperson = require('./Uniperson');

const _employedID = Symbol('employedID')
const _salary = Symbol('salary')

class Employee extends Uniperson {
    constructor(id, name, employedID) {
        super(id, name);
        this[_employedID] = employedID
        this[_salary] = null
    }
    get employedID() {
        return this[_employedID]
    }
    get salary() {
        return this[_salary];
    }
    set salary(value) {
        return this[_salary] = value
    }
    toString() {
        return `${super.toString()}, 
        EmployedID: ${this[_employedID]}, Salary: ${this[_salary]}`
    }
}

module.exports = Employee