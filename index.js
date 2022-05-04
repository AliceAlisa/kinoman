'use strict';

//const profile = document.querySelector('.profile_container');
const profile = document.querySelector('.position_container');

const collections = document.querySelector('.user_collections');

function addClass() {
    profile.classList.add('fixed-position');
    collections.classList.add('collections_margin')
}

function removeClass() {
    profile.classList.remove('fixed-position');
    collections.classList.remove('collections_margin')
}

window.addEventListener('scroll', (e) => {
    let positionY = window.scrollY
    if (positionY > 115) {
        addClass()
    } else if (positionY < 115) {
        removeClass()
    }
})