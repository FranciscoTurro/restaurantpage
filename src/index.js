import "./styles.css";
const content = document.querySelector("#content");

function init() {
  content.appendChild(makeHeader());
}

function makeHeader() {
  const header = document.createElement("div");
  header.classList.add("header");
  header.textContent = "spaghetti factory";
  header.appendChild(makeButtonDiv());

  return header;
}

function makeButtonDiv() {
  const buttonDiv = document.createElement("div");
  buttonDiv.classList.add("buttonDiv");

  const home = document.createElement("button");
  home.textContent = "Home";
  const menu = document.createElement("button");
  menu.textContent = "Menu";
  const contact = document.createElement("button");
  contact.textContent = "Contact";

  buttonDiv.appendChild(home);
  buttonDiv.appendChild(menu);
  buttonDiv.appendChild(contact);

  return buttonDiv;
}

init();
//this makes the header, and a main div. the header is always loaded and the buttons change the main div
