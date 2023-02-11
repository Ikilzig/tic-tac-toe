// Starting conditions


var playerOneWinCounter = localStorage.getItem('persistentScorePlayerOne');
var playerTwoWinCounter = localStorage.getItem('persistentScorePlayerTwo');
var generalTurnCounter = 0;

var boardGameArray = document.querySelectorAll('div');
console.log(boardGameArray);

speechBubblePlayerOneDisappar();
speechBubblePlayerTwoDisappar();

if (playerOneWinCounter !== 0) {
  document.querySelector('.points-player-one').textContent =
    playerOneWinCounter;
} else {
  document.querySelector('.points-player-one').textContent = '0';
}

if (playerTwoWinCounter !== 0) {
  document.querySelector('.points-player-two').textContent =
    playerTwoWinCounter;
} else {
  document.querySelector('.points-player-two').textContent = '0';
}

////////////// BUTTONS ///////////
/// GAME START
document.querySelector('.start-the-game').addEventListener('click',
  gameStart
);

function invisibleImage() {
  document.querySelector('.initial-hello').classList.add('invisible-image');
}

function gameStart() {
  localStorage.setItem('startScreenCondition', 'off');
  document.querySelector('.initial-hello').classList.add('fade-out-image');
  document.querySelector('.intro-audio').play();
  setTimeout(invisibleImage, 2000)

}
function start() {
  if (localStorage.getItem('startScreenCondition') === 'on') {
    document.querySelector('.initial-hello').classList.remove('fade-out-image');
  }
}

// button play again
document
  .querySelector('.reset-button')
  .addEventListener('click', resetBoardForNextGame);

function resetBoardForNextGame(event) {
  for (i = 0; i < boardGameArray.length; i++) {
    boardGameArray[i].classList.remove('markings-player-one');
    boardGameArray[i].classList.remove('markings-player-two');
  }
  generalTurnCounter = 0;
  document.querySelector('.message-board').textContent = "Let's do it, Pirate!";
  document.querySelector('.player-one-name').classList.remove('winner');
  document.querySelector('.player-two-name').classList.remove('winner');
  speechBubblePlayerOneDisappar();
  speechBubblePlayerTwoDisappar();
  document.querySelector('.dialogs-player-one').textContent = ' ';
  document.querySelector('.dialogs-player-two').textContent = ' ';
}

//reset all the game button
document
  .querySelector('.reset-all-game')
  .addEventListener('click', resetAllScore);

function resetAllScore() {
  document.querySelector('.points-player-one').textContent = 0;
  document.querySelector('.points-player-two').textContent = 0;
  document.querySelector('.message-board').textContent =
    'Argg, that damn Monkey Curse!';
  resetBoardForNextGame();
  speechBubblePlayerOneDisappar();
  speechBubblePlayerTwoDisappar();
  document.querySelector('.dialogs-player-one').textContent = ' ';
  document.querySelector('.dialogs-player-two').textContent = ' ';
  localStorage.setItem('persistentScorePlayerTwo', 0);
  localStorage.setItem('persistentScorePlayerOne', 0);
  playerOneWinCounter = 0;
  playerTwoWinCounter = 0;
  localStorage.setItem('startScreenCondition', 'off');
  document.querySelector('.initial-hello').classList.remove('fade-out-image');
}
// MUTE AUDIO ///
var audioMute = document.querySelectorAll('#audio');
function muteAudio() {
  for (i = 0; i < audioMute.length; i++) {
    if (audioMute[i].muted) {
      audioMute[i].muted = false;
      document.querySelector('.mute').textContent = 'Audio On';
    } else {
      audioMute[i].muted = true;
      document.querySelector('.mute').textContent = 'Audio Off';
    }
  }
}

document.querySelector('.mute').addEventListener('click', muteAudio, false);

// ABOUT ME POP UP

function aboutMePopup() {
  var aboutMe = document.getElementById('aboutmetext');
  aboutMe.classList.toggle('show');
}

document
  .querySelector('.information-pop-up')
  .addEventListener('click', aboutMePopup);

///////////////// Pirate insults //////////
var playerOneInsultsArray = [
  'This is the end, you gutter-crawling cur!',
  "Soon you'll be wearing my sword like a kebab!",
  'My handkerchief will wipe up your blood!',
  'I once owned a dog that was smarter then you',
  'You make me want to puke',
  "Nobody's ever drawn blood from me",
  'You fight like a dairy farmer',
  'I got this scar during a mighty struggle!',
  "I've heard you were a contemptible sneak",
  'Have you stopped wearing diapers yet?',
  'There are no clever moves that can help you now',
  'Now I know what filth and stupidity really are',
];

