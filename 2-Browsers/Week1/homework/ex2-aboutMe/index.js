'use strict';
/*------------------------------------------------------------------------------
1. Using JavaScript, change the body tag's style so it has a font-family of 
   "Arial, sans-serif".
2. Using JavaScript, replace each of the spans (`nickname`, fav-food`, 
   `hometown`) with your own information.
3. In JavaScript, iterate through each `<li>` and change the class to 
   `list-item`.
------------------------------------------------------------------------------*/

// TODO add your JavaScript code here.
const font = document.querySelectorAll('body');
for (let i = 0; i < font.length; i++) {
  font[i].style.fontFamily = 'Arial, sans-serif';
}

const lama = document.getElementById('nickname');
lama.textContent = 'Laaamaaaa';
const food = document.getElementById('fav-food');
food.textContent = 'Pizaaaaa';
const home = document.getElementById('hometown');
home.textContent = 'Lattakia';

const ulElement = document.querySelectorAll('li');
for (let i = 0; i < ulElement.length; i++) {
  ulElement[i].className = 'list-item';
}
