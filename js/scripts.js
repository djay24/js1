// // starting to-do array my attempt
// let item1 = prompt("List your fist thing you need to do tommorrow");
// let item2 = prompt("Please list a second thing you need to do")
// let item3 = prompt("Now a third")
//
// let myTodo = [];
// myTodo.push(item1, item2, item3);
//
// console.log(myTodo);
//
// for(i = 0; i < myTodo.length; i++) {
//   console.log(i, myTodo[i]);
//   let itemDay = prompt(`What day to you need to ${myTodo[i]}`);
//   console.log(itemDay);
// }
// console.log(myTodo)


// starting takehome with ryeker

let toDos = [];

let toDo1 = [prompt("what do you want to do first?", "Eat")];

let toDo2 = [prompt("what do you want to do second?", "Eat")];

let toDo3 = [prompt("what do you want to do third?", "Eat")];
// This is a good place for edge casing

toDos.push(toDo1, toDo2, toDo3);

console.log(toDos);

for(let i = 0; i < toDos.length; i++) {
  let timeLine = prompt(`How many days will it take to get ${toDos[i][0]} done?`, "2")
  timeLine = !isNaN(parseInt(timeLine)) ?  // this is checking
  parseInt(timeLine) : 2;

  toDos[i].unshift(timeLine); //this is pushing the number into the array of todo items
}

toDos.sort()
console.log(toDos, 'after sort')

// if you use .push rather than .unshift use
let longest = toDos[0];
let j = 0;
while(j < toDos.length) {
console.log(toDos[j][1]);
j++;
}
console.log(longest);
