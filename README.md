# TIC - TAC - TOE

## Summary

This is a take on the classic TIC-TAC-TOE that pays homage to one of the best video game EVER (at least of my childhood...), called
Monkey Island.

[Click here to play the game.](https://ikilzig.github.io/tic-tac-toe/)

(The game is optmized for a minimum width of 1024px)

## Plan for solving the problem

### Plan

Considering that these are my first steps, the general approach would be first to make it work. Then I will try to make it look nice and, lastly, make it better.

#### Step 1

1. I drew a couple of design sheets, one with a general approach:
   ![general plan](./images/general-plan.jpg)
   And a second one that details the flow flow of the program and the subroutines:
   ![flow and subroutines](./images/sub-routines.jpg)

2. I wrote this README.md file, which is also a great opportunity to plan the next steps.

#### Step 2 - HTML wireframe.

1. I began with the HTML wireframe shown in the first image.
2. Once the HTML was roughly outlined, I did some basic CSS to give it a rough visual layout.
3. I added some pre-emptive classes and IDs for the next step.

#### Step 3 - JS - Make it work

1. From this step onwards, I will start coding the behaviour of the site mainly JS.

I used the same principle over and over again:

### Build simple, brick by brick.

==This readme file will be updated along the project==

- ~~Draw the grid: a 3x3 array~~
- ~~Draw something on the grid~~
- ~~Be sure that the drawings don't overlap and you can only draw on empty spots~~
- ~~Implement 2 players taking turns (idea to use: a counter, odd player1, even player2, image sub-routines)~~
- ~~These 2 players draw something different~~
- ~~Implement the flow of the program (image sub-routines)~~
- ~~Implement the rules for winning. Use array positions and a brute-force approach~~

### Step 4 - CSS and visuals - make it look nice

Now that the prototype works, I've started polishing the visual approach. There are several things to consider here. The main one was to choose a theme, which I already have: the first Monkey Island video play. Thus, the next things to complete are:

- ~~Find the two main characters and the game logo and edit the images to fit the page~~
- ~~Layout a nice board and different chips for each player~~
- ~~Make them look good and harmonious~~
- ~~Edit all the other standing elements to give a better game immersion~~
- ~~Change font style~~

#### JS

- ~~Convert all the alerts to on-screen messages. Use a tag and textContent~~
- ~~Add a reset button~~
- ~~Add a total reset button~~
- ~~Add messages stating whose turn is next~~

### Step 5 - Add extra functionalities - Make it better

- ~~Add audio effects on each play (one for swords and one for bombs)~
- ~~Add interaction between the players -classic Monkey Island insults). The arrays are on the js already~~

==Things to work out==

- Add an initial screen, something like this: https://css-tricks.com/creating-css-sliding-door-effect/
- intro and winning music (source https://scummbar.com/resources/downloads/index.php?todo=MP3)
- Add more game characters and allow player selection
- LocalStorage or SessionStorage?
- Other cool stuff, like cleaning the code

## Tech used

- Amazing search engines
- GitHub
- HTML
- CSS
- JavaScript
- Image editors
- Adobe Color wheel
- TBA

## Lessons learned

- Coding is hard
- Coding is also fun (even if the code is still not working)
- Parvus error in principio, magnus est in fine (A small error at the beginning [planning] is a big error at the end of the job)
- There are plenty of free images and image kits out there
- You don't need to be a genius to use an online image editor
- But you always need to check a color wheel like Adobe
- It's hard to work with colors and contrasts.
- ==That there is a balance between it works and make it better, and between adding new functionalities and redesign the whole thing to fit them.==

<a href="https://ikilzig.github.io/tic-tac-toe/" target="_blank">Click here to play the game</a>
