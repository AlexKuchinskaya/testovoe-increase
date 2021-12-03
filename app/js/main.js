'use strict';
(function () {
    const navToggle = document.querySelector('.header__toggle');
    console.log(`navToggle`, navToggle)
    const pageHeader = document.querySelector('.header');

    pageHeader.classList.remove('header--nojs');
    navToggle.addEventListener("click", function() {
        if (pageHeader.classList.contains('header--closed')) {
            pageHeader.classList.remove('header--closed');
            pageHeader.classList.add('header--opened');

        } else {
            pageHeader.classList.add('header--closed');
            pageHeader.classList.romve('header--opened');
        }
    })
})();