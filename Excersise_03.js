const RandomJoke = () => {


let RandomNumber = Math.floor(Math.random() * 30);



const joke = [
  "Why don't scientists trust atoms? Because they make up everything.",
  "I told my wife she was drawing her eyebrows too high. She looked surprised.",
  "Why don't eggs tell jokes? They'd crack each other up.",
  "I'm reading a book on anti-gravity. It's impossible to put down!",
  "I used to be indecisive. Now I'm not sure.",
  "I told a chemistry joke once, but there was no reaction.",
  "Why did the tomato turn red? Because it saw the salad dressing!",
  "I stayed up all night wondering where the sun went. Then it dawned on me.",
  "Why did the hipster burn his tongue? He drank his coffee before it was cool.",
  "I told my wife she was overreacting. She just rolled her eyes at me. So I picked them up and rolled them back.",
  "What do you call a fake noodle? An impasta.",
  "I told my wife she was drawing her eyebrows too high. She looked surprised.",
  "Why do we tell actors to 'break a leg?' Because every play has a cast.",
  "What's the difference between a poorly dressed man on a unicycle and a well-dressed man on a bicycle? Attire.",
  "Why did the scarecrow win an award? Because he was outstanding in his field.",
  "I used to play piano by ear, but now I use my hands.",
  "What do you call a snowman with a six-pack? An abdominal snowman.",
  "I'm reading a book on the history of glue. I just can't seem to put it down.",
  "Why don't some couples go to the gym? Because some relationships don't work out.",
  "What did the janitor say when he jumped out of the closet? Supplies!",
  "Why was the math book sad? Because it had too many problems.",
  "I'm on a whiskey diet. I've lost three days already.",
  "How do you organize a space party? You planet.",
  "Why did the coffee file a police report? It got mugged.",
  "I'm thinking of telling a joke about sodium, but Na, people wouldn't get it.",
  "Did you know that diarrhea is hereditary? It runs in your genes.",
  "What do you call a bee that can't make up its mind? A maybe.",
  "Why don't scientists trust atoms? Because they make up everything.",
  "Why don't skeletons fight each other? They don't have the guts.",
  "What do you get when you cross a snowman and a shark? Frostbite.",
][RandomNumber];

let a = document.getElementsByTagName('div')[0];
let p = a.getElementsByTagName('p')[0];


      p.innerHTML = joke

    let div = document.getElementsByTagName('div')[0];
let para = div.getElementsByTagName('p')[0];
let head = div.getElementsByTagName('h1')[0];

let RandomNumber1 = Math.floor(Math.random() * 5);
let color = ['#ff3e3e', '#75ff4a', '#00ffea', ' #fc97ff', '#ffe600' ][RandomNumber1]

para.style.background = color;
para.style.color = 'black';
para.style.border = 'none';
head.style.color = color;
}