var playerTwoInsultsArray = [
  "You're no match for my brains, you poor fool",
  'You have the manners of a beggar',
  "I'm not going to take your insolence like that!",
  'There are no words for how disgusting you are',
  "I've spoken with apes more polite then you",
  'My wisest enemies run away from me!',
  'Only once have I met such a coward!',
  'I hope you have a boat ready for a quick escape',
  'Every word you say to me is stupid',
  'You are a pain in the backside, sir!',
  'I see people like you passed-out on the local pub',
];

///////////// Game Flow //////////
// Function that regulates players turns
function playersTurn(event) {
  // This runs up to 9 times
  if (generalTurnCounter < boardGameArray.length) {
    var squareClickedOn = event.target;
    if (generalTurnCounter % 2 == 0) {
      if (squareClickedOn.tagName === 'DIV') {
        if (
          !squareClickedOn.classList.contains('markings-player-one') &&
          !squareClickedOn.classList.contains('markings-player-two')
        )
          squareClickedOn.classList.add('markings-player-one');
        document.querySelector('.swords-audio').play();
        generalTurnCounter++;
        document.querySelector('.message-board').textContent =
          "It is now Capitan LeChuck's turn, he throws bombs";
        playerOneDialogEachTurn();
      }
      RulesForWinning();
    } else {
      if (squareClickedOn.tagName === 'DIV') {
        if (
          !squareClickedOn.classList.contains('markings-player-one') &&
          !squareClickedOn.classList.contains('markings-player-two')
        ) {
          squareClickedOn.classList.add('markings-player-two');
          document.querySelector('.bomb-audio').play();
          generalTurnCounter++;
          document.querySelector('.message-board').textContent =
            "It is now Guybrush Treepwood's turn, he fights with swords";
          playerTwoDialogEachTurn();
        }
      }
      RulesForWinning();
    }
  } else {
    alert('The game is over! Click on Play again to.. play again');
  }
}
// players playing
document.querySelector('.board').addEventListener('click', playersTurn);

//winningfunctions

function playerOneWins() {
  playerOneWinCounter++;
  localStorage.setItem('persistentScorePlayerOne', playerOneWinCounter);
  generalTurnCounter = generalTurnCounter + boardGameArray.length;
  document.querySelector('.points-player-one').textContent =
    playerOneWinCounter;
  document.querySelector('.message-board').textContent =
    'Guybrush Treepwood wins!';
  document.querySelector('.win-audio').play();
  document.querySelector('.player-one-name').classList.add('winner');
  speechBubblePlayerOneDisappar();
  document.querySelector('.dialogs-player-one').textContent = ' ';
}

function playerTwoWins() {
  playerTwoWinCounter++;
  localStorage.setItem('persistentScorePlayerTwo', playerTwoWinCounter);
  generalTurnCounter = generalTurnCounter + boardGameArray.length;
  document.querySelector('.points-player-two').textContent =
    playerTwoWinCounter;
  document.querySelector('.message-board').textContent =
    'Captain LeChuck wins!';
  document.querySelector('.win-audio').play();
  document.querySelector('.player-two-name').classList.add('winner');
  speechBubblePlayerTwoDisappar();
  document.querySelector('.dialogs-player-two').textContent = ' ';
}

