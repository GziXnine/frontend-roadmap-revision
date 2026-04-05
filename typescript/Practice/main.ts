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

// Type Alias
type ts = string;
let myString: ts = "This is a string using type alias.";
console.log(myString);

type stAndNum = string | number;
let value: stAndNum = "A string or a number";
console.log(value);
value = 42;
console.log(value);

type buttons = {
  up: string;
  down: string;
  right: string;
  left: string;
};

function getAction(button: keyof buttons): string {
  const actions: buttons = {
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

// Data Types => string, number, boolean, null, undefined, symbol, bigint, object, array, tuple, enum, any, void, never, unknown
// Literal Types

type nums = -1 | 0 | 1;

let compare = (n: number, b: number): nums => {
  if (n < b) return -1;
  if (n > b) return 1;
  return 0;
};

console.log(compare(5, 10)); // -1
console.log(compare(10, 5)); // 1
console.log(compare(7, 7)); // 0

// let myNumber: nums = 5; // Error: Type '5' is not assignable to type 'nums'.
let myNumber: nums = -1;
console.log(myNumber);

// Tuple.
let article: readonly [number, string, boolean] = [11, "Title One", true];
console.log(article);

article = [12, "Title Two", false];
// article.push(100); // Error: Property 'push' does not exist on type 'readonly [number, string, boolean]'.
console.log(article);

const [id, title, published] = article;
console.log(id);
console.log(title);
console.log(published);

// Void & Never
function logMessage(message: string): void {
  console.log(message);
}

logMessage("This is a log message.");

// function throwError(message: string): never {
//   throw new Error(message);
// }

// try {
//   throwError("This is an error message.");
// } catch (error) {
//   console.error(error);
// }

enum Level {
  Kids = 15,
  Easy = 9,
  Medium = Easy - 3,
  Hard = 3,
}

let lvl: string = "Medium";

if (lvl === "Medium") {
  console.log(
    `The Level Is ${lvl} And Number Of Seconds Is ${Level[lvl as keyof typeof Level]}`,
  );
}

// TypeScript Is Not Performing Any Check To Make Sure Type Assertion Is Valid

// Type Annotations With Objects
interface User {
  id?: number; // Optional Property
  name: string;
  age: number;
  isAdmin: boolean;
  sayWelcome(): void; // Method
  sayHello: () => void; // Arrow Function
}

// Interface Reopening
interface User {
  getDouble: (num: number) => number;
}

let user: User = {
  name: "Alice",
  age: 25,
  isAdmin: true,
  sayWelcome() {
    console.log(`Welcome, ${this.name}!`);
  },
  sayHello: () => console.log("Hello, I am Alice!"),
  getDouble(num: number) {
    return num * 2;
  },
};

console.log(user);

// ? => Optional Property
// Readonly => Cannot Reassign The Value Of The Property After Initialization

// Class Access Modifiers And Parameters Properties
interface Settings {
  theme: string;
  fontSize?: number;
  save: () => void;
}

class UserSettings implements Settings {
  constructor(
    public name: string,
    public theme: string,
    public fontSize: number = 14, // Default Value
  ) {}

  save() {
    console.log(
      `Settings saved with theme: ${this.theme} and font size: ${this.fontSize}`,
    );
  }

  updateTheme(newTheme: string) {
    this.theme = newTheme;
    console.log(`Theme updated to: ${this.theme}`);
  }
}

const userSettings = new UserSettings("Alice", "dark");
console.log(userSettings);
userSettings.save();
userSettings.updateTheme("light");
userSettings.save();

// -- JSDoc --
// JSDoc is a documentation generator for JavaScript. It allows you to add type annotations and documentation comments to your JavaScript code, which can be used by tools like TypeScript to provide type checking and IntelliSense support.

// -- tsconfig.json --
// The tsconfig.json file is a configuration file for TypeScript projects. It specifies the compiler options and settings for the TypeScript compiler. In this project, we have set the "noImplicitOverride" option to true, which requires that any method that overrides a method in a base class must be explicitly marked with the "override" keyword. This helps to catch potential errors when overriding methods and ensures that the developer is aware of the override.
