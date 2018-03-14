function printInFrame(list) {
  var list = list.split(' ');
  var longest = longestStr(list); //removed .length
  var border = repeat('*', longest + 3); //added + 3

  console.log(border);
  for (word of list) {
    console.log('* ' + word + repeat(' ', longest - word.length) + '*'); //removed + 1
  }
  console.log(border);
}

function repeat(str, times) {
  var result = str;

  for (var i = 0; i < times; i++) {
    result += str;
  }

  return result;
}

function longestStr(list) {
  var longest = list[0].length;

  for (str of list) {
    if(str.length > longest){
    longest = str.length;
    }
  }
  //console.log(longest);
  return longest;
}

// Test driver code, do not modify
printInFrame('May the force be with you');
printInFrame('Here\'s Johnny!');
printInFrame('Supercalifragalisticexpialadocious');
printInFrame('Lost, like tears in the rain');
