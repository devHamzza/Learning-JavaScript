let p1 = new Promise((resolve, reject)=>{
    console.log('Hey I am Resolved yet')
    setTimeout(() => {
        resolve(1);
    }, 2000);
});

p1.then((value)=>{ 
    console.log('Hurrah!');
})

p1.then((value)=>{
    console.log('Congrats, This Promise is Now resolved with value: ' + value);
})