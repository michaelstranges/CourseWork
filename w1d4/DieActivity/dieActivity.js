function makeLoadedDie() {
  var list = [5, 4, 6, 1, 6, 4, 2, 3, 3, 5];
  var i = 0;
  var rollDie = function () {
  return Math.floor(1 + Math.random() * 6);
  }

  var myRoll = rollDie()

  //console.log(rollDie());  // 1 (for example)
  return function(myRoll) {
    if(i >= (list.length)){
      i = 0;
      myRoll = list[i];
    } else {
      myRoll = list[i];
    }
      i++;
    return myRoll;
    /* your code here */
  }
}

var rollLoadedDie = makeLoadedDie();

console.log(rollLoadedDie());  // 5
console.log(rollLoadedDie());  // 4
console.log(rollLoadedDie());  // 6
