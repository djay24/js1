requestData();

function requestData() {
let temp = parseInt(prompt("What is the weather?", "25"));
let scale = prompt("Was that in Fahrenheit or Celcius? (f or c)", "f");
 console.log(scale);

 if (!isNaN(temp) && (scale.toLowerCase()) === "f") {
   farToCel(temp);

 } else if (!isNaN(temp) && (scale.toLowerCase()) === "c") {
   celToFar(temp);
   
} else {
  requestData();
}
function farToCel(far) {
  let fahrenheitConverted = (far - 32) / 1.8;
  alert(`The temperature is ${fahrenheitConverted.toFixed(0)} °Celcius`);
  }
function celToFar(cel) {
  let celciusConverted = (cel + 32) * 1.8;
  alert(`The temperature is ${celciusConverted.toFixed(0)} °Fahrenheit`)
}
}
