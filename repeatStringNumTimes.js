// Function: Repeat a given string (first argument) num times (second argument). Return an empty string if num is not a positive number.
// Return an empty string if num is not a positive number
function repeatStringNumTimes(str, num) {
    if (num > 0) {
        return str.repeat(num);
    }
    return '';
}

// Recursive Method
function repeatStringNumTimesRecursive(str, num) {
    if (num < 0) {
        return '';
    }
    if (num === 1) {
        return str;
    }
    return str + repeatStringNumTimesRecursive(str, --num);
}