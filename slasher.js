// Returns the remaining elements of an array chopping of n elements from the head (start of array)

function slasher(arr, howMany) {
    // Method 1: slice off elements = to howMany from the array
    // return arr.slice(howMany);
    // Method 2: remove elements starting from head of array
    arr.splice(0, howMany);

    return arr;
}