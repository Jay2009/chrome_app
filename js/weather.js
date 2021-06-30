const weather = document.querySelector("#weather span:first-child");
const city = document.querySelector("#weather span:last-child");
const API_KEY ="bac12dcf9206f942ceff656cdfc55684";

function onGeoOk(position){
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url =`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    
    fetch(url)
    .then((response) => response.json())
    .then((data) => {
      city.innerText = `/ ${data.name}`;
      weather.innerText = `${data.weather[0].main} / ${data.main.temp}ºC`;
    });
}

function onGeoError() {
    alert("Sorry, the weather service is not applicable to your location.");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);