// starting to-do array
let item1 = prompt("List your fist thing you need to do tommorrow");
let item2 = prompt("Please list a second thing you need to do")
let item3 = prompt("Now a third")

let myTodo = [];
myTodo.push(item1, item2, item3);

console.log(myTodo);

for(i = 0; i < myTodo.length; i++) {
  console.log(i, myTodo[i]);
  let itemDay = prompt(`What day to you need to ${myTodo[i]}`);
  console.log(itemDay);
  
}
console.log(myTodo)
