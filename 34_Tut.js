
let b = document.body
let c = document.body.firstElementChild;
console.log("First Child of b is ", b.firstChild);
console.log("First Element Child of b is ", b.firstElementChild);
// c.style.background = "red"

const ChangeBackgroundColor = (hello) => {
    hello.style.background = "red"
 }

 ChangeBackgroundColor(c);