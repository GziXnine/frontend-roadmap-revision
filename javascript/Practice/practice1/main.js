document.querySelector("h1").style.color = "blue";


window.onload = function () {
  document.querySelector("h1").style.color = "red";
}

//
/* */

/**
 * Styling Console
    - Directive %c
 */

console.log(
  "Hello From %cJS %cFile",
  "color: red; font-size: 40px",
  "color: blue; font-size: 40px"
);

// Console is a Web API (Application Programming Interface) Not A JavaScript Method. It Is A Method That The Browser Provide To Us To Use It In JavaScript.

console.log(typeof 5000); // Number
console.log(typeof 5000.99); // Number
console.log(typeof [10, 15, 17]); // Object (Array Is A Type Of Object)
console.log(typeof { name: "Osama", age: 17, country: "Eg" }); // Object
console.log(typeof true); // Boolean
console.log(typeof undefined); // Undefined (Variable That Not Assigned To Any Value)
console.log(typeof null); // Object (This Is A Bug In JavaScript, It Should Be Null)

// I Can Use ID To Access The Element In JavaScript But I Can't Use Class Name Or Tag Name. Because ID Is Unique And Class Name And Tag Name Can Be Repeated.
// Losely Typed vs Strongly Typed
// JavaScript Is A Losely Typed Language Because We Can Change The Type Of The Variable After Declaring It. For Example:
var myVar = "Hello";
console.log(myVar); // String
myVar = 100;
console.log(myVar); // Number
myVar = true;
console.log(myVar); // Boolean

// camalCase

// var vs let vs const
// var Is Function Scoped And Can Be Redeclared And Updated. Let Is Block Scoped And Can't Be Redeclared But Can Be Updated. Const Is Block Scoped And Can't Be Redeclared And Can't Be Updated. For Example:
var myVar1 = "Hello";
var myVar1 = "World"; // This Is Allowed
myVar1 = "JavaScript"; // This Is Allowed
console.log(myVar1); // JavaScript

// Template Literals

// Challenge 1
let titleName = "Elzero", decsName = "Elzero Web School", dateName = "25/10";
let result = `
<div class="card">
  <h1>Hello ${titleName}</h1>
  <p>${decsName}</p>
  <span>${dateName}</span>
</div>
`
document.write(result.repeat(4));

console.log(10 - "Ahmed"); // NaN
console.log(typeof NaN); // Number. This Is A Quirk In JavaScript.

console.log(+"-100"); // -100
console.log(+"Osama"); // NaN
console.log(-"Osama"); // NaN
console.log(-null); // -0
console.log(Number(null)); // 0
console.log(Number("15.5")); // 15.5

// - Lexical Scope
// - Strict Mode

let chosen = 2;

let myFriends = [
  { title: "Osama", age: 39, available: true, skills: ["HTML", "CSS"] },
  { title: "Ahmed", age: 25, available: false, skills: ["Python", "Django"] },
  { title: "Sayed", age: 33, available: true, skills: ["PHP", "Laravel"] },
];

let { title: t, age: a, available: av, skills: [, s2] } = myFriends[chosen - 1];

console.log(`${t}`);
console.log(`${a}`);
console.log(`${av ? "Available" : "Not Available"}`);
console.log(`${s2}`);

// WeakSet Use Cases
/*
  1. Store Objects Only
  2. No Size Property
  3. No Clear Method
  4. No Keys, Values, Entries Methods
  5. No ForEach Method
  6. Garbage Collector Can Remove Items If They Become Inaccessible
  7. Use Case: Store Objects And Removes Them Once They Become Inaccessible
*/


// - performance.now()
// - performance.mark()

//  Asynchronous vs Synchronous Programming
// - JavaScript Is A Single-Threaded
// - Multi Threaded Languages

// XMLHttpRequest, Promise, Fetch => Async & Await With Try, Catch, Finally

console.log("%cElzero %cWeb %cSchool",
  `color: red;
font-size: 40px;`,
  `color: green;
font-size: 40px;
font-weight: bold;`,
  `color: white;
font-size: 40px;
background-color: blue;
`);

console.table(["Elzero", "Ahmed", "Sameh", "Gamal", "Aya"]);

// Add Variables Here
let numberOne = 10, numberTwo = 20;
// Ouput
console.log(numberOne + "" + numberTwo); // Normal Concatenate => 1020
console.log(typeof (numberOne + "" + numberTwo)); // Normal Concatenate => String
console.log(`${numberOne}${numberTwo}`); // Template Literals Way => 1020
console.log(typeof `${numberOne}${numberTwo}`); // Template Literals Way => String

