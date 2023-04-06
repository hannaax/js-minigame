const loadItems = () => {
  return fetch("data/data.json")
    .then((res) => res.json())
    .then((json) => json.items);
};

const displayItems = (items) => {
  const container = document.querySelector(".items");
  const li = items.map(
    (item) => `<li class="item">
  <img src="${item.image}" alt="${item.type}" class="item__thumbnail" />
  <span class="item__description">${item.gender}, ${item.size}</span>
</li>`
  );
  container.innerHTML = li;
};

const onButtonClick = (event, items) => {
  const dataset = event.target.dataset;
  const key = dataset.key;
  const value = dataset.value;

  if (key === null || value === null) {
    return;
  }

  displayItems(items.filter((item) => item[key] === value));
  //   if (value === "skirt") {
  //     const skirts = items.filter((item) => item.type === "skirt");
  //     displayItems(skirts);
  //   } else {
  //     displayItems(items);
  //   }
};

const setEventListeners = (items) => {
  const logo = document.querySelector(".logo");
  const buttons = document.querySelector(".buttons");

  console.log(items);

  logo.addEventListener("click", () => displayItems(items));
  buttons.addEventListener("click", (event) => onButtonClick(event, items));
};

const btn = document.querySelector("button");

btn.addEventListener("click", setEventListeners);

loadItems().then((items) => {
  displayItems(items);
  setEventListeners(items);
});

// const renderItems = async () => {
//   let items = await loadItems();
//   let html = "";
//   items.forEach((item) => {
//     const li = `<li>
//     <img src=${item.image}>
//       ${item.gender}, ${item.size}
//       </li>`;

//     html += li;
//   });
//   console.log(items);
//   const ul = document.querySelector("ul");
//   //   ul.appendChild(html);
//   ul.innerHTML = html;
// };

// const blueBtn = document.querySelector(".blue");

// const filter = () => {
//   console.log("aa");
// };

// blueBtn.addEventListener("click", filter);
