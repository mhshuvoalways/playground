const Uniperson = require('./Uniperson');

const _studentID = Symbol('studentID')
const _guardian = Symbol('guardian')
const _exam = Symbol('exam')
const _fee = Symbol('fee')

class Student extends Uniperson {
    constructor(id, name, studentID, guardian) {
        super(id, name);
        this[_studentID] = studentID
        this[_guardian] = guardian
        this[_exam] = [] // exam and fee change later
        this[_fee] = null // exam and fee will be change later. In fee we can also 0
    }
    get studentID() {
        return this[_studentID]
    }
    get guardian() {
        return this[_guardian];
    }
    get exams() {
        return this[_exam];
    }
    set exams(value) {
        this[_exam] = value
    }
    addExam(exam) {
        this[_exam].push(exam)
    }
    get fee() {
        return this[_fee];
    }
    set fee(value) {
        this[_fee] = value
    }
    toString() {
        return `${super.toString()}, 
        StudentID: ${this[_studentID]}`
    }
}

module.exports = Student