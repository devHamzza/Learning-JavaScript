

try {
//     let age  = prompt("Enter Your Age");
// age = parseInt(age);
//     if (age>120) {
        throw new ReferenceError("Probably Age is not Correct")
    // }
} catch (error) {
    console.log("An error has occured -  \n" + error.name + "\n" + error.message  + "\n" + error.stack);
    console.log(Harry);
}
console.log("Script Is Running");


setTimeout(() => {
    console.log("Hacking WIFI with SSID: Hamza");
}, 1000);

setTimeout(() => {
    console.log("Geting Password... Please Wait...");
}, 3000);


try {
    console.log(Harry);
} catch (error) {
    console.log("An error has occured -" +error);
}
setTimeout(() => {
    console.log("Targeted WIFI hacked. Now Hacking Facebook accounts which are connected to the WIFI...");
}, 6000);

setTimeout(() => {
    console.log("Getting Username and Password of Facebook Account...");
}, 12000);

setTimeout(() => {
    console.log("Facebook Accounts hacked Succcessfully.");
}, 18000);