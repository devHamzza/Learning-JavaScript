function OnePlusAverage(x, y) {
    // console.log("Done")
    return Math.round(1 + (x + y) / 2) 
}

const sum =(p,q)=> {
    // return p + q;
    console.log(p+q)
}

const hello =()=> {
    console.log ("Hello Hamza How are You?")
}

a = 7;
b = 4;
c = 9;
let hi = hello();

console.log("Average of a and b is ", OnePlusAverage(a, b));
console.log("Average of b and c is ", OnePlusAverage(b, c));
console.log("Average of a and c is ", OnePlusAverage(a, c));
hello();
sum(9, 10);
console.log(sum(9, 8))