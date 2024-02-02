// --------- Chapter No.6 Practice Set ---------  //
/*
// Answer No.1 & No.2 & N0.3
let RunAgain = true;
const CanDrive = (age) => {
    return age >= 18 ? true : false;
}

while (RunAgain) {
    let age = prompt("Enter Your Age");
    age = Number.parseInt(age);

    if (age<0) {
        // Error("Please Enter a Valid Age");
        console.error("Please Enter a Valid Age");
        break;
    }

    if (CanDrive(age)) {
        alert("Yes Budy, You Can Drive")
    }

    else {
        alert("No Budy, You Cannot Drive")
    }
    
       RunAgain = confirm("Have you entered the wrong age?")
} */

// Answer No.4

let color = prompt("Enter the page background color");
document.body.style.color = color;
document.body.style.fontFamily = 'sans-serif';