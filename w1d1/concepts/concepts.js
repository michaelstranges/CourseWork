/*
 * Write a loop that joins the contents of conceptList together
 * into one String, concepts, with each list item separated from
 * the previous by a comma.
 *
 * Note: you may not use the built-in Array join function.
 */
function joinList(array){
 var sentence = [];

  if(array.length == 0 && Array.isArray(array)){
    sentence = "";
  }
  else {
    for (var i = 0; i < (array.length - 1); i++){
      sentence = sentence + array[i] + ", ";
    }
  sentence = sentence + array[array.length - 1];

  }
  return sentence;
}

var conceptList = ["gists", "types", "operators", "iteration", "problem solving"];

 // a custom function written by you (you must define it too!)
var concepts = joinList(conceptList);

// Write your code here...

console.log("Today I learned about " + concepts + ".");
console.log(joinList([]));
