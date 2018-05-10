// let myNum = new Number(24);
// let myString = myNum.toString();
// console.log(Object.getPrototypeOf(myString));
// console.log(myString)
//
// const user = {
//   name: "DJ", // key/value pair
//   password: "5678" // property and value
// };
// console.log(Object.getPrototypeOf(user));
//
//
// function User(firstName, lastName, password, signUpDate){ // constructor functions are named with upper case first letter
//   this.fullName = firstName + " " + lastName;
//   this.password = password;
//   this.signUpDate = new Date(signUpDate)
// };
// // constructor functions should always build an object, that object should always have the name of the function
//
// let firstUser = new User("DJ", "Rodriguez", "5678", "5/7/18");
//
// console.log(firstUser);
//
// function Cart() {
//
// };

function taskCreator() {
let task = prompt("What task do you need to do?");
let dueDate = prompt("By when does this need to be finished?");
let taskPriority = prompt("How important is this task?", "High, Medium, Low")
console.log(task, dueDate, taskPriority);
};

function Task() {
  this.task = task;
  this.dueDate = dueDate;
  this.taskPriority = taskPriority;
};
taskCreator()

let task = new Task()
