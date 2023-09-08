// JavaScript to populate dynamic data
const currentDayOfTheWeek = document.getElementById("currentDayOfTheWeek");
const currentUTCTime = document.getElementById("currentUTCTime");

// Function to get the current day of the week
function getCurrentDayOfTheWeek() {
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const today = new Date();
  return days[today.getDay()];
}

// Function to get the current UTC time in milliseconds
function getCurrentUTCTime() {
  return Date.now();
}

// Update the page elements with data
currentDayOfTheWeek.textContent = getCurrentDayOfTheWeek();
currentUTCTime.textContent = getCurrentUTCTime();
