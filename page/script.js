const allBtn = document.querySelectorAll(".filter-btn");
const content = document.querySelector(".content-container");

const data = [
  {
    id: 1,
    title: "된장국",
    img: "https://recipe1.ezmember.co.kr/cache/recipe/2021/08/19/f5aa9d34f82117af9734eadfa9cefa1d1.jpg",
    category: "breakfast",
    price: "3000원",
    desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit.`,
  },
  {
    id: 2,
    title: "뼈다귀 해장국",
    img: "https://recipe1.ezmember.co.kr/cache/recipe/2020/03/23/2203061a5a73775649d12f9b79aa96f71.png",
    category: "dinner",
    price: "3000원",
    desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit.`,
  },
  {
    id: 3,
    title: "김밥",
    img: "https://upload.wikimedia.org/wikipedia/commons/0/0e/Gimbap_%28pixabay%29.jpg",
    category: "lunch",
    price: "3000원",
    desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit.`,
  },
  {
    id: 4,
    title: "미역국",
    img: "https://i.namu.wiki/i/gRYEv1mYsL0dRPEZheEF6R0nbu4QLoD3bb36HdRRP6Z-CP4yaU9x8GzJ7MK4NJMeogQPeiA495smmsAYwRha7g.webp",
    category: "lunch",
    price: "3000원",
    desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit.`,
  },
  {
    id: 5,
    title: "라면",
    img: "https://i.namu.wiki/i/8s7OaNPsZ8KC1e8RQ6QZEwgfFUoIVVOIm0jA72-UO6Imw0OgI1aEK_DulMeXWbg4tstts3IQFMJS0jmYKD9rzQ.webp",
    category: "dinner",
    price: "3000원",
    desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit.`,
  },
  {
    id: 6,
    title: "수박 쉐이크",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTK9chFE6Mmy-QtYvyAxn4cfVQ4qMQziCSe_4dCxv6vg&s",
    category: "shakes",
    price: "3000원",
    desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit.`,
  },
  {
    id: 7,
    title: "참외 쉐이크",
    img: "https://recipe1.ezmember.co.kr/cache/recipe/2018/06/17/359981a4a2278616e8925da255ea60581.jpg",
    category: "shakes",
    price: "3000원",
    desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit.`,
  },
];

const makeTable = (item) => {
  const menu = document.createElement("div");
  menu.classList.add("content");
  const img = document.createElement("img");
  const title = document.createElement("h3");
  const price = document.createElement("p");
  const desc = document.createElement("p");
  img.src = item.img;
  img.alt = item.title;
  img.height = 200;
  title.innerText = item.title;
  price.innerText = item.price;
  desc.innerText = item.desc;
  menu.appendChild(title);
  menu.appendChild(img);
  menu.appendChild(price);
  menu.appendChild(desc);
  return menu;
};

const menus = data.forEach((item) => {
  content.appendChild(makeTable(item));
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
      content.appendChild(makeTable(item));
    });
  });
});
