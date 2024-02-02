// async function FetchAPI() {
//     let response = await fetch('https://api.openweathermap.org/data/2.5/weather?q=shorkot&units=metric&appid=80579ed679114de349886b0843234caa');
//     let r = await response.json()
//     console.log(r);

//     for (let [key, value] of response.headers) {
//         alert(`${key} = ${value}`);
//       }
    
// }

// FetchAPI()

async function getUsers(names) {
    let jobs = [];
  
    for(let name of names) {
      let job = fetch(`https://api.github.com/users/${name}`).then(
        successResponse => {
          if (successResponse.status != 200) {
            return null;
          } else {
            return successResponse.json();
          }
        },
        failResponse => {
          return null;
        }
      );
      jobs.push(job);
    }
  
    let results = await Promise.all(jobs);
  
    return results;
    console.log(results);
  }

  getUsers()