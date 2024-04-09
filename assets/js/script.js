// Figures array

let figures = [
  {
    figureName: "Aristotle",
    figureImg: `<img src="assets/images/aristotle.webp" alt="A bust depicting Aristotle"/>`,
    figureDesc: "Ancient Greek Philosopher & Polymath",
    figureYear: -384,
  },
  {
    figureName: "Alexander the Great",
    figureImg: `<img src="assets/images/alexander_the_great.webp" alt="A bust depicting Alexander the Great"/>`,
    figureDesc: "King of Macedonia",
    figureYear: -356,
  },
  {
    figureName: "Archimedes of Syracuse",
    figureImg: `<img src="assets/images/archimedes_of_syracuse.webp" alt="A painting depicting Archimedes of Syracuse"/>`,
    figureDesc: "Ancient Greek Mathematician, Engineer & Astronomer",
    figureYear: -287,
  },
  {
    figureName: "Spartacus",
    figureImg: `<img src="assets/images/spartacus.webp" alt="A statue depicting Spartacus"/>`,
    figureDesc: "Thracian Gladiator, Leader of the Third Servile War",
    figureYear: -103,
  },
  {
    figureName: "Julius Caesar",
    figureImg: `<img src="assets/images/julius_caesar.webp" alt="A bust depicting Julius Caesar"/>`,
    figureDesc: "Roman Ruler, General & Statesman",
    figureYear: -100,
  },
  {
    figureName: "Cleopatra",
    figureImg: `<img src="assets/images/cleopatra.webp" alt="A bust depicting Cleopatra"/>`,
    figureDesc: "Last Active Pharaoh of Ancient Egypt",
    figureYear: -69,
  },
  {
    figureName: "Boudicca",
    figureImg: `<img src="assets/images/boudicca.webp" alt="A painting depicting Boudicca"/>`,
    figureDesc: "Ancient British Queen of the Iceni",
    figureYear: 30,
  },
  {
    figureName: "Attila the Hun",
    figureImg: `<img src="assets/images/attila_the_hun.webp" alt="A painting depicting Attila the Hun"/>`,
    figureDesc: "Leader of the Hunnic Empire",
    figureYear: 406,
  },
  {
    figureName: "Charlemagne",
    figureImg: `<img src="assets/images/charlemagne.webp" alt="A painting depicting Charlemagne"/>`,
    figureDesc: "King of the Franks, the Lombards & Roman Emperor",
    figureYear: 742,
  },
  {
    figureName: "Alfred the Great",
    figureImg: `<img src="assets/images/alfred_the_great.webp" alt="A statue depicting Alfred the Great"/>`,
    figureDesc: "King of the Anglo-Saxons",
    figureYear: 848,
  },
  {
    figureName: "William the Conqueror",
    figureImg: `<img src="assets/images/william_the_conqueror.webp" alt="A painting depicting William the Conqueror"/>`,
    figureDesc: "First Norman King of England",
    figureYear: 1028,
  },
  {
    figureName: "Genghis Khan",
    figureImg: `<img src="assets/images/genghis_khan.webp" alt="A painting depicting Genghis Khan"/>`,
    figureDesc: "Founder of the Mongol Empire",
    figureYear: 1162,
  },
  {
    figureName: "Joan of Arc",
    figureImg: `<img src="assets/images/joan_of_arc.webp" alt="A painting depicting Joan of Arc"/>`,
    figureDesc: "French Saint, Military Leader & Martyr",
    figureYear: 1412,
  },
  {
    figureName: "Leonardo da Vinci",
    figureImg: `<img src="assets/images/leonardo_da_vinci.webp" alt="A drawing depicting Leonardo da Vinci"/>`,
    figureDesc: "Italian Renaissance Polymath",
    figureYear: 1452,
  },
  {
    figureName: "Henry VIII",
    figureImg: `<img src="assets/images/henry_VIII.webp" alt="A painting depicting Henry the eighth"/>`,
    figureDesc: "King of England",
    figureYear: 1491,
  },
  {
    figureName: "Elizabeth I",
    figureImg: `<img src="assets/images/elizabeth_I.webp" alt="A painting depicting Elizabeth the first"/>`,
    figureDesc: "Queen of England",
    figureYear: 1533,
  },
  {
    figureName: "Mary, Queen of Scots",
    figureImg: `<img src="assets/images/mary_queen_of_scots.webp" alt="A painting depicting Mary, Queen of Scots"/>`,
    figureDesc: "Scottish Queen",
    figureYear: 1542,
  },
  {
    figureName: "William Shakespeare",
    figureImg: `<img src="assets/images/william_shakespeare.webp" alt="A painting depicting William Shakespeare"/>`,
    figureDesc: "English Poet, Playwright and Actor",
    figureYear: 1564,
  },
  {
    figureName: "Isaac Newton",
    figureImg: `<img src="assets/images/isaac_newton.webp" alt="A painting depicting Isaac Newton"/>`,
    figureDesc: "Mathematician, Astronomer & Physicist",
    figureYear: 1644,
  },
  {
    figureName: "Catherine the Great",
    figureImg: `<img src="assets/images/catherine_the_great.webp" alt="A painting depicting Catherine the Great"/>`,
    figureDesc: "Empress of Russia",
    figureYear: 1729,
  },
  {
    figureName: "George Washington",
    figureImg: `<img src="assets/images/george_washington.webp" alt="A painting depicting George Washington"/>`,
    figureDesc: "First US President",
    figureYear: 1732,
  },
  {
    figureName: "Wolfgang Amadeus Mozart",
    figureImg: `<img src="assets/images/wolfgang_amadeus_mozart.webp" alt="A painting depicting Wolfgang Amadeus Mozart"/>`,
    figureDesc: "Composer",
    figureYear: 1756,
  },
  {
    figureName: "Napoleon Bonaparte",
    figureImg: `<img src="assets/images/napoleon_bonaparte.webp" alt="A painting depicting Napoleon Bonaparte"/>`,
    figureDesc: "French Military Leader and Emperor",
    figureYear: 1769,
  },
  {
    figureName: "Abraham Lincoln",
    figureImg: `<img src="assets/images/abraham_lincoln.webp" alt="A photograph of Abraham Lincoln"/>`,
    figureDesc: "16th US President",
    figureYear: 1809,
  },
  {
    figureName: "Queen Victoria",
    figureImg: `<img src="assets/images/queen_victoria.webp" alt="A photograph of Queen Victoria"/>`,
    figureDesc: "British Queen & Empress of India",
    figureYear: 1819,
  },
  {
    figureName: "Florence Nightingale",
    figureImg: `<img src="assets/images/florence_nightingale.webp" alt="A photograph of Florence Nightingale"/>`,
    figureDesc: "Statistician & Founder of Modern Nursing",
    figureYear: 1820,
  },
  {
    figureName: "Vincent van Gogh",
    figureImg: `<img src="assets/images/vincent_van_gogh.webp" alt="A painting depicting Vincent van Gogh"/>`,
    figureDesc: "Dutch Post-Impressionist Painter",
    figureYear: 1853,
  },
  {
    figureName: "Marie Curie",
    figureImg: `<img src="assets/images/marie_curie.webp" alt="A photograph of Marie Curie"/>`,
    figureDesc: "Polish-French Physicist & Chemist",
    figureYear: 1867,
  },
  {
    figureName: "Winston Churchill",
    figureImg: `<img src="assets/images/winston_churchill.webp" alt="A photograph of Winston Churchill"/>`,
    figureDesc: "British Wartime Prime Minister",
    figureYear: 1874,
  },
  {
    figureName: "Josef Stalin",
    figureImg: `<img src="assets/images/josef_stalin.webp" alt="A photograph of Josef Stalin"/>`,
    figureDesc: "Soviet Revolutionary and Dictator",
    figureYear: 1878,
  },
  {
    figureName: "Albert Einstein",
    figureImg: `<img src="assets/images/albert_einstein.webp" alt="A photograph of Albert Einstein"/>`,
    figureDesc: "German-born Theoretical Physicist",
    figureYear: 1879,
  },
  {
    figureName: "Rosa Parks",
    figureImg: `<img src="assets/images/rosa_parks.webp" alt="A photograph of Rosa Parks"/>`,
    figureDesc: "American Civil Rights Activist",
    figureYear: 1913,
  },
  {
    figureName: "John F. Kennedy",
    figureImg: `<img src="assets/images/john_f_kennedy.webp" alt="A photograph of John F Kennedy"/>`,
    figureDesc: "35th US President",
    figureYear: 1917,
  },
  {
    figureName: "Nelson Mandela",
    figureImg: `<img src="assets/images/nelson_mandela.webp" alt="A photograph of Nelson Mandela"/>`,
    figureDesc: "Activist & President of South Africa",
    figureYear: 1918,
  },
  {
    figureName: "Marilyn Monroe",
    figureImg: `<img src="assets/images/marilyn_monroe.webp" alt="A photograph of Marilyn Monroe"/>`,
    figureDesc: "American Singer",
    figureYear: 1926,
  },
  {
    figureName: "Anne Frank",
    figureImg: `<img src="assets/images/anne_frank.webp" alt="A photograph of Anne Frank"/>`,
    figureDesc: "German-born Jewish Diarist",
    figureYear: 1929,
  },
  {
    figureName: "Elvis Presley",
    figureImg: `<img src="assets/images/elvis_presley.webp" alt="A photograph of Elvis Presley"/>`,
    figureDesc: "American Singer and Actor",
    figureYear: 1935,
  },
  {
    figureName: "John Lennon",
    figureImg: `<img src="assets/images/john_lennon.webp" alt="A photograph of John Lennon"/>`,
    figureDesc: "English Singer,  Musician & Member of The Beatles",
    figureYear: 1940,
  },
  {
    figureName: "Stephen Hawking",
    figureImg: `<img src="assets/images/stephen_hawking.webp" alt="A photograph of Stephen Hawking"/>`,
    figureDesc: "Theoretical Physicist",
    figureYear: 1942,
  },
  {
    figureName: "Diana, Princess of Wales",
    figureImg: `<img src="assets/images/diana_princess_of_wales.webp" alt="A photograph of Diana, Princess of Wales"/>`,
    figureDesc: "British Princess",
    figureYear: 1961,
  },
];

