var words = ["ground", "control", "to", "major", "tom"];

map(words, function(word) {
  return word.length;
});

map(words, function(word) {
  return word.toUpperCase();
});

map(words, function(word) {
  return word.split('').reverse().join('');
});

function map(words, theFunc){
  newArray = [];
  for(i = 0; i < words.length; i++){
    newArray[i] = theFunc(words[i]);
  }
  console.log(newArray)
}



