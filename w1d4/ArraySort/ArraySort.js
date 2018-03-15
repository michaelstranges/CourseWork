myarray = [25, 8, 7, 41];
var i = 0;

myarray.sort(function(a,b){
  i++
  console.log("---" + i + "---");
  console.log(a);
  console.log(b);
  console.log(myarray);

  return a - b;
})

console.log(myarray);