console.log(numberOne + "\n" + numberTwo);
/*
  Normal Concatenate
  20
  10
*/

console.log(`${numberOne}
${numberTwo}`);
/*
  Template Literals Way
  20
  10
*/
let elzero = document.getElementById("elzero");

console.log(elzero.innerHTML); // object
console.log(typeof elzero); // object

let a1 = 21;
let b1 = 20;

console.log("_" + (a1 + "_" + b1).repeat(4) + "_"); // _21_2021_2021_2021_20_
console.log("_" + `${a1}_${b1}`.repeat(4) + "_"); // _21_2021_2021_2021_20_

console.log((Number.MAX_SAFE_INTEGER).toString().length); // 16

let myVar12 = "100.56789 Views";

console.log(parseInt(myVar12)); // 100
console.log(+parseFloat(myVar12).toFixed(2)); // 100.57


let num = 10;

console.log(+num.toString().length); // 2

let flt = 10.4;

console.log(parseInt(flt)); // 10
console.log(Math.round(flt)); // 10
console.log(Math.floor(flt)); // 10
console.log(Math.trunc(flt)); // 10
console.log(Math.ceil(--flt)); // 10

console.log(Math.floor(Math.random() * 5)); // 0 || 1 || 2 || 3 || 4

let userName = "Elzero";
console.log(userName[3]); // e
console.log(userName[0].toLowerCase()); // e
console.log(userName.slice(3, 4)); // e
console.log(userName.substring(3, 4)); // e
console.log(userName.substr(3, 1)); // e
console.log(userName[3].repeat(3)); // eee

let word = "Elzero";
let letterZ = "z";
let letterE = "e";
let letterO = "O";

console.log(word.includes(letterZ)); // True
console.log(word.includes(letterE)); // True
console.log(word.includes(letterO.toLowerCase())); // True

// Edit What You Want Here

let num1 = 15;
let num2 = 5;
let num3 = 15;
let num4 = 46;

/*
  Do Not Edit Below This Line
  Needed Output
  True 7 Times
*/

// Condition 1

if (num1 > num2) {
  console.log("True");
} else {
  console.log("False");
}

// Condition 2

if (num1 > num2 && num1 < num4) {
  console.log("True");
} else {
  console.log("False");
}

// Condition 3

if (num1 > num2 && num1 === num3) {
  console.log("True");
} else {
  console.log("False");
}

// Condition 4

if ((num1 + num2) < num4) {
  console.log("True");
} else {
  console.log("False");
}

// Condition 5

if ((num1 + num3) < num4) {
  console.log("True");
} else {
  console.log("False");
}

// Condition 6

if ((num1 + num2 + num3) < num4) {
  console.log("True");
} else {
  console.log("False");
}

// Condition 7

if (num4 - (num1 + num3) + num2 === 21) {
  console.log("True");
} else {
  console.log("False");
}

let myFriends1 = ["Ahmed", "Elham", "Osama", "Gamal"];
let nums = 3;

// Method 1
console.log(myFriends1.slice(0, 3)); // ["Ahmed", "Elham", "Osama"];

// Method 2
myFriends1.length = nums;
console.log(myFriends1); // ["Ahmed", "Elham", "Osama"];

let friends = ["Ahmed", "Eman", "Osama", "Gamal"];

// Write Your Code Here
friends.pop();
friends.shift();
console.log(friends); // ["Eman", "Osama"]

let arrOne = ["C", "D", "X"];
let arrTwo = ["A", "B", "Z"];
let finalArr = [];

// Write One Single Line Of Code
finalArr = [...arrOne, ...arrTwo].sort().reverse();

console.log(finalArr); // ["Z", "X", "D", "C", "B", "A"]

let website = "Go";
let words = [`${website}ogle`, "Facebook", ["Elzero", "Web", "School"]];

console.log(words[2][0]); // ZERO

let needle = "JS";
let haystack = ["PHP", "JS", "Python"];

// Write 3 Solutions
console.log(haystack.includes(needle)); // Solution 1 => True
console.log(haystack.indexOf(needle) !== -1);
console.log(haystack.lastIndexOf(needle) !== -1);

let arr1 = ["A", "C", "X"];
let arr2 = ["D", "E", "F", "Y"];
let allArrs = [];

