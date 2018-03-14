var words = process.argv;

function pigLatin(words){
  newWords = "";
    for (var x = 2; x < words.length; x++){
      for(var i = 1; i < words[x].length; i++){
        newWords = newWords + words[x][i];
      }
        newWords = newWords + words[x][0] + "ay ";
    }
  return newWords;
}

console.log(pigLatin(words));