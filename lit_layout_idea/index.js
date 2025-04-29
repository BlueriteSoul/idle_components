const button = document.getElementById('mining');
const gameViewPane = document.getElementById('game-view');

// Set up the event listener
button.addEventListener('click', function() {
    gameViewPane.innerHTML = "";
    const newElement = document.createElement('mining-pane');
    gameViewPane.appendChild(newElement);
});