function average(list) {
  var sum = 0;

  for (var num of list) {
    sum += num; //corrected the operation from ++ to += to add num to sum
  }

  return sum / list.length;
} //finished the function with a closing bracket
console.log(average([3, 5, 7]));
