var firstName = prompt("What is your First Name?");
console.log(firstName);
var lastName = prompt("Hey " +firstName + " what is your last name?");
console.log(lastName);
var yourBirthday = prompt("Hey " +firstName + " when was your birthday? (MM/DD/YYYY) format");
console.log(yourBirthday);
var birthdayAlert = new Date(yourBirthday);

confirm("Is this your birthday? " +birthdayAlert);
