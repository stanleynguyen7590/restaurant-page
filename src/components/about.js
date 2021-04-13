const aboutPageContainer = document.createElement("div");
aboutPageContainer.className = "about__container";
const aboutPageText = document.createElement("div");
aboutPageText.className = "about__text";
aboutPageText.insertAdjacentHTML(
  "beforeend",
  "<h1>Voluptatem dignissimos provident quasi corporis voluptates sit assumenda.</h1><i>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</i><p>Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>"
);

const aboutPageImage = document.createElement("div");
aboutPageImage.className = "about__image";
aboutPageImage.insertAdjacentHTML(
  "beforeend",
  `<img src="../src/assets/img/about.jpg"></img>`
);
aboutPageContainer.append(aboutPageText);
aboutPageContainer.append(aboutPageImage);

const loadAboutPage = () => {
  document.getElementById("content").append(aboutPageContainer);
};

export { loadAboutPage };
