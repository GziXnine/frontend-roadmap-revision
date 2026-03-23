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
let myString = "This is a string using type alias.";
console.log(myString);
let value = "A string or a number";
console.log(value);
value = 42;
console.log(value);
function getAction(button) {
    const actions = {
        up: "Move Up",
        down: "Move Down",
        right: "Move Right",
        left: "Move Left",
    };
    return actions[button];
}
console.log(getAction("up"));
console.log(getAction("down"));
console.log(getAction("right"));
console.log(getAction("left"));
let compare = (n, b) => {
    if (n < b)
        return -1;
    if (n > b)
        return 1;
    return 0;
};
console.log(compare(5, 10));
console.log(compare(10, 5));
console.log(compare(7, 7));
let myNumber = -1;
console.log(myNumber);
let article = [11, "Title One", true];
console.log(article);
article = [12, "Title Two", false];
console.log(article);
const [id, title, published] = article;
console.log(id);
console.log(title);
console.log(published);
function logMessage(message) {
    console.log(message);
}
logMessage("This is a log message.");
var Level;
(function (Level) {
    Level[Level["Kids"] = 15] = "Kids";
    Level[Level["Easy"] = 9] = "Easy";
    Level[Level["Medium"] = 6] = "Medium";
    Level[Level["Hard"] = 3] = "Hard";
})(Level || (Level = {}));
let lvl = "Medium";
if (lvl === "Medium") {
    console.log(`The Level Is ${lvl} And Number Of Seconds Is ${Level[lvl]}`);
}
let user = {
    name: "Alice",
    age: 25,
    isAdmin: true,
};
console.log(user);
//# sourceMappingURL=main.js.map