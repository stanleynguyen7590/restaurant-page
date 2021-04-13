const menuContainer = document.createElement("div");
menuContainer.className = "menu__container";

const menuHeader = document.createElement("div");
menuHeader.className = "menu__header";
menuHeader.insertAdjacentHTML(
  "beforeend",
  "<h2>Menu</h2><p>Check Our Tasty Menu</p>"
);

const menuGrid = document.createElement("div");
menuGrid.className = "menu__grid";

const menuItems = [
  {
    name: "Lobster Bisque",
    price: "$5.95",
    desc: "Lorem, deren, trataro, filede, nerada",
    img: "lobster-bisque.jpg",
  },
  {
    name: "Crab Cake",
    price: "$7.95",
    desc:
      "A delicate crab cake served on a toasted roll with lettuce and tartar sauce",
    img: "cake.jpg",
  },
  {
    name: "Tuscan Grilled",
    price: "$9.95",
    desc:
      "Grilled chicken with provolone, artichoke hearts, and roasted red pesto",
    img: "tuscan-grilled.jpg",
  },
  {
    name: "Greek Salad",
    price: "$9.95",
    desc: "Fresh spinach, crisp romaine, tomatoes, and Greek olives",
    img: "greek-salad.jpg",
  },
  {
    name: "Lobster Roll",
    price: "$12.95",
    desc: "Plump lobster meat, mayo and crisp lettuce on a toasted bulky roll",
    img: "lobster-roll.jpg",
  },
  {
    name: "Bread Barrel",
    price: "$6.95",
    desc: "Lorem, deren, trataro, filede, nerada",
    img: "bread-barrel.jpg",
  },
  {
    name: "Caesar Selections",
    price: "$8.95",
    desc: "Lorem, deren, trataro, filede, nerada",
    img: "caesar.jpg",
  },
  {
    name: "Mozzarella Stick",
    price: "$4.95",
    desc: "Lorem, deren, trataro, filede, nerada",
    img: "mozzarella.jpg",
  },
  {
    name: "Spinach Salad",
    price: "$9.95",
    desc:
      "Fresh spinach with mushrooms, hard boiled egg, and warm bacon vinaigrette",
    img: "spinach-salad.jpg",
  },
];

const createSingleMenuItem = item => {
  const menuItem = document.createElement("div");
  menuItem.id = item.name;
  menuItem.insertAdjacentHTML(
    "beforeend",
    `<img src="../src/assets/img/${item.img}"><div><h1>${item.name}</h1> <i>${item.desc}</i> <p>${item.price}</p></div>`
  );
  return menuItem;
};

menuItems.forEach(item => menuGrid.append(createSingleMenuItem(item)));

menuContainer.append(menuHeader);
menuContainer.append(menuGrid);

const loadMenuPage = () => {
  document.getElementById("content").append(menuContainer);
};

export { loadMenuPage };
