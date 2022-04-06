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
    if (roll1[0] === 1) {
      $(".player1Roll").hide();
      $(".player1Hold").hide();
      $("#player2Hold").show();
      $(".player2Roll").show();
    }
  });

  $(".player2Roll").click(function (event) {
    let roll2 = player2.rollDice();
    $("#roll2").text(roll2[0]);
    $("#roundScore2").text(roll2[1]);
    if (roll2[0] === 1) {
      $(".player2Roll").hide();
      $("#player2Hold").hide();
      $(".player1Hold").show();
      $(".player1Roll").show();
    }
  });

  $(".player1Hold").click(function (event) {
    $("#totalScore1").text(player1.holdScore());
    $("#roll1").text("");
    $("#roundScore1").text("");
    $(".player1Roll").hide();
    $(".player1Hold").hide();
    $("#player2Hold").show();
    $(".player2Roll").show();
    if (player1.totalScore >= 100) {
      $("#winner1").append("WINNER, WINNER, WINNER!");
      $("#winner2").append("LOSER, LOSER, LOSER!");
    }
  });

  $("#player2Hold").click(function (event) {
    $("#totalScore2").text(player2.holdScore());
    $("#roll2").text("");
    $("#roundScore2").text("");
    $(".player2Roll").hide();
    $("#player2Hold").hide();
    $(".player1Hold").show();
    $(".player1Roll").show();
    if (player2.totalScore >= 100) {
      $("#winner2").append("WINNER, WINNER, WINNER!");
      $("#winner1").append("LOSER, LOSER, LOSER!");
    }
  });
});