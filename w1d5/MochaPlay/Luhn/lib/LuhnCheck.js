function check(data){
  //break data into individiual numbers
  var newData = [];
  var splitData = data.toString().split("");
  //double every second digit
  for(var i = (splitData.length - 1); i >= 0; i-=2){
  //if doubled is greater than 9, add the digits to create new number
    if((splitData[i] * 2) > 9){
      var product = splitData[i] * 2
      var addProd = product.toString().split("")
      var newProd = Number(addProd[0]) + Number(addProd[1]);
      splitData[i] = newProd;
       }
    else if((splitData[i]*2) <= 9) {
      newData[i] = splitData[i];
       }
    }
  newData[splitData.length] = "x"
  //push an x to the end of the number
  return newData;
}
  //add digits
  //x now equals ths (sum*9) modulo 10
  //TOTAL SUM % 10 === 0 is a must

//console.log(newData)


console.log(check(7992739871))