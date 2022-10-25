console.log("js is working ");

/// to add and remove humberger menu class
const btnHamburger = document.querySelector("#btnHumburger");

btnHamburger.addEventListener("click", function () {
  console.log("clickeeed");
  if (btnHamburger.classList.contains("open")) {
    btnHamburger.classList.remove("open");
  } else {
    btnHamburger.classList.add("open");
  }
});
