import { loadHomePage } from "./components/home";
import { loadAboutPage } from "./components/about";
import { loadMenuPage } from "./components/menu";
import { loadSpecialsPage } from "./components/specials";
import { navBar } from "./components/navbar";
import { topBar } from "./components/topbar";

const createNavBar = () => document.querySelector("#content").prepend(navBar);
const createTopBar = () => document.querySelector("#content").prepend(topBar);
const clearPage = () => (document.getElementById("content").innerHTML = "");
const moveNavBarUp = () => (document.querySelector("#nav-bar").style.top = "0");
const moveNavBarDown = () =>
  (document.querySelector("#nav-bar").style.top = "40px");

createTopBar();
createNavBar();
loadHomePage();

const handleClick = name => {
  switch (name) {
    case "Home":
      clearPage();
      createTopBar();
      createNavBar();
      moveNavBarDown();
      loadHomePage();
      break;
    case "About":
      clearPage();
      createNavBar();
      moveNavBarUp();
      loadAboutPage();
      break;
    case "Menu":
      clearPage();
      createNavBar();
      moveNavBarUp();
      loadMenuPage();
      break;
    case "Specials":
      clearPage();
      createNavBar();
      moveNavBarUp();
      loadSpecialsPage();
      break;
    default:
      clearPage();
      createTopBar();
      createNavBar();
      moveNavBarDown();
      loadHomePage();
      break;
  }
};

const navBarItems = document.querySelectorAll(".nav-bar__container li");
navBarItems.forEach(item =>
  item.addEventListener("click", () => handleClick(item.textContent))
);
