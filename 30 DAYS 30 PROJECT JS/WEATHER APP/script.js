const apikey = "9ffbfc01a81920ba1902bfa39ace125d";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");

async function checkWeather(city){
    const response = await fetch(apiUrl + city +`&appid=${apikey}`);
    var data = await response.json();

    if(response.status==404){
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";
    }
    else{
        console.log(data)

        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp) +"°C";
        document.querySelector(".humidity").innerHTML = data.main.humidity +"%";
        document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";
    
        if(data.weather[0].main == "Clouds"){
            weatherIcon.src ="img/images/clouds.png";
        }
        else if(data.weather[0].main == "Clear"){
            weatherIcon.src ="img/images/clear.png";
        }
        else if(data.weather[0].main == "Rain"){
            weatherIcon.src ="img/images/rain.png";
        }
        else if(data.weather[0].main == "Drizzle"){
            weatherIcon.src ="img/images/drizzle.png";
        }
        else if(data.weather[0].main == "Mist" || data.weather[0].main == "Haze"){
            weatherIcon.src ="img/images/mist.png";
        }
    
        document.querySelector(".weather").style.display = "Block"
        document.querySelector(".error").style.display = "none";
    }

}

searchBtn.addEventListener("click",()=>{
    checkWeather(searchBox.value);
})

