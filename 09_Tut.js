//Program to add first n Natural Numbers

let sum = 0;
let n = 5; //prompt("Enter the number!");
n = Number.parseInt(n)
for(let i = 0; i < n; i++) {
    sum += (i+1);
}

console.log("The sum of first " + n + " Natural Numbers is " + sum ); 

let obj = {
    Hamza: 42,
    Babar: 62,
    Rizwan: 34,
    Fakhar: 0
}

for (let a in obj) {
    console.log("Score of " + a + " are " + obj[a]);
}