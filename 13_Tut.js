//<--------- Strings --------->

let Hamza = "Hamza";
console.log("There are " + Hamza.length + " Letters in " + Hamza + "\nWhich are as Follows:");

for(let i = 0; i<(Hamza.length); i++) {
    console.log(Hamza[i]);
}

//Template Literals
let HTML = 'HTML', CSS3 = 'CSS3', JS = 'JavaScript'
let sentence = `I have learnt ${HTML}, ${CSS3} and ${JS}`
console.log(sentence);

//Escape Sequence Characters
let Escape = `Ham\rza`
console.log(Escape);