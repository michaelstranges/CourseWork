var myList = [];

module.exports = {
  listStore: function(num){
      myList.push(num)
      this.listSort(myList)
    return myList;
  },
  listSort: function(myList){
    myList.sort(function(a,b){
      return a - b;
    })
  },
  printList: function(){
    console.log(myList);
  }
}