// Your Code Here
allArrs = [...arr1, ...arr2].sort().slice(-3).join("").toLowerCase();

console.log(allArrs); // fxy

let start = 10;
let end = 0;
let stop1 = 3;

for (let i = start; i >= end; i--) {
  console.log(i > 9 ? i : 0 + "" + i);
  if (i === stop1) break;
}

let friends2 = ["Ahmed", "Sayed", "Eman", "Mahmoud", "Ameer", "Osama", "Sameh"];
let letter2 = "a";
let count = 1;

// Output
// "1 => Sayed"
// "2 => Eman"
// "3 => Mahmoud"
// "4 => Osama"
// "5 => Sameh"
for (let i = 0; i < friends2.length; i++) {
  if (!friends2[i].startsWith(letter2.toUpperCase())) {
    console.log(`${count++} => ${friends2[i]}`);
  }
}

let start4 = 0;
let swappedName2 = "elZerO";
let results = "";

// Output
// "ELzERo"
for (let i = start4; i < swappedName2.length; i++) {
  results += swappedName2[i] === swappedName2[i].toUpperCase() ? swappedName2[i].toLowerCase() : swappedName2[i].toUpperCase();
}

console.log(results);

let startss = 0;
let mix = [1, 2, 3, "A", "B", "C", 4];

for (let i = startss; i < mix.length; i++) {
  if (mix[i] === 1) continue;
  if (typeof mix[i] === "number") {
    console.log(mix[i]);
  }
}

// Output
// 2
// 3
// 4

function calculate(firstNum, secondNum, operation) {
  if (secondNum === undefined) {
    console.log("Second Number Not Found");
  }
  else if (operation === "add" || operation === undefined) {
    console.log(firstNum + secondNum);
  }
  else if (operation === "subtract") {
    console.log(firstNum - secondNum);
  }
  else if (operation === "multiply") {
    console.log(firstNum * secondNum);
  }
}

// Needed Output
calculate(20); // Second Number Not Found
calculate(20, 30); // 50
calculate(20, 30, 'add'); // 50
calculate(20, 30, 'subtract'); // -10
calculate(20, 30, 'multiply'); // 600

function createSelectBox(startYear, endYear) {
  document.write(`<select>`);
  for (let i = startYear; i <= endYear; i++) {
    document.write(`<option value="${i}">${i}</option>`);
  }
  document.write(`</select>`);
}
createSelectBox(2000, 2021);

multiply(10, 20); // 200
multiply("A", 10, 30); // 300
multiply(100.5, 10, "B"); // 1000

function multiply(...numbers) {
  let result = 1;
  numbers.forEach(element => {
    if (typeof element === "number") {
      result *= parseInt(element);
    }
  });
  console.log(result);
}

function getDetails(zName, zAge, zCountry) {
  function namePattern(zName) {
    return zName.split(" ")[0] + " " + zName.split(" ")[1][0].toUpperCase() + ".";
  }
  function ageWithMessage(zAge) {
    return `Your Age Is ${parseInt(zAge)}`;
  }
  function countryTwoLetters(zCountry) {
    return `You Live In ${zCountry.slice(0, 2).toUpperCase()}`;
  }
  function fullDetails() {
    return `Hello ${namePattern(zName)}, ${ageWithMessage(zAge)}, ${countryTwoLetters(zCountry)}`;
  }
  return fullDetails(); // Do Not Edit This
}

console.log(getDetails("Osama Mohamed", "38 Is My Age", "Egypt"));
// Hello Osama M., Your Age Is 38, You Live In EG

console.log(getDetails("Ahmed ali", "32 Is The Age", "Syria"));
// Hello Ahmed A., Your Age Is 32, You Live In SY

// Currying Function Technique
let checker = (zName) => (status) => (salary) => status === "Available" ? `${zName}, My Salary Is ${salary}` : `Iam Not Avaialble`;

console.log(checker("Osama")("Available")(4000)); // Osama, My Salary Is 4000
console.log(checker("Ahmed")("Not Available")()); // Iam Not Avaialble

function specialMix(...data) {
  let result = data.reduce((acc, current) => {
    if (typeof current === "number") {
      return acc + current;
    } else if (typeof current === "string") {
      let num = parseInt(current);
      if (!isNaN(num)) {
        return acc + num;
      } else {
        return acc;
      }
    }
  }, 0);

  return !result ? "All Is String" : result;
}

