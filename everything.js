/**
 * Checks if every element in the array satisfies the provided predicate function using a loop.
 * @param {Array} array - The array to be checked.
 * @param {Function} predicateFunction - The predicate function used to test each element.
 * @returns {boolean} - Returns true if every element satisfies the predicate function, otherwise returns false.
 */
function every1(array, predicateFunction) {
    // Iterate through each element in the array
    for (let item of array) {
        // Apply the predicate function to the current element
        // If the predicate function returns false for any element, return false
        if (predicateFunction(item) == false) return false;
    }
    // If the predicate function returns true for every element, return true
    return true;
}


/**
 * Checks if every element in the array satisfies the provided predicate function using recursion.
 * @param {Array} array - The array to be checked.
 * @param {Function} predicateFunction - The predicate function used to test each element.
 * @returns {boolean} - Returns true if every element satisfies the predicate function, otherwise returns false.
 */
function every2(array, predicateFunction) {
    // Check if there is at least one element in the array for which the predicate function returns true
    if (array.some(predicateFunction)) {
        // Check the first element of the array
        if (predicateFunction(array[0])) {
            // If there are more than one element in the array, recursively call every2 with the first element removed
            if (array.length > 1) {
                return every2(array.slice(1), predicateFunction);
            } else {
                // If there's only one element in the array and the predicate function returns true, return true
                return true;
            }
        } else {
            // If the predicate function returns false for the first element, return false
            return false;
        }
    } else {
        // If the some method returns false, return false
        return false;
    }
}



function isEven(num) {
    return num % 2 === 0;
  }
  
  function isGreaterThanTen(num) {
    return num > 10;
  }
  
  let arr1 = [2, 4, 6, 8, 10];
  let arr2 = [2, 4, 6, 8, 11];

  console.log(every1(arr1, isEven)); 
  console.log(every1(arr2, isEven)); 
  
  console.log(every2(arr1, isEven)); 
  console.log(every2(arr2, isEven)); 
  
  console.log(every1(arr1, isGreaterThanTen)); 
  console.log(every1(arr2, isGreaterThanTen));
  
  console.log(every2(arr1, isGreaterThanTen));
  console.log(every2(arr2, isGreaterThanTen)); 

