let counter = prompt("Print Number From – To");
let numbers = counter.split("-").sort((a, b) => a - b);

for (let i = parseInt(numbers[0]); i <= parseInt(numbers[1]); i++) {
  console.log(i);
}

setTimeout(() => {
  console.log("Done");
}, 5000);

let counterElement = document.querySelector(".counter");
let counterInterval = setInterval(() => {
  counterElement.textContent -= 1;

  if (counterElement.textContent == 5) {
    window.open("https://elzero.org/", "_blank", "width=400, height=400, top=200, left=200");
  }

  if (counterElement.textContent == 0) {
    clearInterval(counterInterval);
  }
}, 100);

