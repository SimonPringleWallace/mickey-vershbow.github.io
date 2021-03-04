# mickey-vershbow.github.io
SEI Jedi Unit 1 / Project 1

# Climate Change Trivia App

### Technologies / API's used:
* API: [LINK](https://cdn.contentful.com/spaces/1ooy33zp4esg/environments/master/entries?access_token=GwmWVEBSVzK_noU9IhoIaYblT31-CqoiESVSAdo7UJ0&content_type=triviaq)
* Contentful CMS
* jQuery
* Shoelace CSS Framework
* Google Fonts [Inknut Antiqua 500 Weight](https://fonts.googleapis.com/css2?family=Inconsolata&family=Inknut+Antiqua:wght@500&family=Space+Grotesk:wght@300;400&display=swap)


### Overview

This is a basic two-player trivia game. If a player gets a question right, they get a point. If they get a question wrong, they get no points. After each turn, the player turn switch is toggled. There is no winning or losing yet, the game will just go on and on.

I'm using jQuery for the most part because it's part of the project requirements.

So far things are set up like this: after a user clicks an answer, points are logged and the board is reset. The player scores turn red or green depending on whether they got the correct answer or not. Pretty simple!

### Wireframes

### Screenshots




### Future Goals
* Old questions/answers fade out and new questions/answers fade in when the board is reset.
* Board doesn't reset automatically; instead, the correct answer to current question is shown, and the board is reset when user clicks a "next question" button. 
* CSS animations for the "Climate Change Trivia" title.
* Sound EFX for correct/incorrect answers.
* Functional dropdown menu links 


# QUESTIONS FOR SIMON

1. How do I refactor the "setBoard" function as something that only runs when the "next" button is clicked? 
2. How do I approach creating a function for restarting the game entirely? I wanted to include this as an option in dropdown menu. The only difference between resetting the board and restarting the game would be setting the player scores back to zero.
3. How do I approach fading the old questions/answers out, and fading the new ones in? Something like ```var timeoutID = scope.setTimeout(function[, delay]);```


