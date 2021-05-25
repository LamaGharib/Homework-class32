'use strict';
/*------------------------------------------------------------------------------
1. Inside the `index.js`, complete the `addCurrentTime` to add the current time 
  to the webpage. Make sure it's written in the HH:MM:SS notation (hour, minute,
  second). Use `setInterval()` to make sure the time stays current.
2. Have the function execute when it's loading in the browser.
------------------------------------------------------------------------------*/

const timeDiv = document.createElement('div');
timeDiv.id = 'timeDiv';
timeDiv.style.textAlign = 'center';
timeDiv.style.fontSize = '2rem';
const body = document.querySelector('body');
body.appendChild(timeDiv);
const time1 = document.querySelector('#timeDiv');

function addCurrentTime() {
  const time = new Date().toLocaleTimeString();
  time1.textContent = time;
  setInterval(addCurrentTime, 1000);
}

// TODO execute `addCurrentTime` when the browser has completed loading the page
window.addEventListener('DOMContentLoaded', addCurrentTime);
