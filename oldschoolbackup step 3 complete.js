var generalTurnCounter = 1;

function playersTurn(event) {
  var squareClickedOn = event.target;
  generalTurnCounter++;
  if (generalTurnCounter % 2 !== 0) {
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
  } else {
    if (squareClickedOn.tagName === 'DIV') {
      if (
        !squareClickedOn.classList.contains('markingsplayer1') &&
        !squareClickedOn.classList.contains('markingsplayer2')
      ) {
        squareClickedOn.classList.add('markingsplayer2');
      }
    }
  }
}

document.querySelector('.board').addEventListener('click', playersTurn);
