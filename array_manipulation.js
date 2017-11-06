// Returns an array consisting of the largest number from each sub array
function largestOfFour(arr) {
    /*
     var max = 0;                                       // keep track of current largest element
     var myArr = [];                                    // container for largest numbers

     for (var i = 0; i < arr.length; i++) {
       for (var j = 0; j < arr[i].length; j++) {
         if (arr[i][j] > max)                           // found new max
           max = arr[i][j];
       }
       myArr.push(max);                                 // place max in our array
       max = 0;                                         // reset max for next sub-array iterration
     }
    return myArr;
    */
    // Functional method
    return arr.map(function(group) {                    // map all items in the main array to a new array 
        return group.reduce(function(prev, curr) {      // reduce all the contents down to a single value
          return (prev > curr) ? prev : curr;           // the callback passed to the reduced method takes 
        });                                             // the previous and current values and returns the larger of the two
      });
  }