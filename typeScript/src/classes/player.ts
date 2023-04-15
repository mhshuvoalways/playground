import {isPlayer} from '../interfaces/isPlayer'

export class Player implements isPlayer{
    constructor(
        public name: string,
        public age: number,
        readonly country: string
    ){}

    play() {
        console.log(`${this.name, this.age, this.country}`);
    }
}