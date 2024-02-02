let a = prompt("Hello What is Your Age?");
a = Number.parseInt(a)

if (a>18) {
    alert("You are Eligible for this Job")
}
else if (a<18) {
    alert("You are not Eligible for this Job")
}

else {
    alert("Wrong Input")
}
// a = 76;
// console.log("You can", (a < 18 ? "Not Drive" : "Drive"))
