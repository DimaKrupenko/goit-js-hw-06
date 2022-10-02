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

const makeIngridients = (ingredients) => {
  return ingredients.map((ingredient) => {
    const itemRef = document.createElement("li");
    itemRef.textContent = ingredient;
    itemRef.classList.add("item");

    return itemRef;
  });
};

const elements = makeIngridients(ingredients);

ulEl.append(...elements);
