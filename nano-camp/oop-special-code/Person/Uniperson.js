const Person = require('./Person')
const _account = Symbol('account')
const _department = Symbol('department')

class Uniperson extends Person {
    constructor(id, name) {
        super(id, name)
        this[_account] = null
        this[_department] = null
    }
    get account() {
        return this[_account]
    }
    set account(value) {
        return this[_account] = value
    }
    get department() {
        return this[_department]
    }
    set department(value) {
        return this[_department] = value
    }
    toString() {
        return `${super.toString()}, 
        Department: ${this[_department]}, Account: ${this[_account]}`
    }
}

module.exports = Uniperson