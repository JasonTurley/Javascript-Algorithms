// Function: Returns the factorial of a provided number
// If the integer is represented with the letter n, a factorial is the product of all positive integers less than or equal to n
function factorial(n) {
    if (n === 0 || n === 1) {
        return n;
    }
    var m = n;
    for (var i = 1; i < n; i++) {
        m *= n - i;
    }
    return m;
}

// Function: recursive approach
function factorialRecursive(n) {
    if (n === 0 || n === 1) {
        return n;
    }
    return n * factorial(n - 1);
}