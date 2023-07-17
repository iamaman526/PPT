// 1. Create a custom sorting function which sorts an array of numbers in ascending order.


function sortArray(arr) {
   
    const sortedArr = [...arr];
 
    sortedArr.sort((a, b) => a - b);
  
    return sortedArr;
  }
  
  let myArray = [13, 6, 3, 1];
  let sortedArray = sortArray(myArray);
  console.log(sortedArray);
  
  