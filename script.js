
const weathericon = document.querySelector(".Weather-icon");

const apiKey = "4e20d2e3e93ce7c7e66aa3789eb6f231";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q="

async function checkWeather(city) {
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);

    if(response.status == 404){
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";
    }else{
        var data = await response.json();
    
        document.querySelector(".temp h3").innerHTML = Math.round(data.main.temp) + "°C";
        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".humiData").innerHTML = data.main.humidity + "%";
        document.querySelector(".windData").innerHTML = data.wind.speed + " km/h";
    
        
        if(data.weather[0].main == "Haze"){
            weathericon.src = "images/haze.png";
        }else if(data.weather[0].main == "Clear"){
            weathericon.src = "images/clear.png";
        }else if(data.weather[0].main == "Rain"){
            weathericon.src = "images/rain.png";
        }else if(data.weather[0].main == "Clouds"){
            weathericon.src = "images/clouds.png";
        }else if(data.weather[0].main == "Drizzle"){
            weathericon.src = "images/drizzle.png";
        }
        
        document.querySelector(".weather").style.display = "block";
        document.querySelector(".error").style.display = "none";
    }
    

}

const searchBox = document.querySelector(".search input");
const btn = document.querySelector(".search button");
btn.addEventListener("click",()=>{
        checkWeather(searchBox.value);
})