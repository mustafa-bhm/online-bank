console.log("js is working ");

/// to add and remove humberger menu class
const body = document.querySelector("body");
const btnHamburger = document.querySelector("#btnHumburger");
const header = document.querySelector(".header");
const overlay = document.querySelector(".overlay");
const fadeElms = document.querySelectorAll(".has-fade");

btnHamburger.addEventListener("click", function () {
  console.log("clickeeed");
  if (header.classList.contains("open")) {
    // to close menu
    body.classList.remove("noscroll");
    header.classList.remove("open");
    fadeElms.forEach(function (element) {
      element.classList.remove("fade-in");
      element.classList.add("fade-out");
    });
  } else {
    // to open menu
    body.classList.add("noscroll");
    header.classList.add("open");
    fadeElms.forEach(function (element) {
      element.classList.remove("fade-out");
      element.classList.add("fade-in");
    });
  }
});
