// ---------- Array Methods ----------- //

let num = [3, 4, 8, 6, 9, 32];
console.log(num);
console.log(num.length);
delete num[0];
console.log(num);
console.log(num.length);

let num2 = [45, 67];
let num3 = [47, 98, 21, 45, 32, 89];

let NewArray = num.concat(num2, num3)
console.log(NewArray);


let hello = ["Banana", "Apple", "Grapes", "Gava", "Date"];
let SortedArray2 = hello.sort()
console.log(SortedArray2);

//Sort Function That is being used to sort the numbers in the ascending order.
let ascending = (a, b) => {
    return a - b;
}
let num4 = [47, 98, 21, 45, 555, 76, 32, 89];
// let hello = {"Banana" "Apple", "Grapes", "Gava", "Date"};
let AscendingSortedArray = num4.sort(ascending)
console.log(AscendingSortedArray);

//Sort Function That is being used to sort the numbers in the descending order.
let descending = (a, b) => {
    return b - a;
}
let num5 = [47, 98, 21, 45, 555, 76, 32, 89];
let SortedArray = num4.sort(descending)
console.log(SortedArray);


//Splice and Slice
let num6 = [47, 98, 21, 45, 76, 32, 89];
// num6.splice(5, 2, 11, 12)
// console.log(num6);


let SlicedArray = num6.slice(3);
console.log(SlicedArray);