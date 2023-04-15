const _name = Symbol('name')
const _email = Symbol('email')

class Person {
    constructor(name, email) {
        this[_name] = name
        this[_email] = email
    }
    print() {
        console.log('ClassName = Person, ' + this + '')
    }
    toString() {
        return 'Name ' + this[_name] + ', ' + 'Email ' + this[_email]
    }
}

module.exports = Person