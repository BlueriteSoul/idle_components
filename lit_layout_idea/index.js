const button = document.getElementById('pokus');
const gameViewPane = document.getElementById('game-view');

// Set up the event listener
button.addEventListener('click', function() {
    gameViewPane.innerHTML = "";
    const newElement = document.createElement('my-element');
    gameViewPane.appendChild(newElement);
});