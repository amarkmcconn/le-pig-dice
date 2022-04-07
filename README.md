# Pig Dice 👾

## By Nicholas Benzinger & Mark McConnell
_____________________________

### Project Discription 📖
  * This web application allows the users to play a game of pig dice against eachother. 
  
  _____________________________

### Technologies Used 🖥️

* HTML
* CSS
* JavaScript
* jQuery
* Bootstrap

_______________________________

### Installation Instructions 🖊️

* Clone this respository onto your desktop
* Navigate to the top level of the directory
* Open the index.html file in your web browser
________________________________

### Known Bugs 🐛

* _No known bugs._
* _If you should find any bugs open a pull request, or email._
__________________________________

## License

[GPLv3](https://www.gnu.org/licenses/gpl-3.0.en.html)
__________________________________

## Contact Information
nicholasbenzinger@gmail.com




```javascript

Description: rollDice()

Test 1:
Randomly return a number between 1 and 6
Expected Output:  return a random # between 1 and 6

Test 2:
Stop rolling dice if user rolls a 1
Expected Output: 1  (next players turn)

Test 3:
Stop rolling dice if user rolls a 1
Expected Output: 1  (next players turn) & clears round score

Description: holdScore()
Test 1:
holds totalScore
Expected Output: true or show # 

Test 2:
holds totalScore
zeroes out roundscore

Player 1 & Player 2 
Object to hold 
turn score
total score

Description: rollDouble()

Test 1:
Randomnly return a number between 1 and 6 for two separate dice
Expected  Output: example (2,6) or (3,2)

Test 2
If neither dice shows a 1, their sum is added to the round total.
Expected Output: example (2,6) or (3,2) and roundScore sums (8) and then (13)

Test 3:
If a single 1 is rolled, the player scores nothing and the turn ends.
Expected Output: (1,5) and roundscore (0)

Test 4:
If two 1s are rolled, the player’s entire score is lost, and the turn ends.
Expected Output: (1,1) and roundScore (0) and totalScore (0)

Test 5:
If a double is rolled, the point total is added to the turn total as with any roll but the player is obligated to roll again (possible sub-variation of the two-dice game)
Expected Ouput: (2,2) Hide player1 or player2 option to hold round score 

```