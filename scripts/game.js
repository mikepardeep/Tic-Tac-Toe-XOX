function startNewGame() {

if(players[0].name =='' || players[1].name ==''){
   alert('Please do set custom names for both Player 1 and Player 2');
   return; //return before this code wont execute after this
} 

    gameAreaElement.style.display = 'block';
}

//access to the field which the event clicked
function selectGameField(event) {
    event.target.textContent = players[activePlayer].symbol; //players[0] symbol
    event.target.classList.add('disabled');
}