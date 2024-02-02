let titlecolor = 'red' //prompt("Enter color for card title")
let title = document.getElementById("first-card-title").style.color = titlecolor;

let sel = document.querySelectorAll(".card-title")
sel[1].style.color = 'Green';
sel[2].style.color = 'Blue';
console.log(sel);

document.querySelector(".this").style.background = 'green'
document.querySelector(".this").style.border = 'none'
document.querySelector(".this").style.fontWeight = '500'
document.querySelector(".this").style.color = 'yellow'