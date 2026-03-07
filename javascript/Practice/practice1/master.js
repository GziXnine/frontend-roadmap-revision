let arr1ss = ["Ahmed", "Sameh", "Sayed"];
let arr2ss = ["Mohamed", "Gamal", "Amir"];
let arr3ss = ["Haytham", "Shady", "Mahmoud"];

// Play With Arrays To Prepare For Destructuring
// Write Your Destructuring Assignment Here
let [, as, bs] = arr3ss, [cs, ,] = arr1ss;

console.log(`My Best Friends: ${as}, ${bs}, ${cs}`);

// My Best Friends: Shady, Mahmoud, Ahmed

const memberss = {
  age: 30,
  working: false,
  country: "Egypt",
  hobbies: ["Reading", "Swimming", "Programming"],
};

// Write Your Destructuring Assignment Here
let { age: ass, working: wss, country: css, hobbies: [h1ss, , h3ss] } = memberss;

console.log(`My Age Is ${ass} And Iam ${wss ? "" : "Not"} Working`);
// My Age Is 30 And Iam Not Working

console.log(`I Live in ${css}`);
// I Live in Egypt

console.log(`My Hobbies: ${h1ss} And ${h3ss}`);
// My Hobbies: Reading And Programming

// =====================================================================

const game = {
  title: "YS",
  developer: "Falcom",
  releases: {
    "Oath In Felghana": ["USA", "Japan"],
    "Ark Of Napishtim": {
      US: "20 USD",
      JAP: "10 USD",
    },
    Origin: "30 USD",
  },
};

// Write Your Destructuring Assignment/s Here
let { title: ts, developer: d, releases: { "Oath In Felghana": [us, js], "Ark Of Napishtim": { US: u_price, JAP: j_price }, Origin: or } } = game;
let [o, asss] = Object.keys(game.releases);

console.log(`My Favourite Games Style Is ${ts} Style`);
// My Favourite Games Style Is YS Style

console.log(`And I Love ${d} Games`);
// And I Love Falcom Games

console.log(`My Best Release Is ${o} It Released in ${us} & ${js}`);
// My Best Release Is Oath In Felghana It Released in USA & Japan

console.log(`Although I Love ${asss}`);
// Although I Love Ark Of Napishtim

console.log(`${asss} Price in USA Is ${u_price}`);
// Ark Of Napishtim Price in USA Is 20 USD

console.log(`${asss} Price in Japan Is ${j_price}`);
// Ark Of Napishtim Price in Japan Is 10 USD

console.log(`Origin Price Is ${or}`);
// Origin Price Is 30 USD

let setOfNumbers = new Set([10]);
setOfNumbers.add(20).add(setOfNumbers.size);

console.log(setOfNumbers);
console.log(Array.from(setOfNumbers)[setOfNumbers.size - 1]);

let myFriends = ["Osama", "Ahmed", "Sayed", "Sayed", "Mahmoud", "Osama"];
console.log([...new Set(myFriends)].sort());

let myInfo = {
  username: "Osama",
  role: "Admin",
  country: "Egypt",
};

let myMap = new Map(Object.entries(myInfo));
console.log(myMap);
console.log(myMap.size);
console.log(myMap.has("role"));

// Needed Output
// Map(3) { 'username' => 'Osama', 'role' => 'Admin', 'country' => 'Egypt' }
// 3
// true

let theNumber = 100020003000;
console.log(Number([...new Set(theNumber.toString().split("").sort())].join("")));

// Needed Output
// 123
let theName = "Elzero";
console.log([...theName]);
console.log(theName.split(""));
console.log(Array.from(theName));
console.log([...new Set(theName)]);
console.log(Array(...theName));

// Needed Output
// ['E', 'l', 'z', 'e', 'r', 'o']

let chars = ["Z", "Y", "A", "D", "E", 10, 1];

let numbersCount = chars.filter(e => typeof e === "number").length;
chars.sort((a, b) => typeof a === "number" ? -1 : 1).copyWithin(0, numbersCount, numbersCount * 2);

console.log(chars);
// Needed Output
// ['A', 'B', 'C', 'A', 'B', 'C', 'D', 'E']

let numsOne = [1, 2, 3];
let numsTwo = [4, 5, 6];

console.log([...numsOne, ...numsTwo]);
// Needed Output
// [1, 2, 3, 4, 5, 6]

let n1 = [10, 30, 10, 20];
let n2 = [30, 20, 10];

console.log([...n1, ...n2].length * Math.max(...n1, ...n2));
// Needed Output
// 210

let ip = "2001:db8:3333:4444:5555:6666:7777:8888";
console.log(ip.match(/(\w+|:)+/ig));

let specialNames = "Os10O OsO Os100O Osa100O Os1000 Os100m";

console.log(specialNames.match(/Os\d*O/ig));
// Output
// ['Os10O', 'OsO', 'Os100O']

let phone = "+(995)-123 (4567)";
console.log(phone.match(/\+\(\d{3}\)-\d{3} \(\d{4}\)/ig));

let date1 = "25/10/1982";
let date2 = "25 - 10 - 1982";
let date3 = "25 10 1982";
let date4 = "25 10 82";

let re = /(\d+(\/|\s-\s|\s))+\d{2,}/ig; // Write Pattern Here

console.log(date1.match(re)); // "25/10/1982"
console.log(date2.match(re)); // "25 - 10 - 1982"
console.log(date3.match(re)); // "25 10 1982"
console.log(date4.match(re)); // "25 10 82"