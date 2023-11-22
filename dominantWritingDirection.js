var SCRIPTS = require('./scripts.js')

/**
 * Returns the script object that corresponds to the given Unicode character code.
 * @param {number} code - The Unicode character code.
 * @returns {Object | null} - The script object or null if not found.
 */
function characterScript(code) {
    // Loop through each script in the SCRIPTS array
    for (let script of SCRIPTS) {
        // Check if the code falls within the ranges of the script
        if (script.ranges.some(([from, to]) => {
                return code >= from && code < to;
            })) {
            // If the code is within the script's range, return the script object
            return script;
        }
    }
    // If no matching script is found, return null
    return null;
}


/**
 * Groups the items by the result of applying the given groupName function and counts the occurrences of each group.
 * @param {Array} items - The array of items to be grouped and counted.
 * @param {Function} groupName - The function used to group the items.
 * @returns {Array} - An array of objects containing the name of the group and the count of occurrences for each group.
 */
function countBy(items, groupName) {
    // Initialize an empty array to store the counts
    let counts = [];
    // Loop through each item in the items array
    for (let item of items) {
        // Get the group name by applying the groupName function to the item
        let name = groupName(item);
        // Find if the group name is already in the counts array
        let known = counts.findIndex(c => c.name == name);
        // If the group name is not found, add a new entry to the counts array
        if (known == -1) {
            counts.push({
                name,
                count: 1
            });
        } else {
            // If the group name is found, increment the count for that group
            counts[known].count++;
        }
    }
    // Return the array of group names and their respective counts
    return counts;
}



/**
 * Calculates the dominant writing direction in a string of text.
 * @param {string} string - The input string for which the dominant writing direction needs to be determined.
 * @returns {string} The dominant writing direction as a string ("ltr", "rtl", or "ttb").
 */
function dominantWritingDirection(string) {
    // Convert the string to an array of Unicode code points
    let stringCodes = [];
    for (let i = 0; i < string.length; i++) {
        stringCodes.push(string.codePointAt(i));
    }

    // Count the characters for each writing direction and filter out any characters with undefined direction
    let charsScripts = countBy(stringCodes, characterScript).filter(obj => {return obj.name != null;});

    // Calculate the total count of characters
    let totalCount = 0;

    // Map the writing direction and count of characters into an array
    let writingDirection = charsScripts.map((obj) => {
        totalCount += obj.count;
        return {
            direction: obj.name.direction,
            count: obj.count
        };
    });

    // Calculate the percentage of characters for each writing direction
    let writingDirectionPercent = writingDirection.map((obj) => {
        obj.percentage = Math.round(obj.count  * 100 / totalCount);
        return obj;
    })

    // Find the dominant writing direction based on the highest percentage
    let dominantDirectionPercentage = 0;
    let dominantDirection = "";
    for (let obj of writingDirectionPercent) {
        // console.log(obj.direction + ": " + obj.percentage + "%");
        if (obj.percentage > dominantDirectionPercentage) {
            dominantDirectionPercentage = obj.percentage;
            dominantDirection = obj.direction;
        }
    }
    return dominantDirection;
}


console.log(dominantWritingDirection("KADKشسسشيسيششسيDAKDشمسنيتسadssadمشن"));

