import Icon from "../img/founder.png";

function loadHomePage() {
  const home = document.createElement("div");
  home.classList.add("home");
  home.appendChild(appendImage(Icon));
  home.appendChild(
    appendParagraph(
      "Our esteemed founder, Miguel Mc'Dollini. His life mission? To serve you the most delicate pieces of italian cuisine. Oui oui."
    )
  );
  return home;
}

function appendImage(add) {
  const image = new Image();
  image.classList.add("founder");
  image.src = add;
  return image;
}

function appendParagraph(add) {
  const text = document.createElement("p");
  text.textContent = add;
  return text;
}

export { loadHomePage };
