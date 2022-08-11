import Icon from "../img/test.png";

function loadHomePage() {
  const main = document.getElementById("main");
  const image = new Image();
  image.src = Icon;
  main.appendChild(image);
}

export { loadHomePage };
