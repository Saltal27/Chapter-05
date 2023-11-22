/**
 * Simulates a for loop statement using a higher-order function.
 * @param {number} value - The initial value for the loop
 * @param {function} testFunction - A function that returns a boolean and is used to check whether to continue the loop
 * @param {function} updateFunction - A function that updates the loop value for the next iteration
 * @param {function} bodyFunction - A function that is called on each iteration of the loop
 */
function myLoop(value, testFunction, updateFunction, bodyFunction) {
    // Start a for loop with initial value as 'value'
    // Check if the testFunction returns true for the current value
    // If true, continue the loop; if false, stop the loop
    for (let i = value; testFunction(i); i = updateFunction(i)) {
        // Call the bodyFunction with the current value
        bodyFunction(i);
    }
}


function testFunction(value) {
    return value <= 10;
}

function updateFunction(value) {
    return value + 2;
}

function bodyFunction(value) {
    console.log(value);
}

myLoop(1, testFunction, updateFunction, bodyFunction);