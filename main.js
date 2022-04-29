console.log('hola');
var
var boardGame = document.querySelector('article');
boardGame.addEventListener('click', play());

// var clickedBox = event.target;

// function for writing inside the divs -- its only using player 1
function play(event) {
  if (boardGame.tagName === 'DIV') {
    boardGame.className = 'player1-markings';
  }
}
