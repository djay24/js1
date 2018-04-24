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


// let arr = ["Christa" , "Ryeker" , "Bryan" , "Jeff", "Sam"];
//
// //Array.isArray(arr);
// // isArray is to check if it is an array
// //arr.shift();
// console.log(arr);
//
// let bestEver = arr.slice(); // leaving the () blank just gives you an exact copy of the original
// console.log(arr);
//
// let noCoteacher = arr.slice(1); // returns copy of the array starting at index 1
//
// //console.log(bestEver);
// //console.log(noCoteacher);
//
// let teacherIndex = arr.indexOf("Ryeker");  // indexOf only give you the index of the first instance
// console.log(teacherIndex);
// let onlyStudents = arr.splice(teacherIndex, 1 , 0);
// console.log(onlyStudents);


// let shoppingList = [];
//
// let item1 = "Detergent";
// let item2 = "Cheese";
// let item3 = "Crackers";
// let item4 = "Water"
//
// shoppingList.push(item1, item2, item3, item4); //this is one way to push into an array
//
// console.log(shoppingList);
//
// // favorite movies Array
// let favoriteMovie = ['Star Wars VI', '1983'];
// let secondFavorite = ['Return of the King', '2003'];
// let thirdFavorite = ['Equilibrium', '2002'];
// let myFavoriteMovies = [];
// myFavoriteMovies.push(favoriteMovie, secondFavorite, thirdFavorite);
//
// console.log(myFavoriteMovies[0][1], myFavoriteMovies[1][1]);

let favoriteMovie = ["Kingsman: The Secret Service", "Taron Egerton", "2014"];
let secondFavorite = ["Kingsman: The Golden Service", "Taron Egerton", "2017"];
let thirdFavorite = ["Guardians of the Galaxy", "Chris Pratt", "2014"];

let myFavoriteMovies = []
myFavoriteMovies.push(favoriteMovie, secondFavorite, thirdFavorite);

for(let i = 0; i < myFavoriteMovies.length ; i++) {
  if(myFavoriteMovies[i][0] === favoriteMovie[0]){
  console.log(i, myFavoriteMovies[i]);
  let correctEntry = myFavoriteMovies[i];
  alert(`${correctEntry[0]} , ${correctEntry[2]}`);
  }
}
//console.log(myFavoriteMovies);

// console.log(myFavoriteMovies[0][1], myFavoriteMovies[2][1]);

// const titles = [];
// const favAndLeastFav = [];
//
// titles.push(favoriteMovie[0], secondFavorite[0], thirdFavorite[0]);
//
// console.log(titles);
