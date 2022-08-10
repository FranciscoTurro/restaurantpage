import "./styles.css";
const content = document.querySelector("#content");

function init() {
  content.appendChild(makeHeader());
}

function makeHeader() {
  const header = document.createElement("div");
  header.classList.add("header");
  header.appendChild(makeH1());
  header.appendChild(makeButtonDiv());

  return header;
}

function makeH1() {
  const title = document.createElement("h1");
  title.textContent = "Mc'dollini";
  title.classList.add("title");
  return title;
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
