//set the variable value to 0 as a default since the data for edit player 1 and 2
let editedPlayer = 0;

//store the player name data in javascript object itself
const players = [
    {
        name:'',
        symbol:'X'
    },
    {
        name:'',
        symbol:'O'
    },
];


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

//initialize the error output paragraph element
const errorOutputElement = document.getElementById('config-errors');

//initilaize the start game button element
const startNewGameBtnElement = document.getElementById('start-game-btn');

//initialize game Element area
const gameAreaElement = document.getElementById('active-game');

//add click eventlistener to Player 1 and Player 2 button.
editPlayer1BtnElement.addEventListener('click',openPlayerConfig);
editPlayer2BtnElement.addEventListener('click',openPlayerConfig);

//add click eventListener to cancelconfig button and backgrop element
cancelConfigBtnElement.addEventListener('click',closePlayerConfig);
backdropElement.addEventListener('click',closePlayerConfig);

//add eventListener to formElement
formElement.addEventListener('submit',savePlayerConfig);

//add eventListener to startGame button
startNewGameBtnElement.addEventListener('click',startNewGame);
