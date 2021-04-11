const navBar = document.createElement("div");
navBar.id = "nav-bar";
const nameLists = [
  "Home",
  "About",
  "Menu",
  "Specials",
  "Events",
  "Chefs",
  "Gallery",
  "Contact",
];

const createRestaurantName = name => {
  const nameContainer = document.createElement("div");
  nameContainer.className = "nav-bar__name";
  nameContainer.textContent = "RESTAURANTLY";
  return nameContainer;
};

const createNavLinks = (nameLists, className) => {
  const navLinkContainer = document.createElement("ul");
  for (const name of nameLists) {
    navLinkContainer.insertAdjacentHTML(
      "beforeend",
      `<li><a href="#">${name}</a></li>`
    );
  }
  navLinkContainer.className = className;
  return navLinkContainer;
};

const createBookingBtn = name => {
  const bookingBtnContainer = document.createElement("div");
  const bookingBtn = document.createElement("div");
  bookingBtnContainer.className = "nav-bar__bookingBtn";
  bookingBtn.textContent = name;
  bookingBtnContainer.append(bookingBtn);
  return bookingBtnContainer;
};
navBar.append(createRestaurantName("RESTAURANTLY"));
navBar.append(createNavLinks(nameLists, "nav-bar__container"));
navBar.append(createBookingBtn("BOOK A TABLE"));
export { navBar };
