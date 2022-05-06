'use strict';

const profile = document.querySelector('.position_container');
const collections = document.querySelector('.user_collections');


function addClass() {
    profile.classList.add('fixed-position');
    collections.classList.add('collections_margin')

    /*  let newWidth = findwidthCollectionsBlock() + 1;
      let strWidth = String(newWidth);
      profile.style.width = strWidth + 'px'; */
    setNewWidth()
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

function setNewWidth() {
    let newWidth = findwidthCollectionsBlock() + 2;
    let strWidth = String(newWidth);
    profile.style.width = strWidth + 'px';
}

window.addEventListener('scroll', (e) => {
    let positionY = window.scrollY


    if (positionY > 115) {
        let colWidth = String(collections.clientWidth + 2) + 'px'

        if (profile.style.width != colWidth) {
            setNewWidth()
        }
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