/**
 * Flattens an array of arrays into a single array that has all the elements of the original arrays.
 * @param {Array<Array>} arrayOfArrays - An array of arrays to be flattened.
 * @returns {Array} - A single array containing all the elements of the original arrays.
 */
function flatten(arrayOfArrays) {
    // Use the reduce method to iterate through each array in the arrayOfArrays
    arrayOfArrays = arrayOfArrays.reduce((array1, array2) => {
        // Use the concat method to combine the arrays into a single array
        return array1.concat(array2);
    });
    return arrayOfArrays; // Return the flattened array
}


console.log(flatten([[], [1, 2, 3, "a", "Z"], [10, "T"], [3]]));