// Variables

// Pages
var menu = document.getElementById("menu-area");

var instructions = document.getElementById("instructions-area");

var game = document.getElementById("game-area");

// Buttons
var instructionsBtn = document.getElementById("btn-instructions");

var playBtn = document.getElementById("btn-play");

var returnBtn = document.getElementById("back-arrow");

// Cards
var guessCard = document.getElementById("guess-card");

var revealCard = document.getElementById("reveal-card");

// Action buttons
var actionBtns = document.getElementsByClassName("btn-reveal-card");

var endGameBtns = document.getElementsByClassName("btn-game-ended");

var youngerBtn = document.getElementById("btn-younger");

var olderBtn = document.getElementById("btn-older");

var menuBtn = document.getElementById("btn-menu");

var playAgainBtn = document.getElementById("btn-play-again");

// Card elements
var baseFigureName = document.getElementById("base-figure-name");

var baseFigureImg = document.getElementById("base-figure-img");

var baseFigureDesc = document.getElementById("base-figure-description");

var baseFigureYear = document.getElementById("base-figure-year");

var guessFigureName = document.getElementById("guess-name");

var revealFigureName = document.getElementById("reveal-figure-name");

var revealFigureImg = document.getElementById("reveal-figure-img");

var revealFigureDesc = document.getElementById("reveal-figure-description");

