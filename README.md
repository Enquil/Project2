# Project2

This is a quiz game that is supposed to have sort of a "trivial pursuit feel", it will give you 3 questions at random based on what category and difficulty you select.
You can select a username as well and view statistics for the current session, it does not save any data however so every session is destroyed on page exit or refresh.

## Content

* [Technologies used]
* [Pages and Features]
* [User Experience and Design]
* [Accessibility]
* [Testing]
* [Deployment]
* [Credits]
* [Site Expansion]
* [Known Issues]


## Technologies used
---

### Languages
  * CSS
  * HTML
  * JavaScript

### TBD  
Wanted to do some json and store users and questions with MongoDB, this might still be incorporated, but the scale does not warrant it at this point and would be more of an excercise than actually being useful.


## Pages and Features
---

### Index
  * 1 page for everything, the html needed is generated by script, except for 1 button, the userform, and 1 div.
  * When visited, the site will prompt for a username and then statistics can be saved and viewed in the session (you will need to enter a username every time you leave or refresh the page).
 
### TBD
  Ideally i would use an "empty" HTML page and generate the whole thing through JavaScript, however the button i did with HTML works great as a sort of dev tool for testing things. 
  So im keeping it in for now. 


## User Experience and Design
---

### Overarching Design
  * One "window"(main div) contains everything, text is generated with JavaScript, kept everything very center and minimal.
  * As simple as possible to start playing, pick username, category, difficulty and you're off.
  * Statistics for current session shows a percentage of the questions you got right.

#### Colours
  * Used https://coolors.co to spawn a nice theme throughout the page, tried to make it sort of trivial pursuit but not really.
  * Background is Liberty #6457A6
  * Text is White #FFFFFF
  * Button background is #0C1713
  * On hover, button background will turn to #42BFDD and the text will become black #000000

#### Fonts
  * hx elements are Mouse Memoirs, imported from google fonts.
  * p and button a Roboto, also google fonts.

### User Experience
  * Tried to make it a bit into an actual game menu a la AAA, because they are usually straightforward and very user friendly.
  * Didnt change any color schemes in between "pages", it gives some continuity.
  * Buttons changes color on hover for some interactivity, Right answer is also lit up in green.


## Accessibility
---

Becuse im using JavaScript for basically all the HTML, i chose buttons instead of links because they acted very weird and declaring a href did not mix well with using JavaScript to generate the HTML, this is most likely because im not experienced with how these interactions work.

No Aria-labels, i started to put them in at first but, but because of how they are supposed to be used, and i dont use a header because it feels so redundant, i chose against it, also got a lot of complaints from w3c.


## Testing
---

### JSLint

#### for (let button of buttons) {
####        button.addEventListener("click", function() {
####            let answer = this.innerHTML;
####            check(answer);
####    });
#### att script.js 44 

This is the one issue i get with the JavaScript.
JSLint Online complains about it (Thanks to Anna Greaves at Code Institute, i think this is great.)
ESLint in vscode doesent complain, JSHint only says this is confusing syntax but is that really confusing?


### Jigsaw validator result 
https://jigsaw.w3.org/css-validator/validator?uri=https%3A%2F%2Fenquil.github.io%2FProject2%2F&profile=css3svg&usermedium=all&warning=1&vextwarning=&lang=en

### W3C Official
https://validator.w3.org/nu/?doc=https%3A%2F%2Fenquil.github.io%2FProject2%2F
1 Error, it complains about meta charset

### Lighthouse score
All 100, performance 92-98.

## Deployment
---

### Deploy on GitHub

  #### * When inside the project and viewing the project files
  #### * In the menu above project files, select settings
  #### * In the left navigation menu, select pages
  #### * Below branch, select branch to deploy from
  #### * Save, might not refresh automatically and could take a moment.


## Credits
---

### Thanks to AnnaGreaves @CodeInstitute for the function mentioned in Testing
### Thanks to AnthonyUgwu @CodeInstitute for a lot of good advice.
### Thank you to MountianCharlie @github for the general README.md structure. 

## Site Expansion 
---

### Passwords and stored data
Will implement a database for storing users and statistics

### More questions
Aiming at 100 across 4 categories, will also restructure the question objects.


## Known Issues
---

### Hard Questions
Does not exist at the moment.