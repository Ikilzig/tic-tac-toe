//
var generalTurnCounter = 1;

// // function for writing inside the divs -- its only using player 1
function player1(event) {
  // var squareClickedOn = this.event;
  if (squareClickedOn.tagName === 'DIV') {
    if (
      !squareClickedOn.classList.contains('markingsplayer1') &&
      !squareClickedOn.classList.contains('markingsplayer2')
    )
      squareClickedOn.classList.add('markingsplayer1');
  }
  if (generalTurnCounter % 2 !== 0) {
    console.log('player1');
  }
  console.log(generalTurnCounter);
}

function player2(event) {
  // var squareClickedOn = this.target;
  if (squareClickedOn.tagName === 'DIV') {
    if (
      !squareClickedOn.classList.contains('markingsplayer1') &&
      !squareClickedOn.classList.contains('markingsplayer2')
    ) {
      squareClickedOn.classList.add('markingsplayer2');
    }
  }
}
// Step 3 - players (functions) take turns to play
var generalTurnCounter = 1;
function turnCount() {
  generalTurnCounter++;
}

function playersTurn(event) {
  var squareClickedOn = event.target;
  generalTurnCounter++;
  if (generalTurnCounter % 2 !== 0) {
    player1();
  } else {
    player2();
  }
}

document.querySelector('.board').addEventListener('click', playersTurn);

// Functions to test if step 2 and 2.1 work
// document.querySelector('.board').addEventListener('click', player1);

// document.querySelector('.board').addEventListener('contextmenu', player2);
// console.log(player2);
