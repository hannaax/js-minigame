const loadItems = () => {
  return fetch("data/data.json")
    .then((res) => res.json())
    .then((json) => json.items);
};

const displayItems = (items) => {
  const container = document.querySelector(".items");
};

loadItems().then((items) => {
  console.log(items);
  displayItems(items);
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