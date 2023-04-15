// // Procidural way
// step1
// let name = 'mh shuvo'
// let email = 'mhshuvoit@gmail.com'
// let password = 'jkdfdf7'

// function createUser() {}
// function login() {}
// function logout() {}

// step2
// {let name = 'mh shuvo'
// let email = 'mhshuvoit@gmail.com'
// let password = 'jkdfdf7'} //struct

// function createUser() {struct }
// function login() {struct}
// function logout() {struct}


// 01. Object, class & constructor
// class use kore object make korar onk way ase jemon GoF pattern - creational pattern

// // step1
// const obj = {}
// obj.name = 'mh shuvo'
// obj.email = 'mhshuvoit@gmail.com'
// console.log(obj)

// // step2
// class Person { }
// const p1 = new Person()
// p1.name = 'Person 1'
// p1.email = 'mhshuvoit@gmail.com'
// console.log(p1)

// const p2 = new Person()
// p2.name = 'Person 2'
// p2.email = 'mhshuvoit@gmail.com'
// console.log(p2)

// step3
// class Person {
//     name = 'Person 1'
//     email = 'mhshuvoit@gmail.com'
// }
// const p1 = new Person()
// console.log(p1)

// const p2 = new Person()
// p2.name = 'Person 2'
// p2.email = 'mhshuvoit@gmail.com'
// console.log(p2)


// // step4
// class Person {
//     constructor(name, email) {
//         this.name = name
//         this.email = email
//     }
// }

// const p1 = new Person('shuvo', 'mhs@gmail.com')
// const p2 = new Person('mh shuvo', 'mhsit@gmail.com')
// console.log(p1)
// console.log(p2)




// 02. Methode in oop
// // step5
// class Person {
//     constructor(name, email) {
//         this.name = name
//         this.email = email
//     }

//     changeName(name) {
//         this.name = name
//     }

//     sendEmail(msg) {
//         console.log('to', this.email)
//         console.log('message', msg)
//     }

//     print() {
//         console.log(this)
//     }

//     arrow = (email) => { // property name er moto define kore tar moddhe ekta function assign korsi
//         this.email = email
//     }
// }

// const p1 = new Person('shuvo', 'mhs@gmail.com')
// const p2 = new Person('mh shuvo', 'mhsit@gmail.com')
// console.log(p1)
// p2.sendEmail('hi')

// p2.print()
// p2.arrow('test')
// console.log(p2)




// 3. Private Properties
// class Person {
//     constructor(name, email) {
//         this._name = name
//         this._email = email
           // this.name = this._name
//     }
// getName() {
//     return this._name
// }
// setName(name) {
//     this._name = name
// }
// getEmail() {
//     return this._email
// }
// setEmail(email) {
//     this._email = email
// }

// sendEmail(msg) {
//     console.log('To', this._email)
//     console.log('Msg: ', this._sanitizeMsg(msg))
// }

// _sanitizeMsg(msg) {
//     return msg.trim().toLowerCase()
// }

// }

// const p1 = new Person('shuvo', 'mhs@gmail.com')
// const p2 = new Person('mh shuvo', 'mhsit@gmail.com')
// console.log(p1.getName())
// p1.sendEmail('Hi! How are you all.')




//04. Getter Setter
// class Person {
//     constructor(name) {
//         this._name = name
//     }
//     // name() { return this._name }
//     get name() { return this._name } // look like a property but this is a function
//     set name(name) { this._name = name }

// }

// const p1 = new Person('shuvo')
// p1.name = 'mahamudul hasan shuvo'
// console.log(p1.name)




// 05. toString Override
// toString method amder track and debug korte sohoj korbe. toString method amra override korlam ekhane
// class Person {
//     constructor(name) {
//         this._name = name
//     }

//     print() {
//         console.log('ClassName = Person, ' + this)
//     }

//     toString() {
//         return `Name: ${this._name}`
//     }
// }

// const p1 = new Person('shuvo')
// p1.print()
// console.log(p1 + '') // default face is [object object] after concatination





// 06. Static Methods

// class Person {
//     static name = 'person'
//     constructor(name, email) {
//         this._name = name
//         this._email = email
//     }

//     static isValid(age) {
//         return age > 18
//     }

//     static isEqual(p1, p2) {
//          if (p1.name !== p2.name) return false; 
//          if (p1.email !== p2.email) return false;

//         return true
//     }
// }

// const p1 = new Person('shuvo', 'mhs@gmail.com')
// const p2 = new Person('shuvoit', 'mhsit@gmail.com')
// console.log(p1 instanceof Person) // instanceof is operator

// const p3 = { name: 'mhs', age: 27 }
// console.log(p3 instanceof Person)
// console.log(Person.name)

// const person = {
//     name: 'shuvo',
//     email: 'mhs@gmail.com',
//     age: 27
// }
// let p4 = null
// if (Person.isValid(person.age)) {
//     p4 = new Person(person.name, person.email)
// }
// console.log(p4)

// console.log(Person.isEqual(p1, p3))






// 07. Inheritance
const Person = require('./Person')
const Teacher = require('./Teacher')
const Student = require('./Student')

const p = new Person('shuvo', 'mhs@gmail.com')
const t = new Teacher('sabbir suman', 'ss@gmail.com', 'computer', 40000)
const s = new Student('mh shuvo', 'mhs@gmail.com', ['01', '02', '03', '04'], 80000)

// console.log(t.name)
// t.name = 'MH Shuvo'
// console.log(t)
// // console.log(s)
// console.log(t instanceof Person)

// console.log(p)
// console.log(t)
// console.log(s)
p.print()
t.print()
s.print()