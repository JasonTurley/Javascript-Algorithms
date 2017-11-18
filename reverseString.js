
// Returns a string in reverse order
function reverseString(str) {
    // split the string into characters, reverse them, and join them back together
    return str.split('').reverse().join('');
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

