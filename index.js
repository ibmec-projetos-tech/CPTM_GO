const popUp = document.querySelector('.popUp');
const popUpAction = document.querySelector('#popUpAction');
const popUpAction7 = document.querySelector('#popUpEstacao6');
const popUp2 = document.querySelector('.popUp2');
const popUpAction2 = document.querySelector('#popUpEstacao');
const popUpAction3 = document.querySelector('#popUpEstacao2');
const popUpAction4 = document.querySelector('#popUpEstacao3');
const popUpAction5 = document.querySelector('#popUpEstacao4');
const popUpAction6 = document.querySelector('#popUpEstacao5');

function togglePopUp() {
    popUp.classList.toggle('hidden');
}

function togglePopUp2() {
    popUp2.classList.toggle('hidden');
}

popUpAction.addEventListener('click', togglePopUp);
popUpAction7.addEventListener('click', togglePopUp);
popUpAction2.addEventListener('click', togglePopUp2);
popUpAction3.addEventListener('click', togglePopUp2);
popUpAction4.addEventListener('click', togglePopUp2);
popUpAction5.addEventListener('click', togglePopUp2);
popUpAction6.addEventListener('click', togglePopUp2);

module.exports = { togglePopUp, togglePopUp2 }