const hero = document.createElement("div");
hero.id = "hero";

const createButton = name => {
  const button = document.createElement("div");
  button.className = "hero__button";
  button.textContent = name;
  return button;
};

const createHeroContainer = () => {
  const heroContainer = document.createElement("div");
  heroContainer.className = "hero__container";
  heroContainer.insertAdjacentHTML(
    "beforeend",
    "<h1>Welcome to</h1> <span> Restaurantly</span> <br/> <h2>Delivering great food for more than 18 years!</h2>"
  );
  heroContainer.append(createButton("OUR MENU"));
  heroContainer.append(createButton("BOOK A TABLE"));
  return heroContainer;
};

hero.append(createHeroContainer());
export { hero };
