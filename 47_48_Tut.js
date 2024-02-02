let btn = document.getElementById('btn');
// let a = prompt('Enter a color!');


const red = () => {
     document.getElementsByTagName("h1")[0].style.color = '#be0000';
}

const blue = () => {
     document.getElementsByTagName("h1")[0].style.color = 'blue';
}

const black = () => {
     document.getElementsByTagName("h1")[0].style.color = 'black';
}

btn.addEventListener('click', red);

let btn2 = document.getElementById('btn2');

btn2.addEventListener('click', blue);

let btn3 = document.getElementById('btn3');

btn3.addEventListener('click', black);


// if (a == "red") {
//      btn.removeEventListener('click', blue);
// }