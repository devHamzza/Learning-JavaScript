let insertP = document.getElementsByTagName("div")[0];
console.log(insertP);
insertP.innerHTML = insertP.innerHTML + "<p onclick=\"changeElement()\">Click Me to change me</p>" 
const changeElement = () => {
let p = prompt("Input a Paragraph");
   insertP.getElementsByTagName("p")[0].innerHTML = `<p>${p}</p>`
}

let div = document.createElement('div');
div.innerHTML = "<h1>I am Muhammad Hamza</h1>";
document.body.appendChild(div);

for (let i = 0; i < 10; i++) {
let div = document.createElement('div');
div.innerHTML = `<h1>I am Muhammad Hamza ${i+1}</h1>`;
document.body.appendChild(div);
}