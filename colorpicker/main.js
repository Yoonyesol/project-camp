/*
  색상 컬러 클릭시 body 태그의 배경 색상을 
  선택한 컬러로 변경해주세요.
*/

// const radioButtons = document.querySelectorAll("input[type=radio]");

// radioButtons.forEach((radio) => {
//   radio.addEventListener("click", function () {
//     document.querySelector("body").style.color = document.querySelector(
//       "input[type=radio]:checked"
//     ).value;
//   });
// });

//여러 개의 문서객체 선택
const inputEls = document.querySelectorAll("input");

//NodeList는 브라우저에서 제공하는 객체
// console.dir(inputEls);

const arrayEls = Array.from(inputEls); //유사배열 객체를 배열로 바꿔준다.
console.dir(arrayEls);

arrayEls.forEach((inputEl) => {
  console.log(inputEl);
  inputEl.addEventListener("click", function () {
    //위아래 동일
    console.log(this.value);
    console.log(inputEl);
    console.log(inputEl.value);
    document.body.style.backgroundColor = this.value;
  });
});

// const inputEl1 = document.querySelector("#hat-color-red");
// inputEl1.addEventListener("click", function () {
//   //위아래 동일
//   console.log(this.value);
//   console.log(inputEl1);
//   console.log(inputEl1.value);
//   document.body.style.backgroundColor = this.value;
// });
