// -------- Chapter 05 Practice Set -------- //
/*
// Answer No.1 
let arr = [5, .4, 3, 8, 43];
let a = "3" // prompt("Enter a Number to add into the Array");
a = Number.parseInt(a);
arr.push(a);
console.log(arr);

// Answer No.2
let arr2 = [5, 4, 3, 8, 43];
let b;
do {
    b = prompt("Enter a Number to add into the Array");
    b = Number.parseInt(b);
    arr2.push(b);
} while(b != 0);
console.log(arr2);*/

// Answer No.3
let arr3 = [40, 32, 19, 50, 99, 130, 56, 90];
let FilteredArray = arr3.filter((value)=>{
    return value % 10 == 0
});
console.log(FilteredArray);

// Answer No.4
let arr4 = [4, 2, 9, 5, 3, 6];
let MapedArray = arr4.map((value)=>{
    return value * value
});
console.log(MapedArray);

// Answer No.5
let arr5 = [1, 2, 3, 4, 5];
let  ReducedArray = arr5.reduce((x1, x2)=>{
    return x1 * x2
});
console.log(ReducedArray);