//define function to openplayerconfig for edit player button
function openPlayerConfig(event){
    editedPlayer =+ event.target.dataset.playerid;     //+ to convert to number       //To know which button clicked, Access to target which is in this case button
    playerConfigOverlayElement.style.display = 'block';
    backdropElement.style.display = 'block';
    console.log(editedPlayer);
}

//define function to closeplayerconfig for edit player button
function closePlayerConfig(){
    playerConfigOverlayElement.style.display = 'none';
    backdropElement.style.display = 'none';
    formElement.firstElementChild.classList.remove('error');
    errorOutputElement.textContent='';
    formElement.firstElementChild.lastElementChild.value=''; //reset the submit button as well
}

//define function to savePlayerConfig to store user input and display it when necessary
function savePlayerConfig(event){
    event.preventDefault(); //prevent default behaviours of sending a request automatically
    const formData = new FormData(event.target);  //initialize object, form data takes a form and automatically (blueprint) initialize input value (event.target to target HTML)
    const enteredPlayername = formData.get('playername').trim(); //get() allow to get a value of input based on id, trim() will trim white spaces


   //add data validation condition()
    if(!enteredPlayername){
        event.target.firstElementChild.classList.add('error');
        errorOutputElement.textContent = 'Please enter a valid name!';
        return;
    }

    const updatedPlayerDataElement = document.getElementById('player-' + editedPlayer + '-data'); //insert dynamic edited player to select dynamically
    updatedPlayerDataElement.children[1].textContent = enteredPlayername;  // h3 player since it is 2nd child
    
    //Edited Player can be from 1 or 2 (so - 1 will give access to object datas)
    players[editedPlayer-1].name = enteredPlayername;

    closePlayerConfig();

}



