// Feature #1 - Display time & date

function whatDayIsIt() {
  let now = new Date();

  let date = now.getDate();
  let day = now.getDay();
  let weekDays = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday"
  ];
  day = weekDays[day];
  let month = now.getMonth();
  let allMonths = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ];
  month = allMonths[month];
  let hours = now.getHours();
  let minutes = now.getMinutes();

  // if the minutes are lower than 10, we still want them to have two digits
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }

  // if the date is the first, second or third, the appendix "th" is different
  switch (date) {
    case 1:
      date = `${date}st`;
      break;
    case 21:
      date = `${date}st`;
      break;
    case 31:
      date = `${date}st`;
      break;
    case 2:
      date = `${date}nd`;
      break;
    case 22:
      date = `${date}nd`;
      break;
    case 3:
      date = `${date}rd`;
      break;
    case 23:
      date = `${date}rd`;
      break;
    default:
      date = `${date}th`;
  }

  let elaborateNow = `${day} ${date} ${month}, ${hours}:${minutes}`; // Wednesday 24th March, 10.30

  let currentDate = document.querySelector(".current__date");
  currentDate.innerHTML = elaborateNow;
}
whatDayIsIt();
setInterval(whatDayIsIt, 60000);

// Feature #2 - Update the city with form input

let currentCity = document.querySelector(".current__title");
let searchForm = document.querySelector(".searcher");

function updateCity(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#city");
  currentCity.innerHTML = searchInput.value;
}

searchForm.addEventListener("submit", updateCity);

// Feature #3 - Celsius / Farhenreit Converter

let currentTemp = document.querySelector(".current__temperature");
let conversorBox = document.querySelector(".temp-converter");
let conversorButton = document.querySelector("#converter");

function displayBox() {
  conversorBox.style.display = "inline-block";
  setTimeout(hideBox, 2000);
}
function hideBox() {
  conversorBox.style.display = "none";
}

currentTemp.addEventListener("mouseover", displayBox);
// currentTemp.addEventListener("mouseout", hideBox);

conversorButton.addEventListener("click", function () {
  let minTemp = document.querySelector("#current-temp-min");
  let maxTemp = document.querySelector("#current-temp-max");
  let tempFormat = document.querySelectorAll(".temp-format");

  function turnTempToF(temp) {
    return temp * 1.8 + 32;
  }

  function turnTempToC(temp) {
    return (temp - 32) / 1.8;
  }

  if (conversorButton.innerHTML == "See in °F") {
    // if true, we want the temp to be converted to F
    console.log("Converting to Farhrenheit...");
    let newMinTemp = turnTempToF(minTemp.innerHTML);
    let newMaxTemp = turnTempToF(maxTemp.innerHTML);

    minTemp.innerHTML = newMinTemp;
    maxTemp.innerHTML = newMaxTemp;

    conversorButton.innerHTML = "See in °C";
    tempFormat.forEach(function (el) {
      el.innerHTML = " °F";
    });
  } else {
    // if false, (it must say - See in ºC) we want the temp to be converted to C
    console.log("Converting to Celsius...");

    let newMinTemp = turnTempToC(minTemp.innerHTML);
    let newMaxTemp = turnTempToC(maxTemp.innerHTML);

    minTemp.innerHTML = newMinTemp;
    maxTemp.innerHTML = newMaxTemp;

    conversorButton.innerHTML = "See in °F";
    tempFormat.forEach(function (el) {
      el.innerHTML = " °C";
    });
  }
});
