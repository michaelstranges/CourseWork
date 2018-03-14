var words = process.argv;

for(var i = 2; i < words.length; i++){
  var midline = "";
  console.log(reverse(words));
  }

  function reverse(line){

      for(var j = (line[i].length - 1); j >= 0; j--){
        midline = midline + line[i][j];
      }
    return midline;
  }