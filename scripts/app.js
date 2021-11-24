//initialize player config overlay
const playerConfigOverlayElement = document.getElementById('config-overlay');

//initialize the backdrop when player config overlay open
const backdropElement = document.getElementById('backdrop');

//initialize the constant element of player 1 and player 2 button
const editPlayer1BtnElement = document.getElementById('edit-player-1-btn');
const editPlayer2BtnElement = document.getElementById('edit-player-2-btn');

//initialize the constant element of cancel overlay button
const cancelConfigBtnElement = document.getElementById('cancel-config-btn');

//initialize the constant formElement
const formElement = document.querySelector('form');



//add click eventlistener to Player 1 and Player 2 button.
editPlayer1BtnElement.addEventListener('click',openPlayerConfig);
editPlayer2BtnElement.addEventListener('click',openPlayerConfig);

//add click eventListener to cancelconfig button and backgrop element
cancelConfigBtnElement.addEventListener('click',closePlayerConfig);
backdropElement.addEventListener('click',closePlayerConfig);

//add eventListener to formElement
formElement.addEventListener('submit',savePlayerConfig);

