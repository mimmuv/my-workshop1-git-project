function subscribe() {
  let name = prompt("Please enter your name?");
  let email = prompt("Please enter your Email address?");

  alert(
    "Thank you " +
      name +
      " for subscribing to my fitness program. A representative will be in touch with you within 24 hours. Have a great day!"
  );
}

let element = document.querySelector("button");
element.addEventListener("click", subscribe);
