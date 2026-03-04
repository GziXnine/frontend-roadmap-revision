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