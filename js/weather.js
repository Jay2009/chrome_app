const weather = document.querySelector("#weather i");
const temperature =document.querySelector("#weather span:first-of-type");
const city = document.querySelector("#weather span:last-child");
const API_KEY ="bac12dcf9206f942ceff656cdfc55684";

/*
let weatherEmogi = data.weather[0].main;
if(weather === "Clouds"){
  weather.classList.add('fas', 'fa-cloud-sun');
}else {
  weather.classList.add('fas', 'fa-cloud');
} */



function onGeoOk(position){
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url =`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    

    fetch(url)
    .then((response) => response.json())
    .then((data) => {
      let weatherEmogi = data.weather[0].main;
      
      if(weatherEmogi === "Clouds"){
        weather.classList.add('fas', 'fa-cloud-sun');
      }
      else if(weatherEmogi === "Clear"){
        weather.classList.add('fas', 'fa-sun');  
      }
      else if(weatherEmogi === "Thunderstorm"){
        weather.classList.add('fas', 'fa-bolt');  
      }
      else if(weatherEmogi === "Drizzle"){
        weather.classList.add('fas', 'fa-water');  
      }
      else if(weatherEmogi === "Rain"){
        weather.classList.add('fas', 'fa-umbrella');  
      }
      else if(weatherEmogi === "Snow"){
        weather.classList.add('fas', 'fa-snowflake');  
      }
      else if(weatherEmogi === "Atmosphere"){
        weather.classList.add('fas', 'fa-smog');  
      }
      else {
        weather.classList.add('fas', 'fa-cloud');
        
      }

      
      city.innerText = ` ${data.name}`;
      temperature.innerText = `${data.main.temp}ºC`;
    });
  
    
}



function onGeoError() {
    alert("Sorry, the weather service is not applicable to your location.");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);