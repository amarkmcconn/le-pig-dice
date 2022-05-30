# Pig Dice 👾

## By Nicholas Benzinger & Mark McConnell
_____________________________

### Project Discription 📖
  * This a web application allows the users to play a game of pig dice against eachother. 

![image](https://user-images.githubusercontent.com/101524368/170919733-555d3d22-1588-42b5-b02c-f6198e72b025.png)
![image](https://user-images.githubusercontent.com/101524368/170919800-20e806ea-b850-4d1f-a49e-093cceef585e.png)


__________________

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
nicholasbenzinger@gmail.com or mark.programming1@gmail.com

Copyright (c) _2022_ _Nichols Benzinger & Mark McConnell_

```javascript

Description: Player(id); 
Object to hold 
turn score
total score
this. Id

Description: rollDice()

Test 1:
Randomly return a number between 1 and 6
Expected Output:  return a random # between 1 and 6

Test 2:
Stop rolling dice if user rolls a 1
Expected Output: 1  (next players turn)

Test 3:
stop rolliing dice if user rolls a 1 and shows round score
Expected Output: 1 roundScore (0)

Test 4:
Stop rolling dice if user rolls a 1 and then switches player
Expected Output: 1  (next players turn) & clears round score

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
If two 1s are rolled, the player’s totalScore is lost, the player’s roundScore is lost and the turn ends.
Expected Output: (1,1) and roundScore (0) and totalScore (0)

Test 5:
If a double is rolled, the point total is added to the turn total as with any roll but the player is obligated to roll again (possible sub-variation of the two-dice game)
Expected Ouput: (2,2) Hide player1 or player2 option to hold round score 


Description: holdScore()
Test 1:
holds totalScore
Expected Output: true or show # 

Test 2:
if player users hold
Expected Output: roundScore is correct (#) and totalScore is updated with proper roundScore

Test 3;
if player users hold and switches player
Expected Output: roundScore is correct (#) and totalScore is updated with proper roundScore, and then switches to other player





```
