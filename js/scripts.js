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


