
// let p = fetch('https://goweather.herokuapp.com/weather/jhang');
// p.then(response=>{
//     console.log(response.status);
//     console.log(response.ok);
//     console.log(response.headers);
//     return response.json()
// }).then(value =>{ 
//     console.log(value);
// })


// For Tutorial 67
let ToDo = async (To) => {
    let options = {
        method: "POST",
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify(To),
    }

    let p = await fetch('https://jsonplaceholder.typicode.com/posts', options)
    let response = await p.json();
    return response
}

const GetToDo = async (id) => {
   let response = await fetch('https://jsonplaceholder.typicode.com/posts?userId=' + id)
    let r = response.json()
    return r
}

const mainFunc = async () =>{
    let To = {
        title: 'Hamza',
        body: 'Programmer',
        userId: 56,
    }
    let ToDone = await ToDo(To)
    console.log(ToDone);
    console.log(await GetToDo(13));
}

mainFunc()