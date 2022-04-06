// Business Logic

function Player(id) {
  this.roundScore = 0;
  this.totalScore = 0;
  this.id = id;
}

Player.prototype.rollDice = function() {
  let roll = Math.floor((Math.random()*6) + 1);
  if (roll !== 1) {
    this.roundScore += roll;
  } else {
    this.roundScore = 0;
  }
  return [roll, this.roundScore];
}

Player.prototype.holdScore = function() {
  this.totalScore += this.roundScore;
  this.roundScore = 0;
  return this.totalScore;
}


// UI Logic
let player1 = new Player(1);
let player2 = new Player(2);


$(document).ready(function () {
  $(".player1Roll").click(function (event) {
    event.preventDefault();
    let roll1 = player1.rollDice();
    $("#roll1").text(roll1[0]);
    $("#roundScore1").text(roll1[1]);
    $(".player2Roll").hide();
  });
});

$(document).ready(function () {
  $(".player2Roll").click(function (event) {
    event.preventDefault();
    let roll2 = player2.rollDice();
    $("#roll2").text(roll2[0]);
    $("#roundScore2").text(roll2[1]);
  });
});