let dayNow = new Date();
let dateBirthday = new Date("Dec 12 2003");
let dayDiff = dayNow - dateBirthday;

// console.log(`${Math.floor(dayDiff)}`);
console.log(`${Math.floor(dayDiff / 1000)} Seconds`);
console.log(`${Math.floor(dayDiff / 1000 / 60)} Minutes`);
console.log(`${Math.floor(dayDiff / 1000 / 60 / 60)} Hours`);
console.log(`${Math.floor(dayDiff / 1000 / 60 / 60 / 24)} Days`);
console.log(`${Math.floor(dayDiff / 1000 / 60 / 60 / 24 / 30)} Months`);
console.log(`${Math.floor(dayDiff / 1000 / 60 / 60 / 24 / 30 / 12)} Years`);


// Needed Output
"1247939400 Seconds"
"20798990 Minutes"
"346650 Hours"
"14444 Days"
"481 Months"
"40 Years"

let date = new Date();
date.setFullYear(1980, 0, 1);
date.setHours(0, 0, 1, 0);

console.log(date);

// Needed Output
"Tue Jan 01 1980 00:00:01 GMT+0200 (Eastern European Standard Time)"

let date2 = new Date();
let Month = ["January", "Febraury", "March"]
date2.setDate(-1);
console.log(date2);
console.log(`Previous Month Is ${Month[date2.getMonth()]} And Last Day Is ${date2.getDate()}`);

// Needed Output
"Sat Apr 30 2022 18:13:20 GMT+0200 (Eastern European Standard Time)"
"Previous Month Is April And Last Day Is 30"

console.log(new Date("Oct 25, 1982"));
console.log(new Date(Date.parse("Oct 25, 1982")));
console.log(new Date("82 10 25"));

// Needed Output
"Mon Oct 25 1982 00:00:00 GMT+0200 (Eastern European Standard Time)"
"Mon Oct 25 1982 00:00:00 GMT+0200 (Eastern European Standard Time)"
"Mon Oct 25 1982 00:00:00 GMT+0200 (Eastern European Standard Time)"

let start = performance.now();

for (let i = 1; i < 10000; i++) {
  // console.log(i);
}

let end = performance.now();

console.log(`Loop Took ${Math.floor(end - start)} Milliseconds`);

// Needed Output
"Loop Took 1921 Milliseconds."

// Write Your Generator Function Here
function* gen() {
  let n = 1;

  while (true) {
    const value = n * (n * 100 - 160) + 74;
    yield value;
    n++;
  }
}

let generator = gen();

console.log(generator.next()); // {value: 14, done: false}
console.log(generator.next()); // {value: 154, done: false}
console.log(generator.next()); // {value: 494, done: false}
console.log(generator.next()); // {value: 1034, done: false}
console.log(generator.next()); // {value: 1774, done: false}
console.log(generator.next()); // {value: 2714, done: false}
console.log(generator.next()); // {value: 3854, done: false}
console.log(generator.next()); // {value: 5194, done: false}
console.log(generator.next()); // {value: 6734, done: false}


function* genNumbers() {
  yield* [1, 2, 2, 2, 3, 4, 5];
}
function* genLetters() {
  yield* ["A", "B", "B", "B", "C", "D"];
}

// Write Your Generator Function Here
function* genAll() {
  yield* new Set(genNumbers());
  yield* new Set(genLetters());
}

let generators = genAll();

console.log(generators.next()); // {value: 1, done: false}
console.log(generators.next()); // {value: 2, done: false}
console.log(generators.next()); // {value: 3, done: false}
console.log(generators.next()); // {value: 4, done: false}
console.log(generators.next()); // {value: 5, done: false}
console.log(generators.next()); // {value: "A", done: false}
console.log(generators.next()); // {value: "B", done: false}
console.log(generators.next()); // {value: "C", done: false}
console.log(generators.next()); // {value: "D", done: false}

// main.js File
console.log(calc(modOne.numOne, modOne.numTwo, modOne.numThree)); // 60

// mod-two.js File
let a = 10; // Do Not Edit Names
let b = 20; // Do Not Edit Names
let c = 30; // Do Not Edit Names
