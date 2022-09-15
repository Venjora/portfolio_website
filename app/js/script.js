const hamburger = document.querySelector("#hamburger");
const header = document.querySelector(".header");

hamburger.addEventListener("click", function () {
  console.log("open sesame");
  if (header.classList.contains("is-active")) {
    header.classList.remove("is-active");
  } else {
    header.classList.add("is-active");
  }
});

// jQuery
// $(document).ready(function () {
//   $("#hamburger").click(function () {
//     $(this).toggleClass("is-active");
//   });
// });
