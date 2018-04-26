let yourNum = parseInt(prompt("Give me a number?"));

function squareCalc(yourNum) {
  return yourNum * yourNum;
}

// function giveRealNum(yourNum) {
//   let giveNum = prompt("Please give a Number");
//   if (!isNaN(giveNum)) {
//     return yourNum;
//   } else giveRealNum(yourNum);
//}

if (!isNaN(yourNum)) {
squareCalc(yourNum);
alert(`the square root of ${yourNum} is ${squareCalc(yourNum)}`);
} else {
alert("Please give a valid number");
let realNum = parseInt(prompt("Please give a Number"));
  
}
