//define function to openplayerconfig for edit player button
function openPlayerConfig(){
    playerConfigOverlayElement.style.display = 'block';
    backdropElement.style.display = 'block';
}

//define function to closeplayerconfig for edit player button
function closePlayerConfig(){
    playerConfigOverlayElement.style.display = 'none';
    backdropElement.style.display = 'none';
    formElement.firstElementChild.classList.remove('error');
}

//define function to savePlayerConfig to store user input and display it when necessary
function savePlayerConfig(event){
    event.preventDefault(); //prevent default behaviours of sending a request automatically
    const formData = new FormData(event.target);  //initialize object, form data takes a form and automatically (blueprint) initialize input value (event.target to target HTML)
    const enteredPlayername = formData.get('playername').trim(); //get() allow to get a value of one of input , trim() will trim white spaces
    
   //add data validation condition()
    if(!enteredPlayername){
        event.target.firstElementChild.classList.add('error');
        errorOutputElement.textContent = 'Please enter a valid name!';
        return;
    };
}



