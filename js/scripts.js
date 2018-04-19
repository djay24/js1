// // feilds
// let emailArr;
// var yourEmail;
// while (true) {
//   //user input
//   var yourEmail = prompt('What is your email?');
//   emailArr = yourEmail.split("");
//   if (!(emailArr.includes('@'))) {
//     var yourEmail = prompt('That was not a valid email. Please try again.');
//   }
//   else if (!(emailArr.includes('.'))) {
//     var yourEmail = prompt('That was not a valid email. Please try again.');
//   }
//   else {
//     alert('Thanks for providing a valid email.');
//   }
// }

// var yourAge = prompt("How old are you");
//
// (parseInt(yourAge)) >= 18 ? alert("You can buy a lotto ticket") : alert("You can't buy a lotto ticket")

// let cars = ["Jeep" , "Honda" , "Toyota"];
// console.log(cars[1]);
// console.log(cars[0].length);
// cars.push("BMW");
// console.log(cars);
// //starts with 0 so jeep would be 0, honda is 1 and toyota is 2
//
// let removedCar = cars.pop();
// // pop removes the last one in the array
// console.log(cars);
// console.log(removedCar);
//
// cars.unshift("Chevy");
// console.log(cars);
// // unshift adds to the front of the array
//
// //cars.splice(1, 0 , "red" , "green");
// //console.log(cars);
//
//
// cars.splice(2, 0 , "Chevy");
// console.log(cars);
// // the first number in the splice will tell it where you want chevy added to the array and the 0 tells it how many things after it you want to delete
//
// cars.slice(2);
// console.log(cars);


let arr = ["Christa" , "Ryeker" , "Bryan" , "Jeff", "Sam"];

//Array.isArray(arr);
// isArray is to check if it is an array
//arr.shift();
console.log(arr);

let bestEver = arr.slice(); // leaving the () blank just gives you an exact copy of the original
console.log(arr);

let noCoteacher = arr.slice(1); // returns copy of the array starting at index 1

//console.log(bestEver);
//console.log(noCoteacher);

let teacherIndex = arr.indexOf("Ryeker");  // indexOf only give you the index of the first instance
console.log(teacherIndex);
let onlyStudents = arr.splice(teacherIndex, 1 , 0);
console.log(onlyStudents);
