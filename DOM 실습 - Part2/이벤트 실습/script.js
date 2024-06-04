// const spanEls = document
//   .querySelector("span")
//   .addEventListener("click", function () {
//     if (document.getElementsByClassName("show")[0].style.display === "block") {
//       document.getElementsByClassName("show")[0].style.display = "none";
//     } else {
//       document.getElementsByClassName("show")[0].style.display = "block";
//     }

//     if (document.getElementsByClassName("myname")[0].style.display === "none") {
//       document.getElementsByClassName("myname")[0].style.display = "block";
//     } else {
//       document.getElementsByClassName("myname")[0].style.display = "none";
//     }
//   });

//답안
const showEl = document.querySelector("#show");
const hiddenEl = document.querySelector("#myname");

function toggleShow(el1, el2) {
  el1.style.display = "none";
  el2.style.display = "block";
}

showEl.addEventListener("click", function () {
  toggleShow(showEl, hiddenEl);
});
hiddenEl.addEventListener("click", function () {
  toggleShow(hiddenEl, showEl);
});
