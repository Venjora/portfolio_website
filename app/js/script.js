const hamburger = document.querySelector("#hamburger");
const header = document.querySelector(".header");
const overlay = document.querySelector(".overlay");
const sideNav = document.querySelector("#sideNav");
const body = document.querySelector("#main");

hamburger.addEventListener("click", function () {
  console.log("open sesame");

  if (header.classList.contains("is-active")) {
    header.classList.remove("is-active");
    sideNav.style.width = "0px";
  } else {
    //open hamburger menu
    header.classList.add("is-active");
    sideNav.style.width = "250px";
  }
});

// jQuery
// $(document).ready(function () {
//   $("#hamburger").click(function () {
//     $(this).toggleClass("is-active");
//   });
// });
