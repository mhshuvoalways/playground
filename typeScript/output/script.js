"use strict";
// Lesson 1 - Intro and Installation
// console.log('hello');
// const country = 'I Bangladesh'
// console.log(country);
// Lesson 2 - Editor Setup and Compilation
// Lesson 3 - Type Basics
// step1
// let playername = 'Mashrafee'
// console.log(playername);
// playername = 34
// console.log(playername);
// step2
// let playername
// playername = "mashrafee"
// playername = 34
// console.log(playername);
// step3
// function multipy(a: number, b: number) {
//     return a + b
// }
// console.log(multipy(6, 34));
// step4
// let arr = ['apple', 'orange']
// arr.push('pineapple') // we can not set number
// let arr2 = [] // we can set anything
// arr2.push('pineapple')
// arr2.push(34)
// step5
// let person = { // this is the schema
//     name: 'shuvo',
//     age: 25
// }
// person.name = 324 
// person.country = 'Bangledesh'
// Lesson 4 - Explicit & Union Types -
// var
// let b: string | number
// let a: string
// let b: number
// a = 'Shuvo'
// b = 26
// let c: object
// c = {
//     name: 'shuvo',
// }
// Union type
// b = 'shuvo'
// b = 34
// let a: (string | number)[] = [] 
// a.push('shuvo')
// Lesson 5 - Dynamic Type or any type
// let a: any // we can use. It flavour like js
// let b: any[] = []
// let b: {
//     name: any;
// }
// Lesson 6 - How to use Functions
// let myFunc = Function
// myFunc = 5
// function Names(a: string , b: number, c?:boolean) { // c optional 
//     console.log(a, b);
// }
// Names('shuvo', 34)
// function Names(a: string , b: number, c:boolean = true) { // if we want to set default value of c we don't need '?' sign
//     // Typescrpt default return void
//     // undefined is value but void is not a value
//     // console.log(a, b);
//     return a + b
// }
// Names('shuvo', 34)
// function Names(a: string , b: string, c:boolean = true): string { // amra explicitly bole dite pari
//     return a + b
// }
// Names('mh', 'shuvo')
// Lesson 7 - Type Aliases
// const userDetails = (
//     id: string | number,
//     user: {name: string; age: number}
// ) => {
//     console.log(`User id is ${id}, name is ${user.name} and age is ${user.age}`);
// }
// const sayHello = (user: {name: string; age: number}) => {
//     console.log(`Hello ${user.age > 50 ? "Sir": "Mr"} ${user.name}`);
// }
// type stringOrNum = string | number
// type userType = {name: string; age: number}
// const userDetails = (
//     id: stringOrNum,
//     user: {name: string; age: number}
// ) => {
//     console.log(`User id is ${id}, name is ${user.name} and age is ${user.age}`);
// }   
// const sayHello = (user: userType) => {
//     console.log(`Hello ${user.age > 50 ? "Sir": "Mr"} ${user.name}`);
// }
// Lesson 8 - Function Signatures
// let add: (id: number, y: { //Function Signatures
//     a: string,
//     b: string
// }) => void; // signature
// let add: (id: number, y: { //Function Signatures
//     a: string,
//     b: string
// }) => number; // signature
// add = (a: number, b: {
//     a: string,
//     b: string
// }) => {
//     // console.log(a, b);
//     return a 
// }   
// console.log(add(3, {a: 'shuvo', b: 'mh'}));
// Lesson 9 - Classes
// class Player {
//     name: string;
//     age: number
//     constructor(n: string, a: number) {
//         this.name = n
//         this.age = a
//     }
//     play() {
//         console.log(`${this.name, this.age}`);
//     }
// }
// const mashrafee = new Player('mashrafee', 30)
// const sakib = new Player('sakib', 30)
// const players: Player[] = [];
// players.push(sakib)
// Lesson 10 - Access Modifiers
// class Player {
//     // private name: string;
//     // public age: number;
//     // readonly country: string;
//     // constructor(n: string, a: number, c: string){
//     //     this.name = n
//     //     this.age = a
//     //     this.country = c
//     // }
//     constructor(
//         private name: string,
//         public age: number, //if i say access modifier like private we don't need to write this.name. this is shortcut
//         readonly country: string
//     ){}
//     play() {
//         console.log(`${this.name, this.age, this.country}`);
//     }
// }
// const mashrafee = new Player('mashrafee', 30, 'bd')
// console.log(mashrafee.country);
// mashrafee.name =  'sakib'
// Lesson 11 - Module System
// import {Player} from './classes/player.js'
// const mashrafee = new Player('mashrafee', 30, 'bd')
// console.log(mashrafee);
// Lesson 12 - Interfaces
// interface Rectangle {
//     width: number,
//     height: number
// }
// function drawRectangle(options: {
//     width: number,
//     height: number
// }) {
// function drawRectangle(options: Rectangle) {
//     let weight = options.width
//     let height = options.height
//     console.log(weight, height);
// }
// let obj = {
//     width: 20,
//     height: 10,
//     light: true
// }
// drawRectangle(obj)
// step 2
// import {Player} from './classes/player.js'
// import {isPlayer} from './interfaces/isPlayer.js'
// let mashrafee: isPlayer
// mashrafee = new Player('mashrafee', 30, 'bd')
// Lesson 13 - Generics
// const addId = (obj: object) => {
const addId = (anything) => {
    let id = Math.floor(Math.random() * 100);
    return Object.assign(Object.assign({}, anything), { id });
};
let user = addId({
    name: 'shuvo',
    age: 28
});
// let user = 'shuvo'
// interface ApiResponse<T> {
//     name: string
//     age: number
//     data: T
// }
// const response: ApiResponse<string> = {
//     name: 'shuvo',
//     age: 28,
//     data: "string"
// }
// Lesson 14 - Enum Types
// index ta pauar jonno
// enum RType {Success, Failer, Unauth}
// interface ApiResponse{
//     name: string
//     statu: RType
// }
// const response: ApiResponse= {
//     name: 'shuvo',
//     statu: RType.Failer
// }
// console.log(response);
// Lesson 15 - Tuples 
// index ta think rakhar jonno
// let a:[number, string, object] = [4, 'world', {t: 1}]
// a[0] = 25 // we can't send anything
// a.push() we should not push bcz of index. if we use push we can't maintain the order
