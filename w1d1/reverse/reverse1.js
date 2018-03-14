function reverse(line){
//var midline = "";
var newline = "";

  for(var i = 2; i < line.length; i++){
  var midline = "";
    for(var j = (line[i].length - 1); j >= 0; j--){
      midline = midline + line[i][j];
    }
      if(i === (line.length - 1)){
        newline = newline + midline;
      } else {
        newline = newline + midline + "\n";
      }
    }
  return newline;
}

var words = process.argv;
console.log(reverse(words));