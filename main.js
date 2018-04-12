// let p1 = {
//     name: 'Larry',
//     sayHello: function () {
//         console.log('Hello! My name is ' + p1.name);
//     }
// }
// let p2 = {
//     name: 'Haley',
//     sayHello: function () {
//         console.log('Hello! My name is ' + p2.name);
//     }
// }
// let p3 = {
//     name: 'Daniel',
//     sayHello: function () {
//         console.log('Hello! My name is ' + p3.name);
//     }
// }
// let p4 = {
//     name: 'Heather',
//     sayHello: function () {
//         console.log('Hello! My name is ' + p4.name);
//     }
// }
// let p5 = {
//     name: 'Lauren',
//     sayHello: function () {
//         console.log('Hello! My name is ' + p5.name);
//     }
// }

// p1.sayHello();
// p2.sayHello();
// p3.sayHello();
// p4.sayHello();
// p5.sayHello();

class Person {
    constructor(name, city, age) {
        this.name = name,
            this.city = city,
            this.age = age
    }
    greeting() {
        console.log(`Hey! My name is ${this.name}. I am ${this.age} years old and live in ${this.city}.`);
    }
}

// function Person(name, city, age) {
//     this.name = name,
//         this.city = city,
//         this.age = age
// };

// Person.prototype.greeting = function () {
//     console.log("Hey! My name is " + this.name + ". I am " + this.age + " years old and live in " + this.city + ".");
// };

let p1 = new Person('Larry', 'San Diego', 31);
let p2 = new Person('Haley', 'Trussville', 26);
let p3 = new Person('Daniel', 'Trussville', 23);
let p4 = new Person('Heather', 'Odenville', 29);
let p5 = new Person('Lauren', 'Birmingham', 25);

p1.greeting();
p2.greeting();
p3.greeting();
p4.greeting();
p5.greeting();