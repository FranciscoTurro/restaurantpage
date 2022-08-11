import "./styles.css";
const content = document.querySelector("#content");
import { loadHomePage } from "./home";

function init() {
  const main = document.createElement("div");
  main.setAttribute("id", "main");

  content.appendChild(makeHeader());
  content.appendChild(main);
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
  home.addEventListener("click", () => {});

  const menu = document.createElement("button");
  menu.textContent = "Menu";
  menu.addEventListener("click", () => {});

  const contact = document.createElement("button");
  contact.textContent = "Contact";
  contact.addEventListener("click", () => {});

  buttonDiv.appendChild(home);
  buttonDiv.appendChild(menu);
  buttonDiv.appendChild(contact);

  return buttonDiv;
}

init();
loadHomePage();
