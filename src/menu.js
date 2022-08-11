function loadMenuPage() {
  const menu = document.createElement("div");
  menu.classList.add("menu");
  menu.appendChild(appendImage(Burger1));
  menu.appendChild(appendParagraph("Our classic burger."));

  menu.appendChild(appendImage(Burger2));
  menu.appendChild(
    appendParagraph(
      "Our classic burger, but this time two of them. Not for the faint of heart."
    )
  );

  menu.appendChild(appendImage(Burger3));
  menu.appendChild(
    appendParagraph(
      "You thought we reached perfection with the last one, but you ain't seen nothing yet. Pussy."
    )
  );

  menu.appendChild(appendImage(Burger4));
  menu.appendChild(
    appendParagraph(
      "Your only mission in life is telling people about this burger, you dumb whore."
    )
  );

  return menu;
}

import Burger1 from "../img/burger1.png";
import Burger2 from "../img/burger2.png";
import Burger3 from "../img/burger3.png";
import Burger4 from "../img/burger4.png";

function appendImage(add) {
  const image = new Image();
  image.src = add;
  return image;
}

function appendParagraph(add) {
  const text = document.createElement("p");
  text.textContent = add;
  return text;
}

export { loadMenuPage };
