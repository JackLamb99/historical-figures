// Display functions

// Gets the Menu page
var menu = document.getElementById("menu-area");

// Gets the Instructions page
var instructions = document.getElementById("instructions-area");

// Gets the Game page
var game = document.getElementById("game-area");

// Gets the button that opens the Instructions page
var instructionsBtn = document.getElementById("btn-instructions");

// Gets the button that opens the Game page
var playBtn = document.getElementById("btn-play");

// Gets the back button to return to the Menu page
var returnBtn = document.getElementById("back-arrow");

// Gets the "guess" card
var guessCard = document.getElementById("guess-card");

// Gets the "reveal" card
var revealCard = document.getElementById("reveal-card");

// Gets the action buttons to display the "reveal" card
var actionBtns = document.getElementsByClassName("btn-reveal-card");

// When the user clicks the "Instructions" button, open the Instructions page
instructionsBtn.onclick = function () {
  instructions.style.display = "block";
  menu.style.display = "none";
};

// When the user clicks the back button, return to the Menu page
returnBtn.onclick = function () {
  menu.style.display = "block";
  instructions.style.display = "none";
};

// When the user clicks the "Play" button, open the Game page
playBtn.onclick = function () {
  game.style.display = "block";
  menu.style.display = "none";
};

// When the user clicks either action button, display the "reveal" card
for (var i = 0; i < actionBtns.length; i++) {
  actionBtns[i].addEventListener("click", function () {
    revealCard.style.display = "block";
    guessCard.style.display = "none";
  });
}
