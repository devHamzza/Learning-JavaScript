// ----------- Script Tag in HTML ----------- //

let a = 9;
let b = 8;
console.log("Hello Hamza here");
console.error("Hello Error here");
console.assert("Hello Error here");
let obj = {
    Hamza: 56, Sidra: 67, Junaid: 68, Moon: 23
}
console.table(obj);

// console.warn("Don't drink this hzardous Water");
// console.info("Don't drink this hzardous Water");

let arr = [3, 5, 7, 3, 8, 2, 50];

console.time("ForLoop")
for (let i = 0; i < arr.length; i++) {
    console.log(arr[i])
}
console.timeEnd("ForLoop")  
