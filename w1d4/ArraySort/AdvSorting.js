var students = [
  { id: 1, name: "bruce",    age: 40 },
  { id: 2, name: "zoidberg", age: 22 },
  { id: 3, name: "alex",     age: 22 },
  { id: 4, name: "alex",     age: 30 }
];

students.sort(function(a, b){
  var name1 = a.name;
  var name2 = b.name;

  if(name1 < name2){
    return -1;
  }
  if(name1 > name2){
    return 1;
  }
  if(name1 === name2){
      var age1 = a.age;
      var age2 = b.age;

        if (age1 < age2){
          return 1;
        }
  }
})

console.log(students);