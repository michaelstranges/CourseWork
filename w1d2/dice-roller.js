//Take in a single number from CL
var numRolls = Number(process.argv.slice(2));
var myRolls = "";

//Roll that many 6 sided dice
function diceRoll(numRolls){
  for (i = 0; i < (numRolls - 1); i++){
    myRolls = myRolls + (Math.floor(Math.random()*6)+1) + ", ";
  }
  myRolls = myRolls + (Math.floor(Math.random()*6)+1);
  return myRolls;
}

//output how many dice rolled
// what numbers were rolled
diceRoll(numRolls);
console.log("Rolled " + numRolls + " dice: " + myRolls);






