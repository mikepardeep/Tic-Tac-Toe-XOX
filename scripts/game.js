function startNewGame() {

    if(players[0].name =='' || players[1].name ==''){
    alert('Please do set custom names for both Player 1 and Player 2');
    return; //return before this code wont execute after this
    } 
    activePlayerNameElement.textContent = players[activePlayer].name;
    gameAreaElement.style.display = 'block';
    
}

//switch player 1 and Player 2
function switchPlayer() {
    if(activePlayer === 0) {
        activePlayer = 1;
    } else {
        activePlayer = 0;
    }

    activePlayerNameElement.textContent = players[activePlayer].name;
}

//access to the Gamefield which the event clicked
function selectGameField(event) {
   
    const selectedField = event.target;
    const selectedColumn = selectedField.dataset.col-1; //access the column list
    const selectedRow = selectedField.dataset.row-1;  //access the Row List //arrray indexes should star 0
   
    if(gameData[selectedRow][selectedColumn] > 0) {
        alert('Please select an empty field');
        return;
    }

    selectedField.textContent = players[activePlayer].symbol; //players[0] symbol
    selectedField.classList.add('disabled');


    gameData[selectedRow][selectedColumn] = activePlayer + 1;
    
    const winnerId = checkForGameOver();
    
    if(winnerId !== 0) {
        endGame(winnerId);
    }

    console.log(winnerId);

    currentRound++;
    switchPlayer();
}

function checkForGameOver(){
    //checking the rows for equality
    for(let i = 0; i<3 ; i++) {
        if(gameData[i][0] > 0 &&  
            gameData[i][0] === gameData[i][1] &&
            gameData[i][1] === gameData[i][2]
          ){ 
            return gameData[i][0];
        }
    }
    //checking the column for equality
    for(let i = 0; i<3 ; i++) {
        if(gameData[0][i] > 0 &&  
            gameData[0][i] === gameData[1][i] &&
            gameData[0][i] === gameData[2][i]
          ){ 
            return gameData[0][i];
        }
    }

    //Diagonal : Top left to bottom right
    if(gameData[0][0] > 0 &&  
        gameData[0][0] === gameData[1][1] && 
        gameData[1][1] === gameData[2][2]) 
        {
            return gameData[0][0];
        }

    //Diagonal : Bottom left to top right
     if(gameData[2][0] > 0 &&  
        gameData[2][0] === gameData[1][1] && 
        gameData[1][1] === gameData[0][2]) 
        {
        return gameData[2][0];
    }

    if(currentRound === 9) {
        return -1;
    }

    return 0;
}

function endGame(winnerId) {
    gameOverElement.style.display = 'block';

    if(winnerId>0){
        const winnerName = players[winnerId-1].name;
        gameOverElement.firstElementChild.firstElementChild.textContent = winnerName;
    } else {
        gameOverElement.firstElementChild.textContent = 'It\'s a draw!'
    }
}