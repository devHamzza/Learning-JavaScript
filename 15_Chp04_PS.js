// ----------  Chapter 04 Practice Set ------------

// Question No.1
console.log("Answer No.1");
let s = "har\""
console.log(s.length);

// Question No.2
console.log("\nAnswer No.2");

let sentence = "I am a Full Stack Laravel Website Developer"
let word = "Laravel"
// console.log(sentence.includes(word));
console.log(`The Word ${word} ${sentence.includes(word)? 'is' :'is not'} in the Sentence`);

// Question No.4
let str = "Please give Rs: 1000";
let amount = Number.parseInt(str.slice(15));
console.log(amount);
console.log(typeof amount);