// // day 6 on ryekers website
// // // let blueDivs = document.getElementsByClassName("blue");
// // // let h1 = document.getElementsByTagName("h1");
// // // let para = document.getElementById("para")
// // // // returns the first instance of an element that has the id para;
// // // let queryBlues = document.querySelectorAll("blue")
// // // console.log(queryBlues);
//
// // function domSelect(element, method) {
// //   switch(method.toLowerCase()) {
// //     case 'getelementsbytagname' :
// //     method = getElementsByTagName;
// //     break;
// //   }
// //   let elementToQuery = document.method(element);
// //   console.log()
// // }
// // // let el = prompt("Give me an element");
// // // let method = prompt("Give me a method")
// // // domSelect(el, method)
// //
// const button = document.querySelector(".btn-danger");
// const div = document.querySelector(".btn-danger")
//
// button.addEventListener(
//   "click", (e) => {
//     let newPTag = document.createElement("span");
//     newPTag.textContent = "Hey there, I see you clicked on the button"
//     button.appendChild(newPTag)
//   }
//   // callback function because JS is being called back to this point in the code when the user clicks on the button.
// )
// button.addEventListener("mouseleave", (e) => {
//   div.className = "red-button"
// })
// button.addEventListener("mouseenter", (e) => {
//   div.className = "blue-button"
// });
// // day 7 on ryekers website
//
// // how to access dynamic values and to not get rid of them but change them and access them
//
// button.addEventListener("click", (e) => {
//   div.classList.add("white-text") // allows you to just add on a class to the object called
// });
//
// function checkForRed(element) {
//   element.classList.contains("red-text"); // this checks to see if the current object called contains the class of red text
// }
//
//
// // img as an example
//
// const myImg = document.querySelector("img"); // this is calling an image in your html
// function changeImg() {
// myImg.setAttribute("src", "this is where you would put your link") // this is setting the source for the img, the first argument is calling the source attribute and the second one is adding the acutal source
// }
//
// myImg.addEventListener("click", (e) => {
//   changeImg();
// });

// fizz buzz
// fizzBuzz();
// function fizzBuzz() {
//   for (i = 0; i < 100; i++);
//   console.log(i);
//   document.getElementById("fizzbuzz").innerHTML = i
// }

// fizz buzz with instruction
const body = document.querySelector("body");

for(let i = 1; 1 < 100; i++) {
  let p = document.createElement("p");
  if(i % 3 === 0 && i % 5 === 0){
    p.textContent = "FizzBuzz";
  } else if(i % 3 === 0) {
    p.textContent = "Fizz";
  } else if(i % 5 === 0) {
    p.textContent = "Buzz"
  } else {
    p.textContent = i;
  }
  body.appendChild(p);
}
