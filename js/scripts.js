var firstName = prompt("What is your First Name?" , 'Franklin');
console.log(firstName);
// if you put , after first string like this
//("what is your first name", "charles") the charles will be inputed if there is no value input
var lastName = prompt("Hey " +firstName + " what is your last name?");
console.log(lastName);
var yourBirthday = prompt("Hey " +firstName + " when was your birthday? (MM/DD/YYYY) format");
console.log(yourBirthday);
var birthdayAlert = new Date(yourBirthday);

var birthdayConfirm = confirm("Is this your birthday? " +yourBirthday);
console.log(birthdayConfirm);


//let myName = "DJ"
//alert (`Hello ${myName}. You are great!`);
