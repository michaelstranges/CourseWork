// write function to return unique characters in string
//how many times each letter found in string
// return object representing stats for character
function countLetters(myString){
  var lowerString = myString.toLowerCase();
  var noSpaceString = lowerString.split(" ").join("");
  var workString = noSpaceString.split("");
  var theObject = {};
  // var letterCount = 0;
    for(i = 0; i < workString.length; i++){
      var theLetter = workString[i];

    if(theObject[theLetter] === undefined){
        theObject[theLetter] = i.toString();
      } else {
        theObject[theLetter] = theObject[theLetter] + " " + [i];
      }
    }
return theObject;
}
var myString = "lighthouse in the house"
console.log(countLetters(myString));

// take in the string
// join and split string to create array
// use object to collect letters and set as key
// make letter position the value of the key