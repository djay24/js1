// feilds
let emailArr;
var yourEmail;
while (true) {
  //user input
  var yourEmail = prompt('What is your email?');
  emailArr = yourEmail.split("");
  if (!(emailArr.includes('@'))) {
    var yourEmail = prompt('That was not a valid email. Please try again.');
  }
  else if (!(emailArr.includes('.'))) {
    var yourEmail = prompt('That was not a valid email. Please try again.');
  }
  else {
    alert('Thanks for providing a valid email.');
  }
}
