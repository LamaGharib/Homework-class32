'use strict';
/*------------------------------------------------------------------------------
1. Find out how to select the element that contains the Google logo, and store 
   it in a variable.
2. Modify the `src` and `srcset` of the logo so that it's replaced by the 
   HackYourFuture logo instead.
------------------------------------------------------------------------------*/
function hijackGoogleLogo() {
  const hyfLogo = document.querySelector('.lnXdpd');
  hyfLogo.src =
    'https://www.backbase.com/wp-content/uploads/2020/01/hackyourfuture_black-300x156.png';
  hyfLogo.srcset =
    'https://www.backbase.com/wp-content/uploads/2020/01/hackyourfuture_black-300x156.png';
}

hijackGoogleLogo();
