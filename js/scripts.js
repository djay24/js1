// // age prompt
// let yourBirthday = new Date(prompt("When is your birthday?" , "01/01/1991"));
// usersAge = yourBirthday.getFullYear();
// console.log(yourBirthday);
// console.log(usersAge);
//
// if (usersAge < 1999) {
//   alert("Hey you are older than 18!")
//   if (usersAge > 1938) {
//     if (confirm("Do you like Pizza?") === true) {
//       let yourTopping = prompt("What is your favorite topping?")
//       if (yourTopping == "pepperoni" || yourTopping == "Pepperoni") {
//         alert("Hey that's my favorite too!")
//       } else {
//         alert(`${yourTopping} is pretty good but my favorite is pepperoni.`)
//       }
//     } else {
//       alert("There is something wrong with you.")
//     }
//   } else {
//     if (confirm("Did you have Medication to take today?") === true) {
//       if (confirm("Did you remember to take it?") === true) {
//         alert("Good Job!")
//       } else {
//         alert("Make sure you take your medication.")
//       }
//     } else {
//       alert("Have a Good Day.")
//     }
//   }
// } else {
//   alert("Sorry you are too young to be on this Website")
// }


// color prompt

let yourName = prompt("What is your name?");

let favColor = prompt("What is your favorite color out of these options" , "Choose from: red, blue, green, yellow, orange, pink, white, grey, black, brown");

let messageToUser;

switch(favColor.toLowerCase()){
  case "blue":
  messageToUser = "Blue is my favorite as well!";
  break;
  case "red":
  messageToUser = "Red shoes look cool. Don't you think?";
  break;
  default:
  messageToUser = "Please use one of the colors I gave you";
  break;
}
alert(`Hey ${yourName}, ${messageToUser}`)
