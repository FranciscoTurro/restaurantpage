function loadContactPage() {
  const contact = document.createElement("div");
  contact.classList.add("contact");

  contact.appendChild(appendTwitter("pissoff"));
  contact.appendChild(appendPhone(12312312));
  contact.appendChild(appendMail("appen"));

  return contact;
}

import twitterimg from "../img/twitter.png";
function appendTwitter(handle) {
  const twitter = document.createElement("div");
  twitter.classList.add("socialcontainer");
  const image = new Image();
  image.classList.add("marker");
  image.src = twitterimg;

  const text = document.createElement("p");
  text.textContent = "@ " + handle;

  twitter.appendChild(image);
  twitter.appendChild(text);

  return twitter;
}

import phoneimg from "../img/phone.png";
function appendPhone(number) {
  const phone = document.createElement("div");
  phone.classList.add("socialcontainer");
  const image = new Image();
  image.classList.add("marker");
  image.src = phoneimg;

  const text = document.createElement("p");
  text.textContent = number;

  phone.appendChild(image);
  phone.appendChild(text);

  return phone;
}

import mailpng from "../img/email.png";
function appendMail(direction) {
  const mail = document.createElement("div");
  mail.classList.add("socialcontainer");
  const image = new Image();
  image.classList.add("marker");
  image.src = mailpng;

  const text = document.createElement("p");
  text.textContent = direction;

  mail.appendChild(image);
  mail.appendChild(text);

  return mail;
}

export { loadContactPage };
