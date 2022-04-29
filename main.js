// console.log('hola');

// var playerPlay = event.target;
// var playBoard = document.querySelector('board');
// console.log(board);

// var boardGame = document.querySelector('board');
// boardGame.addEventListener('click');

// // var clickedBox = event.target;

// // function for writing inside the divs -- its only using player 1
function player1(event) {
  var squareClickedOn = event.target;
  if (squareClickedOn.tagName === 'DIV') {
    if (
      !squareClickedOn.classList.contains('markingsplayer1') &&
      !squareClickedOn.classList.contains('markingsplayer2')
    )
      squareClickedOn.classList.add('markingsplayer1');
  }
}

function player2(event) {
  var squareClickedOn = event.target;
  if (squareClickedOn.tagName === 'DIV') {
    if (
      !squareClickedOn.classList.contains('markingsplayer1') &&
      !squareClickedOn.classList.contains('markingsplayer2')
    ) {
      console.log('1');
      squareClickedOn.classList.add('markingsplayer2');
    }
  }
}

document.querySelector('.board').addEventListener('click', player1);

document.querySelector('.board').addEventListener('contextmenu', player2);
