import { hero } from "./hero";
import { topBar } from "./topbar";
const loadHomePage = () => {
  document.getElementById("content").append(hero);
};
export { loadHomePage };
