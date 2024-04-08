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

// Figures array
const figures = [
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

// Get a random figure from the array
function randomFigures() {
  var chooseRandomFigure1 = Math.floor(Math.random() * figures.length);
  var chooseRandomFigure2 = Math.floor(Math.random() * figures.length);

  // Ensure the two random figures are not the same
  while (chooseRandomFigure2 === chooseRandomFigure1) {
    chooseRandomFigure2 = Math.floor(Math.random() * figures.length);
  }

  // Return a random figure from the Figures array
  var randomFigure1 = figures[chooseRandomFigure1];
  var randomFigure2 = figures[chooseRandomFigure2];
  console.log(randomFigure1);
  console.log(randomFigure2);

  // Apply the random figures details to the figure cards
  document.getElementById("base-figure-name").innerText =
    randomFigure1.figureName;
  document.getElementById("base-figure-img").innerHTML =
    randomFigure1.figureImg;
  document.getElementById("base-figure-description").innerText =
    randomFigure1.figureDesc;
  // Check if the figureYear is a negative number
  if (randomFigure1.figureYear < 0) {
    // Modify the string to display "BCE" after the year if negative
    document.getElementById("base-figure-year").innerText = `Born: ${Math.abs(
      randomFigure1.figureYear
    )} BCE`;
  } else {
    document.getElementById(
      "base-figure-year"
    ).innerText = `Born: ${randomFigure1.figureYear}`;
  }

  document.getElementById("guess-name").innerText = randomFigure2.figureName;

  document.getElementById("reveal-figure-name").innerText =
    randomFigure2.figureName;
  document.getElementById("reveal-figure-img").innerHTML =
    randomFigure2.figureImg;
  document.getElementById("reveal-figure-description").innerText =
    randomFigure2.figureDesc;
  // Check if the figureYear is a negative number
  if (randomFigure2.figureYear < 0) {
    // Modify the string to display "BCE" after the year if negative
    document.getElementById("reveal-figure-year").innerText = `Born: ${Math.abs(
      randomFigure2.figureYear
    )} BCE`;
  } else {
    document.getElementById(
      "reveal-figure-year"
    ).innerText = `Born: ${randomFigure2.figureYear}`;
  }
}

// Call the randomFigure function when the "Play" button on the Menu is clicked
playBtn.addEventListener("click", randomFigures);
