# Historical Figures

'Historical Figures' is an engaging trivia game that challenges players' knowledge of historical figures from various ages and cultures. From renowned leaders to influential inventors, every correct answer brings players closer to becoming a true historical virtuoso.

![Mockup](docs/readme_images/mockup.png)

## Features

### Menu Page

* A simple but aesthetically pleasing menu introduces users to the 'Historical Figures' game.
* The primary function buttons are placed in the middle of the page to instantly attract the users' attention.
* The "Instructions" button is placed first to encourage users to open this page before starting the game.

![Menu Page](docs/readme_images/menu_page.png)

![Menu Page - Mobile](docs/readme_images/menu_page_mobile.png)

### Instructions Page

* Clicking the "Instructions" button will display the instructions page.
* The instructions are clearly laid out and thoroughly explained so that users can get a good understanding of the content of the game before even opening it.
* The return arrow icon is large enough to be easily noticed and is placed in the top-left corner, following a universal position for return buttons and so making its function clear and understandable.

![Instructions Page](docs/readme_images/instructions_page.png)

![Instructions Page - Mobile](docs/readme_images/instructions_page_mobile.png)

### Game Page - Active Game

* Clicking the "Play" button will display the game page and automatically start a new game.
* Users will then have 10 seconds, which counts down in the centre of the page, to submit an answer.
* The "Younger" and "Older" answer submission buttons are placed directly under the bottom card, which makes it clear that they must compare that historical figure to the one above.
* The "is…" text was an addition made after an initial round of user feedback to reinforce the aim of the game, by forming a "This figure is younger/older" statement in the users' head when coupled with the buttons directly below.

![Game Page - Active Game](docs/readme_images/game_page.png)

![Game Page - Active Game - Mobile](docs/readme_images/game_page_mobile.png)

### Game Page - Correct Answer

* Submitting a correct answer will display the full details of the figure bottom card, allowing the user to make a comparison between the two if desired.
* The page divider will change to a shade of green and display a 'check' icon in-place of the timer so clearly indicate that the answer was correct.
* The "Score" counter at the top of the page will increment by 1 point after each correct answer, allowing the user to keep track throughout the game.
* The "High Score" will is stored locally to the users' device and will update to match the "Score" when a new high score is set. This feature aims to encourage users to return the game in order to beat their own score and even share the game with others to challenge them to do the same.

![Game Page - Correct Answer](docs/readme_images/game_correct.png)

![Game Page - Correct Answer - Mobile](docs/readme_images/game_correct_mobile.png)

### Game Page - Incorrect Answer

* Submitting an incorrect answer will also display the full details of the figure on the bottom card, allowing the users to make a comparison between the two and understand why they were wrong.
* Revealing card even when the wrong answer is submitted allows users to learn more about the figure, aiming to encouraging them to play again with their newfound knowledge as they now stand a better chance of answering correctly if the figure appears again.
* The "Menu" and "Play Again" buttons allow for clear and straightforward navigation, the latter of which will automatically randomise the two figure cards, reset the score and start the timer again.

![Game Page - Incorrect Answer](docs/readme_images/game_incorrect.png)

![Game Page - Incorrect Answer - Mobile](docs/readme_images/game_incorrect_mobile.png)

### 404 Page

* A simple 404 page allows users to navigate to the menu through a simple and eye-catching button, without having to do any extra typing or browser operations.
* Including the 'Historical Figures' name and following the same styles of the main site aims to inform users that they are on the right track and discourages them from leaving out of frustration.

![404 Page](docs/readme_images/404_page.png)

![404 Page - Mobile](docs/readme_images/404_page_mobile.png)

### Existing Features

* Clearly structured and easily navigable pages
* Straightforward interactive elements, all of which provide feedback through hover effects
* A custom 404 page to reassure users
* Responsive design

### Possible Future Features

* Styles for a "dark-mode" could be added and toggled with an animated button to allow users more control over the site's aesthetic.
* More figures could be added to bridge the large time gaps between some of the current figures.
* A difficulty setting could be implemented with lesson known figures to challenge the more historically-knowledgeable users.

## Design

### Wireframe

![Wireframe](docs/readme_images/wireframe.png)

### Imagery

The images used for each figure, be it a painting, statue or photograph, allow the users a more memorable way of recalling the figures when making their guesses.

### Typography

* The 'Galada' font from Google Fonts used for the ‘Historical Figures’ header is inspired by the more cursive handwriting that represents historical ages in modern media.
* The 'Rubik' font from Google Fonts is clear and simple to allow users easily read necessary information quickly if required by the games fast-paced nature.

### Background & Colour Palette

* The background is inspired by ancient Greek patterns and allows for an aesthetically pleasing appearance without distracting from the content of the site or causing a problem for more visually impaired users.
* The violet colour used for the text, buttons and more prominent design elements is more appealing than a standard monotone colour but doesn’t distract or cause visual issues. The shade used is also an exact combination of the green and red shades used in the 'Historical Figures' header.

![Colour Palette](docs/readme_images/colour_palette.png)

## Technologies

The following technologies were used in the creation of the website:

HTML - The structure of the website was developed using HTML

CSS - The website was styled using custom CSS in an external file

JavaScript - The interactive elements and game logic was developed using custom JavaScript in an external file

[Visual Studio Code](https://code.visualstudio.com/) - The website was developed using the Visual Studio Code desktop application

[GitHub](https://github.com/) - The source code is hosted on GitHub and deployed using Git Pages

Git - Used to commit and push code during the development of the website

[Balsamiq](https://balsamiq.com/wireframes/desktop/) - The wireframe was created using the Balsamiq desktop application

[Google Fonts](https://fonts.google.com/) - Used to find and import the 'Galada' and 'Rubik' fonts used throughout the website

[Favicon.io](https://favicon.io/) - Used to find and import the hourglass favicon

[Font Awesome](https://fontawesome.com/) - Used to find and import all icons used throughout the website

[Pixelied]( https://pixelied.com/) - Used to convert the images used in the website to WEBP format

[Tinify](https://tinypng.com/) - Used to compress the images to reduce file sizes for improved performance
