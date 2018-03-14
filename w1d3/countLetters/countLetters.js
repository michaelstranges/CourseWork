// write function to return unique characters in string
//how many times each letter found in string
// return object representing stats for character
function countLetters(myString){
  var lowerString = myString.toLowerCase();
  var noSpaceString = lowerString.split(" ").join("");
  var workString = noSpaceString.split("");
  var theObject = {};
  var letterCount = 0;
    for(i = 0; i < workString.length; i++){
      var theLetter = workString[i];

      if(theObject[theLetter] > 0){
        theObject[theLetter] += 1
      } else {
      theObject[theLetter] = 1;
      }
    }
return theObject;
}

var myString = "lighthouse in the house"
console.log(countLetters(myString));