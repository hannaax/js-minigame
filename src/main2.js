const logo = document.querySelector("#logo");
const menu = document.querySelector("#menu");
const list = document.querySelector("#list");

const logoImg = document.createElement("img");
logoImg.src = "img/logo.png";

const Img = document.createElement("img");

let pst_menus = ["blue_p.png", "blue_s.png", "blue_t.png"];
let color_menus = ["blueBtn", "yellowBtn", "pinkBtn"];

let imgs = [
  "blue_p.png",
  "blue_s.png",
  "blue_t.png",
  "pink_p.png",
  "pink_s.png",
  "pink_t.png",
  "yellow_p.png",
  "yellow_s.png",
  "yellow_t.png",
];

let imgs_filter = imgs.slice();

let gender = "";
let size = "";

// logo //

logo.appendChild(logoImg);

// menu //

const test = (e) => {
  if (e.target.className === color_menus[0]) {
    imgs_filter = imgs_filter.filter((img) => img.includes("blue"));
    console.log(imgs_filter);
  }
  //   else console.log("else");
};

pst_menus.forEach((v) => {
  const img = document.createElement("img");
  img.src = `img/${v}`;
  menu.appendChild(img);
});

color_menus.forEach((v) => {
  const btn = document.createElement("button");
  btn.classList.add(v);
  menu.appendChild(btn);

  btn.addEventListener("click", test);
});

// list //

imgs_filter.forEach((v) => {
  const img = document.createElement("img");
  img.src = `img/${v}`;
  const li = document.createElement("li");
  li.appendChild(img);
  const span = document.createElement("span");
  li.appendChild(span);
  span.innerText = `${gender},${size} size`;
  list.appendChild(li);
});

// for문으로 배열 다 뿌려주고,
// 배열 include 메서드로 필터링?
// imgs의 요소에 blue 포함 필터링
