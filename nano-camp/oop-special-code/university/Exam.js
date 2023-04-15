const _id = Symbol('id');
const _name = Symbol('name');
const _passmark = Symbol('passmark');
const _subject = Symbol('subject');

class Exam {
    constructor({ id, name, subject, passmark }) {
        this[_id] = id;
        this[_name] = name;
        this[_subject] = subject;
        this[_passmark] = passmark || 33;
    }
    get id() {
        return (this[_id]);
    }
    get name() {
        return (this[_name]);
    }
    set name(value) {
        this[_name] = value;
    }
    get subject() {
        return (this[_subject]);
    }
    set subject(value) {
        this[_subject] = value;
    }
    get passmark() {
        return (this[_passmark]);
    }
    set passmark(value) {
        this[_passmark] = value;
    }
    toString() {
        return `
        ID: ${this[_id]}
        Name: ${this[_name]}
        Subject: ${this[_subject]}
        Passmark: ${this[_passmark]}
        `
    }
}

module.exports = Exam