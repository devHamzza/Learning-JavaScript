let first = document.getElementById("first");
let a = first.getAttribute("class");
console.log(a);

console.log(first.hasAttribute("class"));
console.log(first.hasAttribute("style"));

function hideElement() {
first.setAttribute("hidden", "true");  }

console.log(first.dataset)
console.log(first.dataset.game)
console.log(first.dataset.hamza)