//define function to openplayerconfig for edit player button
function openPlayerConfig(){
    playerConfigOverlayElement.style.display = 'block';
    backdropElement.style.display = 'block';
}

//define function to closeplayerconfig for edit player button
function closePlayerConfig(){
    playerConfigOverlayElement.style.display = 'none';
    backdropElement.style.display = 'none';
}

function savePlayerConfig(event){
    event.preventDefault();
    console.log(event);
}



