let promise = new Promise(function(resolve, reject){
    // alert('Hello');
    resolve('56')
})

console.log('Hello');

setTimeout(function() {
    console.log('Hello after Two seconds');
}, 2000);

console.log('I am Hamza');
console.log(promise);