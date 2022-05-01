// general counters
var playerOneWinCounter = 0;
var playerTwoWinCounter = 0;
var generalTurnCounter = 0;

// general variables
var boardGameArray = document.querySelectorAll('div');
console.log(boardGameArray);

// Function that regulates players turns
function playersTurn(event) {
  // This runs up to 9 times
  if (generalTurnCounter < boardGameArray.length) {
    var squareClickedOn = event.target;
    if (generalTurnCounter % 2 == 0) {
      if (squareClickedOn.tagName === 'DIV') {
        if (
          !squareClickedOn.classList.contains('markingsplayer1') &&
          !squareClickedOn.classList.contains('markingsplayer2')
        )
          squareClickedOn.classList.add('markingsplayer1');
        generalTurnCounter++;
        document.querySelector('.message-board').textContent =
          "It is now Capitan LeChuck's turn, he throws bombs";
      }
      RulesForWinning();
      // console.log(generalTurnCounter); // checkpoint
    } else {
      if (squareClickedOn.tagName === 'DIV') {
        if (
          !squareClickedOn.classList.contains('markingsplayer1') &&
          !squareClickedOn.classList.contains('markingsplayer2')
        ) {
          squareClickedOn.classList.add('markingsplayer2');
          generalTurnCounter++;
          document.querySelector('.message-board').textContent =
            "It is now Guybrush Treepwood's turn, he fights with swords";
        }
      }
      RulesForWinning();
      // console.log(generalTurnCounter); // checkpoint
    }
  } else {
    alert('The game is over!');
  }
}
// players playing
document.querySelector('.board').addEventListener('click', playersTurn);

//reset button
document
  .querySelector('.reset-button')
  .addEventListener('click', resetBoardForNextGame);

function resetBoardForNextGame(event) {
  for (i = 0; i < boardGameArray.length; i++) {
    boardGameArray[i].classList.remove('markingsplayer1');
    boardGameArray[i].classList.remove('markingsplayer2');
  }
  generalTurnCounter = 0;
  document.querySelector('.message-board').textContent = "Let's do it, Pirate!";
  document.querySelector('.player1-name').classList.remove('winner');
  document.querySelector('.player2-name').classList.remove('winner');
}

//reset score button
document
  .querySelector('.reset-score-button')
  .addEventListener('click', resetAllScore);

function resetAllScore() {
  document.querySelector('.pointsPlayerOne').textContent = 0;
  document.querySelector('.pointsPlayerTwo').textContent = 0;
  document.querySelector('.message-board').textContent =
    'Argg, that damn Curse!';
  resetBoardForNextGame();
}

//winningfunctions

function playerOneWins() {
  playerOneWinCounter++;
  generalTurnCounter = generalTurnCounter + boardGameArray.length;
  document.querySelector('.pointsPlayerOne').textContent = playerOneWinCounter;
  document.querySelector('.message-board').textContent =
    'Guybrush Treepwood wins!';
  document.querySelector('.player1-name').classList.add('winner');
}

function playerTwoWins() {
  playerTwoWinCounter++;
  generalTurnCounter = generalTurnCounter + boardGameArray.length;
  document.querySelector('.pointsPlayerTwo').textContent = playerTwoWinCounter;
  document.querySelector('.message-board').textContent =
    'Captain LeChuck wins!';
  document.querySelector('.player2-name').classList.add('winner');
}

