const topBar = document.createElement("div");
topBar.id = "top-bar";

const topBarItems = document.createElement("ul");
topBarItems.classList.add("top-bar__container");
topBar.append(topBarItems);

const topBarItemsList = [
  '<i class="fas fa-mobile-alt"></i> <span> +1 5589 55488 55</span>',
  '<i class="far fa-clock"></i> <span> Mon-Sat: 11AM - 23PM</span>',
  "EN/DE",
];

topBarItemsList.forEach(item =>
  topBarItems.insertAdjacentHTML("beforeend", `<li>${item}</li>`)
);

export { topBar };
