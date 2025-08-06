const timeDiv = document.querySelector('#time');
const dateDiv = document.querySelector('.date');
const btn = document.querySelector('#button');
let is24hours = false;

function updateTime() {
  if (is24hours) {
    timeDiv.innerText = new Date().toLocaleTimeString('en-GB', { hour12: false });
  } else {
    timeDiv.innerText = new Date().toLocaleTimeString();
  }
}

function updateDate() {
  dateDiv.innerText = new Date().toLocaleDateString('en-IN');
}

btn.addEventListener('click', () => {
  console.log('Hello');
  is24hours = !is24hours;
  btn.innerText = is24hours
    ? "Switch to 12-hour format"
    : "Switch to 24-hour format";
  updateTime();
});

setInterval(updateTime, 1000);
updateDate();
updateTime();
