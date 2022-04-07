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

Player.prototype.rollDouble = function() {
  let doubleOne = Math.floor((Math.random()*6) + 1);
  let doubleTwo = Math.floor((Math.random()*6) + 1);
  let rollTotal = doubleOne + doubleTwo;
  if (doubleOne === 1 && doubleTwo === 1) {
    this.totalScore = 0;
    this.roundScore = 0;
  } else if (doubleOne === 1 || doubleTwo === 1) {
    this.roundScore =  0;
  } else {
    this.roundScore += rollTotal;
  }
  return [[doubleOne, doubleTwo], this.roundScore, this.totalScore];
}
  

Player.prototype.holdScore = function() {
  this.totalScore += this.roundScore;
  this.roundScore = 0;
  return this.totalScore;
}

// Player.prototype.resetGame = function() {
//   this.roundScore = 0;
//   this.totalScore = 0;
//   // return [this.roundScore, this.totalScore]
// }


// UI Logic

let player1 = new Player(1);
let player2 = new Player(2);


$(document).ready(function () {
  $("#oneDice").click(function(event) {
    event.preventDefault();
    $(".oneDie").show();
    $(".twoDie").hide();
  });

  
  $(".player1Roll").click(function (event) {
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

  $("#twoDice").click(function(event) {
    $(".oneDie").hide();
    $(".twoDie").show();
  });

  
  $(".player1DubRoll").click(function (event) {
    let roll1Dub = player1.rollDouble();
    $("#roll1Dub").text(roll1Dub[0]);
    $("#roundScore1Dub").text(roll1Dub[1]);
    $("#totalScore1Dub").text(roll1Dub[2]);
    if ((roll1Dub[0][0] === 2 && roll1Dub[0][1]=== 2) || (roll1Dub[0][0] === 3 && roll1Dub[0][1]=== 3) || (roll1Dub[0][0] === 4 && roll1Dub[0][1]=== 4) || (roll1Dub[0][0] === 5 && roll1Dub[0][1]=== 5) || (roll1Dub[0][0] === 6 && roll1Dub[0][1]=== 6)) {
      $(".player1DubHold").hide();
    } else {
      $(".player1DubHold").show();
    }
    if (roll1Dub[0].includes(1)) {
      $(".player1DubRoll").hide();
      $(".player1DubHold").hide();
      $("#player2DubHold").show();
      $(".player2DubRoll").show();
    }
  });

  $(".player2DubRoll").click(function (event) {
    let roll2Dub = player2.rollDouble();
    $("#roll2Dub").text(roll2Dub[0]);
    $("#roundScore2Dub").text(roll2Dub[1]);
    $("#totalScore2Dub").text(roll2Dub[2]);
    if ((roll2Dub[0][0] === 2 && roll2Dub[0][1]=== 2) || (roll2Dub[0][0] === 3 && roll2Dub[0][1]=== 3) || (roll2Dub[0][0] === 4 && roll2Dub[0][1]=== 4) || (roll2Dub[0][0] === 5 && roll2Dub[0][1]=== 5) || (roll2Dub[0][0] === 6 && roll2Dub[0][1]=== 6)) {
      $("#player2DubHold").hide();
    } else {
      $("#player2DubHold").show();
    }
    if (roll2Dub[0].includes(1)) {
      $(".player2DubRoll").hide();
      $("#player2DubHold").hide();
      $(".player1DubHold").show();
      $(".player1DubRoll").show();
    }
  });

  $(".player1DubHold").click(function (event) {
    $("#totalScore1Dub").text(player1.holdScore());
    $("#roll1Dub").text("");
    $("#roundScore1Dub").text("");
    $(".player1DubRoll").hide();
    $(".player1DubHold").hide();
    $("#player2DubHold").show();
    $(".player2DubRoll").show();
    if (player1.totalScore >= 100) {
      $("#winner1Dub").append("WINNER, WINNER, WINNER!");
      $("#winner2Dub").append("LOSER, LOSER, LOSER!");
    }
  });

  $("#player2DubHold").click(function (event) {
    $("#totalScore2Dub").text(player2.holdScore());
    $("#roll2Dub").text("");
    $("#roundScore2Dub").text("");
    $(".player2DubRoll").hide();
    $("#player2DubHold").hide();
    $(".player1DubHold").show();
    $(".player1DubRoll").show();
    if (player2.totalScore >= 100) {
      $("#winner2Dub").append("WINNER, WINNER, WINNER!");
      $("#winner1Dub").append("LOSER, LOSER, LOSER!");
    }
  });

  // $("#reset").click(function(event) {
  //   $("#totalScore1").text(player1.resetGame());
  //   $("#totalScore2").text(player2).resetGame();
  //   $("#totalScore1Dub").text(player1.resetGame());
  //   $("#totalScore2Dub").text(player2.resetGame()); 
  //   $("#roundScore1").text(player1).resetGame();
  //   $("#roundScore2").text(player2).resetGame();
  //   $("#roundScore1Dub").text(player1).resetGame();
  //   $("#roundScore2Dub").text(player2).resetGame();
  //   $("#roll1").text(player1).resetGame();
  //   $("#roll2").text(player2).resetGame();
  //   $("#roll1Dub").text(player1).resetGame();
  //   $("#roll2Dub").text(player2).resetGame();
  // })
});