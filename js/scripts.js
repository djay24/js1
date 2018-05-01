// day 6 on ryekers website
// // let blueDivs = document.getElementsByClassName("blue");
// // let h1 = document.getElementsByTagName("h1");
// // let para = document.getElementById("para")
// // // returns the first instance of an element that has the id para;
// // let queryBlues = document.querySelectorAll("blue")
// // console.log(queryBlues);

// function domSelect(element, method) {
//   switch(method.toLowerCase()) {
//     case 'getelementsbytagname' :
//     method = getElementsByTagName;
//     break;
//   }
//   let elementToQuery = document.method(element);
//   console.log()
// }
// // let el = prompt("Give me an element");
// // let method = prompt("Give me a method")
// // domSelect(el, method)
//
const button = document.querySelector(".btn-danger");
const div = document.querySelector(".btn-danger")

button.addEventListener(
  "click", (e) => {
    let newPTag = document.createElement("span");
    newPTag.textContent = "Hey there, I see you clicked on the button"
    button.appendChild(newPTag)
  }
  // callback function because JS is being called back to this point in the code when the user clicks on the button.
)
button.addEventListener("mouseleave", (e) => {
  div.className = "red-button"
})
button.addEventListener("mouseenter", (e) => {
  div.className = "blue-button"
});
// day 7 on ryekers website