var revealFigureYear = document.getElementById("reveal-figure-year");

// Random figure variables
var randomFigure1, randomFigure2;

var score = document.getElementById("current-score");

// Diviver
var dividerCircle = document.getElementById("divider-circle");

var dividerLine = document.getElementById("divider-line");

var countdown;

// Display functions

// Display Menu
function displayMenu() {
  menu.style.display = "block";
  instructions.style.display = "none";
  game.style.display = "none";
}

// Display Instructions
function displayInstructions() {
  instructions.style.display = "block";
  menu.style.display = "none";
  game.style.display = "none";
}

// Display Game
function displayGame() {
  game.style.display = "block";
  menu.style.display = "none";
  instructions.style.display = "none";
}

// When the user clicks either action button, display the "reveal" card
for (var i = 0; i < actionBtns.length; i++) {
  actionBtns[i].addEventListener("click", function () {
    revealCard.style.display = "block";
    guessCard.style.display = "none";
  });
}

// Game functions

/**
 * Gets two random figures from the array and
 * applies their details to the game cards.
 */
function randomFigures() {
  // Get a random figure from the array
  var chooseRandomFigure1 = Math.floor(Math.random() * figures.length);
  var chooseRandomFigure2 = Math.floor(Math.random() * figures.length);

  // Ensure the two random figures are not the same
  while (chooseRandomFigure2 === chooseRandomFigure1) {
    chooseRandomFigure2 = Math.floor(Math.random() * figures.length);
  }

  // Return a random figure from the Figures array
  randomFigure1 = figures[chooseRandomFigure1];
  randomFigure2 = figures[chooseRandomFigure2];

  // Apply the random figures details to the figure cards
  baseFigureName.innerText = randomFigure1.figureName;
  baseFigureImg.innerHTML = randomFigure1.figureImg;
  baseFigureDesc.innerText = randomFigure1.figureDesc;
  baseFigureYear.innerText =
    randomFigure1.figureYear < 0
      ? `Born: ${Math.abs(randomFigure1.figureYear)} BCE`
      : `Born: ${randomFigure1.figureYear} CE`;

  guessFigureName.innerText = `'${randomFigure2.figureName}' is...`;

  revealFigureName.innerText = randomFigure2.figureName;
  revealFigureImg.innerHTML = randomFigure2.figureImg;
  revealFigureDesc.innerText = randomFigure2.figureDesc;
  revealFigureYear.innerText =
    randomFigure2.figureYear < 0
      ? `Born: ${Math.abs(randomFigure2.figureYear)} BCE`
      : `Born: ${randomFigure2.figureYear} CE`;
}

