// ----------  Map, Filter and Reduce in JavaScript ---------- //

//Array Map Method
console.log("Array Map Method");
let arr = [45, 23, 67];
let a = arr.map((value, index, array)=> {
    console.log(value, index, array);
    return value + index;
})
console.log(a);
console.log(arr);

//Array Filter Method
console.log("\nArray Filter Method");
let arr2 = [8, 3, 17, 4, 12, 9];
let ArrFilter = arr2.filter((value, index)=>{
    return value<10
})
console.log(ArrFilter);

//Array Reduce Method
console.log("\nArray Reduce Method");
let arr3 = [30, 5, 3, 7, 2, 6];
let ArrReduced = arr3.reduce((val1, val2)=> {
    return val1 + val2
})
console.log(ArrReduced);