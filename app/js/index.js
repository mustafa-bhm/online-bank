console.log("js is working ");

/// to add and remove humberger menu class
const btnHamburger = document.querySelector("#btnHumburger");
const header = document.querySelector(".header");
const overlay = document.querySelector(".overlay");

btnHamburger.addEventListener("click", function () {
  console.log("clickeeed");
  if (header.classList.contains("open")) {
    // to close menu
    header.classList.remove("open");
    overlay.classList.remove("fade-in");
    overlay.classList.add("fade-out");
  } else {
    // to open menu
    header.classList.add("open");
    overlay.classList.remove("fade-out");
    overlay.classList.add("fade-in");
  }
});