//rules for winning player 1
// conditions for winning row 1
function RulesForWinning() {
  if (
    boardGameArray[0].classList.contains('markings-player-one') &&
    boardGameArray[1].classList.contains('markings-player-one') &&
    boardGameArray[2].classList.contains('markings-player-one')
  ) {
    playerOneWins();
  } else if (
    //row 2
    boardGameArray[3].classList.contains('markings-player-one') &&
    boardGameArray[4].classList.contains('markings-player-one') &&
    boardGameArray[5].classList.contains('markings-player-one')
  ) {
    playerOneWins();
  } else if (
    // row 3
    boardGameArray[6].classList.contains('markings-player-one') &&
    boardGameArray[7].classList.contains('markings-player-one') &&
    boardGameArray[8].classList.contains('markings-player-one')
  ) {
    playerOneWins();
  } else if (
    //column 1
    boardGameArray[0].classList.contains('markings-player-one') &&
    boardGameArray[3].classList.contains('markings-player-one') &&
    boardGameArray[6].classList.contains('markings-player-one')
  ) {
    playerOneWins();
  } else if (
    //column 2)
    boardGameArray[1].classList.contains('markings-player-one') &&
    boardGameArray[4].classList.contains('markings-player-one') &&
    boardGameArray[7].classList.contains('markings-player-one')
  ) {
    playerOneWins();
  } else if (
    // column 3)
    boardGameArray[2].classList.contains('markings-player-one') &&
    boardGameArray[5].classList.contains('markings-player-one') &&
    boardGameArray[8].classList.contains('markings-player-one')
  ) {
    playerOneWins();
  } else if (
    //diagonal 1
    boardGameArray[0].classList.contains('markings-player-one') &&
    boardGameArray[4].classList.contains('markings-player-one') &&
    boardGameArray[8].classList.contains('markings-player-one')
  ) {
    playerOneWins();
  } else if (
    // diagonal 2
    boardGameArray[2].classList.contains('markings-player-one') &&
    boardGameArray[4].classList.contains('markings-player-one') &&
    boardGameArray[6].classList.contains('markings-player-one')
  ) {
    playerOneWins();
  } else if (
    // Player 2
    //row 1
    boardGameArray[0].classList.contains('markings-player-two') &&
    boardGameArray[1].classList.contains('markings-player-two') &&
    boardGameArray[2].classList.contains('markings-player-two')
  ) {
    playerTwoWins();
  } else if (
    //row 2
    boardGameArray[3].classList.contains('markings-player-two') &&
    boardGameArray[4].classList.contains('markings-player-two') &&
    boardGameArray[5].classList.contains('markings-player-two')
  ) {
    playerTwoWins();
  } else if (
    // row 3
    boardGameArray[6].classList.contains('markings-player-two') &&
    boardGameArray[7].classList.contains('markings-player-two') &&
    boardGameArray[8].classList.contains('markings-player-two')
  ) {
    playerTwoWins();
  } else if (
    //column 1
    boardGameArray[0].classList.contains('markings-player-two') &&
    boardGameArray[3].classList.contains('markings-player-two') &&
    boardGameArray[6].classList.contains('markings-player-two')
  ) {
    playerTwoWins();
  } else if (
    //column 2)
    boardGameArray[1].classList.contains('markings-player-two') &&
    boardGameArray[4].classList.contains('markings-player-two') &&
    boardGameArray[7].classList.contains('markings-player-two')
  ) {
    playerTwoWins();
  } else if (
    // column 3)
    boardGameArray[2].classList.contains('markings-player-two') &&
    boardGameArray[5].classList.contains('markings-player-two') &&
    boardGameArray[8].classList.contains('markings-player-two')
  ) {
    playerTwoWins();
  } else if (
    //diagonal 1
    boardGameArray[0].classList.contains('markings-player-two') &&
    boardGameArray[4].classList.contains('markings-player-two') &&
    boardGameArray[8].classList.contains('markings-player-two')
  ) {
    playerTwoWins();
  } else if (
    // diagonal 2
    boardGameArray[2].classList.contains('markings-player-two') &&
    boardGameArray[4].classList.contains('markings-player-two') &&
    boardGameArray[6].classList.contains('markings-player-two')
  ) {
    playerTwoWins();
  } else if (generalTurnCounter === 9) {
    document.querySelector('.message-board').textContent =
      'This is a draw. Pirates... parlay!';
  } else {
    console.log('keep on playing');
  }
}

////////// PLAYERS INTERACTION ///////

//Dialog insults function

function playerOneDialogEachTurn() {
  var randomInsult = Math.floor(Math.random() * playerOneInsultsArray.length);
  document.querySelector('.dialogs-player-one').textContent =
    playerOneInsultsArray[randomInsult];
  speechBubblePlayerOneAppear();
  speechBubblePlayerTwoDisappar();
}

function playerTwoDialogEachTurn() {
  var randomInsult = Math.floor(Math.random() * playerTwoInsultsArray.length);
  document.querySelector('.dialogs-player-two').textContent =
    playerTwoInsultsArray[randomInsult];
  speechBubblePlayerTwoAppear();
  speechBubblePlayerOneDisappar();
}

function speechBubblePlayerOneDisappar() {
  var speechBubbleToAppear = document.querySelector('#speech-player-one');
  speechBubbleToAppear.classList.add('speech-disappear');
}

function speechBubblePlayerTwoDisappar() {
  var speechBubbleToAppear = document.querySelector('#speech-player-two');
  speechBubbleToAppear.classList.add('speech-disappear');
}

function speechBubblePlayerOneAppear() {
  var speechBubbleToAppear = document.querySelector('#speech-player-one');
  speechBubbleToAppear.classList.remove('speech-disappear');
}

function speechBubblePlayerTwoAppear() {
  var speechBubbleToAppear = document.querySelector('#speech-player-two');
  speechBubbleToAppear.classList.remove('speech-disappear');
}
