
// // javascrip timers
// // there is setTimeout() and setInterval
// setTimeout( // set timeout method
//   () => { // argument 1, a callback fn
//   alert("How you doin'?");
// },
// 1000); // time in milliseconds you want to wait
//
// alert("This comes first")
//
// // clear timeout
// function cancelAd() {
//   clearTimeout(newAd);
//  clearInterval() does the same thing as timeout
// };

// // set interval
//   setInterval(
//     () => {
//       alert("Hi")
//     },
//   2000);

// my attempt
// yourTime();
// function makeTimer(time) {
//   setTimeout(
//     () => {
//       alert("How you doin'?")
//     },
//   time)
// };
// function yourTime() {
//   let givenTime = parseInt(prompt("Set a timer in milliseconds", "1 Second = 1000 ms"));
//   if(!isNaN(givenTime)) {
//     makeTimer(givenTime);
//   } else {
//     alert("Please give a real number")
//     yourTime();
//   }
// }
// console.log();



// session storage

// let user = {
//   email: "djayr24@gmail.com",
//   firstName: "DJ",
//   lastName: "Rodriguez",
//   cart: [],
//   lastLogin: Date.now()
// };
//
// sessionStorage.setItem("currentUser",
// JSON.stringify(user));
//
// user =
// JSON.parse(sessionStorage.getItem("currentUser"));
//
// let firstName = user.firstName;
// alert(`Hi ${firstName}, nice to see you again`);

// function logout() {
//   sessionStorage.removeItem("currentUser");
// };
// const logoutButton = document.querySelector(".logout")
// logoutButton.addEventListener("click", logout());
