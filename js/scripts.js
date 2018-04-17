/*  if (!(i%2===0)) //this will make it log only the odd numbers
  console.log(i)
};
*/

/* Example of loosely and strict equals
// declare a var and set it equal to any string
var favoriteBook = "Perks of being a Wallflower";
// declare a second var and call new String() on the same string (this will create an insance of a JS string object)
var aBook = new String(favoriteBook);
// use the logical operators and a third var to determine if they are strictly equal
var isEqual = (favoriteBook == aBook);
console.log(isEqual)
isEqual = (favoriteBook === aBook);
console.log(isEqual);
*/

/* var yourName = prompt("What's your name?");

console.log(yourName.length);
console.log(!yourName)*/ // this is checking if yourName is not Truthy so if you leave it blank it will return True and if you put something it will return False

let obj1 = {
  name: "DJ"
};

let obj2 = {
  name: "DJ"
};

console.log(obj1 === obj2);

// what is modulo(%), it is the remainder of division
console.log(10 % 3)

// how to use incriment
// let yourNum = prompt("give me a number")
//console.log(yourNum++);


// what is NaN
console.log(typeof("three" * 15));

console.log(isNaN("three" * 15));

// console.log(NaN === NaN) this is false
// check the type of line 42
// then read up on NaN documentation


//let myNumber = prompt("Give me a number!");

//alert(
  //isNaN((parseInt(myNumber) / 2))
//);

/*let string = prompt("Tell my your favorite number.")

string.toString();
console.log(string)

alert(`Your favorite number is ${string}`); */

//let yourNumber = prompt("Give me a number");
//theirValue = parseInt(yourNumber);

//alert(theirValue + 42, theirValue - 42, theirValue * 42, theirValue / 42);


const best = 42;
if(best === "42") {
  console.log("Yay");
} else if(cheese === "good") {
  console.log("yes it is");
} else {
  console.log("Boooo");
}
