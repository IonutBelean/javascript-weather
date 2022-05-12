const container = document.querySelector(".container");
const regionName = document.querySelector(".name")
const coordonate = document.querySelector(".coord");
const temperature = document.querySelector(".temp");
const latitude = document.querySelector(".latitude");
const longitude = document.querySelector(".longitude");


const getInformations = (lat, lon) => {

    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=e81f88d6a6bcd1631483569a95f62a0d`).then((response) => {
        response.json().then((data) => {
          
            console.log(data)

            regionName.innerHTML = `We are now in ${data.name} 🏙`;
    
            coordonate.innerHTML = `Latitude is ${lat} and longitude is ${lon}`;
    
            temperature.innerHTML = `Temperature now is ${data.main.temp}`;

          
    });
});

}; 

getInformations(46.7402752, 23.5143168)


