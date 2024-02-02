let p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log('Resolved after 2 seconds');
        resolve(56);
    }, 2000);
})

p1.then((value) => {
    console.log(value);
    let p2 = new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Promise 2 Resolved after 3 seconds');
            resolve('Promise 2');
        }, 3000);
    })

    return p2;
}).then((value) => {
    console.log(value + ' We are done');
})

const loadScript = (src) => {
    return new Promise ((resolve, reject) => {
        let script = document.createElement('script');
        script.src = src
        document.head.appendChild(script);
        script.onload = () => {
    resolve('Script has been Loaded Succesfully')
        }

        script.onerror = () => {
            reject(Error)
        }
    })
}

let p3 = loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js");
p3.then((value)=>{
    console.log(value);
    
    return loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js")
}).then((value)=>{
    console.log("Second Script Loaded");
}).catch((error)=>{
    console.log('Error, Could Not Load Script');
})