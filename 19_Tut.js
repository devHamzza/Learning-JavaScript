// ---------------- Array and Loops ----------------- // 

let num = [5, 7, 3, 9, 12];

//Classical For Loop
console.log("Classical For Loop");
for(let i = 0; i<num.length; i++) {
    console.log(num[i]);
}


//For Each Loop of JavaScript
console.log("\nFor Each Loop of JavaScript");
num.forEach((Element)=> {
    console.log(Element*Element)
})


//Array.from 
console.log("\nArray.from");
let names = 'Hamza'
let arr = Array.from(names)
console.log(arr);


//For Of Loop
console.log("\nFor Of Loop");
for (const i of num) {
    console.log(i);
}


//For In Loop
console.log("\nFor In Loop");
for (const item in num) {
    console.log(num[item]);
}
