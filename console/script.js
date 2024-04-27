const allBtn = document.querySelectorAll(".filter-btn");
const content = document.querySelector(".content-container");

const data = [
  {
    id: 1,
    title: "된장국",
    category: "breakfast",
    price: "3000원",
    desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit.`,
  },
  {
    id: 2,
    title: "뼈다귀 해장국",
    category: "dinner",
    price: "3000원",
    desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit.`,
  },
  {
    id: 3,
    title: "김밥",
    category: "lunch",
    price: "3000원",
    desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit.`,
  },
  {
    id: 4,
    title: "미역국",
    category: "lunch",
    price: "3000원",
    desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit.`,
  },
  {
    id: 5,
    title: "라면",
    category: "dinner",
    price: "3000원",
    desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit.`,
  },
  {
    id: 6,
    title: "수박 쉐이크",
    category: "shakes",
    price: "3000원",
    desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit.`,
  },
  {
    id: 7,
    title: "참외 쉐이크",
    category: "shakes",
    price: "3000원",
    desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit.`,
  },
];

const menus = data.forEach((item) => {
  const menu = document.createElement("div");
  menu.classList.add("content");
  const title = document.createElement("h3");
  const price = document.createElement("p");
  const desc = document.createElement("p");
  title.innerText = item.title;
  price.innerText = item.price;
  desc.innerText = item.desc;
  menu.appendChild(title);
  menu.appendChild(price);
  menu.appendChild(desc);
  content.appendChild(menu);
});

allBtn.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    const category = e.target.id;
    console.log(category);
    const menu = data.filter((item) => {
      if (item.category === category) {
        return item;
      } else if (category === "all") {
        return item;
      }
    });
    content.innerHTML = "";
    menu.forEach((item) => {
      const menu = document.createElement("div");
      menu.classList.add("content");
      const title = document.createElement("h3");
      const price = document.createElement("p");
      const desc = document.createElement("p");
      title.innerText = item.title;
      price.innerText = item.price;
      desc.innerText = item.desc;
      menu.appendChild(title);
      menu.appendChild(price);
      menu.appendChild(desc);
      content.appendChild(menu);
    });
  });
});
