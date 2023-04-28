const day = document.querySelector(".day");
const date = document.querySelector(".date");
const time = document.querySelector(".time");
const dayOfYear = document.querySelector(".day-of-year");
const newYearCounter = document.querySelector(".new-year-counter");

const dayNamePl = [
  "Poniedziałek",
  "Wtorek",
  "Środa",
  "Czwartek",
  "Piątek",
  "Sobota",
  "Niedziela",
];

const monthNamePl = [
  "Stycznia",
  "Lutego",
  "Marca",
  "Kwietnia",
  "Maja",
  "Czerwca",
  "Lipca",
  "Sierpnia",
  "Września",
  "Października",
  "Listopada",
  "Grudnia",
];

getDate = function () {
  const dateTime = new Date();

  const h = dateTime.getHours();
  const m = dateTime.getMinutes();
  const hh = h < 10 ? "0" + h : h;
  const mm = m < 10 ? "0" + m : m;
  const timePl = hh + ":" + mm;
  const dayPl = dayNamePl[dateTime.getDay() - 1]; //Name "Sroda"
  const datePl = dateTime.getDate() + " " + monthNamePl[dateTime.getMonth()]; // Name Luty

  //More info
  const currentYear = new Date().getFullYear();
  const newYearTime = new Date(`January 1, ${currentYear} 00:00:00`);
  const newYearTime2 = new Date(`January 1, ${currentYear + 1} 00:00:00`);

  const currentDay = newYearTime - dateTime;
  const dayOfYear1 = Math.floor(currentDay / 1000 / 60 / 60 / 24); // day of Year

  const diff = newYearTime2 - dateTime;
  const daysCounter = Math.floor(diff / 1000 / 60 / 60 / 24);
  const hoursCounter = Math.floor(diff / 1000 / 60 / 60) % 24;
  const minutesCounter = Math.floor(diff / 1000 / 60) % 60;
  const secondsCounter = Math.floor((diff / 1000) % 60);

  day.innerHTML = dayPl;
  date.innerHTML = datePl;
  time.innerHTML = timePl;
  dayOfYear.innerHTML = `Dziś jest ${-dayOfYear1} dzień roku`;
  newYearCounter.innerHTML = `${daysCounter} dni ${hoursCounter} godzin ${minutesCounter} minut ${secondsCounter} sekund`;
};

setInterval(getDate, 1000);

const currentYear = new Date().getFullYear();
const newYearTime = new Date(`January 1, ${currentYear} 00:00:00`);

const currentTime = new Date();

console.log(currentYear);

const currentDay = newYearTime - currentTime;
const d = Math.floor(currentDay / 1000 / 60 / 60 / 24);
console.log(-d);
