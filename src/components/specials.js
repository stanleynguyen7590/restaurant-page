const specialsContainer = document.createElement("div");
specialsContainer.className = "specials__container";

const specialsHeader = document.createElement("div");
specialsHeader.className = "specials__header";
specialsHeader.insertAdjacentHTML(
  "beforeend",
  "<h2>Specials</h2><p>Check Our Specials</p>"
);
const specialsList = [
  {
    name: "Modi sit est",
    active: true,
    title: "Architecto ut aperiam autem id",
    subtitle:
      "Qui laudantium consequatur laborum sit qui ad sapiente dila parde sonata raqer a videna mareta paulona marka",
    desc:
      "Et nobis maiores eius. Voluptatibus ut enim blanditiis atque harum sint. Laborum eos ipsum ipsa odit magni. Incidunt hic ut molestiae aut qui. Est repellat minima eveniet eius et quis magni nihil. Consequatur dolorem quaerat quos qui similique accusamus nostrum rem vero",
    img: "specials-1.png",
  },
  {
    name: "Unde praesentium sed",
    active: false,
    title: "Et blanditiis nemo veritatis excepturi",
    subtitle:
      "Qui laudantium consequatur laborum sit qui ad sapiente dila parde sonata raqer a videna mareta paulona marka",
    desc:
      "Ea ipsum voluptatem consequatur quis est. Illum error ullam omnis quia et reiciendis sunt sunt est. Non aliquid repellendus itaque accusamus eius et velit ipsa voluptates. Optio nesciunt eaque beatae accusamus lerode pakto madirna desera vafle de nideran pal",
    img: "specials-2.png",
  },
  {
    name: "Pariatur explicabo vel",
    active: false,
    title: "Impedit facilis occaecati odio neque aperiam sit",
    subtitle:
      "Eos voluptatibus quo. Odio similique illum id quidem non enim fuga. Qui natus non sunt dicta dolor et. In asperiores velit quaerat perferendis aut",
    desc:
      "Iure officiis odit rerum. Harum sequi eum illum corrupti culpa veritatis quisquam. Neque necessitatibus illo rerum eum ut. Commodi ipsam minima molestiae sed laboriosam a iste odio. Earum odit nesciunt fugiat sit ullam. Soluta et harum voluptatem optio quae",
    img: "specials-3.png",
  },
  {
    name: "Architecto ut aperiam autem id",
    active: false,
    title:
      "Fuga dolores inventore laboriosam ut est accusamus laboriosam dolore",
    subtitle:
      "Totam aperiam accusamus. Repellat consequuntur iure voluptas iure porro quis delectus",
    desc:
      "Eaque consequuntur consequuntur libero expedita in voluptas. Nostrum ipsam necessitatibus aliquam fugiat debitis quis velit. Eum ex maxime error in consequatur corporis atque. Eligendi asperiores sed qui veritatis aperiam quia a laborum inventore",
    img: "specials-4.png",
  },
  {
    name: "Iusto ut expedita aut",
    active: false,
    title: "Est eveniet ipsam sindera pad rone matrelat sando reda",
    subtitle: "Omnis blanditiis saepe eos autem qui sunt debitis porro quia.",
    desc:
      "Exercitationem nostrum omnis. Ut reiciendis repudiandae minus. Omnis recusandae ut non quam ut quod eius qui. Ipsum quia odit vero atque qui quibusdam amet. Occaecati sed est sint aut vitae molestiae voluptate vel",
    img: "specials-5.png",
  },
];
const specialsNameContainer = document.createElement("div");
specialsNameContainer.className = "specials__name-container";
const specialsNameList = document.createElement("ul");

const createSingleSpecialName = name => {
  const itemName = document.createElement("li");
  itemName.insertAdjacentHTML("beforeend", `${name}`);
  return itemName;
};

const createSingleSpecialContent = (title, subtitle, desc, active) => {
  const specialContentContainer = document.createElement("div");

  specialContentContainer.className = "specials__content-container";
  if (!active) {
    specialContentContainer.classList.add("specials__content-hidden");
  }
  specialContentContainer.insertAdjacentHTML(
    "beforeend",
    `<h1>${title}</h1><i>${subtitle}</i><p>${desc}</p>`
  );
  return specialContentContainer;
};

const createSingleImage = (img, active) => {
  const singleImage = document.createElement("div");
  singleImage.className = "specials__img-container";
  singleImage.insertAdjacentHTML(
    "beforeend",
    `<img src="./assets/img/${img}">`
  );

  if (!active) singleImage.classList.add("specials__content-hidden");

  return singleImage;
};

const setSpecialNameActive = e => {
  const nameList = document.querySelectorAll(".specials__name-container li");
  const contentList = document.querySelectorAll(".specials__content-container");

  const imgList = document.querySelectorAll(".specials__img-container");
  nameList.forEach(item => {
    item.classList.remove("specials__name-active");
    contentList[[...nameList].indexOf(item)].classList.add(
      "specials__content-hidden"
    );
    imgList[[...nameList].indexOf(item)].classList.add(
      "specials__content-hidden"
    );
    if (item.textContent === e.currentTarget.textContent) {
      item.classList.add("specials__name-active");
      contentList[[...nameList].indexOf(item)].classList.remove(
        "specials__content-hidden"
      );
      imgList[[...nameList].indexOf(item)].classList.remove(
        "specials__content-hidden"
      );
    }
  });
};

specialsList.forEach(item => {
  const singleItem = createSingleSpecialName(item.name);
  specialsNameList.append(singleItem);
  if (item.active) {
    singleItem.classList.add("specials__name-active");
  }
  singleItem.addEventListener("click", e => {
    setSpecialNameActive(e);
  });
});

specialsContainer.append(specialsHeader);
const specialsMainContainer = document.createElement("div");
specialsMainContainer.className = "specials__main-container";
specialsNameContainer.append(specialsNameList);
specialsMainContainer.append(specialsNameContainer);

specialsList.forEach(item => {
  specialsMainContainer.append(
    createSingleSpecialContent(
      item.title,
      item.subtitle,
      item.desc,
      item.active
    )
  );
  specialsMainContainer.append(createSingleImage(item.img, item.active));
});

specialsContainer.append(specialsMainContainer);

const loadSpecialsPage = () => {
  document.getElementById("content").append(specialsContainer);
};

export { loadSpecialsPage };
