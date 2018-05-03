console.log(document.forms.login.username.value);

document.forms.login.username.addEventListener("keyup", (e) => {
  if(!performPasswordCheck()) {
  e.preventDefault(); }
  console.log(e.target.value)
});
