// modules
var Game = require( "./game.js");

document.addEventListener('DOMContentLoaded', function() {

  //variables
  var btnPlay = document.querySelector('.btn-play');
  var instruction = document.querySelector('#instruction');
  var btnInstruction = document.querySelector('.btn-instruction');
  var btnClose = instruction.querySelector('.btn-close');
  var btnOver = document.querySelector('.btn-over');

  // display on board
  var game = new Game();

  game.showFurry();
  game.showCoin();

  // play game
  btnPlay.addEventListener('click', function() {
    game.startGame();
    this.classList.add('play');
    var child = this.querySelector('span');
    child.innerText = '=';
  });

  // turn Furry
  document.addEventListener('keydown', function(event) {
    game.turnFurry(event);
  });

  // show game instruction
  btnInstruction.addEventListener('click', function() {
    instruction.classList.remove('invisible');
  });

  // close game instruction
  btnClose.addEventListener('click', function() {
    instruction.classList.add('invisible');
  });

  // play game again
  btnOver.addEventListener('click', function() {
    this.classList.add('btn-animate');
    this.addEventListener('animationend', function() {
      location.reload();
    })
  });


});