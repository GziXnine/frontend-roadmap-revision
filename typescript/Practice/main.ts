/** @format */

console.log(Math.floor(1.23)); // 1

// Type Annotations & Any Data Type.
let name: string = "Ahmed";
let age: number = 30;
let isStudent: boolean = true;

console.log(`Name: ${name}, Age: ${age}, Is Student: ${isStudent}`);

// let all: any = "Can be any type";
// all = 42; // No error, 'all' can be of any type.
// all = { name: "Alice", age: 25 }; // Still no error, 'all' can be an object too.

function add(a: number, b: number): number {
  return a + b;
}

// const add = (a: number, b: number): number => a + b;

console.log(add(5, 10)); // 15
console.log(typeof add(5, 10)); // "number"

// Function Optional Parameters & Default Parameters
// The Optional Parameter Should Always Be Last in the Parameter List
function greet(name: string, greeting: string = "Hello", age?: number): string {
  if (age !== undefined) {
    return `${greeting}, ${name} you are ${age} years old!`;
  }

  return `${greeting}, ${name}!`;
}

console.log(greet("Alice")); // "Hello, Alice!"
console.log(greet("Bob", "Hi")); // "Hi, Bob!"
console.log(greet("Charlie", "Hey", 25)); // "Hey, Charlie, you are 25 years old!"

// Rest Parameters
function sum(...numbers: number[]): number {
  return numbers.reduce((acc, curr) => acc + curr, 0);
}

console.log(sum(1, 2, 3, +true)); // 6
console.log(sum(4, 5, 6, 7, 8.5)); // 30

