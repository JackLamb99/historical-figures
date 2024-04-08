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
    figureDesc: "Ancient Greek Philosopher & Polymath",
    figureYear: -384
  },
  {
    figureName: "Alexander the Great",
    figureDesc: "King of Macedonia",
    figureYear: -356
  },
  {
    figureName: "Archimedes of Syracuse",
    figureDesc: "Ancient Greek Mathematician, Engineer & Astronomer",
    figureYear: -287
  },
  {
    figureName: "Spartacus",
    figureDesc: "Thracian Gladiator, Leader of the Third Servile War",
    figureYear: -103
  },
  {
    figureName: "Julius Caesar",
    figureDesc: "Roman Ruler, General & Statesman",
    figureYear: -100
  },
  {
    figureName: "Cleopatra",
    figureDesc: "Last Active Pharaoh of Ancient Egypt",
    figureYear: -69
  },
  {
    figureName: "Boudicca",
    figureDesc: "Ancient British Queen of the Iceni",
    figureYear: 30
  },
  {
    figureName: "Attila the Hun",
    figureDesc: "Leader of the Hunnic Empire",
    figureYear: 406
  },
  {
    figureName: "Charlemagne",
    figureDesc: "King of the Franks, the Lombards & Roman Emperor",
    figureYear: 742
  },
  {
    figureName: "Alfred the Great",
    figureDesc: "King of the Anglo-Saxons",
    figureYear: 848
  },
  {
    figureName: "William the Conqueror",
    figureDesc: "First Norman King of England",
    figureYear: 1028
  },
  {
    figureName: "Genghis Khan",
    figureDesc: "Founder of the Mongol Empire",
    figureYear: 1162
  },
  {
    figureName: "Joan of Arc",
    figureDesc: "French Saint, Military Leader & Martyr",
    figureYear: 1412
  },
  {
    figureName: "Leonardo da Vinci",
    figureDesc: "Italian Renaissance Polymath",
    figureYear: 1452
  },
  {
    figureName: "Henry VIII",
    figureDesc: "King of England",
    figureYear: 1491
  },
  {
    figureName: "Elizabeth I",
    figureDesc: "Queen of England",
    figureYear: 1533
  },
  {
    figureName: "Mary, Queen of Scots",
    figureDesc: "Scottish Queen",
    figureYear: 1542
  },
  {
    figureName: "William Shakespeare",
    figureDesc: "English Poet, Playwright and Actor",
    figureYear: 1564
  },
  {
    figureName: "Isaac Newton",
    figureDesc: "Mathematician, Astronomer & Physicist",
    figureYear: 1644
  },
  {
    figureName: "Catherine the Great",
    figureDesc: "Empress of Russia",
    figureYear: 1729
  },
  {
    figureName: "George Washington",
    figureDesc: "First US President",
    figureYear: 1732
  },
  {
    figureName: "Wolfgang Amadeus Mozart",
    figureDesc: "Composer",
    figureYear: 1756
  },
  {
    figureName: "Napoleon Bonaparte",
    figureDesc: "French Military Leader and Emperor",
    figureYear: 1769
  },
  {
    figureName: "Abraham Lincoln",
    figureDesc: "16th US President",
    figureYear: 1809
  },
  {
    figureName: "Queen Victoria",
    figureDesc: "British Queen & Empress of India",
    figureYear: 1819
  },
  {
    figureName: "Florence Nightingale",
    figureDesc: "Statistician & Founder of Modern Nursing",
    figureYear: 1820
  },
  {
    figureName: "Vincent van Gogh",
    figureDesc: "Dutch Post-Impressionist Painter",
    figureYear: 1853
  },
  {
    figureName: "Marie Curie",
    figureDesc: "Polish-French Physicist & Chemist",
    figureYear: 1867
  },
  {
    figureName: "Winston Churchill",
    figureDesc: "British Wartime Prime Minister",
    figureYear: 1874
  },
  {
    figureName: "Josef Stalin",
    figureDesc: "Soviet Revolutionary and Dictator",
    figureYear: 1878
  },
  {
    figureName: "Albert Einstein",
    figureDesc: "German-born Theoretical Physicist",
    figureYear: 1879
  },
  {
    figureName: "Rosa Parks",
    figureDesc: "American Civil Rights Activist",
    figureYear: 1913
  },
  {
    figureName: "John F. Kennedy",
    figureDesc: "35th US President",
    figureYear: 1917
  },
  {
    figureName: "Nelson Mandela",
    figureDesc: "Activist & President of South Africa",
    figureYear: 1918
  },
  {
    figureName: "Marilyn Monroe",
    figureDesc: "American Singer",
    figureYear: 1926
  },
  {
    figureName: "Anne Frank",
    figureDesc: "German-born Jewish Diarist",
    figureYear: 1929
  },
  {
    figureName: "Elvis Presley",
    figureDesc: "American Singer and Actor",
    figureYear: 1935
  },
  {
    figureName: "John Lennon",
    figureDesc: "English Singer,  Musician & Member of The Beatles",
    figureYear: 1940
  },
  {
    figureName: "Stephen Hawking",
    figureDesc: "Theoretical Physicist",
    figureYear: 1942
  },
  {
    figureName: "Diana, Princess of Wales",
    figureDesc: "British Princess",
    figureYear: 1961
  },
];