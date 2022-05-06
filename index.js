'use strict';

const profile = document.querySelector('.position_container');
const collections = document.querySelector('.user_collections');


function addClass() {
    profile.classList.add('fixed-position');
    collections.classList.add('collections_margin')

    let newWidth = String(findwidthCollectionsBlock());
    profile.style.width = newWidth + 'px';
}

function removeClass() {
    profile.classList.remove('fixed-position');
    collections.classList.remove('collections_margin')
    profile.removeAttribute('style')
}

function findwidthCollectionsBlock() {
    let width = collections.clientWidth
    return width
}

window.addEventListener('scroll', (e) => {
    let positionY = window.scrollY
    if (positionY > 115) {
        if (profile.classList.contains('fixed-position')) {
            return
        } else {
            addClass()
        }

    } else if (positionY < 115) {
        if (profile.classList.contains('fixed-position')) {
            removeClass()
        } else {
            return
        }
    }
})