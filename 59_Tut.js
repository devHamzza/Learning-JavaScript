async function hamza (){
        let ShorkotWeather = new Promise ((resolve, reject) => {
            setTimeout(() => {
                resolve("Cloudy, 13 Celcius")
            }, 7000);
        })

        let JhangWeather = new Promise ((resolve, reject) => {
            setTimeout(() => {
                resolve("Sunny, 31 Celcius")
            }, 12000);
        })
        
        document.write("<h1> Fetching Shorkot and Jhang Weather, Please Wait..."+ "<br></h1>");
        let ShorkotW = await ShorkotWeather;
       document.write("<h3> Shorkot Weather is: " + ShorkotW + "<br></h3>");
       document.write("<h3> Fetching Jhang Weather, Please Wait..."+ "<br></h3>");
        let JhangW = await JhangWeather;
       document.write("<h3> Jhang Weather is: " + JhangW+ "<br></h3>");
        return [ShorkotW, JhangW]
}

hamza().then((value) =>{
   console.log(value);
})