//rules for winning player 1
// conditions for winning row 1
function RulesForWinning() {
  if (
    boardGameArray[0].classList.contains('markingsplayer1') &&
    boardGameArray[1].classList.contains('markingsplayer1') &&
    boardGameArray[2].classList.contains('markingsplayer1')
  ) {
    playerOneWins();
  } else if (
    //row 2
    boardGameArray[3].classList.contains('markingsplayer1') &&
    boardGameArray[4].classList.contains('markingsplayer1') &&
    boardGameArray[5].classList.contains('markingsplayer1')
  ) {
    playerOneWins();
  } else if (
    // row 3
    boardGameArray[6].classList.contains('markingsplayer1') &&
    boardGameArray[7].classList.contains('markingsplayer1') &&
    boardGameArray[8].classList.contains('markingsplayer1')
  ) {
    playerOneWins();
  } else if (
    //column 1
    boardGameArray[0].classList.contains('markingsplayer1') &&
    boardGameArray[3].classList.contains('markingsplayer1') &&
    boardGameArray[6].classList.contains('markingsplayer1')
  ) {
    playerOneWins();
  } else if (
    //column 2)
    boardGameArray[1].classList.contains('markingsplayer1') &&
    boardGameArray[4].classList.contains('markingsplayer1') &&
    boardGameArray[7].classList.contains('markingsplayer1')
  ) {
    playerOneWins();
  } else if (
    // column 3)
    boardGameArray[2].classList.contains('markingsplayer1') &&
    boardGameArray[5].classList.contains('markingsplayer1') &&
    boardGameArray[8].classList.contains('markingsplayer1')
  ) {
    playerOneWins();
  } else if (
    //diagonal 1
    boardGameArray[0].classList.contains('markingsplayer1') &&
    boardGameArray[4].classList.contains('markingsplayer1') &&
    boardGameArray[8].classList.contains('markingsplayer1')
  ) {
    playerOneWins();
  } else if (
    // diagonal 2
    boardGameArray[2].classList.contains('markingsplayer1') &&
    boardGameArray[4].classList.contains('markingsplayer1') &&
    boardGameArray[6].classList.contains('markingsplayer1')
  ) {
    playerOneWins();
  } else if (
    // Player 2
    //row 1
    boardGameArray[0].classList.contains('markingsplayer2') &&
    boardGameArray[1].classList.contains('markingsplayer2') &&
    boardGameArray[2].classList.contains('markingsplayer2')
  ) {
    playerTwoWins();
  } else if (
    //row 2
    boardGameArray[3].classList.contains('markingsplayer2') &&
    boardGameArray[4].classList.contains('markingsplayer2') &&
    boardGameArray[5].classList.contains('markingsplayer2')
  ) {
    playerTwoWins();
  } else if (
    // row 3
    boardGameArray[6].classList.contains('markingsplayer2') &&
    boardGameArray[7].classList.contains('markingsplayer2') &&
    boardGameArray[8].classList.contains('markingsplayer2')
  ) {
    playerTwoWins();
  } else if (
    //column 1
    boardGameArray[0].classList.contains('markingsplayer2') &&
    boardGameArray[3].classList.contains('markingsplayer2') &&
    boardGameArray[6].classList.contains('markingsplayer2')
  ) {
    playerTwoWins();
  } else if (
    //column 2)
    boardGameArray[1].classList.contains('markingsplayer2') &&
    boardGameArray[4].classList.contains('markingsplayer2') &&
    boardGameArray[7].classList.contains('markingsplayer2')
  ) {
    playerTwoWins();
  } else if (
    // column 3)
    boardGameArray[2].classList.contains('markingsplayer2') &&
    boardGameArray[5].classList.contains('markingsplayer2') &&
    boardGameArray[8].classList.contains('markingsplayer2')
  ) {
    playerTwoWins();
  } else if (
    //diagonal 1
    boardGameArray[0].classList.contains('markingsplayer2') &&
    boardGameArray[4].classList.contains('markingsplayer2') &&
    boardGameArray[8].classList.contains('markingsplayer2')
  ) {
    playerTwoWins();
  } else if (
    // diagonal 2
    boardGameArray[2].classList.contains('markingsplayer2') &&
    boardGameArray[4].classList.contains('markingsplayer2') &&
    boardGameArray[6].classList.contains('markingsplayer2')
  ) {
    playerTwoWins();
  } else if (generalTurnCounter === 9) {
    document.querySelector('.message-board').textContent =
      'This is an official draw. Pirates, Parlay';
  } else {
    console.log('keep on playing');
  }
}

// ABOUT ME

function aboutMePopup() {
  var aboutMe = document.getElementById('about-me-text');
  aboutMe.classList.toggle('show');
}

// Pirate insults
var player1insults = [
  'This is the END for you, you gutter-crawling cur!',
  "Soon you'll be wearing my sword like a shish kebab!",
  'My handkerchief will wipe up your blood!',
  'I once owned a dog that was smarter then you',
  'You make me want to puke',
  "Nobody's ever drawn blood from me and nobody ever will",
  'You fight like a dairy farmer',
  'I got this scar on my face during a mighty struggle!',
  "I've heard you were a contemptible sneak",
  'Have you stopped wearing diapers yet?',
  'There are no clever moves that can help you now',
  'Now I know what filth and stupidity really are',
];

var player2Insults = [
  "You're no match for my brains, you poor fool",
  'You have the manners of a beggar',
  "I'm not going to take your insolence sitting down!",
  'There are no words for how disgusting you are',
  "I've spoken with apes more polite then you",
  'My wisest enemies run away at the first sight of me!',
  'Only once have I met such a coward!',
  'I hope you have a boat ready for a quick escape',
  'Every word you say to me is stupid',
  'You are a pain in the backside, sir!',
  'I usually see people like you passed-out on tavern floors',
];
