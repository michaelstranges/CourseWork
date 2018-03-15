function findWaldo(arr, found) {
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] === "Waldo") {
      found(i);   // execute callback
    }
  }
}

function actionWhenFound(i) {
  console.log("Found him!");
  console.log("He is at " + i + " position");
}

findWaldo(["Alice", "Bob", "Waldo", "Winston"], actionWhenFound);