/**
 * Replaces the base card figure with the reveal card figure
 * and gets a new random figure for the reveal/guess card.
 */
function newRandomFigure() {
  // Replace data from randomFigure1 with the data from randomFigure2
  randomFigure1 = randomFigure2;

  // Get a new random figure for randomFigure2
  var chooseRandomFigure = Math.floor(Math.random() * figures.length);

  // Ensure the new random figure is different from the current randomFigure1
  while (chooseRandomFigure === figures.indexOf(randomFigure1)) {
    chooseRandomFigure = Math.floor(Math.random() * figures.length);
  }

  // Assign the new random figure to randomFigure2
  randomFigure2 = figures[chooseRandomFigure];

  // Update the cards with the new figures
  baseFigureName.innerText = randomFigure1.figureName;
  baseFigureImg.innerHTML = randomFigure1.figureImg;
  baseFigureDesc.innerText = randomFigure1.figureDesc;
  baseFigureYear.innerText =
    randomFigure1.figureYear < 0
      ? `Born: ${Math.abs(randomFigure1.figureYear)} BCE`
      : `Born: ${randomFigure1.figureYear} CE`;

  guessFigureName.innerText = `'${randomFigure2.figureName}' is...`;

  revealFigureName.innerText = randomFigure2.figureName;
  revealFigureImg.innerHTML = randomFigure2.figureImg;
  revealFigureDesc.innerText = randomFigure2.figureDesc;
  revealFigureYear.innerText =
    randomFigure2.figureYear < 0
      ? `Born: ${Math.abs(randomFigure2.figureYear)} BCE`
      : `Born: ${randomFigure2.figureYear} CE`;
}

function endGame() {
  for (var i = 0; i < endGameBtns.length; i++) {
    endGameBtns[i].style.display = "block";
  }
  for (var i = 0; i < actionBtns.length; i++) {
    actionBtns[i].style.display = "none";
  }
}

function startTimer() {
  var seconds = 9;
  countdown = setInterval(function () {
    dividerCircle.innerText = seconds;

    // Decrease seconds
    seconds--;

    // If timer reaches 0
    if (seconds < 0) {
      // Stop the countdown
      clearInterval(countdown);
      // Call functions to end the game
      endGame();
      incorrectAnswerStyle();
    }
  }, 1000); // Updates the timer every 1000 milliseconds (1 second)
}

