const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];
const ulEl = document.querySelector("#ingredients");
console.log(ulEl);

// const liEl = ingredients
//   .map((ingredient) => `<li class="item">${ingredient}</li>`)
//   .join("");
// ulEl.insertAdjacentHTML("beforebegin", liEl);

const liEl = document.createElement("li");
liEl.classList.add("item");
liEl.textContent = ingredients[0];

const liEl2 = document.createElement("li");
liEl2.classList.add("item");
liEl2.textContent = ingredients[1];

const liEl3 = document.createElement("li");
liEl3.classList.add("item");
liEl3.textContent = ingredients[2];

const liEl4 = document.createElement("li");
liEl4.classList.add("item");
liEl4.textContent = ingredients[3];

const liEl5 = document.createElement("li");
liEl5.classList.add("item");
liEl5.textContent = ingredients[4];

const liEl6 = document.createElement("li");
liEl6.classList.add("item");
liEl6.textContent = ingredients[5];

ulEl.append(liEl, liEl2, liEl3, liEl4, liEl5, liEl6);
