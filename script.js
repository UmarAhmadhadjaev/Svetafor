// DOM => Document Object Model
// DOM Manipulation

// let element = document.querySelector("div");
// console.dir(element.querySelector("h1"));

// tag => getElementsByTagName
// class => getElementByClassName
// id => getElementById
// querySelector
// querySelectorAll

let elRed = document.querySelector("red");
let elYellow = document.querySelector("yellow");
let elGreen = document.querySelector("green");

setInterval(() => {
  setTimeout(() => {
    elRed.style.opacity = "1";
  }, 2000);

  setTimeout(() => {
    elRed.style.opacity = "0.4";
    elYellow.style.opacity = "1";
  }, 4000);

  setTimeout(() => {
    elYellow.style.opacity = "0.4";
  }, 4500);

  setTimeout(() => {
    elYellow.style.opacity = "1";
  }, 5000);

  setTimeout(() => {
    elYellow.style.opacity = "0.4";
  }, 5500);

  setTimeout(() => {
    elYellow.style.opacity = "1";
  }, 6000);

  setTimeout(() => {
    elYellow.style.opacity = "0.4";
    elGreen.style.opacity = "1";
  }, 8000);

  setTimeout(() => {
    elYellow.style.opacity = "0.4";
    elGreen.style.opacity = "1";
  }, 8500);

  setTimeout(() => {
    elYellow.style.opacity = "0.4";
  }, 9000);

  setTimeout(() => {
    elYellow.style.opacity = "1";
  }, 9500);

  setTimeout(() => {
    elYellow.style.opacity = "0.4";
  }, 10000);  
}, 11000);
