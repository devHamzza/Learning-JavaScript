// Chapter N0.3 Practice Set

//<---------- Question No.01 ---------->
console.log("Answer No.1 ")
let markss = {
    Hamza: 45,
    Wahab: 44,
    Hassan: 37,
    Junaid: 43
}

for ( let i=0; i<Object.keys(markss).length; i++ ){
    console.log("Marks of "+ Object.keys(markss)[i] + " are " + markss[Object.keys(markss)[i]])
}

//<---------- Question No.02 ---------->
console.log("\n Answer No.2")
let marks = {
    Hamza: 45,
    Wahab: 44,
    Hassan: 37,
    Junaid: 43
}

for (let a in marks) {
    console.log("Marks of "+ a + " are " + marks[a])
} 


//<---------- Question No.03 ---------->
// console.log("\n Answer No.3")
// let CorrectNumber = 56;
// let  i;
// while (i != CorrectNumber) {
//    i = prompt("Enter the Jersey Number of Babar Azam!");
//    console.log("Wrong, Answer Please Try Again!")
// }

// console.log("You have entered the correct number.")


//<---------- Question No.04 ---------->
console.log("\n Answer No.4")
let mean=(x, y, z, a, b)=>{
    return (x+y+z+a+b)/5;
}

console.log ("Mean of 5 numbers is " + mean(2, 3, 4, 5, 6));