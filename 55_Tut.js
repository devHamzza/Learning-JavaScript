let p1 = new Promise((resolve, reject) => {
    console.log('Promise is pending');
    setTimeout(() => {
        // console.log('I am a promise and I am Fulfilled');
        resolve(true);
    }, 3000);
})

let p2 = new Promise((resolve, reject) => {
    console.log('Promise is pending');
    setTimeout(() => {
        // console.log('I am a promise and I am Rejected');
        reject(new Error('I am an Error'))
    }, 3000);
})

p1.then((value)=> {
    console.log(value);
})

p2.catch((error)=>{
    console.log('Some Error Occured in P2');
})

let a = new Promise(resolve =>{
    setTimeout(() => {
        resolve('done')
    }, 2000);
})

let b = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject('error')
    }, 2000);
})

a.catch(alert);