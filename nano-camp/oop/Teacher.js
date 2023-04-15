const Person = require('./Person')

const _subject = Symbol('subject')
const _salary = Symbol('salary')
class Teacher extends Person {
    constructor(name, email, subject, salary) {
        super(name, email) // super function call korar mane Person class er constructor call houa
        this[_subject] = subject;
        this[_salary] = salary;
    }

    print() { // method override
        super.print();
        console.log('Subject ' + this[_subject], 'Salary ' + this[_salary])
    }
}

module.exports = Teacher