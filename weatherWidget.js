const icon = document.querySelector(".icon");
const temperature = document.querySelector(".temperature");
const description = document.querySelector(".description");
const localization = document.querySelector(".localization");
const moreBtnOpen = document.querySelector(".openBtn");
const moreBtnClose = document.querySelector(".closeBtn");
const moreInfo = document.querySelector(".more-info");
const feelsTemp = document.querySelector(".feels-temp");
const pressure = document.querySelector(".pressure");
const humidity = document.querySelector(".humidity");

const KELVIN = 273;
const key = "ecaf716bbde7f51ed0fbdef35ab28cc9";
const lat = 50.049683;
const lon = 19.944544;
const weather = {};
// weather.temperature = {};

getWeather = function () {
  let api = `https://api.openweathermap.org/data/2.5/weather?q=${cityname}&appid=${key}`;

  console.log(api);
  //   console.log(api);

  fetch(api)
    .then((response) => response.json())
    .then((data) => {
      weather.temperature = Math.floor(data.main.temp - KELVIN);
      weather.icon = data.weather[0].icon;
      weather.description = data.weather[0].main;
      //   weather.city = data.name;
      weather.country = data.sys.country;

      weather.feelsTemp = Math.floor(data.main.feels_like - KELVIN);
      weather.pressure = data.main.pressure;
      weather.humidity = data.main.humidity;

      //   console.log(weather.humidity);
    })
    .then(function () {
      displayWeather();
    });
};

function displayWeather() {
  temperature.innerHTML = ` ${weather.temperature}°C`;
  icon.innerHTML = `<img src="${weather.icon}.png"/>`;
  description.innerHTML = `${weather.description}`;
  feelsTemp.innerHTML = `Temperatura odczuwalna: ${weather.feelsTemp}°C`;
  pressure.innerHTML = `Ciśnienie: ${weather.pressure}hPa`;
  humidity.innerHTML = `Wilgotność: ${weather.humidity}%`;
  //   localization.innerHTML = `${weather.city}, ${weather.country}`;
}

setInterval(getWeather, 1000);

moreBtnOpen.addEventListener("click", function (e) {
  console.log(e.target);
  moreInfo.classList.remove("hide");
  moreBtnClose.classList.remove("hide");
  //   moreBtnOpen.classList.add("hide");
});

moreBtnClose.addEventListener("click", function (e) {
  console.log(e.target);
  moreInfo.classList.add("hide");
  moreBtnClose.classList.add("hide");
  //   moreBtnOpen.classList.remove("hide");
});

const cityname = "Krakow";

let api2 = `https://api.openweathermap.org/data/2.5/weather?q=${cityname}&appid=${key}`;

console.log(api2);
