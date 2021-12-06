'use strict';
(function () {
    const navToggle = document.querySelector(".header__toggle");
    const pageHeader = document.querySelector(".header");
 
    pageHeader.classList.remove("header--nojs");
    navToggle.addEventListener("click", function() {
        console.log('hello')
      if (pageHeader.classList.contains("header--closed")) {
        console.log('hello§')
        pageHeader.classList.remove("header--closed");
        pageHeader.classList.add("header--opened");
      } else {
        pageHeader.classList.add("header--closed");
        pageHeader.classList.remove("header--opened");
      }
    });
})();