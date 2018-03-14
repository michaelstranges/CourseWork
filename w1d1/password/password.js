function obfuscate(newpass){
  var x;
  var string = "";
    for(i = 0; i < newpass[2].length; i++){
      x = newpass[2].charAt(i);
        if(newpass[2].charAt(i) === "a"){
          string = string + 4;
      } else if(newpass[2].charAt(i) === "e") {
          string = string + 3;
      } else if(newpass[2].charAt(i) === "o") {
          string = string + 0;
      } else if(newpass[2].charAt(i) === "l"){
          string = string + 1;
      } else {
        string = string + x;
      }
    }
  return string;
}
var pass = process.argv
console.log(obfuscate(pass));
