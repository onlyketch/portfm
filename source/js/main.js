"use strict"

document.addEventListener('DOMContentLoaded', () => {

    const btnUp = document.querySelector('.btn-up');

    if (btnUp) {
        btnUp.addEventListener('click', () => window.scrollTo(0, 0));
    }



});