const hamburger = document.querySelector("#hamburger");
const header = document.querySelector(".header");
const overlay = document.querySelector(".overlay");
hamburger.addEventListener("click", function () {
  console.log("open sesame");

  if (header.classList.contains("is-active")) {
    header.classList.remove("is-active");
    overlay.classList.add("fade-out");
    overlay.classList.remove("fade-in");
    document.getElementById("sideNav").style.width = "0px";
  } else {
    //open hamburger menu
    header.classList.add("is-active");
    overlay.classList.add("fade-in");
    overlay.classList.remove("fade-out");
    document.getElementById("sideNav").style.width = "250px";
  }
});

// jQuery
// $(document).ready(function () {
//   $("#hamburger").click(function () {
//     $(this).toggleClass("is-active");
//   });
// });
