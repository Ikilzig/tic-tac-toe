var generalTurnCounter = 0;

function playersTurn(event) {
  if (generalTurnCounter < 9) {
    var squareClickedOn = event.target;
    if (generalTurnCounter % 2 == 0) {
      if (squareClickedOn.tagName === 'DIV') {
        if (
          !squareClickedOn.classList.contains('markingsplayer1') &&
          !squareClickedOn.classList.contains('markingsplayer2')
        )
          squareClickedOn.classList.add('markingsplayer1');
        generalTurnCounter++;
      }
      RulesForWinning();
      console.log(generalTurnCounter);
    } else {
      if (squareClickedOn.tagName === 'DIV') {
        if (
          !squareClickedOn.classList.contains('markingsplayer1') &&
          !squareClickedOn.classList.contains('markingsplayer2')
        ) {
          squareClickedOn.classList.add('markingsplayer2');
          generalTurnCounter++;
        }
      }
      RulesForWinning();
      console.log(generalTurnCounter);
    }
  } else {
    alert('The game is over!');
  }
}

document.querySelector('.board').addEventListener('click', playersTurn);

var boardGameArray = document.querySelectorAll('div');

console.log(boardGameArray);

//rules for winning player 1
// conditions for winning row 1

function RulesForWinning() {
  if (
    boardGameArray[0].classList.contains('markingsplayer1') &&
    boardGameArray[1].classList.contains('markingsplayer1') &&
    boardGameArray[2].classList.contains('markingsplayer1')
  ) {
    alert('Player 1 wins');
  } else if (
    //row 2
    boardGameArray[3].classList.contains('markingsplayer1') &&
    boardGameArray[4].classList.contains('markingsplayer1') &&
    boardGameArray[5].classList.contains('markingsplayer1')
  ) {
    alert('Player 1 Wins');
  } else if (
    // row 3
    boardGameArray[6].classList.contains('markingsplayer1') &&
    boardGameArray[7].classList.contains('markingsplayer1') &&
    boardGameArray[8].classList.contains('markingsplayer1')
  ) {
    alert('Player 1 wins');
  } else if (
    //column 1
    boardGameArray[0].classList.contains('markingsplayer1') &&
    boardGameArray[3].classList.contains('markingsplayer1') &&
    boardGameArray[6].classList.contains('markingsplayer1')
  ) {
    alert('Player 1 Wins');
  } else if (
    //column 2)
    boardGameArray[1].classList.contains('markingsplayer1') &&
    boardGameArray[4].classList.contains('markingsplayer1') &&
    boardGameArray[7].classList.contains('markingsplayer1')
  ) {
    alert('Player 1 wins');
  } else if (
    // column 3)
    boardGameArray[2].classList.contains('markingsplayer1') &&
    boardGameArray[5].classList.contains('markingsplayer1') &&
    boardGameArray[8].classList.contains('markingsplayer1')
  ) {
    alert('Player 1 wins');
  } else if (
    //diagonal 1
    boardGameArray[0].classList.contains('markingsplayer1') &&
    boardGameArray[4].classList.contains('markingsplayer1') &&
    boardGameArray[8].classList.contains('markingsplayer1')
  ) {
    alert('Player 1 wins');
  } else if (
    // diagonal 2
    boardGameArray[2].classList.contains('markingsplayer1') &&
    boardGameArray[4].classList.contains('markingsplayer1') &&
    boardGameArray[6].classList.contains('markingsplayer1')
  ) {
    alert('Player 1 wins');
  } else if (
    // Player 2
    //row 1
    boardGameArray[0].classList.contains('markingsplayer2') &&
    boardGameArray[1].classList.contains('markingsplayer2') &&
    boardGameArray[2].classList.contains('markingsplayer2')
  ) {
    alert('Player 2 wins');
  } else if (
    //row 2
    boardGameArray[3].classList.contains('markingsplayer2') &&
    boardGameArray[4].classList.contains('markingsplayer2') &&
    boardGameArray[5].classList.contains('markingsplayer2')
  ) {
    alert('Player 2 Wins');
  } else if (
    // row 3
    boardGameArray[6].classList.contains('markingsplayer2') &&
    boardGameArray[7].classList.contains('markingsplayer2') &&
    boardGameArray[8].classList.contains('markingsplayer2')
  ) {
    alert('Player 2 wins');
  } else if (
    //column 1
    boardGameArray[0].classList.contains('markingsplayer2') &&
    boardGameArray[3].classList.contains('markingsplayer2') &&
    boardGameArray[6].classList.contains('markingsplayer2')
  ) {
    alert('Player 2 Wins');
  } else if (
    //column 2)
    boardGameArray[1].classList.contains('markingsplayer2') &&
    boardGameArray[4].classList.contains('markingsplayer2') &&
    boardGameArray[7].classList.contains('markingsplayer2')
  ) {
    alert('Player 2 wins');
  } else if (
    // column 3)
    boardGameArray[2].classList.contains('markingsplayer2') &&
    boardGameArray[5].classList.contains('markingsplayer2') &&
    boardGameArray[8].classList.contains('markingsplayer2')
  ) {
    alert('Player 2 wins');
  } else if (
    //diagonal 1
    boardGameArray[0].classList.contains('markingsplayer2') &&
    boardGameArray[4].classList.contains('markingsplayer2') &&
    boardGameArray[8].classList.contains('markingsplayer2')
  ) {
    alert('Player 2 wins');
  } else if (
    // diagonal 2
    boardGameArray[2].classList.contains('markingsplayer2') &&
    boardGameArray[4].classList.contains('markingsplayer2') &&
    boardGameArray[6].classList.contains('markingsplayer2')
  ) {
    alert('Player 2 wins');
  } else {
    console.log('keep on playing');
  }
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
