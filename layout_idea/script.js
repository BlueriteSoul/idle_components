import "./mining_pane.js"; // ✅ Ensure the correct file extension

document.addEventListener("DOMContentLoaded", function () {
    const button = document.getElementById("mining");
    const container = document.getElementById("game-view");

    button.addEventListener("click", function () {
        container.innerHTML = ""; // Clear previous content
        const myElement = document.createElement("my-element");
        container.appendChild(myElement);
    });
});
