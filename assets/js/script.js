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
    figureImg: "assets/images/aristotle.webp",
    figureDesc: "Ancient Greek Philosopher & Polymath",
    figureYear: -384,
  },
  {
    figureName: "Alexander the Great",
    figureImg: "assets/images/alexander_the_great.webp",
    figureDesc: "King of Macedonia",
    figureYear: -356,
  },
  {
    figureName: "Archimedes of Syracuse",
    figureImg: "assets/images/archimedes_of_syracuse.webp",
    figureDesc: "Ancient Greek Mathematician, Engineer & Astronomer",
    figureYear: -287,
  },
  {
    figureName: "Spartacus",
    figureImg: "assets/images/spartacus.webp",
    figureDesc: "Thracian Gladiator, Leader of the Third Servile War",
    figureYear: -103,
  },
  {
    figureName: "Julius Caesar",
    figureImg: "assets/images/julius_caesar.webp",
    figureDesc: "Roman Ruler, General & Statesman",
    figureYear: -100,
  },
  {
    figureName: "Cleopatra",
    figureImg: "assets/images/cleopatra.webp",
    figureDesc: "Last Active Pharaoh of Ancient Egypt",
    figureYear: -69,
  },
  {
    figureName: "Boudicca",
    figureImg: "assets/images/boudicca.webp",
    figureDesc: "Ancient British Queen of the Iceni",
    figureYear: 30,
  },
  {
    figureName: "Attila the Hun",
    figureImg: "assets/images/attila_the_hun.webp",
    figureDesc: "Leader of the Hunnic Empire",
    figureYear: 406,
  },
  {
    figureName: "Charlemagne",
    figureImg: "assets/images/charlemagne.webp",
    figureDesc: "King of the Franks, the Lombards & Roman Emperor",
    figureYear: 742,
  },
  {
    figureName: "Alfred the Great",
    figureImg: "assets/images/alfred_the_great.webp",
    figureDesc: "King of the Anglo-Saxons",
    figureYear: 848,
  },
  {
    figureName: "William the Conqueror",
    figureImg: "assets/images/william_the_conqueror.webp",
    figureDesc: "First Norman King of England",
    figureYear: 1028,
  },
  {
    figureName: "Genghis Khan",
    figureImg: "assets/images/genghis_khan.webp",
    figureDesc: "Founder of the Mongol Empire",
    figureYear: 1162,
  },
  {
    figureName: "Joan of Arc",
    figureImg: "assets/images/joan_of_arc.webp",
    figureDesc: "French Saint, Military Leader & Martyr",
    figureYear: 1412,
  },
  {
    figureName: "Leonardo da Vinci",
    figureImg: "assets/images/leonardo_da_vinci.webp",
    figureDesc: "Italian Renaissance Polymath",
    figureYear: 1452,
  },
  {
    figureName: "Henry VIII",
    figureImg: "assets/images/henry_VIII.webp",
    figureDesc: "King of England",
    figureYear: 1491,
  },
  {
    figureName: "Elizabeth I",
    figureImg: "assets/images/elizabeth_I.webp",
    figureDesc: "Queen of England",
    figureYear: 1533,
  },
  {
    figureName: "Mary, Queen of Scots",
    figureImg: "assets/images/mary_queen_of_scots.webp",
    figureDesc: "Scottish Queen",
    figureYear: 1542,
  },
  {
    figureName: "William Shakespeare",
    figureImg: "assets/images/william_shakespeare.webp",
    figureDesc: "English Poet, Playwright and Actor",
    figureYear: 1564,
  },
  {
    figureName: "Isaac Newton",
    figureImg: "assets/images/isaac_newton.webp",
    figureDesc: "Mathematician, Astronomer & Physicist",
    figureYear: 1644,
  },
  {
    figureName: "Catherine the Great",
    figureImg: "assets/images/catherine_the_great.webp",
    figureDesc: "Empress of Russia",
    figureYear: 1729,
  },
  {
    figureName: "George Washington",
    figureImg: "assets/images/george_washington.webp",
    figureDesc: "First US President",
    figureYear: 1732,
  },
  {
    figureName: "Wolfgang Amadeus Mozart",
    figureImg: "assets/images/wolfgang_amadeus_mozart.webp",
    figureDesc: "Composer",
    figureYear: 1756,
  },
  {
    figureName: "Napoleon Bonaparte",
    figureImg: "assets/images/napoleon_bonaparte.webp",
    figureDesc: "French Military Leader and Emperor",
    figureYear: 1769,
  },
  {
    figureName: "Abraham Lincoln",
    figureImg: "assets/images/abraham_lincoln.webp",
    figureDesc: "16th US President",
    figureYear: 1809,
  },
  {
    figureName: "Queen Victoria",
    figureImg: "assets/images/queen_victoria.webp",
    figureDesc: "British Queen & Empress of India",
    figureYear: 1819,
  },
  {
    figureName: "Florence Nightingale",
    figureImg: "assets/images/florence_nightingale.webp",
    figureDesc: "Statistician & Founder of Modern Nursing",
    figureYear: 1820,
  },
  {
    figureName: "Vincent van Gogh",
    figureImg: "assets/images/vincent_van_gogh.webp",
    figureDesc: "Dutch Post-Impressionist Painter",
    figureYear: 1853,
  },
  {
    figureName: "Marie Curie",
    figureImg: "assets/images/marie_curie.webp",
    figureDesc: "Polish-French Physicist & Chemist",
    figureYear: 1867,
  },
  {
    figureName: "Winston Churchill",
    figureImg: "assets/images/winston_churchill.webp",
    figureDesc: "British Wartime Prime Minister",
    figureYear: 1874,
  },
  {
    figureName: "Josef Stalin",
    figureImg: "assets/images/josef_stalin.webp",
    figureDesc: "Soviet Revolutionary and Dictator",
    figureYear: 1878,
  },
  {
    figureName: "Albert Einstein",
    figureImg: "assets/images/albert_einstein.webp",
    figureDesc: "German-born Theoretical Physicist",
    figureYear: 1879,
  },
  {
    figureName: "Rosa Parks",
    figureImg: "assets/images/rosa_parks.webp",
    figureDesc: "American Civil Rights Activist",
    figureYear: 1913,
  },
  {
    figureName: "John F. Kennedy",
    figureImg: "assets/images/john_f_kennedy.webp",
    figureDesc: "35th US President",
    figureYear: 1917,
  },
  {
    figureName: "Nelson Mandela",
    figureImg: "assets/images/nelson_mandela.webp",
    figureDesc: "Activist & President of South Africa",
    figureYear: 1918,
  },
  {
    figureName: "Marilyn Monroe",
    figureImg: "assets/images/marilyn_monroe.webp",
    figureDesc: "American Singer",
    figureYear: 1926,
  },
  {
    figureName: "Anne Frank",
    figureImg: "assets/images/anne_frank.webp",
    figureDesc: "German-born Jewish Diarist",
    figureYear: 1929,
  },
  {
    figureName: "Elvis Presley",
    figureImg: "assets/images/elvis_presley.webp",
    figureDesc: "American Singer and Actor",
    figureYear: 1935,
  },
  {
    figureName: "John Lennon",
    figureImg: "assets/images/john_lennon.webp",
    figureDesc: "English Singer,  Musician & Member of The Beatles",
    figureYear: 1940,
  },
  {
    figureName: "Stephen Hawking",
    figureImg: "assets/images/stephen_hawking.webp",
    figureDesc: "Theoretical Physicist",
    figureYear: 1942,
  },
  {
    figureName: "Diana, Princess of Wales",
    figureImg: "assets/images/diana_princess_of_wales.webp",
    figureDesc: "British Princess",
    figureYear: 1961,
  },
];

// Get a random figure from the array
var chooseRandomFigure = Math.floor(Math.random() * figures.length);

var randomFigure = figures[chooseRandomFigure];
console.log(randomFigure);
