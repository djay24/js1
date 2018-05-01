let yourNum = parseInt(prompt("Please give me a number?"));

function squareCalc(yourNum) {
  return yourNum * yourNum;
}  // it would help to put if else statement with the NaN prompt in the same function as the actual math function

function requestData() {
  let yourNum = parseInt(prompt("Please give me a number?"));
  if(!isNaN(yourNum)) {
    console.log(yourNum);
    return yourNum;
  } else {
    alert("Please give a real number");
    requestData();
  }
}
// checks if value is a number and if it isnt it goes to requestData function
if (!isNaN(yourNum)) {
squareCalc(yourNum);
alert(`the square root of ${yourNum} is ${squareCalc(yourNum)}`);
} else {
alert("Please give a valid number");
requestData(yourNum);
parseInt(squareCalc(yourNum));
alert(`the square root of ${yourNum} is ${squareCalc(yourNum)}`);
}

// you can call function on a line by itself to make things easier
