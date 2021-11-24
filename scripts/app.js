//initialize player config overlay
const playerConfigOverlayElement = document.getElementById('config-overlay');

//initialize the backdrop when player config overlay open
const backdropElement = document.getElementById('backdrop');


//initialize the constant element of player 1 and player 2 button
const editPlayer1BtnElement = document.getElementById('edit-player-1-btn');
const editPlayer2BtnElement = document.getElementById('edit-player-2-btn');

//addd click eventlistener to Player 1 and Player 2 button.
editPlayer1BtnElement.addEventListener('click',openPlayerConfig);
editPlayer2BtnElement.addEventListener('click',openPlayerConfig);