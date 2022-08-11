import Icon from "../img/test.png";

function loadHomePage() {
  appendImage();
  appendParagraph();
}

function appendImage() {
  const image = new Image();
  image.src = Icon;
  main.appendChild(image);
}

function appendParagraph() {
  const text = document.createElement("p");
  text.textContent =
    "Lorem ipsum dolor! Exercitationem, necessitatibus deleniti!";
  main.appendChild(text);
}

export { loadHomePage };
