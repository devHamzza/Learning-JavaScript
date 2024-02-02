/* // Syncronous Programming

let a = prompt("What is your name?");
let b = prompt("What is Your Age?");
let c = prompt('What is ypur favourite color?');

document.write(a +' is '+ b + ' years old and his favourite color is '+ c);

// Asyncronous Programming
document.write('<br> Start');

setTimeout(function(){
document.write('It is Asyncronous Programming.');
}, 3000)

document.write('j<br> End'); */

// Callbacks 

function loadScript(src, callback) {
    let script = document.createElement('script');
    script.src = src;
    script.onload = function() {
        console.log('Success. Loaded Script with SRC: ' + src)
        callback(null, src);
    }

    script.onerror = function() {
        console.log('Error. Wrong Script with SRC: ' + src);
        callback(new Error('SRC got some error'));
    }

    document.body.appendChild(script);
}

const hello = (error, src) => {

    if (error){
        console.log(error);
        return
    }
    document.write('<h1>Bootsrap Script is Succesfully Loaded</h1>' + src);
}


loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js", hello);
