const itemEl = document.querySelectorAll(".item");
console.log("Number of categories:", itemEl.length);

const categoriesEl = document.querySelectorAll("h2");
const elements = document.querySelectorAll(".item ul");

console.log("Category:", categoriesEl[0].textContent);
console.log("Elements:", elements[0].childElementCount);
console.log("Category:", categoriesEl[1].textContent);
console.log("Elements:", elements[1].childElementCount);
console.log("Category:", categoriesEl[2].textContent);
console.log("Elements:", elements[2].childElementCount);