function resetTimer() {
  clearInterval(countdown);
  dividerCircle.innerText = "";
}

/**
 * Checks if randomFigure1 (base card) is greater than randomFigure2 (reveal card).
 * Returns true if randomFigure2 is older.
 * Returns false if randomFigure2 is younger.
 */
function checkIfOlder() {
  return randomFigure1.figureYear > randomFigure2.figureYear;
}

/**
 * Retrieve the high score from localStorage
 */
function getHighScore() {
  return localStorage.getItem("highScore") || 0; // Defaults to 0 if no high score in storage
}

/**
 * Update and store the high score in localStorage
 */
function updateHighScore(score) {
  // Get the current high score
  var currentHighScore = getHighScore();
  // Update the highscore if greater than the current high score
  if (score > currentHighScore) {
    localStorage.setItem("highScore", score);
  }
}

function displayHighScore() {
  var highScoreSpans = document.getElementsByClassName("high-score");
  // Get the high score value
  var highScoreValue = getHighScore();
  // Update the innerText on the high score spans
  for (var i = 0; i < highScoreSpans.length; i++) {
    highScoreSpans[i].innerText = highScoreValue;
  }
}

function incrementScore() {
  var currentScore = parseInt(score.innerText);
  var newScore = currentScore + 1;
  score.innerText = newScore;
  updateHighScore(newScore);
  displayHighScore();
}

function correctAnswerStyle() {
  dividerCircle.innerHTML = `<i class="fa-regular fa-circle-check"></i>`;
  dividerCircle.style.backgroundColor = "#029e61";
  dividerLine.style.backgroundColor = "#029e61";
}

function incorrectAnswerStyle() {
  dividerCircle.innerHTML = `<i class="fa-regular fa-circle-xmark"></i>`;
  dividerCircle.style.backgroundColor = "#ff0000";
  dividerLine.style.backgroundColor = "#ff0000";
}

function resetStyles() {
  revealCard.style.display = "";
  guessCard.style.display = "";
  dividerCircle.innerHTML = "10";
  dividerCircle.style.backgroundColor = "";
  dividerCircle.style.fontSize = "";
  dividerLine.style.backgroundColor = "";
}

function resetGame() {
  for (var i = 0; i < endGameBtns.length; i++) {
    endGameBtns[i].style.display = "none";
  }
  for (var i = 0; i < actionBtns.length; i++) {
    actionBtns[i].style.display = "";
  }
  score.innerText = "0";
}

// Event listeners

document.addEventListener("DOMContentLoaded", function () {
  displayHighScore();
})

instructionsBtn.addEventListener("click", displayInstructions);

returnBtn.addEventListener("click", displayMenu);

playBtn.addEventListener("click", function () {
  displayGame();
  randomFigures();
  startTimer();
});

menuBtn.addEventListener("click", function () {
  displayMenu();
  resetGame();
  resetStyles();
});

playAgainBtn.addEventListener("click", function () {
  resetGame();
  resetStyles();
  randomFigures();
  startTimer();
});

// Game actions

// Older button click event handler
olderBtn.addEventListener("click", function () {
  // if randomFigure2 is older
  if (checkIfOlder()) {
    // User is correct
    resetTimer();
    correctAnswerStyle();
    incrementScore();
    setTimeout(resetStyles, 1500);
    setTimeout(newRandomFigure, 1500);
    setTimeout(startTimer, 1500);
  } else {
    // User is incorrect
    resetTimer();
    incorrectAnswerStyle();
    endGame();
  }
});

// Younger button click event handler
youngerBtn.addEventListener("click", function () {
  // If randomFigure2 is younger
  if (!checkIfOlder()) {
    // User is correct
    resetTimer();
    correctAnswerStyle();
    incrementScore();
    setTimeout(resetStyles, 1500);
    setTimeout(newRandomFigure, 1500);
    setTimeout(startTimer, 1500);
  } else {
    // User is incorrect
    resetTimer();
    incorrectAnswerStyle();
    endGame();
  }
});
