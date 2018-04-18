let yourBirthday = new Date(prompt("When is your birthday?" , "01/01/1991"));
usersAge = yourBirthday.getFullYear();
console.log(yourBirthday);
console.log(usersAge);

if (usersAge < 1999) {
  alert("Hey you are older than 18!")
  if (usersAge > 1938) {
    if (confirm("Do you like Pizza?") === true) {
      let yourTopping = prompt("What is your favorite topping?")
      if (yourTopping == "pepperoni" || yourTopping == "Pepperoni") {
        alert("Hey that's my favorite too!")
      } else {
        alert(`${yourTopping} is pretty good but my favorite is pepperoni.`)
      }
    } else {
      alert("There is something wrong with you.")
    }
  } else {
    if (confirm("Did you have Medication to take today?") === true) {
      if (confirm("Did you remember to take it?") === true) {
        alert("Good Job!")
      } else {
        alert("Make sure you take your medication.")
      }
    } else {
      alert("Have a Good Day.")
    }
  }
} else {
  alert("Sorry you are too young to be on this Website")
}