console.log(specialMix(10, 20, 30)); // 60
console.log(specialMix("10Test", "Testing", "20Cool")); // 30
console.log(specialMix("Testing", "10Testing", "40Cool")); // 50
console.log(specialMix("Test", "Cool", "Test")); // All Is Strings

let mixss = [1, 2, 3, "E", 4, "l", "z", "e", "r", 5, "o"];

// Elzero

let resultss = mixss.filter((c) => typeof c === "string").join("");
console.log(resultss);

let myString = "EElllzzzzzzzeroo";
console.log([...new Set(myString)].join(""));

let res = myString.split("").filter((e, i, arr) => arr.indexOf(e) === i).join("");
console.log(res);
// Elzero

let myArray = ["E", "l", "z", ["e", "r"], "o"];

let resultArray = myArray.reduce((acc, current) => {
  if (Array.isArray(acc) || Array.isArray(current))
    return [...acc, ...current];

  return [...acc, current];
}, []);

console.log(resultArray.join(""));
// Elzero

let numsAndStrings = [1, 10, -10, -20, 5, "A", 3, "B", "C"];

let numsAndStringsResult = numsAndStrings.filter((e) => typeof e === "number").map((e) => -e);
console.log(numsAndStringsResult);
// [-1, -10, 10, 20, -5, -3]

let nusms = [2, 12, 11, 5, 10, 1, 99];

console.log(nusms.reduce((acc, current) => current % 2 ? acc + current : acc * current, 1));
// 500

// Create Your Object Here
let member = {
  name: "Elzero",
  age: 38,
  country: "Egypt",
  fullDetails: function() {
    return `My Name Is ${this.name}, My Age Is ${this.age}, I Live in ${this.country}`;
  }
};

console.log(member.name); // Elzero
console.log(member.age); // 38
console.log(member.country); // Egypt
console.log(member.fullDetails());
// My Name Is Elzero, My Age Is 38, I Live in Egypt


// Method One
// Create Your Object Here
let ObjMethodOne = {
  property: "Method One",
}

console.log(ObjMethodOne.property); // "Method One"

// Method Two
// Create Your Object Here
let ObjMethodTwo = new Object({
  property: "Method Two"
});

console.log(ObjMethodTwo.property); // "Method Two"

// Method Three
// Create Your Object Here
let ObjMethodThree = new Object();
ObjMethodThree.property = "Method Three";

console.log(ObjMethodThree.property); // "Method Three"

// Method Four
// Create Your Object Here
let ObjMethodFour = Object.create({
  property: "Method Four"
});

console.log(ObjMethodFour.property); // "Method Four"

let z = 1;

let threeNums = {
  b: 2,
  c: 3,
  d: 4,
};

let twoNums = {
  e: 5,
  f: 6,
};

// Create Your Object Here in One Line
let finalObject = Object.assign({z}, threeNums, twoNums);

console.log(finalObject);

/*
  a: 1
  b: 2
  c: 3
  d: 4
  e: 5
  f: 6
*/

// The Object To Work With
let myFavGames = {
  "Trinity Universe": {
    publisher: "NIS America",
    price: 40,
  },
  "Titan Quest": {
    publisher: "THQ",
    bestThree: {
      one: "Immortal Throne",
      two: "Ragnarök",
      three: "Atlantis",
    },
    price: 50,
  },
  YS: {
    publisher: "Falcom",
    bestThree: {
      one: "Oath in Felghana",
      two: "Ark Of Napishtim",
      three: "origin",
    },
    price: 40,
  },
};

// Code One => How To Get Object Length ?
let objectLength = Object.keys(myFavGames).length;

for (let i = 0; i < objectLength; i++) {
  console.log(`The Game Name Is ${Object.keys(myFavGames)[i]}`);
  console.log(`The Publisher Is ${myFavGames[Object.keys(myFavGames)[i]].publisher}`);
  console.log(`The Price Is ${myFavGames[Object.keys(myFavGames)[i]].price}`);

  // Check If Nested Object Has Property (bestThree)
  if (myFavGames[Object.keys(myFavGames)[i]].bestThree !== undefined) {
    console.log("- Game Has Releases");
    console.log(`First => ${myFavGames[Object.keys(myFavGames)[i]].bestThree.one}`);
    console.log(`Second => ${myFavGames[Object.keys(myFavGames)[i]].bestThree.two}`);
    console.log(`Third => ${myFavGames[Object.keys(myFavGames)[i]].bestThree.three}`);
  }
  console.log("#".repeat(20));
}