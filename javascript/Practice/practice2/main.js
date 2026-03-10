document.getElementById("elzero");
document.getElementsByClassName("element")[0];
document.getElementsByName("js")[0];
document.getElementsByTagName("div")[0];

document.querySelectorAll("div")[0];
document.querySelectorAll("#elzero")[0];
document.querySelectorAll(".element")[0];
document.querySelectorAll("[name='js']")[0];

document.querySelector("div");
document.querySelector("#elzero");
document.querySelector(".element");
document.querySelector("[name='js']");

document.body.firstElementChild;
document.body.children[0];
document.body.childNodes[1];

let divImgs = document.querySelectorAll(".lol img");
divImgs.forEach((e) => {
  e.setAttribute("src", "https://elzero.org/wp-content/themes/elzero/imgs/logo.png");
  e.setAttribute("alt", "Elzero Logo");
})

let formInput = document.forms[0].childNodes[1];
let spanDollar = document.querySelector("form .Dollar");
let spanPound = document.querySelector("form .Pound");

formInput.oninput = () => {
  spanDollar.innerHTML = formInput.value;
  spanPound.innerHTML = (formInput.value * 52.32).toFixed(2);
}

let divOne = document.querySelector(".one");
let divTwo = document.querySelector(".two");

[divOne.title, divTwo.title] = [divTwo.title, divOne.title];
[divOne.innerHTML, divTwo.innerHTML] = [divTwo.innerHTML, `${divOne.innerHTML} ${document.querySelectorAll("div").length}`];

let imgAlts = document.querySelectorAll(".names img");
imgAlts.forEach((e) => {
  if (e.hasAttribute("alt")) {
    e.setAttribute("alt", "Old");
  } else {
    e.setAttribute("alt", "Elzero New");
  }
})

const form = document.forms[1];
const results = document.querySelector(".results");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const { elements, texts, type } = form;

  if (!elements.value || !texts.value) return;

  results.innerHTML = "";

  for (let i = 0; i < elements.value; i++) {
    const el = document.createElement(type.value);
    el.className = "box";
    el.title = "Element";
    el.id = `id-${i + 1}`;
    el.textContent = texts.value;
    results.append(el);
  }
});

const element = document.querySelector(".our-element");
element.nextElementSibling.remove();

function createDiv(text, cls, title) {
  let div = document.createElement("div");

  div.textContent = text;
  div.classList.add(cls);
  div.title = title;

  return div;
}

element.before(createDiv("Start", "start", "Start Element"));
element.after(createDiv("End", "end", "End Element"));

console.log(document.querySelector(".ahe").lastChild.textContent.trim());

document.onclick = (e) => console.log(`This is ${e.target.tagName}`);