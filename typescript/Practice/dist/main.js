"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
console.log(Math.floor(1.23));
let name = "Ahmed";
let age = 30;
let isStudent = true;
console.log(`Name: ${name}, Age: ${age}, Is Student: ${isStudent}`);
function add(a, b) {
    return a + b;
}
console.log(add(5, 10));
console.log(typeof add(5, 10));
function greet(name, greeting = "Hello", age) {
    if (age !== undefined) {
        return `${greeting}, ${name} you are ${age} years old!`;
    }
    return `${greeting}, ${name}!`;
}
console.log(greet("Alice"));
console.log(greet("Bob", "Hi"));
console.log(greet("Charlie", "Hey", 25));
function sum(...numbers) {
    return numbers.reduce((acc, curr) => acc + curr, 0);
}
console.log(sum(1, 2, 3, +true));
console.log(sum(4, 5, 6, 7, 8.5));
//# sourceMappingURL=main.js.map