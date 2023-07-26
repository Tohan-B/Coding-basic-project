function contactMe() {
  let name = prompt("What is yor name?");
  let country = prompt("Where are you from?");
  let age = prompt("How old are you?<Must be above 18>");
  let h2 = document.querySelector("h2");
  if (age >= 18) {
    h2.innerHTML =
      "Hi " +
      name +
      ",😁 I can work for you. You are above the age limit. We'll be in touch!";
  } else {
    h2.innerHTML =
      "Sorry " + name + ",🥺 I can't work for you. You are below the age limit";
  }
}

let contactButton = document.querySelector("button");
contactButton.addEventListener("click", contactMe);
