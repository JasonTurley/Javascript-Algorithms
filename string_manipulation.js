
// Returns a string in reverse order
function reverseString(str) {
    // split the string into characters, reverse them, and join them back together
    return str.split('').reverse().join('');
}


// Returns the length of the longest word in the provided sentence
function findLongestWord(str) {
    // base case
    if (str.length == 1)
        return 1;

    let max = 0;        
    str = str.split(' ');                               //split sentence into array of individual words
    for (var i = 0; i < str.length; i++) {
        if (str[i].length > max)                        // compare current word to current max
            max = str[i].length;                        // if current word is larger, set it to new max
    }
    return max;
}


// Unit Testing
// if condition is not met, throw error message, otherwise the test has passed
function assert(condition, msg, msg2) {
    if (!condition) {
        msg = msg || "Assertion failed";
        if (typeof Error !== "undefined") {
            throw new Error(msg);
        }
        throw msg;
    }
    console.log(msg2);
}

// test reverseString
function test_reverseString() {
    var test_msg1 = "hello";
    assert(reverseString(test_msg1) == "olleh", "Failed: your function returned " + reverseString(test_msg1), "Passed test case 1");
}

test_reverseString();

// Test findLongestWord
function test_findLongestWord() {
    const test_msg1 = "The quick brown fox jumped over the lazy dog";
    const test_msg2 = "What is the average airspeed velocity of an unladen swallow";

    assert(findLongestWord(test_msg1) == 6, "Failed: your function returned " + findLongestWord(test_msg1), "Passed test case 1");
    assert(findLongestWord(test_msg2) == 8, "Failed: your function returned " + findLongestWord(test_msg2), "Passed test case 2");
}

test_findLongestWord();